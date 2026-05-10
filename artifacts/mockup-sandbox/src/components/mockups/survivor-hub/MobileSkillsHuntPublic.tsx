// STATE: Unauthenticated — visitor with no session
import { Award, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#A855F7";

export function MobileSkillsHuntPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Award size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Skills Hunt</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>6 active rounds now</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Compete in skill cohorts alongside other survivors. Earn Service Credits, badges, and leaderboard rankings.</p>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { title: "Web Development Bootcamp", status: "LIVE", enrolled: 234, cap: 300, c: COLOR },
            { title: "Trauma-Informed Care", status: "LIVE", enrolled: 189, cap: 200, c: "#22C55E" },
            { title: "Financial Literacy", status: "UPCOMING", enrolled: 0, cap: 150, c: "#F59E0B" },
          ].map((r, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{r.title}</span>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 8, background: r.status === "LIVE" ? "#22C55E20" : "rgba(255,255,255,0.06)", color: r.status === "LIVE" ? "#22C55E" : "#9CA3AF" }}>{r.status}</span>
              </div>
              <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.06)" }}>
                <div style={{ width: `${(r.enrolled / r.cap) * 100}%`, height: "100%", borderRadius: 3, background: r.c + "50" }} />
              </div>
              <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>{r.enrolled}/{r.cap} enrolled</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to join active rounds</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
