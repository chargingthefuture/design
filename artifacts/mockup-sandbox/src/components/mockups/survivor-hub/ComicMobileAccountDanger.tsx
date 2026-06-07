// design-sync
// THEME: Comic Dark — Account & Data, Mobile · Confirm Delete

import { useState } from "react";
import {
  Shield, Trash2, Lock, AlertTriangle, CheckCircle, X,
} from "lucide-react";

const bg     = "#0D0D0D";
const surface = "#141414";
const ink    = "#D4C49A";
const inkDim = "#7A6A50";
const accent = "#B91C1C";
const cream  = "#EDE3CB";
const shadow = `3px 3px 0 ${ink}`;
const PHRASE = "delete my account";

export function ComicMobileAccountDanger() {
  const [input, setInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const ready = input.toLowerCase().trim() === PHRASE;

  if (confirmed) {
    return (
      <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 28px" }}>
        <div style={{ width: 56, height: 56, background: "#0A0A0A", border: `3px solid #22C55E`, boxShadow: `4px 4px 0 #22C55E`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
          <CheckCircle size={28} color="#22C55E" />
        </div>
        <div style={{ fontSize: 20, fontWeight: 900, color: cream, marginBottom: 10, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.08em" }}>Deletion Queued</div>
        <div style={{ fontSize: 12, color: inkDim, lineHeight: 1.8, textAlign: "center", borderLeft: `3px solid ${ink}`, paddingLeft: 12 }}>
          Your request has been received. Usually completes within 48 hours. Your ServiceCredits will be settled through the standard process.
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#080808", borderBottom: `1px solid ${ink}30`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", flexShrink: 0 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: ink }}>9:41</span>
        <span style={{ fontSize: 11, color: inkDim }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "11px 14px 12px", borderBottom: `2px solid ${accent}`, background: `${accent}08`, flexShrink: 0, display: "flex", alignItems: "center", gap: 9 }}>
        <div style={{ width: 32, height: 32, background: `${accent}14`, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AlertTriangle size={15} color={accent} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: cream, textTransform: "uppercase", letterSpacing: "0.06em" }}>Confirm Deletion</div>
          <div style={{ fontSize: 10, color: accent, fontWeight: 700 }}>Full Account · Permanent</div>
        </div>
        <button style={{ width: 28, height: 28, background: surface, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <X size={13} color={inkDim} />
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "16px 14px" }}>

        {/* Info panel */}
        <div style={{ padding: "14px", background: `${accent}08`, border: `2px solid ${accent}`, boxShadow: `3px 3px 0 ${accent}`, marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: cream, marginBottom: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>Delete Your Entire Account</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { t: "All personal data deleted across 19 services",              Icon: Trash2,      c: accent },
              { t: "ServiceCredits settled via standard process — not destroyed", Icon: CheckCircle, c: inkDim },
              { t: "Audit records retained for platform integrity (by design)",   Icon: Lock,        c: inkDim },
              { t: "Profile removed from all directories",                        Icon: Trash2,      c: accent },
            ].map(({ t, Icon, c }, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Icon size={12} color={c} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 11, color: c === accent ? `${accent}CC` : inkDim, lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Confirm field */}
        <div style={{ padding: "12px", background: surface, border: `2px solid ${ink}40`, marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: inkDim, marginBottom: 9, lineHeight: 1.5 }}>
            Type{" "}
            <span style={{ color: accent, fontWeight: 800, fontFamily: "monospace" }}>delete my account</span>{" "}
            to confirm.
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="delete my account"
            style={{ width: "100%", padding: "10px 12px", background: bg, border: `2px solid ${ready ? accent : inkDim + "40"}`, boxShadow: ready ? `2px 2px 0 ${accent}` : "none", fontSize: 13, color: ready ? accent : cream, outline: "none", fontFamily: "monospace", boxSizing: "border-box", fontWeight: 700 }}
          />
        </div>

        {/* Actions */}
        <button
          onClick={() => ready && setConfirmed(true)}
          style={{ width: "100%", padding: "13px", background: ready ? `${accent}14` : `${inkDim}08`, border: `2px solid ${ready ? accent : inkDim + "30"}`, boxShadow: ready ? `3px 3px 0 ${accent}` : "none", color: ready ? accent : inkDim + "60", fontSize: 13, fontWeight: 800, cursor: ready ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <Trash2 size={15} /> Delete Permanently
        </button>
        <button style={{ width: "100%", padding: "13px", background: `${ink}0C`, border: `2px solid ${ink}60`, boxShadow: `2px 2px 0 ${ink}40`, color: ink, fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em" }}>
          Keep My Data
        </button>

        <div style={{ marginTop: 16, padding: "12px 14px", background: surface, border: `1.5px solid ${inkDim}50` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: inkDim, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Need a break instead?</div>
          <div style={{ fontSize: 11, color: "#5A4A30", lineHeight: 1.5, marginBottom: 9 }}>Deactivate temporarily — data stays intact and you can return any time.</div>
          <button style={{ padding: "6px 12px", background: bg, border: `1.5px solid ${inkDim}50`, color: inkDim, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Deactivate Instead</button>
        </div>
      </div>
    </div>
  );
}
