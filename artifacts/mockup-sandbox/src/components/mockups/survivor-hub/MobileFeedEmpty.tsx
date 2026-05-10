import { Megaphone, PenLine, Bell } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#8B5CF6";

export function MobileFeedEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Megaphone size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Feed & Announcements</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${COLOR}15`, border: `1px dashed ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Megaphone size={30} color={`${COLOR}50`} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Nothing posted yet</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 28 }}>Be the first to share an update, resource, or announcement with the community.</div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <PenLine size={16} /> Post an Update
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Bell size={16} /> Get Notified
        </button>
      </div>
    </div>
  );
}
