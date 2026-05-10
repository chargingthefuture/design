// STATE: Loading — data fetch in progress
import { Car, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#F97316";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileTrustTransportLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Car size={16} color={COLOR} /><Sk w={120} h={15} r={5} />
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}><Sk w={28} h={28} r={8} /></div>
      </div>
      {/* Service type tabs */}
      <div style={{ padding: "10px 14px", borderBottom: `1px solid ${border}`, display: "flex", gap: 8, flexShrink: 0 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ flex: 1, borderRadius: 12, border: `1px solid ${i === 1 ? COLOR + "40" : border}`, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 6, alignItems: "center", background: i === 1 ? COLOR + "08" : "transparent" }}>
            <Sk w={28} h={28} r={14} /><Sk w={45} h={11} r={4} />
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "14px", display: "flex", flexDirection: "column", gap: 12, overflowY: "hidden" }}>
        <Sk h={48} r={10} />
        <Sk h={48} r={10} />
        <Sk w={120} h={40} r={8} />
        <Sk h={48} r={10} />
        <Sk w={160} h={11} r={4} />
        <Sk w={110} h={13} r={5} />
        {[1, 2].map(i => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 12, border: `1px solid ${border}` }}>
            <Sk w={40} h={40} r={20} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
              <Sk w={90} h={13} r={4} /><Sk w={110} h={10} r={4} />
            </div>
            <Sk w={45} h={18} r={9} />
          </div>
        ))}
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Car, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
