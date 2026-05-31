// design-sync
// STATE: Unauthenticated — visitor with no session. Channel is publicly readable; only posting requires auth.
import {
  Bell, Hash, Lock, MessageCircle, LogIn, UserPlus,
  ShieldCheck, Globe, Users, DollarSign, Radio,
  AlertCircle, Sparkles, Zap,
} from "lucide-react";

const bg = "#0F1117";
const border = "#1E2A3A";
const surface = "#161B27";
const subtle = "#6B7280";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const PUBLIC_STREAM = [
  {
    id: 1, type: "announcement",
    author: "Survivor Hub", avatar: "SH", time: "just now",
    body: "12 survivors housed in Houston this week via LightHouse — 4 slots still available for ServiceCredits holders. Apply before Friday.",
    urgent: false,
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
    answer: "Fastest paths: Foundation gig (15–45 credits), SkillsHunt badge (10–30 credits), or SocketRelay request (5–20 credits).",
  },
  {
    id: 4, type: "announcement",
    author: "Survivor Hub", avatar: "SH", time: "1 hr ago",
    body: "⚠️ Safety notice: 47 emergency housing slots verified in Houston, TX. 12 accept ServiceCredits. Contact LightHouse directly.",
    urgent: true,
  },
  {
    id: 5, type: "community",
    author: "James T.", avatar: "JT", authorColor: "#3B82F6", time: "2 hr ago",
    body: "ServiceCredits 101: earn through verified work, spend on housing or transport, trade peer-to-peer. Utility token, no fiat conversion.",
    replies: 9, hearts: 63,
  },
  {
    id: 6, type: "ai_qa",
    question: "Can I browse housing without an account?",
    askedBy: "David K.", time: "3 hr ago",
    answer: "Yes — LightHouse listings are publicly browsable. You need an account to contact hosts or pay with ServiceCredits.",
  },
];

const STATS = [
  { label: "Survivors", value: "4.9M", icon: Users, color: "#22C55E" },
  { label: "GDP Economy", value: "$247B", icon: DollarSign, color: "#06B6D4" },
  { label: "Countries", value: "127", icon: Globe, color: "#A855F7" },
  { label: "Live Rooms", value: "128", icon: Radio, color: "#F97316" },
];

export function FeedAnnouncementsPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Marketing banner */}
      <div style={{ background: `linear-gradient(90deg,${accent} 0%,${accentCyan} 100%)`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ShieldCheck size={15} color="#fff" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Survivor Hub · 4.9M members · $247B economy · 127 countries</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Free to join</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <UserPlus size={13} /> Create Free Account
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Icon rail */}
        <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, gap: 8, flexShrink: 0 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg,${accent},${accentCyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
          {[Hash, Zap].map((Icon, i) => (
            <div key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? "rgba(124,58,237,0.2)" : "transparent", border: i === 0 ? "1px solid rgba(124,58,237,0.4)" : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", color: i === 0 ? "#A78BFA" : subtle, cursor: "pointer" }}>
              <Icon size={20} />
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ marginBottom: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Bell size={18} color={subtle} />
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(107,114,128,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: subtle, border: `2px dashed ${border}` }}>?</div>
          </div>
        </aside>

        {/* Second sidebar */}
        <aside style={{ width: 240, background: "#0D0F14", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "16px 12px 10px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 10 }}>Public Channel</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 8, background: "rgba(124,58,237,0.12)", borderLeft: `2px solid ${accent}`, marginLeft: 2, cursor: "pointer" }}>
              <Hash size={14} style={{ color: "#A78BFA" }} />
              <span style={{ fontSize: 14, color: "#F9FAFB", flex: 1 }}>community</span>
              <span style={{ fontSize: 10, background: "#22C55E20", color: "#22C55E", border: "1px solid #22C55E30", borderRadius: 4, padding: "1px 5px" }}>LIVE</span>
            </div>
          </div>

          {/* Apps preview */}
          <div style={{ padding: "12px 12px 6px", borderTop: `1px solid ${border}`, marginTop: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 10 }}>18 apps · Sign in to access</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {["Chyme", "LightHouse", "TrustTransport", "Foundation", "Directory", "ServiceCredits", "+ 12 more…"].map((name) => (
                <div key={name} style={{ padding: "4px 8px", borderRadius: 6, background: surface, border: `1px solid ${border}`, fontSize: 10, color: subtle, opacity: 0.6, cursor: "not-allowed" }}>{name}</div>
              ))}
            </div>
            <button style={{ width: "100%", padding: "9px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <UserPlus size={13} /> Create Free Account
            </button>
          </div>
        </aside>

        {/* Main — public #community channel */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Channel header */}
          <div style={{ padding: "14px 24px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 10 }}>
            <Hash size={16} color={subtle} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>community</div>
              <div style={{ fontSize: 12, color: subtle }}>4,912 online now</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#22C55E15", border: "1px solid #22C55E30", borderRadius: 20, padding: "4px 12px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 600 }}>4,912 online</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <ShieldCheck size={12} color={accentCyan} />
                <span style={{ fontSize: 11, color: accentCyan, fontWeight: 600 }}>Survivor Verified</span>
              </div>
            </div>
          </div>

          {/* Blended stream — publicly readable */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ textAlign: "center", padding: "8px 16px", borderRadius: 8, background: `${accent}10`, border: `1px solid ${accent}20`, fontSize: 12, color: "#A78BFA", marginBottom: 4 }}>
              You are reading the public #community channel — <span style={{ color: "#F9FAFB", fontWeight: 600 }}>sign in to post or ask the assistant</span>
            </div>
            {PUBLIC_STREAM.map((item) => {
              if (item.type === "announcement") {
                return (
                  <div key={item.id} style={{ padding: "16px 18px", borderRadius: 14, background: item.urgent ? "rgba(239,68,68,0.04)" : "rgba(124,58,237,0.05)", border: `1px solid ${item.urgent ? "rgba(239,68,68,0.22)" : "rgba(124,58,237,0.2)"}` }}>
                    {item.urgent && (
                      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, padding: "4px 9px", borderRadius: 5, background: "#EF444415", border: "1px solid #EF444330", width: "fit-content" }}>
                        <AlertCircle size={10} style={{ color: "#EF4444" }} />
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#EF4444" }}>URGENT</span>
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0 }}>SH</div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>Survivor Hub</span>
                          <span style={{ fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 4, background: "rgba(124,58,237,0.18)", color: "#A78BFA" }}>📣 Official</span>
                          <span style={{ fontSize: 11, color: subtle }}>{item.time}</span>
                        </div>
                        <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.6 }}>{item.body}</div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.type === "ai_qa") {
                return (
                  <div key={item.id} style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.16)" }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Sparkles size={16} style={{ color: "#38BDF8" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>AI Assistant</span>
                          <span style={{ fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 4, background: "rgba(14,165,233,0.12)", color: "#38BDF8" }}>🤖 AI Q&A</span>
                          <span style={{ fontSize: 11, color: subtle }}>asked by {(item as any).askedBy} · {item.time}</span>
                        </div>
                        <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 8, fontSize: 13, color: "#9CA3AF" }}>
                          <span style={{ color: "#38BDF8", fontWeight: 600 }}>Q: </span>{(item as any).question}
                        </div>
                        <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.6 }}>
                          <span style={{ color: "#38BDF8", fontWeight: 600 }}>A: </span>{(item as any).answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              const post = item as any;
              return (
                <div key={item.id} style={{ display: "flex", gap: 12, padding: "2px 0" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${post.authorColor}22`, border: `1px solid ${post.authorColor}38`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: post.authorColor, flexShrink: 0 }}>{post.avatar}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>{post.author}</span>
                      <span style={{ fontSize: 11, color: subtle }}>{post.time}</span>
                    </div>
                    <div style={{ fontSize: 14, color: "#D1D5DB", lineHeight: 1.55, marginBottom: 6 }}>{post.body}</div>
                    <div style={{ display: "flex", gap: 14, color: subtle, fontSize: 13 }}>
                      <span>♥ {post.hearts}</span>
                      <span><MessageCircle size={13} style={{ display: "inline", verticalAlign: "middle" }} /> {post.replies}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Locked composer */}
          <div style={{ padding: "16px 24px", borderTop: `1px solid ${border}` }}>
            <div style={{ borderRadius: 12, border: `1px solid ${border}`, background: surface, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <Lock size={16} color={subtle} />
              <span style={{ fontSize: 14, color: subtle, flex: 1 }}>Sign in to post or ask the assistant…</span>
              <button style={{ padding: "8px 18px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
                Join Free →
              </button>
            </div>
          </div>
        </main>

        {/* Right panel */}
        <aside style={{ width: 240, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto", flexShrink: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Community at a Glance</div>
          {STATS.map(({ label, value, icon: Icon, color }) => (
            <div key={label} style={{ borderRadius: 10, border: `1px solid ${color}20`, background: `${color}08`, padding: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                <Icon size={14} color={color} />
                <span style={{ fontSize: 11, color: subtle }}>{label}</span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color }}>{value}</div>
            </div>
          ))}
          <div style={{ borderRadius: 10, border: `1px solid ${border}`, background: surface, padding: "14px 12px" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#F9FAFB", marginBottom: 8 }}>Why join?</div>
            {["18 apps — everything peer-to-peer", "ServiceCredits utility economy", "No data sold — ever", "✓ Invite-only, survivor-verified"].map((pt) => (
              <div key={pt} style={{ fontSize: 12, color: subtle, marginBottom: 5, lineHeight: 1.5 }}>→ {pt}</div>
            ))}
            <button style={{ width: "100%", marginTop: 10, padding: "9px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              Create Free Account →
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
