// STATE: Unauthenticated — visitor with no session
import { BookOpen, Lock, ChevronRight, UserPlus, LogIn } from "lucide-react";

const BRAND = "#8B5CF6";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PREVIEW_SECTORS = [
  { name: "Technology", jobs: ["Software Engineer", "UI/UX Designer", "Data Analyst"] },
  { name: "Healthcare", jobs: ["Nursing", "Counseling", "Mental Health"] },
  { name: "Trades", jobs: ["Carpentry", "Plumbing", "Electrical"] },
];

export function SkillsTaxonomyPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <BookOpen size={18} color={BRAND} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Skills Taxonomy</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, color: text, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <UserPlus size={13} /> Join Free
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, fontSize: 12, color: BRAND, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
            128 skills · 9 sectors · 47 job titles
          </span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.15 }}>
            The survivor skills database<br />
            <span style={{ color: BRAND }}>is yours to explore</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 500, lineHeight: 1.7 }}>
            Browse every skill, job title, and sector represented by 4.9M survivors worldwide. Sign in to search, filter, and match skills to real opportunities.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {[{ n: "128", l: "Skills" }, { n: "47", l: "Job Titles" }, { n: "9", l: "Sectors" }].map(({ n, l }) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: BRAND }}>{n}</div>
                <div style={{ fontSize: 12, color: subtle }}>{l}</div>
              </div>
            ))}
          </div>
          <button style={{ padding: "14px 32px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content", display: "flex", alignItems: "center", gap: 8 }}>
            Sign in to explore <ChevronRight size={16} />
          </button>
        </div>

        {/* Why join */}
        <div style={{ width: 280, flexShrink: 0 }}>
          <div style={{ padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${border}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: BRAND, marginBottom: 14 }}>Why the taxonomy matters</div>
            {[
              { icon: "⚡", t: "Trade with anyone", d: "Skills map to real services you can buy or sell." },
              { icon: "🎓", t: "Find learning cohorts", d: "LevelUp matches you with peers based on shared skills." },
              { icon: "🔍", t: "Skills Hunt discovery", d: "Scouts use this database to nominate and verify survivors." },
              { icon: "🗺️", t: "GDP contribution", d: "Each skill added grows the TI economy estimate." },
            ].map(item => (
              <div key={item.t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{item.t}</div>
                  <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blurred taxonomy + lock overlay */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", gap: 16, filter: "blur(5px)", pointerEvents: "none", opacity: 0.45 }}>
          {PREVIEW_SECTORS.map(({ name, jobs }) => (
            <div key={name} style={{ flex: 1, padding: "16px", borderRadius: 14, border: `1px solid ${BRAND}25`, background: surface }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND }} />
                <span style={{ fontSize: 14, fontWeight: 700 }}>{name}</span>
              </div>
              {jobs.map(j => (
                <div key={j} style={{ padding: "9px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, marginBottom: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{j}</div>
                  <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
                    {["Skill A", "Skill B", "Skill C"].map(s => (
                      <span key={s} style={{ padding: "2px 8px", borderRadius: 10, background: `${BRAND}15`, fontSize: 11 }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${BRAND}50`, background: `${BRAND}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={BRAND} />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, textAlign: "center" }}>Sign in to explore the full skills database</div>
          <div style={{ fontSize: 13, color: subtle, textAlign: "center", maxWidth: 340 }}>
            Browse every skill and sector, search by job title, and see which survivors you can trade with.
          </div>
          <button style={{ padding: "12px 28px", borderRadius: 9, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Create free account
          </button>
        </div>
      </div>
    </div>
  );
}
