import {
  MessageSquare, Zap, Hash, Radio, Bell, ChevronRight,
  Globe, Users, DollarSign, Lock, LogIn, UserPlus, ShieldCheck,
  Home, Car, BookOpen, Hammer, Coins, BarChart2, Heart,
  Smile, Share2, ArrowUpRight, Sparkles,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const PUBLIC_MESSAGES = [
  { id: 1, user: "Amara O.", avatar: "AO", color: "#22C55E", time: "9:01 AM", msg: "Just got my first Service Credits from a Foundation job! 45 credits for helping wire a kitchen. This is real. 🙌" },
  { id: 2, user: "James T.", avatar: "JT", color: "#3B82F6", time: "9:14 AM", msg: "LightHouse found me a private studio in Houston that accepts credits. Moving in Friday. Safe Space verified host." },
  { id: 3, user: "Maria G.", avatar: "MG", color: "#EC4899", time: "9:28 AM", msg: "My Peer Programming cohort just helped me land a remote dev role. Week 8 done. From nothing to employed. 💻" },
  { id: 4, user: "David K.", avatar: "DK", color: "#F97316", time: "9:45 AM", msg: "Anyone in the Chicago area? SocketRelay has an open request for Spanish interpretation at a court hearing tomorrow. Urgently needed." },
  { id: 5, user: "Priya S.", avatar: "PS", color: "#A855F7", time: "10:03 AM", msg: "GDP dashboard just hit $247B. 4.9M of us building this economy. Every skill verified, every credit earned. This is ours." },
  { id: 6, user: "Amara O.", avatar: "AO", color: "#22C55E", time: "10:22 AM", msg: "Chyme room starting in 10 min: 'Rebuilding After Trafficking — One Year Later'. Come share your story. Room open to all. 🎙️" },
];

const STATS = [
  { label: "Survivors", value: "4.9M", icon: Users, color: "#22C55E" },
  { label: "GDP Economy", value: "$247B", icon: DollarSign, color: "#06B6D4" },
  { label: "Countries", value: "127", icon: Globe, color: "#A855F7" },
  { label: "Live Rooms", value: "128", icon: Radio, color: "#F97316" },
];

const CHANNELS = ["general", "housing-help", "skills-trade", "mutual-aid"];

const APPS_PREVIEW = [
  { name: "Chyme", icon: Radio, color: "#22C55E" },
  { name: "LightHouse", icon: Home, color: "#EAB308" },
  { name: "TrustTransport", icon: Car, color: "#F97316" },
  { name: "Directory", icon: BookOpen, color: "#3B82F6" },
  { name: "Foundation", icon: Hammer, color: "#EF4444" },
  { name: "Service Credits", icon: Coins, color: "#F59E0B" },
  { name: "Workforce", icon: BarChart2, color: "#6366F1" },
  { name: "GentlePulse", icon: Heart, color: "#14B8A6" },
  { name: "Mood", icon: Smile, color: "#EC4899" },
  { name: "SocketRelay", icon: Share2, color: "#F43F5E" },
  { name: "+ 7 more…", icon: Sparkles, color: subtle },
];

export function HubPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Marketing banner */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ShieldCheck size={16} color="#fff" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Survivor Hub · 4.9M members · $247B economy · 127 countries</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Free to join · End-to-end encrypted</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <UserPlus size={13} /> Create Free Account
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Icon rail */}
        <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, gap: 8, flexShrink: 0 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg,${accent} 0%,${accentCyan} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
          {[MessageSquare, Zap].map((Icon, i) => (
            <div key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `rgba(124,58,237,0.2)` : "transparent", border: i === 0 ? `1px solid rgba(124,58,237,0.4)` : `1px solid transparent`, display: "flex", alignItems: "center", justifyContent: "center", color: i === 0 ? "#A78BFA" : subtle, cursor: "pointer" }}>
              <Icon size={20} />
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ marginBottom: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <Bell size={18} color={subtle} />
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,#6B7280,#4B5563)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: subtle, border: `2px dashed ${border}` }}>?</div>
          </div>
        </aside>

        {/* Second sidebar */}
        <aside style={{ width: 240, background: "#0D0F14", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "16px 12px 10px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 10 }}>Public Channels</div>
            {CHANNELS.map((ch, i) => (
              <div key={ch} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 8, background: ch === "general" ? `rgba(124,58,237,0.12)` : "transparent", cursor: "pointer", borderLeft: ch === "general" ? `2px solid ${accent}` : `2px solid transparent`, marginLeft: 2 }}>
                <Hash size={14} style={{ color: ch === "general" ? "#A78BFA" : subtle }} />
                <span style={{ fontSize: 14, color: ch === "general" ? text : subtle }}>{ch}</span>
                {i === 0 && <span style={{ marginLeft: "auto", fontSize: 10, background: "#22C55E20", color: "#22C55E", border: "1px solid #22C55E30", borderRadius: 4, padding: "1px 6px" }}>LIVE</span>}
              </div>
            ))}
          </div>

          {/* Apps preview */}
          <div style={{ padding: "12px 12px 6px", borderTop: `1px solid ${border}`, marginTop: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 10 }}>17 Apps · Sign in to access</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {APPS_PREVIEW.map(({ name, icon: Icon, color }) => (
                <div key={name} style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 8px", borderRadius: 6, background: surface, border: `1px solid ${border}`, opacity: 0.6, cursor: "not-allowed" }}>
                  <Icon size={11} color={color} />
                  <span style={{ fontSize: 10, color: subtle }}>{name}</span>
                </div>
              ))}
            </div>
            <button style={{ width: "100%", marginTop: 10, padding: "9px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <UserPlus size={13} /> Create Free Account
            </button>
          </div>
        </aside>

        {/* Main — public #general feed */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Channel header */}
          <div style={{ padding: "14px 24px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 10 }}>
            <Hash size={16} color={subtle} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>general</div>
              <div style={{ fontSize: 12, color: subtle }}>Community · 4,912 online now</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#22C55E15", border: "1px solid #22C55E30", borderRadius: 20, padding: "4px 12px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 600 }}>4,912 online</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <ShieldCheck size={12} color={accentCyan} />
                <span style={{ fontSize: 11, color: accentCyan, fontWeight: 600 }}>Safe Space ✓</span>
              </div>
            </div>
          </div>

          {/* Messages feed */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ textAlign: "center", padding: "8px 16px", borderRadius: 8, background: `${accent}12`, border: `1px solid ${accent}20`, fontSize: 12, color: "#A78BFA", marginBottom: 8 }}>
              Viewing the public #general channel — sign in to participate and access all 17 apps
            </div>
            {PUBLIC_MESSAGES.map(({ id, user, avatar, color, time, msg }) => (
              <div key={id} style={{ display: "flex", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${color}25`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color, flexShrink: 0 }}>{avatar}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{user}</span>
                    <span style={{ fontSize: 11, color: subtle }}>{time}</span>
                  </div>
                  <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.55 }}>{msg}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Locked input */}
          <div style={{ padding: "16px 24px", borderTop: `1px solid ${border}` }}>
            <div style={{ borderRadius: 12, border: `1px solid ${border}`, background: surface, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <Lock size={16} color={subtle} />
              <span style={{ fontSize: 14, color: subtle, flex: 1 }}>Sign in to join the conversation…</span>
              <button style={{ padding: "8px 18px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
                Join Free →
              </button>
            </div>
          </div>
        </main>

        {/* Right panel — community stats */}
        <aside style={{ width: 240, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto", flexShrink: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Community at a Glance</div>
          {STATS.map(({ label, value, icon: Icon, color }) => (
            <div key={label} style={{ borderRadius: 10, border: `1px solid ${color}20`, background: `${color}08`, padding: "14px 12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                <Icon size={14} color={color} />
                <span style={{ fontSize: 11, color: subtle }}>{label}</span>
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color }}>{value}</div>
            </div>
          ))}

          <div style={{ borderRadius: 10, border: `1px solid ${border}`, background: surface, padding: "14px 12px" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 8 }}>Why join?</div>
            {[
              "P2P marketplace — 17 apps",
              "End-to-end encrypted",
              "Service Credits economy",
              "No data sold — ever",
            ].map(pt => (
              <div key={pt} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5, fontSize: 12, color: subtle }}>
                <ChevronRight size={12} color={accentCyan} /> {pt}
              </div>
            ))}
            <button style={{ width: "100%", marginTop: 10, padding: "9px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              Create Free Account →
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
