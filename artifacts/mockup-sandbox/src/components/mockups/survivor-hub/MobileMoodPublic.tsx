// STATE: Unauthenticated — visitor with no session
import { Smile, Shield } from "lucide-react";

const bg = "#0F1117", COLOR = "#EC4899";

export function MobileMoodPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 24px 40px", gap: 20, textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: COLOR + "20", border: `2px solid ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Smile size={28} color={COLOR} />
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600 }}>100% anonymous</span>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>
          Check in with yourself.<br /><span style={{ color: COLOR }}>No names, no records.</span>
        </h1>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", maxWidth: 300 }}>Your mood is never linked to your identity. Daily check-ins unlock resources and gentle nudges.</p>

        {/* Privacy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {["No identity link", "Zero logs retained", "Aggregate only"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
              <Shield size={12} color={COLOR} />
              <span style={{ fontSize: 13, color: "#9CA3AF" }}>{t}</span>
            </div>
          ))}
        </div>

        {/* Mood picker preview */}
        <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px", background: "rgba(255,255,255,0.02)", width: "100%" }}>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 14 }}>How are you feeling today?</div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {["😢", "😔", "😐", "🙂", "😄"].map((e, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 24 }}>{e}</span>
                <span style={{ fontSize: 10, color: "#6B7280" }}>{["Low", "Down", "Okay", "Good", "Great"][i]}</span>
              </div>
            ))}
          </div>
          <button style={{ marginTop: 16, width: "100%", padding: "13px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Join to track your journey
          </button>
        </div>
      </div>
    </div>
  );
}
