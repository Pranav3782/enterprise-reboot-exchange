
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuredProducts = getFeaturedProducts();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-2">
            <span className="text-primary text-sm font-medium">Exclusive Offers</span>
            <h2 className="text-3xl font-bold">Featured Listings</h2>
          </div>
          <Link 
            to="/featured" 
            className="hidden md:flex items-center text-primary hover:text-primary/80 font-medium group"
          >
            View all 
            <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-center mt-10 md:hidden">
          <Link 
            to="/featured" 
            className="flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View all featured listings
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
