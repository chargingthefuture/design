// design-sync
import { Heart, DollarSign, MessageSquare, Github, Lock, ChevronRight, Home, Layers, User } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const GOALS = [
  { label: "Funding",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
  { label: "Quora",    current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
  { label: "Stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
];

export function MobileContributionsPublic() {
  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 18px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={18} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: text }}>Contributions</div>
            <div style={{ fontSize: 12, color: subtle }}>Community support drive</div>
          </div>
        </div>

        <p style={{ fontSize: 13, color: subtle, lineHeight: 1.8, margin: "0 0 22px" }}>
          The platform is free and stays free. Members who can help cover infrastructure costs through gift cards, Quora comments, or GitHub stars. Every contribution is private.
        </p>

        {/* Drive progress */}
        <div style={{ background: surface, borderRadius: 12, padding: "16px", border: `1px solid ${border}`, marginBottom: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 12 }}>Spring 2026 Drive</div>
          {GOALS.map(({ label, current, target, unit, Icon, color }) => {
            const pct = Math.min(Math.round((current / target) * 100), 100);
            return (
              <div key={label} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon size={12} color={color} />
                    <span style={{ fontSize: 12, color: subtle }}>{label}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color }}>{unit}{current.toLocaleString()} / {unit}{target.toLocaleString()}</span>
                </div>
                <div style={{ height: 5, background: border, borderRadius: 99 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Sign-in gate */}
        <div style={{ background: `${COLOR}0C`, borderRadius: 12, padding: "18px", border: `1px solid ${COLOR}30` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: `${COLOR}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Lock size={16} color={COLOR} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: text }}>Sign in to contribute</div>
              <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>Available to signed-in members</div>
            </div>
          </div>
          <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "11px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            Sign in <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {[
          { Icon: Home,   label: "Hub",     active: false },
          { Icon: Heart,  label: "Support", active: true  },
          { Icon: Layers, label: "Apps",    active: false },
          { Icon: User,   label: "Profile", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: active ? COLOR : subtle }} />
            <span style={{ fontSize: 9, fontWeight: active ? 700 : 400, color: active ? COLOR : subtle }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
