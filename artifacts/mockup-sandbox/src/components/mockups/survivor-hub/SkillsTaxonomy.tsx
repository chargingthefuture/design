// design-sync
// STATE: Authenticated + Populated — Skills Taxonomy Browser
import { useState } from "react";
import {
  BookOpen, Search, ChevronDown, ChevronRight,
  Bell, Settings, Plus, Layers, TrendingUp, Shield,
} from "lucide-react";

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
  { name: "Education", count: 12, color: "#8B5CF6" },
  { name: "Business & Legal", count: 14, color: "#06B6D4" },
  { name: "Food & Hospitality", count: 9, color: "#F97316" },
  { name: "Agriculture", count: 7, color: "#22C55E" },
  { name: "Beauty & Wellness", count: 8, color: "#A855F7" },
];

const TECH_JOBS: Record<string, string[]> = {
  "Software Engineer": ["TypeScript", "React", "Node.js", "Python", "SQL", "Docker"],
  "UI/UX Designer": ["Figma", "Prototyping", "User Research", "Accessibility", "Wireframing"],
  "Data Analyst": ["SQL", "Python", "Tableau", "Excel", "Statistics"],
  "Cybersecurity Analyst": ["Penetration Testing", "SIEM", "Network Security", "Compliance"],
  "IT Support": ["Windows Admin", "Linux", "Networking", "Help Desk", "Active Directory"],
};

const RECENTLY_ADDED = [
  { skill: "Kintsugi", sector: "Creative", added: "2 days ago" },
  { skill: "Aquaponics", sector: "Agriculture", added: "3 days ago" },
  { skill: "Sign Language (ASL)", sector: "Education", added: "5 days ago" },
];

export function SkillsTaxonomy({ isAdmin = false }: { isAdmin?: boolean }) {
  const [selectedSector, setSelectedSector] = useState("Technology");
  const [openJob, setOpenJob] = useState<string | null>("Software Engineer");
  const [search, setSearch] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <BookOpen size={20} color={BRAND} />
        </div>
        {[Search, Layers, TrendingUp, Shield].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${BRAND}20` : "transparent", border: i === 0 ? `1px solid ${BRAND}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Sector sidebar */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>📚 Skills Taxonomy</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5, marginBottom: 12 }}>Browse sectors, job titles, and skills</div>
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search skills…" style={{ width: "100%", padding: "7px 10px 7px 28px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: "#9CA3AF", outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#374151", textTransform: "uppercase", padding: "4px 8px 8px" }}>Sectors ({SECTORS.length})</div>
          {SECTORS.map(({ name, count, color }) => (
            <button key={name} onClick={() => setSelectedSector(name)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, cursor: "pointer", background: selectedSector === name ? `${BRAND}18` : "transparent", borderLeft: selectedSector === name ? `2px solid ${BRAND}` : "2px solid transparent", marginLeft: 2, marginBottom: 2, border: "none", textAlign: "left" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: selectedSector === name ? text : "#9CA3AF", flex: 1 }}>{name}</span>
              <span style={{ fontSize: 11, color: selectedSector === name ? BRAND : "#4B5563", fontWeight: 600 }}>{count}</span>
            </button>
          ))}
        </div>
        {isAdmin && (
          <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
            <button style={{ width: "100%", padding: "9px", borderRadius: 8, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Plus size={13} /> Add Sector
            </button>
          </div>
        )}
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          <BookOpen size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>{selectedSector}</div>
            <div style={{ fontSize: 12, color: subtle }}>Skills taxonomy browser</div>
          </div>
          {isAdmin && (
            <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 16px", borderRadius: 8, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <Plus size={14} /> Add Job Title
            </button>
          )}
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Job Titles", value: String(Object.keys(TECH_JOBS).length), color: BRAND },
              { label: "Total Skills", value: String(Object.values(TECH_JOBS).flat().length), color: "#22C55E" },
              { label: "Sector", value: selectedSector, color: "#06B6D4" },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ flex: 1, padding: "14px 16px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
                <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div style={{ border: `1px solid ${border}`, borderRadius: 14, overflow: "hidden" }}>
            {Object.entries(TECH_JOBS).map(([jobTitle, skills], idx) => (
              <div key={jobTitle}>
                <button onClick={() => setOpenJob(openJob === jobTitle ? null : jobTitle)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: openJob === jobTitle ? `${BRAND}10` : idx % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent", border: "none", borderBottom: `1px solid ${border}`, cursor: "pointer", color: openJob === jobTitle ? BRAND : text, fontSize: 14, fontWeight: 600, textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <ChevronDown size={14} style={{ transform: openJob === jobTitle ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s", color: openJob === jobTitle ? BRAND : subtle }} />
                    {jobTitle}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 11, color: openJob === jobTitle ? BRAND : subtle, background: openJob === jobTitle ? `${BRAND}15` : "rgba(255,255,255,0.05)", borderRadius: 10, padding: "2px 8px", fontWeight: 600 }}>{skills.length} skills</span>
                    {isAdmin && <Plus size={13} color={subtle} />}
                  </div>
                </button>
                {openJob === jobTitle && (
                  <div style={{ padding: "12px 18px 16px", background: "rgba(255,255,255,0.01)", borderBottom: `1px solid ${border}` }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {skills.map(skill => (
                        <span key={skill} style={{ padding: "5px 12px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 12, color: BRAND, fontWeight: 500, cursor: isAdmin ? "pointer" : "default" }}>
                          {skill}
                        </span>
                      ))}
                      {isAdmin && (
                        <button style={{ padding: "5px 12px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: `1px dashed ${border}`, fontSize: 12, color: subtle, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                          <Plus size={11} /> Add skill
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Taxonomy Stats</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { label: "Sectors", value: "9", color: BRAND },
            { label: "Job Titles", value: "47", color: "#22C55E" },
            { label: "Total Skills", value: "128", color: "#06B6D4" },
            { label: "Proposed", value: "14", color: "#F59E0B" },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color }}>{value}</div>
              <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>Recently Added</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
          {RECENTLY_ADDED.map(({ skill, sector, added }) => (
            <div key={skill} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: text }}>{skill}</div>
                <div style={{ fontSize: 11, color: subtle }}>{sector}</div>
              </div>
              <div style={{ fontSize: 10, color: "#4B5563" }}>{added}</div>
            </div>
          ))}
        </div>

        {isAdmin && (
          <div style={{ padding: "14px 16px", borderRadius: 12, background: `${BRAND}08`, border: `1px solid ${BRAND}20` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: BRAND, marginBottom: 8 }}>Admin Actions</div>
            {["Add skill", "Add job title", "Add sector", "Review proposed (14)"].map(action => (
              <button key={action} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 7, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, color: text, fontSize: 12, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                <Plus size={12} color={BRAND} /> {action}
              </button>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}
