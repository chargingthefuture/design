// STATE: Unauthenticated — visitor with no session
import { Users, Globe, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#8B5CF6";

const COHORTS = [
  { name: "Tech for Good Cohort", skill: "React · Node.js · Databases", countries: "🇺🇸🇳🇬🇧🇷🇮🇳", members: 12 },
  { name: "Business Basics Cohort", skill: "Accounting · Marketing · Sales", countries: "🇺🇸🇬🇭🇺🇬", members: 9 },
  { name: "Creative Economy Cohort", skill: "Design · Content · Branding", countries: "🇺🇸🇰🇪🇦🇺", members: 7 },
  { name: "Leadership Mastermind", skill: "Leadership · Coaching · Strategy", countries: "🇺🇸🇩🇪🇨🇦🇧🇷", members: 12 },
];

export function PeerProgrammingPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Users size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Peer Programming</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
        </div>
      </div>

      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Deterministic global cohorts
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          12-person weekly cohorts —<br /><span style={{ color: COLOR }}>you're always placed, never left out</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520 }}>
          Every survivor is matched into a cohort of 12. Global peers, weekly sessions, real skill-building. No competitive selection — you're guaranteed a spot.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 8, alignItems: "center" }}>
          <button style={{ padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Globe size={14} color="#6B7280" />
            <span style={{ fontSize: 13, color: "#6B7280" }}>Active cohorts across 47 countries</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {COHORTS.map((c, i) => (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", padding: "18px 20px", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 8 }}>{c.skill}</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 16 }}>{c.countries}</span>
                <span style={{ fontSize: 12, color: "#6B7280" }}>{c.members}/12 members</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={22} color={COLOR} /></div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to join your cohort</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>You'll be matched automatically. First session within 48 hours.</div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Sign in to get matched</button>
        </div>
      </div>
    </div>
  );
}
