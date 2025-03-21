
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { products } from '../data/products';

interface SearchBarProps {
  onSearch?: () => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim().length > 0) {
      // Simulate search results
      const results = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(true);
    }
  };

  const handleProductClick = (slug: string) => {
    if (onSearch) onSearch();
    navigate(`/product/${slug}`);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, categories, or sellers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Search
        </button>
      </form>
      
      {isSearching && (
        <div className="mt-6 space-y-4 animate-fade-up">
          <h3 className="text-lg font-medium">Search Results</h3>
          <div className="space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map(product => (
                <div 
                  key={product.id}
                  className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleProductClick(product.slug)}
                >
                  <h4 className="font-medium">{product.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                  <p className="text-sm font-medium mt-1">${product.price.toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found for "{searchQuery}"</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
