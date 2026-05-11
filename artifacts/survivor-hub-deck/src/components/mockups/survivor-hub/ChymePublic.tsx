import {
  Radio, Mic, Users, Lock, LogIn, UserPlus, ShieldCheck,
  Globe, Clock, Hash, Heart, Bell, Search, Star,
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
  { id: 1, title: "Survivor Stories: Rebuilding After Trafficking", hosts: ["Amara O.", "James T."], speakers: 4, listeners: 128, tags: ["healing", "testimony"], live: true },
  { id: 2, title: "Service Credits 101 — How to Earn & Spend", hosts: ["Maria G."], speakers: 2, listeners: 67, tags: ["finance", "education"], live: true },
  { id: 3, title: "Global Mastermind: Building Skills Economy", hosts: ["David K.", "Priya S."], speakers: 6, listeners: 312, tags: ["economy", "skills"], live: true },
  { id: 4, title: "Housing Safety Q&A — Know Your Rights", hosts: ["Lena H."], speakers: 3, listeners: 89, tags: ["housing", "legal"], live: true },
];

const UPCOMING = [
  { title: "GentlePulse: Healing Through Breathwork", host: "Dr. Nadia F.", when: "Today · 7 PM UTC" },
  { title: "Tech Skills: How I Got My First Dev Job", host: "Marcus B.", when: "Tomorrow · 6 PM UTC" },
  { title: "SocketRelay Orientation — Giving & Receiving Help", host: "Survivor Hub Team", when: "Fri · 8 PM UTC" },
];

const SPEAKERS_PREVIEW = [
  { init: "AO", color: "#22C55E" },
  { init: "JT", color: "#3B82F6" },
  { init: "MG", color: "#EC4899" },
  { init: "DK", color: "#F97316" },
];

export function ChymePublic() {
  const selectedRoom = LIVE_ROOMS[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Marketing banner */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Radio size={15} color="#fff" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Chyme · 128 live sessions right now · 48,291 listeners globally</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Free to listen · Sign in to speak</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <UserPlus size={13} /> Join Free
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Left sidebar — room list */}
        <aside style={{ width: 320, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "16px 16px 10px", borderBottom: `1px solid ${border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Radio size={16} color={COLOR} />
              <span style={{ fontSize: 15, fontWeight: 700 }}>Chyme</span>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5, background: `${COLOR}15`, border: `1px solid ${COLOR}30`, borderRadius: 20, padding: "3px 10px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} />
                <span style={{ fontSize: 11, color: COLOR, fontWeight: 600 }}>128 LIVE</span>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: subtle }} />
              <input placeholder="Search rooms…" style={{ width: "100%", padding: "8px 10px 8px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
            </div>
          </div>

          <div style={{ padding: "10px 12px 6px", fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Live Now — Public</div>
          <div style={{ flex: 1, overflowY: "auto", padding: "0 8px" }}>
            {LIVE_ROOMS.map(({ id, title, hosts, speakers, listeners, tags }) => (
              <div key={id} style={{ borderRadius: 10, border: `1px solid ${id === 1 ? COLOR + "40" : border}`, padding: "12px", marginBottom: 8, cursor: "pointer", background: id === 1 ? `${COLOR}06` : "transparent" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, lineHeight: 1.4 }}>{title}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLOR }} />
                    <span style={{ fontSize: 11, color: COLOR, fontWeight: 700 }}>LIVE</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: subtle, marginBottom: 6 }}>Hosted by {hosts.join(", ")}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}><Mic size={11} color={subtle} /><span style={{ fontSize: 11, color: subtle }}>{speakers}</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={11} color={subtle} /><span style={{ fontSize: 11, color: subtle }}>{listeners}</span></div>
                  {tags.map(t => <span key={t} style={{ fontSize: 10, background: "rgba(255,255,255,0.04)", color: subtle, borderRadius: 4, padding: "1px 5px" }}>#{t}</span>)}
                </div>
              </div>
            ))}

            <div style={{ padding: "10px 4px 6px", fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Upcoming</div>
            {UPCOMING.map(({ title, host, when }) => (
              <div key={title} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "10px 12px", marginBottom: 6, opacity: 0.7 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 4, lineHeight: 1.4 }}>{title}</div>
                <div style={{ display: "flex", gap: 10 }}>
                  <span style={{ fontSize: 10, color: subtle }}>{host}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 3 }}><Clock size={9} color={subtle} /><span style={{ fontSize: 10, color: subtle }}>{when}</span></div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main — room detail */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Room header */}
          <div style={{ padding: "20px 32px 16px", borderBottom: `1px solid ${border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: `${COLOR}15`, border: `1px solid ${COLOR}30`, borderRadius: 20, padding: "3px 10px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /><span style={{ fontSize: 11, color: COLOR, fontWeight: 700 }}>LIVE</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <Globe size={11} color={subtle} /><span style={{ fontSize: 11, color: subtle }}>Public</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <ShieldCheck size={11} color={accentCyan} /><span style={{ fontSize: 11, color: accentCyan }}>Safe Space ✓</span>
              </div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: text, lineHeight: 1.3 }}>{selectedRoom.title}</div>
            <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>Hosted by {selectedRoom.hosts.join(" & ")} · {selectedRoom.listeners} listening</div>
          </div>

          {/* Speakers (visible publicly) */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Speakers ({selectedRoom.speakers})</div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 32 }}>
              {SPEAKERS_PREVIEW.map(({ init, color }) => (
                <div key={init} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${color}20`, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color }}>{init}</div>
                    <div style={{ position: "absolute", bottom: -2, right: -2, width: 22, height: 22, borderRadius: "50%", background: COLOR, border: "2px solid " + bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Mic size={11} color="#fff" />
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: subtle }}>Speaker</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Listeners · {selectedRoom.listeners}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
              {Array(12).fill(0).map((_, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: `1px solid ${border}` }} />
              ))}
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: `1px dashed ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: subtle }}>+116</div>
            </div>

            {/* Guest listener status — public rooms are open to listen without sign-in */}
            {/* DESIGN NOTE: Do NOT gate listening behind auth. Public rooms stream freely.
                Sign-in is only required to speak, react, raise hand, or start a room. */}
            <div style={{ borderRadius: 12, border: `1px solid ${COLOR}25`, background: `${COLOR}08`, padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Users size={16} color={subtle} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: text }}>You're listening as a guest</div>
                <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>Public rooms are open to all. Sign in to speak, react, or raise your hand.</div>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <button style={{ padding: "7px 16px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                  <LogIn size={12} /> Sign In
                </button>
                <button style={{ padding: "7px 16px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                  <UserPlus size={12} /> Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Bottom controls — listening is open to guests; speaking/participation requires sign-in */}
          <div style={{ padding: "16px 32px", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12 }}>
            {/* Locked: speak, react, save — require auth */}
            {[
              { Icon: Mic, label: "Speak" },
              { Icon: Heart, label: "React" },
              { Icon: Star, label: "Save" },
            ].map(({ Icon, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, border: `1px solid ${border}`, color: subtle, cursor: "not-allowed", opacity: 0.45 }}>
                <Lock size={11} /><Icon size={14} /><span style={{ fontSize: 13 }}>{label}</span>
              </div>
            ))}
            {/* Unlocked: notify — guests can opt-in to reminders */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, border: `1px solid ${COLOR}30`, color: COLOR, cursor: "pointer" }}>
              <Bell size={14} /><span style={{ fontSize: 13 }}>Notify me</span>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: subtle }}>Want to speak?</span>
              <button style={{ padding: "8px 20px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                Sign In to Participate →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
