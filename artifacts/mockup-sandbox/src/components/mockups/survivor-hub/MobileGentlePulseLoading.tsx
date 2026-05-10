// STATE: Loading — data fetch in progress
import { Heart, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0A0F0E", border = "#1A2922", COLOR = "#14B8A6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(20,184,166,0.08)", flexShrink: 0 }} />
);

export function MobileGentlePulseLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Heart size={16} color={COLOR} /><Sk w={110} h={15} r={5} />
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}><Sk w={28} h={28} r={8} /></div>
      </div>
      <div style={{ padding: "10px 14px", borderBottom: `1px solid ${border}`, display: "flex", gap: 6, overflowX: "hidden", flexShrink: 0 }}>
        {[60, 80, 70, 65, 75].map((w, i) => <Sk key={i} w={w} h={28} r={14} />)}
      </div>
      <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10, overflowY: "hidden" }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "14px 16px", display: "flex", gap: 12 }}>
            <Sk w={44} h={44} r={22} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
              <Sk w={130} h={14} r={5} />
              <div style={{ display: "flex", gap: 6 }}>
                <Sk w={50} h={18} r={9} /><Sk w={55} h={18} r={9} />
              </div>
              <Sk h={11} r={4} /><Sk w="80%" h={11} r={4} />
            </div>
          </div>
        ))}
        {/* Streak */}
        <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
          <Sk w={40} h={40} r={20} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
            <Sk w={80} h={10} r={4} /><Sk w={110} h={18} r={5} />
          </div>
        </div>
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Heart, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
