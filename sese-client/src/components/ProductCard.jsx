import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group relative flex flex-col glass overflow-hidden rounded-[32px] transition-all duration-500 hover:border-primary-500/50 hover:bg-bg-surface-lighter hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent z-10"></div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
            {product.category}
          </span>
        </div>

        {/* Action Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Button to={`/products/${product.name}`} className="w-full">
            Quick View <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-black text-white leading-tight group-hover:text-primary-500 transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 text-primary-500">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-[10px] font-bold">4.9</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
          {product.content[0]}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-black text-white">
            {product.price}
          </span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;



