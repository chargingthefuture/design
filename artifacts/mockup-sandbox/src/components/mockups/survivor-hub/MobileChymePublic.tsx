import {
  Radio, Mic, Users, Lock, LogIn, UserPlus,
  Clock, Hash, Heart, Bell, ShieldCheck, Search,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#22C55E";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const LIVE_ROOMS = [
  { id: 1, title: "Survivor Stories: Rebuilding After Trafficking", hosts: "Amara O. & James T.", speakers: 4, listeners: 128, live: true, featured: true },
  { id: 2, title: "Service Credits 101 — Earn & Spend", hosts: "Maria G.", speakers: 2, listeners: 67, live: true, featured: false },
  { id: 3, title: "Global Mastermind: Skills Economy", hosts: "David K. & Priya S.", speakers: 6, listeners: 312, live: true, featured: false },
  { id: 4, title: "Housing Safety Q&A — Know Your Rights", hosts: "Lena H.", speakers: 3, listeners: 89, live: true, featured: false },
];

const SPEAKERS = [
  { init: "AO", color: "#22C55E" },
  { init: "JT", color: "#3B82F6" },
  { init: "MG", color: "#EC4899" },
  { init: "DK", color: "#F97316" },
];

export function MobileChymePublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>

      {/* Header */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <Radio size={16} color="#fff" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Chyme</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>128 live · 48K listening</div>
        </div>
        <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontWeight: 600, fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
          <LogIn size={11} /> Sign In
        </button>
        <button style={{ padding: "5px 10px", borderRadius: 6, background: "#fff", border: "none", color: accent, fontWeight: 700, fontSize: 11 }}>
          Join
        </button>
      </div>

      {/* Search */}
      <div style={{ padding: "10px 12px", borderBottom: `1px solid ${border}`, background: surface, flexShrink: 0 }}>
        <div style={{ position: "relative" }}>
          <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: subtle }} />
          <input placeholder="Search rooms…" style={{ width: "100%", padding: "8px 10px 8px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8, overflowX: "auto" }}>
          {["All", "Healing", "Economy", "Housing", "Legal", "Skills"].map(t => (
            <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 12, border: `1px solid ${t === "All" ? COLOR + "50" : border}`, color: t === "All" ? COLOR : subtle, background: t === "All" ? `${COLOR}10` : "transparent", whiteSpace: "nowrap", cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Featured room */}
      <div style={{ margin: "10px 12px 0", borderRadius: 14, border: `1px solid ${COLOR}30`, background: `${COLOR}06`, padding: "14px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: `${COLOR}15`, border: `1px solid ${COLOR}30`, borderRadius: 20, padding: "2px 8px" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: COLOR }} />
            <span style={{ fontSize: 10, color: COLOR, fontWeight: 700 }}>LIVE · FEATURED</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 3, marginLeft: "auto" }}>
            <Users size={11} color={subtle} /><span style={{ fontSize: 11, color: subtle }}>128</span>
          </div>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4, marginBottom: 6 }}>{LIVE_ROOMS[0].title}</div>
        <div style={{ fontSize: 12, color: subtle, marginBottom: 10 }}>by {LIVE_ROOMS[0].hosts}</div>
        {/* Speakers row */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {SPEAKERS.map(({ init, color }) => (
            <div key={init} style={{ textAlign: "center" }}>
              <div style={{ position: "relative", width: 40, height: 40 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${color}20`, border: `1px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color }}>{init}</div>
                <div style={{ position: "absolute", bottom: -2, right: -2, width: 16, height: 16, borderRadius: "50%", background: COLOR, border: "2px solid " + bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mic size={8} color="#fff" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Auth gate */}
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, padding: "9px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <UserPlus size={13} /> Join Free to Listen
          </button>
          <button style={{ padding: "9px 14px", borderRadius: 9, background: surface, border: `1px solid ${border}`, color: subtle, fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
            <LogIn size={13} /> Sign In
          </button>
        </div>
      </div>

      {/* Room list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>More Live Rooms</div>
        {LIVE_ROOMS.slice(1).map(({ id, title, hosts, speakers, listeners }) => (
          <div key={id} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: COLOR }} />
                <span style={{ fontSize: 10, color: COLOR, fontWeight: 700 }}>LIVE</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}><Mic size={10} color={subtle} /><span style={{ fontSize: 10, color: subtle }}>{speakers}</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}><Users size={10} color={subtle} /><span style={{ fontSize: 10, color: subtle }}>{listeners}</span></div>
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4, marginBottom: 4 }}>{title}</div>
            <div style={{ fontSize: 11, color: subtle }}>by {hosts}</div>
          </div>
        ))}

        {/* Upcoming */}
        <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6 }}>Upcoming</div>
        {[
          { title: "GentlePulse: Healing Through Breathwork", when: "Today · 7 PM UTC" },
          { title: "Tech Skills: How I Got My First Dev Job", when: "Tomorrow · 6 PM" },
        ].map(({ title, when }) => (
          <div key={title} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "10px 12px", opacity: 0.65 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
              <Clock size={10} color={subtle} /><span style={{ fontSize: 10, color: subtle }}>{when}</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.4 }}>{title}</div>
          </div>
        ))}
      </div>

      {/* Locked bottom bar */}
      <div style={{ padding: "10px 12px", borderTop: `1px solid ${border}`, background: surface, display: "flex", gap: 8, flexShrink: 0 }}>
        <button style={{ flex: 1, padding: "10px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "not-allowed" }}>
          <Lock size={12} /> Start a Room
        </button>
        <button style={{ flex: 1, padding: "10px", borderRadius: 9, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <UserPlus size={13} /> Join Free →
        </button>
      </div>
    </div>
  );
}
