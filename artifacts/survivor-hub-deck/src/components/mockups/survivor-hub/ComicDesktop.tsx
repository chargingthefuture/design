// design-sync
// THEME: Comic Dark — Hub Desktop · #community feed
import { useState } from "react";
import {
  MessageSquare, Zap, Bell, Settings, Hash, Search, Send, Plus,
  Sparkles, Pin, AlertCircle, Heart, MessageCircle, Share2,
  ArrowUpRight, ThumbsUp, ThumbsDown, Flag, AtSign, ShieldCheck,
  Radio, Home, Car, BookOpen, Hammer, Users, Globe, Coins,
  BarChart2, Smile, Award, Target, ListChecks, ChevronRight,
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

type StreamPost = { id: number; type: "community"; author: string; avatar: string; authorColor: string; time: string; body: string; replies: number; hearts: number; };
type StreamAnn  = { id: number; type: "announcement"; pinned: boolean; urgent: boolean; body: string; link?: string; };
type StreamQA   = { id: number; type: "ai_qa"; question: string; askedBy: string; time: string; answer: string; };
type StreamPend = { id: number; type: "ai_pending"; question: string; askedBy: string; time: string; };
type StreamItem = StreamPost | StreamAnn | StreamQA | StreamPend;

const STREAM: StreamItem[] = [
  {
    id: 1, type: "announcement", pinned: true, urgent: false,
    body: "12 survivors housed in Houston this week via LightHouse — 4 slots still open for ServiceCredits holders. Apply before Friday.",
    link: "Open LightHouse →",
  },
  {
    id: 7, type: "ai_pending",
    question: "Is it safe to share my exact address with a host before I arrive?",
    askedBy: "You", time: "just now",
  },
  {
    id: 2, type: "community",
    author: "@amara-o", avatar: "AO", authorColor: "#1A5C32", time: "18 min ago",
    body: "Six months ago I had nothing. Workforce showed my skill gaps. SkillsHunt leveled me up. Foundation got me my first verified gig. It is real. Keep going.",
    replies: 14, hearts: 89,
  },
  {
    id: 3, type: "ai_qa",
    question: "How do I earn my first ServiceCredits?",
    askedBy: "@maria-g", time: "34 min ago",
    answer: "Fastest paths: complete a Foundation gig (15–45 credits), finish a SkillsHunt badge (10–30 credits), or fulfill a SocketRelay request (5–20 credits). Credits appear in your wallet instantly after verification.",
  },
  {
    id: 4, type: "announcement", pinned: false, urgent: true,
    body: "47 emergency housing slots verified in Houston, TX. 12 accept ServiceCredits. Contact LightHouse directly — do not use third-party referrals.",
    link: "View Listings →",
  },
  {
    id: 5, type: "community",
    author: "@james-t", avatar: "JT", authorColor: "#1A4A7A", time: "2 hr ago",
    body: "ServiceCredits 101: earn through verified work (Foundation, SkillsHunt, SocketRelay), spend on housing or transport, trade peer-to-peer. Utility token — no fiat conversion.",
    replies: 9, hearts: 63,
  },
];

const MINI_APPS = [
  { id: "chyme",          name: "Chyme",           icon: Radio,       emoji: "🎙️" },
  { id: "lighthouse",     name: "LightHouse",      icon: Home,        emoji: "🏠" },
  { id: "trusttransport", name: "TrustTransport",  icon: Car,         emoji: "📦" },
  { id: "directory",      name: "Directory",       icon: BookOpen,    emoji: "📇" },
  { id: "foundation",     name: "Foundation",      icon: Hammer,      emoji: "🪛" },
  { id: "peer-prog",      name: "Peer Programming",icon: Users,       emoji: "🏘️" },
  { id: "gdp",            name: "GDP",             icon: Globe,       emoji: "🗺️" },
  { id: "credits",        name: "ServiceCredits",  icon: Coins,       emoji: "⚙️" },
  { id: "workforce",      name: "Workforce",       icon: BarChart2,   emoji: "💼" },
  { id: "mood",           name: "Mood",            icon: Smile,       emoji: "😁" },
  { id: "skillshunt",     name: "SkillsHunt",      icon: Award,       emoji: "🎓" },
  { id: "levelup",        name: "LevelUp",         icon: Target,      emoji: "🎯" },
  { id: "what-works",     name: "What Works",      icon: ListChecks,  emoji: "🧰" },
];

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", borderLeft: `3px solid ${ink}`, paddingLeft: 8, marginBottom: 10, lineHeight: 1 }}>
      {children}
    </div>
  );
}

export function ComicDesktop() {
  const [section, setSection] = useState<"chat" | "apps">("chat");
  const [input, setInput] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [rating, setRating] = useState<Record<number, "up" | "down" | "flag" | "none">>({});

  const toggleLike = (id: number) => setLiked(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]);
  const rate = (id: number, v: "up" | "down" | "flag") => setRating(r => ({ ...r, [id]: r[id] === v ? "none" : v }));

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 64, background: rail, borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, paddingBottom: 14, gap: 6, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, background: surface, border: `2px solid ${ink}`, boxShadow: shadow, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, color: ink, marginBottom: 10, letterSpacing: "0.04em" }}>SH</div>
        {[{ Icon: MessageSquare, key: "chat" }, { Icon: Zap, key: "apps" }].map(({ Icon, key }) => (
          <button key={key} onClick={() => setSection(key as "chat" | "apps")} style={{ width: 40, height: 40, background: section === key ? `${ink}18` : "transparent", border: section === key ? `1.5px solid ${ink}` : `1.5px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: section === key ? ink : inkDim, boxShadow: section === key ? `2px 2px 0 ${ink}` : "none" }}>
            <Icon size={18} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 40, height: 40, background: "transparent", border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Bell size={16} /></button>
        <button style={{ width: 40, height: 40, background: "transparent", border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Settings size={16} /></button>
        <div style={{ width: 30, height: 30, background: surface, border: `1.5px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ink }}>S</div>
      </aside>

      {/* Sidebar */}
      <aside style={{ width: 220, background: surface, borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 14px 10px", borderBottom: `2px solid ${ink}`, backgroundImage: dotBg, backgroundSize: "8px 8px" }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", marginBottom: 4 }}>Survivor Hub</div>
          <div style={{ fontSize: 11, color: inkDim, lineHeight: 1.4 }}>Exit Their Economy · 4.9M members</div>
        </div>
        <div style={{ padding: "10px 8px 0", flexShrink: 0 }}>
          <div style={{ position: "relative", marginBottom: 10 }}>
            <Search size={12} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", color: inkDim }} />
            <input placeholder={section === "chat" ? "Search channels…" : "Search apps…"} style={{ width: "100%", padding: "6px 8px 6px 26px", background: bg, border: `1px solid ${inkDim}40`, fontSize: 12, color: cream, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 12px" }}>
          {section === "chat" ? (
            <div>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", color: inkDim, textTransform: "uppercase", padding: "6px 4px 4px", marginBottom: 2 }}>Channels</div>
              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 8px", background: `${ink}14`, border: `1.5px solid ${ink}`, boxShadow: `2px 2px 0 ${ink}`, cursor: "pointer" }}>
                <Hash size={13} style={{ color: ink, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: cream }}>community</span>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", color: inkDim, textTransform: "uppercase", padding: "6px 4px 4px", marginBottom: 2 }}>Apps</div>
              {MINI_APPS.map(({ id, name, icon: Icon, emoji }) => (
                <div key={id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", cursor: "pointer", borderLeft: `2px solid transparent`, marginLeft: 2, color: inkDim, fontSize: 12 }}>
                  <Icon size={13} style={{ flexShrink: 0 }} />
                  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
                  <span style={{ fontSize: 11 }}>{emoji}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: "10px 14px", borderTop: `2px solid ${ink}` }}>
          <div style={{ padding: "8px 10px", background: bg, border: `1.5px solid ${inkDim}50`, boxShadow: `2px 2px 0 ${inkDim}30` }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: ink, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>Exit Their Economy</div>
            <div style={{ fontSize: 10, color: inkDim }}>Invite only · 4.9M members</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Channel header */}
        <header style={{ height: 52, borderBottom: `2px solid ${ink}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 14, background: surface, flexShrink: 0 }}>
          <Hash size={15} color={ink} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: cream, letterSpacing: "0.06em", textTransform: "uppercase" }}>community</div>
            <div style={{ fontSize: 11, color: inkDim }}>4,912 online · Exit Their Economy</div>
          </div>
          <div style={{ padding: "3px 8px", background: bg, border: `1.5px solid ${ink}40`, fontSize: 9, fontWeight: 800, color: ink, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Economy</div>
        </header>

        {/* Hero strip */}
        <div style={{ margin: "16px 24px 0", padding: "16px 20px", background: bg, border: `2px solid ${ink}`, boxShadow: shadow, flexShrink: 0, backgroundImage: dotBg, backgroundSize: "8px 8px" }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", marginBottom: 6 }}>From Survivor to Thriver</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: cream, lineHeight: 1.3, letterSpacing: "0.02em" }}>Your network is active.</div>
              <div style={{ fontSize: 12, color: inkDim, marginTop: 4 }}>5 million survivors. One economy.</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[{ v: "4.9M", l: "Members" }, { v: "$247B", l: "GDP" }, { v: "127", l: "Nations" }].map(({ v, l }) => (
                <div key={l} style={{ textAlign: "center", padding: "8px 14px", background: surface, border: `1.5px solid ${ink}50`, boxShadow: `2px 2px 0 ${ink}28` }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: ink, letterSpacing: "-0.02em" }}>{v}</div>
                  <div style={{ fontSize: 9, color: inkDim, marginTop: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feed */}
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "14px 24px" }}>
          {STREAM.map((item) => {
            if (item.type === "announcement") {
              const ann = item as StreamAnn;
              return (
                <div key={ann.id} style={{ marginBottom: 12, padding: "16px 18px", background: ann.urgent ? `${accent}08` : `${ink}06`, border: `2px solid ${ann.urgent ? accent : ink + "50"}`, boxShadow: ann.urgent ? `3px 3px 0 ${accent}` : `2px 2px 0 ${ink}28` }}>
                  {ann.urgent && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginBottom: 8, padding: "2px 7px", background: `${accent}10`, border: `1px solid ${accent}`, fontSize: 9, fontWeight: 800, color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      <AlertCircle size={9} /> URGENT
                    </div>
                  )}
                  {ann.pinned && (
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                      <Pin size={10} style={{ color: ink }} />
                      <span style={{ fontSize: 10, color: ink, fontWeight: 700, letterSpacing: "0.06em" }}>PINNED</span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, background: surface, border: `2px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 900, color: ink, flexShrink: 0 }}>SH</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: cream, letterSpacing: "0.04em", textTransform: "uppercase" }}>Survivor Hub</span>
                      <span style={{ fontSize: 9, padding: "1px 5px", border: `1px solid ${ink}40`, color: ink, fontWeight: 700, letterSpacing: "0.08em" }}>OFFICIAL</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: cream, lineHeight: 1.6, marginBottom: ann.link ? 12 : 0 }}>{ann.body}</div>
                  {ann.link && (
                    <button style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 11px", background: surface, border: `1.5px solid ${ann.urgent ? accent : ink}`, boxShadow: `2px 2px 0 ${ann.urgent ? accent : ink}`, color: ann.urgent ? accent : ink, fontSize: 11, fontWeight: 700, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {ann.link} <ArrowUpRight size={11} />
                    </button>
                  )}
                </div>
              );
            }
            if (item.type === "ai_qa") {
              const qa = item as StreamQA;
              return (
                <div key={qa.id} style={{ marginBottom: 12, padding: "16px 18px", background: surface, border: `1.5px solid ${inkDim}60`, boxShadow: `2px 2px 0 ${inkDim}30` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, background: `${inkDim}14`, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Sparkles size={13} style={{ color: inkDim }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: cream, letterSpacing: "0.04em", textTransform: "uppercase" }}>AI Assistant</span>
                      <span style={{ fontSize: 9, padding: "1px 5px", border: `1px solid ${inkDim}50`, color: inkDim, fontWeight: 700, letterSpacing: "0.08em" }}>Q&A</span>
                    </div>
                    <span style={{ fontSize: 11, color: inkDim, marginLeft: "auto" }}>{qa.time}</span>
                  </div>
                  <div style={{ padding: "8px 12px", background: bg, border: `1.5px solid ${ink}28`, marginBottom: 10 }}>
                    <span style={{ color: ink, fontWeight: 800, fontSize: 11 }}>Q: </span>
                    <span style={{ fontSize: 12, color: inkDim }}>{qa.question}</span>
                  </div>
                  <div style={{ fontSize: 13, color: cream, lineHeight: 1.6 }}>
                    <span style={{ color: ink, fontWeight: 800, fontSize: 11 }}>A: </span>{qa.answer}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, paddingTop: 10, borderTop: `1.5px solid ${ink}20` }}>
                    <button onClick={() => rate(qa.id, "up")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 9px", background: surface, border: `1.5px solid ${rating[qa.id] === "up" ? "#22C55E" : inkDim + "40"}`, boxShadow: rating[qa.id] === "up" ? `2px 2px 0 #22C55E` : "none", color: rating[qa.id] === "up" ? "#22C55E" : inkDim, fontSize: 11, fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      <ThumbsUp size={11} /> Helpful
                    </button>
                    <button onClick={() => rate(qa.id, "down")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 9px", background: surface, border: `1.5px solid ${rating[qa.id] === "down" ? ink : inkDim + "40"}`, boxShadow: rating[qa.id] === "down" ? `2px 2px 0 ${ink}` : "none", color: rating[qa.id] === "down" ? cream : inkDim, fontSize: 11, fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      <ThumbsDown size={11} /> Not helpful
                    </button>
                    <button onClick={() => rate(qa.id, "flag")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 9px", background: "transparent", border: `1.5px solid ${rating[qa.id] === "flag" ? accent : "transparent"}`, color: rating[qa.id] === "flag" ? accent : inkDim + "70", fontSize: 11, cursor: "pointer", marginLeft: "auto" }}>
                      <Flag size={11} />
                    </button>
                  </div>
                </div>
              );
            }
            if (item.type === "ai_pending") {
              const pq = item as StreamPend;
              return (
                <div key={pq.id} style={{ marginBottom: 12, padding: "16px 18px", background: surface, border: `1.5px dashed ${inkDim}60` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, background: `${inkDim}14`, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Sparkles size={13} style={{ color: inkDim }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 800, color: cream, letterSpacing: "0.04em", textTransform: "uppercase" }}>AI Assistant</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 9, padding: "1px 5px", border: `1px solid ${inkDim}40`, color: inkDim, fontWeight: 700, letterSpacing: "0.08em" }}><ShieldCheck size={9} /> REVIEWING</span>
                  </div>
                  <div style={{ padding: "8px 12px", background: bg, border: `1.5px solid ${ink}20`, marginBottom: 10 }}>
                    <span style={{ color: ink, fontWeight: 800, fontSize: 11 }}>Q: </span>
                    <span style={{ fontSize: 12, color: inkDim }}>{pq.question}</span>
                  </div>
                  <div style={{ fontSize: 12, color: inkDim, lineHeight: 1.6 }}>AI Assistant is preparing an answer — a teammate is reviewing it for safety before it is posted.</div>
                </div>
              );
            }
            const post = item as StreamPost;
            return (
              <div key={post.id} style={{ marginBottom: 12, padding: "16px 18px", background: surface, border: `1.5px solid ${ink}40`, boxShadow: `2px 2px 0 ${ink}18` }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: `${post.authorColor}18`, border: `1.5px solid ${post.authorColor}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: post.authorColor, flexShrink: 0 }}>{post.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: cream, letterSpacing: "0.03em" }}>{post.author}</span>
                      <span style={{ fontSize: 11, color: inkDim }}>{post.time}</span>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: cream, lineHeight: 1.6, marginBottom: 12 }}>{post.body}</div>
                <div style={{ display: "flex", gap: 16, alignItems: "center", paddingTop: 10, borderTop: `1px solid ${ink}18` }}>
                  <button onClick={() => toggleLike(post.id)} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? accent : inkDim, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    <Heart size={13} fill={liked.includes(post.id) ? accent : "none"} /> {post.hearts + (liked.includes(post.id) ? 1 : 0)}
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: inkDim, fontSize: 12 }}><MessageCircle size={13} /> {post.replies}</button>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: inkDim, fontSize: 12 }}><Share2 size={13} /></button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Composer */}
        <div style={{ padding: "10px 24px 14px", borderTop: `2px solid ${ink}`, background: surface, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "2px 7px", background: bg, border: `1px solid ${inkDim}`, color: inkDim, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <AtSign size={10} /> COMIC
            </span>
            <span style={{ fontSize: 11, color: inkDim }}>Type <span style={{ color: ink, fontWeight: 700 }}>@comic</span> to ask the AI Assistant</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: bg, border: `2px solid ${ink}60`, boxShadow: `2px 2px 0 ${ink}40` }}>
            <Plus size={16} style={{ color: inkDim, flexShrink: 0 }} />
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Share with the community, or type @comic to ask…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: cream, fontFamily: "inherit" }} />
            <button style={{ width: 30, height: 30, background: input.trim() ? ink : surface, border: `1.5px solid ${input.trim() ? ink : inkDim + "60"}`, boxShadow: input.trim() ? `2px 2px 0 ${inkDim}` : "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
              <Send size={13} style={{ color: input.trim() ? bg : inkDim }} />
            </button>
          </div>
          <div style={{ textAlign: "center", fontSize: 10, color: inkDim + "60", marginTop: 6, letterSpacing: "0.06em" }}>a work of optimism · Survivor Hub</div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 260, borderLeft: `2px solid ${ink}`, background: surface, padding: "16px 14px", flexShrink: 0, overflowY: "auto" }}>
        <PanelLabel>Community</PanelLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
          {[
            { label: "Members",  value: "4.9M" },
            { label: "Online",   value: "4,912" },
            { label: "Nations",  value: "127" },
            { label: "Economy",  value: "$247B" },
          ].map(({ label, value }) => (
            <div key={label} style={{ padding: "10px", background: bg, border: `1.5px solid ${ink}40`, boxShadow: `2px 2px 0 ${ink}28`, textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: ink, letterSpacing: "-0.02em" }}>{value}</div>
              <div style={{ fontSize: 9, color: inkDim, marginTop: 3, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ padding: "12px 14px", background: bg, border: `2px solid ${ink}`, boxShadow: shadow }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: ink, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>GDP Progress</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: cream }}>$247B</span>
              <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 5px", border: `1px solid ${inkDim}40`, color: inkDim, letterSpacing: "0.08em" }}>ESTIMATE</span>
            </div>
            <div style={{ fontSize: 11, color: inkDim, marginBottom: 8 }}>Goal: $1T by 2030</div>
            <div style={{ height: 6, background: `${ink}18`, position: "relative" }}>
              <div style={{ height: "100%", width: "24.7%", background: ink }} />
            </div>
            <div style={{ fontSize: 10, color: inkDim, marginTop: 4 }}>24.7% of goal · Estimate</div>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <PanelLabel>Live on Chyme</PanelLabel>
          {[
            { title: "Survivor Stories: Rebuilding Together", host: "@amara-o", listeners: 128 },
            { title: "Service Credits 101", host: "@maria-g", listeners: 67 },
          ].map(room => (
            <div key={room.title} style={{ padding: "10px 12px", background: bg, border: `1.5px solid ${ink}50`, boxShadow: `2px 2px 0 ${ink}28`, marginBottom: 6, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                <div style={{ width: 5, height: 5, background: "#22C55E" }} />
                <span style={{ fontSize: 9, fontWeight: 800, color: ink, letterSpacing: "0.1em", textTransform: "uppercase" }}>LIVE · {room.listeners}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: cream, lineHeight: 1.4, marginBottom: 3 }}>{room.title}</div>
              <div style={{ fontSize: 10, color: inkDim }}>{room.host}</div>
            </div>
          ))}
        </div>

        <PanelLabel>Data & Privacy</PanelLabel>
        <div style={{ padding: "10px 12px", background: bg, border: `1.5px solid ${inkDim}50`, boxShadow: `2px 2px 0 ${inkDim}30`, marginBottom: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: inkDim, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>Your Data Rights</div>
          <div style={{ fontSize: 11, color: inkDim, lineHeight: 1.5 }}>Delete or export your data from any service at any time. Deletions are permanent.</div>
        </div>
        <button style={{ width: "100%", padding: "7px", background: surface, border: `1.5px solid ${inkDim}60`, boxShadow: `2px 2px 0 ${inkDim}40`, color: inkDim, fontSize: 10, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <ChevronRight size={12} /> Manage My Data
        </button>
      </aside>
    </div>
  );
}
