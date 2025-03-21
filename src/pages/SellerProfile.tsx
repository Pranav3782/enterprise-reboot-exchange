
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Star } from 'lucide-react';
import { getProductsBySeller } from '../data/products';
import { sellers } from '../data/sellers';
import ProductCard from '../components/ProductCard';

const SellerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [seller, setSeller] = useState(sellers.find(s => s.id === id));
  const [sellerProducts, setSellerProducts] = useState(getProductsBySeller(id || ''));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const sellerFound = sellers.find(s => s.id === id);
      setSeller(sellerFound);
      
      if (sellerFound) {
        setSellerProducts(getProductsBySeller(sellerFound.id));
      }
    }
  }, [id]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };
  
  if (!seller) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Seller Not Found</h2>
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
              Back to home
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="h-40 bg-gray-100 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            <div className="px-6 md:px-8 relative">
              <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
                <div className="h-32 w-32 rounded-xl overflow-hidden border-4 border-white shadow-subtle bg-white">
                  <img 
                    src={seller.logo} 
                    alt={seller.companyName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6 md:mb-2">
                  <h1 className="text-2xl font-bold">{seller.companyName}</h1>
                  <div className="flex items-center mt-1">
                    <MapPin size={16} className="text-gray-500 mr-1" />
                    <span className="text-gray-600 text-sm">{seller.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                <div className="col-span-2">
                  <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold mb-4">About {seller.companyName}</h2>
                    <p>{seller.description}</p>
                  </div>
                  
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Mail size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Email</div>
                          <a href={`mailto:${seller.email}`} className="font-medium text-primary hover:underline">
                            {seller.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Phone size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Phone</div>
                          <a href={`tel:${seller.phone}`} className="font-medium text-primary hover:underline">
                            {seller.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <MapPin size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Location</div>
                          <div className="font-medium">{seller.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Seller Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contact Person:</span>
                        <span className="font-medium">{seller.contactPerson}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Rating:</span>
                        <div className="flex items-center">
                          <span className="font-medium mr-1">{seller.rating}</span>
                          <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since:</span>
                        <span className="font-medium">{formatDate(seller.joinedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Listings:</span>
                        <span className="font-medium">{sellerProducts.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Active Listings from {seller.companyName}</h2>
            
            {sellerProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sellerProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-gray-100 rounded-lg">
                <Calendar size={40} className="mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium mb-1">No Active Listings</h3>
                <p className="text-gray-600">
                  This seller doesn't have any active listings at the moment.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SellerProfile;
