import { Radio, Plus, Calendar, Mic } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#22C55E";

export function MobileChymeEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Radio size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Chyme</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${COLOR}15`, border: `1px dashed ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Radio size={32} color={`${COLOR}50`} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>No rooms live yet</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 28 }}>Be the first to start a room. Topics can be healing, skills, or anything your community needs.</div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <Plus size={16} /> Start a Room
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Calendar size={16} /> Schedule for Later
        </button>
      </div>
      <div style={{ padding: "16px", borderTop: `1px solid ${border}`, background: surface }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: `${COLOR}10`, border: `1px solid ${COLOR}20`, borderRadius: 8, padding: "10px 12px" }}>
          <Mic size={13} color={COLOR} />
          <span style={{ fontSize: 12, color: subtle }}>Rooms are end-to-end encrypted and Safe Space verified</span>
        </div>
      </div>
    </div>
  );
}
