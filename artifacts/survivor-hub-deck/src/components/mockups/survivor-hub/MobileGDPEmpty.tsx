import { Globe, Plus, TrendingUp } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#06B6D4";

export function MobileGDPEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Globe size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>GDP Dashboard</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 16px" }}>
        {/* Big stat */}
        <div style={{ borderRadius: 14, border: `1px solid ${COLOR}25`, background: `${COLOR}08`, padding: "20px", textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: subtle, marginBottom: 6 }}>TI Skills Economy</div>
          <div style={{ fontSize: 42, fontWeight: 900, color: COLOR }}>$247B</div>
          <div style={{ fontSize: 12, color: subtle, marginTop: 4 }}>4.9M survivors · 127 countries</div>
        </div>
        {/* Your contribution */}
        <div style={{ borderRadius: 14, border: `1px dashed ${COLOR}30`, background: surface, padding: "18px", textAlign: "center", marginBottom: 16, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <TrendingUp size={32} color={`${COLOR}40`} style={{ marginBottom: 10 }} />
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Your contribution: $0</div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.5, marginBottom: 16 }}>Add your verified skills to contribute to the collective economy and appear on the global map.</div>
          <button style={{ width: "100%", padding: "13px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <Plus size={15} /> Add Your Skills
          </button>
        </div>
      </div>
    </div>
  );
}
