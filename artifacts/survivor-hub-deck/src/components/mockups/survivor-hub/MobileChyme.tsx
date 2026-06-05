// design-sync
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Mic, MicOff, Phone, Hand, Users, Search, Plus, Bell,
  ChevronLeft, Radio, MessageSquare, Send, Heart, Share2, X, Volume2,
} from "lucide-react";

const PRIMARY = "#22C55E";

// Production: display_name dropped from chyme_room_members / chyme_messages.
// Renders raw @username; falls back to user-<first 8 of user_id> when null.
const ROOMS = [
  { id: 1, title: "Survivor Stories: Rebuilding After Trafficking",  hosts: ["@amara-o", "@james-t"], speakers: 4, listeners: 128, tags: ["healing", "testimony"], live: true },
  { id: 2, title: "Service Credits 101 — Earn & Spend",              hosts: ["@maria-g"],             speakers: 2, listeners: 67,  tags: ["finance", "education"], live: true },
  { id: 3, title: "Global Mastermind: Building Skills Economy",       hosts: ["@david-k", "@priya-s"], speakers: 6, listeners: 312, tags: ["economy", "skills"],   live: true },
  { id: 4, title: "LightHouse Q&A — Finding Safe Housing",           hosts: ["@sofia-r"],             speakers: 3, listeners: 89,  tags: ["housing", "safety"],   live: true },
  { id: 5, title: "Meditation & Healing Hour",                       hosts: ["user-4e9f2c1a"],        speakers: 1, listeners: 0,   tags: ["wellness"],             live: false, scheduled: "Tomorrow 9AM UTC" },
];

const SPEAKERS = [
  { handle: "@amara-o",      role: "Host",    speaking: true,  muted: false, initials: "AO" },
  { handle: "@james-t",      role: "Host",    speaking: false, muted: false, initials: "JT" },
  { handle: "@maria-g",      role: "Speaker", speaking: true,  muted: false, initials: "MG" },
  { handle: "user-8c3d7e2f", role: "Speaker", speaking: false, muted: true,  initials: "DK" }, // fallback
];

// Audience: handle (or user-xxxxxxxx fallback) + initials for avatar circle
const AUDIENCE = [
  { handle: "@sofia-r",      initials: "SR" },
  { handle: "@kwame-a",      initials: "KA" },
  { handle: "@priya-s",      initials: "PS" },
  { handle: "user-4e9f2c1a", initials: "NT" }, // fallback
  { handle: "@lucia-m",      initials: "LM" },
  { handle: "user-b1d5e8a3", initials: "OF" }, // fallback
];

export function MobileChyme() {
  const [activeRoom, setActiveRoom] = useState<typeof ROOMS[0] | null>(null);
  const [muted, setMuted] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMsgs, setChatMsgs] = useState([
    { id: 1, user: "@sofia-r",      text: "This is so healing 💚",              time: "9:12" },
    { id: 2, user: "user-b1d5e8a3", text: "Much needed today ❤️",               time: "9:13" },
    { id: 3, user: "@priya-s",      text: "Can we discuss housing resources?",   time: "9:14" },
  ]);
  const [showChat, setShowChat] = useState(false);
  const [tab, setTab] = useState<"live" | "upcoming">("live");

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setChatMsgs((m) => [...m, { id: Date.now(), user: "You", text: chatInput, time: "Now" }]);
    setChatInput("");
  };

  // ── Chat view ─────────────────────────────────────────────────────────────
  if (activeRoom && showChat) {
    return (
      <div style={{ width: 390, minHeight: "100vh", background: "#021006", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 44, background: "#030d05", display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EAF0" }}>9:41</div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>•••</div>
        </div>
        <div style={{ height: 52, background: "#030d05", borderBottom: `1px solid #052e16`, display: "flex", alignItems: "center", padding: "0 16px", gap: 12, flexShrink: 0 }}>
          <button onClick={() => setShowChat(false)} style={{ color: PRIMARY, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontSize: 14 }}>
            <ChevronLeft size={18} /> Room
          </button>
          <div style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 700, color: "#F0FDF4" }}>Room Chat</div>
          <Badge style={{ background: `${PRIMARY}15`, color: PRIMARY, border: `1px solid ${PRIMARY}30`, fontSize: 10, padding: "2px 8px" }}>Encrypted</Badge>
        </div>
        <ScrollArea style={{ flex: 1, padding: "16px" }}>
          {chatMsgs.map((m) => (
            <div key={m.id} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: m.user === "You" ? PRIMARY : "#A7F3D0" }}>{m.user}</span>
                <span style={{ fontSize: 11, color: "#374151" }}>{m.time}</span>
              </div>
              <div style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>{m.text}</div>
            </div>
          ))}
        </ScrollArea>
        <div style={{ padding: "12px 16px", borderTop: `1px solid #052e16`, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", background: "rgba(255,255,255,0.04)", border: `1px solid #052e16`, borderRadius: 14, padding: "10px 14px" }}>
            <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendChat()} placeholder="Say something…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "#E8EAF0" }} />
            <button onClick={sendChat} style={{ width: 32, height: 32, borderRadius: 8, background: chatInput.trim() ? PRIMARY : "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Send size={14} style={{ color: chatInput.trim() ? "#fff" : "#4B5563" }} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Active room view ──────────────────────────────────────────────────────
  if (activeRoom) {
    return (
      <div style={{ width: 390, minHeight: "100vh", background: "#021006", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 44, background: "#030d05", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", flexShrink: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EAF0" }}>9:41</div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>•••</div>
        </div>
        <div style={{ padding: "14px 16px 12px", borderBottom: `1px solid #052e16`, background: "#030d05", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <button onClick={() => setActiveRoom(null)} style={{ width: 34, height: 34, borderRadius: 10, background: `${PRIMARY}15`, border: `1px solid ${PRIMARY}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronLeft size={18} style={{ color: PRIMARY }} />
            </button>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 6px ${PRIMARY}` }} />
                <Badge style={{ background: `${PRIMARY}15`, color: PRIMARY, border: `1px solid ${PRIMARY}30`, fontSize: 10, padding: "1px 8px" }}>Live</Badge>
                <span style={{ fontSize: 11, color: "#4B5563" }}>Verified 🔒</span>
              </div>
            </div>
            <button onClick={() => setShowChat(true)} style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <MessageSquare size={15} style={{ color: "#9CA3AF" }} />
            </button>
          </div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#F0FDF4", lineHeight: 1.4, marginBottom: 4 }}>{activeRoom.title}</div>
          <div style={{ fontSize: 12, color: "#16A34A" }}>Hosted by {activeRoom.hosts.join(" & ")} · {activeRoom.listeners} listening</div>
        </div>

        <ScrollArea style={{ flex: 1 }}>
          <div style={{ padding: "20px 16px" }}>
            {/* Speakers */}
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 16 }}>
              On Stage · {SPEAKERS.length}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 28 }}>
              {SPEAKERS.map((sp) => (
                <div key={sp.handle} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 80 }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ width: 68, height: 68, borderRadius: "50%", background: `${PRIMARY}15`, border: `3px solid ${sp.speaking ? PRIMARY : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: sp.speaking ? `0 0 18px ${PRIMARY}45` : "none" }}>
                      <span style={{ fontSize: 18, fontWeight: 800, color: PRIMARY }}>{sp.initials}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: 2, right: 2, width: 22, height: 22, borderRadius: "50%", background: sp.muted ? "#4B5563" : PRIMARY, border: "2px solid #021006", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {sp.muted ? <MicOff size={10} style={{ color: "#fff" }} /> : <Mic size={10} style={{ color: "#fff" }} />}
                    </div>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#E8EAF0", textAlign: "center", wordBreak: "break-all", lineHeight: 1.3 }}>{sp.handle}</div>
                  <Badge style={{ fontSize: 10, background: sp.role === "Host" ? `${PRIMARY}18` : "rgba(255,255,255,0.05)", color: sp.role === "Host" ? PRIMARY : "#6B7280", border: `1px solid ${sp.role === "Host" ? PRIMARY + "30" : "transparent"}`, padding: "1px 8px", borderRadius: 20 }}>
                    {sp.role}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Audience */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 14 }}>
                Audience · {activeRoom.listeners}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                {AUDIENCE.map((a) => (
                  <div key={a.handle} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: 56 }}>
                    <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#6B7280" }}>{a.initials}</span>
                    </div>
                    <div style={{ fontSize: 9, color: "#4B5563", textAlign: "center", wordBreak: "break-all", lineHeight: 1.2 }}>{a.handle}</div>
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: 56 }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 12, color: "#4B5563" }}>+{activeRoom.listeners - AUDIENCE.length}</span>
                  </div>
                  <div style={{ fontSize: 9, color: "#4B5563" }}>more</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Controls */}
        <div style={{ padding: "14px 16px", borderTop: `1px solid #052e16`, background: "#030d05", flexShrink: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 12 }}>
            <button onClick={() => setMuted(!muted)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: muted ? "rgba(239,68,68,0.15)" : `${PRIMARY}18`, border: `2px solid ${muted ? "rgba(239,68,68,0.5)" : PRIMARY + "50"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {muted ? <MicOff size={22} style={{ color: "#F87171" }} /> : <Mic size={22} style={{ color: PRIMARY }} />}
              </div>
              <span style={{ fontSize: 11, color: muted ? "#F87171" : PRIMARY }}>{muted ? "Unmute" : "Muted"}</span>
            </button>
            <button onClick={() => setHandRaised(!handRaised)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: handRaised ? "rgba(234,179,8,0.15)" : "rgba(255,255,255,0.05)", border: `2px solid ${handRaised ? "rgba(234,179,8,0.5)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Hand size={22} style={{ color: handRaised ? "#FDE047" : "#9CA3AF" }} />
              </div>
              <span style={{ fontSize: 11, color: handRaised ? "#FDE047" : "#6B7280" }}>Hand</span>
            </button>
            <button onClick={() => setShowChat(true)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MessageSquare size={22} style={{ color: "#9CA3AF" }} />
              </div>
              <span style={{ fontSize: 11, color: "#6B7280" }}>Chat</span>
            </button>
            <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Heart size={22} style={{ color: "#9CA3AF" }} />
              </div>
              <span style={{ fontSize: 11, color: "#6B7280" }}>React</span>
            </button>
          </div>
          <button onClick={() => setActiveRoom(null)} style={{ width: "100%", padding: "13px", borderRadius: 14, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Phone size={18} /> Leave Room
          </button>
        </div>
      </div>
    );
  }

  // ── Room list ─────────────────────────────────────────────────────────────
  return (
    <div style={{ width: 390, minHeight: "100vh", background: "#021006", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 44, background: "#030d05", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EAF0" }}>9:41</div>
        <div style={{ fontSize: 12, color: "#9CA3AF" }}>•••</div>
      </div>
      <div style={{ padding: "14px 16px 12px", borderBottom: `1px solid #052e16`, background: "#030d05", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: `${PRIMARY}20`, border: `1px solid ${PRIMARY}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Radio size={20} style={{ color: PRIMARY }} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#F0FDF4" }}>Chyme 🎙️</div>
              <div style={{ fontSize: 11, color: PRIMARY }}>Social Audio · Encrypted</div>
            </div>
          </div>
          <button style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Search size={15} style={{ color: "#6B7280" }} />
          </button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, padding: "10px", borderRadius: 10, background: `${PRIMARY}10`, border: `1px solid ${PRIMARY}20`, textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: PRIMARY }}>{ROOMS.filter((r) => r.live).length}</div>
            <div style={{ fontSize: 11, color: "#4B5563" }}>Live Rooms</div>
          </div>
          <div style={{ flex: 1, padding: "10px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#E8EAF0" }}>{ROOMS.reduce((s, r) => s + r.listeners, 0)}</div>
            <div style={{ fontSize: 11, color: "#4B5563" }}>Listening</div>
          </div>
          <div style={{ flex: 1, padding: "10px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#E8EAF0" }}>127</div>
            <div style={{ fontSize: 11, color: "#4B5563" }}>Nations</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, padding: "12px 16px 8px", flexShrink: 0 }}>
        {(["live", "upcoming"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "8px", borderRadius: 10, background: tab === t ? `${PRIMARY}18` : "transparent", border: `1px solid ${tab === t ? PRIMARY + "40" : "#052e16"}`, color: tab === t ? PRIMARY : "#6B7280", fontSize: 13, fontWeight: tab === t ? 700 : 400, cursor: "pointer", textTransform: "capitalize" }}>
            {t === "live" ? "🔴 Live" : "📅 Upcoming"}
          </button>
        ))}
      </div>
      <div style={{ padding: "0 16px 10px", flexShrink: 0 }}>
        <button style={{ width: "100%", padding: "12px", borderRadius: 12, background: `linear-gradient(135deg, ${PRIMARY} 0%, #16A34A 100%)`, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Plus size={16} /> Start a Room
        </button>
      </div>
      <ScrollArea style={{ flex: 1, padding: "0 16px 16px" }}>
        {ROOMS.filter((r) => tab === "live" ? r.live : !r.live).map((room) => (
          <div key={room.id} onClick={() => setActiveRoom(room)} style={{ padding: "16px", borderRadius: 14, background: "rgba(34,197,94,0.05)", border: `1px solid #052e16`, marginBottom: 10, cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
              {room.live && <div style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY, flexShrink: 0, marginTop: 5, boxShadow: `0 0 6px ${PRIMARY}` }} />}
              <div style={{ fontSize: 14, fontWeight: 600, color: "#F0FDF4", flex: 1, lineHeight: 1.4 }}>{room.title}</div>
            </div>
            <div style={{ fontSize: 12, color: "#16A34A", marginBottom: 8 }}>
              {room.hosts.join(", ")} {room.live ? `· ${room.speakers} speakers` : `· ${(room as any).scheduled}`}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 4, flex: 1, flexWrap: "wrap" }}>
                {room.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 10, color: PRIMARY, background: `${PRIMARY}12`, padding: "2px 8px", borderRadius: 20, border: `1px solid ${PRIMARY}20` }}>#{tag}</span>
                ))}
              </div>
              {room.live && (
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#4B5563", fontSize: 12 }}>
                  <Users size={12} /> {room.listeners}
                </div>
              )}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
