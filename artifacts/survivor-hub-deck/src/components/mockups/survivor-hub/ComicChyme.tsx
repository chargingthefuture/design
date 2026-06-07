// design-sync
// THEME: Comic Dark — Chyme · Room Browser + Live Room
import { useState } from "react";
import {
  Mic, MicOff, Hand, Users, Search, Bell, Settings,
  Globe, MessageSquare, Send, Radio, Heart, ChevronRight,
} from "lucide-react";

const bg      = "#0D0D0D";
const surface = "#141414";
const rail    = "#080808";
const ink     = "#D4C49A";
const inkDim  = "#7A6A50";
const accent  = "#B91C1C";
const cream   = "#EDE3CB";
const shadow  = `3px 3px 0 ${ink}`;
const dotBg   = `radial-gradient(${ink}1A 1px, transparent 1px)`;

const ROOMS = [
  { id: 1, title: "Survivor Stories: Rebuilding Together",     hosts: ["@amara-o", "@james-t"], listeners: 128, live: true  },
  { id: 2, title: "Service Credits 101 — Earn & Spend",        hosts: ["@maria-g"],              listeners: 67,  live: true  },
  { id: 3, title: "Global Mastermind: Building Skills Economy", hosts: ["@david-k", "@priya-s"], listeners: 312, live: true  },
  { id: 4, title: "LightHouse Q&A — Finding Safe Housing",     hosts: ["@sofia-r"],              listeners: 89,  live: true  },
  { id: 5, title: "Meditation & Healing Hour — GentlePulse",   hosts: ["user-4e9f2c1a"],         listeners: 204, live: false, scheduled: "Tomorrow 9AM UTC" },
  { id: 6, title: "SocketRelay: Connecting Resources Globally", hosts: ["@kwame-a","@lucia-m"],  listeners: 0,   live: false, scheduled: "Friday 3PM UTC" },
];

const SPEAKERS = [
  { handle: "@amara-o",      role: "Host",    speaking: true,  muted: false, initials: "AO" },
  { handle: "@james-t",      role: "Host",    speaking: false, muted: false, initials: "JT" },
  { handle: "@maria-g",      role: "Speaker", speaking: true,  muted: false, initials: "MG" },
  { handle: "user-8c3d7e2f", role: "Speaker", speaking: false, muted: true,  initials: "DK" },
];

const AUDIENCE = [
  { handle: "@sofia-r", initials: "SR" }, { handle: "@kwame-a", initials: "KA" },
  { handle: "@priya-s", initials: "PS" }, { handle: "user-4e9f2c1a", initials: "NT" },
  { handle: "@lucia-m", initials: "LM" }, { handle: "user-b1d5e8a3", initials: "OF" },
  { handle: "@ana-b",   initials: "AB" }, { handle: "@jin-l",   initials: "JL" },
];

const CHAT = [
  { id: 1, user: "@sofia-r",      text: "This conversation is so healing, thank you!", time: "9:12" },
  { id: 2, user: "user-b1d5e8a3", text: "Much needed.",                                  time: "9:13" },
  { id: 3, user: "@priya-s",      text: "Can we discuss the housing resources mentioned?", time: "9:14" },
  { id: 4, user: "user-4e9f2c1a", text: "Great discussion everyone.",                    time: "9:15" },
];

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", borderLeft: `3px solid ${ink}`, paddingLeft: 8, marginBottom: 10, lineHeight: 1 }}>
      {children}
    </div>
  );
}

export function ComicChyme() {
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const [muted, setMuted] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [tab, setTab] = useState<"rooms" | "scheduled">("rooms");

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 64, background: rail, borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, paddingBottom: 14, gap: 6, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, background: surface, border: `2px solid ${ink}`, boxShadow: shadow, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
          <Radio size={17} color={ink} />
        </div>
        {[
          { Icon: Radio,        active: true  },
          { Icon: MessageSquare,active: false },
          { Icon: Users,        active: false },
          { Icon: Globe,        active: false },
        ].map(({ Icon, active }, i) => (
          <button key={i} style={{ width: 40, height: 40, background: active ? `${ink}18` : "transparent", border: active ? `1.5px solid ${ink}` : `1.5px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: active ? ink : inkDim, boxShadow: active ? `2px 2px 0 ${ink}` : "none" }}>
            <Icon size={17} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 40, height: 40, background: "transparent", border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Bell size={16} /></button>
        <button style={{ width: 40, height: 40, background: "transparent", border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Settings size={16} /></button>
        <div style={{ width: 30, height: 30, background: surface, border: `1.5px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ink }}>S</div>
      </aside>

      {/* Room list sidebar */}
      <aside style={{ width: 300, background: surface, borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "14px 14px 10px", borderBottom: `2px solid ${ink}`, backgroundImage: dotBg, backgroundSize: "8px 8px" }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", marginBottom: 6 }}>🎙️ Chyme</div>
          <div style={{ position: "relative" }}>
            <Search size={12} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", color: inkDim }} />
            <input placeholder="Search rooms…" style={{ width: "100%", padding: "6px 8px 6px 26px", background: bg, border: `1px solid ${inkDim}40`, fontSize: 12, color: cream, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: `2px solid ${ink}`, flexShrink: 0 }}>
          {([["rooms", "Live Rooms"], ["scheduled", "Scheduled"]] as const).map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)} style={{ flex: 1, padding: "9px 0", background: tab === key ? `${ink}14` : "transparent", border: "none", borderBottom: tab === key ? `2px solid ${ink}` : "2px solid transparent", color: tab === key ? ink : inkDim, fontSize: 11, fontWeight: 800, cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: -2 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Room list */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {ROOMS.filter(r => tab === "rooms" ? r.live : !r.live).map(room => {
            const isActive = activeRoom.id === room.id;
            return (
              <div key={room.id} onClick={() => setActiveRoom(room)} style={{ padding: "12px 14px", borderBottom: `1px solid ${ink}18`, cursor: "pointer", background: isActive ? `${ink}12` : "transparent", borderLeft: isActive ? `3px solid ${ink}` : `3px solid transparent`, boxShadow: isActive ? `inset -2px 0 0 ${ink}20` : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                  {room.live ? (
                    <>
                      <div style={{ width: 6, height: 6, background: "#22C55E" }} />
                      <span style={{ fontSize: 9, fontWeight: 800, color: ink, letterSpacing: "0.1em", textTransform: "uppercase" }}>LIVE · {room.listeners}</span>
                    </>
                  ) : (
                    <span style={{ fontSize: 9, fontWeight: 800, color: inkDim, letterSpacing: "0.1em", textTransform: "uppercase" }}>SCHEDULED · {(room as any).scheduled}</span>
                  )}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: isActive ? cream : inkDim + "CC", lineHeight: 1.4, marginBottom: 4 }}>{room.title}</div>
                <div style={{ fontSize: 11, color: inkDim }}>{room.hosts.join(", ")}</div>
              </div>
            );
          })}
        </div>

        {/* Start room CTA */}
        <div style={{ padding: "10px 14px", borderTop: `2px solid ${ink}` }}>
          <button style={{ width: "100%", padding: "9px", background: surface, border: `1.5px solid ${ink}`, boxShadow: shadow, color: ink, fontSize: 11, fontWeight: 800, cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Radio size={13} /> Start a Room
          </button>
        </div>
      </aside>

      {/* Main — active room */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Room header */}
        <header style={{ borderBottom: `2px solid ${ink}`, padding: "14px 24px", background: surface, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <div style={{ width: 6, height: 6, background: "#22C55E" }} />
                <span style={{ fontSize: 9, fontWeight: 800, color: ink, letterSpacing: "0.12em", textTransform: "uppercase" }}>LIVE · {activeRoom.listeners} LISTENING</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: cream, letterSpacing: "0.02em", lineHeight: 1.3 }}>{activeRoom.title}</div>
              <div style={{ fontSize: 12, color: inkDim, marginTop: 4 }}>Hosted by {activeRoom.hosts.join(", ")}</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button style={{ padding: "5px 11px", background: surface, border: `1.5px solid ${inkDim}`, boxShadow: `2px 2px 0 ${inkDim}`, color: inkDim, fontSize: 10, fontWeight: 800, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>Share</button>
              <button style={{ padding: "5px 11px", background: surface, border: `1.5px solid ${accent}`, boxShadow: `2px 2px 0 ${accent}`, color: accent, fontSize: 10, fontWeight: 800, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>Leave</button>
            </div>
          </div>
        </header>

        {/* Speakers + chat split */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Speakers grid + controls */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderRight: `2px solid ${ink}`, minWidth: 0 }}>
            <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
              <PanelLabel>On Stage — {SPEAKERS.length} speakers</PanelLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
                {SPEAKERS.map(sp => (
                  <div key={sp.handle} style={{ textAlign: "center", padding: "16px 8px", background: sp.speaking ? `${ink}10` : surface, border: `2px solid ${sp.speaking ? ink : inkDim + "40"}`, boxShadow: sp.speaking ? shadow : "none" }}>
                    <div style={{ position: "relative", width: 52, height: 52, margin: "0 auto 10px" }}>
                      <div style={{ width: 52, height: 52, background: sp.speaking ? `${ink}20` : `${inkDim}14`, border: `2px solid ${sp.speaking ? ink : inkDim + "50"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: sp.speaking ? ink : inkDim }}>
                        {sp.initials}
                      </div>
                      {sp.speaking && (
                        <div style={{ position: "absolute", bottom: -4, right: -4, width: 16, height: 16, background: ink, border: `2px solid ${bg}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Mic size={9} color={bg} />
                        </div>
                      )}
                      {sp.muted && (
                        <div style={{ position: "absolute", bottom: -4, right: -4, width: 16, height: 16, background: accent, border: `2px solid ${bg}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <MicOff size={9} color={cream} />
                        </div>
                      )}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: sp.speaking ? cream : inkDim, letterSpacing: "0.03em", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sp.handle}</div>
                    <div style={{ fontSize: 9, color: inkDim, letterSpacing: "0.08em", textTransform: "uppercase" }}>{sp.role}</div>
                  </div>
                ))}
              </div>

              <PanelLabel>Audience — {AUDIENCE.length} present</PanelLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {AUDIENCE.map(a => (
                  <div key={a.handle} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", background: surface, border: `1px solid ${inkDim}40` }}>
                    <div style={{ width: 22, height: 22, background: `${inkDim}14`, border: `1px solid ${inkDim}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: inkDim }}>{a.initials}</div>
                    <span style={{ fontSize: 11, color: inkDim }}>{a.handle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls bar */}
            <div style={{ padding: "12px 24px", borderTop: `2px solid ${ink}`, background: surface, display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <button onClick={() => setMuted(m => !m)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: bg, border: `2px solid ${muted ? accent : ink}`, boxShadow: `2px 2px 0 ${muted ? accent : ink}`, color: muted ? accent : ink, fontSize: 11, fontWeight: 800, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {muted ? <MicOff size={14} /> : <Mic size={14} />}
                {muted ? "Unmute" : "Mute"}
              </button>
              <button onClick={() => setHandRaised(h => !h)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: handRaised ? `${ink}14` : bg, border: `2px solid ${handRaised ? ink : inkDim + "60"}`, boxShadow: handRaised ? shadow : "none", color: handRaised ? ink : inkDim, fontSize: 11, fontWeight: 800, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                <Hand size={14} /> {handRaised ? "Lower" : "Raise"}
              </button>
              <div style={{ flex: 1 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: inkDim }}>
                <Heart size={12} color={inkDim} /> <span>312 reactions</span>
              </div>
            </div>
          </div>

          {/* Chat panel */}
          <div style={{ width: 300, display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "12px 14px", borderBottom: `2px solid ${ink}`, background: surface, flexShrink: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase" }}>Room Chat</div>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
              {CHAT.map(msg => (
                <div key={msg.id} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, background: `${inkDim}14`, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: inkDim, flexShrink: 0 }}>
                    {msg.user.startsWith("user-") ? msg.user.slice(5, 7).toUpperCase() : msg.user.slice(1, 3).toUpperCase()}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 3 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: ink }}>{msg.user}</span>
                      <span style={{ fontSize: 10, color: inkDim }}>{msg.time}</span>
                    </div>
                    <div style={{ padding: "7px 10px", background: surface, border: `1.5px solid ${ink}40`, boxShadow: `2px 2px 0 ${ink}18`, fontSize: 12, color: cream, lineHeight: 1.5 }}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "10px 14px", borderTop: `2px solid ${ink}`, background: surface, flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", background: bg, border: `2px solid ${ink}60`, boxShadow: `2px 2px 0 ${ink}40` }}>
                <input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Say something…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 12, color: cream, fontFamily: "inherit" }} />
                <button style={{ width: 26, height: 26, background: chatInput.trim() ? ink : surface, border: `1px solid ${chatInput.trim() ? ink : inkDim + "50"}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Send size={12} style={{ color: chatInput.trim() ? bg : inkDim }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
