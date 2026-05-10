// STATE: Unauthenticated — visitor with no session
import { Search, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#A855F7";

export function MobileSkillsHuntPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>

      {/* Header */}
      <div style={{ padding: "16px 20px 12px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Search size={20} color={COLOR} />
        <span style={{ fontSize: 20, fontWeight: 800 }}>Skills Hunt</span>
      </div>

      {/* Hero */}
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>Gamified talent scouting</span>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>
          Help find 5M survivors<br />
          <span style={{ color: COLOR }}>& map their skills</span>
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>
          This is not a referral button. You nominate survivors you personally know — entering their name, Quora profile, and skills so we can trade with each other and stop depending on traffickers.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: 12 }}>
          {[{ n: "247", l: "found/week" }, { n: "1,482", l: "skills mapped" }, { n: "63", l: "scouts" }].map(({ n, l }) => (
            <div key={l} style={{ flex: 1, padding: "10px 8px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: COLOR }}>{n}</div>
              <div style={{ fontSize: 10, color: "#6B7280" }}>{l}</div>
            </div>
          ))}
        </div>

        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      {/* Blurred form preview + lock */}
      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.4 }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Nominate a Survivor</div>
          {["First Name / Last Name", "Quora Profile URL", "Skills"].map(f => (
            <div key={f}>
              <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 4 }}>{f}</div>
              <div style={{ height: 40, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
            </div>
          ))}
          <div style={{ height: 46, borderRadius: 12, background: COLOR + "60" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={20} color={COLOR} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Join to start scouting</div>
          <div style={{ fontSize: 12, color: "#6B7280", textAlign: "center", maxWidth: 260, lineHeight: 1.5 }}>Survivors only. Nominate people you know and help build our self-sustaining economy.</div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Sign in to scout</button>
        </div>
      </div>
    </div>
  );
}
