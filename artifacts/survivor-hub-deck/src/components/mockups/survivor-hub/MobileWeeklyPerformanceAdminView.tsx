// design-sync
// STATE: Admin — WeeklyPerformance full admin view (mobile)
// NOTE: deck uses wrapper const MobileWeeklyPerformanceAdmin = () => <MobileWeeklyPerformance isAdmin={true} />
// This file is the standalone admin-only mockup with export controls and per-plugin breakdown.
import { useState } from "react";
import { BarChart2, Download, Users, TrendingUp, Activity } from "lucide-react";

const COLOR  = "#F59E0B";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const METRICS = [
  { label: "New members",    value: "213",    delta: "+31",   color: "#A78BFA" },
  { label: "Active members", value: "4,912",  delta: "+48",   color: "#22C55E" },
  { label: "Engagements",    value: "1,847",  delta: "+204",  color: COLOR      },
  { label: "GDP delta",      value: "+$1.2M", delta: "+0.5%", color: "#06B6D4" },
  { label: "SC issued",      value: "18,240", delta: "+12%",  color: "#F59E0B" },
  { label: "Flags resolved", value: "47",     delta: "–3",    color: "#22C55E" },
];

const PLUGINS = [
  { name: "Foundation",    active: 847,  color: "#F59E0B" },
  { name: "SkillsHunt",   active: 692,  color: "#FBBF24" },
  { name: "LightHouse",   active: 534,  color: "#60A5FA" },
  { name: "SocketRelay",  active: 312,  color: "#FB923C" },
  { name: "ServiceCredits",active: 1203, color: "#A855F7" },
];

const BARS = [
  { label: "M", h: 58 }, { label: "T", h: 74 }, { label: "W", h: 65 },
  { label: "T", h: 90 }, { label: "F", h: 100 }, { label: "S", h: 66 }, { label: "S", h: 42 },
];

export function MobileWeeklyPerformanceAdminView() {
  const [tab, setTab] = useState<"metrics"|"plugins"|"history">("metrics");

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BarChart2 size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Weekly Performance</div>
            <div style={{ fontSize: 11, color: subtle }}>Jun 2–8, 2025 · Admin view</div>
          </div>
          <button style={{ marginLeft: "auto", width: 32, height: 32, borderRadius: 8, background: `${COLOR}15`, border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Download size={14} color={COLOR} />
          </button>
          <div style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["metrics","plugins","history"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 12px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#000" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {tab === "metrics" && (
          <>
            {/* Bar chart */}
            <div style={{ padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Daily active members</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80 }}>
                {BARS.map((b, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", background: `${COLOR}80`, borderRadius: 3, height: `${b.h}%` }} />
                    <span style={{ fontSize: 10, color: subtle }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {METRICS.map(m => (
                <div key={m.label} style={{ padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
                  <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: m.color }}>{m.value}</div>
                  <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>{m.delta} this week</div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "plugins" && PLUGINS.map(p => (
          <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, marginBottom: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{p.name}</div>
              <div style={{ height: 6, borderRadius: 3, background: `${border}`, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${Math.round(p.active / 12)}%`, background: p.color, borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: p.color }}>{p.active.toLocaleString()}</div>
          </div>
        ))}

        {tab === "history" && [
          { week: "May 26–Jun 1", members: "4,864", sc: "16,100" },
          { week: "May 19–25",    members: "4,751", sc: "14,800" },
          { week: "May 12–18",    members: "4,612", sc: "13,500" },
        ].map(h => (
          <div key={h.week} style={{ padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{h.week}</div>
            <div style={{ display: "flex", gap: 20 }}>
              <div><div style={{ fontSize: 11, color: subtle }}>Members</div><div style={{ fontSize: 15, fontWeight: 700, color: "#A78BFA" }}>{h.members}</div></div>
              <div><div style={{ fontSize: 11, color: subtle }}>SC issued</div><div style={{ fontSize: 15, fontWeight: 700, color: COLOR }}>{h.sc}</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
