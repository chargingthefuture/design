// design-sync
// STATE: Entry control (mobile) — Settings tab open, "Report a problem" item visible
import { MessageSquare, Zap, Radio, Bell, Settings, ChevronRight, Shield, AlertCircle, User, HelpCircle, ExternalLink } from "lucide-react";

const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const subtle = "var(--comic-text-secondary, #6B7280)";
const text = "var(--comic-text-primary, #F9FAFB)";

const NAV = [
  { icon: MessageSquare, label: "Chat", key: "chat" },
  { icon: Zap, label: "Apps", key: "apps" },
  { icon: Radio, label: "Chyme", key: "chyme" },
  { icon: Bell, label: "Alerts", key: "alerts" },
  { icon: Settings, label: "Settings", key: "settings", active: true },
];

const SETTINGS_ROWS = [
  { section: "Account", items: [
    { icon: User, label: "Profile & identity", sub: "Name, photo, username" },
    { icon: Shield, label: "Privacy & visibility", sub: "Who can see your data" },
  ]},
  { section: "Support", items: [
    { icon: HelpCircle, label: "Help center", sub: null, external: true },
    { icon: AlertCircle, label: "Report a problem", sub: null, highlight: true },
  ]},
];

export function MobileReportAProblem() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF", fontSize: 12 }}>
          <span>•••</span><span>WiFi</span><span>100%</span>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "16px 20px 12px", background: "var(--comic-surface-alt, #090B0F)", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: text }}>Settings</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 0" }}>
        {SETTINGS_ROWS.map(({ section, items }) => (
          <div key={section} style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", padding: "0 20px", marginBottom: 8 }}>
              {section}
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, borderRadius: 14, overflow: "hidden", margin: "0 16px" }}>
              {items.map((item, idx) => {
                const Icon = item.icon;
                const isHighlight = (item as any).highlight;
                const isExternal = (item as any).external;
                return (
                  <div key={item.label}>
                    {idx > 0 && <div style={{ height: 1, background: border, margin: "0 16px" }} />}
                    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", cursor: "pointer", background: isHighlight ? "rgba(167,139,250,0.07)" : "transparent" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: isHighlight ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} style={{ color: isHighlight ? "#A78BFA" : subtle }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: isHighlight ? 700 : 600, color: isHighlight ? "#C4B5FD" : text }}>{item.label}</div>
                        {item.sub && <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>{item.sub}</div>}
                      </div>
                      {isExternal
                        ? <ExternalLink size={15} style={{ color: "#374151" }} />
                        : <ChevronRight size={16} style={{ color: isHighlight ? "#A78BFA" : "#374151" }} />
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Sign out */}
        <div style={{ margin: "0 16px" }}>
          <div style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "center", cursor: "pointer" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#6B7280" }}>Sign out</span>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 70, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", flexShrink: 0 }}>
        {NAV.map(({ icon: Icon, label, key, active }) => (
          <div key={key} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer" }}>
            <Icon size={20} style={{ color: active ? "#A78BFA" : subtle }} />
            <span style={{ fontSize: 10, color: active ? "#A78BFA" : subtle, fontWeight: active ? 700 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
