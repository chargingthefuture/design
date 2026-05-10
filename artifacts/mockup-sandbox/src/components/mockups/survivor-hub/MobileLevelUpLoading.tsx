// STATE: Loading — data fetch in progress
import { BookOpen, MessageCircle, Zap, Globe } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#22C55E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileLevelUpLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <BookOpen size={16} color={COLOR} /><Sk w={80} h={15} r={5} />
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}><Sk w={28} h={28} r={8} /><Sk w={70} h={28} r={8} /></div>
      </div>
      {/* Track chips */}
      <div style={{ padding: "10px 14px", borderBottom: `1px solid ${border}`, display: "flex", gap: 6, overflowX: "hidden", flexShrink: 0 }}>
        {[55, 70, 80, 65, 75].map((w, i) => <Sk key={i} w={w} h={30} r={15} />)}
      </div>
      <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 12, overflowY: "hidden" }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 9 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Sk w={160} h={15} r={5} /><Sk w={45} h={18} r={9} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Sk w={70} h={11} r={4} /><Sk w={60} h={11} r={4} />
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {[40, 50, 45].map((w, j) => <Sk key={j} w={w} h={20} r={10} />)}
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <Sk w={70} h={10} r={4} /><Sk w={30} h={10} r={4} />
              </div>
              <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.04)" }}>
                <div style={{ width: `${15 + i * 20}%`, height: "100%", borderRadius: 3, background: "rgba(34,197,94,0.3)" }} />
              </div>
            </div>
            <Sk h={36} r={8} />
          </div>
        ))}
      </div>
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[MessageCircle, BookOpen, Zap, Globe].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 1 ? COLOR : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
