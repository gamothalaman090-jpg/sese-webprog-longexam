import { Outlet, NavLink } from 'react-router-dom';
import { ShieldCheck, Sparkles } from 'lucide-react';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-bg-dark text-white font-sans selection:bg-primary-500/30">
      <div className="grid min-h-screen w-full lg:grid-cols-[1.2fr_1fr]">
        {/* Left Side - Brand Section */}
        <div className="relative hidden lg:flex items-center justify-center p-12 overflow-hidden border-r border-white/5">
          {/* Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 flex w-full max-w-lg flex-col space-y-12">
            {/* Logo Section */}
            <div className="space-y-6">
              <NavLink to="/" className="flex items-center gap-2">
                <span className="text-4xl font-black tracking-tight text-white">
                  BULLDOG<span className="text-primary-500">EX</span>
                </span>
              </NavLink>
              <h2 className="text-5xl font-black leading-[1.1] tracking-tight">
                ELEVATE YOUR <br />
                <span className="text-gradient italic">CAMPUS LIFE.</span>
              </h2>
            </div>

            {/* Brand Message */}
            <div className="glass p-8 rounded-[32px] space-y-4 border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 text-primary-500">
                <ShieldCheck className="h-6 w-6" />
                <span className="font-bold uppercase tracking-widest text-xs">Official Store</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join thousands of NU students and access premium merchandise, exclusive drops, and a simplified shopping experience.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-dark bg-bg-surface-lighter flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Trusted by <span className="text-white font-bold">4,000+</span> students
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-12 left-12 flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Sparkles className="h-3 w-3 text-primary-500" />
            <span>BulldogEx Premium Experience</span>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <main className="flex items-center justify-center bg-bg-surface/30 p-8 sm:p-12 lg:p-20 relative">
          {/* Mobile Logo */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 lg:hidden">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                BULLDOG<span className="text-primary-500">EX</span>
              </span>
            </NavLink>
          </div>

          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;



