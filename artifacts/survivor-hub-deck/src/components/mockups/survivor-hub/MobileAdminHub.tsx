// design-sync
// STATE: Admin Hub Overview (mobile) — owner command centre, all plugins at a glance
import { useState } from "react";
import {
  LayoutDashboard, Users, BarChart2, ShieldCheck, Settings,
  AlertTriangle, TrendingUp, CheckCircle, Clock, ChevronRight,
} from "lucide-react";

const ACCENT = "#6366F1";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const STATS = [
  { label: "Members",     value: "4,912", delta: "+48",   color: "#A78BFA" },
  { label: "Active today",value: "1,204", delta: "+112",  color: "#22C55E" },
  { label: "Open flags",  value: "7",     delta: "-2",    color: "#F59E0B" },
  { label: "AI queue",    value: "23",    delta: "+23",   color: "#0EA5E9" },
];

const PLUGINS = [
  { label: "Foundation",       color: "#22C55E", issues: 2 },
  { label: "SkillsHunt",       color: "#A78BFA", issues: 0 },
  { label: "SocketRelay",      color: "#FB923C", issues: 1 },
  { label: "LightHouse",       color: "#06B6D4", issues: 3 },
  { label: "ServiceCredits",   color: "#F59E0B", issues: 0 },
  { label: "LevelUp",          color: "#10B981", issues: 0 },
  { label: "Workforce",        color: "#3B82F6", issues: 0 },
  { label: "TrustTransport",   color: "#F43F5E", issues: 1 },
  { label: "PeerProgramming",  color: "#8B5CF6", issues: 0 },
  { label: "WeeklyPerformance",color: "#F59E0B", issues: 0 },
  { label: "WhatWorks",        color: "#84CC16", issues: 0 },
  { label: "Unlock",           color: "#F43F5E", issues: 0 },
];

const ALERTS = [
  { msg: "LightHouse: 3 unreviewed housing requests",  time: "5 min ago",  urgent: true  },
  { msg: "Foundation: 2 gigs flagged for review",       time: "22 min ago", urgent: true  },
  { msg: "SocketRelay: relay #847 idle >48 h",          time: "1 hr ago",   urgent: false },
  { msg: "AI Review: 23 answers pending approval",      time: "2 hr ago",   urgent: false },
];

const NAV = [
  { icon: LayoutDashboard, label: "Overview",  key: "overview"  },
  { icon: Users,           label: "Members",   key: "members"   },
  { icon: BarChart2,       label: "Stats",     key: "stats"     },
  { icon: ShieldCheck,     label: "Trust",     key: "trust"     },
  { icon: Settings,        label: "Settings",  key: "settings"  },
];

export function MobileAdminHub() {
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "#0D0F14", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${ACCENT}20`, border: `1px solid ${ACCENT}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutDashboard size={16} color={ACCENT} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Admin Hub</div>
            <div style={{ fontSize: 11, color: subtle }}>Owner view · all plugins</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, fontSize: 11, color: ACCENT, fontWeight: 700 }}>ADMIN</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>{s.delta} this week</div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: subtle, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Needs attention</div>
          {ALERTS.map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", borderRadius: 10, background: a.urgent ? "rgba(245,158,11,0.07)" : surface, border: `1px solid ${a.urgent ? "rgba(245,158,11,0.25)" : border}`, marginBottom: 8 }}>
              <AlertTriangle size={14} color={a.urgent ? "#F59E0B" : subtle} style={{ flexShrink: 0, marginTop: 1 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: a.urgent ? text : "#D1D5DB", lineHeight: 1.5 }}>{a.msg}</div>
                <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Plugin grid */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: subtle, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Plugins</div>
          {PLUGINS.map(p => (
            <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, background: surface, border: `1px solid ${border}`, marginBottom: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{p.label}</div>
              {p.issues > 0
                ? <span style={{ padding: "2px 7px", borderRadius: 6, background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>{p.issues} issue{p.issues > 1 ? "s" : ""}</span>
                : <CheckCircle size={14} color="#22C55E" />}
              <ChevronRight size={14} color={subtle} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px", flexShrink: 0 }}>
        {NAV.map(({ icon: Icon, label, key }) => (
          <button key={key} onClick={() => setActiveNav(key)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, padding: "8px 4px", background: "transparent", border: "none", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: activeNav === key ? `${ACCENT}20` : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={20} style={{ color: activeNav === key ? ACCENT : subtle }} />
            </div>
            <span style={{ fontSize: 10, color: activeNav === key ? ACCENT : "#4B5563", fontWeight: activeNav === key ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
