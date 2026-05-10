// STATE: Unauthenticated — visitor with no session
import { Megaphone, Bell, Pin, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#8B5CF6";

const PREVIEW = [
  { type: "ANNOUNCEMENT", title: "Platform Update: Trust Transport now live in 12 new cities", time: "2h ago", author: "Survivor Hub Team", pinned: true },
  { type: "COMMUNITY", title: "Weekly check-in thread — How are you doing this week?", time: "4h ago", author: "Community Moderator" },
  { type: "RESOURCE", title: "New guide: Navigating the T-Visa application process", time: "6h ago", author: "Priya S. — Legal Advocate" },
  { type: "EVENT", title: "Live Q&A with Housing Navigators — Tomorrow 7 PM UTC", time: "8h ago", author: "LightHouse Team" },
  { type: "COMMUNITY", title: "Celebrating 1,000 survivors who secured housing this month 🏠", time: "1d ago", author: "Community" },
];

export function FeedAnnouncementsPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Megaphone size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Feed & Announcements</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Community feed
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800 }}>
          Stay connected to the<br />
          <span style={{ color: COLOR }}>survivor community</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520 }}>
          Platform announcements, community discussions, resources, and events — all in one place. Personalized for your journey.
        </p>
        <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
          Join the Hub — Free
        </button>
      </div>

      {/* Blurred preview posts */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {PREVIEW.map((post, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "14px 18px", background: post.pinned ? COLOR + "08" : "rgba(255,255,255,0.02)", display: "flex", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 18, background: COLOR + "30", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: "rgba(255,255,255,0.08)", color: "#9CA3AF" }}>{post.type}</span>
                  {post.pinned && <Pin size={11} color={COLOR} />}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{post.title}</div>
                <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{post.author} · {post.time}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Lock overlay */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to join the conversation</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>
            Personalized announcements, direct replies, and community threads.
          </div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to read more
          </button>
        </div>
      </div>
    </div>
  );
}
