// design-sync
// STATE: Empty (mobile) — Owner Review & Correction Console
import { ShieldCheck, Clock, CheckCircle2, Inbox } from "lucide-react";

const ACCENT = "var(--app-accent, #0EA5E9)";
const bg = "var(--comic-bg, #0F1117)";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

export function MobileAIReviewConsoleEmpty() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 13, fontWeight: 600, flexShrink: 0 }}>
        <span>9:41</span><span>📶 🔋</span>
      </div>

      <div style={{ padding: "4px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: `${ACCENT}22`, border: `1px solid ${ACCENT}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShieldCheck size={17} color={ACCENT} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Review Console</div>
            <div style={{ fontSize: 11, color: subtle }}>AI Assistant answers awaiting review</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 9px", borderRadius: 14, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", fontSize: 11, color: "#22C55E", fontWeight: 700 }}>
            <Clock size={11} /> 0
          </span>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 28px", textAlign: "center", gap: 16 }}>
        <div style={{ width: 78, height: 78, borderRadius: 22, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CheckCircle2 size={38} color="#22C55E" />
        </div>
        <div style={{ fontSize: 19, fontWeight: 800 }}>All caught up</div>
        <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>
          Every AI Assistant answer has been reviewed. Survivors only ever see answers a human has approved.
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 4, width: "100%" }}>
          {[
            { label: "Approved", value: "37" },
            { label: "Corrected", value: "9" },
            { label: "Avg", value: "2m" },
          ].map(({ label, value }) => (
            <div key={label} style={{ flex: 1, padding: "12px 4px", borderRadius: 11, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: ACCENT }}>{value}</div>
              <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 4, fontSize: 11.5, color: "#4B5563" }}>
          <Inbox size={13} /> New drafts will appear here automatically.
        </div>
      </div>
    </div>
  );
}
