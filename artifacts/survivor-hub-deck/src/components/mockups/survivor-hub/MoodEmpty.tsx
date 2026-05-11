import { Smile, Shield, Lock, TrendingUp, Plus, BarChart2 } from "lucide-react";

const COLOR = "#EC4899";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const MOODS = [
  { emoji: "😄", label: "Great", value: 5, color: "#22C55E" },
  { emoji: "🙂", label: "Good", value: 4, color: "#84CC16" },
  { emoji: "😐", label: "Okay", value: 3, color: "#F59E0B" },
  { emoji: "😔", label: "Low", value: 2, color: "#F97316" },
  { emoji: "😢", label: "Struggling", value: 1, color: "#EF4444" },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function MoodEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left panel */}
      <aside style={{ width: 320, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Smile size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>Mood</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 0</span>
          </div>
        </div>

        {/* Check-in card — prominent */}
        <div style={{ padding: "20px 16px" }}>
          <div style={{ borderRadius: 14, border: `1px solid ${COLOR}25`, background: `${COLOR}06`, padding: "20px 16px" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 4 }}>How are you today?</div>
            <div style={{ fontSize: 12, color: subtle, marginBottom: 16 }}>Anonymous — only you see your personal history</div>
            <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
              {MOODS.map(({ emoji, label, color }) => (
                <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 4px", borderRadius: 10, border: `1px solid ${border}`, cursor: "pointer", background: surface }}>
                  <span style={{ fontSize: 22 }}>{emoji}</span>
                  <span style={{ fontSize: 10, color: subtle, fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
            <button style={{ width: "100%", marginTop: 12, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Plus size={14} /> Log Today's Mood
            </button>
          </div>

          {/* History — empty */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>My History</div>
            <div style={{ borderRadius: 12, border: `2px dashed ${border}`, padding: 20, textAlign: "center" }}>
              <TrendingUp size={20} color={subtle} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 4 }}>No check-ins yet</div>
              <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>Log your first mood to see your personal trend over time</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right panel — community pulse empty */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 32px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 10 }}>
          <BarChart2 size={16} color={COLOR} />
          <div style={{ fontSize: 15, fontWeight: 700 }}>Community Pulse</div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <Lock size={12} color={subtle} /><span style={{ fontSize: 12, color: subtle }}>Fully anonymous — no identifiers stored</span>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 48 }}>
          <div style={{ maxWidth: 460, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Smile size={34} color={`${COLOR}60`} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Community mood data loading</div>
            <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
              The community pulse appears once members start checking in. All data is fully anonymous — no names, no IDs, only aggregated mood scores by day.
            </div>

            {/* Placeholder chart */}
            <div style={{ width: "100%", borderRadius: 14, border: `1px solid ${border}`, background: surface, padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: subtle }}>7-day community average</span>
                <span style={{ fontSize: 12, color: `${subtle}80` }}>Waiting for check-ins…</span>
              </div>
              <div style={{ display: "flex", gap: 8, height: 80, alignItems: "flex-end" }}>
                {[0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ flex: 1, width: "100%", borderRadius: "4px 4px 0 0", background: "rgba(255,255,255,0.04)", border: `1px dashed ${border}`, minHeight: 40 }} />
                    <span style={{ fontSize: 10, color: `${subtle}60` }}>{DAYS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 24 }}>
              {[
                { icon: Shield, label: "Anonymous by design" },
                { icon: Lock, label: "Zero personal data stored" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: subtle }}>
                  <Icon size={14} color={COLOR} /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
