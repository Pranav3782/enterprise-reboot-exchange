
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import { ArrowLeft } from 'lucide-react';

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <Link to="/" className="text-gray-600 hover:text-primary flex items-center transition-colors text-sm">
              <ArrowLeft size={16} className="mr-1" />
              Back to home
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h1>
            <p className="text-gray-600">
              Explore all our business categories to find equipment, inventory, and resources
              that match your enterprise needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
