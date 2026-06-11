// design-sync
// STATE: Report form — submitting / in-progress
import { Hash, Zap, Bell, Settings, HelpCircle, AlertCircle, X } from "lucide-react";

const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const subtle = "var(--comic-text-secondary, #6B7280)";
const text = "var(--comic-text-primary, #F9FAFB)";

export function ReportAProblemSubmitting() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden", position: "relative" }}>
      {/* Hub shell */}
      <div style={{ display: "flex", height: "100%", width: "100%", position: "absolute", inset: 0 }}>
        <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
          {[Hash, Zap].map((Icon, i) => (
            <div key={i} style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: subtle }}><Icon size={20} /></div>
          ))}
          <div style={{ flex: 1 }} />
          <Bell size={18} color={subtle} />
          <Settings size={18} color={subtle} />
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(167,139,250,0.14)", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA" }}><HelpCircle size={18} /></div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#A78BFA" }}>S</div>
        </aside>
        <div style={{ flex: 1, opacity: 0.2, background: bg }} />
      </div>

      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 10 }} />

      {/* Modal */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 20, width: 540, background: "#1C2333", border: `1px solid ${border}`, borderRadius: 20, padding: "32px 28px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: text }}>Report a problem</div>
            <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>We read every report.</div>
          </div>
          <button disabled style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151", cursor: "not-allowed", flexShrink: 0 }}>
            <X size={16} />
          </button>
        </div>

        {/* Fields — disabled */}
        <div style={{ opacity: 0.45, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>What went wrong?</span>
          </div>
          <div style={{ padding: "12px 14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 14, color: "#9CA3AF", minHeight: 72, lineHeight: 1.6 }}>
            The page went blank after I tapped "Send" in the SocketRelay form. The whole screen just went dark and stayed that way.
          </div>
        </div>
        <div style={{ opacity: 0.45, marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 7 }}>What were you trying to do?</div>
          <div style={{ padding: "12px 14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 14, color: "#9CA3AF", minHeight: 52, lineHeight: 1.6 }}>
            Send a relay request to a neighbour in my area.
          </div>
        </div>

        <div style={{ display: "flex", gap: 9, alignItems: "flex-start", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 22 }}>
          <AlertCircle size={14} style={{ color: subtle, flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 12, color: subtle, lineHeight: 1.55 }}>Our team reads these to fix problems. Please don't include passwords or personal details.</span>
        </div>

        {/* Actions — submitting */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button disabled style={{ padding: "10px 18px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.07)", color: "#374151", fontWeight: 600, fontSize: 14, cursor: "not-allowed" }}>Cancel</button>
          <button disabled style={{ padding: "10px 22px", borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "not-allowed", opacity: 0.7, display: "flex", alignItems: "center", gap: 8 }}>
            <span>Sending</span>
            {/* Animated dots approximated */}
            <span style={{ display: "inline-flex", gap: 3 }}>
              {[0.35, 0.6, 0.9].map((op, i) => (
                <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255," + op + ")", display: "inline-block" }} />
              ))}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
