// design-sync
// THEME: Comic Dark — Mobile Hub Home · Apps grid + community stream + bottom nav
import { useState } from "react";
import {
  MessageSquare, Zap, Radio, Bell, Settings, Search, Send, Plus,
  Sparkles, Pin, AlertCircle, Heart, MessageCircle, Share2,
  AtSign, ShieldCheck, ThumbsUp, ThumbsDown, Flag, ArrowUpRight,
  Home, Car, BookOpen, Hammer, Users, Globe, Coins, BarChart2,
  Smile, Award, Target, ListChecks,
} from "lucide-react";

const bg      = "#0D0D0D";
const surface = "#141414";
const rail    = "#080808";
const ink     = "#D4C49A";
const inkDim  = "#7A6A50";
const accent  = "#B91C1C";
const cream   = "#EDE3CB";
const dotBg   = `radial-gradient(${ink}1A 1px, transparent 1px)`;

const MINI_APPS = [
  { id: "chyme",          name: "Chyme",          icon: Radio,      color: "#1A5C32", emoji: "🎙️" },
  { id: "lighthouse",     name: "LightHouse",     icon: Home,       color: "#1A4A7A", emoji: "🏠" },
  { id: "trusttransport", name: "TrustTransport", icon: Car,        color: "#0C4A6E", emoji: "📦" },
  { id: "directory",      name: "Directory",      icon: BookOpen,   color: "#1A3A6A", emoji: "📇" },
  { id: "foundation",     name: "Foundation",     icon: Hammer,     color: "#7A4A05", emoji: "🪛" },
  { id: "peerprog",       name: "Peer Prog.",     icon: Users,      color: "#1A5C40", emoji: "🏘️" },
  { id: "gdp",            name: "GDP",            icon: Globe,      color: "#0E5A68", emoji: "🗺️" },
  { id: "credits",        name: "Credits",        icon: Coins,      color: "#5C2C8A", emoji: "⚙️" },
  { id: "workforce",      name: "Workforce",      icon: BarChart2,  color: "#6A2A05", emoji: "💼" },
  { id: "mood",           name: "Mood",           icon: Smile,      color: "#1A5C2A", emoji: "😁" },
  { id: "skillshunt",     name: "SkillsHunt",     icon: Award,      color: "#7A5A05", emoji: "🎓" },
  { id: "levelup",        name: "LevelUp",        icon: Target,     color: "#1A5C30", emoji: "🎯" },
  { id: "whatworks",      name: "What Works",     icon: ListChecks, color: "#4A6B10", emoji: "🧰" },
];

const LIVE_ROOMS = [
  { title: "Survivor Stories: Rebuilding Together", host: "@amara-o", listeners: 128 },
  { title: "Service Credits 101", host: "@maria-g", listeners: 67 },
];

type StreamPost = { id: number; type: "community"; author: string; avatar: string; authorColor: string; time: string; body: string; replies: number; hearts: number; };
type StreamAnn  = { id: number; type: "announcement"; pinned: boolean; urgent: boolean; body: string; link?: string; };
type StreamQA   = { id: number; type: "ai_qa"; question: string; askedBy: string; time: string; answer: string; };
type StreamPend = { id: number; type: "ai_pending"; question: string; askedBy: string; time: string; };
type StreamItem = StreamPost | StreamAnn | StreamQA | StreamPend;

const STREAM: StreamItem[] = [
  {
    id: 1, type: "announcement", pinned: true, urgent: false,
    body: "12 survivors housed in Houston via LightHouse — 4 slots open for ServiceCredits holders.",
    link: "Open LightHouse →",
  },
  {
    id: 7, type: "ai_pending",
    question: "Is it safe to share my exact address with a host before I arrive?",
    askedBy: "You", time: "just now",
  },
  {
    id: 2, type: "community",
    author: "@amara-o", avatar: "AO", authorColor: "#1A5C32", time: "18 min",
    body: "Six months ago I had nothing. Workforce showed my gaps, SkillsHunt leveled me up, Foundation got me my first gig. Keep going.",
    replies: 14, hearts: 89,
  },
  {
    id: 3, type: "ai_qa",
    question: "How do I earn my first ServiceCredits?",
    askedBy: "@maria-g", time: "34 min",
    answer: "Fastest: Foundation gig (15–45 credits), SkillsHunt badge (10–30 credits), or SocketRelay request (5–20 credits).",
  },
];

const NAV = [
  { icon: MessageSquare, label: "Chat",     key: "chat"     },
  { icon: Zap,           label: "Apps",     key: "apps"     },
  { icon: Radio,         label: "Chyme",    key: "chyme"    },
  { icon: Bell,          label: "Alerts",   key: "alerts"   },
  { icon: Settings,      label: "Settings", key: "settings" },
];

export function ComicMobileHome() {
  const [activeNav, setActiveNav] = useState("chat");
  const [input, setInput] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [rating, setRating] = useState<Record<number, "up" | "down" | "flag" | "none">>({});

  const toggleLike = (id: number) => setLiked(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]);
  const rate = (id: number, v: "up" | "down" | "flag") => setRating(r => ({ ...r, [id]: r[id] === v ? "none" : v }));

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: rail, borderBottom: `2px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: ink, letterSpacing: "0.04em" }}>9:41</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ fontSize: 11, color: inkDim, letterSpacing: "0.06em" }}>••• WiFi 100%</div>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", background: surface, borderBottom: `2px solid ${ink}`, flexShrink: 0, backgroundImage: dotBg, backgroundSize: "8px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, background: bg, border: `2px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, color: ink, letterSpacing: "0.04em" }}>SH</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: cream, letterSpacing: "0.04em", textTransform: "uppercase" }}>Survivor Hub</div>
              <div style={{ fontSize: 10, color: inkDim, letterSpacing: "0.04em" }}>Exit Their Economy · 4.9M</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ width: 32, height: 32, background: bg, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Search size={14} style={{ color: inkDim }} />
            </button>
            <button style={{ width: 32, height: 32, background: bg, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Bell size={14} style={{ color: inkDim }} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {activeNav === "chat" && (
          <>
            {/* Hero stats */}
            <div style={{ margin: "10px 14px 0", padding: "12px 14px", background: surface, border: `2px solid ${ink}`, boxShadow: `3px 3px 0 ${ink}`, flexShrink: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", marginBottom: 6 }}>From Survivor to Thriver</div>
              <div style={{ display: "flex", gap: 6 }}>
                {[{ v: "4.9M", l: "Members" }, { v: "$247B", l: "GDP" }, { v: "127", l: "Nations" }].map(({ v, l }) => (
                  <div key={l} style={{ flex: 1, textAlign: "center", padding: "7px 4px", background: bg, border: `1.5px solid ${ink}50`, boxShadow: `2px 2px 0 ${ink}28` }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: ink, letterSpacing: "-0.02em" }}>{v}</div>
                    <div style={{ fontSize: 9, color: inkDim, marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live rooms strip */}
            <div style={{ padding: "10px 14px 0", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: ink, textTransform: "uppercase", letterSpacing: "0.12em" }}>🔴 Live on Chyme</div>
                <span style={{ fontSize: 11, color: inkDim, cursor: "pointer" }}>See all →</span>
              </div>
              <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
                {LIVE_ROOMS.map(room => (
                  <div key={room.title} style={{ minWidth: 180, padding: "10px 12px", background: surface, border: `2px solid ${ink}50`, boxShadow: `2px 2px 0 ${ink}28`, flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                      <div style={{ width: 5, height: 5, background: "#22C55E" }} />
                      <span style={{ fontSize: 9, fontWeight: 800, color: ink, letterSpacing: "0.1em", textTransform: "uppercase" }}>LIVE · {room.listeners}</span>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: cream, marginBottom: 3, lineHeight: 1.3 }}>{room.title}</div>
                    <div style={{ fontSize: 10, color: inkDim }}>{room.host}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stream */}
            <div style={{ flex: 1, overflowY: "auto", padding: "10px 14px 0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {STREAM.map(item => {
                  if (item.type === "announcement") {
                    const ann = item as StreamAnn;
                    return (
                      <div key={ann.id} style={{ padding: "12px 14px", background: ann.urgent ? `${accent}08` : `${ink}06`, border: `2px solid ${ann.urgent ? accent : ink + "50"}`, boxShadow: ann.urgent ? `3px 3px 0 ${accent}` : `2px 2px 0 ${ink}28` }}>
                        {ann.pinned && (
                          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 5 }}>
                            <Pin size={9} style={{ color: ink }} />
                            <span style={{ fontSize: 9, color: ink, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>PINNED</span>
                          </div>
                        )}
                        {ann.urgent && (
                          <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 7, padding: "2px 6px", background: `${accent}10`, border: `1px solid ${accent}`, fontSize: 9, fontWeight: 800, color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            <AlertCircle size={9} /> URGENT
                          </div>
                        )}
                        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                          <div style={{ width: 24, height: 24, background: surface, border: `1.5px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 900, color: ink, flexShrink: 0 }}>SH</div>
                          <span style={{ fontSize: 11, fontWeight: 800, color: cream, letterSpacing: "0.03em", textTransform: "uppercase" }}>Survivor Hub</span>
                          <span style={{ fontSize: 8, padding: "1px 4px", border: `1px solid ${ink}40`, color: ink, fontWeight: 700, letterSpacing: "0.08em" }}>OFFICIAL</span>
                        </div>
                        <div style={{ fontSize: 12, color: cream, lineHeight: 1.6, marginBottom: ann.link ? 9 : 0 }}>{ann.body}</div>
                        {ann.link && (
                          <button style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 9px", background: surface, border: `1.5px solid ${ann.urgent ? accent : ink}`, boxShadow: `2px 2px 0 ${ann.urgent ? accent : ink}`, color: ann.urgent ? accent : ink, fontSize: 10, fontWeight: 800, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                            {ann.link} <ArrowUpRight size={10} />
                          </button>
                        )}
                      </div>
                    );
                  }
                  if (item.type === "ai_qa") {
                    const qa = item as StreamQA;
                    return (
                      <div key={qa.id} style={{ padding: "12px 14px", background: surface, border: `1.5px solid ${inkDim}60`, boxShadow: `2px 2px 0 ${inkDim}30` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <div style={{ width: 24, height: 24, background: `${inkDim}14`, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Sparkles size={12} style={{ color: inkDim }} />
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, color: cream, textTransform: "uppercase", letterSpacing: "0.04em" }}>AI Assistant</span>
                            <span style={{ fontSize: 8, padding: "1px 4px", border: `1px solid ${inkDim}50`, color: inkDim, fontWeight: 700, letterSpacing: "0.08em" }}>Q&A</span>
                          </div>
                          <span style={{ fontSize: 10, color: inkDim, marginLeft: "auto" }}>{qa.time}</span>
                        </div>
                        <div style={{ padding: "6px 9px", background: bg, border: `1.5px solid ${ink}28`, marginBottom: 7 }}>
                          <span style={{ color: ink, fontWeight: 800, fontSize: 10 }}>Q: </span>
                          <span style={{ fontSize: 11, color: inkDim }}>{qa.question}</span>
                        </div>
                        <div style={{ fontSize: 12, color: cream, lineHeight: 1.6 }}>
                          <span style={{ color: ink, fontWeight: 800, fontSize: 10 }}>A: </span>{qa.answer}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 9, paddingTop: 9, borderTop: `1.5px solid ${ink}20` }}>
                          <button onClick={() => rate(qa.id, "up")} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 7px", background: surface, border: `1.5px solid ${rating[qa.id] === "up" ? "#22C55E" : inkDim + "40"}`, boxShadow: rating[qa.id] === "up" ? `2px 2px 0 #22C55E` : "none", color: rating[qa.id] === "up" ? "#22C55E" : inkDim, fontSize: 10, fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                            <ThumbsUp size={10} /> Helpful
                          </button>
                          <button onClick={() => rate(qa.id, "down")} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 7px", background: surface, border: `1.5px solid ${rating[qa.id] === "down" ? ink : inkDim + "40"}`, color: rating[qa.id] === "down" ? cream : inkDim, fontSize: 10, fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                            <ThumbsDown size={10} /> Not helpful
                          </button>
                          <button onClick={() => rate(qa.id, "flag")} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 7px", background: "transparent", border: `1.5px solid ${rating[qa.id] === "flag" ? accent : "transparent"}`, color: rating[qa.id] === "flag" ? accent : inkDim + "70", fontSize: 10, cursor: "pointer", marginLeft: "auto" }}>
                            <Flag size={10} />
                          </button>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "ai_pending") {
                    const pq = item as StreamPend;
                    return (
                      <div key={pq.id} style={{ padding: "12px 14px", background: surface, border: `1.5px dashed ${inkDim}60` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                          <div style={{ width: 24, height: 24, background: `${inkDim}14`, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Sparkles size={12} style={{ color: inkDim }} />
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 800, color: cream, textTransform: "uppercase", letterSpacing: "0.04em" }}>AI Assistant</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 8, padding: "1px 4px", border: `1px solid ${inkDim}40`, color: inkDim, fontWeight: 700, letterSpacing: "0.08em" }}><ShieldCheck size={8} /> REVIEWING</span>
                        </div>
                        <div style={{ padding: "6px 9px", background: bg, border: `1.5px solid ${ink}20`, marginBottom: 7 }}>
                          <span style={{ color: ink, fontWeight: 800, fontSize: 10 }}>Q: </span>
                          <span style={{ fontSize: 11, color: inkDim }}>{pq.question}</span>
                        </div>
                        <div style={{ fontSize: 11, color: inkDim, lineHeight: 1.6 }}>AI Assistant is preparing an answer — a teammate is reviewing it for safety before it is posted.</div>
                      </div>
                    );
                  }
                  const post = item as StreamPost;
                  return (
                    <div key={post.id} style={{ padding: "12px 14px", background: surface, border: `1.5px solid ${ink}40`, boxShadow: `2px 2px 0 ${ink}18` }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                        <div style={{ width: 28, height: 28, background: `${post.authorColor}18`, border: `1.5px solid ${post.authorColor}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: post.authorColor, flexShrink: 0 }}>{post.avatar}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 800, color: cream, letterSpacing: "0.03em" }}>{post.author}</div>
                          <div style={{ fontSize: 10, color: inkDim }}>{post.time} ago</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: cream, lineHeight: 1.6, marginBottom: 9 }}>{post.body}</div>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 9, borderTop: `1px solid ${ink}18` }}>
                        <button onClick={() => toggleLike(post.id)} style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? accent : inkDim, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>
                          <Heart size={13} fill={liked.includes(post.id) ? accent : "none"} /> {post.hearts + (liked.includes(post.id) ? 1 : 0)}
                        </button>
                        <button style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: inkDim, fontSize: 12 }}><MessageCircle size={13} /> {post.replies}</button>
                        <button style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: inkDim, fontSize: 12 }}><Share2 size={13} /></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Composer */}
            <div style={{ padding: "8px 14px 10px", borderTop: `2px solid ${ink}`, background: surface, flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 6 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "2px 6px", background: bg, border: `1px solid ${inkDim}`, color: inkDim, fontSize: 9, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <AtSign size={9} /> COMIC
                </span>
                <span style={{ fontSize: 10, color: inkDim }}>Type <span style={{ color: ink, fontWeight: 700 }}>@comic</span> to ask AI Assistant</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 12px", background: bg, border: `2px solid ${ink}60`, boxShadow: `2px 2px 0 ${ink}40` }}>
                <Plus size={14} style={{ color: inkDim, flexShrink: 0 }} />
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Share, or @comic to ask…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: cream, fontFamily: "inherit" }} />
                <button style={{ width: 26, height: 26, background: input.trim() ? ink : surface, border: `1.5px solid ${input.trim() ? ink : inkDim + "60"}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                  <Send size={11} style={{ color: input.trim() ? bg : inkDim }} />
                </button>
              </div>
            </div>
          </>
        )}

        {activeNav === "apps" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: cream, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 3 }}>Apps</div>
            <div style={{ fontSize: 11, color: inkDim, marginBottom: 14 }}>Tap to launch</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {MINI_APPS.map(app => {
                const Icon = app.icon;
                return (
                  <div key={app.id} style={{ padding: "14px 10px", background: surface, border: `2px solid ${app.color}50`, boxShadow: `2px 2px 0 ${app.color}30`, cursor: "pointer", textAlign: "center" }}>
                    <div style={{ width: 38, height: 38, background: `${app.color}18`, border: `1.5px solid ${app.color}50`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 7px" }}>
                      <Icon size={19} style={{ color: app.color }} />
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: cream, marginBottom: 2, letterSpacing: "0.03em" }}>{app.name}</div>
                    <div style={{ fontSize: 13 }}>{app.emoji}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeNav !== "chat" && activeNav !== "apps" && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: inkDim, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
            {activeNav.charAt(0).toUpperCase() + activeNav.slice(1)} — Nothing here yet
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ background: rail, borderTop: `2px solid ${ink}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {NAV.map(({ icon: Icon, label, key }) => {
          const active = activeNav === key;
          return (
            <button key={key} onClick={() => setActiveNav(key)} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, borderTop: active ? `2px solid ${ink}` : "2px solid transparent", marginTop: -2 }}>
              <Icon size={20} style={{ color: active ? ink : inkDim }} />
              <span style={{ fontSize: 9, fontWeight: active ? 800 : 600, color: active ? ink : inkDim, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
