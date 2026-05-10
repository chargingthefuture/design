// STATE: Unauthenticated — visitor with no session
import { BookOpen, CheckCircle, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#22C55E";

const COHORTS = [
  { title: "Web Development Fundamentals", track: "Tech", credits: 40, seats: 8, tags: ["HTML", "CSS", "React"] },
  { title: "Financial Literacy & Budgeting", track: "Finance", credits: 25, seats: 3, tags: ["Budgeting", "Credit"] },
  { title: "Trauma-Informed Leadership", track: "Life Skills", credits: 30, seats: 0, tags: ["Leadership", "Healing"] },
  { title: "Resume & Job Search", track: "Employment", credits: 20, seats: 5, tags: ["Resume", "Interviewing"] },
];

export function LevelUpPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <BookOpen size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>LevelUp</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
        </div>
      </div>

      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Cohort-based learning
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          Earn skills, earn credits —<br /><span style={{ color: COLOR }}>learn alongside other survivors</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520 }}>
          Cohort-based courses across tech, finance, trades, and life skills. Complete milestones to earn Service Credits. Trainers are survivor-advocates themselves.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
          {["Free for all survivors", "Earn credits while learning", "Trainer-led cohorts"].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <CheckCircle size={14} color={COLOR} />
              <span style={{ fontSize: 13, color: "#9CA3AF" }}>{f}</span>
            </div>
          ))}
        </div>
        <button style={{ marginTop: 4, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
          Join the Hub — Free
        </button>
      </div>

      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {COHORTS.map((c, i) => (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", padding: "16px 20px", background: "rgba(255,255,255,0.02)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{c.title}</div>
                <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
                  {c.tags.map((t, j) => <span key={j} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: "rgba(255,255,255,0.06)", color: "#9CA3AF" }}>{t}</span>)}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLOR }}>+{c.credits} credits</div>
                <div style={{ fontSize: 12, color: c.seats === 0 ? "#EF4444" : "#9CA3AF" }}>{c.seats === 0 ? "Full" : `${c.seats} seats left`}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={22} color={COLOR} /></div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to enroll in cohorts</div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Sign in to start learning</button>
        </div>
      </div>
    </div>
  );
}
