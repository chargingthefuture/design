// design-sync
// STATE: Authenticated + Populated
import { useState } from "react";
import { BarChart2, TrendingUp, Users, Calendar, Download, Bell, Lock } from "lucide-react";

const BRAND = "#F59E0B";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const METRICS = [
  { label: "Members", value: "4,912", delta: "+48", color: "#A78BFA" },
  { label: "Sign-ups", value: "213", delta: "+31", color: "#22C55E" },
  { label: "Engagements", value: "1,847", delta: "+204", color: BRAND },
  { label: "GDP Delta", value: "+$1.2M", delta: "+0.5%", color: "#06B6D4" },
];

const CHART_BARS = [
  { label: "M", h: 58 }, { label: "T", h: 74 }, { label: "W", h: 65 },
  { label: "T", h: 90 }, { label: "F", h: 100 }, { label: "S", h: 66 }, { label: "S", h: 42 },
];

export function MobileWeeklyPerformance({ isAdmin = false }: { isAdmin?: boolean }) {
  const [tab, setTab] = useState<"metrics" | "history">("metrics");

  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarChart2 size={16} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Weekly Performance</div>
              <div style={{ fontSize: 11, color: subtle }}>May 19–25, 2025 · In Progress</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {isAdmin && <button style={{ width: 32, height: 32, borderRadius: 8, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Download size={14} color={BRAND} /></button>}
            <Bell size={18} color={subtle} />
          </div>
        </div>
        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4 }}>
          {(["metrics", "history"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "7px", borderRadius: 8, background: tab === t ? `${BRAND}20` : "rgba(255,255,255,0.04)", border: `1px solid ${tab === t ? BRAND + "40" : border}`, color: tab === t ? BRAND : subtle, fontSize: 12, fontWeight: tab === t ? 700 : 400, cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 80px" }}>
        {tab === "metrics" && (
          <>
            {/* Metric cards 2x2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              {METRICS.map(({ label, value, delta, color }) => (
                <div key={label} style={{ padding: "14px 12px", borderRadius: 12, background: surface, border: `1px solid ${color}20` }}>
                  <div style={{ fontSize: 10, color: subtle, marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
                  <div style={{ fontSize: 10, color: "#22C55E", marginTop: 4 }}>↑ {delta}</div>
                </div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div style={{ padding: "14px 16px", borderRadius: 14, background: surface, border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 12 }}>Daily Engagements</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80 }}>
                {CHART_BARS.map(({ label, h }) => (
                  <div key={label + h} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "80%", height: `${h}%`, borderRadius: "3px 3px 0 0", background: BRAND }} />
                    <span style={{ fontSize: 9, color: subtle }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "history" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "May 19–25, 2025", status: "In Progress", active: true },
              { label: "May 12–18, 2025", status: "Closed", active: false },
              { label: "May 5–11, 2025", status: "Closed", active: false },
              { label: "Apr 28–May 4", status: "Closed", active: false },
            ].map(({ label, status, active }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, cursor: "pointer" }}>
                <Calendar size={16} color={active ? BRAND : subtle} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text }}>{label}</div>
                  <div style={{ fontSize: 11, color: subtle }}>{status}</div>
                </div>
                <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: active ? `${BRAND}15` : "rgba(255,255,255,0.05)", color: active ? BRAND : subtle, fontWeight: 600 }}>{active ? "LIVE" : "View"}</span>
              </div>
            ))}
            {!isAdmin && (
              <div style={{ padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <Lock size={13} color={subtle} />
                <span style={{ fontSize: 11, color: subtle }}>CSV export is admin-only</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: BarChart2, label: "Metrics", active: tab === "metrics" },
          { Icon: Calendar, label: "History", active: tab === "history" },
          { Icon: TrendingUp, label: "Trends", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: active ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
