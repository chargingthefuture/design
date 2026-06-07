// design-sync
// THEME: Comic Dark — Account & Data, Web · Confirm Delete

import { useState } from "react";
import {
  Shield, Trash2, Lock, AlertTriangle, CheckCircle, X, Bell, Settings, Database,
} from "lucide-react";

const bg      = "#0D0D0D";
const surface = "#141414";
const ink     = "#D4C49A";
const inkDim  = "#7A6A50";
const accent  = "#B91C1C";
const cream   = "#EDE3CB";
const shadow  = `3px 3px 0 ${ink}`;
const PHRASE  = "delete my account";

export function ComicAccountDataDanger() {
  const [input, setInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const ready = input.toLowerCase().trim() === PHRASE;

  if (confirmed) {
    return (
      <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 420, padding: "0 32px" }}>
          <div style={{ width: 64, height: 64, background: "#0A0A0A", border: `3px solid #22C55E`, boxShadow: `4px 4px 0 #22C55E`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle size={32} color="#22C55E" />
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: cream, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Deletion Queued</div>
          <div style={{ fontSize: 13, color: inkDim, lineHeight: 1.8, borderLeft: `3px solid ${ink}`, paddingLeft: 14 }}>
            Your request has been received. This usually completes within 48 hours. You'll receive a confirmation once done. Your ServiceCredits will be settled through the standard process.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 64, background: "#080808", borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, paddingBottom: 14, gap: 6, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, background: surface, border: `2px solid ${ink}`, boxShadow: shadow, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
          <Shield size={18} color={ink} />
        </div>
        {[Database, Trash2, AlertTriangle].map((Icon, i) => (
          <button key={i} style={{ width: 40, height: 40, background: i === 1 ? `${accent}18` : "transparent", border: i === 1 ? `1.5px solid ${accent}` : `1.5px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 1 ? accent : inkDim }}>
            <Icon size={18} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 40, height: 40, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Bell size={16} /></button>
        <button style={{ width: 40, height: 40, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Settings size={16} /></button>
        <div style={{ width: 30, height: 30, background: surface, border: `1.5px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ink }}>S</div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}>
        <header style={{ height: 52, borderBottom: `2px solid ${accent}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 14, background: `${accent}08`, flexShrink: 0 }}>
          <AlertTriangle size={16} color={accent} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: cream, letterSpacing: "0.08em", textTransform: "uppercase" }}>Confirm Deletion</div>
            <div style={{ fontSize: 11, color: accent }}>Account & Data · Full Account Deletion</div>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", background: surface, border: `1.5px solid ${inkDim}60`, color: inkDim, fontSize: 11, fontWeight: 700, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <X size={12} /> Cancel
          </button>
        </header>

        {/* Blurred rows behind the panel */}
        <div style={{ position: "absolute", inset: "52px 0 0 0", padding: "24px 40px", display: "flex", flexDirection: "column", gap: 7, filter: "blur(3px)", opacity: 0.08, pointerEvents: "none", overflow: "hidden" }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ height: 44, background: surface, border: `1px solid ${ink}30` }} />
          ))}
        </div>

        {/* Confirmation panel */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative" }}>
          <div style={{ width: 560, background: surface, border: `3px solid ${accent}`, boxShadow: `6px 6px 0 ${accent}`, overflow: "hidden" }}>

            {/* Header band */}
            <div style={{ padding: "22px 28px 18px", background: `${accent}0C`, borderBottom: `2px solid ${accent}50` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 44, height: 44, background: `${accent}14`, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trash2 size={20} color={accent} />
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: cream, letterSpacing: "0.06em", textTransform: "uppercase" }}>Delete Your Entire Account</div>
                  <div style={{ fontSize: 12, color: accent, marginTop: 3, fontWeight: 700, letterSpacing: "0.04em" }}>PERMANENT — THIS CANNOT BE REVERSED.</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "20px 28px" }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: ink, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10, borderLeft: `3px solid ${ink}`, paddingLeft: 8 }}>What Will Happen</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
                {[
                  { t: "All personal data deleted across 19 services",                          Icon: Trash2,      c: accent },
                  { t: "ServiceCredits settled via standard process — not destroyed",            Icon: CheckCircle, c: inkDim },
                  { t: "Some audit records retained for platform integrity — intentional",        Icon: Lock,        c: inkDim },
                  { t: "Your profile and username removed from all directories",                 Icon: Trash2,      c: accent },
                ].map(({ t, Icon, c }, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Icon size={13} color={c} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: c === accent ? `${accent}CC` : inkDim, lineHeight: 1.55 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Confirm field */}
              <div style={{ padding: "14px", background: bg, border: `2px solid ${accent}50`, marginBottom: 16 }}>
                <div style={{ fontSize: 12, color: inkDim, marginBottom: 10, lineHeight: 1.5 }}>
                  To confirm, type{" "}
                  <span style={{ color: accent, fontWeight: 800, fontFamily: "monospace" }}>delete my account</span>{" "}
                  in the field below.
                </div>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="delete my account"
                  style={{ width: "100%", padding: "10px 12px", background: "#080808", border: `2px solid ${ready ? accent : inkDim + "40"}`, boxShadow: ready ? `2px 2px 0 ${accent}` : "none", fontSize: 13, color: ready ? accent : cream, outline: "none", fontFamily: "monospace", boxSizing: "border-box", fontWeight: 700 }}
                />
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => ready && setConfirmed(true)}
                  style={{ flex: 1, padding: "12px", background: ready ? `${accent}14` : `${inkDim}08`, border: `2px solid ${ready ? accent : inkDim + "30"}`, boxShadow: ready ? `3px 3px 0 ${accent}` : "none", color: ready ? accent : inkDim + "60", fontSize: 13, fontWeight: 800, cursor: ready ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  <Trash2 size={14} /> Delete Permanently
                </button>
                <button style={{ padding: "12px 22px", background: `${ink}0C`, border: `2px solid ${ink}60`, boxShadow: `2px 2px 0 ${ink}40`, color: ink, fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em" }}>
                  Keep My Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
