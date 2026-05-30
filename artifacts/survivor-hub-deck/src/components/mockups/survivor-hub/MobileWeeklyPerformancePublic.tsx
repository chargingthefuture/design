// design-sync
// STATE: Unauthenticated — visitor with no session
import { BarChart2, Lock, UserPlus, Calendar, TrendingUp } from "lucide-react";

const BRAND = "#F59E0B";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const BLURRED = [
  { label: "Members", value: "4,912", color: "#A78BFA" },
  { label: "Sign-ups", value: "213", color: "#22C55E" },
  { label: "Engagements", value: "1,847", color: BRAND },
  { label: "GDP Delta", value: "+$1.2M", color: "#06B6D4" },
];

export function MobileWeeklyPerformancePublic() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 12px", background: `${BRAND}10`, borderBottom: `1px solid ${BRAND}25`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <BarChart2 size={18} color={BRAND} />
            <div style={{ fontSize: 16, fontWeight: 700 }}>Weekly Performance</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", border: `1px solid ${border}`, color: text, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: BRAND, border: "none", color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Join Free</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "20px 16px 0" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 8 }}>See how the platform grows</div>
        <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, marginBottom: 16 }}>
          Member growth, plugin engagement, and GDP delta — tracked week over week.
        </div>
        <button style={{ width: "100%", padding: "13px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box", marginBottom: 20 }}>
          <UserPlus size={15} /> Create free account
        </button>
      </div>

      {/* Blurred cards + lock overlay */}
      <div style={{ padding: "0 16px 32px", position: "relative" }}>
        <div style={{ filter: "blur(5px)", pointerEvents: "none", opacity: 0.4 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            {BLURRED.map(({ label, value, color }) => (
              <div key={label} style={{ padding: "14px 12px", borderRadius: 12, background: surface, border: `1px solid ${color}20` }}>
                <div style={{ fontSize: 9, color: subtle, marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 90, borderRadius: 14, background: surface, border: `1px solid ${border}` }} />
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", border: `2px solid ${BRAND}50`, background: `${BRAND}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={18} color={BRAND} />
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, textAlign: "center" }}>Sign in to view metrics</div>
        </div>
      </div>

      {/* Bottom nav (locked) */}
      <div style={{ marginTop: "auto", height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[BarChart2, Calendar, TrendingUp].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: 0.4 }}>
            <Icon size={20} color={subtle} />
            <span style={{ fontSize: 10, color: subtle }}>{["Metrics", "History", "Trends"][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
