// STATE: Unauthenticated — visitor with no session
import { BookOpen, Lock, Star } from "lucide-react";

const bg = "#0F1117", COLOR = "#3B82F6";

export function MobileDirectoryPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <BookOpen size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Directory</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>47,000+ verified providers</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Therapists, housing navigators, legal advocates, and more — searchable by location and specialty.</p>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { name: "Maria G.", role: "Trauma Therapist", r: 4.9 },
            { name: "James T.", role: "Housing Navigator", r: 4.8 },
            { name: "Priya S.", role: "Legal Advocate", r: 5.0 },
            { name: "Amara O.", role: "Employment Coach", r: 4.7 },
          ].map((p, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: COLOR + "30" }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>{p.role}</div>
                <div style={{ display: "flex", gap: 4, marginTop: 3, alignItems: "center" }}>
                  <Star size={10} fill="#F59E0B" color="#F59E0B" />
                  <span style={{ fontSize: 11 }}>{p.r}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to find providers</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
