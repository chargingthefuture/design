// STATE: Authenticated, no trust signals yet
import { ShieldCheck, Bell, Activity, Eye, Lock, Circle, ArrowRight } from "lucide-react";

const BRAND = "#0EA5E9";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const STEPS = [
  { icon: "👤", label: "Complete your profile" },
  { icon: "⚡", label: "Make your first transaction" },
  { icon: "🧩", label: "Use at least one plugin" },
  { icon: "🤝", label: "Get your first endorsement" },
];

export function MobileTrustEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ padding: "12px 16px 0", display: "flex", justifyContent: "space-between", fontSize: 12, color: subtle, flexShrink: 0 }}>
        <span>9:41</span>
        <span>Trust</span>
        <span>●●●</span>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShieldCheck size={18} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: text }}>Trust</div>
              <div style={{ fontSize: 11, color: subtle }}>Verification & signals</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, borderRadius: 20, padding: "5px 12px" }}>
            <Circle size={8} color={subtle} />
            <span style={{ fontSize: 11, fontWeight: 600, color: subtle }}>Unverified</span>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px 100px" }}>

        {/* Empty illustration */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 24 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", border: `2px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${BRAND}08`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShieldCheck size={28} style={{ color: `${BRAND}50` }} />
            </div>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 8 }}>No trust signals yet</div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, maxWidth: 300 }}>
            Trust builds through community participation. Start with the steps below.
          </div>
        </div>

        {/* Score card at zero */}
        <div style={{ background: surface, borderRadius: 14, border: `1px solid ${BRAND}20`, padding: "16px", marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Trust Score</div>
            <Activity size={14} color={subtle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
            {[
              { label: "Last Active", value: "—" },
              { label: "Activity", value: "—" },
              { label: "Transactions", value: "0" },
              { label: "Active Plugins", value: "0" },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: subtle }}>{value}</div>
                <div style={{ fontSize: 9, color: "#4B5563", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 11, color: subtle }}>Signal progress</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: subtle }}>0%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: `${BRAND}10`, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "0%", borderRadius: 3, background: BRAND }} />
            </div>
          </div>
        </div>

        {/* Steps checklist */}
        <div style={{ background: surface, borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Get Started</div>
          {STEPS.map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: `1px solid ${border}` }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", border: `1.5px solid rgba(255,255,255,0.12)`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 10 }}></span>
              </div>
              <span style={{ fontSize: 13, color: subtle, flex: 1 }}>{icon} {label}</span>
              <ArrowRight size={13} color="#374151" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box" }}>
          <ShieldCheck size={16} /> Request Verification
        </button>

        {/* Visibility */}
        <div style={{ marginTop: 16, background: surface, borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Eye size={13} color={subtle} />
            <span style={{ fontSize: 12, color: subtle, flex: 1 }}>Visible to: Public</span>
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: surface, borderTop: `1px solid ${border}`, padding: "12px 24px 28px", display: "flex", justifyContent: "space-around" }}>
        {[
          { Icon: ShieldCheck, label: "Trust", active: true },
          { Icon: Activity, label: "Activity", active: false },
          { Icon: Lock, label: "Privacy", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: active ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
