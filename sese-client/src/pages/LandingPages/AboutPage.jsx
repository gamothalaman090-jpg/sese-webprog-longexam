import { Package, ShoppingCart, MapPin, Clock, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import products from '../../assets/product-content';

const AboutPage = () => {

  const featured = products.slice(0, 4);

  return (
    <div className="flex w-full flex-col">


      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl border-white/5 p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

              <div className="shrink-0">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                  <div className="absolute inset-0 bg-primary-500/15 rounded-full blur-2xl"></div>
                  <img
                    src={logo}
                    alt="BulldogEx Logo"
                    className="relative z-10 w-full h-full rounded-full border-2 border-primary-500/30 p-1.5 bg-bg-dark object-cover"
                  />
                </div>
              </div>


              <div className="flex-1 space-y-5 text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                  About Store
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  A campus shop focused on useful products and simple ordering.
                </h1>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                  BulldogEx Shop keeps the low-fidelity layout system while providing
                  clear product imagery, quick actions, and straightforward store
                  information.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                  <Button to="/" variant="primary" className="px-6 py-2.5 text-[10px]">
                    Back Home
                  </Button>
                  <Button to="/products" variant="secondary" className="px-6 py-2.5 text-[10px]">
                    Lean Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-1">
              Feat History
            </p>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Quick store blocks
            </h2>
          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { count: '08', label: 'Items', icon: Package },
              { count: '06', label: 'Categories', icon: ShoppingCart },
              { count: '03', label: 'Pickup Slots', icon: MapPin },
              { count: '24', label: 'Hours', icon: Clock },
            ].map((block, idx) => (
              <div
                key={idx}
                className="glass p-7 rounded-2xl group transition-all duration-300 hover:border-primary-500/40 hover:bg-bg-surface-lighter cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-5 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                  <block.icon className="h-5 w-5" />
                </div>
                <p className="text-4xl font-black text-white leading-none tracking-tight mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {block.count}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {block.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-1">
              Store Flow
            </p>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Stacked shopping wireframe
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              {[
                {
                  title: 'Curated Catalog',
                  desc: 'Products are grouped by daily-use or category-set focus.',
                },
                {
                  title: 'Simple Checkout',
                  desc: 'Fewer page steps and a clean, fast-action button layout to find.',
                },
                {
                  title: 'Pickup Ready',
                  desc: 'Order information stays direct. No complex date-range pickup update systems.',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl group transition-all duration-300 hover:border-primary-500/40 hover:bg-bg-surface-lighter cursor-default"
                >
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>


            <div className="glass rounded-2xl border-white/5 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-5">
                Featured Item
              </p>
              <div className="grid grid-cols-2 gap-4">
                {featured.map((product, idx) => (
                  <a
                    key={idx}
                    href={`/products/${product.name}`}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-bg-surface-lighter border border-white/5 hover:border-primary-500/40 transition-all duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <p className="text-xs font-bold text-white truncate">{product.title}</p>
                      <p className="text-[10px] text-primary-400 font-semibold">{product.price}</p>
                    </div>
                  </a>
                ))}
              </div>


              <div className="mt-5 flex justify-start">
                <Button to="/products" variant="secondary" className="px-5 py-2 text-[10px] group/link">
                  View Products <ArrowRight className="ml-1.5 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
