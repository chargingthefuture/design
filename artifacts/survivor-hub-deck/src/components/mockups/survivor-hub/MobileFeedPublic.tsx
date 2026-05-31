// design-sync
// STATE: Unauthenticated — visitor with no session. Channel is publicly readable; posting/asking requires auth.
import {
  Hash, Lock, AlertCircle, Sparkles, MessageCircle,
  ShieldCheck, UserPlus, LogIn, ChevronLeft,
} from "lucide-react";

const bg = "#0F1117";
const subtle = "#6B7280";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const PUBLIC_STREAM = [
  {
    id: 1, type: "announcement",
    time: "just now",
    body: "12 survivors housed in Houston this week via LightHouse — 4 slots still open for ServiceCredits holders.",
    urgent: false,
  },
  {
    id: 2, type: "community",
    author: "Amara O.", avatar: "AO", authorColor: "#22C55E", time: "18 min",
    body: "Six months ago I had nothing. Workforce showed my gaps, SkillsHunt leveled me up, Foundation got me my first gig. 🙌",
    replies: 14, hearts: 89,
  },
  {
    id: 3, type: "ai_qa",
    question: "How do I earn my first ServiceCredits?",
    askedBy: "Maria G.", time: "34 min",
    answer: "Foundation gig (15–45 credits), SkillsHunt badge (10–30 credits), or SocketRelay request (5–20 credits).",
  },
  {
    id: 4, type: "announcement",
    time: "1 hr",
    body: "⚠️ 47 emergency housing slots in Houston, TX. 12 accept ServiceCredits. Contact LightHouse.",
    urgent: true,
  },
];

export function MobileFeedPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter', system-ui, sans-serif", color: "#F9FAFB" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>

      {/* Channel header */}
      <div style={{ padding: "12px 16px", background: "#090B0F", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <button style={{ width: 34, height: 34, borderRadius: 9, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle, flexShrink: 0 }}>
          <ChevronLeft size={20} />
        </button>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: `linear-gradient(135deg,${accent},${accentCyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0 }}>SH</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Hash size={13} style={{ color: "#A78BFA" }} />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB" }}>community</span>
          </div>
          <div style={{ fontSize: 11, color: "#22C55E" }}>Exit Their Economy · 4,912 online</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={{ padding: "6px 14px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#F9FAFB", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <LogIn size={12} /> Sign In
          </button>
        </div>
      </div>

      {/* Notice banner */}
      <div style={{ padding: "10px 16px", background: `${accent}10`, borderBottom: `1px solid ${accent}20`, flexShrink: 0 }}>
        <div style={{ fontSize: 12, color: "#A78BFA", textAlign: "center" }}>
          Reading the public #community channel — <span style={{ fontWeight: 600, color: "#F9FAFB" }}>sign in to post or ask the assistant</span>
        </div>
      </div>

      {/* Public stream — no blur */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {PUBLIC_STREAM.map((item) => {
          if (item.type === "announcement") {
            return (
              <div key={item.id} style={{ padding: "14px", borderRadius: 14, background: item.urgent ? "rgba(239,68,68,0.05)" : "rgba(124,58,237,0.07)", border: `1px solid ${item.urgent ? "rgba(239,68,68,0.22)" : "rgba(124,58,237,0.2)"}` }}>
                {item.urgent && (
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6, padding: "3px 7px", borderRadius: 4, background: "#EF444415", border: "1px solid #EF444330", width: "fit-content" }}>
                    <AlertCircle size={9} style={{ color: "#EF4444" }} />
                    <span style={{ fontSize: 9, fontWeight: 700, color: "#EF4444" }}>URGENT</span>
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 7, background: `linear-gradient(135deg,${accent},${accentCyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#fff", flexShrink: 0 }}>SH</div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB" }}>Survivor Hub</span>
                  <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 3, background: "rgba(124,58,237,0.18)", color: "#A78BFA", fontWeight: 600 }}>📣 Official</span>
                  <span style={{ fontSize: 11, color: subtle, marginLeft: "auto" }}>{item.time}</span>
                </div>
                <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            );
          }
          if (item.type === "ai_qa") {
            const qa = item as any;
            return (
              <div key={item.id} style={{ padding: "14px", borderRadius: 14, background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Sparkles size={13} style={{ color: "#38BDF8" }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB" }}>AI Assistant</span>
                  <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 3, background: "rgba(14,165,233,0.12)", color: "#38BDF8", fontWeight: 600 }}>🤖 Q&A</span>
                  <span style={{ fontSize: 11, color: subtle, marginLeft: "auto" }}>{item.time}</span>
                </div>
                <div style={{ padding: "7px 10px", borderRadius: 7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", marginBottom: 7, fontSize: 12, color: "#9CA3AF" }}>
                  <span style={{ color: "#38BDF8", fontWeight: 600 }}>Q: </span>{qa.question}
                </div>
                <div style={{ fontSize: 12, color: "#D1D5DB", lineHeight: 1.6 }}>
                  <span style={{ color: "#38BDF8", fontWeight: 600 }}>A: </span>{qa.answer}
                </div>
              </div>
            );
          }
          const post = item as any;
          return (
            <div key={item.id} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${post.authorColor}22`, border: `1px solid ${post.authorColor}38`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: post.authorColor, flexShrink: 0 }}>{post.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 7, marginBottom: 3 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>{post.author}</span>
                    <span style={{ fontSize: 11, color: subtle }}>{post.time} ago</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.55, marginBottom: 7 }}>{post.body}</div>
                  <div style={{ display: "flex", gap: 12, color: subtle, fontSize: 12 }}>
                    <span>♥ {post.hearts}</span>
                    <span><MessageCircle size={12} style={{ display: "inline", verticalAlign: "middle" }} /> {post.replies}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Locked composer */}
      <div style={{ padding: "12px 16px 28px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#090B0F", flexShrink: 0 }}>
        <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Lock size={14} color={subtle} />
          <span style={{ fontSize: 13, color: subtle, flex: 1 }}>Sign in to post or ask the assistant…</span>
        </div>
        <button style={{ width: "100%", padding: "13px", borderRadius: 12, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <UserPlus size={15} /> Create Free Account
        </button>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <span style={{ fontSize: 12, color: subtle }}>Already a member? <span style={{ color: "#A78BFA", fontWeight: 600, cursor: "pointer" }}>Sign in</span></span>
        </div>
      </div>
    </div>
  );
}
