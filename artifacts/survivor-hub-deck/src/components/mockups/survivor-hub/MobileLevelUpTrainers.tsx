// design-sync
import {
  Home, BookOpen, TrendingUp, Users, Trophy,
  Star, MessageSquare, ChevronRight, Clock, Award,
} from "lucide-react";

const green   = "#10B981";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const muted   = "#4B5563";
const text    = "#E2E8F0";
const subtle  = "#94A3B8";

const trackColors: Record<string, string> = {
  Tech: "#3B82F6", Finance: "#F59E0B", Wellness: "#14B8A6", "Life Skills": "#A855F7",
};

const TRAINERS = [
  { name: "Maya R.", track: "Tech", initials: "MR", cohort: "Web Dev Fundamentals", cohortStatus: "active", rating: 4.9, milestones: 87 },
  { name: "Jordan T.", track: "Finance", initials: "JT", cohort: "Financial Literacy", cohortStatus: "completed", rating: 4.7, milestones: 112 },
  { name: "Denise K.", track: "Tech", initials: "DK", cohort: "Freelance Business Launch", cohortStatus: "open", rating: 4.8, milestones: 63 },
  { name: "Dr. Priya L.", track: "Wellness", initials: "PL", cohort: "Mental Wellness", cohortStatus: "open", rating: 5.0, milestones: 41 },
];

const ACTIVITY = [
  { trainer: "Maya R.", event: "Validated milestone: Build responsive portfolio", time: "2h ago" },
  { trainer: "Jordan T.", event: "Released 25 SC — cohort completed", time: "3 days ago" },
];

const NAV = [
  { Icon: Home, label: "Home", key: "home" },
  { Icon: BookOpen, label: "Browse", key: "browse" },
  { Icon: TrendingUp, label: "Progress", key: "progress" },
  { Icon: Users, label: "Trainers", key: "trainers", active: true },
  { Icon: Trophy, label: "Awards", key: "awards" },
];

export function MobileLevelUpTrainers() {
  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 16px 12px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={13} color="#000" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: text }}>My Trainers</span>
        </div>
        <div style={{ fontSize: 12, color: subtle }}>4 trainers across 3 tracks</div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 8, padding: "12px 14px", flexShrink: 0 }}>
        {[
          { label: "Trainers", value: "4", color: green },
          { label: "Completed", value: "2", color: "#F59E0B" },
          { label: "Avg Rating", value: "4.9 ★", color: "#A855F7" },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "10px 8px", border: `1px solid ${border}`, textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color }}>{value}</div>
            <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 14px 10px" }}>

        {/* Recent activity */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Clock size={13} color={green} />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Recent Activity</span>
          </div>
          {ACTIVITY.map((a, i) => (
            <div key={i} style={{ padding: "10px 12px", background: surface, borderRadius: 8, border: `1px solid ${border}`, marginBottom: 6 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: green, marginBottom: 3 }}>{a.trainer}</div>
              <div style={{ fontSize: 12, color: text, lineHeight: 1.4, marginBottom: 4 }}>{a.event}</div>
              <div style={{ fontSize: 11, color: muted }}>{a.time}</div>
            </div>
          ))}
        </div>

        {/* Trainer cards */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <Award size={13} color={subtle} />
          <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Your Trainers</span>
        </div>
        {TRAINERS.map((trainer) => {
          const tc = trackColors[trainer.track] || green;
          const statusColor = trainer.cohortStatus === "active" ? "#3B82F6" : trainer.cohortStatus === "completed" ? green : "#F59E0B";
          const statusLabel = trainer.cohortStatus === "active" ? "Active" : trainer.cohortStatus === "completed" ? "Completed" : "Open";
          return (
            <div key={trainer.name} style={{ background: surface, borderRadius: 12, padding: "14px", border: `1px solid ${border}`, marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${tc}18`, border: `1.5px solid ${tc}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: tc, flexShrink: 0 }}>
                  {trainer.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: text }}>{trainer.name}</span>
                    <span style={{ fontSize: 10, color: tc, background: `${tc}15`, padding: "1px 6px", borderRadius: 20 }}>{trainer.track}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Star size={11} color="#F59E0B" fill="#F59E0B" />
                    <span style={{ fontSize: 12, color: subtle }}>{trainer.rating}</span>
                    <span style={{ fontSize: 11, color: muted }}>· {trainer.milestones} milestones validated</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 10px", background: bg, borderRadius: 7, border: `1px solid ${border}`, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, color: subtle }}>{trainer.cohort}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: statusColor, background: `${statusColor}15`, padding: "1px 6px", borderRadius: 20, flexShrink: 0, marginLeft: 8 }}>{statusLabel}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, background: `${green}14`, color: green, border: `1px solid ${green}30`, borderRadius: 7, padding: "8px 0", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  <MessageSquare size={12} /> Message
                </button>
                <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, background: border, color: subtle, border: "none", borderRadius: 7, padding: "8px 0", fontSize: 12, cursor: "pointer" }}>
                  Profile <ChevronRight size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {NAV.map(({ Icon, label, key, active }) => (
          <button key={key} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: active ? green : muted }} />
            <span style={{ fontSize: 9, fontWeight: active ? 700 : 400, color: active ? green : muted }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
