// design-sync
// STATE: Admin Hub — no plugins enabled yet (fresh install)
import { LayoutDashboard, Plus } from "lucide-react";

const ACCENT = "#6366F1";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

export function MobileAdminHubEmpty() {
  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "#0D0F14", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${ACCENT}20`, border: `1px solid ${ACCENT}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutDashboard size={16} color={ACCENT} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Admin Hub</div>
            <div style={{ fontSize: 11, color: subtle }}>Owner view · no plugins yet</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, fontSize: 11, color: ACCENT, fontWeight: 700 }}>ADMIN</div>
        </div>
      </div>

      {/* Empty state */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <LayoutDashboard size={32} color={ACCENT} />
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>No plugins enabled</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7, marginBottom: 28 }}>
          Enable plugins from Settings to start managing your hub. Each plugin adds a dedicated admin view here.
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: ACCENT, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          <Plus size={16} /> Enable plugins
        </button>
      </div>
    </div>
  );
}
