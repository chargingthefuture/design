// STATE: Loading — data fetch in progress
import { Search } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#A855F7";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileSkillsHuntLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>

      {/* App header */}
      <div style={{ height: 60, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Search size={16} color={COLOR} />
        <Sk w={100} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={60} h={34} r={8} /></div>
      </div>

      {/* Scout form skeleton */}
      <div style={{ flex: 1, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "hidden" }}>
        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Sk w={180} h={16} r={5} />
          <Sk w={260} h={11} r={4} />
        </div>

        {/* Name row */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <Sk w={70} h={10} r={4} /><Sk h={40} r={10} />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <Sk w={70} h={10} r={4} /><Sk h={40} r={10} />
          </div>
        </div>

        {/* Quora */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Sk w={130} h={10} r={4} /><Sk h={40} r={10} />
        </div>

        {/* Skills */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Sk w={60} h={10} r={4} />
          <div style={{ display: "flex", gap: 6 }}>
            {[1,2,3].map(i => <Sk key={i} w={70} h={26} r={13} />)}
          </div>
          <Sk h={40} r={10} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {[1,2,3,4,5].map(i => <Sk key={i} w={75} h={26} r={13} />)}
          </div>
        </div>

        {/* Submit button */}
        <Sk h={48} r={12} />

        {/* Mission teaser */}
        <Sk h={52} r={12} />
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[Search, ...Array(3)].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            {i === 0 ? <Search size={20} color={COLOR} /> : <Sk w={24} h={24} r={6} />}
            <Sk w={32} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
