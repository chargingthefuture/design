import { Heart, Play, Wind, Sun, Moon, Star, Clock, Plus, Sparkles } from "lucide-react";

const COLOR = "#14B8A6";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const CATEGORIES = [
  { icon: Wind, label: "Breathing", desc: "Calm your nervous system", color: COLOR, duration: "5 min" },
  { icon: Heart, label: "Mindfulness", desc: "Trauma-informed body scan", color: "#22C55E", duration: "10 min" },
  { icon: Sun, label: "Morning", desc: "Gentle wake-up ritual", color: "#EAB308", duration: "6 min" },
  { icon: Moon, label: "Sleep", desc: "Drift off safely", color: "#8B5CF6", duration: "20 min" },
  { icon: Star, label: "Affirmations", desc: "Strength & resilience", color: "#EC4899", duration: "8 min" },
  { icon: Sparkles, label: "Grounding", desc: "5-4-3-2-1 technique", color: "#F97316", duration: "7 min" },
];

export function GentlePulseEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <aside style={{ width: 280, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Heart size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>GentlePulse</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 2</span>
          </div>
        </div>

        <div style={{ padding: 16, flex: 1 }}>
          {/* Streak widget — empty */}
          <div style={{ borderRadius: 12, border: `2px dashed ${border}`, padding: 20, textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: `${COLOR}30`, marginBottom: 4 }}>0</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: subtle }}>Day streak</div>
            <div style={{ fontSize: 11, color: `${subtle}80`, marginTop: 4 }}>Complete your first session to start your streak</div>
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Recent Sessions</div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ borderRadius: 8, border: `1px solid ${border}`, padding: "10px 12px", marginBottom: 6, display: "flex", gap: 10, alignItems: "center", opacity: 0.35 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)" }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 10, borderRadius: 3, background: "rgba(255,255,255,0.06)", marginBottom: 6, width: "70%" }} />
                <div style={{ height: 8, borderRadius: 3, background: "rgba(255,255,255,0.04)", width: "45%" }} />
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 60px" }}>
        <div style={{ maxWidth: 620, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={34} color={`${COLOR}60`} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Start your healing practice</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7, maxWidth: 440 }}>
            GentlePulse sessions are designed by certified trauma therapists for survivors. Each session is short, guided, and completely private. Begin anywhere — there is no wrong starting point.
          </div>

          {/* Category grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, width: "100%", marginTop: 8 }}>
            {CATEGORIES.map(({ icon: Icon, label, desc, color, duration }) => (
              <div key={label} style={{ borderRadius: 14, border: `1px solid ${color}20`, background: `${color}07`, padding: "16px 14px", textAlign: "left", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={16} color={color} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={10} color={subtle} />
                    <span style={{ fontSize: 10, color: subtle }}>{duration}</span>
                  </div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 11, color: subtle, lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>

          <button style={{ padding: "12px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
            <Play size={16} fill="#000" /> Begin First Session
          </button>
        </div>
      </main>
    </div>
  );
}
