// STATE: Unauthenticated — visitor with no session
import { TrendingUp, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#06B6D4";
const BARS = [37, 25, 20, 18];
const LABELS = ["Employed", "Training", "Seeking", "Exploring"];
const COLS = ["#22C55E", COLOR, "#F59E0B", "#6B7280"];

export function MobileGDPPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <TrendingUp size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>GDP</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>Survivor economy dashboard</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>The gross domestic product of the survivor economy — real-time economic activity, skill gaps, and contributor rankings.</p>

        {/* Live snapshot */}
        <div style={{ borderRadius: 16, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 11, color: "#6B7280" }}>Platform economic activity</div>
          <div style={{ fontSize: 26, fontWeight: 900, color: COLOR }}>$2.4B</div>
          <div style={{ fontSize: 11, color: "#9CA3AF" }}>annual service credits exchanged</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {BARS.map((pct, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 56, fontSize: 11, color: "#9CA3AF" }}>{LABELS[i]}</span>
                <div style={{ flex: 1, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.05)" }}>
                  <div style={{ width: `${pct * 2.5}%`, height: "100%", borderRadius: 3, background: COLS[i] + "70" }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: COLS[i], width: 28, textAlign: "right" }}>{pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative", minHeight: 200 }}>
        <div style={{ height: 160, filter: "blur(4px)", pointerEvents: "none", opacity: 0.35, borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 14, fontWeight: 700, textAlign: "center" }}>Sign in for contributor rankings</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
