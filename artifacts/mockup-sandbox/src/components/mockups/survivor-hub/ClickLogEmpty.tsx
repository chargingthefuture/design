// design-sync
// STATE: Authenticated, no incidents logged yet
import { AlertTriangle, ShieldCheck, Plus } from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

export function ClickLogEmpty() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "#0D0F14", flexShrink: 0 }}>
        <AlertTriangle size={18} color={BRAND} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>ClickLog</div>
          <div style={{ fontSize: 12, color: subtle }}>Personal incident counter — private &amp; encrypted</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 64px" }}>
        <div style={{ maxWidth: 560, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>

          {/* Log button — prominent even in empty state */}
          <button style={{ width: 160, height: 160, borderRadius: "50%", background: BRAND, border: `4px solid ${BRAND}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", boxShadow: `0 0 48px ${BRAND}30` }}>
            <AlertTriangle size={40} color="#fff" />
            <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Log Incident</span>
          </button>

          <div>
            <div style={{ fontSize: 24, fontWeight: 800, color: text, marginBottom: 10 }}>No incidents logged</div>
            <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7, maxWidth: 440 }}>
              ClickLog lets you silently track personal safety incidents — one tap, optionally add a note or location. All data is encrypted and only visible to you.
            </div>
          </div>

          {/* How it works */}
          <div style={{ display: "flex", gap: 12, width: "100%" }}>
            {[
              { icon: "👆", title: "One tap", desc: "Instantly log an incident — no typing required." },
              { icon: "📝", title: "Add context", desc: "Optionally add notes or location to any log." },
              { icon: "🔒", title: "Private", desc: "Encrypted. Only you can see your history." },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: text, marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: "12px 16px", borderRadius: 12, background: "rgba(233,30,140,0.05)", border: "1px solid rgba(233,30,140,0.15)", display: "flex", alignItems: "center", gap: 10 }}>
            <ShieldCheck size={16} color={BRAND} />
            <span style={{ fontSize: 12, color: subtle }}>In an emergency, always contact local emergency services first.</span>
          </div>

        </div>
      </div>
    </div>
  );
}
