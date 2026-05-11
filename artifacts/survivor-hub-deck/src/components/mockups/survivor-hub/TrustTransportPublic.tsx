// STATE: Unauthenticated — visitor with no session
import { Car, Shield, Star, Lock, Package, Utensils } from "lucide-react";

const bg = "#0F1117", COLOR = "#F97316";

export function TrustTransportPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Car size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>TrustTransport</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", gap: 80 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
            Safety-first transport
          </span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
            Rides, deliveries, and food —<br />
            <span style={{ color: COLOR }}>trauma-informed drivers only</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 480 }}>
            Every driver is background-checked and trauma-informed. Your pickup location is never stored permanently. Pay with Service Credits.
          </p>
          <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
            Join the Hub — Free
          </button>
        </div>

        {/* Service type preview */}
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          {[
            { icon: Car, label: "Rides", desc: "Safe passenger transport", color: COLOR },
            { icon: Package, label: "Packages", desc: "Item delivery", color: "#3B82F6" },
            { icon: Utensils, label: "Food", desc: "Meal delivery", color: "#22C55E" },
          ].map(({ icon: Icon, label, desc, color }, i) => (
            <div key={i} style={{ borderRadius: 14, border: `1px solid ${i === 0 ? color + "40" : "rgba(255,255,255,0.07)"}`, padding: "20px 20px", background: i === 0 ? color + "08" : "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: 8, alignItems: "center", minWidth: 110 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: color + "20", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={color} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{label}</span>
              <span style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center" }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blurred driver preview */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", padding: "20px 24px", background: "rgba(255,255,255,0.02)", filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: "#9CA3AF" }}>Available drivers near you</div>
          {[
            { name: "Jose Martinez", rating: 4.9, trips: 847, eta: "3 min" },
            { name: "Aisha Thompson", rating: 5.0, trips: 612, eta: "6 min" },
            { name: "David Kim", rating: 4.8, trips: 1203, eta: "9 min" },
          ].map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: COLOR + "25" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{d.name}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>{d.trips} trips · <Star size={10} fill="#F59E0B" color="#F59E0B" style={{ display: "inline" }} /> {d.rating}</div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#22C55E" }}>{d.eta}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to book a safe ride</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>
            Schedule rides, track packages, and order food — all with trauma-informed drivers.
          </div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to book transport
          </button>
        </div>
      </div>
    </div>
  );
}
