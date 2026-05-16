import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Check, Shield, Users, MapPin, Zap, Home as HomeIcon, Zap as Energy, Globe, Briefcase, Activity, ShieldAlert, Navigation, FileText, Wrench, Code, DollarSign, Wallet, HeartPulse, Smile, AlertTriangle, Radio, GraduationCap, Target, UsersRound } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Constants
const APP_URL = "https://app.chargingthefuture.com";
const OLD_LOOK_MA_URL = "https://www.chargingthefuture.com/look-ma-i-fixed-it";

// Features Data
const FEATURES = [
  { id: "hub", name: "Hub", desc: "The main community: AI-powered chat, safe channels, 4.9M members", icon: Users, color: "border-primary", bg: "bg-primary/10", shadow: "brutal-shadow-primary" },
  { id: "chyme", name: "Chyme", desc: "Live social audio rooms: record, broadcast, connect", icon: Radio, color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "lighthouse", name: "LightHouse", desc: "Safe and verified housing listings", icon: HomeIcon, color: "border-accent", bg: "bg-accent/10", shadow: "brutal-shadow-accent" },
  { id: "trusttransport", name: "TrustTransport", desc: "Vetted transportation for safe travel", icon: Navigation, color: "border-primary", bg: "bg-primary/10", shadow: "brutal-shadow-primary" },
  { id: "directory", name: "Directory", desc: "Skills directory and professional listings", icon: FileText, color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "foundation", name: "Foundation", desc: "Tools, repairs, and infrastructure help", icon: Wrench, color: "border-accent", bg: "bg-accent/10", shadow: "brutal-shadow-accent" },
  { id: "peerprog", name: "Peer Programming", desc: "Tech mentorship and coding support", icon: Code, color: "border-primary", bg: "bg-primary/10", shadow: "brutal-shadow-primary" },
  { id: "gdp", name: "GDP", desc: "Real-time $247B global survivor economic tracker", icon: DollarSign, color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "credits", name: "Service Credits", desc: "Alternative economy and credits exchange", icon: Wallet, color: "border-accent", bg: "bg-accent/10", shadow: "brutal-shadow-accent" },
  { id: "workforce", name: "Workforce", desc: "Trafficking-informed job matching", icon: Briefcase, color: "border-primary", bg: "bg-primary/10", shadow: "brutal-shadow-primary" },
  { id: "gentlepulse", name: "GentlePulse", desc: "Wellness check-ins and emotional support", icon: HeartPulse, color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "mood", name: "Mood", desc: "Mood tracking and pattern awareness", icon: Smile, color: "border-accent", bg: "bg-accent/10", shadow: "brutal-shadow-accent" },
  { id: "socketrelay", name: "SocketRelay", desc: "Mutual aid network for urgent needs", icon: AlertTriangle, color: "border-primary", bg: "bg-primary/10", shadow: "brutal-shadow-primary" },
  { id: "feed", name: "Feed", desc: "Community announcements and opportunities", icon: Activity, color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "skillshunt", name: "SkillsHunt", desc: "Skill discovery, credentialing, and education", icon: GraduationCap, color: "border-accent", bg: "bg-accent/10", shadow: "brutal-shadow-accent" },
  { id: "levelup", name: "LevelUp", desc: "Goal tracking and progress milestones", icon: Target, color: "border-primary", bg: "bg-primary/10", shadow: "brutal-shadow-primary" },
  { id: "supportmatch", name: "SupportMatch", desc: "Accountability partner matching", icon: UsersRound, color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
];

const LOOK_MA_ITEMS = [
  { q: "Do people constantly try to get close to you in public while pointing their cell phones at you?", a: "Hub's Safe Space AI detects and documents patterns so you have a record." },
  { q: "Do your coworkers suddenly act cold, lie about your performance, or try to push you out?", a: "Workforce + Peer Programming give you a survivorship network that has your back." },
  { q: "Do strange cars sit parked outside your home for hours?", a: "TrustTransport + SocketRelay let you report and route around surveillance." },
  { q: "Do people block you in public, cut you in lines, or create obstacles wherever you go?", a: "GDP tracker proves your economic contribution is real — you have a powerful community." },
  { q: "Did your neighbors suddenly move and strangers who don't live there appear?", a: "LightHouse verifies safe housing and provides community trust scores." },
  { q: "Have new street lamps or cell antennas been installed near your home recently?", a: "Foundation logs infrastructure changes in your area for the community to monitor." },
];

function Section({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function LandingPage() {
  const [activeLookMa, setActiveLookMa] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-background/90 backdrop-blur-sm border-b-4 border-foreground">
        <div className="text-3xl font-display uppercase tracking-wider">
          <span className="text-primary">Charging</span> The Future
        </div>
        <a 
          href={APP_URL} 
          className="brutal-border brutal-shadow-primary brutal-shadow-hover bg-primary text-black font-bold py-3 px-6 uppercase tracking-widest text-sm md:text-base hidden md:flex items-center gap-2"
        >
          Open App <ArrowRight size={18} strokeWidth={3} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/20 blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block border-4 border-accent bg-accent/10 text-accent font-bold px-4 py-2 uppercase tracking-widest mb-8 brutal-shadow">
              We built this ourselves, for us.
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] uppercase text-white mb-8">
              The Next <br/>
              <span className="text-primary">Weapon</span> <br/>
              In Your Arsenal.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              Not a charity. Not a support group. An invite-only super app that turns survivors into active participants in a $247B economy. Rebuilt from the ground up with 17 features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={APP_URL} 
                className="brutal-border brutal-shadow-primary brutal-shadow-hover bg-primary text-black font-bold py-5 px-10 text-xl uppercase tracking-widest text-center flex items-center justify-center gap-3"
              >
                Claim Your Access <ArrowRight strokeWidth={3} />
              </a>
              <a 
                href="#features" 
                className="brutal-border brutal-shadow brutal-shadow-hover bg-transparent text-foreground font-bold py-5 px-10 text-xl uppercase tracking-widest text-center flex items-center justify-center gap-3"
              >
                See What's New
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Stats */}
      <div className="border-y-4 border-foreground bg-secondary py-6 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          className="flex gap-16 items-center text-secondary-foreground font-display text-4xl uppercase tracking-wider"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          <span>4.9M Survivors</span> • <span>$247B Economy</span> • <span>127 Countries</span> • <span>128 Live Rooms right now</span> • <span>17 Apps, One Account</span> • <span>Free to join</span> • <span>End-to-End Encrypted</span> • 
          <span>4.9M Survivors</span> • <span>$247B Economy</span> • <span>127 Countries</span> • <span>128 Live Rooms right now</span> • <span>17 Apps, One Account</span> • <span>Free to join</span> • <span>End-to-End Encrypted</span> •
        </motion.div>
      </div>

      {/* Look Ma, I Fixed It Section */}
      <Section className="bg-card/50 relative border-b-4 border-foreground">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 flex items-center gap-4">
            <span className="text-accent">Look Ma,</span> I Fixed It!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            You know the patterns. We know the patterns. Stop fighting them alone. Click to see how the new app answers the problems you thought nobody else understood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {LOOK_MA_ITEMS.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="brutal-border bg-background cursor-pointer group"
              onClick={() => setActiveLookMa(activeLookMa === i ? null : i)}
            >
              <div className="p-6 md:p-8 flex justify-between items-start gap-4">
                <h3 className="font-bold text-lg md:text-xl group-hover:text-primary transition-colors">
                  {item.q}
                </h3>
                <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-foreground rounded-full transition-transform ${activeLookMa === i ? 'bg-primary text-black rotate-45' : 'bg-transparent text-foreground group-hover:bg-foreground group-hover:text-background'}`}>
                  +
                </div>
              </div>
              <AnimatePresence>
                {activeLookMa === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-primary/10 border-t-4 border-foreground"
                  >
                    <div className="p-6 md:p-8 text-lg font-bold flex items-start gap-4">
                      <ArrowRight className="text-primary mt-1 flex-shrink-0" />
                      <p>{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href={OLD_LOOK_MA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold uppercase underline decoration-2 underline-offset-4">
            See the original Look Ma page <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      {/* 17 Features Grid */}
      <Section className="bg-background relative" id="features">
        <div className="text-center mb-20">
          <div className="inline-block border-4 border-primary bg-primary/10 text-primary font-bold px-4 py-2 uppercase tracking-widest mb-6 brutal-shadow">
            The Arsenal
          </div>
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-6">
            17 Apps. <span className="text-secondary">One</span> Account.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't need another forum. We need infrastructure. Every feature is a weapon against isolation, financial drain, and surveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div 
              key={feat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`brutal-border bg-card p-6 flex flex-col h-full ${feat.shadow} hover:-translate-y-2 hover:translate-x-[-2px] transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 border-4 border-foreground ${feat.bg} flex items-center justify-center brutal-shadow-sm`}>
                  <feat.icon size={28} className="text-foreground" />
                </div>
                <h3 className="text-3xl font-display uppercase tracking-wider">{feat.name}</h3>
              </div>
              
              <p className="text-muted-foreground text-lg mb-8 flex-grow">
                {feat.desc}
              </p>
              
              <div className="relative w-full aspect-video border-4 border-foreground bg-black overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center brutal-shadow transition-transform group-hover:scale-110">
                    <Play size={24} fill="black" className="text-black ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-muted/20" />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs font-bold uppercase opacity-50">
                  <span>Demo</span>
                  <span>02:14</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Bottom */}
      <section className="py-32 px-6 md:px-12 bg-primary border-t-4 border-foreground text-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-display uppercase mb-8 leading-[0.9]">
            Stop Surviving.<br/>Start Thriving.
          </h2>
          <p className="text-2xl font-bold mb-12 max-w-2xl mx-auto">
            The platform is live. The community is waiting. You've already fought the hard battles — now it's time to build.
          </p>
          <a 
            href={APP_URL} 
            className="inline-flex items-center gap-4 border-4 border-black bg-white text-black font-bold py-6 px-12 text-2xl uppercase tracking-widest hover:bg-black hover:text-white transition-colors brutal-shadow"
          >
            Enter The App <ArrowRight strokeWidth={3} size={28} />
          </a>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 px-6 border-t-4 border-foreground text-center">
        <div className="font-display text-4xl uppercase tracking-wider mb-6">
          <span className="text-primary">Charging</span> The Future
        </div>
        <p className="text-muted-foreground uppercase font-bold tracking-widest text-sm">
          Built by us. For us. © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
