// design-sync
// STATE: Authenticated + Populated
import { useState } from "react";
import { BookOpen, Search, ChevronDown, Plus, Bell } from "lucide-react";

const BRAND = "#8B5CF6";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const SECTORS = [
  { name: "Technology", count: 24, color: "#3B82F6" },
  { name: "Healthcare", count: 18, color: "#10B981" },
  { name: "Trades", count: 21, color: "#F59E0B" },
  { name: "Creative", count: 15, color: "#EC4899" },
  { name: "Education", count: 12, color: BRAND },
  { name: "Business & Legal", count: 14, color: "#06B6D4" },
];

const TECH_JOBS: Record<string, string[]> = {
  "Software Engineer": ["TypeScript", "React", "Node.js", "Python", "SQL"],
  "UI/UX Designer": ["Figma", "Prototyping", "User Research", "Accessibility"],
  "Data Analyst": ["SQL", "Python", "Tableau", "Excel"],
};

export function MobileSkillsTaxonomy() {
  const [selectedSector, setSelectedSector] = useState("Technology");
  const [openJob, setOpenJob] = useState<string | null>("Software Engineer");
  const [search, setSearch] = useState("");

  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={16} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Skills Taxonomy</div>
              <div style={{ fontSize: 11, color: subtle }}>128 skills · 9 sectors</div>
            </div>
          </div>
          <Bell size={18} color={subtle} />
        </div>
        <div style={{ position: "relative" }}>
          <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search skills…" style={{ width: "100%", padding: "8px 12px 8px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 10, fontSize: 13, color: "#9CA3AF", outline: "none", boxSizing: "border-box" }} />
        </div>
      </div>

      {/* Sector pills */}
      <div style={{ padding: "10px 16px", borderBottom: `1px solid ${border}`, overflowX: "auto", display: "flex", gap: 8, flexShrink: 0 }}>
        {SECTORS.map(({ name, count, color }) => (
          <button key={name} onClick={() => setSelectedSector(name)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, background: selectedSector === name ? `${BRAND}20` : "rgba(255,255,255,0.04)", border: `1px solid ${selectedSector === name ? BRAND + "50" : border}`, color: selectedSector === name ? BRAND : subtle, fontSize: 12, fontWeight: selectedSector === name ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
            {name}
            <span style={{ fontSize: 10, opacity: 0.7 }}>({count})</span>
          </button>
        ))}
      </div>

      {/* Job accordion */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 80px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 12 }}>{selectedSector} — {Object.keys(TECH_JOBS).length} job titles</div>
        <div style={{ borderRadius: 14, border: `1px solid ${border}`, overflow: "hidden" }}>
          {Object.entries(TECH_JOBS).map(([jobTitle, skills]) => (
            <div key={jobTitle}>
              <button onClick={() => setOpenJob(openJob === jobTitle ? null : jobTitle)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 14px", background: openJob === jobTitle ? `${BRAND}10` : "transparent", border: "none", borderBottom: `1px solid ${border}`, cursor: "pointer", color: openJob === jobTitle ? BRAND : text, fontSize: 14, fontWeight: 600, textAlign: "left" }}>
                <span>{jobTitle}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, color: openJob === jobTitle ? BRAND : subtle }}>{skills.length}</span>
                  <ChevronDown size={14} style={{ transform: openJob === jobTitle ? "none" : "rotate(-90deg)", color: subtle }} />
                </div>
              </button>
              {openJob === jobTitle && (
                <div style={{ padding: "10px 14px 14px", background: "rgba(255,255,255,0.01)", borderBottom: `1px solid ${border}` }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {skills.map(skill => (
                      <span key={skill} style={{ padding: "4px 10px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 12, color: BRAND }}>{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { label: "Browse", active: true },
          { label: "Search", active: false },
          { label: "Add", active: false },
        ].map(({ label, active }) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, padding: "8px 4px", background: "transparent", border: "none", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: active ? `${BRAND}20` : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {label === "Browse" ? <BookOpen size={20} color={active ? BRAND : subtle} /> :
               label === "Search" ? <Search size={20} color={subtle} /> :
               <Plus size={20} color={subtle} />}
            </div>
            <span style={{ fontSize: 10, color: active ? BRAND : "#4B5563", fontWeight: active ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
