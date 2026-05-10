// STATE: Loading — data fetch in progress
import { BarChart2 } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#6366F1";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function WorkforceLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <BarChart2 size={20} color={COLOR} />
        </div>
        {[1, 2].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={160} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={120} h={32} r={8} /><Sk w={28} h={28} r={6} /></div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Stat cards row */}
          <div style={{ display: "flex", gap: 14 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ flex: 1, borderRadius: 14, border: `1px solid ${border}`, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                <Sk w={70} h={11} r={4} /><Sk w={90} h={28} r={6} />
              </div>
            ))}
          </div>

          {/* Bar chart skeleton */}
          <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <Sk w={160} h={16} r={6} /><Sk w={80} h={28} r={8} />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 140 }}>
              {[80, 110, 65, 130, 90, 120, 75, 105, 85, 125, 70, 115].map((h, i) => (
                <div key={i} style={{ flex: 1, height: h, borderRadius: "4px 4px 0 0", background: "rgba(255,255,255,0.06)" }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              {[1, 2, 3, 4, 5, 6].map(i => <Sk key={i} w={55} h={10} r={4} />)}
            </div>
          </div>

          {/* Skill gap table */}
          <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "20px 24px" }}>
            <div style={{ marginBottom: 14 }}><Sk w={180} h={16} r={6} /></div>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${border}` }}>
                <Sk w={180} h={13} r={5} />
                <div style={{ flex: 1, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                  <div style={{ width: `${35 + i * 8}%`, height: "100%", borderRadius: 4, background: "rgba(99,102,241,0.25)" }} />
                </div>
                <Sk w={55} h={22} r={11} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
