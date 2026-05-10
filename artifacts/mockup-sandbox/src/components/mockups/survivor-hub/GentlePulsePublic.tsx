// STATE: Unauthenticated — visitor with no session
import { Heart, Play, Lock } from "lucide-react";

const bg = "#0A0F0E", COLOR = "#14B8A6";

const SESSIONS = [
  { title: "4-7-8 Breathing", duration: "5 min", emoji: "🌬️", plays: "47.8k" },
  { title: "Body Scan for Safety", duration: "10 min", emoji: "🌿", plays: "39.1k" },
  { title: "Grounding: 5-4-3-2-1", duration: "7 min", emoji: "🌱", plays: "52.3k" },
  { title: "Sleep Sanctuary", duration: "20 min", emoji: "🌙", plays: "88.1k" },
  { title: "Strength & Resilience", duration: "8 min", emoji: "💎", plays: "31.0k" },
  { title: "Morning Light", duration: "6 min", emoji: "☀️", plays: "29.8k" },
];

export function GentlePulsePublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 52, borderBottom: "1px solid rgba(20,184,166,0.1)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Heart size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>GentlePulse</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.25)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
        </div>
      </div>

      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Trauma-informed wellness
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          Guided meditation built<br /><span style={{ color: COLOR }}>for survivors, by therapists</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 500 }}>
          Every session is written and reviewed by certified trauma therapists. Breathing, grounding, sleep, mindfulness — all free with your Hub membership.
        </p>
        <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
          Join the Hub — Free
        </button>
      </div>

      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {SESSIONS.map((s, i) => (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(20,184,166,0.12)", padding: "16px 18px", background: "rgba(20,184,166,0.03)", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{s.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>{s.duration} · {s.plays} plays</div>
              </div>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: COLOR + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Play size={12} color={COLOR} fill={COLOR} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={22} color={COLOR} /></div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to access all sessions</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>Save progress, track streaks, and get personalized recommendations.</div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Sign in to begin healing</button>
        </div>
      </div>
    </div>
  );
}
