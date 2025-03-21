
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary text-sm font-medium">Browse Categories</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Find What Your Business Needs</h2>
              <p className="text-gray-600">
                Explore our wide range of business categories to find the equipment, inventory, and resources your enterprise needs to thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categories.slice(0, 6).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
            
            {categories.length > 6 && (
              <div className="flex justify-center mt-10">
                <Link 
                  to="/categories" 
                  className="flex items-center text-primary hover:text-primary/80 font-medium group"
                >
                  View all categories
                  <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </section>
        
        <FeaturedProducts />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <span className="text-primary text-sm font-medium">How It Works</span>
                <h2 className="text-3xl font-bold">Connecting Businesses for Smarter Resource Utilization</h2>
                <p className="text-gray-600">
                  Enterprise Restart Platform connects businesses with unused resources to those who need them, creating a sustainable ecosystem that benefits everyone involved.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">List Your Items</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Easily list your unused business equipment, excess inventory, or other resources on our platform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Connect with Buyers</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Interested buyers will contact you directly about your listings to learn more details.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Complete the Transaction</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Finalize your business-to-business transaction with the buyer directly.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to="/how-it-works" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center button-hover-effect"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-elevated">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Business transaction" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-elevated hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Business handshake" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
