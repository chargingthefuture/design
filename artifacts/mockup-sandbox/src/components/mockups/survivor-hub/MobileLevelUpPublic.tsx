// STATE: Unauthenticated — visitor with no session
import { BookOpen, Lock, CheckCircle } from "lucide-react";

const bg = "#0F1117", COLOR = "#22C55E";

export function MobileLevelUpPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <BookOpen size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>LevelUp</span>
        </div>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Cohort-based courses across tech, finance, trades, and life skills. Complete milestones to earn Service Credits.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {["Free for all survivors", "Earn credits while learning", "Trainer-led cohorts"].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <CheckCircle size={13} color={COLOR} />
              <span style={{ fontSize: 13, color: "#9CA3AF" }}>{f}</span>
            </div>
          ))}
        </div>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { title: "Web Development Fundamentals", track: "Tech", credits: 40, seats: 8 },
            { title: "Financial Literacy & Budgeting", track: "Finance", credits: 25, seats: 3 },
            { title: "Trauma-Informed Leadership", track: "Life Skills", credits: 30, seats: 0 },
            { title: "Resume & Job Search", track: "Employment", credits: 20, seats: 5 },
          ].map((c, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{c.title}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{c.track}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: COLOR }}>+{c.credits} cr</div>
                <div style={{ fontSize: 11, color: c.seats === 0 ? "#EF4444" : "#9CA3AF" }}>{c.seats === 0 ? "Full" : `${c.seats} left`}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to enroll</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
