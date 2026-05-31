// design-sync
// STATE: Unauthenticated — visitor with no session. #community is publicly readable; posting/asking requires auth.
import {
  MessageSquare, Hash, Radio, Globe, Sparkles,
  Lock, LogIn, AlertCircle, MessageCircle,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
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
  {
    id: 5, type: "community",
    author: "James T.", avatar: "JT", authorColor: "#3B82F6", time: "2 hr",
    body: "ServiceCredits 101: earn through Foundation / SkillsHunt / SocketRelay, spend on housing or transport, trade peer-to-peer.",
    replies: 9, hearts: 63,
  },
];

const STATS = [
  { label: "Survivors", value: "4.9M", color: "#22C55E" },
  { label: "GDP", value: "$247B", color: "#06B6D4" },
  { label: "Countries", value: "127", color: "#A855F7" },
];

export function MobileHubPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden", fontSize: 14 }}>

      {/* Status bar */}
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>

      {/* App header */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>SH</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Survivor Hub</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Free to join · 4.9M survivors</div>
        </div>
        <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontWeight: 600, fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
          <LogIn size={11} /> Sign In
        </button>
        <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 11 }}>
          Join Free
        </button>
      </div>

      {/* Community stats strip */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, background: surface, flexShrink: 0 }}>
        {STATS.map(({ label, value, color }) => (
          <div key={label} style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRight: `1px solid ${border}` }}>
            <div style={{ fontSize: 16, fontWeight: 900, color }}>{value}</div>
            <div style={{ fontSize: 10, color: subtle }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Channel tab — single #community */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, padding: "0 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "10px 12px", borderBottom: `2px solid ${accent}`, color: "#A78BFA" }}>
          <Hash size={12} /><span style={{ fontSize: 12, fontWeight: 600 }}>community</span>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
        </div>
      </div>

      {/* Public notice */}
      <div style={{ margin: "10px 12px 0", padding: "8px 12px", borderRadius: 8, background: `${accent}12`, border: `1px solid ${accent}20`, fontSize: 11, color: "#A78BFA", flexShrink: 0, textAlign: "center" }}>
        Viewing public #community · Sign in to post, ask the assistant &amp; access all 17 apps
      </div>

      {/* Blended public stream — no blur */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
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
      <div style={{ padding: "10px 12px", borderTop: `1px solid ${border}`, background: surface, flexShrink: 0 }}>
        <div style={{ borderRadius: 24, border: `1px solid ${border}`, background: "rgba(255,255,255,0.04)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
          <Lock size={14} color={subtle} />
          <span style={{ fontSize: 13, color: subtle, flex: 1 }}>Sign in to post or ask…</span>
          <button style={{ padding: "6px 14px", borderRadius: 16, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 11, whiteSpace: "nowrap" }}>
            Join Free
          </button>
        </div>
      </div>

      {/* Bottom nav (locked) */}
      <div style={{ display: "flex", borderTop: `1px solid ${border}`, background: "#090B0F", flexShrink: 0 }}>
        {[
          { icon: MessageSquare, label: "Community", active: true },
          { icon: Radio, label: "Chyme", active: false },
          { icon: Sparkles, label: "Apps", active: false },
          { icon: Globe, label: "GDP", active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} style={{ flex: 1, padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, cursor: active ? "pointer" : "not-allowed", opacity: active ? 1 : 0.35 }}>
            <Icon size={18} color={active ? "#A78BFA" : subtle} />
            <span style={{ fontSize: 9, color: active ? "#A78BFA" : subtle }}>{label}</span>
            {!active && <Lock size={8} color={subtle} style={{ position: "absolute", marginTop: -6 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
