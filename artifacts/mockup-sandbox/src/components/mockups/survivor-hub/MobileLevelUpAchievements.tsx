// design-sync
import {
  Home, BookOpen, TrendingUp, Users, Trophy,
  CheckCircle, Zap, Lock, Award,
} from "lucide-react";

const green   = "#10B981";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const muted   = "#4B5563";
const text    = "#E2E8F0";
const subtle  = "#94A3B8";

const trackColors: Record<string, string> = {
  Tech: "#3B82F6", Finance: "#F59E0B", Wellness: "#14B8A6", "Life Skills": "#A855F7", Platform: "#E91E8C",
};
const rarityColors: Record<string, string> = {
  Common: subtle, Uncommon: "#3B82F6", Rare: "#A855F7",
};

const EARNED = [
  { name: "First Enrollment",     track: "Platform", emoji: "🎯", sc: 10,  rarity: "Common"   },
  { name: "Milestone Crusher",    track: "Tech",     emoji: "⚡", sc: 25,  rarity: "Uncommon" },
  { name: "Budget Master",        track: "Finance",  emoji: "💰", sc: 30,  rarity: "Uncommon" },
  { name: "Full Cohort Complete", track: "Finance",  emoji: "🏆", sc: 50,  rarity: "Rare"     },
  { name: "5-Day Streak",         track: "Platform", emoji: "🔥", sc: 15,  rarity: "Common"   },
  { name: "Peer Encourager",      track: "Platform", emoji: "🤝", sc: 20,  rarity: "Common"   },
  { name: "Skills Mapper",        track: "Tech",     emoji: "🗺️", sc: 35,  rarity: "Uncommon" },
];

const IN_PROGRESS = [
  { name: "Web Dev Graduate",  track: "Tech",       emoji: "💻", sc: 60, progress: 2, total: 5  },
  { name: "30-Day Streak",     track: "Platform",   emoji: "🔥", sc: 40, progress: 6, total: 30 },
  { name: "Mentor Magnet",     track: "Life Skills",emoji: "🌱", sc: 45, progress: 1, total: 3  },
];

const LOCKED = [
  { name: "All-Track Scholar", track: "Platform", emoji: "🎓", sc: 100 },
  { name: "Trainer's Choice",  track: "Platform", emoji: "⭐", sc: 75  },
];

const NAV = [
  { Icon: Home, label: "Home", key: "home" },
  { Icon: BookOpen, label: "Browse", key: "browse" },
  { Icon: TrendingUp, label: "Progress", key: "progress" },
  { Icon: Users, label: "Trainers", key: "trainers" },
  { Icon: Trophy, label: "Awards", key: "awards", active: true },
];

export function MobileLevelUpAchievements() {
  const totalSC = EARNED.reduce((s, a) => s + a.sc, 0);

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
            <Trophy size={13} color="#000" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: text }}>Achievements</span>
          <span style={{ background: `${green}18`, color: green, fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{EARNED.length}</span>
        </div>
        <div style={{ fontSize: 12, color: subtle }}>{totalSC} SC earned from badges</div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 8, padding: "12px 14px", flexShrink: 0 }}>
        {[
          { label: "Earned",      value: `${EARNED.length}`,      color: "#F59E0B" },
          { label: "In Progress", value: `${IN_PROGRESS.length}`, color: "#3B82F6" },
          { label: "SC Gained",   value: `${totalSC}`,            color: green     },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "10px 8px", border: `1px solid ${border}`, textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color }}>{value}</div>
            <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 14px 10px" }}>

        {/* Earned */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <CheckCircle size={13} color={green} />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Earned</span>
            <span style={{ fontSize: 12, color: subtle }}>— {EARNED.length} badges</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {EARNED.map((badge) => {
              const tc = trackColors[badge.track] || green;
              return (
                <div key={badge.name} style={{ background: surface, borderRadius: 10, padding: "12px 8px", border: `1px solid ${border}`, textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{badge.emoji}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: text, marginBottom: 4, lineHeight: 1.3 }}>{badge.name}</div>
                  <div style={{ fontSize: 9, color: tc, background: `${tc}15`, padding: "1px 5px", borderRadius: 20, display: "inline-block", marginBottom: 4 }}>{badge.track}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: green }}>+{badge.sc} SC</div>
                  <div style={{ fontSize: 9, color: rarityColors[badge.rarity] || subtle, marginTop: 2 }}>{badge.rarity}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* In Progress */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Zap size={13} color="#3B82F6" />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>In Progress</span>
          </div>
          {IN_PROGRESS.map((badge) => {
            const pct = Math.round((badge.progress / badge.total) * 100);
            const tc = trackColors[badge.track] || green;
            return (
              <div key={badge.name} style={{ background: surface, borderRadius: 10, padding: "12px 14px", border: `1px solid ${border}`, marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{badge.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: text }}>{badge.name}</span>
                    <span style={{ fontSize: 9, color: tc, background: `${tc}15`, padding: "1px 5px", borderRadius: 20 }}>{badge.track}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ flex: 1, height: 5, background: border, borderRadius: 99 }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: "#3B82F6", borderRadius: 99 }} />
                    </div>
                    <span style={{ fontSize: 11, color: subtle, flexShrink: 0 }}>{badge.progress}/{badge.total}</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#3B82F6", flexShrink: 0 }}>+{badge.sc} SC</div>
              </div>
            );
          })}
        </div>

        {/* Locked */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Lock size={13} color={muted} />
            <span style={{ fontSize: 13, fontWeight: 600, color: subtle }}>Locked</span>
          </div>
          <div style={{ display: "flex", gap: 8, opacity: 0.5 }}>
            {LOCKED.map((badge) => (
              <div key={badge.name} style={{ flex: 1, background: surface, borderRadius: 10, padding: "12px 10px", border: `1px solid ${border}`, textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{badge.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: subtle, marginBottom: 4 }}>{badge.name}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: subtle }}>+{badge.sc} SC</div>
              </div>
            ))}
          </div>
        </div>
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
