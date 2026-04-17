import { NavLink } from 'react-router-dom';
import { Globe, MessageCircle, Camera, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-bg-dark pt-16 pb-8 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                BULLDOG<span className="text-primary-500">EX</span>
              </span>
            </NavLink>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Premium campus essentials and official NU merchandise designed for the modern student. Elevate your university experience with style.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-primary-500 hover:text-bg-dark transition-all duration-300">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-primary-500 hover:text-bg-dark transition-all duration-300">
                <Camera className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-primary-500 hover:text-bg-dark transition-all duration-300">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Collection</h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/products" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/products?category=apparel" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  Campus Apparel
                </NavLink>
              </li>
              <li>
                <NavLink to="/products?category=essentials" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  Daily Essentials
                </NavLink>
              </li>
              <li>
                <NavLink to="/products?category=study" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  Study Supplies
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/about" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/auth/signin" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  Student Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/auth/signup" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  Join Community
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0" />
                <span>National University Campus, Manila, Philippines</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span>+63 2 8712 1900</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span>support@bulldogex.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © 2024 BulldogEx Official Store. Built for the NU Community.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



