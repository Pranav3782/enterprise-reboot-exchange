
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Product } from '../data/products';
import { getSellerById } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const seller = getSellerById(product.sellerId);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group animate-scale-in">
      <div className="overflow-hidden rounded-xl glass-card product-card">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'image-loaded' : 'image-loading'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {product.featured && (
            <div className="absolute top-3 left-3 bg-primary px-3 py-1 rounded-full text-white text-xs font-medium">
              Featured
            </div>
          )}
          
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
            {product.condition}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-base sm:text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <span className="font-semibold text-base sm:text-lg">
              ${product.price.toLocaleString()}
            </span>
          </div>
          
          <div className="mt-1 text-gray-600 text-sm">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{product.location}</span>
            </div>
          </div>
          
          <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
            <div>Listed: {formatDate(product.listedDate)}</div>
            <div>
              Seller: <span className="text-primary">{seller?.companyName}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
