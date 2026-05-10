// STATE: Unauthenticated — visitor with no session
import { BarChart2, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#6366F1";
const BARS = [37, 25, 20, 18];
const LABELS = ["Employed", "In Training", "Seeking", "Exploring"];
const COLORS = ["#22C55E", COLOR, "#F59E0B", "#6B7280"];

export function MobileWorkforcePublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <BarChart2 size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Workforce</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>4.9M survivors tracked</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Real-time skills distribution, employment gaps, and personalized pathways across 4.9M survivors.</p>
        {/* Live snapshot */}
        <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "14px 16px", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 10 }}>Live snapshot</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {BARS.map((pct, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 65, fontSize: 11, color: "#9CA3AF" }}>{LABELS[i]}</span>
                <div style={{ flex: 1, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.05)" }}>
                  <div style={{ width: `${pct * 2.5}%`, height: "100%", borderRadius: 3, background: COLORS[i] + "70" }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: COLORS[i], width: 28, textAlign: "right" }}>{pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative", minHeight: 300 }}>
        <div style={{ height: 200, filter: "blur(4px)", pointerEvents: "none", opacity: 0.4, borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 14, fontWeight: 700, textAlign: "center" }}>Sign in for your personalized pathway</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
