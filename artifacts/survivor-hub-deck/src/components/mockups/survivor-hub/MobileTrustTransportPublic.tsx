// STATE: Unauthenticated — visitor with no session
import { Car, Lock, Package, Utensils } from "lucide-react";

const bg = "#0F1117", COLOR = "#F97316";

export function MobileTrustTransportPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Car size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>TrustTransport</span>
        </div>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Rides, package delivery, and food — all with trauma-informed, background-checked providers. Pay with Service Credits.</p>

        {/* Service type cards */}
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { icon: Car, label: "Rides", color: COLOR },
            { icon: Package, label: "Packages", color: "#3B82F6" },
            { icon: Utensils, label: "Food", color: "#22C55E" },
          ].map(({ icon: Icon, label, color }, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 12, border: `1px solid ${i === 0 ? color + "40" : "rgba(255,255,255,0.07)"}`, padding: "14px 8px", display: "flex", flexDirection: "column", gap: 6, alignItems: "center", background: i === 0 ? color + "08" : "rgba(255,255,255,0.02)" }}>
              <Icon size={20} color={color} />
              <span style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative", minHeight: 280 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          <div style={{ fontSize: 12, color: "#6B7280" }}>Available drivers</div>
          {[
            { name: "Jose Martinez", rating: 4.9, eta: "3 min" },
            { name: "Aisha Thompson", rating: 5.0, eta: "6 min" },
            { name: "David Kim", rating: 4.8, eta: "9 min" },
          ].map((d, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 18, background: COLOR + "25" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{d.name}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>★ {d.rating}</div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#22C55E" }}>{d.eta}</span>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to book transport</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
