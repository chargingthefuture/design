// STATE: Loading — data fetch in progress
import { BookOpen } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#8B5CF6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function SkillsTaxonomyLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: BRAND + "30", border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <BookOpen size={20} color={BRAND} />
        </div>
        {[1, 2, 3, 4].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Sector sidebar */}
      <aside style={{ width: 240, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={110} h={12} r={4} />
          <div style={{ marginTop: 6 }}><Sk w={190} h={10} r={4} /></div>
          <div style={{ marginTop: 12 }}><Sk h={32} r={8} /></div>
        </div>
        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          <Sk w={80} h={9} r={4} />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px" }}>
              <Sk w={8} h={8} r={4} />
              <Sk w={100 + i * 8} h={13} r={5} />
              <div style={{ marginLeft: "auto" }}><Sk w={22} h={13} r={4} /></div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={160} h={15} r={6} />
          <div style={{ marginLeft: "auto" }}><Sk w={120} h={28} r={8} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {/* Stat cards */}
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, padding: "14px 16px", borderRadius: 12, border: `1px solid ${border}` }}>
                <Sk w={60} h={10} r={4} />
                <div style={{ marginTop: 8 }}><Sk w={50} h={20} r={5} /></div>
              </div>
            ))}
          </div>
          {/* Accordion rows */}
          <div style={{ borderRadius: 14, border: `1px solid ${border}`, overflow: "hidden" }}>
            {[180, 150, 200, 140, 170].map((w, i) => (
              <div key={i} style={{ padding: "14px 18px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12 }}>
                <Sk w={14} h={14} r={3} />
                <Sk w={w} h={14} r={5} />
                <div style={{ marginLeft: "auto" }}><Sk w={60} h={22} r={11} /></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <Sk w={110} h={10} r={4} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[1, 2, 3, 4].map(i => <Sk key={i} h={60} r={10} />)}
        </div>
        <Sk w={110} h={10} r={4} />
        {[1, 2, 3].map(i => <Sk key={i} h={44} r={8} />)}
      </aside>
    </div>
  );
}
