// design-sync
// STATE: Authenticated, no incidents logged yet
import { AlertTriangle, Clock, FileText, ShieldCheck } from "lucide-react";

const BRAND = "#E91E8C";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

export function MobileClickLogEmpty() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>
      <div style={{ padding: "12px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertTriangle size={16} color={BRAND} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>ClickLog</div>
            <div style={{ fontSize: 11, color: subtle }}>No incidents logged</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 24px", textAlign: "center", gap: 22 }}>

        {/* Big log button */}
        <button style={{ width: 140, height: 140, borderRadius: "50%", background: BRAND, border: `3px solid ${BRAND}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", boxShadow: `0 0 36px ${BRAND}30` }}>
          <AlertTriangle size={34} color="#fff" />
          <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>Log Incident</span>
        </button>

        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 8 }}>No incidents logged</div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, maxWidth: 290 }}>
            Tap the button above to log a personal safety incident. Optionally add a note or location.
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          {[
            { icon: "👆", label: "One tap" },
            { icon: "🔒", label: "Private" },
            { icon: "📍", label: "Location" },
          ].map(({ icon, label }) => (
            <div key={label} style={{ flex: 1, padding: "12px 8px", borderRadius: 12, background: surface, border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 20, marginBottom: 5 }}>{icon}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: subtle }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(233,30,140,0.05)", border: "1px solid rgba(233,30,140,0.15)", display: "flex", alignItems: "center", gap: 8, width: "100%", boxSizing: "border-box" }}>
          <ShieldCheck size={14} color={BRAND} style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: subtle, textAlign: "left" }}>In an emergency, contact local emergency services first.</span>
        </div>
      </div>

      <div style={{ height: 72, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: AlertTriangle, label: "Log", active: true },
          { Icon: Clock, label: "History", active: false },
          { Icon: FileText, label: "Export", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: active ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
