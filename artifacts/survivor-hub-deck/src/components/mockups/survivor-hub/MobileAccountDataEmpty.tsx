// design-sync
// STATE: Authenticated + Empty — new account with no activity recorded yet (mobile)
import {
  Shield, Download, Lock, Info, Bell, AlertTriangle,
} from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PREVIEW = [
  { icon: "💬", name: "Chyme" },
  { icon: "📇", name: "Directory" },
  { icon: "🏠", name: "LightHouse" },
  { icon: "🪛", name: "Foundation" },
  { icon: "🎯", name: "Skills Hunt" },
];

export function MobileAccountDataEmpty() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 14px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={16} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Account & Data</div>
              <div style={{ fontSize: 11, color: subtle }}>Your data — under your control</div>
            </div>
          </div>
          <Bell size={18} color={subtle} />
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "28px 20px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Anchor */}
        <div style={{ width: 56, height: 56, borderRadius: 16, background: `${BRAND}08`, border: `1px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          <Shield size={24} color={`${BRAND}50`} />
        </div>
        <div style={{ fontSize: 19, fontWeight: 800, color: text, marginBottom: 8, textAlign: "center" }}>No personal data stored yet</div>
        <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6, textAlign: "center", marginBottom: 24 }}>
          As you use Survivor Hub apps, any personal data they hold will appear here for you to see and delete.
        </div>

        {/* Preview list */}
        <div style={{ width: "100%", marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Will appear when you use these services</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {PREVIEW.map(({ icon, name }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 11, background: surface, border: `1px solid ${border}`, opacity: 0.45 }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{icon}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: subtle }}>{name}</span>
                <span style={{ marginLeft: "auto", fontSize: 11, color: "#374151" }}>No data</span>
              </div>
            ))}
          </div>
        </div>

        {/* Retained note */}
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "12px", borderRadius: 12, background: `${BRAND}05`, border: `1px solid ${BRAND}15`, width: "100%", marginBottom: 16 }}>
          <Info size={13} color={BRAND} style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
            ServiceCredits ledger and GDP totals are always retained for financial integrity. They hold no personal identifiers.
          </div>
        </div>

        {/* Privacy points */}
        {[
          { Icon: Lock,     label: "All data encrypted at rest" },
          { Icon: Download, label: "Export your data any time" },
          { Icon: Shield,   label: "Delete any service independently" },
        ].map(({ Icon, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, background: surface, border: `1px solid ${border}`, width: "100%", marginBottom: 7 }}>
            <Icon size={14} color={BRAND} />
            <span style={{ fontSize: 13, color: subtle }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: Shield,       label: "Data" },
          { Icon: Download,     label: "Export" },
          { Icon: AlertTriangle,label: "Danger" },
        ].map(({ Icon, label }, i) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
