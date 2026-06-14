// design-sync
// STATE: Authenticated, taxonomy has no entries yet
import { BookOpen, Plus, Upload, Clock } from "lucide-react";

const BRAND = "#818CF8";
const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

export function SkillsTaxonomyEmpty({ isAdmin = false }: { isAdmin?: boolean }) {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <BookOpen size={18} color={BRAND} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Skills Taxonomy</div>
          <div style={{ fontSize: 12, color: subtle }}>Sectors · Job Titles · Skills</div>
        </div>
      </div>

      {/* Empty body */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 64px" }}>
        <div style={{ maxWidth: 600, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>

          {/* Illustration */}
          <div style={{ width: 88, height: 88, borderRadius: 24, background: `${BRAND}10`, border: `1px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={38} style={{ color: BRAND, opacity: 0.4 }} />
          </div>

          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: text, marginBottom: 10 }}>
              {isAdmin ? "Taxonomy not populated yet" : "Skills taxonomy not published yet"}
            </div>
            <div style={{ fontSize: 15, color: subtle, lineHeight: 1.7, maxWidth: 460 }}>
              {isAdmin
                ? "Import a CSV or manually add sectors, job titles, and skills to start building the skills database."
                : "The skills taxonomy is being built. Check back soon — it will unlock the full Directory and Skills Hunt experience."}
            </div>
          </div>

          {isAdmin ? (
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ padding: "14px 28px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <Upload size={16} /> Import Taxonomy CSV
              </button>
              <button style={{ padding: "14px 28px", borderRadius: 12, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <Plus size={16} /> Add First Sector
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 20, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
                <Clock size={14} color={subtle} />
                <span style={{ fontSize: 13, color: subtle }}>Taxonomy is being populated by admins</span>
              </div>
            </div>
          )}

          {/* Columns preview placeholder */}
          <div style={{ width: "100%", display: "flex", gap: 10, opacity: 0.35 }}>
            {["Sectors", "Job Titles", "Skills"].map(col => (
              <div key={col} style={{ flex: 1, padding: "14px", borderRadius: 12, border: `1px dashed ${border}`, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em" }}>{col}</div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ height: 28, borderRadius: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }} />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
