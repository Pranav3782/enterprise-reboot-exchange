
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Enterprise Restart</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/featured" className="text-sm font-medium hover:text-primary transition-colors">
              Featured
            </Link>
            <Link to="/sellers" className="text-sm font-medium hover:text-primary transition-colors">
              Sellers
            </Link>
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              <Search size={18} />
            </button>
          </nav>
          
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={() => setSearchOpen(true)}>
              <Search size={20} />
            </button>
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-6">
            <Link to="/" className="text-xl font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Enterprise Restart
            </Link>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 p-6">
            <Link to="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/categories" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/featured" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Featured
            </Link>
            <Link to="/sellers" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Sellers
            </Link>
          </nav>
        </div>
      )}
      
      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl">
            <div className="flex justify-end mb-4">
              <button onClick={() => setSearchOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <SearchBar onSearch={() => setSearchOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
