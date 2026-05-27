// STATE: Authenticated, no metrics data yet
import { BarChart2, Clock, Calendar, TrendingUp } from "lucide-react";

const BRAND = "#F59E0B";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

export function MobileWeeklyPerformanceEmpty() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>
      <div style={{ padding: "12px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BarChart2 size={16} color={BRAND} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Weekly Performance</div>
            <div style={{ fontSize: 11, color: subtle }}>May 19–25, 2025</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 10, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 10, fontWeight: 600, color: BRAND }}>● LIVE</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 24px", textAlign: "center", gap: 20 }}>

        <div style={{ width: 72, height: 72, borderRadius: 20, background: `${BRAND}10`, border: `1px dashed ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BarChart2 size={30} style={{ color: BRAND, opacity: 0.4 }} />
        </div>

        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 8 }}>Week in progress</div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, maxWidth: 300 }}>
            Metrics will populate when an admin closes the week. Check back at the end of the week.
          </div>
        </div>

        {/* Empty metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%" }}>
          {[
            { l: "Members", c: "#A78BFA" },
            { l: "Sign-ups", c: "#22C55E" },
            { l: "Engagements", c: BRAND },
            { l: "GDP Delta", c: "#06B6D4" },
          ].map(({ l, c }) => (
            <div key={l} style={{ padding: "14px 12px", borderRadius: 12, background: surface, border: `1px solid ${c}15`, textAlign: "center" }}>
              <div style={{ fontSize: 9, color: subtle, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: subtle }}>—</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 20, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
          <Clock size={14} color={subtle} />
          <span style={{ fontSize: 12, color: subtle }}>Closes Sunday, May 25</span>
        </div>
      </div>

      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[BarChart2, Calendar, TrendingUp].map((Icon, i) => (
          <button key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 400 }}>
              {["Metrics", "History", "Trends"][i]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
