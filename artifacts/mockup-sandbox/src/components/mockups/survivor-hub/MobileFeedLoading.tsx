// STATE: Loading — data fetch in progress
import { Megaphone, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#8B5CF6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileFeedLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Megaphone size={16} color={COLOR} /><Sk w={140} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      {/* Tab bar */}
      <div style={{ padding: "0 14px", borderBottom: `1px solid ${border}`, display: "flex", gap: 4, flexShrink: 0 }}>
        {[65, 75, 70, 80].map((w, i) => (
          <div key={i} style={{ padding: "10px 4px", borderBottom: i === 0 ? `2px solid ${COLOR}` : "2px solid transparent" }}>
            <Sk w={w} h={13} r={5} />
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 12, overflowY: "hidden" }}>
        {/* Pinned */}
        <div style={{ borderRadius: 12, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "12px 14px" }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}><Sk w={55} h={18} r={9} /><Sk w={45} h={18} r={9} /></div>
          <Sk w={200} h={14} r={5} />
          <div style={{ marginTop: 6 }}><Sk h={12} r={4} /></div>
        </div>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", display: "flex", gap: 10 }}>
            <Sk w={36} h={36} r={18} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", gap: 6 }}><Sk w={80} h={12} r={4} /><Sk w={40} h={11} r={4} /></div>
              <Sk w={180} h={14} r={5} />
              <Sk h={11} r={4} />
              <div style={{ display: "flex", gap: 6 }}>
                {[40, 50, 45].map((w, j) => <Sk key={j} w={w} h={18} r={9} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "8px 14px", borderTop: `1px solid ${border}`, flexShrink: 0 }}>
        <Sk h={44} r={10} />
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Megaphone, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
