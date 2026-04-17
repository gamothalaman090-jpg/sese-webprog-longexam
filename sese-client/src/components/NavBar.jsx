import { NavLink } from 'react-router-dom';
import { ShoppingBag, User, LogIn, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Collection', to: '/products' },
  { label: 'About', to: '/about' },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClassName = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary-500' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 bg-bg-dark/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-primary-500 opacity-20 blur-sm group-hover:opacity-40 transition-opacity"></div>
            <img 
              src={logo} 
              alt="BulldogEx Logo" 
              className="relative h-10 w-10 rounded-full border border-white/20 bg-bg-surface object-contain" 
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-xl font-black tracking-tight text-white">
              BULLDOG<span className="text-primary-500">EX</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              NU Official Merch
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              end={link.to === '/'} 
              className={navLinkClassName}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-primary-500 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Auth & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <NavLink 
              to="/auth/signin"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              aria-label="Sign In"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </NavLink>
            <NavLink 
              to="/auth/signup"
              className="relative group overflow-hidden rounded-full bg-primary-500 px-6 py-2 text-sm font-bold text-bg-dark transition-all hover:bg-primary-400 hover:shadow-[0_0_20px_rgba(218,184,77,0.4)]"
              aria-label="Sign Up"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-bg-dark/95 backdrop-blur-2xl border-b border-white/10 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
              <NavLink 
                to="/auth/signin"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-white"
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </NavLink>
              <NavLink 
                to="/auth/signup"
                className="flex items-center justify-center rounded-xl bg-primary-500 py-3 font-bold text-bg-dark"
              >
                Sign Up
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;



