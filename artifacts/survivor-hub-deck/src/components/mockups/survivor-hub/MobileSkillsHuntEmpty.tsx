// STATE: Authenticated, zero nominations yet
import { Search, Plus, Target } from "lucide-react";

const bg = "#0F1117", COLOR = "#A855F7";

export function MobileSkillsHuntEmpty() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 11, color: "#6B7280" }}>●●●</span>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 8 }}>
        <Search size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Skills Hunt</span>
      </div>

      {/* Empty state */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 24px", textAlign: "center", gap: 20 }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${COLOR}15`, border: `1px dashed ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Search size={30} style={{ color: COLOR, opacity: 0.6 }} />
        </div>

        <div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>The hunt starts with you</div>
          <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>
            Think of someone you believe may be a survivor — no certainty required. Their Quora profile, skills, and professions help build our economy so we stop needing traffickers.
          </div>
        </div>

        {/* How it works */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
          {[
            { emoji: "👤", text: "Someone you believe may be a survivor — no certainty needed" },
            { emoji: "🔗", text: "Their Quora profile = social proof, reduces infiltration" },
            { emoji: "⚡", text: "Skills + professions power our self-sustaining economy" },
          ].map(item => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "left" }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{item.emoji}</span>
              <span style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>

        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}>
          <Plus size={16} /> Nominate Your First Survivor
        </button>

        {/* First mission */}
        <div style={{ width: "100%", padding: "12px 14px", borderRadius: 12, background: `${COLOR}08`, border: `1px solid ${COLOR}20`, display: "flex", alignItems: "center", gap: 12, boxSizing: "border-box" }}>
          <Target size={16} style={{ color: COLOR, flexShrink: 0 }} />
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#E8EAF0" }}>Mission: Nominate 1 survivor</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Earn 🔍 First Find badge + 50 pts</div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: COLOR }}>0/1</div>
        </div>
      </div>
    </div>
  );
}
