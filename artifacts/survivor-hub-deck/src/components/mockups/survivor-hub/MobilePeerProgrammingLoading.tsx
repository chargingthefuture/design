// STATE: Loading — data fetch in progress
import { Users, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#8B5CF6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobilePeerProgrammingLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Users size={16} color={COLOR} /><Sk w={130} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={80} h={30} r={8} /></div>
      </div>
      <div style={{ flex: 1, padding: "14px", display: "flex", flexDirection: "column", gap: 12, overflowY: "hidden" }}>
        {/* My cohort */}
        <div style={{ borderRadius: 14, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Sk w={170} h={15} r={5} /><Sk w={55} h={20} r={10} />
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[55, 65, 60].map((w, i) => <Sk key={i} w={w} h={22} r={11} />)}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[1, 2, 3].map(i => <Sk key={i} w={28} h={28} r={14} />)}
            <Sk w={55} h={11} r={4} />
          </div>
          <Sk h={38} r={8} />
        </div>
        {/* Open cohorts */}
        <Sk w={100} h={11} r={4} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Sk w={160} h={14} r={5} /><Sk w={50} h={18} r={9} />
            </div>
            <Sk w={100} h={11} r={4} />
            <div style={{ display: "flex", gap: 5 }}>
              {[45, 55, 50].map((w, j) => <Sk key={j} w={w} h={20} r={10} />)}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ display: "flex" }}>
                {[1, 2, 3].map(j => <Sk key={j} w={22} h={22} r={11} />)}
              </div>
              <Sk w={50} h={10} r={4} />
              <div style={{ marginLeft: "auto" }}><Sk w={70} h={28} r={8} /></div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Users, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
