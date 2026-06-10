// design-sync
// STATE: Unauthenticated — visitor with no session
import { BarChart2, Lock, Users, TrendingUp, UserPlus, LogIn } from "lucide-react";

const BRAND = "#F59E0B";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const BLURRED_METRICS = [
  { label: "Total Members", value: "4,912", color: "#A78BFA" },
  { label: "New Sign-ups", value: "213", color: "#22C55E" },
  { label: "Plugin Engagements", value: "1,847", color: BRAND },
  { label: "GDP Delta", value: "+$1.2M", color: "#06B6D4" },
];

export function WeeklyPerformancePublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <BarChart2 size={18} color={BRAND} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Weekly Performance</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, color: text, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <UserPlus size={13} /> Join Free
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, fontSize: 12, color: BRAND, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
            Updated weekly
          </span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.15 }}>
            See how the platform grows<br />
            <span style={{ color: BRAND }}>week over week</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 500, lineHeight: 1.7 }}>
            Member growth, plugin engagement, and GDP delta — all tracked weekly. Sign in to view current and historical data.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ padding: "14px 32px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Sign in to view metrics
            </button>
          </div>
        </div>
        <div style={{ width: 260, flexShrink: 0 }}>
          <div style={{ padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${border}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: BRAND, marginBottom: 14 }}>What you get access to</div>
            {[
              { icon: "📊", t: "Weekly metric cards", d: "Member count, sign-ups, engagement, GDP delta" },
              { icon: "📈", t: "Day-by-day chart", d: "Plugin engagement compared to prior week" },
              { icon: "🗓️", t: "Full week history", d: "Browse closed weeks going back in time" },
              { icon: "📤", t: "Admin export (gated)", d: "Admins can export data as CSV" },
            ].map(item => (
              <div key={item.t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{item.t}</div>
                  <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blurred metric cards + lock */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ filter: "blur(6px)", pointerEvents: "none", opacity: 0.4 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
            {BLURRED_METRICS.map(({ label, value, color }) => (
              <div key={label} style={{ padding: "18px 16px", borderRadius: 14, background: surface, border: `1px solid ${color}20` }}>
                <div style={{ fontSize: 11, color: subtle, marginBottom: 10 }}>{label}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color }}>{value}</div>
                <div style={{ fontSize: 11, color: "#22C55E", marginTop: 6 }}>↑ +XX vs last week</div>
              </div>
            ))}
          </div>
          <div style={{ padding: "20px 24px", borderRadius: 16, background: surface, border: `1px solid ${border}`, height: 120 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${BRAND}50`, background: `${BRAND}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={BRAND} />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, textAlign: "center" }}>Sign in to view platform performance</div>
          <div style={{ fontSize: 13, color: subtle, textAlign: "center", maxWidth: 340, lineHeight: 1.6 }}>
            Survivors can view weekly metrics. Admin accounts can additionally lock weeks and export data.
          </div>
          <button style={{ padding: "12px 28px", borderRadius: 9, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Create free account
          </button>
        </div>
      </div>
    </div>
  );
}
