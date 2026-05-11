import { Smile, Shield } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#EC4899";

const MOODS = [
  { emoji: "😔", label: "Hard" },
  { emoji: "😐", label: "Okay" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😊", label: "Great" },
  { emoji: "🌟", label: "Thriving" },
];

export function MobileMoodEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Smile size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Mood</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>How are you feeling today?</div>
        <div style={{ fontSize: 13, color: subtle, marginBottom: 28, lineHeight: 1.5 }}>No check-ins yet. Your mood data is fully anonymous — no names, no IDs, ever.</div>
        <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
          {MOODS.map(({ emoji, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: surface, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{emoji}</div>
              <span style={{ fontSize: 10, color: subtle }}>{label}</span>
            </div>
          ))}
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
          Check In Now
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: `${COLOR}10`, border: `1px solid ${COLOR}20`, borderRadius: 8, padding: "10px 14px" }}>
          <Shield size={13} color={COLOR} />
          <span style={{ fontSize: 12, color: subtle }}>Fully anonymous · No identifiers stored</span>
        </div>
      </div>
    </div>
  );
}
