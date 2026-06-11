// design-sync
// STATE: Entry control — ? icon in global nav rail, help menu open with "Report a problem" highlighted
import { Hash, Zap, Bell, Settings, HelpCircle, AlertCircle, ExternalLink } from "lucide-react";

const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const subtle = "var(--comic-text-secondary, #6B7280)";
const text = "var(--comic-text-primary, #F9FAFB)";

export function ReportAProblem() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden", position: "relative" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0, position: "relative", zIndex: 20 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 12 }}>SH</div>
        {[Hash, Zap].map((Icon, i) => (
          <div key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? "rgba(124,58,237,0.2)" : "transparent", border: i === 0 ? "1px solid rgba(124,58,237,0.4)" : "none", display: "flex", alignItems: "center", justifyContent: "center", color: i === 0 ? "#A78BFA" : subtle, cursor: "pointer" }}>
            <Icon size={20} />
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: subtle }}><Bell size={18} /></div>
        <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: subtle }}><Settings size={18} /></div>

        {/* ? / Help — active/pressed state */}
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(167,139,250,0.18)", border: "1px solid rgba(167,139,250,0.45)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA", cursor: "pointer" }}>
          <HelpCircle size={18} />
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#A78BFA" }}>S</div>

        {/* Help popover */}
        <div style={{ position: "absolute", bottom: 68, left: 80, background: "#1C2333", border: `1px solid ${border}`, borderRadius: 14, padding: "6px 0", minWidth: 210, boxShadow: "0 8px 32px rgba(0,0,0,0.6)", zIndex: 30 }}>
          {/* Caret */}
          <div style={{ position: "absolute", left: -5, bottom: 22, width: 9, height: 9, background: "#1C2333", borderBottom: `1px solid ${border}`, borderLeft: `1px solid ${border}`, transform: "rotate(45deg)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", cursor: "pointer", color: "#9CA3AF", fontSize: 13 }}>
            <ExternalLink size={14} style={{ color: "#4B5563" }} />
            <span>Help center</span>
          </div>
          <div style={{ height: 1, background: border, margin: "2px 0" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", cursor: "pointer", background: "rgba(167,139,250,0.1)", borderRadius: "0 0 8px 8px" }}>
            <AlertCircle size={14} style={{ color: "#A78BFA" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#C4B5FD" }}>Report a problem</span>
          </div>
        </div>
      </aside>

      {/* Second sidebar — dimmed */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, opacity: 0.3, flexShrink: 0 }}>
        <div style={{ padding: "16px 12px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 10 }}>Public Channel</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 8, background: "rgba(124,58,237,0.12)" }}>
            <Hash size={14} style={{ color: "#A78BFA" }} />
            <span style={{ fontSize: 14, color: "#F9FAFB" }}>community</span>
          </div>
        </div>
      </aside>

      {/* Main — dimmed */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", opacity: 0.2 }}>
        <div style={{ padding: "14px 24px", borderBottom: `1px solid ${border}` }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>community</div>
          <div style={{ fontSize: 12, color: subtle }}>4,912 online now</div>
        </div>
        <div style={{ flex: 1 }} />
      </main>

      {/* Right rail — dimmed */}
      <aside style={{ width: 240, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", opacity: 0.2, flexShrink: 0 }} />
    </div>
  );
}
