// STATE: Unauthenticated — visitor with no session
import { Hammer, Star, MapPin, Lock, DollarSign } from "lucide-react";

const bg = "#0F1117", COLOR = "#EF4444";

const PREVIEW = [
  { name: "Carlos Rivera", trade: "Electrician", loc: "Houston, TX", price: "$85/hr", credits: true, rating: 4.9 },
  { name: "Sarah Johnson", trade: "Plumber", loc: "Atlanta, GA", price: "$95/hr", credits: true, rating: 4.8 },
  { name: "Elena Vasquez", trade: "HVAC Tech", loc: "Dallas, TX", price: "$90/hr", credits: true, rating: 5.0 },
  { name: "Marcus Lee", trade: "Carpenter", loc: "Chicago, IL", price: "$75/hr", credits: false, rating: 4.7 },
];

export function FoundationPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Hammer size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Foundation</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Trades & skilled services
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          Find trusted tradespeople<br />
          <span style={{ color: COLOR }}>who accept Service Credits</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520 }}>
          Vetted electricians, plumbers, carpenters, HVAC techs, and more. All background-checked, all trauma-informed. Pay with Service Credits or cash.
        </p>
        <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
          Join the Hub — Free
        </button>
      </div>

      {/* Blurred provider cards */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {PREVIEW.map((p, i) => (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", padding: "16px 20px", background: "rgba(255,255,255,0.02)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: 10, background: COLOR + "25", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF" }}>{p.trade}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 4, alignItems: "center" }}>
                  <Star size={11} color="#F59E0B" fill="#F59E0B" /><span style={{ fontSize: 12 }}>{p.rating}</span>
                  <MapPin size={11} color="#6B7280" /><span style={{ fontSize: 12, color: "#6B7280" }}>{p.loc}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>{p.price}</span>
                {p.credits && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: "#22C55E20", color: "#22C55E", fontWeight: 600 }}>Credits OK</span>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to book tradespeople</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>
            Filter by trade, location, availability, and Service Credit acceptance.
          </div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to access Foundation
          </button>
        </div>
      </div>
    </div>
  );
}
