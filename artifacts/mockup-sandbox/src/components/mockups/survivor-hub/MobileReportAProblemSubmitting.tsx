// design-sync
// STATE: Report form — submitting / in-progress (mobile)
import { MessageSquare, Zap, Radio, Bell, Settings, AlertCircle, X } from "lucide-react";

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

export function MobileReportAProblemSubmitting() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF", fontSize: 12 }}><span>•••</span><span>WiFi</span><span>100%</span></div>
      </div>

      <div style={{ flex: 1, opacity: 0.15, background: bg }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 10 }} />

      {/* Bottom sheet */}
      <div style={{ position: "absolute", bottom: 70, left: 0, right: 0, zIndex: 20, background: "#1C2333", borderRadius: "20px 20px 0 0", border: `1px solid ${border}`, borderBottom: "none", padding: "8px 0 0" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", margin: "0 auto 20px" }} />
        <div style={{ padding: "0 20px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: text }}>Report a problem</div>
            <button disabled style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151", cursor: "not-allowed" }}>
              <X size={15} />
            </button>
          </div>

          {/* Disabled fields */}
          <div style={{ opacity: 0.4, marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 6 }}>What went wrong?</div>
            <div style={{ padding: "10px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, fontSize: 14, color: "#9CA3AF", minHeight: 64, lineHeight: 1.6 }}>
              The page went blank after I tapped "Send" in the SocketRelay form.
            </div>
          </div>
          <div style={{ opacity: 0.4, marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 6 }}>What were you trying to do?</div>
            <div style={{ padding: "10px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, fontSize: 14, color: "#9CA3AF", minHeight: 44, lineHeight: 1.6 }}>
              Send a relay request to a neighbour.
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 18 }}>
            <AlertCircle size={13} style={{ color: subtle, flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 12, color: subtle, lineHeight: 1.55 }}>Our team reads these to fix problems. Please don't include passwords or personal details.</span>
          </div>

          <button disabled style={{ width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "not-allowed", opacity: 0.7, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
            <span>Sending</span>
            <span style={{ display: "inline-flex", gap: 3 }}>
              {[0.35, 0.6, 0.9].map((op, i) => (
                <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: `rgba(255,255,255,${op})`, display: "inline-block" }} />
              ))}
            </span>
          </button>
          <button disabled style={{ width: "100%", padding: "11px", borderRadius: 10, background: "transparent", border: "1px solid rgba(255,255,255,0.07)", color: "#374151", fontWeight: 600, fontSize: 14, cursor: "not-allowed" }}>Cancel</button>
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
