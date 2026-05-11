import { Car, Package, Utensils, MapPin, Shield, Clock, Plus, Star, Bell } from "lucide-react";

const COLOR = "#F97316";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const SERVICES = [
  { id: "ride", icon: Car, name: "Ride", desc: "Safe passenger transport", color: COLOR, detail: "Trauma-informed, verified drivers" },
  { id: "package", icon: Package, name: "Package", desc: "Item delivery", color: "#3B82F6", detail: "Discreet, privacy-first" },
  { id: "food", icon: Utensils, name: "Food", desc: "Meal delivery", color: "#22C55E", detail: "Accepts Service Credits" },
];

export function TrustTransportEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Car size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>TrustTransport</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 1</span>
          </div>
        </div>

        <div style={{ padding: "16px", flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Services</div>
          {SERVICES.map(({ icon: Icon, name, desc, color, detail }) => (
            <div key={name} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "12px 14px", marginBottom: 8, cursor: "pointer", display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={16} color={color} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: text }}>{name}</div>
                <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20, fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Active Orders</div>
          <div style={{ borderRadius: 12, border: `2px dashed ${border}`, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
            <Clock size={22} color={subtle} />
            <div style={{ fontSize: 13, fontWeight: 600, color: text }}>No active orders</div>
            <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>Book a ride, delivery, or food order to see it here in real time</div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60 }}>
        <div style={{ maxWidth: 520, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Car size={34} color={`${COLOR}60`} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>No trips or deliveries yet</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
            TrustTransport connects you with verified, trauma-informed drivers for rides, packages, and food. All drivers are background-checked and community-rated.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, width: "100%" }}>
            {SERVICES.map(({ icon: Icon, name, desc, color, detail }) => (
              <div key={name} style={{ borderRadius: 14, border: `1px solid ${color}25`, background: `${color}08`, padding: "18px 16px", textAlign: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <Icon size={20} color={color} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>{detail}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button style={{ padding: "11px 28px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Plus size={15} /> Book a Ride
            </button>
            <button style={{ padding: "11px 22px", borderRadius: 10, background: "transparent", border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Bell size={14} /> Schedule for Later
            </button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 40, display: "flex", gap: 40 }}>
          {[
            { icon: Shield, label: "Safety-first drivers", desc: "Trauma-informed + verified" },
            { icon: Star, label: "Community rated", desc: "Transparent driver scores" },
            { icon: MapPin, label: "Discreet pickups", desc: "Location redacted from logs" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ textAlign: "center", width: 170 }}>
              <Icon size={18} color={COLOR} style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
