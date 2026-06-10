// design-sync
import { Heart, DollarSign, MessageSquare, Github, Inbox, Home, Layers, User } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const GOALS = [
  { label: "Funding",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
  { label: "Quora",    current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
  { label: "Stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
];

export function MobileContributionsEmpty() {
  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={13} color="#fff" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: text }}>My Contributions</span>
        </div>
        <div style={{ fontSize: 12, color: subtle }}>Spring 2026 drive</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
        {/* Drive compact */}
        <div style={{ background: surface, borderRadius: 10, padding: "12px 14px", border: `1px solid ${border}`, marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 10 }}>Drive progress</div>
          {GOALS.map(({ label, current, target, unit, color }) => {
            const pct = Math.min(Math.round((current / target) * 100), 100);
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: subtle, width: 60, flexShrink: 0 }}>{label}</span>
                <div style={{ flex: 1, height: 5, background: border, borderRadius: 99 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                </div>
                <span style={{ fontSize: 11, color, fontWeight: 600, width: 60, textAlign: "right", flexShrink: 0 }}>{unit}{current.toLocaleString()}</span>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 20px", textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: `${COLOR}10`, border: `1px solid ${COLOR}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
            <Inbox size={24} color={COLOR} style={{ opacity: 0.6 }} />
          </div>
          <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600, color: text }}>No contributions yet</h3>
          <p style={{ margin: "0 0 22px", fontSize: 13, color: subtle, lineHeight: 1.7 }}>
            If you're able to help, there are three ways to do it. The platform stays free either way.
          </p>
          <button style={{ padding: "10px 28px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            See how to contribute
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
