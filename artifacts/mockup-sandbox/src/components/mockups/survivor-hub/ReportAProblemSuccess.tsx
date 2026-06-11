// design-sync
// STATE: Report form — success / sent
import { Hash, Zap, Bell, Settings, HelpCircle, CheckCircle } from "lucide-react";

const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const subtle = "var(--comic-text-secondary, #6B7280)";
const text = "var(--comic-text-primary, #F9FAFB)";

export function ReportAProblemSuccess() {
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
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 20, width: 480, background: "#1C2333", border: `1px solid ${border}`, borderRadius: 20, padding: "44px 36px 36px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", textAlign: "center" }}>
        {/* Icon */}
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <CheckCircle size={28} style={{ color: "#22C55E" }} />
        </div>

        <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 10 }}>Got it — we'll look into this.</div>
        <div style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 30 }}>
          We'll read your report and use it to fix problems in the app. You won't get a reply, but your report makes a difference.
        </div>

        {/* Actions */}
        <button style={{ width: "100%", padding: "12px", borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", marginBottom: 12 }}>
          Done
        </button>
        <button style={{ background: "none", border: "none", color: subtle, fontSize: 13, cursor: "pointer", textDecoration: "underline" }}>
          Report another problem
        </button>
      </div>
    </div>
  );
}
