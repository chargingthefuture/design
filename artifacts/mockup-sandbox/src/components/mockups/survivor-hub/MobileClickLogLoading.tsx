// STATE: Loading — data fetch in progress
import { AlertTriangle, Clock, FileText } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#F43F5E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileClickLogLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <Sk w={60} h={12} r={4} />
      </div>
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10, flexShrink: 0 }}>
        <AlertTriangle size={16} color={BRAND} />
        <Sk w={80} h={14} r={5} />
        <div style={{ marginLeft: "auto" }}><Sk w={28} h={28} r={8} /></div>
      </div>
      {/* Tabs */}
      <div style={{ padding: "10px 16px", borderBottom: `1px solid ${border}`, display: "flex", gap: 8, flexShrink: 0 }}>
        <Sk w={120} h={32} r={8} /><Sk w={80} h={32} r={8} />
      </div>
      {/* Content */}
      <div style={{ flex: 1, padding: "20px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          <Sk h={60} r={12} /><Sk h={60} r={12} />
        </div>
        {/* Button skeleton */}
        <Sk w={140} h={140} r={70} />
        <Sk w={120} h={12} r={5} />
        {/* List */}
        <div style={{ width: "100%", marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "13px", borderRadius: 12, border: `1px solid ${border}` }}>
              <Sk w={30} h={30} r={8} />
              <div style={{ flex: 1 }}>
                <Sk w={90} h={10} r={4} />
                <div style={{ marginTop: 5 }}><Sk w={200} h={12} r={4} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ height: 64, borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[AlertTriangle, Clock, FileText].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={i === 0 ? BRAND : "rgba(255,255,255,0.2)"} />
            <Sk w={28} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
