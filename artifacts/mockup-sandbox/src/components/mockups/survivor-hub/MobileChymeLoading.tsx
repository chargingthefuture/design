// STATE: Loading — data fetch in progress
import { Radio, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#22C55E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileChymeLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Radio size={16} color={COLOR} /><Sk w={80} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={60} h={22} r={11} /></div>
      </div>
      <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10, overflowY: "hidden" }}>
        <Sk w={100} h={10} r={4} />
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${i === 1 ? COLOR + "40" : border}`, padding: "12px 14px", background: i === 1 ? COLOR + "06" : "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <Sk w={180} h={14} r={5} /><Sk w={32} h={16} r={8} />
            </div>
            <Sk w={110} h={11} r={4} />
            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <Sk w={30} h={11} r={4} /><Sk w={40} h={11} r={4} /><Sk w={45} h={18} r={9} />
            </div>
          </div>
        ))}
        <Sk w={90} h={10} r={4} />
        {[1, 2].map(i => (
          <div key={i} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "10px 12px", opacity: 0.6 }}>
            <Sk w={160} h={12} r={5} />
            <div style={{ display: "flex", gap: 8, marginTop: 5 }}><Sk w={80} h={10} r={4} /><Sk w={70} h={10} r={4} /></div>
          </div>
        ))}
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Radio, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
