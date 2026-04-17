import { ArrowLeft, Sparkles, Filter } from 'lucide-react';
import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-500/10 blur-[120px] rounded-full -z-10"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                <Sparkles className="h-3 w-3" />
                <span>Premium Collection</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                THE CATALOG
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Explore our curated selection of official NU merchandise and campus essentials. Designed for excellence, built for Bulldogs.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button to="/" variant="secondary" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Home
              </Button>
              <button className="glass p-3 rounded-xl text-gray-400 hover:text-white transition-colors">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12 bg-bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-8">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Showing <span className="text-white">{products.length}</span> Exclusive Items
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sort by:</span>
              <select className="bg-bg-dark text-xs font-bold text-white outline-none cursor-pointer rounded px-1">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <ProductList products={products} />
        </div>
      </section>


    </div>
  );
}

export default ProductListPage;



