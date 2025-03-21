
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, ArrowLeft, User, Calendar, Box, Tag, Truck } from 'lucide-react';
import { getProductBySlug, getSellerById } from '../data/products';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<ReturnType<typeof getProductsByCategory>>([]);
  const product = getProductBySlug(slug || '');
  const seller = product ? getSellerById(product.sellerId) : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (product) {
      // Get related products from the same category
      const related = getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [slug, product]);
  
  if (!product || !seller) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
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
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <Link to="/" className="text-gray-600 hover:text-primary flex items-center transition-colors text-sm">
              <ArrowLeft size={16} className="mr-1" />
              Back to listings
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`rounded-lg overflow-hidden w-20 h-20 flex-shrink-0 transition-all ${
                        activeImage === index 
                          ? 'ring-2 ring-primary' 
                          : 'ring-1 ring-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div>
                {product.featured && (
                  <span className="inline-block bg-primary text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    Featured
                  </span>
                )}
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="flex items-center mt-2">
                  <MapPin size={16} className="text-gray-500 mr-1" />
                  <span className="text-gray-600 text-sm">{product.location}</span>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold">${product.price.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <h2 className="font-semibold mb-3">Details</h2>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="flex items-center text-sm">
                      <Tag size={16} className="text-gray-500 mr-2" />
                      <span>Condition:</span>
                    </div>
                    <div className="text-sm font-medium">{product.condition}</div>
                    
                    <div className="flex items-center text-sm">
                      <Box size={16} className="text-gray-500 mr-2" />
                      <span>Quantity:</span>
                    </div>
                    <div className="text-sm font-medium">{product.quantity}</div>
                    
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      <span>Listed:</span>
                    </div>
                    <div className="text-sm font-medium">{formatDate(product.listedDate)}</div>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-semibold mb-2">Description</h2>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-14 w-14 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={seller.logo} 
                      alt={seller.companyName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{seller.companyName}</h3>
                    <p className="text-sm text-gray-600">Joined {formatDate(seller.joinedDate)}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User size={16} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{seller.contactPerson}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-500 mr-2 flex-shrink-0" />
                    <a href={`mailto:${seller.email}`} className="text-sm text-primary hover:underline">
                      {seller.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-500 mr-2 flex-shrink-0" />
                    <a href={`tel:${seller.phone}`} className="text-sm text-primary hover:underline">
                      {seller.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{seller.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link 
                    to={`/seller/${seller.id}`} 
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Seller Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <section className="mt-16 md:mt-24">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
