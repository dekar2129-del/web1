import { motion } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  ChevronUp, 
  Layers, 
  Zap, 
  MousePointer2,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center">
          <Layers className="text-brand w-6 h-6" />
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="font-medium text-sm hover:text-brand transition-colors text-white/90">Business</a>
        <a href="#" className="font-medium text-sm hover:text-brand transition-colors text-white/90">Pricing</a>
        <a href="#" className="font-medium text-sm hover:text-brand transition-colors text-white/90">Features</a>
        <a href="#" className="font-medium text-sm hover:text-brand transition-colors text-white/90">About</a>
      </div>

      <button className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-brand/20">
        Login <ArrowRight className="w-4 h-4" />
      </button>
    </nav>
  );
};

const HeroCard = () => {
  return (
    <section className="px-4 md:px-8 -mt-24 pt-24">
      <div className="max-w-7xl mx-auto bg-card-dark rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden text-white flex flex-col md:flex-row gap-12 items-center min-h-[640px] shadow-2xl">
        {/* Background blobs for depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

        <div className="flex-1 space-y-8 z-10 text-center md:text-left pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-[5.5rem] font-display font-bold leading-[1.05] tracking-tight"
          >
            Redefining <br /> How <span className="text-brand">Business</span> <br /> Gets Done
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            At The Heart Of Everything We Do Is A Commitment To Making Your Business Stronger, Faster, And More Efficient.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center gap-3 shadow-xl shadow-brand/25 active:scale-95 group">
              Get Started 
              <span className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </motion.div>

          <div className="flex items-center justify-center md:justify-start -space-x-3 pt-8">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/user${i}/100/100`} 
                alt="Avatar" 
                className="w-12 h-12 rounded-full border-4 border-card-dark"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 relative z-10 w-full h-full min-h-[400px] md:min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-full w-full"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating UI elements mirroring screenshot */}
            <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl hidden lg:block animate-bounce-slow">
              <Zap className="text-yellow-400 w-8 h-8" />
            </div>
            <div className="absolute -right-8 bottom-1/4 bg-brand p-5 rounded-3xl shadow-2xl hidden lg:block animate-pulse-slow">
              <MousePointer2 className="text-white w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const logos = ["Amsterdam", "venice.", "thor.", "M MILANO", "Amsterdam", "venice."];
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40 transition-opacity hover:opacity-100">
          {logos.map((logo, i) => (
            <span key={i} className="text-xl md:text-2xl font-display font-bold lowercase tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Repeated Customers", value: "90%", pos: "bottom-0 -left-10" },
    { label: "Expert Support Team", value: "390+", pos: "top-1/4 -right-10" },
    { label: "Project completed", value: "24k+", pos: "top-0 right-10" },
    { label: "Satisfaction client", value: "99%", pos: "bottom-10 right-10" },
  ];

  return (
    <section className="px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f8f7ff] to-[#f4f2ff] rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden min-h-[540px] flex items-center">
        <div className="relative z-10 max-w-xl space-y-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] text-dark">
            25,000+ Trusted Partnerships built on Results
          </h2>
          <div className="h-1 w-64 bg-brand/30 rounded-full"></div>
          <p className="text-black/50 text-lg md:text-xl leading-relaxed">
            Trusted by over 25,000 of the world's most successful companies, we deliver reliable, high-performance solutions that drive real business results.
          </p>
          <button className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full text-md font-medium transition-all inline-flex items-center gap-2 shadow-lg shadow-brand/20">
            Discover more <ArrowRight className="w-5 h-5 ml-1" />
          </button>
        </div>

        {/* Floating Stat Cards mirroring screenshot position */}
        <div className="hidden lg:block absolute inset-0">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`absolute ${stat.pos} bg-white p-8 rounded-[2rem] shadow-2xl shadow-brand/5 border border-brand/5 w-52 flex flex-col justify-center items-center text-center`}
            >
              <div className="text-4xl font-display font-bold text-brand mb-2">{stat.value}</div>
              <div className="text-[0.65rem] font-bold text-black/40 uppercase tracking-[0.15em] leading-tight px-4">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: ["Up to 5 project members", "Unlimited tasks and projects", "2GB storage", "Integrations", "Basic support"],
      cta: "Get started for free",
      isPopular: false
    },
    {
      name: "Pro",
      price: "9",
      features: ["Up to 50 project members", "Unlimited tasks and projects", "100GB storage", "Integrations", "Priority support", "Advanced analytics"],
      cta: "Sign up now",
      isPopular: true
    },
    {
      name: "Business",
      price: "19",
      features: ["Unlimited project members", "Unlimited tasks and projects", "200GB storage", "Integrations", "Dedicated account manager", "Custom fields", "Advanced analytics", "Export capabilities"],
      cta: "Sign up now",
      isPopular: false
    }
  ];

  return (
    <section className="px-4 md:px-8 py-24">
      <div className="max-w-7xl mx-auto space-y-20">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center text-dark">Our Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className={`rounded-[2.5rem] p-10 flex flex-col h-full border ${plan.isPopular ? 'bg-black text-white border-black shadow-2xl scale-105 z-10' : 'bg-gray-50/50 text-dark border-gray-100'}`}
            >
               {plan.isPopular && (
                <div className="flex justify-end mb-4">
                  <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-bold border border-white/10 uppercase tracking-widest">Most popular</span>
                </div>
              )}
              <div className="mb-10">
                <span className="text-sm font-semibold opacity-60 font-display uppercase tracking-[0.2em]">{plan.name}</span>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-6xl font-display font-bold">${plan.price}</span>
                  <span className="opacity-40 font-medium ml-2">/month</span>
                </div>
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold mb-10 transition-all ${plan.isPopular ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'bg-brand text-white hover:opacity-90'}`}>
                {plan.cta}
              </button>

              <div className="space-y-5 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 text-brand" />
                    <span className="text-sm font-medium opacity-80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GrowthSection = () => {
  const [open, setOpen] = useState(1);
  const services = [
    { id: 0, title: "Mobile App Development", content: "Accelerate your digital reach with mobile-first experiences built for growth." },
    { id: 1, title: "API Integration", content: "We help you streamline operations by connecting your apps, services, and platforms through powerful API integrations." },
    { id: 2, title: "UI/UX Design", content: "User-centric design that drives engagement and retention through intuitive interfaces." },
    { id: 3, title: "Custom Software", content: "Tailored solutions designed to solve your specific business challenges with scalable code." },
  ];

  return (
    <section className="px-4 md:px-8 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1 space-y-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
              <span className="text-brand font-bold text-xs">B</span>
            </div>
            <span className="text-xs font-semibold text-black/30 uppercase tracking-[0.2em] font-display">Business Approach</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight text-dark">
            Driving Growth Through Innovation And Expertise
          </h2>
          <p className="text-black/50 text-xl leading-relaxed pt-4">
            We combine smart strategy, innovative technology, and personalized support to help your business grow, adapt, and lead in today's fast-paced world.
          </p>
          <button className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full text-md font-medium transition-all inline-flex items-center gap-2 shadow-lg shadow-brand/20">
            View all services <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="flex-1">
          <div className="divide-y divide-gray-100">
            {services.map((service) => (
              <div key={service.id} className="py-10 group cursor-pointer" onClick={() => setOpen(service.id === open ? -1 : service.id)}>
                <div className="flex items-center justify-between">
                  <h3 className={`text-2xl md:text-3xl font-display font-bold transition-colors ${open === service.id ? 'text-brand' : 'group-hover:text-brand text-dark'}`}>
                    {service.title}
                  </h3>
                  {open === service.id ? (
                    <ChevronUp className="w-7 h-7 text-brand" />
                  ) : (
                    <ChevronRight className="w-7 h-7 text-black/20 group-hover:text-brand transition-colors" />
                  )}
                </div>
                <motion.div 
                  initial={false}
                  animate={{ height: open === service.id ? "auto" : 0, opacity: open === service.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-black/50 text-lg leading-relaxed pt-6">
                    {service.content}
                  </p>
                  <div className="h-[2px] bg-brand mt-6 w-full opacity-30"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-white overflow-x-hidden bg-white">
      <div className="relative">
        {/* Header and Hero share the same container background logic in screenshot */}
        <div className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none -z-10 bg-white"></div>
        <Navbar />
        <HeroCard />
      </div>
      <Partners />
      <StatsSection />
      <Pricing />
      <GrowthSection />
      
      <footer className="bg-[#111] py-20 mt-20 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center opacity-80">
          <div className="space-y-4">
            <div className="font-display font-bold text-3xl">Nexus.</div>
            <p className="max-w-sm text-white/40">Pushing the boundaries of business growth through innovation and technology.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-sm font-medium">© 2026 Nexus Growth Agency. All rights reserved.</p>
            <div className="flex gap-10 text-sm font-semibold tracking-widest uppercase">
              <a href="#" className="hover:text-brand transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
