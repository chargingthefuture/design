// STATE: Unauthenticated — visitor with no session
import { Shield, CheckCircle } from "lucide-react";

const bg = "#0F1117", COLOR = "#0EA5E9";

const SIGNALS = [
  "Identity verification",
  "Survivor-status attestation",
  "Service Credit history",
  "Community peer vouches",
  "Cohort completion record",
];

export function MobileTrustPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ flex: 1, padding: "24px 20px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Shield size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Trust</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>Privacy-respecting identity</span>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>
          Prove you're real.<br /><span style={{ color: COLOR }}>Without exposing who you are.</span>
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Trust aggregates voluntary signals to establish credibility. Providers and peers can trust you — you reveal nothing beyond what you choose.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {SIGNALS.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircle size={13} color={COLOR} />
              <span style={{ fontSize: 13, color: "#D1D5DB" }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Trust score preview card */}
        <div style={{ borderRadius: 16, border: `1px solid ${COLOR}30`, padding: "20px", background: COLOR + "06", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, border: `3px solid ${COLOR}`, background: COLOR + "15", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Shield size={26} color={COLOR} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Your Trust Score</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: COLOR, marginTop: 2 }}>—</div>
            <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>Sign in to build yours</div>
          </div>
          <button style={{ width: "100%", padding: "13px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Join the Hub — Free
          </button>
        </div>
      </div>
    </div>
  );
}
