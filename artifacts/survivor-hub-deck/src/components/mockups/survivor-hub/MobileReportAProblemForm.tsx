// design-sync
// STATE: Report form — default / empty (mobile)
import { MessageSquare, Zap, Radio, Bell, Settings, AlertCircle, X, ChevronLeft } from "lucide-react";

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

export function MobileReportAProblemForm() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF", fontSize: 12 }}>
          <span>•••</span><span>WiFi</span><span>100%</span>
        </div>
      </div>

      {/* Nav header */}
      <div style={{ padding: "14px 20px", background: "var(--comic-surface-alt, #090B0F)", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: subtle, display: "flex", alignItems: "center", gap: 4, fontSize: 14, padding: 0 }}>
          <ChevronLeft size={18} /> Settings
        </button>
        <div style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: 700, color: text, marginRight: 60 }}>Report a problem</div>
      </div>

      {/* Dimmed content bg */}
      <div style={{ flex: 1, opacity: 0.15, background: bg }} />

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 10 }} />

      {/* Bottom sheet */}
      <div style={{ position: "absolute", bottom: 70, left: 0, right: 0, zIndex: 20, background: "#1C2333", borderRadius: "20px 20px 0 0", border: `1px solid ${border}`, borderBottom: "none", padding: "8px 0 0" }}>
        {/* Handle */}
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", margin: "0 auto 20px" }} />

        <div style={{ padding: "0 20px 24px" }}>
          {/* Title */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: text }}>Report a problem</div>
            <button style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}>
              <X size={15} />
            </button>
          </div>

          {/* Field 1 */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: text }}>What went wrong?</span>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 5px", borderRadius: 4, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.22)", color: "#FCA5A5" }}>required</span>
            </div>
            <textarea
              placeholder="Describe what happened…"
              rows={3}
              style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 14, color: "#E8EAF0", resize: "none", outline: "none", fontFamily: "'Inter', system-ui, sans-serif", boxSizing: "border-box" }}
            />
          </div>

          {/* Field 2 */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: text }}>What were you trying to do?</span>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 5px", borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: subtle }}>optional</span>
            </div>
            <textarea
              placeholder="This helps us understand the context…"
              rows={2}
              style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 14, color: "#E8EAF0", resize: "none", outline: "none", fontFamily: "'Inter', system-ui, sans-serif", boxSizing: "border-box" }}
            />
          </div>

          {/* Privacy note */}
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 18 }}>
            <AlertCircle size={13} style={{ color: subtle, flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 12, color: subtle, lineHeight: 1.55 }}>Our team reads these to fix problems. Please don't include passwords or personal details.</span>
          </div>

          {/* Actions */}
          <button style={{ width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 10 }}>
            Send report
          </button>
          <button style={{ width: "100%", padding: "11px", borderRadius: 10, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: subtle, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Cancel
          </button>
        </div>
      </div>

      {/* Bottom nav */}
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
