// design-sync
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Mic, Home, Car, BookOpen, Hammer, Users, Globe, Coins,
  BarChart2, Heart, Smile, Share2, Search, Send, Plus,
  ChevronRight, Sparkles, Radio, Bell, Settings, MessageSquare,
  Hash, Zap, ArrowUpRight, X, ShieldCheck, Eye, ChevronDown,
  Award, Target, MessageCircle, Bookmark, Pin, AlertCircle,
} from "lucide-react";
import { ChymeApp } from "./Chyme";

const MINI_APPS = [
  { id: "chyme", name: "Chyme", emoji: "🎙️", icon: Radio, desc: "Social audio rooms", color: "#22C55E", bg: "#052e16" },
  { id: "lighthouse", name: "LightHouse", emoji: "🏠", icon: Home, desc: "Safe housing marketplace", color: "#EAB308", bg: "#1c1407" },
  { id: "trusttransport", name: "TrustTransport", emoji: "📦", icon: Car, desc: "People & package delivery", color: "#F97316", bg: "#1c0a03" },
  { id: "directory", name: "Directory", emoji: "📇", icon: BookOpen, desc: "People & skills directory", color: "#3B82F6", bg: "#0c1a3d" },
  { id: "foundation", name: "Foundation", emoji: "🪛", icon: Hammer, desc: "Find skilled tradespeople", color: "#EF4444", bg: "#1c0505" },
  { id: "peer-programming", name: "Peer Programming", emoji: "🏘️", icon: Users, desc: "Weekly global masterminds", color: "#8B5CF6", bg: "#150d2e" },
  { id: "gdp", name: "Gross Domestic Product", emoji: "🗺️", icon: Globe, desc: "TI Skills Economy tracker", color: "#06B6D4", bg: "#011c26" },
  { id: "service-credits", name: "Service Credits", emoji: "⚙️", icon: Coins, desc: "Utility token ecosystem", color: "#F59E0B", bg: "#1c1200" },
  { id: "workforce", name: "Workforce", emoji: "💼", icon: BarChart2, desc: "Skills distribution & gaps", color: "#6366F1", bg: "#0e0f30" },
  { id: "gentlepulse", name: "GentlePulse", emoji: "💚", icon: Heart, desc: "Guided meditation", color: "#14B8A6", bg: "#011c1a" },
  { id: "mood", name: "Mood", emoji: "😁", icon: Smile, desc: "Anonymous mood check-ins", color: "#EC4899", bg: "#1c0416" },
  { id: "socketrelay", name: "SocketRelay", emoji: "🔂", icon: Share2, desc: "Mutual aid network", color: "#F43F5E", bg: "#1c0409" },
  { id: "skillshunt", name: "Skills Hunt", emoji: "🎓", icon: Award, desc: "Cohort learning & badges", color: "#A855F7", bg: "#1a0d2e" },
  { id: "levelup", name: "LevelUp", emoji: "🎯", icon: Target, desc: "Training cohort marketplace", color: "#22C55E", bg: "#052e16" },
];

const CHANNELS = [
  { name: "community", unread: 0 },
];

type StreamAnnouncement = {
  id: number; type: "announcement";
  author: string; avatar: string; time: string;
  pinned: boolean; urgent: boolean; body: string; link: string;
};
type StreamQA = {
  id: number; type: "ai_qa";
  question: string; askedBy: string; time: string; answer: string;
};
type StreamPost = {
  id: number; type: "community";
  author: string; avatar: string; authorColor: string; time: string;
  body: string; replies: number; hearts: number;
};
type StreamItem = StreamAnnouncement | StreamQA | StreamPost;

const STREAM: StreamItem[] = [
  {
    id: 1, type: "announcement",
    author: "Survivor Hub", avatar: "SH", time: "just now", pinned: true, urgent: false,
    body: "12 survivors housed in Houston this week via LightHouse — 4 slots still available for ServiceCredits holders. Apply before Friday.",
    link: "Open LightHouse →",
  },
  {
    id: 2, type: "community",
    author: "Amara O.", avatar: "AO", authorColor: "#22C55E", time: "18 min ago",
    body: "My 6-month journey from survivor to employed: Workforce showed my skill gaps, SkillsHunt helped me level up, Foundation got me my first verified gig. It's real. 🙌",
    replies: 14, hearts: 89,
  },
  {
    id: 3, type: "ai_qa",
    question: "How do I earn my first ServiceCredits?",
    askedBy: "Maria G.", time: "34 min ago",
    answer: "Fastest paths: complete a Foundation gig (15–45 credits), finish a SkillsHunt badge (10–30 credits), or fulfill a SocketRelay request (5–20 credits). Credits appear in your wallet instantly after verification.",
  },
  {
    id: 4, type: "announcement",
    author: "Survivor Hub", avatar: "SH", time: "1 hr ago", pinned: false, urgent: true,
    body: "⚠️ Safety notice: 47 emergency housing slots verified in Houston, TX. 12 accept ServiceCredits. Contact LightHouse directly — do not use third-party referrals.",
    link: "View Listings →",
  },
  {
    id: 5, type: "community",
    author: "James T.", avatar: "JT", authorColor: "#3B82F6", time: "2 hr ago",
    body: "ServiceCredits 101: earn through verified work (Foundation, SkillsHunt, SocketRelay), spend on housing (LightHouse) or transport (TrustTransport), trade peer-to-peer. Utility token, no fiat conversion.",
    replies: 9, hearts: 63,
  },
  {
    id: 6, type: "ai_qa",
    question: "Can I browse housing listings without an account?",
    askedBy: "David K.", time: "3 hr ago",
    answer: "Yes — LightHouse listings are publicly browsable. You need an account to contact hosts or pay with ServiceCredits.",
  },
];

export function Desktop() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [section, setSection] = useState<"chat" | "apps">("chat");
  const [liked, setLiked] = useState<number[]>([]);
  const [postMode, setPostMode] = useState<"post" | "ask">("post");

  const toggleLike = (id: number) => setLiked((l) => l.includes(id) ? l.filter((x) => x !== id) : [...l, id]);

  if (openApp === "chyme") {
    return <ChymeApp onClose={() => setOpenApp(null)} />;
  }

  const app = MINI_APPS.find((a) => a.id === openApp);
  if (openApp && app) {
    return (
      <div className="w-full flex flex-col" style={{ height: "100vh", maxHeight: "100%", overflow: "hidden", background: app.bg, fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${app.color}25`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "rgba(0,0,0,0.3)" }}>
          <button onClick={() => setOpenApp(null)} style={{ color: app.color, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
            <X size={16} /> Back
          </button>
          <div style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>{app.emoji} {app.name}</div>
          <Badge style={{ background: `${app.color}20`, color: app.color, border: `1px solid ${app.color}40`, fontSize: 11 }}>Live</Badge>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, color: "#9CA3AF" }}>
          <div style={{ fontSize: 40 }}>{app.emoji}</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F9FAFB" }}>{app.name}</div>
          <div style={{ fontSize: 15, color: "#6B7280" }}>{app.desc}</div>
          <div style={{ padding: "10px 20px", borderRadius: 10, background: `${app.color}18`, border: `1px solid ${app.color}35`, color: app.color, fontSize: 13 }}>Coming soon — real-time</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex" style={{ height: "100vh", maxHeight: "100%", overflow: "hidden", background: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#7C3AED 0%,#0EA5E9 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 12, flexShrink: 0 }}>SH</div>
        {[{ icon: MessageSquare, key: "chat" }, { icon: Zap, key: "apps" }].map(({ icon: Icon, key }) => (
          <button key={key} onClick={() => setSection(key as "chat" | "apps")} style={{ width: 44, height: 44, borderRadius: 12, background: section === key ? "rgba(124,58,237,0.2)" : "transparent", border: section === key ? "1px solid rgba(124,58,237,0.4)" : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: section === key ? "#A78BFA" : "#6B7280" }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><Settings size={18} /></button>
        <Avatar style={{ width: 36, height: 36, marginTop: 4 }}>
          <AvatarFallback style={{ background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", color: "#fff", fontSize: 14, fontWeight: 700 }}>S</AvatarFallback>
        </Avatar>
      </aside>

      {/* Second sidebar */}
      <aside style={{ width: 240, background: "#0D0F14", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#6B7280", textTransform: "uppercase", marginBottom: 12 }}>
            {section === "chat" ? "Channels" : "Mini-Apps"}
          </div>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
            <input placeholder={section === "chat" ? "Search channels…" : "Search apps…"} style={{ width: "100%", padding: "7px 10px 7px 30px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, fontSize: 13, color: "#9CA3AF", outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>
        <ScrollArea style={{ flex: 1 }}>
          {section === "chat" ? (
            <div style={{ padding: "0 8px 16px" }}>
              {CHANNELS.map((ch) => (
                <div key={ch.name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, cursor: "pointer", background: ch.name === "community" ? "rgba(124,58,237,0.12)" : "transparent" }}>
                  <Hash size={15} style={{ color: ch.unread > 0 ? "#9CA3AF" : "#4B5563", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: ch.unread > 0 || ch.name === "community" ? "#E8EAF0" : "#6B7280", flex: 1 }}>{ch.name}</span>
                  {ch.unread > 0 && <span style={{ background: "#7C3AED", borderRadius: 10, fontSize: 11, fontWeight: 700, color: "#fff", padding: "1px 6px" }}>{ch.unread}</span>}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: "0 8px 16px" }}>
              {MINI_APPS.map((app) => {
                const Icon = app.icon;
                return (
                  <div key={app.id} onClick={() => setActiveApp(app.id === activeApp ? null : app.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, cursor: "pointer", background: activeApp === app.id ? `${app.color}18` : "transparent", borderLeft: activeApp === app.id ? `2px solid ${app.color}` : "2px solid transparent", marginLeft: 2 }}>
                    <Icon size={15} style={{ color: activeApp === app.id ? app.color : "#6B7280", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: activeApp === app.id ? "#E8EAF0" : "#9CA3AF", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.name}</span>
                    <span style={{ fontSize: 12 }}>{app.emoji}</span>
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
        <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ padding: "10px 12px", borderRadius: 10, background: "linear-gradient(135deg,rgba(124,58,237,0.15) 0%,rgba(14,165,233,0.15) 100%)", border: "1px solid rgba(124,58,237,0.25)", cursor: "pointer" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#A78BFA", marginBottom: 2 }}>Exit Their Economy · Invite Only</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>4.9M survivors worldwide</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#E8EAF0" }}>{section === "chat" ? "# community" : activeApp ? MINI_APPS.find((a) => a.id === activeApp)?.name : "All Mini-Apps"}</div>
            <div style={{ fontSize: 12, color: "#6B7280" }}>{section === "chat" ? "Community · 4,912 online" : "Your peer-to-peer marketplace"}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.25)", fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>Our Economy</Badge>
          </div>
        </header>

        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
            {section === "chat" ? (
              <>
                <div style={{ margin: "20px 24px 0", padding: "20px 24px", borderRadius: 16, background: "linear-gradient(135deg,rgba(124,58,237,0.2) 0%,rgba(14,165,233,0.1) 50%,rgba(16,185,129,0.1) 100%)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <Sparkles size={16} style={{ color: "#A78BFA" }} />
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#A78BFA", textTransform: "uppercase" }}>From Survivor to Thriver</span>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", lineHeight: 1.3 }}>Good morning — your network is active.</div>
                    <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 4 }}>5 million survivors. One economy. $300B opportunity.</div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ v: "4.9M", l: "Members", c: "#A78BFA" }, { v: "$247B", l: "GDP", c: "#38BDF8" }, { v: "127", l: "Countries", c: "#34D399" }].map(({ v, l, c }) => (
                      <div key={l} style={{ textAlign: "center", background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "10px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: c }}>{v}</div>
                        <div style={{ fontSize: 11, color: "#6B7280" }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <ScrollArea style={{ flex: 1, padding: "16px 24px" }}>
                  {STREAM.map((item) => {
                    if (item.type === "announcement") {
                      const ann = item as StreamAnnouncement;
                      return (
                        <div key={ann.id} style={{ marginBottom: 16, padding: "20px", borderRadius: 16, background: ann.urgent ? "rgba(239,68,68,0.04)" : "rgba(124,58,237,0.05)", border: `1px solid ${ann.urgent ? "rgba(239,68,68,0.25)" : "rgba(124,58,237,0.22)"}`, position: "relative" }}>
                          {ann.pinned && (
                            <div style={{ position: "absolute", top: 16, right: 16, display: "flex", alignItems: "center", gap: 4 }}>
                              <Pin size={12} style={{ color: "#A78BFA" }} />
                              <span style={{ fontSize: 11, color: "#A78BFA", fontWeight: 600 }}>Pinned</span>
                            </div>
                          )}
                          {ann.urgent && (
                            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, padding: "5px 10px", borderRadius: 6, background: "#EF444415", border: "1px solid #EF444330", width: "fit-content" }}>
                              <AlertCircle size={11} style={{ color: "#EF4444" }} />
                              <span style={{ fontSize: 11, fontWeight: 700, color: "#EF4444" }}>URGENT</span>
                            </div>
                          )}
                          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", flexShrink: 0 }}>SH</div>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: 14, fontWeight: 700, color: "#F9FAFB" }}>Survivor Hub</span>
                                <Badge style={{ background: "rgba(124,58,237,0.18)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.32)", fontSize: 10, padding: "2px 7px", borderRadius: 4 }}>📣 Official</Badge>
                              </div>
                              <div style={{ fontSize: 12, color: "#4B5563" }}>{ann.time}</div>
                            </div>
                          </div>
                          <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.7, marginBottom: 14 }}>{ann.body}</div>
                          {ann.link && (
                            <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#A78BFA", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                              {ann.link} <ArrowUpRight size={13} />
                            </button>
                          )}
                        </div>
                      );
                    }
                    if (item.type === "ai_qa") {
                      const qa = item as StreamQA;
                      return (
                        <div key={qa.id} style={{ marginBottom: 16, padding: "20px", borderRadius: 16, background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.18)" }}>
                          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <Sparkles size={18} style={{ color: "#38BDF8" }} />
                            </div>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: 14, fontWeight: 700, color: "#F9FAFB" }}>AI Assistant</span>
                                <Badge style={{ background: "rgba(14,165,233,0.12)", color: "#38BDF8", border: "1px solid rgba(14,165,233,0.28)", fontSize: 10, padding: "2px 7px", borderRadius: 4 }}>🤖 AI Q&A</Badge>
                              </div>
                              <div style={{ fontSize: 12, color: "#4B5563" }}>Asked by {qa.askedBy} · {qa.time}</div>
                            </div>
                          </div>
                          <div style={{ marginBottom: 10, padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <span style={{ fontSize: 12, color: "#38BDF8", fontWeight: 600 }}>Q: </span>
                            <span style={{ fontSize: 14, color: "#9CA3AF" }}>{qa.question}</span>
                          </div>
                          <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.7 }}>
                            <span style={{ fontSize: 12, color: "#38BDF8", fontWeight: 600 }}>A: </span>
                            {qa.answer}
                          </div>
                        </div>
                      );
                    }
                    const post = item as StreamPost;
                    return (
                      <div key={post.id} style={{ marginBottom: 16, padding: "20px", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                          <div style={{ width: 40, height: 40, borderRadius: 12, background: `${post.authorColor}22`, border: `1px solid ${post.authorColor}38`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: post.authorColor, flexShrink: 0 }}>{post.avatar}</div>
                          <div>
                            <span style={{ fontSize: 14, fontWeight: 700, color: "#F9FAFB" }}>{post.author}</span>
                            <div style={{ fontSize: 12, color: "#4B5563" }}>{post.time}</div>
                          </div>
                        </div>
                        <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.7, marginBottom: 14 }}>{post.body}</div>
                        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                          <button onClick={() => toggleLike(post.id)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? "#EC4899" : "#6B7280", fontSize: 13 }}>
                            <Heart size={15} fill={liked.includes(post.id) ? "#EC4899" : "none"} /> {post.hearts + (liked.includes(post.id) ? 1 : 0)}
                          </button>
                          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#6B7280", fontSize: 13 }}>
                            <MessageCircle size={15} /> {post.replies}
                          </button>
                          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#6B7280", fontSize: 13 }}>
                            <Share2 size={15} /> Share
                          </button>
                          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#6B7280", fontSize: 13, marginLeft: "auto" }}>
                            <Bookmark size={15} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </ScrollArea>

                <div style={{ padding: "8px 24px 20px" }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                    {(["post", "ask"] as const).map((mode) => (
                      <button key={mode} onClick={() => setPostMode(mode)} style={{ padding: "5px 14px", borderRadius: 20, background: postMode === mode ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.04)", border: postMode === mode ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(255,255,255,0.08)", color: postMode === mode ? "#A78BFA" : "#6B7280", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        {mode === "post" ? "Post to community" : "Ask the assistant"}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14 }}>
                    <Plus size={18} style={{ color: "#4B5563", cursor: "pointer", flexShrink: 0 }} />
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={postMode === "post" ? "Share something with the community…" : "Ask the AI assistant anything…"} style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "#E8EAF0" }} />
                    <button style={{ width: 32, height: 32, borderRadius: 8, background: input.trim() ? "linear-gradient(135deg,#7C3AED 0%,#0EA5E9 100%)" : "rgba(255,255,255,0.06)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                      <Send size={14} style={{ color: input.trim() ? "#fff" : "#4B5563" }} />
                    </button>
                  </div>
                  <div style={{ textAlign: "center", fontSize: 11, color: "#374151", marginTop: 8 }}>a work of optimism · Survivor Hub</div>
                </div>
              </>
            ) : (
              <ScrollArea style={{ flex: 1 }}>
                <div style={{ padding: "24px" }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>All Mini-Apps</div>
                    <div style={{ fontSize: 14, color: "#6B7280" }}>Your complete peer-to-peer marketplace — from survivor to thriver</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                    {MINI_APPS.map((app) => {
                      const Icon = app.icon;
                      return (
                        <div key={app.id} style={{ padding: "18px 20px", borderRadius: 14, background: activeApp === app.id ? `${app.color}18` : `${app.bg}88`, border: `1px solid ${activeApp === app.id ? app.color + "50" : app.color + "20"}`, cursor: "pointer", transition: "all 0.15s" }} onClick={() => setActiveApp(app.id === activeApp ? null : app.id)}>
                          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: `${app.color}20`, border: `1px solid ${app.color}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Icon size={20} style={{ color: app.color }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                              <Badge style={{ background: `${app.color}15`, color: app.color, border: `1px solid ${app.color}30`, fontSize: 10, padding: "2px 8px", borderRadius: 20 }}>Live</Badge>
                            </div>
                          </div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: "#F9FAFB", marginBottom: 4 }}>{app.emoji} {app.name}</div>
                          <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 14 }}>{app.desc}</div>
                          <button onClick={(e) => { e.stopPropagation(); setOpenApp(app.id); }} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, background: `${app.color}15`, border: `1px solid ${app.color}35`, color: app.color, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                            Open App <ChevronRight size={12} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollArea>
            )}
          </div>

          {/* Right panel */}
          <aside style={{ width: 280, borderLeft: "1px solid rgba(255,255,255,0.06)", background: "#0D0F14", display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "20px 16px", flex: 1, overflowY: "auto", minHeight: 0 }}>
              <div style={{ padding: "16px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 16, textAlign: "center" }}>
                <Avatar style={{ width: 56, height: 56, margin: "0 auto 10px" }}>
                  <AvatarFallback style={{ background: "linear-gradient(135deg,#7C3AED 0%,#0EA5E9 100%)", color: "#fff", fontSize: 22, fontWeight: 800 }}>S</AvatarFallback>
                </Avatar>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#F9FAFB", marginBottom: 4 }}>Welcome, Survivor</div>
                <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 10 }}>Member since 2024</div>
                <Badge style={{ background: "rgba(124,58,237,0.15)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.25)", fontSize: 11, padding: "4px 12px", borderRadius: 20 }}>Verified Member</Badge>
              </div>

              {/* Trust widget — EMPTY STATE (new members with no activity yet) */}
              {/* See Trust.tsx for the verified/populated state side-by-side reference */}
              <div style={{ borderRadius: 12, background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.18)", marginBottom: 16, overflow: "hidden" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px 10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <ShieldCheck size={14} style={{ color: "#0EA5E9" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.06em", textTransform: "uppercase" }}>Trust</span>
                  </div>
                  <Badge style={{ background: "rgba(255,255,255,0.05)", color: "#6B7280", border: "1px solid rgba(255,255,255,0.08)", fontSize: 10, padding: "2px 8px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}>
                    <ShieldCheck size={9} /> Unverified
                  </Badge>
                </div>

                {/* Empty body */}
                <div style={{ padding: "4px 14px 14px" }}>
                  {/* Visual placeholder */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px dashed rgba(14,165,233,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                      <ShieldCheck size={20} style={{ color: "rgba(14,165,233,0.4)" }} />
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF", marginBottom: 4 }}>No trust signals yet</div>
                    <div style={{ fontSize: 11, color: "#4B5563", textAlign: "center", lineHeight: 1.5 }}>
                      Trust signals appear as you participate in the community
                    </div>
                  </div>

                  {/* Steps to earn trust — all unchecked */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                    {["Complete your profile", "Make your first transaction", "Use at least one app"].map((label) => (
                      <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 9px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.12)", flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: "#6B7280" }}>{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button style={{ width: "100%", background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)", borderRadius: 8, padding: "8px 0", fontSize: 12, fontWeight: 600, color: "#38BDF8", cursor: "pointer" }}>
                    Request Verification
                  </button>

                  {/* Visibility — user-controlled even when empty */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0 0", marginTop: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Eye size={11} style={{ color: "#4B5563" }} />
                      <span style={{ fontSize: 11, color: "#4B5563" }}>Visible to: Public</span>
                    </div>
                    <ChevronDown size={11} style={{ color: "#4B5563" }} />
                  </div>
                </div>
              </div>

              <div style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "#C4B5FD", lineHeight: 1.6, fontStyle: "italic", marginBottom: 8 }}>"You are not what happened to you. You are what you choose to become."</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>— Unattributed</div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>Active Apps</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {MINI_APPS.slice(0, 5).map((app) => {
                    const Icon = app.icon;
                    return (
                      <div key={app.id} onClick={() => setOpenApp(app.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.02)", cursor: "pointer", border: `1px solid ${app.color}15` }}>
                        <Icon size={14} style={{ color: app.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "#9CA3AF", flex: 1 }}>{app.name}</span>
                        <span style={{ fontSize: 10, color: app.color }}>{app.emoji}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.12)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Globe size={14} style={{ color: "#06B6D4" }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#22D3EE" }}>GDP Progress</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", marginBottom: 2 }}>$247B</div>
                <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 10 }}>of $300B opportunity</div>
                <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "82%", borderRadius: 3, background: "linear-gradient(90deg,#06B6D4 0%,#7C3AED 100%)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontSize: 11, color: "#4B5563" }}>82% to goal</span>
                  <span style={{ fontSize: 11, color: "#22D3EE" }}>$53B remaining</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
