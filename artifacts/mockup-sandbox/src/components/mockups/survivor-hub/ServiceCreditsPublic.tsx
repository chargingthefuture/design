// STATE: Unauthenticated — visitor with no session
import { Zap, Lock, ArrowRight } from "lucide-react";

const bg = "#0F1117", COLOR = "#F59E0B";

const EARN_WAYS = [
  { action: "Complete a GentlePulse session", credits: "+5" },
  { action: "Attend a LevelUp cohort session", credits: "+15" },
  { action: "Refer a verified survivor", credits: "+50" },
  { action: "Give peer support in Chyme", credits: "+3" },
  { action: "Complete Skills Hunt round", credits: "+100" },
];

const SPEND_WAYS = [
  { action: "Pay for housing (LightHouse)", credits: "Variable" },
  { action: "Book a TrustTransport ride", credits: "12–40 cr" },
  { action: "Hire from Foundation (trades)", credits: "Variable" },
  { action: "Pay a Directory provider", credits: "Variable" },
];

export function ServiceCreditsPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Zap size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Service Credits</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
        </div>
      </div>

      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          The Survivor Hub economy
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          Earn credits. Spend them<br /><span style={{ color: COLOR }}>on real services, for free.</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520 }}>
          Service Credits are earned by participating in the Hub and spent on housing, transport, healthcare, and trades. Your participation has real monetary value.
        </p>
        <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
          Join the Hub — Free
        </button>
      </div>

      {/* Earn/Spend preview */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", gap: 24, filter: "blur(3px)", pointerEvents: "none", opacity: 0.55 }}>
          <div style={{ flex: 1, borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", padding: "20px 24px", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>Ways to Earn</div>
            {EARN_WAYS.map((e, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: 13 }}>{e.action}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#22C55E" }}>{e.credits}</span>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", padding: "20px 24px", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: COLOR, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>Ways to Spend</div>
            {SPEND_WAYS.map((s, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: 13 }}>{s.action}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: COLOR }}>{s.credits}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={22} color={COLOR} /></div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to start earning credits</div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Sign in to earn credits</button>
        </div>
      </div>
    </div>
  );
}
