// design-sync
// STATE: Report form — error / send failed (mobile)
import { MessageSquare, Zap, Radio, Bell, Settings, AlertCircle } from "lucide-react";

const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const subtle = "var(--comic-text-secondary, #6B7280)";
const text = "var(--comic-text-primary, #F9FAFB)";

const NAV = [
  { icon: MessageSquare, label: "Chat" },
  { icon: Zap, label: "Apps" },
  { icon: Radio, label: "Chyme" },
  { icon: Bell, label: "Alerts" },
  { icon: Settings, label: "Settings", active: true },
];

export function MobileReportAProblemError() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF", fontSize: 12 }}><span>•••</span><span>WiFi</span><span>100%</span></div>
      </div>

      <div style={{ flex: 1, opacity: 0.15, background: bg }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 10 }} />

      {/* Bottom sheet — error state */}
      <div style={{ position: "absolute", bottom: 70, left: 0, right: 0, zIndex: 20, background: "#1C2333", borderRadius: "20px 20px 0 0", border: `1px solid ${border}`, borderBottom: "none", padding: "8px 0 0" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", margin: "0 auto 28px" }} />
        <div style={{ padding: "0 24px 36px", textAlign: "center" }}>
          {/* Icon */}
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.22)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <AlertCircle size={30} style={{ color: "#EF4444" }} />
          </div>

          <div style={{ fontSize: 19, fontWeight: 800, color: text, marginBottom: 10 }}>Couldn't send your report.</div>
          <div style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 28 }}>
            Check your connection and try again. What you wrote is still there.
          </div>

          <button style={{ width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 12 }}>
            Try again
          </button>
          <button style={{ background: "none", border: "none", color: subtle, fontSize: 13, cursor: "pointer", textDecoration: "underline" }}>
            Cancel
          </button>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", zIndex: 30 }}>
        {NAV.map(({ icon: Icon, label, active }) => (
          <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <Icon size={20} style={{ color: (active as boolean | undefined) ? "#A78BFA" : subtle }} />
            <span style={{ fontSize: 10, color: (active as boolean | undefined) ? "#A78BFA" : subtle }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
