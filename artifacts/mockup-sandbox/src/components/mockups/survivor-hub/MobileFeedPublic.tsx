// STATE: Unauthenticated — visitor with no session
import { Megaphone, Lock, Pin } from "lucide-react";

const bg = "#0F1117", COLOR = "#8B5CF6";

export function MobileFeedPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Megaphone size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Feed</span>
        </div>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Platform announcements, community discussions, resources, and events — personalized for your journey.</p>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { type: "ANNOUNCEMENT", title: "Trust Transport now live in 12 new cities", pinned: true },
            { type: "COMMUNITY", title: "Weekly check-in — How are you doing?" },
            { type: "RESOURCE", title: "New T-Visa application guide" },
            { type: "EVENT", title: "Live Q&A with Housing Navigators — Tomorrow 7 PM UTC" },
          ].map((p, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px", background: p.pinned ? COLOR + "06" : "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 5 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4, background: "rgba(255,255,255,0.07)", color: "#9CA3AF" }}>{p.type}</span>
                {p.pinned && <Pin size={10} color={COLOR} />}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{p.title}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to join the community</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
