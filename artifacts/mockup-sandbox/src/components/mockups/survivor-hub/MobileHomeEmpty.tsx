// STATE: Authenticated, no community content yet (fresh install)
import {
  MessageSquare, Zap, Radio, Bell, Settings,
  Hash, Globe, Plus, ChevronRight, Sparkles, Search,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const NAV = [
  { icon: MessageSquare, label: "Chat", key: "chat" },
  { icon: Zap, label: "Apps", key: "apps" },
  { icon: Radio, label: "Chyme", key: "chyme" },
  { icon: Bell, label: "Alerts", key: "alerts" },
  { icon: Settings, label: "Settings", key: "settings" },
];

const ONBOARDING = [
  { icon: Hash, label: "Join a channel", color: "#A78BFA" },
  { icon: Zap, label: "Explore an app", color: "#38BDF8" },
  { icon: Globe, label: "View GDP tracker", color: "#34D399" },
];

export function MobileHomeEmpty() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF" }}>
          <div style={{ fontSize: 12 }}>•••</div>
          <div style={{ fontSize: 12 }}>WiFi</div>
          <div style={{ fontSize: 12 }}>100%</div>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 20px 10px", background: "#090B0F", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${accent},${accentCyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff" }}>SH</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: text }}>Survivor Hub</div>
              <div style={{ fontSize: 11, color: "#22C55E" }}>✓ Safe Space · 4.9M members</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Search size={16} color={subtle} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 0 80px" }}>

        {/* Hero card */}
        <div style={{ margin: "14px 16px 0", padding: "18px", borderRadius: 16, background: `linear-gradient(135deg,rgba(124,58,237,0.25) 0%,rgba(14,165,233,0.15) 100%)`, border: `1px solid rgba(124,58,237,0.2)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Sparkles size={13} color="#A78BFA" />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#A78BFA", textTransform: "uppercase" }}>From Survivor to Thriver</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: text, marginBottom: 8 }}>Your hub is ready 🌍</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5, marginBottom: 14 }}>
            Start by joining a channel or exploring a mini-app. Your economy awaits.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ v: "4.9M", l: "Members", c: "#A78BFA" }, { v: "$247B", l: "GDP", c: "#38BDF8" }, { v: "127", l: "Nations", c: "#34D399" }].map(({ v, l, c }) => (
              <div key={l} style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "8px 4px" }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: c }}>{v}</div>
                <div style={{ fontSize: 10, color: subtle }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Onboarding steps */}
        <div style={{ padding: "16px 16px 0" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 10 }}>Get started</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ONBOARDING.map(({ icon: Icon, label, color }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 14px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}12`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 11, color: subtle, fontWeight: 600 }}>{i + 1}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: text }}>{label}</span>
                  </div>
                </div>
                <ChevronRight size={14} color={subtle} />
              </div>
            ))}
          </div>
        </div>

        {/* No channels notice */}
        <div style={{ margin: "16px 16px 0", padding: "16px", borderRadius: 14, background: surface, border: `1px solid ${border}`, textAlign: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(124,58,237,0.1)`, border: `1px dashed rgba(124,58,237,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
            <Hash size={20} style={{ color: "rgba(124,58,237,0.4)" }} />
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#9CA3AF", marginBottom: 4 }}>No channels yet</div>
          <div style={{ fontSize: 12, color: "#4B5563", marginBottom: 12 }}>Channels will appear here once the community is set up</div>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, background: `rgba(124,58,237,0.15)`, border: `1px solid rgba(124,58,237,0.3)`, color: "#A78BFA", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
            <Plus size={13} /> Create Channel
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px", flexShrink: 0 }}>
        {NAV.map(({ icon: Icon, label, key }) => (
          <button key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, padding: "8px 4px", background: "transparent", border: "none", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: key === "chat" ? "rgba(124,58,237,0.2)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={20} style={{ color: key === "chat" ? "#A78BFA" : subtle }} />
            </div>
            <span style={{ fontSize: 10, color: key === "chat" ? "#A78BFA" : "#4B5563", fontWeight: key === "chat" ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
