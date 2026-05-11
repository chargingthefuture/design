// STATE: Loading — data fetch in progress
import { TrendingUp } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#06B6D4";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function GDPLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <TrendingUp size={20} color={COLOR} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={160} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={100} h={32} r={8} /><Sk w={28} h={28} r={6} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Hero stat row */}
          <div style={{ display: "flex", gap: 14 }}>
            {[{ w: 220 }, { w: 160 }, { w: 140 }].map(({ w }, i) => (
              <div key={i} style={{ flex: 1, borderRadius: 16, border: `1px solid ${i === 0 ? COLOR + "30" : border}`, padding: "20px 24px", background: i === 0 ? COLOR + "06" : "transparent", display: "flex", flexDirection: "column", gap: 10 }}>
                <Sk w={80} h={11} r={4} /><Sk w={w} h={36} r={6} /><Sk w={100} h={11} r={4} />
              </div>
            ))}
          </div>

          {/* Line chart */}
          <div style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <Sk w={180} h={16} r={6} />
              <div style={{ display: "flex", gap: 6 }}>
                {[1, 2, 3].map(i => <Sk key={i} w={50} h={26} r={8} />)}
              </div>
            </div>
            <div style={{ height: 160, borderRadius: 8, background: "rgba(6,182,212,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "flex-end", padding: "0 12px 12px" }}>
              <svg width="100%" height="100%" style={{ opacity: 0.2 }}>
                <polyline points="0,120 80,100 160,80 240,60 320,75 400,50 480,30 560,40" stroke={COLOR} strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Skill contribution table */}
          <div style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "20px 24px" }}>
            <div style={{ marginBottom: 14 }}><Sk w={200} h={16} r={6} /></div>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${border}` }}>
                <Sk w={160} h={13} r={5} />
                <div style={{ flex: 1, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.04)" }}>
                  <div style={{ width: `${25 + i * 12}%`, height: "100%", borderRadius: 4, background: "rgba(6,182,212,0.25)" }} />
                </div>
                <Sk w={60} h={13} r={5} /><Sk w={50} h={20} r={10} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
