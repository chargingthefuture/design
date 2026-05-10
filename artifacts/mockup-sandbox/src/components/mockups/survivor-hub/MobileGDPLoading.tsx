// STATE: Loading — data fetch in progress
import { TrendingUp, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#06B6D4";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileGDPLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <TrendingUp size={16} color={COLOR} /><Sk w={130} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      <div style={{ flex: 1, padding: "14px 14px", display: "flex", flexDirection: "column", gap: 14, overflowY: "hidden" }}>
        {/* Hero stat */}
        <div style={{ borderRadius: 16, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
          <Sk w={80} h={10} r={4} /><Sk w={180} h={32} r={6} /><Sk w={120} h={11} r={4} />
        </div>
        {/* Sub stats */}
        <div style={{ display: "flex", gap: 10 }}>
          {[1, 2].map(i => (
            <div key={i} style={{ flex: 1, borderRadius: 12, border: `1px solid ${border}`, padding: "14px", display: "flex", flexDirection: "column", gap: 7 }}>
              <Sk w={70} h={10} r={4} /><Sk w={90} h={20} r={5} />
            </div>
          ))}
        </div>
        {/* Chart */}
        <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "14px" }}>
          <Sk w={130} h={13} r={5} />
          <div style={{ height: 100, borderRadius: 8, background: "rgba(6,182,212,0.04)", marginTop: 12, display: "flex", alignItems: "flex-end", padding: "8px" }}>
            <svg width="100%" height="70" style={{ opacity: 0.15 }}>
              <polyline points="0,65 50,50 100,35 150,20 200,30 250,15 300,25" stroke={COLOR} strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        {/* Skill table */}
        <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
          <Sk w={150} h={13} r={5} />
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Sk w={130} h={12} r={4} /><Sk w={40} h={12} r={4} />
              </div>
              <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.04)" }}>
                <div style={{ width: `${25 + i * 15}%`, height: "100%", borderRadius: 3, background: "rgba(6,182,212,0.3)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, TrendingUp, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
