// STATE: Unauthenticated — visitor with no session
import { Shield, CheckCircle } from "lucide-react";

const bg = "#0F1117", COLOR = "#0EA5E9";

const SIGNALS = [
  "GetStream identity verification",
  "Survivor-status attestation (non-coercive)",
  "Service Credit transaction history",
  "Community peer vouches",
  "Cohort completion record",
];

export function TrustPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Shield size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Trust</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "64px" }}>
        <div style={{ maxWidth: 640, display: "flex", gap: 56, alignItems: "flex-start" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
              Privacy-respecting identity
            </span>
            <h1 style={{ margin: 0, fontSize: 32, fontWeight: 800, lineHeight: 1.1 }}>
              Your Trust score proves<br /><span style={{ color: COLOR }}>you're real — without exposing who you are</span>
            </h1>
            <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF" }}>
              Trust aggregates voluntary signals to establish credibility on the platform. Providers and peers can trust you. You reveal nothing beyond what you choose.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {SIGNALS.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle size={14} color={COLOR} />
                  <span style={{ fontSize: 14, color: "#D1D5DB" }}>{s}</span>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
              Join the Hub — Free
            </button>
          </div>

          {/* Trust score preview */}
          <div style={{ width: 240, borderRadius: 16, border: `1px solid ${COLOR}30`, padding: "24px 20px", background: COLOR + "06", display: "flex", flexDirection: "column", gap: 16, alignItems: "center", flexShrink: 0 }}>
            <div style={{ width: 72, height: 72, borderRadius: 36, border: `3px solid ${COLOR}`, background: COLOR + "15", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={32} color={COLOR} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#6B7280" }}>Your Trust Score</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: COLOR, marginTop: 2 }}>—</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>Sign in to build yours</div>
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
              {SIGNALS.slice(0, 3).map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", opacity: 0.4 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 7, border: `1px solid ${COLOR}50` }} />
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>{s}</span>
                </div>
              ))}
            </div>
            <button style={{ width: "100%", padding: "11px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              Sign in to verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
