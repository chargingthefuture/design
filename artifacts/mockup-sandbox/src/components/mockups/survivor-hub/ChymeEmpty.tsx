import { Mic, Radio, Clock, Bell, Plus, Lock, Globe, Users } from "lucide-react";

const COLOR = "#22C55E";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const UPCOMING = [
  { title: "Survivor Stories: Rebuilding Together", host: "Amara O.", when: "Today · 7 PM UTC", tags: ["healing", "testimony"], privacy: "Public" },
  { title: "Service Credits 101 — How to Earn & Spend", host: "Maria G.", when: "Tomorrow · 6 PM UTC", tags: ["finance", "education"], privacy: "Public" },
  { title: "Global Mastermind: Building Skills Economy", host: "David K.", when: "Fri · 8 PM UTC", tags: ["economy", "skills"], privacy: "Members Only" },
];

export function ChymeEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <aside style={{ width: 280, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <Radio size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700, color: text }}>Chyme</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 0</span>
          </div>
          <div style={{ position: "relative" }}>
            <input placeholder="Search rooms…" style={{ width: "100%", padding: "8px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
          </div>
        </div>
        <div style={{ padding: "12px 16px 6px", fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Live Now</div>
        {/* Empty live rooms */}
        <div style={{ margin: "0 12px 16px", borderRadius: 12, border: `2px dashed ${border}`, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: `${COLOR}10`, border: `1px solid ${COLOR}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mic size={18} color={subtle} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: text }}>No rooms live right now</div>
          <div style={{ fontSize: 12, color: subtle, textAlign: "center", lineHeight: 1.5 }}>Start one or wait for a scheduled room to go live</div>
        </div>
        <div style={{ padding: "0 16px 6px", fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Upcoming</div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 16px" }}>
          {UPCOMING.map(({ title, host, when, tags, privacy }) => (
            <div key={title} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "12px", marginBottom: 8, opacity: 0.7, cursor: "pointer" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: text, lineHeight: 1.4, marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 11, color: subtle, marginBottom: 6 }}>{host}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Clock size={10} color={subtle} /><span style={{ fontSize: 10, color: subtle }}>{when}</span>
                </div>
                {privacy === "Members Only" ? <Lock size={10} color={subtle} /> : <Globe size={10} color={subtle} />}
                {tags.map(t => <span key={t} style={{ fontSize: 10, background: "rgba(255,255,255,0.05)", color: subtle, borderRadius: 4, padding: "1px 5px" }}>#{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>
        <div style={{ maxWidth: 480, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Radio size={34} color={`${COLOR}60`} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text }}>No rooms are live yet</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
            Chyme is powered by GetStream — real-time audio rooms for survivors to share stories, learn, and connect. Rooms appear here the moment someone goes live.
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <button style={{ padding: "10px 22px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Plus size={15} /> Start a Room
            </button>
            <button style={{ padding: "10px 22px", borderRadius: 10, background: "transparent", border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Bell size={14} /> Notify Me
            </button>
          </div>
        </div>

        {/* How it works strip */}
        <div style={{ position: "absolute", bottom: 40, display: "flex", gap: 40 }}>
          {[
            { icon: Radio, label: "Go live instantly", desc: "One tap starts a room" },
            { icon: Users, label: "Up to 1,000 listeners", desc: "Global survivor community" },
            { icon: Lock, label: "Safe Space protected", desc: "End-to-end encrypted" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ textAlign: "center", width: 160 }}>
              <Icon size={18} color={COLOR} style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
