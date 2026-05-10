import { Award, Plus, Bell } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#A855F7";

export function MobileSkillsHuntEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Award size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Skills Hunt</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${COLOR}15`, border: `1px dashed ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Award size={30} color={`${COLOR}50`} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>No rounds open</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 28 }}>Skills Hunt rounds open weekly. Get notified when the next challenge launches and compete for Service Credits.</div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <Bell size={16} /> Notify Me
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Plus size={16} /> Browse Past Rounds
        </button>
      </div>
    </div>
  );
}
