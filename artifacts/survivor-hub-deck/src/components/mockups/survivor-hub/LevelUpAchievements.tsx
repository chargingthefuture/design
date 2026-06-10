// design-sync
import {
  Home, BookOpen, TrendingUp, Users, Trophy, Coins,
  Target, Star, Lock, CheckCircle, Zap, Award,
} from "lucide-react";

const green   = "#10B981";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const muted   = "#4B5563";
const text    = "#E2E8F0";
const subtle  = "#94A3B8";

const trackColors: Record<string, string> = {
  Tech: "#3B82F6", Finance: "#F59E0B", Wellness: "#14B8A6", "Life Skills": "#A855F7", Platform: "#E91E8C",
};

const EARNED = [
  { name: "First Enrollment",     track: "Platform", emoji: "🎯", sc: 10,  rarity: "Common",    earnedDate: "Jan 14" },
  { name: "Milestone Crusher",    track: "Tech",     emoji: "⚡", sc: 25,  rarity: "Uncommon",  earnedDate: "Feb 2"  },
  { name: "Budget Master",        track: "Finance",  emoji: "💰", sc: 30,  rarity: "Uncommon",  earnedDate: "Feb 28" },
  { name: "Full Cohort Complete", track: "Finance",  emoji: "🏆", sc: 50,  rarity: "Rare",      earnedDate: "Mar 1"  },
  { name: "5-Day Streak",         track: "Platform", emoji: "🔥", sc: 15,  rarity: "Common",    earnedDate: "Mar 6"  },
  { name: "Peer Encourager",      track: "Platform", emoji: "🤝", sc: 20,  rarity: "Common",    earnedDate: "Mar 10" },
  { name: "Skills Mapper",        track: "Tech",     emoji: "🗺️", sc: 35,  rarity: "Uncommon",  earnedDate: "Mar 19" },
];

const IN_PROGRESS = [
  { name: "Web Dev Graduate",  track: "Tech",       emoji: "💻", sc: 60, progress: 2, total: 5,  desc: "Complete all 5 milestones in a Tech cohort" },
  { name: "30-Day Streak",     track: "Platform",   emoji: "🔥", sc: 40, progress: 6, total: 30, desc: "Log in and complete an activity for 30 days" },
  { name: "Mentor Magnet",     track: "Life Skills",emoji: "🌱", sc: 45, progress: 1, total: 3,  desc: "Complete cohorts with 3 different trainers" },
  { name: "Economy Builder",   track: "Finance",    emoji: "🏗️", sc: 55, progress: 68, total: 100, desc: "Earn a total of 100 ServiceCredits via cohorts" },
];

const LOCKED = [
  { name: "All-Track Scholar",  track: "Platform",   emoji: "🎓", sc: 100, desc: "Complete a cohort in every track" },
  { name: "Trainer's Choice",   track: "Platform",   emoji: "⭐", sc: 75,  desc: "Receive a 5-star rating from your trainer" },
  { name: "Credit Whale",       track: "Finance",    emoji: "🐋", sc: 80,  desc: "Hold 500+ ServiceCredits simultaneously" },
];

const RECENT = EARNED.slice(-3).reverse();

const STATS = [
  { label: "Badges Earned",      value: `${EARNED.length}`, Icon: Trophy, color: "#F59E0B" },
  { label: "In Progress",        value: `${IN_PROGRESS.length}`, Icon: Zap, color: "#3B82F6" },
  { label: "SC from Achievements",value: `${EARNED.reduce((s, a) => s + a.sc, 0)} SC`, Icon: Coins, color: green },
  { label: "Rarest Badge",       value: "Rare",              Icon: Star,  color: "#A855F7" },
];

const navItems = [
  { Icon: Home, label: "Dashboard", active: false },
  { Icon: BookOpen, label: "Browse Cohorts", active: false },
  { Icon: TrendingUp, label: "My Progress", active: false },
  { Icon: Users, label: "My Trainers", active: false },
  { Icon: Trophy, label: "Achievements", active: true },
  { Icon: Coins, label: "Credits Wallet", active: false },
];

const rarityColors: Record<string, string> = {
  Common: subtle, Uncommon: "#3B82F6", Rare: "#A855F7", Legendary: "#F59E0B",
};

export function LevelUpAchievements() {
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
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: text }}>Achievements</h1>
                <span style={{ background: `${green}18`, color: green, fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 20, border: `1px solid ${green}30` }}>{EARNED.length} earned</span>
              </div>
              <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>Milestones and badges you've unlocked across all cohorts</div>
            </div>
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

          {/* Earned badges */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <CheckCircle size={15} color={green} />
              <span style={{ fontSize: 15, fontWeight: 600, color: text }}>Earned</span>
              <span style={{ fontSize: 12, color: subtle }}>— {EARNED.length} badges</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {EARNED.map((badge) => {
                const tc = trackColors[badge.track] || green;
                return (
                  <div key={badge.name} style={{ background: surface, borderRadius: 12, padding: "16px 14px", border: `1px solid ${border}`, textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{badge.emoji}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 4, lineHeight: 1.3 }}>{badge.name}</div>
                    <div style={{ display: "inline-block", fontSize: 10, color: tc, background: `${tc}15`, padding: "2px 7px", borderRadius: 20, marginBottom: 8 }}>{badge.track}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 11, color: green, fontWeight: 600 }}>+{badge.sc} SC</span>
                      <span style={{ fontSize: 10, color: rarityColors[badge.rarity] || subtle }}>{badge.rarity}</span>
                    </div>
                    <div style={{ fontSize: 10, color: muted, marginTop: 6 }}>{badge.earnedDate}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* In progress */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Zap size={15} color="#3B82F6" />
              <span style={{ fontSize: 15, fontWeight: 600, color: text }}>In Progress</span>
              <span style={{ fontSize: 12, color: subtle }}>— {IN_PROGRESS.length} badges</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {IN_PROGRESS.map((badge) => {
                const tc = trackColors[badge.track] || green;
                const pct = Math.round((badge.progress / badge.total) * 100);
                return (
                  <div key={badge.name} style={{ background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ fontSize: 26, flexShrink: 0 }}>{badge.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: text }}>{badge.name}</span>
                        <span style={{ fontSize: 10, color: tc, background: `${tc}15`, padding: "1px 7px", borderRadius: 20 }}>{badge.track}</span>
                      </div>
                      <div style={{ fontSize: 12, color: subtle, marginBottom: 8 }}>{badge.desc}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ flex: 1, height: 6, background: border, borderRadius: 99 }}>
                          <div style={{ width: `${pct}%`, height: "100%", background: "#3B82F6", borderRadius: 99 }} />
                        </div>
                        <span style={{ fontSize: 11, color: subtle, flexShrink: 0 }}>{badge.progress}/{badge.total}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#3B82F6" }}>+{badge.sc} SC</div>
                      <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>on unlock</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Locked */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Lock size={15} color={muted} />
              <span style={{ fontSize: 15, fontWeight: 600, color: subtle }}>Locked</span>
              <span style={{ fontSize: 12, color: muted }}>— {LOCKED.length} badges</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, opacity: 0.5 }}>
              {LOCKED.map((badge) => {
                const tc = trackColors[badge.track] || green;
                return (
                  <div key={badge.name} style={{ background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ fontSize: 24, flexShrink: 0 }}>{badge.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: subtle, marginBottom: 3 }}>{badge.name}</div>
                      <div style={{ fontSize: 11, color: muted, marginBottom: 6 }}>{badge.desc}</div>
                      <span style={{ fontSize: 11, color: subtle, fontWeight: 600 }}>+{badge.sc} SC</span>
                    </div>
                    <Lock size={14} color={muted} style={{ flexShrink: 0 }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ width: 260, background: surface, borderLeft: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "20px 16px 14px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
            <Award size={14} color={green} />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Recent Unlocks</span>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
            {RECENT.map((badge) => {
              const tc = trackColors[badge.track] || green;
              return (
                <div key={badge.name} style={{ padding: "12px", background: bg, borderRadius: 8, border: `1px solid ${border}`, marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{badge.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{badge.name}</div>
                    <div style={{ fontSize: 11, color: tc }}>{badge.track}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: green }}>+{badge.sc}</div>
                </div>
              );
            })}

            <div style={{ marginTop: 16, padding: "14px", background: `${green}08`, borderRadius: 10, border: `1px solid ${green}20` }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: green, marginBottom: 8 }}>Track Progress</div>
              {Object.entries(trackColors).slice(0, 4).map(([track, color]) => {
                const earnedInTrack = EARNED.filter(b => b.track === track).length;
                const inProgressInTrack = IN_PROGRESS.filter(b => b.track === track).length;
                return (
                  <div key={track} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: subtle, marginBottom: 4 }}>
                      <span>{track}</span>
                      <span style={{ color }}>{earnedInTrack} earned, {inProgressInTrack} active</span>
                    </div>
                    <div style={{ height: 4, background: border, borderRadius: 99 }}>
                      <div style={{ width: `${Math.min(earnedInTrack * 25, 100)}%`, height: "100%", background: color, borderRadius: 99 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
