// design-sync
import { Heart, CheckCircle, MessageSquare, Clock, Home, Layers, User } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

export function MobileContributionsConfirmation() {
  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={13} color="#fff" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: text }}>Contributions</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 18px" }}>
        {/* Success icon + heading */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 28, textAlign: "center" }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: `${COLOR}18`, border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
            <CheckCircle size={30} color={COLOR} />
          </div>
          <h2 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: text }}>Submission received</h2>
          <p style={{ margin: 0, fontSize: 14, color: subtle }}>Your gift card submission is being reviewed.</p>
        </div>

        {/* Signal instructions */}
        <div style={{ background: surface, borderRadius: 12, padding: "16px", border: `1px solid ${border}`, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
            <MessageSquare size={14} color="#38BDF8" />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Send the code on Signal</span>
          </div>
          <p style={{ margin: "0 0 10px", fontSize: 13, color: subtle, lineHeight: 1.7 }}>
            Send your gift card code directly to the platform owner on Signal. Once matched, your Service Credits will be added.
          </p>
          <div style={{ padding: "10px 12px", background: bg, borderRadius: 8, border: `1px solid ${border}` }}>
            <div style={{ fontSize: 11, color: subtle, marginBottom: 3 }}>Questions?</div>
            <div style={{ fontSize: 12, color: "#38BDF8" }}>Post in the #support channel in the Hub.</div>
          </div>
        </div>

        {/* Credits pending */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: `${COLOR}08`, borderRadius: 10, border: `1px solid ${COLOR}20`, marginBottom: 28 }}>
          <Clock size={16} color="#F59E0B" />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>Service Credits pending</div>
            <div style={{ fontSize: 12, color: subtle }}>Credits will appear in your wallet after confirmation.</div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button style={{ width: "100%", padding: "12px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            Back to Hub
          </button>
          <button style={{ width: "100%", padding: "12px", borderRadius: 9, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 14, cursor: "pointer" }}>
            View my contributions
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {[
          { Icon: Home,   label: "Hub",     active: false },
          { Icon: Heart,  label: "Support", active: true  },
          { Icon: Layers, label: "Apps",    active: false },
          { Icon: User,   label: "Profile", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: active ? COLOR : subtle }} />
            <span style={{ fontSize: 9, fontWeight: active ? 700 : 400, color: active ? COLOR : subtle }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
