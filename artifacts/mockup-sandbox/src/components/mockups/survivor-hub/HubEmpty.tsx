// design-sync
// STATE: Authenticated, no community content yet (fresh install / empty hub)
import {
  MessageSquare, Zap, Hash, Bell, Settings, Globe,
  Plus, ChevronRight, Sparkles, Search,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const ONBOARDING = [
  { icon: Hash, label: "Join a channel", desc: "Browse available channels and join your first community space.", cta: "Explore channels", color: "#A78BFA" },
  { icon: Zap, label: "Explore an app", desc: "17 mini-apps are waiting — from housing to skills to wellness.", cta: "Browse apps", color: "#38BDF8" },
  { icon: Globe, label: "Check the GDP tracker", desc: "See the TI Skills Economy in real time — $300B opportunity.", cta: "Open GDP", color: "#34D399" },
];

export function HubEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg,${accent} 0%,${accentCyan} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
        {[MessageSquare, Zap].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `rgba(124,58,237,0.2)` : "transparent", border: i === 0 ? `1px solid rgba(124,58,237,0.4)` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? "#A78BFA" : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,${accent},${accentCyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>S</div>
      </aside>

      {/* Second sidebar */}
      <aside style={{ width: 240, background: "#0D0F14", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 12 }}>Channels</div>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
            <input placeholder="Search channels…" style={{ width: "100%", padding: "7px 10px 7px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: "#9CA3AF", outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>
        <div style={{ flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: `rgba(124,58,237,0.1)`, border: `1px dashed rgba(124,58,237,0.3)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Hash size={22} style={{ color: "rgba(124,58,237,0.4)" }} />
          </div>
          <div style={{ textAlign: "center", padding: "0 8px" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF", marginBottom: 4 }}>No channels yet</div>
            <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>Channels will appear here once the community is set up</div>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, background: `rgba(124,58,237,0.12)`, border: `1px solid rgba(124,58,237,0.3)`, color: "#A78BFA", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
            <Plus size={13} /> Create Channel
          </button>
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <div style={{ padding: "10px 12px", borderRadius: 10, background: `linear-gradient(135deg,rgba(124,58,237,0.15) 0%,rgba(14,165,233,0.15) 100%)`, border: `1px solid rgba(124,58,237,0.25)` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#A78BFA", marginBottom: 2 }}>Safe Space · Invite Only</div>
            <div style={{ fontSize: 11, color: subtle }}>4.9M survivors worldwide</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Survivor Hub</div>
            <div style={{ fontSize: 12, color: subtle }}>Your peer-to-peer community</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#22C55E", fontWeight: 600 }}>✓ Safe Space</div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "48px 64px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>

            {/* Welcome hero */}
            <div style={{ padding: "32px 40px", borderRadius: 20, background: `linear-gradient(135deg,rgba(124,58,237,0.2) 0%,rgba(14,165,233,0.1) 50%,rgba(16,185,129,0.1) 100%)`, border: `1px solid rgba(124,58,237,0.2)`, textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
                <Sparkles size={16} color="#A78BFA" />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#A78BFA", textTransform: "uppercase" }}>Welcome to Survivor Hub</span>
              </div>
              <div style={{ fontSize: 26, fontWeight: 800, color: text, lineHeight: 1.3, marginBottom: 10 }}>Your community is being set up</div>
              <div style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 24 }}>
                5 million survivors. One economy. $300B opportunity. The hub is ready — start by joining a channel or exploring an app.
              </div>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button style={{ padding: "10px 22px", borderRadius: 10, background: `linear-gradient(135deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                  Get Started
                </button>
                <button style={{ padding: "10px 22px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, color: "#9CA3AF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Explore Apps
                </button>
              </div>
            </div>

            {/* Onboarding checklist */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 14 }}>Get started — 3 steps to your first connection</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ONBOARDING.map(({ icon: Icon, label, desc, cta, color }, i) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, cursor: "pointer" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: `${color}12`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: subtle }}>{i + 1}</span>
                        <span style={{ fontSize: 14, fontWeight: 600, color: text }}>{label}</span>
                      </div>
                      <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                    <button style={{ padding: "7px 14px", borderRadius: 8, background: `${color}12`, border: `1px solid ${color}25`, color, fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
                      {cta} <ChevronRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ padding: "16px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, marginBottom: 16, textAlign: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg,${accent},${accentCyan})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: 18, fontWeight: 800, color: "#fff" }}>S</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: text, marginBottom: 4 }}>Welcome, Survivor</div>
          <div style={{ fontSize: 12, color: subtle, marginBottom: 10 }}>Member since 2026</div>
          <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)", fontSize: 11, color: "#A78BFA", fontWeight: 600 }}>Safe Space ✓</div>
        </div>

        <div style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.12)", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Globe size={14} color="#06B6D4" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#22D3EE" }}>GDP Progress</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 2 }}>$0</div>
          <div style={{ fontSize: 12, color: subtle, marginBottom: 10 }}>Your economy contribution starts when you trade</div>
          <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: "0%", borderRadius: 3, background: `linear-gradient(90deg,#06B6D4 0%,${accent} 100%)` }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ fontSize: 11, color: "#4B5563" }}>0% started</span>
            <span style={{ fontSize: 11, color: "#22D3EE" }}>Global: $247B</span>
          </div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>Why Survivor Hub?</div>
        {[
          "P2P marketplace — 17 apps",
          "End-to-end encrypted",
          "Service Credits economy",
          "No data sold — ever",
        ].map(pt => (
          <div key={pt} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7, fontSize: 12, color: subtle }}>
            <ChevronRight size={12} color={accentCyan} /> {pt}
          </div>
        ))}
      </aside>
    </div>
  );
}
