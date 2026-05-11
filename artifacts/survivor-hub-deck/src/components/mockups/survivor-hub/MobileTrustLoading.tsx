// STATE: Loading — data fetch in progress
import { Shield, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#0EA5E9";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileTrustLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Shield size={16} color={COLOR} /><Sk w={110} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      <div style={{ flex: 1, padding: "16px 14px", display: "flex", flexDirection: "column", gap: 14, overflowY: "hidden" }}>
        {/* Trust score card */}
        <div style={{ borderRadius: 16, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "20px", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <Sk w={64} h={64} r={32} />
          <Sk w={100} h={18} r={6} />
          <Sk w={160} h={11} r={4} />
          <Sk h={38} r={8} />
        </div>
        {/* Signals */}
        <Sk w={100} h={11} r={4} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <Sk w={16} h={16} r={8} /><Sk w={160} h={13} r={5} />
            <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={14} /></div>
          </div>
        ))}
        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 5 }}>
              <Sk w={60} h={9} r={4} /><Sk w={70} h={16} r={5} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Shield, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
