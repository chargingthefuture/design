import {
  Home, Target, MessageSquare, Coins, User,
  TrendingUp, CheckCircle, Clock, Trophy, Search, Battery, Wifi, Signal,
} from "lucide-react";

export default function MobileLevelUp() {
  const green = "#22C55E";
  const bg = "#0F1117";
  const surface = "#161B27";
  const border = "#1E2A3A";
  const muted = "#4B5563";
  const text = "#E2E8F0";
  const subtle = "#94A3B8";

  const trackColors: Record<string, string> = {
    Tech: "#3B82F6",
    Finance: "#F59E0B",
    Wellness: "#14B8A6",
    "Life Skills": "#A855F7",
  };

  const cohorts = [
    {
      title: "Web Development Fundamentals",
      track: "Tech",
      trainer: "Maya R.",
      seats: 8,
      totalSeats: 12,
      credits: 40,
      milestones: 5,
      status: "open",
      tags: ["HTML", "CSS", "React"],
    },
    {
      title: "Financial Literacy & Budgeting",
      track: "Finance",
      trainer: "Jordan T.",
      seats: 3,
      totalSeats: 10,
      credits: 25,
      milestones: 4,
      status: "open",
      tags: ["Budgeting", "Credit"],
    },
    {
      title: "Mental Wellness for Survivors",
      track: "Wellness",
      trainer: "Dr. Priya L.",
      seats: 6,
      totalSeats: 12,
      credits: 20,
      milestones: 4,
      status: "open",
      tags: ["CBT", "Self-care"],
    },
    {
      title: "Freelance Business Launch",
      track: "Tech",
      trainer: "Denise K.",
      seats: 5,
      totalSeats: 10,
      credits: 50,
      milestones: 7,
      status: "open",
      tags: ["Freelance", "Contracts"],
    },
  ];

  const myEnrollment = {
    title: "Web Development Fundamentals",
    trainer: "Maya R.",
    milestones: 5,
    completed: 2,
    escrow: 16,
    nextMilestone: "Build a responsive portfolio page",
    dueDate: "Apr 2",
  };

  const pct = Math.round((myEnrollment.completed / myEnrollment.milestones) * 100);

  const navItems = [
    { Icon: Home, label: "Home", active: false },
    { Icon: Target, label: "LevelUp", active: true },
    { Icon: MessageSquare, label: "Chat", active: false },
    { Icon: Coins, label: "Credits", active: false },
    { Icon: User, label: "Profile", active: false },
  ];

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px 4px", fontSize: 12, color: subtle }}>
        <span style={{ fontWeight: 600 }}>9:41</span>
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <Signal size={12} color={subtle} />
          <Wifi size={12} color={subtle} />
          <Battery size={12} color={subtle} />
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "10px 20px 14px", borderBottom: `1px solid ${border}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Target size={17} color="#000" />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: text }}>LevelUp</div>
              <div style={{ fontSize: 10, color: subtle }}>Training Cohorts</div>
            </div>
          </div>
          <div style={{ background: `${green}18`, border: `1px solid ${green}40`, borderRadius: 8, padding: "5px 10px" }}>
            <div style={{ fontSize: 10, color: subtle }}>Balance</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: green }}>148 SC</div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", padding: "0 16px", borderBottom: `1px solid ${border}` }}>
        {["Browse", "My Progress", "Validate"].map((tab, i) => (
          <div key={tab} style={{
            flex: 1, textAlign: "center", padding: "10px 0", fontSize: 12,
            fontWeight: i === 0 ? 600 : 400,
            color: i === 0 ? green : subtle,
            borderBottom: i === 0 ? `2px solid ${green}` : "2px solid transparent",
          }}>{tab}</div>
        ))}
      </div>

      {/* Track pills */}
      <div style={{ display: "flex", gap: 8, padding: "12px 16px", overflowX: "auto" }}>
        {["All", "Tech", "Finance", "Wellness", "Life Skills"].map((track, i) => (
          <div key={track} style={{
            flexShrink: 0, padding: "5px 12px", borderRadius: 20,
            background: i === 0 ? green : border,
            color: i === 0 ? "#000" : subtle,
            fontSize: 11, fontWeight: i === 0 ? 600 : 400, cursor: "pointer",
          }}>{track}</div>
        ))}
      </div>

      {/* Active enrollment banner */}
      <div style={{ margin: "0 16px 12px", background: `${green}10`, border: `1px solid ${green}25`, borderRadius: 12, padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: green, fontWeight: 600, marginBottom: 2 }}>
              <TrendingUp size={11} />
              Currently Enrolled
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, lineHeight: 1.3 }}>{myEnrollment.title}</div>
            <div style={{ fontSize: 11, color: subtle }}>with {myEnrollment.trainer}</div>
          </div>
          <span style={{ fontSize: 11, color: "#3B82F6", background: "#3B82F618", padding: "3px 8px", borderRadius: 10 }}>Tech</span>
        </div>
        <div style={{ marginBottom: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: subtle, marginBottom: 4 }}>
            <span>Milestone Progress</span>
            <span>{myEnrollment.completed}/{myEnrollment.milestones}</span>
          </div>
          <div style={{ height: 5, background: border, borderRadius: 99 }}>
            <div style={{ width: `${pct}%`, height: "100%", background: "#3B82F6", borderRadius: 99 }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#F59E0B" }}>
            <Clock size={10} />
            {myEnrollment.escrow} SC in escrow
          </div>
          <span style={{ fontSize: 10, color: subtle }}>Due {myEnrollment.dueDate}</span>
        </div>
      </div>

      {/* Cohort list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 16px 80px" }}>
        <div style={{ fontSize: 11, color: muted, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Available Cohorts</div>

        {cohorts.map((cohort) => {
          const trackColor = trackColors[cohort.track] || green;
          return (
            <div key={cohort.title} style={{
              background: surface, borderRadius: 12, padding: "14px",
              marginBottom: 10, border: `1px solid ${border}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ flex: 1, paddingRight: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, lineHeight: 1.4, marginBottom: 4 }}>{cohort.title}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: subtle }}>
                    <User size={11} />
                    {cohort.trainer} · {cohort.milestones} milestones
                  </div>
                </div>
                <span style={{ flexShrink: 0, fontSize: 10, color: trackColor, background: `${trackColor}18`, padding: "3px 8px", borderRadius: 12, fontWeight: 600 }}>
                  {cohort.track}
                </span>
              </div>

              <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
                {cohort.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 10, color: muted, background: border, padding: "2px 7px", borderRadius: 8 }}>{tag}</span>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: `1px solid ${border}` }}>
                <div style={{ fontSize: 11, color: subtle }}>
                  {cohort.seats}/{cohort.totalSeats} seats open
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: green }}>{cohort.credits} SC</span>
                  <button style={{
                    background: green, color: "#000", border: "none",
                    borderRadius: 7, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer",
                  }}>Enroll</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom nav */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 64, background: surface, borderTop: `1px solid ${border}`,
        display: "flex", alignItems: "center", justifyContent: "space-around",
        paddingBottom: 8,
      }}>
        {navItems.map(({ Icon, label, active }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, cursor: "pointer" }}>
            <Icon size={20} color={active ? green : muted} />
            <span style={{ fontSize: 9, color: active ? green : muted, fontWeight: active ? 600 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
