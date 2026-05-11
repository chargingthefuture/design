import { Users, Globe, Calendar, CheckCircle2, Plus, Bell, Zap } from "lucide-react";

const COLOR = "#8B5CF6";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const SKILL_OPTIONS = [
  { label: "Technology & Coding", emoji: "💻", color: "#06B6D4" },
  { label: "Business & Finance", emoji: "📊", color: "#22C55E" },
  { label: "Creative Economy", emoji: "🎨", color: "#EC4899" },
  { label: "Trade & Craftsmanship", emoji: "🔧", color: "#F97316" },
  { label: "Leadership & Coaching", emoji: "🏆", color: "#EAB308" },
  { label: "Health & Wellness", emoji: "💚", color: "#14B8A6" },
];

const STEPS = [
  { n: "1", label: "Choose your skills", desc: "Select what you want to learn or teach" },
  { n: "2", label: "Get matched", desc: "Algorithm places you in a 12-person cohort" },
  { n: "3", label: "Meet weekly", desc: "1-hour global mastermind every week" },
];

export function PeerProgrammingEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Users size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>Peer Programming</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 1</span>
          </div>
        </div>

        <div style={{ padding: "16px", flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>My Cohorts</div>
          <div style={{ borderRadius: 12, border: `2px dashed ${border}`, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
            <Users size={22} color={subtle} />
            <div style={{ fontSize: 13, fontWeight: 600, color: text }}>Not in a cohort yet</div>
            <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>Once matched, your weekly cohort appears here</div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>How It Works</div>
            {STEPS.map(({ n, label, desc }) => (
              <div key={n} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${COLOR}20`, border: `1px solid ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: COLOR, flexShrink: 0 }}>{n}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, overflowY: "auto", padding: "40px 60px" }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: `${COLOR}15`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Users size={22} color={`${COLOR}60`} />
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>You're not in a cohort yet</div>
              <div style={{ fontSize: 14, color: subtle, marginTop: 2 }}>Tell us what skills interest you and we'll match you globally</div>
            </div>
          </div>

          <div style={{ borderRadius: 14, border: `1px solid ${border}`, background: surface, padding: "20px 24px", marginTop: 24, marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
              <Zap size={14} color={COLOR} />
              <span style={{ fontSize: 13, fontWeight: 700, color: text }}>Deterministic matching</span>
            </div>
            <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6 }}>No one gets left behind. Every survivor who requests a cohort is placed — the algorithm guarantees it. Cohorts are 12 survivors, meet weekly for 8 weeks.</div>
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>What skills interest you?</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 28 }}>
            {SKILL_OPTIONS.map(({ label, emoji, color }) => (
              <div key={label} style={{ borderRadius: 12, border: `1px solid ${border}`, background: surface, padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>{emoji}</span>
                <span style={{ fontSize: 13, color: text, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ padding: "11px 28px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <Plus size={15} /> Find a Cohort
            </button>
            <button style={{ padding: "11px 22px", borderRadius: 10, background: "transparent", border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <Globe size={14} /> Browse Active Cohorts
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
