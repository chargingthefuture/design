import { Heart, Play, Wind, Moon } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#14B8A6";

const SESSIONS = [
  { icon: Wind, label: "Breathing", desc: "5 min calm" },
  { icon: Heart, label: "Grounding", desc: "Body scan" },
  { icon: Moon, label: "Sleep", desc: "Wind down" },
  { icon: Play, label: "Affirmations", desc: "Daily boost" },
];

export function MobileGentlePulseEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Heart size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>GentlePulse</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
        {/* Streak card */}
        <div style={{ borderRadius: 14, border: `1px dashed ${COLOR}30`, background: `${COLOR}06`, padding: "18px", textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 36, fontWeight: 900, color: COLOR, marginBottom: 2 }}>0</div>
          <div style={{ fontSize: 12, color: subtle }}>day streak · Start your first session</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Choose a session</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          {SESSIONS.map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ borderRadius: 14, border: `1px solid ${COLOR}20`, background: surface, padding: "14px 12px" }}>
              <Icon size={22} color={COLOR} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
            </div>
          ))}
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15 }}>
          Begin First Session
        </button>
      </div>
    </div>
  );
}
