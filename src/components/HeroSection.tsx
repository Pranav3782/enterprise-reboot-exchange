
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Business Equipment" 
          className={`object-cover w-full h-full transition-all duration-700 ${isLoaded ? 'image-loaded' : 'image-loading'}`}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className={`transition-all duration-500 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-gray-900">
              Restart. Renew. <br />
              <span className="text-primary">Reimagine Business.</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-500 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              The premier marketplace for entrepreneurs to buy and sell quality business equipment, inventory, and resources.
            </p>
          </div>
          
          <div className={`pt-4 transition-all duration-500 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link 
              to="/categories" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 group button-hover-effect inline-flex"
            >
              Browse Categories
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
