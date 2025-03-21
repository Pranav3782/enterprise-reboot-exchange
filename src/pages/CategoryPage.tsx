
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, Filter, ChevronDown } from 'lucide-react';
import { categories } from '../data/categories';
import { getProductsByCategory, Product } from '../data/products';

const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Price: Low to High', value: 'priceLow' },
  { label: 'Price: High to Low', value: 'priceHigh' },
];

const conditions = ['New', 'Like New', 'Good', 'Fair', 'Refurbished'];

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState(categories.find(c => c.slug === slug));
  const [sortBy, setSortBy] = useState('newest');
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (slug) {
      const categoryFound = categories.find(c => c.slug === slug);
      setCategory(categoryFound);
      
      if (categoryFound) {
        const categoryProducts = getProductsByCategory(categoryFound.id);
        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
        
        // Calculate price range
        if (categoryProducts.length > 0) {
          const prices = categoryProducts.map(p => p.price);
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
          setPriceRange([minPrice, maxPrice]);
        }
      }
    }
  }, [slug]);
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Apply condition filter
    if (selectedConditions.length > 0) {
      result = result.filter(product => 
        selectedConditions.includes(product.condition)
      );
    }
    
    // Apply sorting
    if (sortBy === 'newest') {
      result.sort((a, b) => 
        new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime()
      );
    } else if (sortBy === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [products, selectedConditions, sortBy]);
  
  const toggleCondition = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <Link to="/" className="text-primary hover:underline flex items-center justify-center">
              <ArrowLeft size={18} className="mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <Link to="/" className="text-gray-600 hover:text-primary flex items-center transition-colors text-sm">
              <ArrowLeft size={16} className="mr-1" />
              Back to all categories
            </Link>
          </div>
          
          <div className="relative py-6 md:py-10 px-4 md:px-8 rounded-2xl overflow-hidden mb-10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
              <p className="text-white/80 text-lg">{category.description}</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="hidden lg:block">
                  <h2 className="font-semibold text-lg mb-4">Filters</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Condition</h3>
                      <div className="space-y-2">
                        {conditions.map(condition => (
                          <label key={condition} className="flex items-center">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-primary focus:ring-primary/25 mr-2"
                              checked={selectedConditions.includes(condition)}
                              onChange={() => toggleCondition(condition)}
                            />
                            <span className="text-sm">{condition}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:hidden">
                  <button 
                    onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg"
                  >
                    <span className="flex items-center">
                      <Filter size={16} className="mr-2" />
                      Filters
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {mobileFiltersOpen && (
                    <div className="mt-4 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium mb-2">Condition</h3>
                      <div className="space-y-2">
                        {conditions.map(condition => (
                          <label key={condition} className="flex items-center">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-primary focus:ring-primary/25 mr-2"
                              checked={selectedConditions.includes(condition)}
                              onChange={() => toggleCondition(condition)}
                            />
                            <span className="text-sm">{condition}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-gray-600">
                    {filteredProducts.length} items
                  </span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border-0 focus:ring-0"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No Products Found</h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or check back later for new listings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
