import {
  MessageSquare, Hash, Radio, Globe, Users, DollarSign,
  Lock, LogIn, UserPlus, ShieldCheck, ChevronRight, Sparkles,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const PUBLIC_MESSAGES = [
  { id: 1, init: "AO", color: "#22C55E", user: "Amara O.", time: "9:01", msg: "Just got my first Service Credits from a Foundation job! 45 credits. This is real. 🙌" },
  { id: 2, init: "JT", color: "#3B82F6", user: "James T.", time: "9:14", msg: "LightHouse found me a Safe Space studio in Houston. Moving in Friday. 🏠" },
  { id: 3, init: "MG", color: "#EC4899", user: "Maria G.", time: "9:28", msg: "My Peer Programming cohort helped me land a dev role. Week 8. From nothing to employed. 💻" },
  { id: 4, init: "DK", color: "#F97316", user: "David K.", time: "9:45", msg: "Chicago: open request for Spanish interpretation at court tomorrow. Check SocketRelay." },
];

const STATS = [
  { label: "Survivors", value: "4.9M", color: "#22C55E" },
  { label: "GDP", value: "$247B", color: "#06B6D4" },
  { label: "Countries", value: "127", color: "#A855F7" },
];

export function MobileHubPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden", fontSize: 14 }}>

      {/* Status bar */}
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>

      {/* App header */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>SH</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Survivor Hub</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Free to join · 4.9M survivors</div>
        </div>
        <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontWeight: 600, fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
          <LogIn size={11} /> Sign In
        </button>
        <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 11 }}>
          Join Free
        </button>
      </div>

      {/* Community stats strip */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, background: surface, flexShrink: 0 }}>
        {STATS.map(({ label, value, color }) => (
          <div key={label} style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRight: `1px solid ${border}` }}>
            <div style={{ fontSize: 16, fontWeight: 900, color }}>{value}</div>
            <div style={{ fontSize: 10, color: subtle }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Channel tab */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, padding: "0 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "10px 12px", borderBottom: `2px solid ${accent}`, color: "#A78BFA", marginRight: 8 }}>
          <Hash size={12} /><span style={{ fontSize: 12, fontWeight: 600 }}>general</span>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "10px 12px", color: subtle, opacity: 0.4 }}>
          <Hash size={12} /><span style={{ fontSize: 12 }}>housing-help</span>
          <Lock size={10} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "10px 12px", color: subtle, opacity: 0.4 }}>
          <Hash size={12} /><span style={{ fontSize: 12 }}>skills-trade</span>
          <Lock size={10} />
        </div>
      </div>

      {/* Public notice */}
      <div style={{ margin: "10px 12px 0", padding: "8px 12px", borderRadius: 8, background: `${accent}12`, border: `1px solid ${accent}20`, fontSize: 11, color: "#A78BFA", flexShrink: 0 }}>
        Viewing public #general · Sign in to participate &amp; access all 17 apps
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
        {PUBLIC_MESSAGES.map(({ id, init, color, user, time, msg }) => (
          <div key={id} style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${color}20`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color, flexShrink: 0 }}>{init}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 6, alignItems: "baseline", marginBottom: 2 }}>
                <span style={{ fontSize: 12, fontWeight: 700 }}>{user}</span>
                <span style={{ fontSize: 10, color: subtle }}>{time}</span>
              </div>
              <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.5 }}>{msg}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Locked input */}
      <div style={{ padding: "10px 12px", borderTop: `1px solid ${border}`, background: surface, flexShrink: 0 }}>
        <div style={{ borderRadius: 24, border: `1px solid ${border}`, background: "rgba(255,255,255,0.04)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
          <Lock size={14} color={subtle} />
          <span style={{ fontSize: 13, color: subtle, flex: 1 }}>Sign in to chat…</span>
          <button style={{ padding: "6px 14px", borderRadius: 16, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 11, whiteSpace: "nowrap" }}>
            Join Free
          </button>
        </div>
      </div>

      {/* Bottom nav (locked) */}
      <div style={{ display: "flex", borderTop: `1px solid ${border}`, background: "#090B0F", flexShrink: 0 }}>
        {[
          { icon: MessageSquare, label: "Chat", active: true },
          { icon: Radio, label: "Chyme", active: false },
          { icon: Sparkles, label: "Apps", active: false },
          { icon: Globe, label: "GDP", active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} style={{ flex: 1, padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, cursor: active ? "pointer" : "not-allowed", opacity: active ? 1 : 0.35 }}>
            <Icon size={18} color={active ? "#A78BFA" : subtle} />
            <span style={{ fontSize: 9, color: active ? "#A78BFA" : subtle }}>{label}</span>
            {!active && <Lock size={8} color={subtle} style={{ position: "absolute", marginTop: -6 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
