// design-sync
// STATE: Unauthenticated — visitor with no session
import { BookOpen, Lock, UserPlus, ChevronRight } from "lucide-react";

const BRAND = "#8B5CF6";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PREVIEW_SECTORS = ["Technology", "Healthcare", "Trades", "Creative", "Education", "Business & Legal"];

export function MobileSkillsTaxonomyPublic() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 12px", background: `${BRAND}10`, borderBottom: `1px solid ${BRAND}25`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <BookOpen size={18} color={BRAND} />
            <div style={{ fontSize: 16, fontWeight: 700 }}>Skills Taxonomy</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", border: `1px solid ${border}`, color: text, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: BRAND, border: "none", color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Join Free</button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, background: surface, flexShrink: 0 }}>
        {[{ v: "128", l: "Skills" }, { v: "47", l: "Job Titles" }, { v: "9", l: "Sectors" }].map(({ v, l }) => (
          <div key={l} style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRight: `1px solid ${border}` }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: BRAND }}>{v}</div>
            <div style={{ fontSize: 10, color: subtle }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Hero copy */}
      <div style={{ padding: "20px 16px 0" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 8 }}>
          Explore the survivor skills database
        </div>
        <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, marginBottom: 16 }}>
          128 skills, 47 job titles, 9 sectors. Sign in to search, filter, and trade with survivors who have the skills you need.
        </div>
        <button style={{ width: "100%", padding: "13px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box", marginBottom: 16 }}>
          <UserPlus size={15} /> Create free account
        </button>
      </div>

      {/* Blurred sector list + lock overlay */}
      <div style={{ padding: "0 16px 32px", position: "relative" }}>
        <div style={{ filter: "blur(4px)", pointerEvents: "none", opacity: 0.4 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>All Sectors</div>
          {PREVIEW_SECTORS.map((name, i) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, background: surface, border: `1px solid ${border}`, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: ["#3B82F6","#10B981","#F59E0B","#EC4899","#8B5CF6","#06B6D4"][i] }} />
              <span style={{ fontSize: 14, fontWeight: 500, flex: 1 }}>{name}</span>
              <ChevronRight size={14} color={subtle} />
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", border: `2px solid ${BRAND}50`, background: `${BRAND}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={20} color={BRAND} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to explore</div>
          <div style={{ fontSize: 12, color: subtle, textAlign: "center", maxWidth: 240 }}>
            Full access to all sectors, job titles, and skills requires an account.
          </div>
        </div>
      </div>
    </div>
  );
}
