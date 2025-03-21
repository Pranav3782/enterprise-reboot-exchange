
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../data/categories';
import { getProductsByCategory } from '../data/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const productCount = getProductsByCategory(category.id).length;

  return (
    <Link to={`/category/${category.slug}`} className="group">
      <div className="relative overflow-hidden rounded-xl glass-card product-card">
        <div className="aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />
          <img 
            src={category.image} 
            alt={category.name}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'image-loaded' : 'image-loading'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
          <h3 className="text-white font-semibold text-lg">{category.name}</h3>
          <span className="text-white/80 text-sm">{productCount} items</span>
        </div>
      </div>
      <div className="mt-2 px-1">
        <p className="text-sm text-gray-600">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
