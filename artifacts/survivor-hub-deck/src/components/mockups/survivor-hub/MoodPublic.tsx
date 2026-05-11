// STATE: Unauthenticated — visitor with no session
import { Smile, Shield, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#EC4899";

export function MoodPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Smile size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Mood</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "64px" }}>
        <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: 40, background: COLOR + "20", border: `2px solid ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smile size={36} color={COLOR} />
          </div>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600 }}>100% anonymous</span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
            Check in with yourself.<br /><span style={{ color: COLOR }}>No names, no records.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 440 }}>
            Your mood check-in is completely anonymous — never linked to your identity. Daily check-ins unlock resources, peer support, and gentle nudges.
          </p>

          {/* Privacy guarantees */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {["No identity link", "Zero logs retained", "Aggregate only"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Shield size={13} color={COLOR} />
                <span style={{ fontSize: 13, color: "#9CA3AF" }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Preview mood picker (not locked) */}
          <div style={{ borderRadius: 16, border: `1px solid rgba(255,255,255,0.08)`, padding: "24px 32px", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", gap: 16, alignItems: "center", width: "100%" }}>
            <div style={{ fontSize: 14, color: "#9CA3AF" }}>How are you feeling today?</div>
            <div style={{ display: "flex", gap: 20 }}>
              {["😢", "😔", "😐", "🙂", "😄"].map((e, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ fontSize: 28, cursor: "pointer" }}>{e}</div>
                  <div style={{ fontSize: 11, color: "#6B7280" }}>{["Struggling", "Low", "Okay", "Good", "Great"][i]}</div>
                </div>
              ))}
            </div>
            <button style={{ padding: "12px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Join to track your journey
            </button>
          </div>

          <p style={{ margin: 0, fontSize: 12, color: "#4B5563" }}>Sign in to save your streak, access resources, and see community trends.</p>
        </div>
      </div>
    </div>
  );
}
