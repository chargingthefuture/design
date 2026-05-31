// design-sync
// Mobile Community Channel — blended stream (Announcements + AI Q&A + Peer posts)
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Bell, Send, Plus, Heart, MessageCircle,
  Share2, Pin, AlertCircle, Sparkles, Hash,
  ChevronLeft, ShieldCheck,
} from "lucide-react";

type StreamAnnouncement = {
  id: number; type: "announcement";
  time: string; pinned: boolean; urgent: boolean; body: string; link?: string;
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
    time: "just now", pinned: true, urgent: false,
    body: "12 survivors housed in Houston this week via LightHouse — 4 slots still open for ServiceCredits holders.",
    link: "Open LightHouse →",
  },
  {
    id: 2, type: "community",
    author: "Amara O.", avatar: "AO", authorColor: "#22C55E", time: "18 min",
    body: "Six months ago I had nothing. Workforce showed my gaps, SkillsHunt leveled me up, Foundation got me my first gig. It's real. 🙌",
    replies: 14, hearts: 89,
  },
  {
    id: 3, type: "ai_qa",
    question: "How do I earn my first ServiceCredits?",
    askedBy: "Maria G.", time: "34 min",
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
    author: "James T.", avatar: "JT", authorColor: "#3B82F6", time: "2 hr",
    body: "ServiceCredits 101: earn through Foundation / SkillsHunt / SocketRelay, spend on housing or transport, trade peer-to-peer.",
    replies: 9, hearts: 63,
  },
];

export function MobileFeed() {
  const [input, setInput] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [postMode, setPostMode] = useState<"post" | "ask">("post");

  const toggleLike = (id: number) => setLiked((l) => l.includes(id) ? l.filter((x) => x !== id) : [...l, id]);

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EAF0" }}>9:41</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9CA3AF", fontSize: 12 }}>
          <span>•••</span><span>WiFi</span><span>100%</span>
        </div>
      </div>

      {/* Channel header */}
      <div style={{ padding: "12px 16px", background: "#090B0F", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <button style={{ width: 36, height: 36, borderRadius: 10, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280", flexShrink: 0 }}>
          <ChevronLeft size={20} />
        </button>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", flexShrink: 0 }}>SH</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Hash size={14} style={{ color: "#A78BFA" }} />
            <span style={{ fontSize: 15, fontWeight: 800, color: "#F9FAFB" }}>community</span>
          </div>
          <div style={{ fontSize: 11, color: "#22C55E" }}>✓ Safe Space · 4,912 online</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Bell size={15} style={{ color: "#6B7280" }} />
          </button>
          <button style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ShieldCheck size={15} style={{ color: "#0EA5E9" }} />
          </button>
        </div>
      </div>

      {/* Stream */}
      <ScrollArea style={{ flex: 1 }}>
        <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
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
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>Survivor Hub</span>
                      <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 3, background: "rgba(124,58,237,0.2)", color: "#A78BFA", fontWeight: 600 }}>📣 Official</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.6, marginBottom: ann.link ? 10 : 0 }}>{ann.body}</div>
                  {ann.link && (
                    <button style={{ padding: "6px 12px", borderRadius: 7, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#A78BFA", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{ann.link}</button>
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
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>AI Assistant</span>
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
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>{post.author}</div>
                    <div style={{ fontSize: 11, color: "#4B5563" }}>{post.time} ago</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.6, marginBottom: 10 }}>{post.body}</div>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <button onClick={() => toggleLike(post.id)} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? "#EC4899" : "#6B7280", fontSize: 13 }}>
                    <Heart size={14} fill={liked.includes(post.id) ? "#EC4899" : "none"} /> {post.hearts + (liked.includes(post.id) ? 1 : 0)}
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "#6B7280", fontSize: 13 }}><MessageCircle size={14} /> {post.replies}</button>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "#6B7280", fontSize: 13 }}><Share2 size={14} /></button>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Composer */}
      <div style={{ padding: "8px 16px 20px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#090B0F", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          {(["post", "ask"] as const).map((mode) => (
            <button key={mode} onClick={() => setPostMode(mode)} style={{ padding: "4px 12px", borderRadius: 20, background: postMode === mode ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.04)", border: postMode === mode ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(255,255,255,0.08)", color: postMode === mode ? "#A78BFA" : "#6B7280", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              {mode === "post" ? "Post" : "Ask AI"}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14 }}>
          <Plus size={16} style={{ color: "#4B5563", flexShrink: 0 }} />
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={postMode === "post" ? "Share with the community…" : "Ask the assistant…"} style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "#E8EAF0" }} />
          <button style={{ width: 30, height: 30, borderRadius: 8, background: input.trim() ? "linear-gradient(135deg,#7C3AED,#0EA5E9)" : "rgba(255,255,255,0.06)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <Send size={13} style={{ color: input.trim() ? "#fff" : "#4B5563" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
