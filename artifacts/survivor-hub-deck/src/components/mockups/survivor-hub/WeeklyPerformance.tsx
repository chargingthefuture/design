// design-sync
// STATE: Authenticated + Populated — Weekly Performance Dashboard
import { useState } from "react";
import {
  BarChart2, Bell, Settings, TrendingUp, Users,
  Download, Lock, ChevronRight, Calendar, CheckCircle,
} from "lucide-react";

const BRAND = "#F59E0B";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const WEEKS = [
  { label: "May 19–25, 2025", status: "current", active: true },
  { label: "May 12–18, 2025", status: "closed", active: false },
  { label: "May 5–11, 2025", status: "closed", active: false },
  { label: "Apr 28–May 4", status: "closed", active: false },
  { label: "Apr 21–27, 2025", status: "closed", active: false },
];

const METRICS = [
  { label: "Total Members", value: "4,912", delta: "+48", icon: Users, color: "#A78BFA" },
  { label: "New Sign-ups", value: "213", delta: "+31", icon: TrendingUp, color: "#22C55E" },
  { label: "Plugin Engagements", value: "1,847", delta: "+204", icon: BarChart2, color: BRAND },
  { label: "GDP Delta", value: "+$1.2M", delta: "+0.5%", icon: TrendingUp, color: "#06B6D4" },
];

const CHART_BARS = [
  { label: "Mon", cur: 240, prev: 190 },
  { label: "Tue", cur: 310, prev: 220 },
  { label: "Wed", cur: 280, prev: 250 },
  { label: "Thu", cur: 390, prev: 270 },
  { label: "Fri", cur: 420, prev: 300 },
  { label: "Sat", cur: 280, prev: 210 },
  { label: "Sun", cur: 180, prev: 160 },
];
const maxBar = Math.max(...CHART_BARS.map(b => b.cur));

export function WeeklyPerformance({ isAdmin = false }: { isAdmin?: boolean }) {
  const [selectedWeek, setSelectedWeek] = useState(0);

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <BarChart2 size={20} color={BRAND} />
        </div>
        {[BarChart2, TrendingUp, Calendar].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${BRAND}20` : "transparent", border: i === 0 ? `1px solid ${BRAND}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Week sidebar */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>📊 Weekly Performance</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Week-over-week platform metrics</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#374151", textTransform: "uppercase", padding: "4px 10px 8px" }}>Week History</div>
          {WEEKS.map(({ label, status, active }, i) => (
            <button key={label} onClick={() => setSelectedWeek(i)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 8, cursor: "pointer", background: selectedWeek === i ? `${BRAND}18` : "transparent", borderLeft: selectedWeek === i ? `2px solid ${BRAND}` : "2px solid transparent", marginLeft: 2, marginBottom: 2, border: "none", textAlign: "left" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: selectedWeek === i ? text : "#9CA3AF", fontWeight: selectedWeek === i ? 600 : 400 }}>{label}</div>
              </div>
              <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 10, background: active ? `${BRAND}20` : "rgba(255,255,255,0.05)", color: active ? BRAND : subtle, fontWeight: 600 }}>{active ? "LIVE" : "Closed"}</span>
            </button>
          ))}
        </div>
        {isAdmin && (
          <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
            <div style={{ padding: "10px 12px", borderRadius: 10, background: `${BRAND}08`, border: `1px solid ${BRAND}20` }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Admin Controls</div>
              <button style={{ width: "100%", padding: "7px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: text, fontSize: 11, cursor: "pointer", marginBottom: 5 }}>🔒 Lock Week</button>
              <button style={{ width: "100%", padding: "7px", borderRadius: 7, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <Download size={11} /> Export CSV
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          <BarChart2 size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Week of {WEEKS[selectedWeek].label}</div>
            <div style={{ fontSize: 12, color: subtle }}>Non-financial platform metrics</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: WEEKS[selectedWeek].active ? `${BRAND}15` : "rgba(255,255,255,0.05)", border: `1px solid ${WEEKS[selectedWeek].active ? BRAND + "40" : border}`, fontSize: 11, fontWeight: 600, color: WEEKS[selectedWeek].active ? BRAND : subtle }}>
            {WEEKS[selectedWeek].active ? "● In Progress" : <><CheckCircle size={11} /> Closed</>}
          </div>
          {isAdmin && (
            <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <Download size={14} /> Export
            </button>
          )}
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>

          {/* Metric cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
            {METRICS.map(({ label, value, delta, icon: Icon, color }) => (
              <div key={label} style={{ padding: "18px 16px", borderRadius: 14, background: surface, border: `1px solid ${color}20` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: subtle }}>{label}</span>
                  <Icon size={14} color={color} />
                </div>
                <div style={{ fontSize: 26, fontWeight: 800, color, marginBottom: 4 }}>{value}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#22C55E" }}>
                  <TrendingUp size={11} /> {delta} vs last week
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div style={{ padding: "20px 24px", borderRadius: 16, background: surface, border: `1px solid ${border}`, marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: text }}>Plugin Engagements — Daily</div>
              <div style={{ display: "flex", gap: 12, fontSize: 11 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: BRAND }} /><span style={{ color: subtle }}>This week</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} /><span style={{ color: subtle }}>Last week</span></div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120 }}>
              {CHART_BARS.map(({ label, cur, prev }) => (
                <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 100 }}>
                    <div style={{ width: "45%", height: `${(prev / maxBar) * 100}%`, borderRadius: "3px 3px 0 0", background: "rgba(255,255,255,0.12)" }} />
                    <div style={{ width: "45%", height: `${(cur / maxBar) * 100}%`, borderRadius: "3px 3px 0 0", background: BRAND }} />
                  </div>
                  <span style={{ fontSize: 10, color: subtle }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Week Summary</div>
        <div style={{ padding: "16px", borderRadius: 14, background: `${BRAND}08`, border: `1px solid ${BRAND}20`, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <BarChart2 size={14} color={BRAND} />
            <span style={{ fontSize: 13, fontWeight: 600, color: BRAND }}>May 19–25, 2025</span>
          </div>
          {[
            { k: "Status", v: "In Progress" },
            { k: "Days elapsed", v: "4 of 7" },
            { k: "Engagement", v: "↑ 12% vs prior" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
              <span style={{ color: subtle }}>{k}</span>
              <span style={{ color: text, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>Top Apps This Week</div>
        {[
          { name: "Chyme", val: "428 sessions", color: "#22C55E" },
          { name: "LightHouse", val: "312 sessions", color: "#EAB308" },
          { name: "SkillsHunt", val: "287 sessions", color: "#A855F7" },
          { name: "Foundation", val: "198 sessions", color: "#EF4444" },
        ].map(({ name, val, color }) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: text, flex: 1 }}>{name}</span>
            <span style={{ fontSize: 11, color: subtle }}>{val}</span>
          </div>
        ))}
        {!isAdmin && (
          <div style={{ marginTop: 12, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
            <Lock size={13} color={subtle} />
            <span style={{ fontSize: 11, color: subtle }}>Export available to admins</span>
          </div>
        )}
      </aside>
    </div>
  );
}
