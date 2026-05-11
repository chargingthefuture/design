import { Target, Search, BookOpen } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#22C55E";

const TRACKS = ["Tech & Coding", "Business", "Healthcare", "Trades", "Creative", "Legal Aid"];

export function MobileLevelUpEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Target size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>LevelUp</span>
      </div>
      <div style={{ padding: "12px 16px", borderBottom: `1px solid ${border}` }}>
        <div style={{ position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: subtle }} />
          <input placeholder="Search courses…" style={{ width: "100%", padding: "10px 12px 10px 36px", background: surface, border: `1px solid ${border}`, borderRadius: 10, fontSize: 14, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Not enrolled yet · Pick a track</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {TRACKS.map(t => (
            <div key={t} style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${COLOR}40`, background: `${COLOR}10`, color: COLOR, fontSize: 13, fontWeight: 600 }}>{t}</div>
          ))}
        </div>
        <div style={{ borderRadius: 14, border: `1px dashed ${COLOR}30`, background: surface, padding: "20px", textAlign: "center", marginBottom: 20 }}>
          <BookOpen size={32} color={`${COLOR}40`} style={{ marginBottom: 10 }} />
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>No courses started</div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.5 }}>Enrol in a survivor-led course and earn Service Credits on completion.</div>
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Target size={16} /> Browse Courses
        </button>
      </div>
    </div>
  );
}
