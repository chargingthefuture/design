import { Home, Search, Bell, ShieldCheck } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#EAB308";

export function MobileLightHouseEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Home size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>LightHouse</span>
      </div>
      <div style={{ padding: "12px 16px", borderBottom: `1px solid ${border}` }}>
        <div style={{ position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: subtle }} />
          <input placeholder="City, zip or neighbourhood…" style={{ width: "100%", padding: "10px 12px 10px 36px", background: surface, border: `1px solid ${border}`, borderRadius: 10, fontSize: 14, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${COLOR}15`, border: `1px dashed ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Home size={30} color={`${COLOR}50`} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>No listings match</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 8 }}>Try adjusting your filters or get alerted when Safe Space verified housing is available near you.</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: `${COLOR}10`, border: `1px solid ${COLOR}20`, borderRadius: 8, padding: "8px 12px", marginBottom: 24 }}>
          <ShieldCheck size={13} color={COLOR} />
          <span style={{ fontSize: 12, color: subtle }}>Location is never stored</span>
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <Search size={16} /> Adjust Filters
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Bell size={16} /> Alert Me
        </button>
      </div>
    </div>
  );
}
