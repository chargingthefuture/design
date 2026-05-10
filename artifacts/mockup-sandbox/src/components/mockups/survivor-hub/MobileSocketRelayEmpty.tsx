import { Share2, Plus, Heart, Shield } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#F43F5E";

export function MobileSocketRelayEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Share2 size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>SocketRelay</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${COLOR}15`, border: `1px dashed ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Share2 size={30} color={`${COLOR}50`} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>No relay requests yet</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 8 }}>Post a need or offer help. All requests are anonymised and routed securely through the community.</div>
        {[
          { step: "1", label: "Post a need or offer" },
          { step: "2", label: "Matched survivor responds" },
          { step: "3", label: "Connection made securely" },
        ].map(({ step, label }) => (
          <div key={step} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, width: "100%", textAlign: "left" }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${COLOR}20`, border: `1px solid ${COLOR}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: COLOR, flexShrink: 0 }}>{step}</div>
            <span style={{ fontSize: 13, color: subtle }}>{label}</span>
          </div>
        ))}
        <div style={{ height: 12 }} />
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}>
          <Plus size={16} /> Post a Need
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${COLOR}40`, color: COLOR, fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Heart size={16} /> Offer Help
        </button>
      </div>
      <div style={{ padding: "14px 16px", borderTop: `1px solid ${border}`, background: surface }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Shield size={13} color={subtle} />
          <span style={{ fontSize: 12, color: subtle }}>Anonymous posting always available · No ID required</span>
        </div>
      </div>
    </div>
  );
}
