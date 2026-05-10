// STATE: Unauthenticated — visitor with no session
import { Award, Trophy, Star, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#A855F7";

const ROUNDS = [
  { title: "Web Development Bootcamp", status: "LIVE", enrolled: 234, cap: 300, color: COLOR },
  { title: "Trauma-Informed Care Training", status: "LIVE", enrolled: 189, cap: 200, color: "#22C55E" },
  { title: "Financial Literacy Cohort", status: "UPCOMING", enrolled: 0, cap: 150, color: "#F59E0B" },
  { title: "Legal Rights Navigator", status: "UPCOMING", enrolled: 0, cap: 100, color: "#3B82F6" },
];

export function SkillsHuntPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Award size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Skills Hunt</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Competitive learning cohorts
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          Compete, learn, and earn<br />
          <span style={{ color: COLOR }}>while building real skills</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 500 }}>
          Join time-limited skill competitions alongside other survivors. Earn Service Credits, badges, and leaderboard rankings. 6 active rounds right now.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button style={{ padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Join the Hub — Free
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 16px" }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: 28, height: 28, borderRadius: 14, background: COLOR + "40", border: `2px solid ${bg}` }} />
            ))}
            <span style={{ fontSize: 13, color: "#9CA3AF", marginLeft: 6 }}>423 enrolled this week</span>
          </div>
        </div>
      </div>

      {/* Blurred round cards */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {ROUNDS.map((r, i) => (
            <div key={i} style={{ borderRadius: 14, border: `1px solid rgba(255,255,255,0.07)`, padding: "18px 20px", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>{r.title}</span>
                <span style={{ padding: "3px 10px", borderRadius: 10, background: r.status === "LIVE" ? "#22C55E20" : "rgba(255,255,255,0.06)", color: r.status === "LIVE" ? "#22C55E" : "#9CA3AF", fontSize: 11, fontWeight: 700 }}>{r.status}</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)" }}>
                <div style={{ width: `${(r.enrolled / r.cap) * 100}%`, height: "100%", borderRadius: 3, background: r.color + "60" }} />
              </div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 6 }}>{r.enrolled}/{r.cap} enrolled</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to join active rounds</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>
            Enroll in cohorts, climb the leaderboard, and earn badges.
          </div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to compete
          </button>
        </div>
      </div>
    </div>
  );
}
