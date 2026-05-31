// design-sync
// STATE: Empty — community channel with no posts yet
import { Hash, PenLine, Bell, Sparkles } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

export function MobileFeedEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>SH</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Hash size={14} style={{ color: "#A78BFA" }} />
          <span style={{ fontSize: 15, fontWeight: 700 }}>community</span>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(124,58,237,0.1)", border: "1px dashed rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Hash size={30} style={{ color: "#A78BFA", opacity: 0.5 }} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Community is getting started</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 28 }}>Announcements, peer posts, and AI Q&A will stream here as the community grows. Be the first to post.</div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
          {[
            { icon: PenLine, label: "Official announcements", color: "#A78BFA" },
            { icon: Sparkles, label: "AI assistant Q&A inline", color: "#38BDF8" },
            { icon: Bell, label: "Peer posts & real-time reactions", color: "#22C55E" },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, background: surface, border: `1px solid ${border}` }}>
              <Icon size={14} style={{ color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: subtle }}>{label}</span>
            </div>
          ))}
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10, cursor: "pointer" }}>
          <PenLine size={16} /> Post to Community
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}>
          <Bell size={16} /> Get Notified
        </button>
      </div>
    </div>
  );
}
