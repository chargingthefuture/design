// STATE: Loading — data fetch in progress
import { BarChart2 } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#F59E0B";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function WeeklyPerformanceLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: BRAND + "30", border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <BarChart2 size={20} color={BRAND} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Week sidebar */}
      <aside style={{ width: 240, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={130} h={12} r={4} />
          <div style={{ marginTop: 6 }}><Sk w={190} h={10} r={4} /></div>
        </div>
        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          <Sk w={80} h={9} r={4} />
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px" }}>
              <Sk w={150} h={12} r={4} />
              <div style={{ marginLeft: "auto" }}><Sk w={44} h={18} r={9} /></div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={200} h={15} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={90} h={26} r={13} />
            <Sk w={90} h={26} r={8} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {/* Metric card skeletons */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ padding: "18px 16px", borderRadius: 14, border: `1px solid ${border}` }}>
                <Sk w={80} h={10} r={4} />
                <div style={{ marginTop: 10 }}><Sk w={70} h={26} r={5} /></div>
                <div style={{ marginTop: 8 }}><Sk w={100} h={10} r={4} /></div>
              </div>
            ))}
          </div>
          {/* Chart skeleton */}
          <div style={{ padding: "20px 24px", borderRadius: 16, border: `1px solid ${border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <Sk w={200} h={14} r={5} />
              <div style={{ display: "flex", gap: 12 }}><Sk w={80} h={12} r={4} /><Sk w={80} h={12} r={4} /></div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120 }}>
              {[70, 85, 60, 90, 95, 75, 50].map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 100 }}>
                    <div style={{ width: "45%", height: `${h * 0.7}%`, borderRadius: "3px 3px 0 0", background: "rgba(255,255,255,0.04)" }} />
                    <div style={{ width: "45%", height: `${h}%`, borderRadius: "3px 3px 0 0", background: "rgba(255,255,255,0.04)" }} />
                  </div>
                  <Sk w={20} h={9} r={4} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <Sk w={100} h={10} r={4} />
        <Sk h={100} r={14} />
        <Sk w={110} h={10} r={4} />
        {[1, 2, 3, 4].map(i => <Sk key={i} h={38} r={8} />)}
      </aside>
    </div>
  );
}
