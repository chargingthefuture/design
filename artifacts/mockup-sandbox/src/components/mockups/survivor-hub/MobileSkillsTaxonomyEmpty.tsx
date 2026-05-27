// STATE: Authenticated, taxonomy has no entries yet
import { BookOpen, Upload, Plus, Clock } from "lucide-react";

const BRAND = "#8B5CF6";
const bg = "#0F1117";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

export function MobileSkillsTaxonomyEmpty({ isAdmin = false }: { isAdmin?: boolean }) {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={16} color={BRAND} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Skills Taxonomy</div>
            <div style={{ fontSize: 11, color: subtle }}>Sectors · Job Titles · Skills</div>
          </div>
        </div>
      </div>

      {/* Empty state */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center", gap: 20 }}>

        <div style={{ width: 80, height: 80, borderRadius: 22, background: `${BRAND}10`, border: `1px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BookOpen size={34} style={{ color: BRAND, opacity: 0.4 }} />
        </div>

        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 8 }}>
            {isAdmin ? "Taxonomy not populated yet" : "Skills database coming soon"}
          </div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, maxWidth: 320 }}>
            {isAdmin
              ? "Import a CSV or manually add sectors, job titles, and skills."
              : "The skills taxonomy is being built by admins. Check back soon."}
          </div>
        </div>

        {isAdmin ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <button style={{ padding: "13px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Upload size={16} /> Import Taxonomy CSV
            </button>
            <button style={{ padding: "13px", borderRadius: 12, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Plus size={16} /> Add First Sector
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 20, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
            <Clock size={14} color={subtle} />
            <span style={{ fontSize: 12, color: subtle }}>Admins are building the taxonomy</span>
          </div>
        )}

        {/* Placeholder columns */}
        <div style={{ display: "flex", gap: 8, opacity: 0.25, width: "100%" }}>
          {["Sectors", "Job Titles", "Skills"].map(col => (
            <div key={col} style={{ flex: 1, padding: "10px", borderRadius: 10, border: `1px dashed ${border}` }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: subtle, textTransform: "uppercase", marginBottom: 6 }}>{col}</div>
              {[1, 2, 3].map(i => <div key={i} style={{ height: 24, borderRadius: 5, background: "rgba(255,255,255,0.04)", marginBottom: 4 }} />)}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {["Browse", "Search", "Add"].map((label, i) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <BookOpen size={20} />
            <span style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
