import { Globe, TrendingUp, BarChart2, Plus, ArrowUpRight, Users, DollarSign, MapPin } from "lucide-react";

const COLOR = "#06B6D4";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const SECTORS = [
  { name: "Professional Services", color: COLOR },
  { name: "Technology & Coding", color: "#A855F7" },
  { name: "Housing & Property", color: "#22C55E" },
  { name: "Healthcare & Wellness", color: "#EC4899" },
  { name: "Trade & Craftsmanship", color: "#F97316" },
  { name: "Education & Mentorship", color: "#EAB308" },
];

export function GDPEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <aside style={{ width: 260, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Globe size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>GDP</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 2</span>
          </div>
        </div>

        <div style={{ padding: 16, flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Economy Overview</div>
          {[
            { label: "TI Economy Value", value: "—", sub: "Populates from member skills" },
            { label: "Active Members", value: "—", sub: "Profile required to count" },
            { label: "Countries", value: "—", sub: "Based on verified locations" },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{ borderRadius: 10, border: `1px solid ${border}`, background: surface, padding: "12px 14px", marginBottom: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: `${COLOR}60`, marginBottom: 4 }}>{value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: subtle, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 10, color: `${subtle}80` }}>{sub}</div>
            </div>
          ))}

          <div style={{ marginTop: 16, fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Skill Sectors</div>
          {SECTORS.map(({ name, color }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: `1px solid ${border}`, opacity: 0.5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: color, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: subtle }}>{name}</span>
              <div style={{ flex: 1, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.04)", marginLeft: 8 }} />
            </div>
          ))}
        </div>
      </aside>

      {/* Main area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "20px 32px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Gross Domestic Product — TI Skills Economy</div>
            <div style={{ fontSize: 13, color: subtle, marginTop: 2 }}>Real-time economic output of 5M survivors worldwide</div>
          </div>
          <button style={{ padding: "8px 18px", borderRadius: 8, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={14} /> Add Your Skills
          </button>
        </div>

        {/* Empty state */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 48 }}>
          <div style={{ maxWidth: 520, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Globe size={34} color={`${COLOR}60`} />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>No economic data yet</div>
            <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
              The GDP tracker populates as survivors complete their profiles and declare skills. Every verified skill adds to the community's collective economic value — your contribution counts.
            </div>

            {/* Placeholder chart */}
            <div style={{ width: "100%", borderRadius: 14, border: `1px solid ${border}`, background: surface, padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: subtle }}>Sector breakdown</span>
                <BarChart2 size={16} color={subtle} />
              </div>
              <div style={{ display: "flex", gap: 6, height: 80, alignItems: "flex-end" }}>
                {[25, 55, 35, 70, 45, 30].map((h, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: "4px 4px 0 0", background: "rgba(255,255,255,0.04)", height: `${h}%`, border: `1px solid ${border}` }} />
                ))}
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                {SECTORS.map(({ name, color }) => (
                  <div key={name} style={{ flex: 1, display: "flex", alignItems: "center", gap: 3 }}>
                    <div style={{ width: 6, height: 6, borderRadius: 2, background: color, opacity: 0.4 }} />
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 10, fontSize: 12, color: subtle }}>Populates when profiles are verified</div>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button style={{ padding: "10px 24px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
                <Plus size={14} /> Add Your Skills
              </button>
              <button style={{ padding: "10px 20px", borderRadius: 10, background: "transparent", border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
                <ArrowUpRight size={14} /> View Map
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
