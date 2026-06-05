// design-sync
// STATE: Confirmation dialog — full-account deletion (most critical screen)
import { useState } from "react";
import {
  Shield, Trash2, Lock, AlertTriangle, CheckCircle, X,
  Bell, Settings, Database,
} from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PHRASE = "delete my account";

export function AccountDataConfirmDelete() {
  const [input, setInput]       = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const ready = input.toLowerCase().trim() === PHRASE;

  if (confirmed) {
    return (
      <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 440, padding: "0 32px" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle size={30} color="#22C55E" />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 10 }}>Deletion queued</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
            Your request has been received. This usually completes within 48 hours. You'll receive a confirmation once it's done. Your ServiceCredits will be settled through the standard process.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <Shield size={20} color={BRAND} />
        </div>
        {[Shield, Database, Trash2].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 2 ? "rgba(239,68,68,0.1)" : "transparent", border: i === 2 ? "1px solid rgba(239,68,68,0.3)" : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 2 ? "#EF4444" : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <AlertTriangle size={18} color="#EF4444" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Confirm Deletion</div>
            <div style={{ fontSize: 12, color: subtle }}>Account & Data · Full account deletion</div>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
            <X size={13} /> Cancel
          </button>
        </header>

        {/* Blurred rows behind the modal */}
        <div style={{ position: "absolute", inset: "56px 0 0 0", padding: "28px 40px", display: "flex", flexDirection: "column", gap: 8, filter: "blur(3px)", opacity: 0.12, pointerEvents: "none", overflow: "hidden" }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ height: 50, borderRadius: 12, background: "#161B27", border: `1px solid ${border}` }} />
          ))}
        </div>

        {/* Confirmation panel */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative" }}>
          <div style={{ width: 560, borderRadius: 22, background: "#0D0F14", border: "1px solid rgba(239,68,68,0.3)", boxShadow: "0 28px 72px rgba(0,0,0,0.65)", overflow: "hidden" }}>

            {/* Header band */}
            <div style={{ padding: "26px 30px 20px", background: "linear-gradient(135deg,rgba(239,68,68,0.1),rgba(233,30,140,0.04))", borderBottom: "1px solid rgba(239,68,68,0.12)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trash2 size={21} color="#EF4444" />
                </div>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: text }}>Delete your entire account</div>
                  <div style={{ fontSize: 13, color: "#EF4444", marginTop: 2 }}>Permanent — this cannot be reversed.</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "22px 30px" }}>

              {/* What happens list */}
              <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>What will happen</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                {[
                  { t: "All personal data deleted across 19 services",                                          Icon: Trash2,       c: "#EF4444" },
                  { t: "ServiceCredits balance settled via standard process — not destroyed",                    Icon: CheckCircle,  c: "#9CA3AF" },
                  { t: "Some audit records retained for platform integrity — this is intentional",               Icon: Lock,         c: "#9CA3AF" },
                  { t: "Your profile and username removed from all directories",                                 Icon: Trash2,       c: "#EF4444" },
                ].map(({ t, Icon, c }, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Icon size={14} color={c} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.55 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Confirm field */}
              <div style={{ padding: "16px", borderRadius: 12, background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.14)", marginBottom: 18 }}>
                <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 10, lineHeight: 1.5 }}>
                  To confirm, type{" "}
                  <span style={{ color: "#EF4444", fontWeight: 700, fontFamily: "monospace" }}>delete my account</span>{" "}
                  in the field below.
                </div>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="delete my account"
                  style={{ width: "100%", padding: "10px 12px", background: bg, border: `1px solid ${ready ? "rgba(239,68,68,0.5)" : border}`, borderRadius: 8, fontSize: 14, color: ready ? "#EF4444" : text, outline: "none", fontFamily: "monospace", boxSizing: "border-box" }}
                />
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => ready && setConfirmed(true)}
                  style={{ flex: 1, padding: "13px", borderRadius: 11, background: ready ? "rgba(239,68,68,0.14)" : "rgba(255,255,255,0.04)", border: `1px solid ${ready ? "rgba(239,68,68,0.45)" : border}`, color: ready ? "#EF4444" : "#374151", fontSize: 14, fontWeight: 700, cursor: ready ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                  <Trash2 size={15} /> Delete permanently
                </button>
                <button style={{ padding: "13px 22px", borderRadius: 11, background: `${BRAND}12`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Keep my data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
