// STATE: Loading — data fetch in progress
import { BookOpen } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#8B5CF6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileSkillsTaxonomyLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <BookOpen size={16} color={BRAND} />
        <Sk w={130} h={14} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      {/* Search bar skeleton */}
      <div style={{ padding: "10px 16px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <Sk h={36} r={10} />
      </div>
      {/* Sector pills skeleton */}
      <div style={{ padding: "10px 16px", borderBottom: `1px solid ${border}`, display: "flex", gap: 8, flexShrink: 0 }}>
        {[80, 90, 60, 100, 70].map((w, i) => <Sk key={i} w={w} h={28} r={14} />)}
      </div>
      {/* Accordion rows */}
      <div style={{ flex: 1, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 1 }}>
        <Sk w={160} h={13} r={5} />
        <div style={{ marginTop: 10, borderRadius: 14, border: `1px solid ${border}`, overflow: "hidden" }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ padding: "14px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 10 }}>
              <Sk w={160 + i * 20} h={13} r={5} />
              <div style={{ marginLeft: "auto" }}><Sk w={14} h={14} r={3} /></div>
            </div>
          ))}
          {/* Expanded row */}
          <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[70, 80, 55, 90, 65].map((w, i) => <Sk key={i} w={w} h={26} r={13} />)}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[BookOpen, BookOpen, BookOpen].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 0 ? BRAND : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
