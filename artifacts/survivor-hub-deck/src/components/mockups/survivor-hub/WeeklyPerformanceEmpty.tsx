// design-sync
// STATE: Authenticated, no metrics data yet (week in progress / fresh install)
import { BarChart2, Clock, TrendingUp, Users } from "lucide-react";

const BRAND = "#F59E0B";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const EMPTY_METRICS = [
  { label: "Total Members", icon: Users, color: "#A78BFA" },
  { label: "New Sign-ups", icon: TrendingUp, color: "#22C55E" },
  { label: "Plugin Engagements", icon: BarChart2, color: BRAND },
  { label: "GDP Delta", icon: TrendingUp, color: "#06B6D4" },
];

export function WeeklyPerformanceEmpty() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <BarChart2 size={18} color={BRAND} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Weekly Performance</div>
          <div style={{ fontSize: 12, color: subtle }}>Week in progress — metrics populate when the week closes</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}30`, fontSize: 11, fontWeight: 600, color: BRAND }}>
          ● Week in Progress
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "40px 48px" }}>

        {/* Metric cards — zeros */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 32 }}>
          {EMPTY_METRICS.map(({ label, icon: Icon, color }) => (
            <div key={label} style={{ padding: "18px 16px", borderRadius: 14, background: surface, border: `1px solid ${color}15`, textAlign: "center" }}>
              <Icon size={20} color={color} style={{ marginBottom: 8, opacity: 0.5 }} />
              <div style={{ fontSize: 28, fontWeight: 800, color: subtle, marginBottom: 4 }}>—</div>
              <div style={{ fontSize: 11, color: subtle }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Empty chart placeholder */}
        <div style={{ padding: "28px 32px", borderRadius: 16, background: surface, border: `1px solid ${border}`, marginBottom: 32 }}>
          <div style={{ textAlign: "center", padding: "32px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{ width: 64, height: 64, borderRadius: 18, background: `${BRAND}10`, border: `1px dashed ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarChart2 size={28} style={{ color: BRAND, opacity: 0.4 }} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: text }}>Chart will appear when the week closes</div>
            <div style={{ fontSize: 13, color: subtle, maxWidth: 440, lineHeight: 1.6 }}>
              Daily engagement data is collected throughout the week. The chart populates once the week is marked closed by an admin.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 20, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
              <Clock size={14} color={subtle} />
              <span style={{ fontSize: 12, color: subtle }}>Current week: May 19–25, 2025</span>
            </div>
          </div>
          {/* Placeholder bars */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80, opacity: 0.15 }}>
            {[50, 65, 45, 75, 80, 55, 30].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: "80%", height: `${h}%`, borderRadius: "3px 3px 0 0", background: BRAND }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "16px 20px", borderRadius: 14, background: `${BRAND}06`, border: `1px solid ${BRAND}20`, display: "flex", alignItems: "center", gap: 14, maxWidth: 600 }}>
          <Clock size={20} color={BRAND} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 3 }}>Week in progress — metrics will populate when the week closes</div>
            <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>Admins can lock the week at any time. Once locked, all metrics and charts will be available to view and export.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
