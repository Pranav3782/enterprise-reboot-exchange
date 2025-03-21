
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Enterprise Restart</h3>
            <p className="text-gray-600 text-sm">
              The premier marketplace for entrepreneurs to buy and sell quality business equipment, inventory, and resources.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/office-equipment" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Office Equipment
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/inventory-stock" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Inventory & Stock
                </Link>
              </li>
              <li>
                <Link to="/category/manufacturing-equipment" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Manufacturing Equipment
                </Link>
              </li>
              <li>
                <Link to="/category/software-licenses" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Software & Licenses
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Sellers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Enterprise Restart Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
