// STATE: Loading — data fetch in progress
import { Award } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#A855F7";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function SkillsHuntLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <Award size={20} color={COLOR} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Rounds sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={130} h={16} r={6} />
          <div style={{ marginTop: 12 }}><Sk h={34} r={8} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
          {[{ c: COLOR }, { c: "#22C55E" }, { c: "#F59E0B" }, { c: "#3B82F6" }, { c: "#EC4899" }].map(({ c }, i) => (
            <div key={i} style={{ borderRadius: 12, border: `1px solid ${i === 0 ? c + "40" : border}`, padding: "12px 14px", background: i === 0 ? c + "08" : "transparent" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <Sk w={160} h={14} r={5} /><Sk w={45} h={20} r={10} />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <Sk w={80} h={11} r={4} /><Sk w={60} h={11} r={4} />
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={150} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={28} h={28} r={6} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
          {/* My stats */}
          <div style={{ display: "flex", gap: 14 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, borderRadius: 14, border: `1px solid ${border}`, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
                <Sk w={60} h={10} r={4} /><Sk w={80} h={24} r={5} />
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "20px 24px" }}>
            <div style={{ marginBottom: 14 }}><Sk w={120} h={16} r={6} /></div>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 5 ? `1px solid ${border}` : "none" }}>
                <Sk w={24} h={24} r={12} />
                <Sk w={36} h={36} r={18} />
                <Sk w={120} h={14} r={5} />
                <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                  <Sk w={60} h={14} r={5} /><Sk w={50} h={22} r={11} />
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "18px 24px" }}>
            <div style={{ marginBottom: 14 }}><Sk w={80} h={16} r={6} /></div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <Sk w={52} h={52} r={12} /><Sk w={50} h={10} r={4} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
