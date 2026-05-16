import { useState } from "react";
import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Play, Menu, X, Home, Tv, Wrench as FixIt,
  Users, Radio, HomeIcon, Navigation, FileText, Code,
  DollarSign, Wallet, Briefcase, HeartPulse, Smile,
  AlertTriangle, Activity, GraduationCap, Target, UsersRound,
} from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const BASE = import.meta.env.BASE_URL;
const APP_URL = "https://app.chargingthefuture.com";
const HERO_IMG = `${BASE}hero-walking-dead.png`;

const FEATURES = [
  { id: "hub",          name: "Hub",            desc: "The main community: AI-powered chat, safe channels, 4.9M members. Your base camp.",                                icon: Users,       color: "border-primary",   bg: "bg-primary/10",   shadow: "brutal-shadow-primary"   },
  { id: "chyme",        name: "Chyme",          desc: "Live social audio rooms. Record, broadcast, listen, and connect in real time.",                                    icon: Radio,       color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "lighthouse",   name: "LightHouse",     desc: "Safe and verified housing listings. Community trust scores so you know your neighbors.",                           icon: HomeIcon,    color: "border-accent",    bg: "bg-accent/10",    shadow: "brutal-shadow-accent"    },
  { id: "trusttransport","name": "TrustTransport","desc": "Vetted transportation for safe travel. Drivers screened by the community, for the community.",                 icon: Navigation,  color: "border-primary",   bg: "bg-primary/10",   shadow: "brutal-shadow-primary"   },
  { id: "directory",    name: "Directory",      desc: "Skills directory and professional listings. Find a survivor-run service for almost anything.",                      icon: FileText,    color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "foundation",   name: "Foundation",     desc: "Tools, repairs, and infrastructure support. Logs changes in your area so nothing happens in the dark.",            icon: FixIt,       color: "border-accent",    bg: "bg-accent/10",    shadow: "brutal-shadow-accent"    },
  { id: "peerprog",     name: "Peer Programming","desc": "Tech mentorship and coding support. Survivors teaching survivors to build.",                                    icon: Code,        color: "border-primary",   bg: "bg-primary/10",   shadow: "brutal-shadow-primary"   },
  { id: "gdp",          name: "GDP",            desc: "Real-time $247B global survivor economic tracker. Your contributions counted, recorded, and made visible.",        icon: DollarSign,  color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "credits",      name: "Service Credits","desc": "Alternative economy and credits exchange. Trade value inside the network without depending on outside systems.", icon: Wallet,      color: "border-accent",    bg: "bg-accent/10",    shadow: "brutal-shadow-accent"    },
  { id: "workforce",    name: "Workforce",      desc: "Trafficking-informed job matching. Employers vetted for survivor-safe workplaces.",                                 icon: Briefcase,   color: "border-primary",   bg: "bg-primary/10",   shadow: "brutal-shadow-primary"   },
  { id: "gentlepulse",  name: "GentlePulse",    desc: "Wellness check-ins and emotional support. Gentle, consistent, non-intrusive.",                                    icon: HeartPulse,  color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "mood",         name: "Mood",           desc: "Mood tracking and pattern awareness. Know yourself. See patterns. Take back control.",                             icon: Smile,       color: "border-accent",    bg: "bg-accent/10",    shadow: "brutal-shadow-accent"    },
  { id: "socketrelay",  name: "SocketRelay",    desc: "Mutual aid network for urgent needs. Real-time resource sharing when it matters most.",                           icon: AlertTriangle,color: "border-primary",  bg: "bg-primary/10",   shadow: "brutal-shadow-primary"   },
  { id: "feed",         name: "Feed",           desc: "Community announcements and opportunities. Signal only — no noise, no algorithm games.",                          icon: Activity,    color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
  { id: "skillshunt",   name: "SkillsHunt",     desc: "Skill discovery, credentialing, and education. Learn, prove it, get paid for it.",                                icon: GraduationCap,color:"border-accent",   bg: "bg-accent/10",    shadow: "brutal-shadow-accent"    },
  { id: "levelup",      name: "LevelUp",        desc: "Goal tracking and progress milestones. Your journey, documented and celebrated.",                                  icon: Target,      color: "border-primary",   bg: "bg-primary/10",   shadow: "brutal-shadow-primary"   },
  { id: "supportmatch", name: "SupportMatch",   desc: "Accountability partner matching. One person in your corner who gets it.",                                         icon: UsersRound,  color: "border-secondary", bg: "bg-secondary/10", shadow: "brutal-shadow-secondary" },
];

const LOOK_MA_ITEMS = [
  {
    q: "Do people constantly try to get close to you in public while pointing their cell phones at you?",
    a: "Hub's Safe Space AI detects behavioral patterns and helps you document them — building a record you control.",
    feature: "Hub",
  },
  {
    q: "Do your coworkers suddenly act cold, lie about your performance, or try to push you out?",
    a: "Workforce + Peer Programming give you a survivorship network that vouches for you, connects you to safe employers, and builds your skills outside their reach.",
    feature: "Workforce & Peer Programming",
  },
  {
    q: "Do strange cars sit parked outside your home for hours?",
    a: "TrustTransport + SocketRelay let you report, document, and route around surveillance — shared anonymously with the community for pattern analysis.",
    feature: "TrustTransport & SocketRelay",
  },
  {
    q: "Do people block you in public, cut you in lines, or create obstacles wherever you go?",
    a: "The GDP tracker proves your economic contribution is real and quantified. You are not invisible. This community of 4.9M has your back.",
    feature: "GDP",
  },
  {
    q: "Did your neighbors suddenly move and strangers who don't live there appear?",
    a: "LightHouse verifies safe housing and tracks community trust scores. You'll know who's actually supposed to be there.",
    feature: "LightHouse",
  },
  {
    q: "Have new street lamps or cell antennas been installed near your home recently?",
    a: "Foundation logs infrastructure changes in your area for the community to monitor — nothing gets installed in the dark while we're watching.",
    feature: "Foundation",
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/look-ma", label: "Look Ma, I Fixed It", icon: FixIt },
    { href: "/demos", label: "17 Demos", icon: Tv },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground">
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl md:text-3xl font-display uppercase tracking-wider hover:opacity-80 transition-opacity">
          <span className="text-primary">Charging</span> The Future
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-bold uppercase tracking-widest text-sm px-4 py-2 border-2 transition-all ${
                location === href
                  ? "border-primary bg-primary text-black"
                  : "border-transparent hover:border-foreground text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={APP_URL}
            className="ml-4 brutal-border brutal-shadow-primary brutal-shadow-hover bg-primary text-black font-bold py-2 px-5 uppercase tracking-widest text-sm flex items-center gap-2"
          >
            Open App <ArrowRight size={16} strokeWidth={3} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 brutal-border" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t-4 border-foreground bg-background overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {links.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-bold uppercase tracking-widest flex items-center gap-3 p-3 border-2 ${
                    location === href
                      ? "border-primary bg-primary text-black"
                      : "border-foreground text-foreground"
                  }`}
                >
                  <Icon size={18} /> {label}
                </Link>
              ))}
              <a
                href={APP_URL}
                className="brutal-border brutal-shadow-primary bg-primary text-black font-bold py-3 px-5 uppercase tracking-widest text-center flex items-center justify-center gap-2 mt-2"
              >
                Open App <ArrowRight size={16} strokeWidth={3} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function StatMarquee() {
  const stats = [
    "4.9M Survivors", "$247B Economy", "127 Countries",
    "128 Live Rooms right now", "17 Apps, One Account",
    "Free to join", "End-to-End Encrypted",
  ];
  const doubled = [...stats, ...stats];

  return (
    <div className="border-y-4 border-foreground bg-secondary py-5 overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex gap-12 items-center text-secondary-foreground font-display text-3xl md:text-4xl uppercase tracking-wider"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {doubled.map((s, i) => (
          <span key={i} className="flex-shrink-0">{s} <span className="text-background/50 mx-2">★</span></span>
        ))}
      </motion.div>
    </div>
  );
}

function VideoPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative w-full aspect-video border-4 border-foreground bg-zinc-900 overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
        <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center brutal-shadow transition-transform group-hover:scale-110">
          <Play size={24} fill="black" className="text-black ml-1" />
        </div>
        <span className="font-bold text-sm uppercase tracking-widest text-white/70">{name} Demo</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
      <div className="absolute bottom-2 left-3 right-3 flex justify-between text-xs font-bold uppercase text-white/30">
        <span>YouTube Demo</span>
        <span>Coming Soon</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12 px-6 border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-3xl uppercase tracking-wider">
          <span className="text-primary">Charging</span> The Future
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/demos" className="hover:text-foreground transition-colors">17 Demos</Link>
          <Link href="/look-ma" className="hover:text-foreground transition-colors">Look Ma, I Fixed It</Link>
          <a href={APP_URL} className="hover:text-primary transition-colors text-primary">Open App →</a>
        </div>
        <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
          Built by us. For us. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <NavBar />

      {/* HERO — split screen: image left, copy right */}
      <section className="pt-20 min-h-screen flex flex-col md:flex-row">
        {/* Left: Walking Dead image */}
        <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Chapter Two — Survivor community rising"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Comic book speech bubble */}
          <div className="absolute top-6 left-6 bg-white text-black border-4 border-black p-3 max-w-[200px] brutal-shadow">
            <p className="font-bold text-xs uppercase leading-tight">CHAPTER TWO:</p>
            <p className="text-xs leading-tight mt-1">The people around us changed. But we survived.</p>
          </div>
          {/* Green overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background md:block hidden" />
        </div>

        {/* Right: Headline */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 bg-background relative">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/15 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-secondary/15 blur-[80px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-2xl"
          >
            <div className="inline-block border-4 border-accent bg-accent/10 text-accent font-bold px-4 py-2 uppercase tracking-widest mb-8 brutal-shadow text-sm">
              World's First Psyop-Free TI Economy
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.88] uppercase text-white mb-8">
              The Next<br />
              <span className="text-primary">Weapon</span><br />
              In Your<br />
              Arsenal.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Not a charity. Not a support group. An invite-only super app that turns survivors into active participants in a $247B economy — rebuilt from the ground up with 17 features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={APP_URL}
                className="brutal-border brutal-shadow-primary brutal-shadow-hover bg-primary text-black font-bold py-4 px-8 text-lg uppercase tracking-widest text-center flex items-center justify-center gap-3"
              >
                Claim Your Access <ArrowRight strokeWidth={3} size={20} />
              </a>
              <Link
                href="/demos"
                className="brutal-border brutal-shadow brutal-shadow-hover bg-transparent text-foreground font-bold py-4 px-8 text-lg uppercase tracking-widest text-center flex items-center justify-center gap-3"
              >
                See All 17 Apps
              </Link>
            </div>

            <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><span className="text-primary">✓</span> Invite Only</span>
              <span className="flex items-center gap-2"><span className="text-primary">✓</span> WCAG AAA</span>
              <span className="flex items-center gap-2"><span className="text-primary">✓</span> End-to-End Encrypted</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Marquee */}
      <StatMarquee />

      {/* Teaser: 17 Apps */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        >
          <div className="max-w-2xl">
            <div className="inline-block border-4 border-primary bg-primary/10 text-primary font-bold px-4 py-2 uppercase tracking-widest mb-6 brutal-shadow text-sm">
              The Arsenal
            </div>
            <h2 className="text-5xl md:text-6xl font-display uppercase mb-6 leading-[0.9]">
              17 Apps.<br /><span className="text-secondary">One</span> Account.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't need another forum. We need infrastructure. Every feature is a weapon against isolation, financial drain, and surveillance. We built all 17. Watch them in action.
            </p>
          </div>
          <Link
            href="/demos"
            className="flex-shrink-0 brutal-border brutal-shadow-secondary brutal-shadow-hover bg-secondary text-white font-bold py-5 px-10 text-xl uppercase tracking-widest flex items-center gap-3"
          >
            Watch All 17 Demos <ArrowRight strokeWidth={3} size={22} />
          </Link>
        </motion.div>

        {/* Preview grid — first 6 features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.slice(0, 6).map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`brutal-border ${feat.bg} p-5 flex items-center gap-4 ${feat.shadow}`}
            >
              <div className={`w-10 h-10 border-2 border-foreground ${feat.bg} flex items-center justify-center flex-shrink-0`}>
                <feat.icon size={20} className="text-foreground" />
              </div>
              <span className="font-display text-xl uppercase">{feat.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/demos" className="text-muted-foreground hover:text-foreground font-bold uppercase tracking-widest text-sm underline decoration-2 underline-offset-4 inline-flex items-center gap-2">
            + 11 more apps — see all demos <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Teaser: Look Ma */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/40 border-y-4 border-foreground">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-block border-4 border-accent bg-accent/10 text-accent font-bold px-4 py-2 uppercase tracking-widest mb-6 brutal-shadow text-sm">
              You Know The Patterns
            </div>
            <h2 className="text-5xl md:text-6xl font-display uppercase mb-6 leading-[0.9]">
              <span className="text-accent">Look Ma,</span><br />I Fixed It!
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Strange cars outside. Coworkers suddenly cold. Neighbors you've never seen. New antennas on your block. You've noticed. We've built the answers — one feature at a time.
            </p>
            <p className="text-lg font-bold text-foreground/80">
              Click each problem. See exactly which feature of the app solves it.
            </p>
          </div>
          <Link
            href="/look-ma"
            className="flex-shrink-0 brutal-border brutal-shadow-accent brutal-shadow-hover bg-accent text-black font-bold py-5 px-10 text-xl uppercase tracking-widest flex items-center gap-3"
          >
            See All 6 Fixes <ArrowRight strokeWidth={3} size={22} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-primary border-t-4 border-foreground text-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-display uppercase mb-8 leading-[0.9]">
            Stop Surviving.<br />Start Thriving.
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
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
      </section>

      <Footer />
    </div>
  );
}

function DemosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <NavBar />

      <div className="pt-32 pb-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block border-4 border-secondary bg-secondary/10 text-secondary font-bold px-4 py-2 uppercase tracking-widest mb-6 brutal-shadow text-sm">
            The Arsenal — All 17
          </div>
          <h1 className="text-6xl md:text-8xl font-display uppercase mb-6 leading-[0.9]">
            17 Apps.<br /><span className="text-secondary">One</span> Account.<br />All Demos.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            Every feature of Survivor Hub has its own walkthrough demo. Watch how each tool works — built by survivors, for survivors.
          </p>
          <a href={APP_URL} className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm underline decoration-2 underline-offset-4 hover:text-white transition-colors">
            Ready? Open the App <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className={`brutal-border bg-card flex flex-col h-full ${feat.shadow} hover:-translate-y-1 hover:-translate-x-[2px] transition-all duration-200`}
            >
              <div className="p-6 flex items-center gap-4 border-b-4 border-foreground">
                <div className={`w-12 h-12 border-4 border-foreground ${feat.bg} flex items-center justify-center flex-shrink-0`}>
                  <feat.icon size={24} className="text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">App {String(i + 1).padStart(2, "0")} of 17</div>
                  <h3 className="text-2xl font-display uppercase leading-none">{feat.name}</h3>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-muted-foreground text-base leading-relaxed">{feat.desc}</p>
              </div>

              <div className="px-6 pb-6">
                <VideoPlaceholder name={feat.name} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-12 bg-secondary border-t-4 border-foreground text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 leading-[0.9]">
            Seen enough?<br /><span className="text-primary">Join us.</span>
          </h2>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-4 brutal-border bg-primary text-black font-bold py-5 px-10 text-xl uppercase tracking-widest brutal-shadow hover:-translate-y-1 transition-transform"
          >
            Claim Your Access <ArrowRight strokeWidth={3} size={22} />
          </a>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      </section>

      <Footer />
    </div>
  );
}

function LookMaPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block border-4 border-accent bg-accent/10 text-accent font-bold px-4 py-2 uppercase tracking-widest mb-6 brutal-shadow text-sm">
              You're Not Imagining It
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase mb-8 leading-[0.88]">
              <span className="text-accent">Look Ma,</span><br />I Fixed It!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              The things happening around you aren't random. Targeted individuals know the patterns. So do we. We built a feature in Survivor Hub for every single one. Click each scenario below — see exactly how the app fixes it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion items */}
      <section className="px-6 md:px-12 lg:px-24 pb-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          {LOOK_MA_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`brutal-border bg-card cursor-pointer transition-all duration-200 ${active === i ? "brutal-shadow-accent" : "brutal-shadow"}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl text-accent flex-shrink-0 leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-lg md:text-xl leading-snug group-hover:text-accent transition-colors">
                    {item.q}
                  </h3>
                </div>
                <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border-4 border-foreground text-xl font-bold transition-all duration-300 ${active === i ? "bg-accent text-black rotate-45" : "bg-transparent text-foreground"}`}>
                  +
                </div>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t-4 border-foreground bg-accent/10 p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <ArrowRight className="text-accent mt-1 flex-shrink-0" size={22} />
                        <p className="text-lg md:text-xl font-bold leading-relaxed">{item.a}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Fixed by:</span>
                        <span className="border-2 border-accent text-accent font-bold px-3 py-1 text-sm uppercase tracking-widest">{item.feature}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bridge to demos */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t-4 border-foreground bg-card/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-4 leading-[0.9]">
              Want to see<br /><span className="text-primary">all 17 apps</span> in action?
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Every feature above has a full walkthrough demo. Watch how it works before you join.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-shrink-0">
            <Link
              href="/demos"
              className="brutal-border brutal-shadow-primary brutal-shadow-hover bg-primary text-black font-bold py-4 px-8 text-lg uppercase tracking-widest flex items-center justify-center gap-3"
            >
              Watch All 17 Demos <ArrowRight strokeWidth={3} />
            </Link>
            <a
              href={APP_URL}
              className="brutal-border brutal-shadow brutal-shadow-hover bg-transparent text-foreground font-bold py-4 px-8 text-lg uppercase tracking-widest flex items-center justify-center gap-3"
            >
              Join The App <ArrowRight strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/demos" component={DemosPage} />
      <Route path="/look-ma" component={LookMaPage} />
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
