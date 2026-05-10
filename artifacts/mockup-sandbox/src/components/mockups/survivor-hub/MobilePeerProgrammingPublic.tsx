// STATE: Unauthenticated — visitor with no session
import { Users, Globe, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#8B5CF6";

export function MobilePeerProgrammingPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Users size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Peer Programming</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>Deterministic global cohorts</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>12-person weekly cohorts across 47 countries. You're always placed — no competitive selection, guaranteed spot.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Globe size={13} color="#6B7280" />
          <span style={{ fontSize: 12, color: "#6B7280" }}>Active cohorts in 47 countries</span>
        </div>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { name: "Tech for Good Cohort", skill: "React · Node.js", members: 12, countries: "🇺🇸🇳🇬🇧🇷" },
            { name: "Business Basics Cohort", skill: "Accounting · Marketing", members: 9, countries: "🇺🇸🇬🇭🇺🇬" },
            { name: "Creative Economy Cohort", skill: "Design · Content", members: 7, countries: "🇺🇸🇰🇪🇦🇺" },
          ].map((c, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF" }}>{c.skill}</div>
              <div style={{ display: "flex", gap: 6, marginTop: 6, alignItems: "center" }}>
                <span style={{ fontSize: 14 }}>{c.countries}</span>
                <span style={{ fontSize: 11, color: "#6B7280" }}>{c.members}/12</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to get matched</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
