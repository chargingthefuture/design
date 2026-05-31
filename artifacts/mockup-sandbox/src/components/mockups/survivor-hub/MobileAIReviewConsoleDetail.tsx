// design-sync
// STATE: Single-item review-edit (mobile) — Owner Review & Correction Console
import { useState } from "react";
import {
  Pencil, Check, X, FileText, AtSign, AlertTriangle, ArrowLeft, RotateCcw,
} from "lucide-react";

const ACCENT = "#0EA5E9";
const bg = "#0F1117";
const panel = "#0D0F14";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const QUESTION = "Is it safe to share my exact address with a host before I arrive?";
const AI_DRAFT = "You can share your address whenever you feel ready — most hosts ask for it once you book so they can plan your arrival.";
const SOURCES = ["LightHouse Safety Guidelines · §3", "Trust & Safety Policy"];

export function MobileAIReviewConsoleDetail() {
  const [corrected, setCorrected] = useState(
    "Please don't share your exact address until you've completed a verified booking. A host only receives your precise location after both sides confirm — and you can always choose a nearby safe meeting point. Your safety comes first."
  );

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 13, fontWeight: 600, flexShrink: 0 }}>
        <span>9:41</span><span>📶 🔋</span>
      </div>

      {/* Header */}
      <div style={{ padding: "4px 12px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0, display: "flex", alignItems: "center", gap: 8 }}>
        <button style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#9CA3AF" }}>
          <ArrowLeft size={15} />
        </button>
        <div style={{ flex: 1, fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 7 }}>
          <Pencil size={14} color={ACCENT} /> Edit &amp; approve
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, padding: "3px 8px", borderRadius: 5, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#FBBF24", fontWeight: 600 }}>
          <AlertTriangle size={10} /> Low
        </span>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: subtle }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }}><AtSign size={10} /> #community</span>
          <span>Survivor #4821</span>
          <span style={{ marginLeft: "auto" }}>2m</span>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 6 }}>Question</div>
          <div style={{ padding: "13px 14px", borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, fontSize: 14, lineHeight: 1.5 }}>{QUESTION}</div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase" }}>Original AI draft</div>
            <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 4, background: "rgba(239,68,68,0.12)", color: "#FCA5A5", fontWeight: 600 }}>Needs correction</span>
          </div>
          <div style={{ padding: "13px 14px", borderRadius: 11, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", fontSize: 13, color: "#D1D5DB", lineHeight: 1.55 }}>{AI_DRAFT}</div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: "#7DD3FC", textTransform: "uppercase" }}>Your corrected answer</div>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, color: subtle, background: "transparent", border: "none", cursor: "pointer", marginLeft: "auto" }}>
              <RotateCcw size={10} /> Reset
            </button>
          </div>
          <textarea
            value={corrected}
            onChange={(e) => setCorrected(e.target.value)}
            style={{ width: "100%", minHeight: 130, resize: "vertical", boxSizing: "border-box", padding: "13px 14px", borderRadius: 11, background: `${ACCENT}08`, border: `1px solid ${ACCENT}40`, color: "#E8EAF0", fontSize: 13.5, lineHeight: 1.55, fontFamily: "inherit", outline: "none" }}
          />
          <div style={{ fontSize: 10.5, color: "#4B5563", marginTop: 5, textAlign: "right" }}>{corrected.length} characters</div>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 6 }}>Sources</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {SOURCES.map((s) => (
              <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 10px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, fontSize: 11.5, color: "#9CA3AF" }}>
                <FileText size={11} color={ACCENT} /> {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 9, padding: "12px 13px", borderRadius: 11, background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
          <AlertTriangle size={15} color="#FBBF24" style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: 11.5, color: "#FCD34D", lineHeight: 1.5 }}>
            Make sure the corrected wording never pressures someone to reveal their location or identity before they're ready.
          </div>
        </div>
      </div>

      <div style={{ padding: "10px 16px 16px", borderTop: `1px solid ${border}`, background: panel, flexShrink: 0, display: "flex", gap: 8 }}>
        <button style={{ flex: 1, padding: "12px 0", borderRadius: 11, background: "linear-gradient(135deg,#16A34A,#22C55E)", border: "none", color: "#fff", fontSize: 13.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Check size={15} /> Approve corrected
        </button>
        <button style={{ padding: "12px 18px", borderRadius: 11, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171", fontSize: 13.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <X size={14} /> Reject
        </button>
      </div>
    </div>
  );
}
