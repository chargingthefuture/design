// STATE: Authenticated, zero submissions yet
import { Search, Plus, Target } from "lucide-react";

const bg = "#0F1117", COLOR = "#A855F7";

export function SkillsHuntEmpty() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "#0D0F14", flexShrink: 0 }}>
        <Search size={18} color={COLOR} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Skills Hunt</div>
          <div style={{ fontSize: 12, color: "#6B7280" }}>Nominate survivors · build the Directory · grow the economy</div>
        </div>
      </div>

      {/* Empty body */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
        <div style={{ maxWidth: 600, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>

          <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `1px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={36} style={{ color: COLOR, opacity: 0.5 }} />
          </div>

          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#F9FAFB", marginBottom: 10 }}>No scouts yet — the hunt starts with you</div>
            <div style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, maxWidth: 480 }}>
              Think of survivors you know personally. Do they have a Quora profile? What skills do they have? Nominating them populates the Directory and helps build our economy — so we stop depending on traffickers for basic needs.
            </div>
          </div>

          {/* Steps */}
          <div style={{ display: "flex", gap: 12, width: "100%" }}>
            {[
              { emoji: "👤", title: "Someone you know", desc: "A real survivor in your life" },
              { emoji: "🔗", title: "Their Quora profile", desc: "Social proof. Reduces infiltration." },
              { emoji: "⚡", title: "Their skills", desc: "What they can offer the economy" },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, padding: "16px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EAF0", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#6B7280" }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <button style={{ padding: "14px 40px", borderRadius: 14, background: COLOR, border: "none", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <Plus size={18} /> Nominate Your First Survivor
          </button>

          {/* First mission teaser */}
          <div style={{ padding: "14px 20px", borderRadius: 12, background: `${COLOR}08`, border: `1px solid ${COLOR}20`, display: "flex", alignItems: "center", gap: 14, width: "100%", boxSizing: "border-box" }}>
            <Target size={20} style={{ color: COLOR, flexShrink: 0 }} />
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EAF0", marginBottom: 2 }}>First Mission: Nominate 1 survivor</div>
              <div style={{ fontSize: 12, color: "#6B7280" }}>Complete this to earn your 🔍 First Find badge and +50 pts</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: COLOR }}>0/1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
