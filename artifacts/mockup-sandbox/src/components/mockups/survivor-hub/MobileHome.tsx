// design-sync
// D8 DECISION — canonical feed-mobile layout.
// FeedAnnouncements has no standalone mobile shell. The #community stream
// rendered here IS the authoritative mobile feed view. No MobileFeed.tsx needed.
// D11 DECISION — authoritative home-mobile layout.
// MobileHome.tsx (bottom tab bar + mini-app grid + feed stream) is the canonical
// mobile home. The web hamburger-drawer / Chat+Apps top-tab approach is NOT the
// mobile target; the app should replace it with this layout.
// Canonical hub bottom-tab set (D10): Chat / Apps / Chyme / Alerts / Settings
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Mic, Home, Car, BookOpen, Hammer, Users, Globe, Coins,
  BarChart2, Heart, Smile, Share2, Search, Send, Radio,
  Bell, Settings, MessageSquare, Zap, ChevronRight, Sparkles,
  Hash, ArrowUpRight, Plus, Award, Target,
  MessageCircle, Pin, AlertCircle,
  ThumbsUp, ThumbsDown, Flag, AtSign, ShieldCheck, ListChecks,
} from "lucide-react";

const MINI_APPS = [
  { id: "chyme", name: "Chyme", emoji: "🎙️", icon: Radio, color: "#22C55E" },
  { id: "lighthouse", name: "LightHouse", emoji: "🏠", icon: Home, color: "#60A5FA" },
  { id: "trusttransport", name: "TrustTransport", emoji: "📦", icon: Car, color: "#38BDF8" },
  { id: "directory", name: "Directory", emoji: "📇", icon: BookOpen, color: "#93C5FD" },
  { id: "foundation", name: "Foundation", emoji: "🪛", icon: Hammer, color: "#F59E0B" },
  { id: "peer-programming", name: "Peer Programming", emoji: "🏘️", icon: Users, color: "#6EE7B7" },
  { id: "gdp", name: "GDP", emoji: "🗺️", icon: Globe, color: "#06B6D4" },
  { id: "service-credits", name: "Credits", emoji: "⚙️", icon: Coins, color: "#A855F7" },
  { id: "workforce", name: "Workforce", emoji: "💼", icon: BarChart2, color: "#F97316" },
  { id: "gentlepulse", name: "GentlePulse", emoji: "💚", icon: Heart, color: "#34D399" },
  { id: "mood", name: "Mood", emoji: "😁", icon: Smile, color: "#4ADE80" },
  { id: "socketrelay", name: "SocketRelay", emoji: "🔂", icon: Share2, color: "#FB923C" },
  { id: "skillshunt", name: "Skills Hunt", emoji: "🎓", icon: Award, color: "#FBBF24" },
  { id: "levelup", name: "LevelUp", emoji: "🎯", icon: Target, color: "#10B981" },
  { id: "what-works", name: "What Works", emoji: "🧰", icon: ListChecks, color: "#84CC16" },
];

const LIVE_ROOMS = [
  { title: "Survivor Stories: Rebuilding Together", host: "@amara-o", listeners: 128, color: "#22C55E" },
  { title: "Service Credits 101", host: "@maria-g", listeners: 67, color: "#22C55E" },
];

type StreamAnnouncement = {
  id: number; type: "announcement";
  time: string; pinned: boolean; urgent: boolean; body: string; link?: string;
};
type StreamQA = {
  id: number; type: "ai_qa";
  question: string; askedBy: string; time: string; answer: string;
};
type StreamPending = {
  id: number; type: "ai_pending";
  question: string; askedBy: string; time: string;
};
type StreamPost = {
  id: number; type: "community";
  author: string; avatar: string; authorColor: string; time: string;
  body: string; replies: number; hearts: number;
};
type StreamItem = StreamAnnouncement | StreamQA | StreamPending | StreamPost;

const STREAM: StreamItem[] = [
  {
    id: 1, type: "announcement",
    time: "just now", pinned: true, urgent: false,
    body: "12 survivors housed in Houston this week via LightHouse — 4 slots still open for ServiceCredits holders.",
    link: "Open LightHouse →",
  },
  {
    id: 7, type: "ai_pending",
    question: "Is it safe to share my exact address with a host before I arrive?",
    askedBy: "You", time: "just now",
  },
  {
    id: 2, type: "community",
    author: "@amara-o", avatar: "AO", authorColor: "#22C55E", time: "18 min",
    body: "Six months ago I had nothing. Workforce showed my gaps, SkillsHunt leveled me up, Foundation got me my first gig. It's real. 🙌",
    replies: 14, hearts: 89,
  },
  {
    id: 3, type: "ai_qa",
    question: "How do I earn my first ServiceCredits?",
    askedBy: "@maria-g", time: "34 min",
    answer: "Fastest: Foundation gig (15–45 credits), SkillsHunt badge (10–30 credits), or SocketRelay request (5–20 credits).",
  },
  {
    id: 4, type: "announcement",
    time: "1 hr", pinned: false, urgent: true,
    body: "⚠️ 47 emergency housing slots verified in Houston, TX. 12 accept ServiceCredits. Contact LightHouse directly.",
    link: "View Listings →",
  },
  {
    id: 5, type: "community",
    author: "@james-t", avatar: "JT", authorColor: "#3B82F6", time: "2 hr",
    body: "ServiceCredits 101: earn through Foundation / SkillsHunt / SocketRelay, spend on housing or transport, trade peer-to-peer.",
    replies: 9, hearts: 63,
  },
];

const NAV = [
  { icon: MessageSquare, label: "Chat", key: "chat" },
  { icon: Zap, label: "Apps", key: "apps" },
  { icon: Radio, label: "Chyme", key: "chyme" },
  { icon: Bell, label: "Alerts", key: "alerts" },
  { icon: Settings, label: "Settings", key: "settings" },
];

export function MobileHome() {
  const [activeNav, setActiveNav] = useState("chat");
  const [input, setInput] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [rating, setRating] = useState<Record<number, "up" | "down" | "flag" | "none">>({});

  const toggleLike = (id: number) => setLiked((l) => l.includes(id) ? l.filter((x) => x !== id) : [...l, id]);
  const rate = (id: number, v: "up" | "down" | "flag") => setRating((r) => ({ ...r, [id]: r[id] === v ? "none" : v }));

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: "var(--comic-bg, #0F1117)", fontFamily: "'Inter', system-ui, sans-serif", color: "var(--comic-text-primary, #E8EAF0)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--comic-text-primary, #E8EAF0)" }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF" }}>
          <div style={{ fontSize: 12 }}>•••</div>
          <div style={{ fontSize: 12 }}>WiFi</div>
          <div style={{ fontSize: 12 }}>100%</div>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 20px 10px", background: "var(--comic-surface-alt, #090B0F)", borderBottom: "1px solid var(--comic-border-faint, rgba(255,255,255,0.06))", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff" }}>SH</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--comic-text-primary, #F9FAFB)" }}>Survivor Hub</div>
              <div style={{ fontSize: 11, color: "#22C55E" }}>Exit Their Economy · 4.9M members</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Search size={16} style={{ color: "var(--comic-text-secondary, #6B7280)" }} />
            </button>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Bell size={16} style={{ color: "var(--comic-text-secondary, #6B7280)" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {activeNav === "chat" && (
          <>
            {/* Hero */}
            <div style={{ margin: "12px 16px 0", padding: "16px", borderRadius: 16, background: "linear-gradient(135deg,rgba(124,58,237,0.25) 0%,rgba(14,165,233,0.15) 100%)", border: "1px solid rgba(124,58,237,0.2)", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <Sparkles size={13} style={{ color: "#A78BFA" }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#A78BFA", textTransform: "uppercase" }}>From Survivor to Thriver</span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "var(--comic-text-primary, #F9FAFB)", marginBottom: 8 }}>Your network is active. 🌍</div>
              <div style={{ display: "flex", gap: 8 }}>
                {[{ v: "4.9M", l: "Members", c: "#A78BFA" }, { v: "$247B", l: "GDP", c: "#38BDF8" }, { v: "127", l: "Nations", c: "#34D399" }].map(({ v, l, c }) => (
                  <div key={l} style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "8px 4px" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: c }}>{v}</div>
                    <div style={{ fontSize: 10, color: "var(--comic-text-secondary, #6B7280)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live rooms strip */}
            <div style={{ padding: "14px 16px 0", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.08em" }}>🔴 Live on Chyme</div>
                <span style={{ fontSize: 12, color: "#22C55E", cursor: "pointer" }}>See all</span>
              </div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
                {LIVE_ROOMS.map((room) => (
                  <div key={room.title} style={{ minWidth: 200, padding: "12px", borderRadius: 12, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E" }} />
                      <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 600 }}>LIVE · {room.listeners}</span>
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#F0FDF4", marginBottom: 4, lineHeight: 1.4 }}>{room.title}</div>
                    <div style={{ fontSize: 11, color: "#4B5563" }}>{room.host}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blended community stream */}
            <ScrollArea style={{ flex: 1, padding: "12px 16px 0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {STREAM.map((item) => {
                  if (item.type === "announcement") {
                    const ann = item as StreamAnnouncement;
                    return (
                      <div key={ann.id} style={{ padding: "14px", borderRadius: 14, background: ann.urgent ? "rgba(239,68,68,0.05)" : "rgba(124,58,237,0.07)", border: `1px solid ${ann.urgent ? "rgba(239,68,68,0.25)" : "rgba(124,58,237,0.22)"}` }}>
                        {ann.pinned && (
                          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                            <Pin size={10} style={{ color: "#A78BFA" }} />
                            <span style={{ fontSize: 10, color: "#A78BFA", fontWeight: 600 }}>Pinned announcement</span>
                          </div>
                        )}
                        {ann.urgent && (
                          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8, padding: "3px 8px", borderRadius: 5, background: "#EF444415", border: "1px solid #EF444330", width: "fit-content" }}>
                            <AlertCircle size={10} style={{ color: "#EF4444" }} />
                            <span style={{ fontSize: 10, fontWeight: 700, color: "#EF4444" }}>URGENT</span>
                          </div>
                        )}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "#fff", flexShrink: 0 }}>SH</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--comic-text-primary, #F9FAFB)" }}>Survivor Hub</span>
                            <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 3, background: "rgba(124,58,237,0.2)", color: "#A78BFA", fontWeight: 600 }}>📣 Official</span>
                          </div>
                        </div>
                        <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.6, marginBottom: ann.link ? 10 : 0 }}>{ann.body}</div>
                        {ann.link && (
                          <button style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 7, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#A78BFA", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{ann.link} <ArrowUpRight size={11} /></button>
                        )}
                      </div>
                    );
                  }
                  if (item.type === "ai_qa") {
                    const qa = item as StreamQA;
                    return (
                      <div key={qa.id} style={{ padding: "14px", borderRadius: 14, background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.16)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Sparkles size={14} style={{ color: "#38BDF8" }} />
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--comic-text-primary, #F9FAFB)" }}>AI Assistant</span>
                            <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 3, background: "rgba(14,165,233,0.12)", color: "#38BDF8", fontWeight: 600 }}>🤖 Q&A</span>
                          </div>
                          <span style={{ fontSize: 11, color: "#4B5563", marginLeft: "auto" }}>{qa.time}</span>
                        </div>
                        <div style={{ padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", marginBottom: 8, fontSize: 12, color: "#9CA3AF" }}>
                          <span style={{ color: "#38BDF8", fontWeight: 600 }}>Q: </span>{qa.question}
                        </div>
                        <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.6 }}>
                          <span style={{ color: "#38BDF8", fontWeight: 600, fontSize: 12 }}>A: </span>{qa.answer}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(14,165,233,0.12)" }}>
                          <button onClick={() => rate(qa.id, "up")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 6, background: rating[qa.id] === "up" ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${rating[qa.id] === "up" ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.08)"}`, color: rating[qa.id] === "up" ? "#4ADE80" : "var(--comic-text-secondary, #6B7280)", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
                            <ThumbsUp size={12} /> Helpful
                          </button>
                          <button onClick={() => rate(qa.id, "down")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 6, background: rating[qa.id] === "down" ? "rgba(148,163,184,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${rating[qa.id] === "down" ? "rgba(148,163,184,0.4)" : "rgba(255,255,255,0.08)"}`, color: rating[qa.id] === "down" ? "#CBD5E1" : "var(--comic-text-secondary, #6B7280)", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
                            <ThumbsDown size={12} /> Not helpful
                          </button>
                          <button onClick={() => rate(qa.id, "flag")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 6, background: rating[qa.id] === "flag" ? "rgba(239,68,68,0.12)" : "transparent", border: `1px solid ${rating[qa.id] === "flag" ? "rgba(239,68,68,0.35)" : "transparent"}`, color: rating[qa.id] === "flag" ? "#F87171" : "#4B5563", fontSize: 11, fontWeight: 600, cursor: "pointer", marginLeft: "auto" }}>
                            <Flag size={11} />
                          </button>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "ai_pending") {
                    const pq = item as StreamPending;
                    return (
                      <div key={pq.id} style={{ padding: "14px", borderRadius: 14, background: "rgba(14,165,233,0.03)", border: "1px dashed rgba(14,165,233,0.3)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Sparkles size={14} style={{ color: "#38BDF8" }} />
                          </div>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--comic-text-primary, #F9FAFB)" }}>AI Assistant</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 10, padding: "1px 5px", borderRadius: 3, background: "rgba(14,165,233,0.1)", color: "#7DD3FC", fontWeight: 600 }}><ShieldCheck size={9} /> Reviewing</span>
                        </div>
                        <div style={{ padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", marginBottom: 8, fontSize: 12, color: "#9CA3AF" }}>
                          <span style={{ color: "#38BDF8", fontWeight: 600 }}>Q: </span>{pq.question}
                        </div>
                        <div style={{ fontSize: 12, color: "#7DD3FC", lineHeight: 1.6 }}>AI Assistant is preparing an answer — a teammate is reviewing it for safety before it's posted.</div>
                      </div>
                    );
                  }
                  const post = item as StreamPost;
                  return (
                    <div key={post.id} style={{ padding: "14px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                        <Avatar style={{ width: 32, height: 32 }}>
                          <AvatarFallback style={{ background: `${post.authorColor}22`, color: post.authorColor, fontSize: 12, fontWeight: 800 }}>{post.avatar}</AvatarFallback>
                        </Avatar>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--comic-text-primary, #F9FAFB)" }}>{post.author}</div>
                          <div style={{ fontSize: 11, color: "#4B5563" }}>{post.time} ago</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.6, marginBottom: 10 }}>{post.body}</div>
                      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                        <button onClick={() => toggleLike(post.id)} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? "#EC4899" : "var(--comic-text-secondary, #6B7280)", fontSize: 13 }}>
                          <Heart size={14} fill={liked.includes(post.id) ? "#EC4899" : "none"} /> {post.hearts + (liked.includes(post.id) ? 1 : 0)}
                        </button>
                        <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "var(--comic-text-secondary, #6B7280)", fontSize: 13 }}><MessageCircle size={14} /> {post.replies}</button>
                        <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "var(--comic-text-secondary, #6B7280)", fontSize: 13 }}><Share2 size={14} /></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            {/* Composer — community + @comic */}
            <div style={{ padding: "8px 16px 12px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "2px 7px", borderRadius: 6, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.3)", color: "#38BDF8", fontSize: 11, fontWeight: 700 }}>
                  <AtSign size={11} /> comic
                </span>
                <span style={{ fontSize: 11, color: "var(--comic-text-secondary, #6B7280)" }}>Type <span style={{ color: "#38BDF8", fontWeight: 600 }}>@comic</span> to ask the AI Assistant</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14 }}>
                <Plus size={16} style={{ color: "#4B5563", flexShrink: 0 }} />
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Share, or type @comic to ask…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "var(--comic-text-primary, #E8EAF0)" }} />
                <button style={{ width: 30, height: 30, borderRadius: 8, background: input.trim() ? "linear-gradient(135deg,#7C3AED,#0EA5E9)" : "rgba(255,255,255,0.06)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                  <Send size={13} style={{ color: input.trim() ? "#fff" : "#4B5563" }} />
                </button>
              </div>
            </div>
          </>
        )}

        {activeNav === "apps" && (
          <ScrollArea style={{ flex: 1, padding: "16px" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--comic-text-primary, #F9FAFB)", marginBottom: 4 }}>Apps</div>
            <div style={{ fontSize: 13, color: "var(--comic-text-secondary, #6B7280)", marginBottom: 16 }}>Tap to launch</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {MINI_APPS.map((app) => {
                const Icon = app.icon;
                return (
                  <div key={app.id} style={{ padding: "16px 12px", borderRadius: 14, background: `${app.color}10`, border: `1px solid ${app.color}25`, cursor: "pointer", textAlign: "center" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${app.color}20`, border: `1px solid ${app.color}35`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                      <Icon size={22} style={{ color: app.color }} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--comic-text-primary, #E8EAF0)", marginBottom: 2 }}>{app.name}</div>
                    <div style={{ fontSize: 14 }}>{app.emoji}</div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        )}

        {activeNav !== "chat" && activeNav !== "apps" && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#4B5563", fontSize: 14 }}>
            {activeNav.charAt(0).toUpperCase() + activeNav.slice(1)} — nothing here yet
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "var(--comic-surface-alt, #090B0F)", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px", flexShrink: 0 }}>
        {NAV.map(({ icon: Icon, label, key }) => (
          <button key={key} onClick={() => setActiveNav(key)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, padding: "8px 4px", background: "transparent", border: "none", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: activeNav === key ? "rgba(124,58,237,0.2)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={20} style={{ color: activeNav === key ? "#A78BFA" : "var(--comic-text-secondary, #6B7280)" }} />
            </div>
            <span style={{ fontSize: 10, color: activeNav === key ? "#A78BFA" : "#4B5563", fontWeight: activeNav === key ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
