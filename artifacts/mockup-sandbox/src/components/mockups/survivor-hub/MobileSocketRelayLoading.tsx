// STATE: Loading — data fetch in progress
import { Share2, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#F43F5E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileSocketRelayLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Share2 size={16} color={COLOR} /><Sk w={100} h={15} r={5} />
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}><Sk w={55} h={22} r={11} /><Sk w={28} h={28} r={8} /></div>
      </div>
      <div style={{ padding: "10px 14px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <Sk h={38} r={8} />
        <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
          {[40, 55, 65, 60, 75].map((w, i) => <Sk key={i} w={w} h={26} r={13} />)}
        </div>
      </div>
      <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10, overflowY: "hidden" }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px" }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
              <Sk w={44} h={18} r={4} /><Sk w={55} h={18} r={4} />{i % 2 === 0 && <Sk w={50} h={18} r={4} />}
            </div>
            <Sk w={200} h={14} r={5} />
            <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
              <Sk w={80} h={11} r={4} /><Sk w={60} h={11} r={4} />
              <div style={{ marginLeft: "auto" }}><Sk w={70} h={28} r={7} /></div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "8px 14px", borderTop: `1px solid ${border}`, display: "flex", gap: 8, flexShrink: 0 }}>
        <Sk h={44} r={10} /><Sk h={44} r={10} />
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Share2, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
