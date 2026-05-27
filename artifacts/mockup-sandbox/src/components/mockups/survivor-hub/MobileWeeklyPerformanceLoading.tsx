// STATE: Loading — data fetch in progress
import { BarChart2, Calendar, TrendingUp } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#F59E0B";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileWeeklyPerformanceLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <BarChart2 size={16} color={BRAND} />
        <Sk w={150} h={14} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      {/* Tab bar */}
      <div style={{ padding: "10px 16px", borderBottom: `1px solid ${border}`, display: "flex", gap: 8, flexShrink: 0 }}>
        <Sk w={80} h={32} r={8} /><Sk w={80} h={32} r={8} />
      </div>
      {/* Cards 2x2 */}
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ padding: "14px 12px", borderRadius: 12, border: `1px solid ${border}` }}>
              <Sk w={60} h={9} r={4} />
              <div style={{ marginTop: 8 }}><Sk w={70} h={22} r={5} /></div>
              <div style={{ marginTop: 6 }}><Sk w={50} h={9} r={4} /></div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div style={{ padding: "14px 16px", borderRadius: 14, border: `1px solid ${border}` }}>
          <Sk w={140} h={13} r={5} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80, marginTop: 12 }}>
            {[50, 70, 55, 80, 90, 60, 40].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{ width: "70%", height: `${h}%`, borderRadius: "2px 2px 0 0", background: "rgba(255,255,255,0.05)" }} />
                <Sk w={10} h={8} r={3} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ marginTop: "auto", height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[BarChart2, Calendar, TrendingUp].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 0 ? BRAND : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
