import { Link } from 'react-router-dom';
import { Mail, Lock, Globe, Smartphone, ArrowRight, User } from 'lucide-react';
import Button from '../../components/Button';

const inputClasses =
  'w-full bg-bg-surface-lighter border border-white/5 rounded-2xl px-12 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10';

const SignUpPage = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-3">
        <h1 className="text-4xl font-black tracking-tight text-white">Join the Pack</h1>
        <p className="text-gray-400">
          Create an account to access exclusive NU student privileges.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                id="first-name"
                type="text"
                placeholder="John"
                className={inputClasses}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                id="last-name"
                type="text"
                placeholder="Doe"
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
            Student Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              id="signup-email"
              type="email"
              placeholder="student@nu-manila.edu.ph"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-password" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
            Security Key
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              id="signup-password"
              type="password"
              placeholder="••••••••"
              className={inputClasses}
            />
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-500 group cursor-pointer">
          <input 
            type="checkbox" 
            className="h-5 w-5 rounded-lg bg-bg-surface-lighter border border-white/5 accent-primary-500 mt-0.5 transition-colors group-hover:border-primary-500/50"
            required
          />
          <span className="leading-relaxed">
            I agree to the <a href="#" className="text-white hover:text-primary-500 underline underline-offset-4 decoration-primary-500/30">Terms</a> and <a href="#" className="text-white hover:text-primary-500 underline underline-offset-4 decoration-primary-500/30">Privacy Policy</a>.
          </span>
        </label>

        <Button type="submit" className="w-full py-4 text-sm">
          Initialize Account <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.3em]">
            <span className="bg-bg-dark lg:bg-bg-surface px-4 text-gray-500">Quick Sign Up</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/5 py-3 text-xs font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/10"
          >
            <Globe className="h-4 w-4" /> Google
          </button>
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/5 py-3 text-xs font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/10"
          >
            <Smartphone className="h-4 w-4" /> Apple
          </button>
        </div>
      </form>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link 
          to="/auth/signin" 
          className="text-white font-bold hover:text-primary-500 transition-colors"
        >
          Sign in here
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;



