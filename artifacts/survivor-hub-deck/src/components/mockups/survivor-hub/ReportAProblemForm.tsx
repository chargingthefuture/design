// design-sync
// STATE: Report form — default / empty (authenticated)
import { Hash, Zap, Bell, Settings, HelpCircle, AlertCircle, X } from "lucide-react";

const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const subtle = "var(--comic-text-secondary, #6B7280)";
const text = "var(--comic-text-primary, #F9FAFB)";

function HubShell() {
  return (
    <div style={{ display: "flex", height: "100%", width: "100%", position: "absolute", inset: 0 }}>
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
        {[Hash, Zap].map((Icon, i) => (
          <div key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? "rgba(124,58,237,0.2)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: i === 0 ? "#A78BFA" : subtle }}>
            <Icon size={20} />
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <Bell size={18} color={subtle} />
        <Settings size={18} color={subtle} />
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(167,139,250,0.14)", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA" }}><HelpCircle size={18} /></div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#A78BFA" }}>S</div>
      </aside>
      <div style={{ flex: 1, opacity: 0.2, background: bg }} />
    </div>
  );
}

export function ReportAProblemForm() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden", position: "relative" }}>
      <HubShell />
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 10 }} />

      {/* Modal */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 20, width: 540, background: "#1C2333", border: `1px solid ${border}`, borderRadius: 20, padding: "32px 28px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: text }}>Report a problem</div>
            <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>We read every report.</div>
          </div>
          <button style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle, flexShrink: 0 }}>
            <X size={16} />
          </button>
        </div>

        {/* Field 1 */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>What went wrong?</span>
            <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 4, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.22)", color: "#FCA5A5" }}>required</span>
          </div>
          <textarea
            placeholder="Describe what happened…"
            rows={3}
            style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 14, color: "#E8EAF0", resize: "vertical", outline: "none", fontFamily: "'Inter', system-ui, sans-serif", boxSizing: "border-box" }}
          />
        </div>

        {/* Field 2 */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>What were you trying to do?</span>
            <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: subtle }}>optional</span>
          </div>
          <textarea
            placeholder="This helps us understand the context…"
            rows={2}
            style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 14, color: "#E8EAF0", resize: "vertical", outline: "none", fontFamily: "'Inter', system-ui, sans-serif", boxSizing: "border-box" }}
          />
        </div>

        {/* Privacy note */}
        <div style={{ display: "flex", gap: 9, alignItems: "flex-start", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 22 }}>
          <AlertCircle size={14} style={{ color: subtle, flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 12, color: subtle, lineHeight: 1.55 }}>Our team reads these to fix problems. Please don't include passwords or personal details.</span>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button style={{ padding: "10px 18px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: subtle, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Cancel</button>
          <button style={{ padding: "10px 22px", borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Send report</button>
        </div>
      </div>
    </div>
  );
}
