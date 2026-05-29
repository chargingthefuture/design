// STATE: Unauthenticated — visitor with no session
import { AlertTriangle, Lock, ShieldCheck, UserPlus, Eye, EyeOff } from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

export function ClickLogPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <AlertTriangle size={18} color={BRAND} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>ClickLog</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, color: text, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <UserPlus size={13} /> Join Free
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 64px" }}>
        <div style={{ maxWidth: 600, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>

          {/* Locked button */}
          <div style={{ position: "relative" }}>
            <div style={{ width: 160, height: 160, borderRadius: "50%", background: "rgba(233,30,140,0.1)", border: `4px solid rgba(233,30,140,0.3)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, filter: "blur(2px)", opacity: 0.5 }}>
              <AlertTriangle size={40} style={{ color: BRAND }} />
              <span style={{ fontSize: 15, fontWeight: 800, color: BRAND }}>Log Incident</span>
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(233,30,140,0.15)", border: `2px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Lock size={22} color={BRAND} />
              </div>
            </div>
          </div>

          <div>
            <h1 style={{ margin: 0, fontSize: 30, fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
              Track incidents privately.<br />
              <span style={{ color: BRAND }}>Sign in to start.</span>
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: subtle, lineHeight: 1.7, maxWidth: 440 }}>
              One tap to log a personal safety incident. Add notes, attach location, and keep a private encrypted history — only visible to you.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ padding: "14px 32px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Create free account
            </button>
            <button style={{ padding: "14px 24px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, color: "#9CA3AF", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              Sign In
            </button>
          </div>

          {/* Features */}
          <div style={{ display: "flex", gap: 12, width: "100%" }}>
            {[
              { icon: Eye, label: "Private by default", desc: "No one else can see your logs — ever." },
              { icon: ShieldCheck, label: "End-to-end encrypted", desc: "Your data is protected at rest and in transit." },
              { icon: EyeOff, label: "Discreet logging", desc: "One tap — no visible confirmation needed." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} style={{ flex: 1, padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, textAlign: "center" }}>
                <Icon size={20} color={BRAND} style={{ marginBottom: 8, opacity: 0.7 }} />
                <div style={{ fontSize: 12, fontWeight: 700, color: text, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
