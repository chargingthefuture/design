// design-sync
// Hub Community Channel — single blended stream (Announcements + AI Q&A + Peer posts)
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell, Send, Plus, Search, Heart, MessageCircle,
  Share2, Bookmark, Pin, AlertCircle, Sparkles,
  Hash, Settings, ArrowUpRight, ShieldCheck,
} from "lucide-react";

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

export function FeedAnnouncements({ initialEmpty = false }: { initialEmpty?: boolean } = {}) {
  const [input, setInput] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [emptyMode, setEmptyMode] = useState(initialEmpty);
  const [postMode, setPostMode] = useState<"post" | "ask">("post");

  const toggleLike = (id: number) => setLiked((l) => l.includes(id) ? l.filter((x) => x !== id) : [...l, id]);

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "100vh", background: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#7C3AED 0%,#0EA5E9 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#A78BFA" }}>
          <Hash size={20} />
        </button>
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><Settings size={18} /></button>
        <Avatar style={{ width: 36, height: 36, marginTop: 4 }}>
          <AvatarFallback style={{ background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", color: "#fff", fontSize: 14, fontWeight: 700 }}>S</AvatarFallback>
        </Avatar>
      </aside>

      {/* Second sidebar — single community channel */}
      <aside style={{ width: 240, background: "#0D0F14", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#6B7280", textTransform: "uppercase", marginBottom: 12 }}>Survivor Hub</div>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
            <input placeholder="Search community…" style={{ width: "100%", padding: "7px 10px 7px 30px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, fontSize: 13, color: "#9CA3AF", outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>
        <ScrollArea style={{ flex: 1 }}>
          <div style={{ padding: "0 8px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", padding: "0 10px", marginBottom: 6 }}>Channels</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, background: "rgba(124,58,237,0.12)", borderLeft: "2px solid #7C3AED", marginLeft: 2, cursor: "pointer" }}>
              <Hash size={15} style={{ color: "#A78BFA" }} />
              <span style={{ fontSize: 14, color: "#E8EAF0", flex: 1 }}>community</span>
              <div style={{ display: "flex", alignItems: "center", gap: 3, background: "#22C55E18", border: "1px solid #22C55E30", borderRadius: 4, padding: "1px 5px" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 600 }}>LIVE</span>
              </div>
            </div>
            <div style={{ margin: "16px 0 6px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", padding: "0 10px" }}>Community Stats</div>
            {[
              { label: "4,912 online now", dot: "#22C55E" },
              { label: "4.9M members", dot: "#A78BFA" },
              { label: "127 countries", dot: "#38BDF8" },
            ].map(({ label, dot }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 10px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "#6B7280" }}>{label}</span>
              </div>
            ))}
            <div style={{ margin: "16px 0 6px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", padding: "0 10px" }}>Trending Topics</div>
            {["#ServiceCredits", "#LightHouseHousing", "#SurvivorStories", "#Foundation"].map((tag) => (
              <div key={tag} style={{ padding: "5px 10px", fontSize: 12, color: "#A78BFA", cursor: "pointer" }}>{tag}</div>
            ))}
          </div>
        </ScrollArea>
        <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ padding: "10px 12px", borderRadius: 10, background: "linear-gradient(135deg,rgba(124,58,237,0.15) 0%,rgba(14,165,233,0.15) 100%)", border: "1px solid rgba(124,58,237,0.25)" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#A78BFA", marginBottom: 2 }}>Exit Their Economy · Invite Only</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>4.9M survivors worldwide</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 24px", gap: 12, background: "#0D0F14", flexShrink: 0 }}>
          <Hash size={18} style={{ color: "#A78BFA" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#E8EAF0" }}>community</div>
            <div style={{ fontSize: 12, color: "#6B7280" }}>4,912 online · Survivor Verified</div>
          </div>
          <Badge style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.25)", fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>Our Economy</Badge>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={14} /> Post
          </button>
          <button onClick={() => setEmptyMode(e => !e)} style={{ padding: "4px 12px", borderRadius: 20, background: emptyMode ? "#EF444420" : "rgba(255,255,255,0.04)", border: emptyMode ? "1px solid #EF444440" : "1px solid rgba(255,255,255,0.08)", color: emptyMode ? "#EF4444" : "#6B7280", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{emptyMode ? "Empty ✓" : "Empty State"}</button>
        </header>

        {emptyMode ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", gap: 16 }}>
            <div style={{ width: 72, height: 72, borderRadius: 20, background: "rgba(124,58,237,0.1)", border: "1px dashed rgba(124,58,237,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Hash size={32} style={{ color: "#A78BFA", opacity: 0.5 }} />
            </div>
            <div style={{ textAlign: "center", maxWidth: 380 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#F9FAFB", marginBottom: 8 }}>Community is getting started</div>
              <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, marginBottom: 24 }}>Announcements, peer posts, and AI Q&A will stream here in real-time. Be the first to post or ask a question.</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 520 }}>
              {["Admin announcements & safety notices", "Peer-authored community posts", "AI assistant Q&A inline in the stream", "Real-time replies and reactions"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.07)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(124,58,237,0.4)", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#6B7280" }}>{item}</span>
                </div>
              ))}
            </div>
            <button style={{ padding: "12px 28px", borderRadius: 12, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <Plus size={16} /> Post First Announcement
            </button>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <ScrollArea style={{ height: "100%", padding: "16px 24px" }}>
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
            </div>

            {/* Composer */}
            <div style={{ padding: "8px 24px 20px", borderTop: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
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
            </div>
          </>
        )}
      </div>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: "1px solid rgba(255,255,255,0.06)", background: "#0D0F14", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Live Activity</div>
        <div style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <ShieldCheck size={14} style={{ color: "#A78BFA" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#A78BFA" }}>Community Stats</span>
          </div>
          {[
            { v: "4,912", l: "online now", c: "#22C55E" },
            { v: "4.9M", l: "total members", c: "#A78BFA" },
            { v: "127", l: "countries", c: "#38BDF8" },
          ].map(({ v, l, c }) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ fontSize: 12, color: "#9CA3AF" }}>{l}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <AlertCircle size={14} style={{ color: "#EF4444" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#EF4444" }}>Active Notices (2)</span>
          </div>
          {["Houston housing: 47 slots open", "SocketRelay: 3 open requests in Chicago"].map((a) => (
            <div key={a} style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 6, lineHeight: 1.4 }}>• {a}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>Active Today</div>
        {["Amara O.", "James T.", "Maria G.", "Priya S.", "David K."].map((name) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "#9CA3AF" }}>{name}</span>
          </div>
        ))}
      </aside>
    </div>
  );
}
