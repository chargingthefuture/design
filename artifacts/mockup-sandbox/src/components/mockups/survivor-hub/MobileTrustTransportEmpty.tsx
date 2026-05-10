import { Car, MapPin, Package, Utensils } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#F97316";

const SERVICES = [
  { icon: Car, label: "Safe Ride", desc: "Verified survivor drivers" },
  { icon: Package, label: "Package Relay", desc: "Discreet delivery" },
  { icon: Utensils, label: "Meal Delivery", desc: "Hot meals delivered safely" },
];

export function MobileTrustTransportEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Car size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>TrustTransport</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>No active orders</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {SERVICES.map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ borderRadius: 14, border: `1px solid ${COLOR}25`, background: `${COLOR}06`, padding: "18px 16px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${COLOR}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={22} color={COLOR} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 12, color: subtle }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 24 }} />
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>
          Book a Ride
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15 }}>
          Schedule for Later
        </button>
      </div>
    </div>
  );
}
