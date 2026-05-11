// STATE: Unauthenticated — visitor with no session
import { Home, MapPin, Bed, Bath, Lock, Star } from "lucide-react";

const bg = "#0F1117", COLOR = "#EAB308";

const PREVIEW = [
  { title: "Private Studio — Safe & Verified", loc: "Midtown Houston, TX", price: 850, credits: true, beds: 1, rating: 4.9 },
  { title: "Furnished 1BR — Female-only Floor", loc: "Buckhead, Atlanta, GA", price: 1100, credits: true, beds: 1, rating: 4.8 },
  { title: "2BR Safe House — Group Housing", loc: "Lincoln Park, Chicago, IL", price: 1400, credits: false, beds: 2, rating: 5.0 },
  { title: "Micro-unit — Month-to-month", loc: "Uptown Dallas, TX", price: 650, credits: true, beds: 0, rating: 4.7 },
];

export function LightHousePublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <Home size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>LightHouse</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
          Privacy-first housing
        </span>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
          Safe, verified housing —<br />
          <span style={{ color: COLOR }}>your location stays private</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520 }}>
          All listings are privacy-minimized. Your location is never shared without consent. Trauma-informed hosts. Service Credits accepted. Month-to-month options available.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button style={{ padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Join the Hub — Free
          </button>
          <button style={{ padding: "14px 24px", borderRadius: 10, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
            How it works
          </button>
        </div>
      </div>

      {/* Blurred listing cards */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, filter: "blur(4px)", pointerEvents: "none", opacity: 0.55 }}>
          {PREVIEW.map((l, i) => (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", display: "flex", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ width: 160, height: 100, background: COLOR + "15", flexShrink: 0 }} />
              <div style={{ flex: 1, padding: "14px 18px", display: "flex", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{l.title}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}><MapPin size={10} style={{ display: "inline" }} /> {l.loc}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                  <span style={{ fontSize: 16, fontWeight: 800 }}>${l.price}<span style={{ fontSize: 12, fontWeight: 400, color: "#9CA3AF" }}>/mo</span></span>
                  {l.credits && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: "#22C55E20", color: "#22C55E", fontWeight: 600 }}>Credits OK</span>}
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}><Star size={10} style={{ display: "inline" }} fill="#F59E0B" color="#F59E0B" /> {l.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to view safe housing</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 300 }}>
            Filter by price, location, availability, and Service Credit acceptance.
          </div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#000", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to browse listings
          </button>
        </div>
      </div>
    </div>
  );
}
