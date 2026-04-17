import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, Share2, Heart, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-black text-white">404</h1>
          <p className="text-gray-400">Product not found in our collection.</p>
          <Button to="/products">Return to Catalog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-12">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden glass border-white/10 group">
              <img 
                src={product.image} 
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button className="glass p-3 rounded-2xl text-white hover:text-primary-500 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="glass p-3 rounded-2xl text-white hover:text-primary-500 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Image Gallery Thumbnails (Placeholder for now) */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl glass border-white/5 overflow-hidden cursor-pointer hover:border-primary-500/50 transition-colors opacity-50 hover:opacity-100">
                  <img src={product.image} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-primary-500">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-[10px] font-bold text-gray-500 ml-1">(48 Reviews)</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                {product.title}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-white">{product.price}</span>
                <span className="text-gray-500 line-through text-lg">PHP {parseInt(product.price.replace(/\D/g, '')) + 200}</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                {product.content[0]}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {['Official NU Licensed', 'Premium Build Quality', 'Campus Optimized', 'Limited Edition'].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-primary-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 space-y-6 border-t border-white/5">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 py-5 text-lg group">
                  <ShoppingBag className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                  Initialize Purchase
                </Button>
                <div className="flex gap-4">
                  <div className="flex items-center glass px-6 rounded-2xl">
                    <button className="text-gray-500 hover:text-white transition-colors">-</button>
                    <span className="mx-4 text-white font-bold w-4 text-center">1</span>
                    <button className="text-gray-500 hover:text-white transition-colors">+</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5">
                    <ShieldCheck className="h-5 w-5 text-primary-500" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Secure <br /> Transaction
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5">
                    <Truck className="h-5 w-5 text-primary-500" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Campus <br /> Express Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto space-y-12 text-center md:text-left">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Product Narrative</h2>
            <div className="space-y-8">
              {product.content.slice(1).map((para, i) => (
                <p key={i} className="text-xl text-gray-400 leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;



