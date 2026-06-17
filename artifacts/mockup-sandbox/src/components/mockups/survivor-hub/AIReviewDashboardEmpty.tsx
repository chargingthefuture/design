// design-sync
// STATE: Empty — Owner Review & Correction Dashboard (queue clear)
import {
  ShieldCheck, Inbox, Sparkles, FileText, Bell, Settings, CheckCircle2,
} from "lucide-react";

const ACCENT = "var(--app-accent, #0EA5E9)";
const bg = "var(--comic-bg, #0F1117)";
const panel = "var(--comic-surface, #0D0F14)";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

export function AIReviewDashboardEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${ACCENT}22`, border: `1px solid ${ACCENT}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <ShieldCheck size={20} color={ACCENT} />
        </div>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}20`, border: `1px solid ${ACCENT}40`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: ACCENT }}><Inbox size={20} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><FileText size={20} /></button>
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${ACCENT}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: ACCENT }}>O</div>
      </aside>

      {/* Queue sidebar (empty) */}
      <aside style={{ width: 300, background: panel, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>Review Queue</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>AI Assistant drafts awaiting human review</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "4px 10px", borderRadius: 20, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", fontSize: 12, color: "#22C55E", fontWeight: 700 }}>
            <CheckCircle2 size={12} /> 0 pending
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", textAlign: "center", gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(34,197,94,0.1)", border: "1px dashed rgba(34,197,94,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Inbox size={20} color="#22C55E" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF" }}>Queue is clear</div>
          <div style={{ fontSize: 11.5, color: "#4B5563", lineHeight: 1.5 }}>New AI Assistant drafts will appear here for review.</div>
        </div>
      </aside>

      {/* Main empty */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, background: panel, flexShrink: 0 }}>
          <Sparkles size={18} color={ACCENT} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Review &amp; Correction Dashboard</div>
            <div style={{ fontSize: 12, color: subtle }}>Approve, correct, or reject AI Assistant answers before they reach survivors</div>
          </div>
        </header>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, gap: 16 }}>
          <div style={{ width: 88, height: 88, borderRadius: 26, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle2 size={42} color="#22C55E" />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>All caught up</div>
          <div style={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", maxWidth: 420, lineHeight: 1.6 }}>
            Every AI Assistant answer has been reviewed. Survivors only ever see answers a human has approved.
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            {[
              { label: "Approved today", value: "37" },
              { label: "Corrected today", value: "9" },
              { label: "Avg review", value: "2m 14s" },
            ].map(({ label, value }) => (
              <div key={label} style={{ padding: "14px 22px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: ACCENT }}>{value}</div>
                <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: panel, padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ padding: "16px", borderRadius: 12, background: `${ACCENT}08`, border: `1px solid ${ACCENT}20` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
            <ShieldCheck size={15} color={ACCENT} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#7DD3FC" }}>Reviewer guidance</span>
          </div>
          {[
            "Never approve answers that reveal a survivor's location or identity.",
            "Correct tone to be warm, plain, and non-judgmental.",
            "Reject and escalate anything involving immediate danger.",
          ].map((g) => (
            <div key={g} style={{ display: "flex", gap: 8, marginBottom: 9, fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>·</span> {g}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
