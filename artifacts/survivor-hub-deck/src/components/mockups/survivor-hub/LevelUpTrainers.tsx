// design-sync
import {
  Home, BookOpen, TrendingUp, Users, Trophy, Coins,
  Target, Star, MessageSquare, ChevronRight, CheckCircle,
  Plus, Clock, Award,
} from "lucide-react";

const green   = "#10B981";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const muted   = "#4B5563";
const text    = "#E2E8F0";
const subtle  = "#94A3B8";

const trackColors: Record<string, string> = {
  Tech: "#3B82F6", Finance: "#F59E0B", Wellness: "#14B8A6", "Life Skills": "#A855F7",
};

const TRAINERS = [
  {
    name: "Maya R.", track: "Tech", handle: "@maya-r", initials: "MR",
    cohort: "Web Development Fundamentals", cohortStatus: "active",
    rating: 4.9, totalLearners: 23, milestonesValidated: 87,
    creditsReleased: 2040, joinedDays: 180,
  },
  {
    name: "Jordan T.", track: "Finance", handle: "@jordan-t", initials: "JT",
    cohort: "Financial Literacy & Budgeting", cohortStatus: "completed",
    rating: 4.7, totalLearners: 31, milestonesValidated: 112,
    creditsReleased: 2800, joinedDays: 240,
  },
  {
    name: "Denise K.", track: "Tech", handle: "@denise-k", initials: "DK",
    cohort: "Freelance Business Launch", cohortStatus: "open",
    rating: 4.8, totalLearners: 18, milestonesValidated: 63,
    creditsReleased: 1890, joinedDays: 120,
  },
  {
    name: "Dr. Priya L.", track: "Wellness", handle: "@priya-l", initials: "PL",
    cohort: "Mental Wellness for Survivors", cohortStatus: "open",
    rating: 5.0, totalLearners: 12, milestonesValidated: 41,
    creditsReleased: 820, joinedDays: 90,
  },
];

const ACTIVITY = [
  { trainer: "Maya R.", event: "Validated milestone: Build responsive portfolio page", time: "2h ago" },
  { trainer: "Jordan T.", event: "Released 25 SC — cohort completed", time: "3 days ago" },
  { trainer: "Denise K.", event: "Posted new milestone: Draft your first freelance contract", time: "5 days ago" },
];

const navItems = [
  { Icon: Home, label: "Dashboard", active: false },
  { Icon: BookOpen, label: "Browse Cohorts", active: false },
  { Icon: TrendingUp, label: "My Progress", active: false },
  { Icon: Users, label: "My Trainers", active: true },
  { Icon: Trophy, label: "Achievements", active: false },
  { Icon: Coins, label: "Credits Wallet", active: false },
];

const trainerTools = [
  { Icon: Plus, label: "Create Cohort" },
  { Icon: CheckCircle, label: "Validate Milestones" },
];

const STATS = [
  { label: "Trainers Worked With", value: "4", Icon: Users, color: green },
  { label: "Cohorts Completed", value: "2", Icon: Trophy, color: "#F59E0B" },
  { label: "Avg Trainer Rating", value: "4.9", Icon: Star, color: "#A855F7" },
  { label: "SC from Trainers", value: "420 SC", Icon: Coins, color: "#3B82F6" },
];

export function LevelUpTrainers() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Sidebar */}
      <div style={{ width: 220, background: surface, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 16px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Target size={15} color="#000" />
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: text }}>LevelUp</span>
          </div>
          <div style={{ fontSize: 11, color: subtle }}>Training Cohort Marketplace</div>
        </div>
        <nav style={{ padding: "12px 8px", flex: 1 }}>
          {navItems.map(({ Icon, label, active }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: active ? `${green}18` : "transparent", color: active ? green : subtle, fontSize: 13, fontWeight: active ? 600 : 400, borderLeft: active ? `3px solid ${green}` : "3px solid transparent" }}>
              <Icon size={15} />{label}
            </div>
          ))}
          <div style={{ marginTop: 24, padding: "0 10px 8px", fontSize: 11, color: muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>Trainer Tools</div>
          {trainerTools.map(({ Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", color: subtle, fontSize: 13 }}>
              <Icon size={15} />{label}
            </div>
          ))}
        </nav>
        <div style={{ margin: "0 12px 16px", padding: "12px", background: `${green}10`, borderRadius: 10, border: `1px solid ${green}30` }}>
          <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>My Credit Balance</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: green }}>148 SC</div>
          <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>16 SC in escrow</div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: text }}>My Trainers</h1>
              <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>Everyone who has guided your growth on the platform</div>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: 6, background: border, color: subtle, border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <BookOpen size={14} /> Browse Cohorts
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            {STATS.map(({ label, value, Icon, color }) => (
              <div key={label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <Icon size={14} color={color} />
                  <span style={{ fontSize: 12, color: subtle }}>{label}</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Trainer cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {TRAINERS.map((trainer) => {
              const tc = trackColors[trainer.track] || green;
              const statusLabel = trainer.cohortStatus === "active" ? "Active" : trainer.cohortStatus === "completed" ? "Completed" : "Open";
              const statusColor = trainer.cohortStatus === "active" ? "#3B82F6" : trainer.cohortStatus === "completed" ? green : "#F59E0B";
              return (
                <div key={trainer.name} style={{ background: surface, borderRadius: 12, padding: "20px", border: `1px solid ${border}` }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${tc}18`, border: `1.5px solid ${tc}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: tc, flexShrink: 0 }}>
                      {trainer.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: text }}>{trainer.name}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, color: tc, background: `${tc}15`, padding: "2px 7px", borderRadius: 20 }}>{trainer.track}</span>
                      </div>
                      <div style={{ fontSize: 12, color: subtle }}>{trainer.handle}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Star size={13} color="#F59E0B" fill="#F59E0B" />
                      <span style={{ fontSize: 13, fontWeight: 600, color: text }}>{trainer.rating}</span>
                    </div>
                  </div>

                  <div style={{ padding: "10px 12px", background: bg, borderRadius: 8, border: `1px solid ${border}`, marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: subtle }}>Cohort</span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: statusColor, background: `${statusColor}15`, padding: "1px 7px", borderRadius: 20 }}>{statusLabel}</span>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: text, lineHeight: 1.4 }}>{trainer.cohort}</div>
                  </div>

                  <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                    {[
                      { label: "Learners", value: trainer.totalLearners },
                      { label: "Milestones", value: trainer.milestonesValidated },
                      { label: "SC Released", value: `${trainer.creditsReleased.toLocaleString()}` },
                    ].map(({ label, value }) => (
                      <div key={label} style={{ flex: 1, textAlign: "center" }}>
                        <div style={{ fontSize: 16, fontWeight: 700, color: text }}>{value}</div>
                        <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, background: `${green}14`, color: green, border: `1px solid ${green}30`, borderRadius: 7, padding: "7px 0", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                      <MessageSquare size={12} /> Message
                    </button>
                    <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, background: border, color: subtle, border: "none", borderRadius: 7, padding: "7px 0", fontSize: 12, cursor: "pointer" }}>
                      View Profile <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right panel */}
        <div style={{ width: 280, background: surface, borderLeft: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "20px 16px 14px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
            <Clock size={14} color={green} />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Recent Activity</span>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
            {ACTIVITY.map((a, i) => (
              <div key={i} style={{ padding: "12px", background: bg, borderRadius: 8, border: `1px solid ${border}`, marginBottom: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: green, marginBottom: 4 }}>{a.trainer}</div>
                <div style={{ fontSize: 12, color: text, lineHeight: 1.5, marginBottom: 6 }}>{a.event}</div>
                <div style={{ fontSize: 11, color: muted }}>{a.time}</div>
              </div>
            ))}

            <div style={{ marginTop: 8, padding: "14px", background: `${green}08`, borderRadius: 10, border: `1px solid ${green}20` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: green, marginBottom: 10 }}>
                <Award size={13} /> Trainer Spotlight
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${trackColors["Wellness"]}18`, border: `1px solid ${trackColors["Wellness"]}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: trackColors["Wellness"] }}>PL</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text }}>Dr. Priya L.</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} color="#F59E0B" fill="#F59E0B" />)}
                    <span style={{ fontSize: 11, color: subtle, marginLeft: 4 }}>5.0</span>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>Highest-rated trainer this month. Specializes in trauma-informed wellness cohorts.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
