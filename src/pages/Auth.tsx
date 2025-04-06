import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["buyer", "seller"]),
  gstNumber: z.string().optional(),
  businessPortfolioLink: z.string().url("Please enter a valid URL").optional(),
}).refine(data => {
  if (data.role === "seller") {
    return !!data.gstNumber && !!data.businessPortfolioLink;
  }
  return true;
}, {
  message: "GST Number and Business Portfolio Link are required for sellers",
  path: ["role"],
});

const Auth = () => {
  const { type } = useParams<{ type: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(type === "register" ? "register" : "login");
  
  useEffect(() => {
    if (type === "register" || type === "login") {
      setActiveTab(type);
    }
  }, [type]);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "buyer",
      gstNumber: "",
      businessPortfolioLink: "",
    },
    mode: "onChange",
  });

  const selectedRole = registerForm.watch("role");

  const onLogin = (data: z.infer<typeof loginSchema>) => {
    toast({
      title: "Login Successful",
      description: `Welcome back!`,
    });
    console.log("Login data:", data);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const onRegister = (data: z.infer<typeof registerSchema>) => {
    toast({
      title: "Registration Successful",
      description: `Your ${data.role} account has been created.`,
    });
    console.log("Register data:", data);
    
    setTimeout(() => {
      if (data.role === "buyer") {
        navigate("/");
      } else if (data.role === "seller") {
        navigate(`/account-setup/${data.role}`);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-md mx-auto px-4">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                {activeTab === "login" ? "Login" : "Create an Account"}
              </CardTitle>
              <CardDescription className="text-center">
                {activeTab === "login" 
                  ? "Enter your credentials to access your account" 
                  : "Register as a buyer or seller to get started"}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">Login</Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="register">
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
                      <FormField
                        control={registerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>I want to</FormLabel>
                            <div className="grid grid-cols-2 gap-4">
                              <Button
                                type="button"
                                variant={field.value === "buyer" ? "default" : "outline"}
                                className={field.value === "buyer" ? "bg-primary" : ""}
                                onClick={() => registerForm.setValue("role", "buyer")}
                              >
                                Buy Products
                              </Button>
                              <Button
                                type="button"
                                variant={field.value === "seller" ? "default" : "outline"}
                                className={field.value === "seller" ? "bg-primary" : ""}
                                onClick={() => registerForm.setValue("role", "seller")}
                              >
                                Sell Products
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {selectedRole === "seller" && (
                        <>
                          <FormField
                            control={registerForm.control}
                            name="gstNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>GST Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your GST number" {...field} />
                                </FormControl>
                                <FormDescription>
                                  Required for seller verification
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={registerForm.control}
                            name="businessPortfolioLink"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Business Portfolio Link <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                  <Input 
                                    type="url" 
                                    placeholder="https://your-business-site.com" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormDescription>
                                  Link to your business website or portfolio
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      )}
                      
                      <Button type="submit" className="w-full">Create Account</Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-2">
              <div className="text-sm text-center text-gray-500">
                {activeTab === "login" 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <Link 
                  to={activeTab === "login" ? "/auth/register" : "/auth/login"}
                  className="text-primary hover:underline"
                  onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
                >
                  {activeTab === "login" ? "Register" : "Login"}
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
