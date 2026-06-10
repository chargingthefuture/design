// design-sync
// STATE: Unauthenticated — visitor with no session
import { AlertTriangle, Lock, ShieldCheck, Clock, FileText, UserPlus } from "lucide-react";

const BRAND = "#E91E8C";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

export function MobileClickLogPublic() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 12px", background: `${BRAND}10`, borderBottom: `1px solid ${BRAND}25`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={18} color={BRAND} />
            <div style={{ fontSize: 16, fontWeight: 700 }}>ClickLog</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", border: `1px solid ${border}`, color: text, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: BRAND, border: "none", color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Join Free</button>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 24px", textAlign: "center", gap: 22 }}>

        {/* Locked button */}
        <div style={{ position: "relative" }}>
          <div style={{ width: 140, height: 140, borderRadius: "50%", background: "rgba(233,30,140,0.1)", border: `3px solid rgba(233,30,140,0.25)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, filter: "blur(2px)", opacity: 0.5 }}>
            <AlertTriangle size={34} color={BRAND} />
            <span style={{ fontSize: 13, fontWeight: 800, color: BRAND }}>Log Incident</span>
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(233,30,140,0.12)", border: `2px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Lock size={18} color={BRAND} />
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 8 }}>
            Track incidents privately
          </div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, maxWidth: 290 }}>
            Sign in to start logging personal safety incidents — one tap, encrypted, private.
          </div>
        </div>

        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box" }}>
          <UserPlus size={15} /> Create free account
        </button>

        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          {[
            { icon: "👆", label: "One tap" },
            { icon: "🔒", label: "Private" },
            { icon: "📍", label: "Location" },
          ].map(({ icon, label }) => (
            <div key={label} style={{ flex: 1, padding: "12px 8px", borderRadius: 12, background: surface, border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 18, marginBottom: 5 }}>{icon}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: subtle }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav (locked) */}
      <div style={{ height: 72, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[AlertTriangle, Clock, FileText].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: 0.3 }}>
            <Icon size={20} color={subtle} />
            <span style={{ fontSize: 10, color: subtle }}>{["Log", "History", "Export"][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
