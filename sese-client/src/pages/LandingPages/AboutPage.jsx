import { Sparkles, Target, Users, ShieldCheck, ArrowRight, Zap, GraduationCap } from 'lucide-react';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-500/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                <Sparkles className="h-3 w-3" />
                <span>Our Identity</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
                MORE THAN JUST <br /> A <span className="text-gradient">STORE.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                BulldogEx is the definitive destination for premium campus lifestyle. We curate essentials that empower National University students to perform at their peak.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button to="/products" className="px-8">View Collection</Button>
                <Button to="/" variant="secondary">Back Home</Button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full group-hover:bg-primary-500/30 transition-all duration-700"></div>
              <div className="relative glass p-12 rounded-[60px] border-white/10 flex flex-col items-center justify-center text-center space-y-8">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-ping"></div>
                  <img 
                    src={logo} 
                    alt="BulldogEx" 
                    className="relative z-10 w-48 h-48 rounded-full border-4 border-primary-500/50 p-2 bg-bg-dark"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">BulldogEx Premium</h3>
                  <p className="text-primary-500 font-bold text-xs uppercase tracking-widest mt-1">Official NU Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="h-8 w-8 text-primary-500" />,
                title: "Curated Excellence",
                desc: "We don't just sell products; we curate experiences. Every item in our catalog undergoes rigorous selection for quality and relevance."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary-500" />,
                title: "Official Authenticity",
                desc: "100% official merchandise. We represent the National University brand with the highest standards of integrity and pride."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-500" />,
                title: "Student-Centric",
                desc: "Designed by Bulldogs, for Bulldogs. We understand the unique challenges and triumphs of campus life."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-16 h-16 rounded-3xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/5 -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Active Students", value: "15k+", icon: <Users className="h-4 w-4" /> },
              { label: "Official Products", value: "250+", icon: <Sparkles className="h-4 w-4" /> },
              { label: "Campus Branches", value: "12", icon: <GraduationCap className="h-4 w-4" /> },
              { label: "Years of Pride", value: "25+", icon: <ShieldCheck className="h-4 w-4" /> }
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border-white/5 text-center space-y-2">
                <div className="flex justify-center text-primary-500 mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-5xl text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            BE PART OF THE <br /> <span className="text-gradient">NU LEGACY.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your campus experience? Join thousands of students who choose BulldogEx for their daily essentials.
          </p>
          <div className="flex justify-center gap-6">
            <Button to="/auth/signup" className="px-12 group">
              Join the Pack <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;



