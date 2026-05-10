// STATE: Unauthenticated — visitor with no session
import { Search, Lock, Users, Zap, TrendingUp } from "lucide-react";

const bg = "#0F1117", COLOR = "#A855F7";

const SCOUTS = [
  { name: "Amara O.", found: 47, gem: true },
  { name: "Maria G.", found: 38, gem: false },
  { name: "Priya S.", found: 31, gem: true },
  { name: "DeShawn W.", found: 22, gem: false },
];

export function SkillsHuntPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Search size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Skills Hunt</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
            Gamified talent scouting
          </span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.15 }}>
            Help find 5 million survivors<br />
            <span style={{ color: COLOR }}>and map their hidden talents</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520, lineHeight: 1.7 }}>
            This is not a referral button. You nominate people you <em>personally know</em> to be survivors — entering their name, Quora profile, and skills. Their skills populate our Directory so we can trade with each other and stop depending on traffickers for basic needs.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            {[{ n: "247", l: "found this week" }, { n: "1,482", l: "skills mapped" }, { n: "63", l: "scouts active" }].map(({ n, l }) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: COLOR }}>{n}</div>
                <div style={{ fontSize: 12, color: "#6B7280" }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <button style={{ padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Join the Hub — Free
            </button>
          </div>
        </div>

        {/* How it works */}
        <div style={{ width: 300, flexShrink: 0 }}>
          <div style={{ padding: "20px", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: `1px solid ${COLOR}20` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: COLOR, marginBottom: 14 }}>How Skills Hunt works</div>
            {[
              { step: "1", icon: "👤", title: "You know a survivor", desc: "Someone from your real life — not a random stranger." },
              { step: "2", icon: "🔗", title: "Enter their info", desc: "First name, last name, Quora profile for social proof, and their skills." },
              { step: "3", icon: "⚡", title: "They join our economy", desc: "Their skills become tradeable in the network. We stop needing traffickers." },
              { step: "4", icon: "🏆", title: "You earn points", desc: "Climb the leaderboard. Earn badges. Find hidden gems." },
            ].map(item => (
              <div key={item.step} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#E8EAF0", marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blurred leaderboard + lock */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", gap: 16, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {/* Blurred form */}
          <div style={{ flex: 1, maxWidth: 420, padding: "20px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Nominate a Survivor</div>
            {["First Name", "Last Name", "Quora Profile URL", "Skills"].map(f => (
              <div key={f} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>{f}</div>
                <div style={{ height: 40, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
              </div>
            ))}
            <div style={{ height: 46, borderRadius: 10, background: COLOR + "50" }} />
          </div>
          {/* Blurred leaderboard */}
          <div style={{ flex: 1, padding: "20px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Scout Leaderboard</div>
            {SCOUTS.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ width: 24, fontSize: 16 }}>{["🥇","🥈","🥉","#4"][i]}</div>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLOR + "30" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: "#6B7280" }}>{s.found} survivors found {s.gem ? "· 💎" : ""}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Join to start scouting</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 320 }}>
            Survivors only. Sign in to nominate people you know and help grow our self-sustaining economy.
          </div>
          <button style={{ padding: "12px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to scout
          </button>
        </div>
      </div>
    </div>
  );
}
