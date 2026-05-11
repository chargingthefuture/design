// STATE: Loading — data fetch in progress
import { BookOpen } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#22C55E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function LevelUpLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Sidebar — tracks */}
      <aside style={{ width: 280, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <BookOpen size={16} color={COLOR} /><Sk w={80} h={16} r={6} />
          </div>
          <Sk h={34} r={8} />
        </div>
        <div style={{ padding: "12px 12px 6px" }}><Sk w={80} h={10} r={4} /></div>
        <div style={{ flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { c: COLOR }, { c: "#3B82F6" }, { c: "#F59E0B" }, { c: "#EC4899" }, { c: "#8B5CF6" },
          ].map(({ c }, i) => (
            <div key={i} style={{ borderRadius: 10, border: `1px solid ${i === 0 ? c + "40" : border}`, padding: "10px 12px", background: i === 0 ? c + "08" : "transparent", display: "flex", alignItems: "center", gap: 10 }}>
              <Sk w={10} h={10} r={5} /><Sk w={100 + i * 10} h={13} r={5} />
              <div style={{ marginLeft: "auto" }}><Sk w={24} h={18} r={9} /></div>
            </div>
          ))}
        </div>
        {/* My progress */}
        <div style={{ padding: "14px 14px", borderTop: `1px solid ${border}` }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Sk w={90} h={11} r={4} />
            <div style={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.04)" }}>
              <div style={{ width: "45%", height: "100%", borderRadius: 4, background: "rgba(34,197,94,0.3)" }} />
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {[1, 2, 3, 4].map(i => <Sk key={i} w={36} h={36} r={8} />)}
            </div>
          </div>
        </div>
      </aside>

      {/* Main — cohort cards */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={150} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={120} h={32} r={8} /><Sk w={28} h={28} r={6} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "18px 22px", display: "flex", gap: 16 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Sk w={200} h={16} r={5} /><Sk w={55} h={20} r={10} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Sk w={80} h={12} r={4} /><Sk w={70} h={12} r={4} /><Sk w={90} h={12} r={4} />
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {[55, 60, 50].map((w, j) => <Sk key={j} w={w} h={22} r={11} />)}
                </div>
                {/* Progress bar */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <Sk w={80} h={10} r={4} /><Sk w={40} h={10} r={4} />
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.04)" }}>
                    <div style={{ width: `${20 + i * 18}%`, height: "100%", borderRadius: 3, background: "rgba(34,197,94,0.3)" }} />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", flexShrink: 0 }}>
                <Sk w={60} h={24} r={5} /><Sk w={100} h={36} r={8} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
