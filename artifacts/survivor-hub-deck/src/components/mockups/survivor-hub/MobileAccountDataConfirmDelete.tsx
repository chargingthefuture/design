// design-sync
// STATE: Confirmation dialog — full-account deletion (mobile, most critical screen)
import { useState } from "react";
import {
  Shield, Trash2, Lock, AlertTriangle, CheckCircle, X, Bell,
} from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PHRASE = "delete my account";

export function MobileAccountDataConfirmDelete() {
  const [input, setInput]       = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const ready = input.toLowerCase().trim() === PHRASE;

  if (confirmed) {
    return (
      <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
          <CheckCircle size={26} color="#22C55E" />
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 10, textAlign: "center" }}>Deletion queued</div>
        <div style={{ fontSize: 13, color: subtle, lineHeight: 1.7, textAlign: "center" }}>
          Your request has been received and usually completes within 48 hours. Your ServiceCredits will be settled through the standard process.
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 14px", borderBottom: `1px solid ${border}`, flexShrink: 0, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AlertTriangle size={16} color="#EF4444" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: text }}>Confirm Deletion</div>
          <div style={{ fontSize: 11, color: subtle }}>Full account · permanent</div>
        </div>
        <button style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <X size={14} color={subtle} />
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "20px 16px" }}>

        {/* Info panel */}
        <div style={{ padding: "16px", borderRadius: 14, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.18)", marginBottom: 18 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 12 }}>Delete your entire account</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 4 }}>
            {[
              { t: "All personal data deleted across 19 services",              Icon: Trash2,      c: "#EF4444" },
              { t: "ServiceCredits settled via standard process — not destroyed", Icon: CheckCircle, c: "#9CA3AF" },
              { t: "Audit records retained for platform integrity (by design)",   Icon: Lock,        c: "#9CA3AF" },
              { t: "Profile removed from all directories",                        Icon: Trash2,      c: "#EF4444" },
            ].map(({ t, Icon, c }, i) => (
              <div key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                <Icon size={13} color={c} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Confirm field */}
        <div style={{ padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, marginBottom: 18 }}>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 10, lineHeight: 1.5 }}>
            Type{" "}
            <span style={{ color: "#EF4444", fontWeight: 700, fontFamily: "monospace" }}>delete my account</span>{" "}
            to confirm.
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="delete my account"
            style={{ width: "100%", padding: "11px 12px", background: bg, border: `1px solid ${ready ? "rgba(239,68,68,0.5)" : border}`, borderRadius: 9, fontSize: 14, color: ready ? "#EF4444" : text, outline: "none", fontFamily: "monospace", boxSizing: "border-box" }}
          />
        </div>

        {/* Actions */}
        <button
          onClick={() => ready && setConfirmed(true)}
          style={{ width: "100%", padding: "14px", borderRadius: 12, background: ready ? "rgba(239,68,68,0.14)" : "rgba(255,255,255,0.04)", border: `1px solid ${ready ? "rgba(239,68,68,0.45)" : border}`, color: ready ? "#EF4444" : "#374151", fontSize: 15, fontWeight: 700, cursor: ready ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}>
          <Trash2 size={16} /> Delete permanently
        </button>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: `${BRAND}12`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
          Keep my data
        </button>

        {/* Deactivate alt */}
        <div style={{ marginTop: 20, padding: "14px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: subtle, marginBottom: 5 }}>Need a break instead?</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5, marginBottom: 10 }}>Deactivate temporarily — your data stays intact and you can return any time.</div>
          <button style={{ padding: "7px 14px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Deactivate instead</button>
        </div>
      </div>
    </div>
  );
}
