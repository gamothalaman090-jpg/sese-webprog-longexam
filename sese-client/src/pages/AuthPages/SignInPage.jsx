import { Link } from 'react-router-dom';
import { Mail, Lock, Globe, Smartphone, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';

const inputClasses =
  'w-full bg-bg-surface-lighter border border-white/5 rounded-2xl px-12 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10';

const SignInPage = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-3">
        <h1 className="text-4xl font-black tracking-tight text-white">Welcome back</h1>
        <p className="text-gray-400">
          Enter your details to access your premium student account.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="signin-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
            Student Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              id="signin-email"
              type="email"
              placeholder="student@nu-manila.edu.ph"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label htmlFor="signin-password" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Security Key
            </label>
            <button type="button" className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-500 hover:text-primary-400 transition-colors">
              Forgot?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              id="signin-password"
              type="password"
              placeholder="••••••••"
              className={inputClasses}
            />
          </div>
        </div>

        <Button type="submit" className="w-full py-4 text-sm">
          Authorize Access <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.3em]">
            <span className="bg-bg-dark lg:bg-bg-surface px-4 text-gray-500">Fast Access</span>
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
        New to BulldogEx?{' '}
        <Link 
          to="/auth/signup" 
          className="text-white font-bold hover:text-primary-500 transition-colors"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;



