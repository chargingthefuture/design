// design-sync
// STATE: Single-item review-edit — Owner Review & Correction Console
import { useState } from "react";
import {
  ShieldCheck, Inbox, Sparkles, Check, X, FileText, Bell, Settings,
  ArrowLeft, AtSign, AlertTriangle, Pencil, RotateCcw,
} from "lucide-react";

const ACCENT = "#0EA5E9";
const bg = "#0F1117";
const panel = "#0D0F14";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const QUESTION = "Is it safe to share my exact address with a host before I arrive?";
const ASKER = "Survivor #4821";
const AI_DRAFT = "You can share your address whenever you feel ready — most hosts ask for it once you book so they can plan your arrival.";
const SOURCES = ["LightHouse Safety Guidelines · §3 Location Privacy", "Survivor Hub Trust & Safety Policy"];

export function AIReviewConsoleDetail() {
  const [corrected, setCorrected] = useState(
    "Please don't share your exact address until you've completed a verified booking. On LightHouse, a host only receives your precise location after both sides confirm — and you can always choose a nearby safe meeting point instead. Your safety comes first, and you're never obligated to share more than you're comfortable with."
  );

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${ACCENT}22`, border: `1px solid ${ACCENT}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <ShieldCheck size={20} color={ACCENT} />
        </div>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}20`, border: `1px solid ${ACCENT}40`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: ACCENT }}><Inbox size={20} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><FileText size={20} /></button>
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${ACCENT}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: ACCENT }}>O</div>
      </aside>

      {/* Main — full-width edit view */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, background: panel, flexShrink: 0 }}>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: "#9CA3AF", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            <ArrowLeft size={14} /> Queue
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
              <Pencil size={15} color={ACCENT} /> Edit &amp; approve answer
            </div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, padding: "4px 10px", borderRadius: 6, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#FBBF24", fontWeight: 600 }}>
            <AlertTriangle size={12} /> Low confidence
          </span>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Asker meta */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: subtle }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }}><AtSign size={11} /> #community</span>
              <span>Asked by {ASKER}</span>
              <span style={{ marginLeft: "auto" }}>2 min ago</span>
            </div>

            {/* Question */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 8 }}>Survivor's question</div>
              <div style={{ padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, fontSize: 15, lineHeight: 1.55 }}>{QUESTION}</div>
            </div>

            {/* Two-column: original draft vs corrected */}
            <div style={{ display: "flex", gap: 16 }}>
              {/* Original AI draft (read-only) */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase" }}>Original AI draft</div>
                  <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 4, background: "rgba(239,68,68,0.12)", color: "#FCA5A5", fontWeight: 600 }}>Needs correction</span>
                </div>
                <div style={{ padding: "16px", borderRadius: 12, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", fontSize: 14, color: "#D1D5DB", lineHeight: 1.6, textDecoration: "none" }}>
                  {AI_DRAFT}
                </div>
              </div>

              {/* Corrected text (editable) */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#7DD3FC", textTransform: "uppercase" }}>Your corrected answer</div>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: subtle, background: "transparent", border: "none", cursor: "pointer", marginLeft: "auto" }}>
                    <RotateCcw size={11} /> Reset
                  </button>
                </div>
                <textarea
                  value={corrected}
                  onChange={(e) => setCorrected(e.target.value)}
                  style={{ width: "100%", minHeight: 150, resize: "vertical", boxSizing: "border-box", padding: "16px", borderRadius: 12, background: `${ACCENT}08`, border: `1px solid ${ACCENT}40`, color: "#E8EAF0", fontSize: 14, lineHeight: 1.6, fontFamily: "inherit", outline: "none" }}
                />
                <div style={{ fontSize: 11, color: "#4B5563", marginTop: 6, textAlign: "right" }}>{corrected.length} characters</div>
              </div>
            </div>

            {/* Sources */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 8 }}>Sources</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SOURCES.map((s) => (
                  <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, fontSize: 12.5, color: "#9CA3AF" }}>
                    <FileText size={13} color={ACCENT} /> {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Safety reminder */}
            <div style={{ display: "flex", gap: 10, padding: "14px 16px", borderRadius: 12, background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <AlertTriangle size={16} color="#FBBF24" style={{ flexShrink: 0, marginTop: 1 }} />
              <div style={{ fontSize: 12.5, color: "#FCD34D", lineHeight: 1.55 }}>
                This answer touches survivor safety. Make sure the corrected wording never pressures someone to reveal their location or identity before they're ready.
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
              <button style={{ flex: 1, padding: "13px 0", borderRadius: 11, background: "linear-gradient(135deg,#16A34A,#22C55E)", border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                <Check size={16} /> Approve corrected answer
              </button>
              <button style={{ padding: "13px 22px", borderRadius: 11, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                <X size={15} /> Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
