// STATE: Unauthenticated — visitor with no session
import { Zap, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#F59E0B";

export function MobileServiceCreditsPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ flex: 1, padding: "24px 20px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Zap size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Service Credits</span>
        </div>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>
          Earn credits by participating.<br /><span style={{ color: COLOR }}>Spend them on real services.</span>
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Your participation in the Hub has real monetary value. Earn credits through learning, mentoring, and community activities.</p>

        {/* Earn examples */}
        <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", padding: "16px", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Ways to Earn</div>
          {[
            { action: "Complete a GentlePulse session", credits: "+5" },
            { action: "Attend a LevelUp cohort", credits: "+15" },
            { action: "Refer a survivor", credits: "+50" },
          ].map((e, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ fontSize: 13 }}>{e.action}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#22C55E" }}>{e.credits}</span>
            </div>
          ))}
        </div>

        {/* Spend examples */}
        <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", padding: "16px", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: COLOR, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Ways to Spend</div>
          {[
            { action: "Housing (LightHouse)", credits: "Variable" },
            { action: "Transport (TrustTransport)", credits: "12–40 cr" },
            { action: "Trades (Foundation)", credits: "Variable" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ fontSize: 13 }}>{s.action}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLOR }}>{s.credits}</span>
            </div>
          ))}
        </div>

        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join to start earning</button>
      </div>
    </div>
  );
}
