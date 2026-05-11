// STATE: Loading — data fetch in progress
import { Zap, MessageCircle, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#F59E0B";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileServiceCreditsLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Zap size={16} color={COLOR} /><Sk w={120} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      <div style={{ flex: 1, padding: "14px 14px", display: "flex", flexDirection: "column", gap: 14, overflowY: "hidden" }}>
        {/* Balance */}
        <div style={{ borderRadius: 16, border: `1px solid ${COLOR}30`, background: COLOR + "08", padding: "20px", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
          <Sk w={80} h={10} r={4} /><Sk w={130} h={36} r={8} />
          <div style={{ display: "flex", gap: 10 }}>
            <Sk w={110} h={40} r={10} /><Sk w={110} h={40} r={10} />
          </div>
        </div>
        {/* Quick stats */}
        <div style={{ display: "flex", gap: 10 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ flex: 1, borderRadius: 10, border: `1px solid ${border}`, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 5 }}>
              <Sk w={55} h={9} r={4} /><Sk w={60} h={16} r={5} />
            </div>
          ))}
        </div>
        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, borderBottom: `1px solid ${border}`, paddingBottom: 0 }}>
          {[70, 85, 75].map((w, i) => (
            <div key={i} style={{ padding: "8px 4px", borderBottom: i === 0 ? `2px solid ${COLOR}` : "2px solid transparent" }}>
              <Sk w={w} h={13} r={5} />
            </div>
          ))}
        </div>
        {/* Transactions */}
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: `1px solid ${border}` }}>
            <Sk w={36} h={36} r={18} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
              <Sk w={150} h={13} r={4} /><Sk w={100} h={10} r={4} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
              <Sk w={50} h={14} r={5} /><Sk w={60} h={10} r={4} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Zap, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
