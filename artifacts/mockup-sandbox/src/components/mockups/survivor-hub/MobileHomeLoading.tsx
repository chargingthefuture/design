// STATE: Loading — data fetch in progress
import { MessageCircle, Radio, Zap, Globe } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#7C3AED";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileHomeLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      {/* App header */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: COLOR + "30", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <MessageCircle size={14} color={COLOR} />
        </div>
        <Sk w={110} h={15} r={5} />
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={28} h={28} r={14} /></div>
      </div>
      {/* Channel tabs */}
      <div style={{ padding: "0 16px", borderBottom: `1px solid ${border}`, display: "flex", gap: 4, flexShrink: 0 }}>
        {[60, 80, 75].map((w, i) => (
          <div key={i} style={{ padding: "10px 4px", borderBottom: i === 0 ? `2px solid ${COLOR}` : "2px solid transparent" }}>
            <Sk w={w} h={13} r={5} />
          </div>
        ))}
      </div>
      {/* Messages */}
      <div style={{ flex: 1, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "hidden" }}>
        {[[180, 120], [220], [140, 190], [160], [200, 100]].map((lines, mi) => (
          <div key={mi} style={{ display: "flex", gap: 10 }}>
            <Sk w={32} h={32} r={16} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 6 }}><Sk w={70} h={11} r={4} /><Sk w={35} h={10} r={4} /></div>
              {lines.map((lw, li) => <Sk key={li} w={lw} h={13} r={5} />)}
            </div>
          </div>
        ))}
      </div>
      {/* Input */}
      <div style={{ padding: "8px 12px", borderTop: `1px solid ${border}`, flexShrink: 0 }}>
        <Sk h={44} r={22} />
      </div>
      {/* Bottom nav */}
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Radio, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 0 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
