// STATE: Loading — data fetch in progress
import { Smile, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#EC4899";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileMoodLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <Smile size={16} color={COLOR} /><Sk w={110} h={15} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      <div style={{ flex: 1, padding: "16px 14px", display: "flex", flexDirection: "column", gap: 16, overflowY: "hidden" }}>
        {/* Mood picker */}
        <div style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "20px", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <Sk w={160} h={16} r={6} />
          <div style={{ display: "flex", gap: 14 }}>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <Sk w={44} h={44} r={22} /><Sk w={32} h={10} r={4} />
              </div>
            ))}
          </div>
          <Sk w={140} h={44} r={10} />
        </div>
        {/* Weekly chart */}
        <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "16px" }}>
          <Sk w={120} h={13} r={5} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80, marginTop: 12 }}>
            {[55, 70, 50, 85, 90, 95, 80].map((h, i) => (
              <div key={i} style={{ flex: 1, height: h, borderRadius: "3px 3px 0 0", background: "rgba(236,72,153,0.15)" }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: 6 }}>
            {[1, 2, 3, 4, 5, 6, 7].map(i => <Sk key={i} w={20} h={10} r={4} />)}
          </div>
        </div>
        {/* Resources */}
        <Sk w={100} h={11} r={4} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", display: "flex", gap: 10, alignItems: "center" }}>
            <Sk w={32} h={32} r={8} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
              <Sk w={130} h={13} r={4} /><Sk w={80} h={10} r={4} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, Smile, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
