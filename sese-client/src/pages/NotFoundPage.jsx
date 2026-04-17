import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Info, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <p className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm animate-pulse">
            Error 404
          </p>
          <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter">
            LOST IN <span className="text-gradient">SPACE?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off campus. Let's get you back to the collection.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/" variant="secondary" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
          <Button to="/products">
            Browse Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          {[
            { 
              title: "Home", 
              desc: "Return to our main store front", 
              icon: Home, 
              link: "/" 
            },
            { 
              title: "Collection", 
              desc: "Explore latest campus merch", 
              icon: ShoppingBag, 
              link: "/products" 
            },
            { 
              title: "About", 
              desc: "Learn about our mission", 
              icon: Info, 
              link: "/about" 
            }
          ].map((item, i) => (
            <NavLink 
              key={i}
              to={item.link}
              className="glass p-6 rounded-2xl group transition-all duration-300 hover:border-primary-500/50 hover:bg-bg-surface-lighter"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;



