import { Code2, Users, Target, Search } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#8B5CF6";

const SKILLS = ["React", "Python", "Data Science", "UI/UX", "DevOps", "SQL"];

export function MobilePeerProgrammingEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Code2 size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Peer Programming</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
        <div style={{ borderRadius: 12, border: `1px solid ${border}`, background: surface, padding: "14px", marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Not in a cohort yet</div>
          <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>Select your skills below and we'll match you with a cohort of 4–6 survivors at your level.</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Pick your interests</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {SKILLS.map(s => (
            <div key={s} style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${COLOR}40`, background: `${COLOR}10`, color: COLOR, fontSize: 13, fontWeight: 600 }}>{s}</div>
          ))}
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <Users size={16} /> Find My Cohort
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Search size={16} /> Browse Cohorts
        </button>
      </div>
    </div>
  );
}
