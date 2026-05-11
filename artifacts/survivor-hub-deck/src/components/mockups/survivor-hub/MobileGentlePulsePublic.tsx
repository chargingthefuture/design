// STATE: Unauthenticated — visitor with no session
import { Heart, Play, Lock } from "lucide-react";

const bg = "#0A0F0E", COLOR = "#14B8A6";

const SESSIONS = [
  { title: "4-7-8 Breathing", dur: "5 min", emoji: "🌬️", plays: "47.8k" },
  { title: "Grounding: 5-4-3-2-1", dur: "7 min", emoji: "🌱", plays: "52.3k" },
  { title: "Sleep Sanctuary", dur: "20 min", emoji: "🌙", plays: "88.1k" },
  { title: "Morning Light", dur: "6 min", emoji: "☀️", plays: "29.8k" },
];

export function MobileGentlePulsePublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Heart size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>GentlePulse</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>Trauma-informed wellness</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Guided meditation and breathwork written by certified trauma therapists. Breathing, grounding, sleep, mindfulness — all free.</p>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {SESSIONS.map((s, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(20,184,166,0.12)", padding: "12px 14px", display: "flex", gap: 12, alignItems: "center", background: "rgba(20,184,166,0.03)" }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{s.dur} · {s.plays} plays</div>
              </div>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: COLOR + "20", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Play size={11} color={COLOR} fill={COLOR} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in for all sessions</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
