// STATE: Unauthenticated — visitor with no session
import { BookOpen, Users, Star, MapPin, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#3B82F6";

const PREVIEW = [
  { name: "Maria G.", role: "Trauma Therapist", loc: "Houston, TX", rating: 4.9 },
  { name: "James T.", role: "Housing Navigator", loc: "Atlanta, GA", rating: 4.8 },
  { name: "Amara O.", role: "Employment Coach", loc: "Chicago, IL", rating: 4.7 },
  { name: "Priya S.", role: "Legal Advocate", loc: "New York, NY", rating: 5.0 },
  { name: "Lena H.", role: "Tech Skills Trainer", loc: "Remote", rating: 4.9 },
  { name: "DeShawn W.", role: "Financial Counselor", loc: "Dallas, TX", rating: 4.6 },
];

export function DirectoryPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <BookOpen size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Directory</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "56px 64px 40px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600 }}>47,000+ verified providers</span>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>GetStream chat</span>
        </div>
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800, lineHeight: 1.1 }}>
          Connect with verified<br />
          <span style={{ color: COLOR }}>providers & advocates</span>
        </h1>
        <p style={{ margin: 0, fontSize: 16, color: "#9CA3AF", maxWidth: 500 }}>
          47,000 trauma-informed therapists, housing navigators, legal advocates, employment coaches, and more. Searchable by location, specialty, and Service Credit acceptance.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button style={{ padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Join the Hub — Free
          </button>
          <button style={{ padding: "14px 24px", borderRadius: 10, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
            Learn more
          </button>
        </div>
      </div>

      {/* Blurred preview grid */}
      <div style={{ padding: "0 64px 64px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, filter: "blur(5px)", pointerEvents: "none", userSelect: "none", opacity: 0.6 }}>
          {PREVIEW.map((p, i) => (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", padding: "16px 18px", background: "rgba(255,255,255,0.03)", display: "flex", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: COLOR + "30", flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>{p.role}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 6, alignItems: "center" }}>
                  <Star size={11} color="#F59E0B" fill="#F59E0B" />
                  <span style={{ fontSize: 12 }}>{p.rating}</span>
                  <MapPin size={11} color="#6B7280" />
                  <span style={{ fontSize: 12, color: "#6B7280" }}>{p.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lock overlay */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={24} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB", textAlign: "center" }}>
            Sign in to browse 47,000 providers
          </div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 320 }}>
            Filter by specialty, location, rating, and Service Credit acceptance.
          </div>
          <button style={{ padding: "12px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to connect
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ marginTop: "auto", padding: "20px 64px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 40 }}>
        {[
          { label: "Verified providers", value: "47,000+" },
          { label: "Specialties", value: "120+" },
          { label: "Accept Service Credits", value: "68%" },
          { label: "Average response time", value: "< 2 hrs" },
        ].map(({ label, value }, i) => (
          <div key={i}>
            <div style={{ fontSize: 20, fontWeight: 800, color: COLOR }}>{value}</div>
            <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
