// design-sync
// STATE: Populated (mobile) — Owner Review & Correction Console
import { useState } from "react";
import {
  ShieldCheck, Sparkles, Check, Pencil, X, FileText, Clock, AtSign, AlertTriangle, ChevronRight,
} from "lucide-react";

const ACCENT = "#0EA5E9";
const bg = "#0F1117";
const panel = "#0D0F14";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const CONF: Record<string, { label: string; color: string; pct: number }> = {
  high: { label: "High", color: "#22C55E", pct: 88 },
  medium: { label: "Medium", color: "#F59E0B", pct: 61 },
  low: { label: "Low", color: "#EF4444", pct: 34 },
};

const QUEUE = [
  { id: 1, q: "Is it safe to share my exact address with a host before I arrive?", asker: "Survivor #4821", channel: "#community", time: "2m", confidence: "low" },
  { id: 2, q: "How do ServiceCredits convert across two different apps?", asker: "Survivor #1190", channel: "#workforce", time: "11m", confidence: "high" },
  { id: 3, q: "What documents verify LightHouse housing?", asker: "Survivor #2077", channel: "#housing", time: "26m", confidence: "medium" },
];

const DRAFT = "Please don't share your exact address until you've completed a verified booking. Hosts only receive your precise location after both sides confirm — and you can choose a nearby safe meeting point instead. Your safety comes first.";
const SOURCES = ["LightHouse Safety Guidelines · §3", "Trust & Safety Policy"];

export function MobileAIReviewConsole() {
  const [selected, setSelected] = useState(1);
  const item = QUEUE.find((q) => q.id === selected)!;
  const conf = CONF[item.confidence];

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 13, fontWeight: 600, flexShrink: 0 }}>
        <span>9:41</span><span>📶 🔋</span>
      </div>

      {/* Header */}
      <div style={{ padding: "4px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: `${ACCENT}22`, border: `1px solid ${ACCENT}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShieldCheck size={17} color={ACCENT} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Review Console</div>
            <div style={{ fontSize: 11, color: subtle }}>AI Assistant answers awaiting review</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 9px", borderRadius: 14, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, fontSize: 11, color: ACCENT, fontWeight: 700 }}>
            <Clock size={11} /> {QUEUE.length}
          </span>
        </div>
      </div>

      {/* Queue chips */}
      <div style={{ display: "flex", gap: 8, padding: "12px 16px 4px", overflowX: "auto", flexShrink: 0 }}>
        {QUEUE.map((q) => {
          const c = CONF[q.confidence];
          const active = q.id === selected;
          return (
            <button key={q.id} onClick={() => setSelected(q.id)} style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 6, padding: "6px 11px", borderRadius: 16, cursor: "pointer", background: active ? `${ACCENT}18` : "rgba(255,255,255,0.03)", border: active ? `1px solid ${ACCENT}40` : `1px solid ${border}`, color: active ? text : "#9CA3AF", fontSize: 12, fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.color }} /> {q.asker.replace("Survivor ", "")}
            </button>
          );
        })}
      </div>

      {/* Detail scroll */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: subtle }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }}><AtSign size={10} /> {item.channel}</span>
          <span>{item.asker}</span>
          <span style={{ marginLeft: "auto" }}>{item.time}</span>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 6 }}>Question</div>
          <div style={{ padding: "13px 14px", borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, fontSize: 14, lineHeight: 1.5 }}>{item.q}</div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase" }}>AI draft</div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 9, padding: "1px 6px", borderRadius: 4, background: `${ACCENT}15`, color: "#7DD3FC", fontWeight: 600 }}><Sparkles size={8} /> Not sent</span>
          </div>
          <div style={{ padding: "14px", borderRadius: 11, background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, fontSize: 13.5, color: "#E8EAF0", lineHeight: 1.6 }}>{DRAFT}</div>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 6 }}>Confidence</div>
          <div style={{ padding: "12px 14px", borderRadius: 11, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: conf.color }}>{conf.label} confidence</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: conf.color }}>{conf.pct}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${conf.pct}%`, background: conf.color, borderRadius: 3 }} />
            </div>
            {item.confidence === "low" && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginTop: 9, fontSize: 11, color: "#FCA5A5", lineHeight: 1.45 }}>
                <AlertTriangle size={12} style={{ flexShrink: 0, marginTop: 1 }} /> Safety-sensitive — review wording carefully.
              </div>
            )}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 6 }}>Sources</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {SOURCES.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 11px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, fontSize: 12, color: "#9CA3AF" }}>
                <FileText size={12} color={ACCENT} /> {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky actions */}
      <div style={{ padding: "10px 16px 16px", borderTop: `1px solid ${border}`, background: panel, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <button style={{ width: "100%", padding: "12px 0", borderRadius: 11, background: "linear-gradient(135deg,#16A34A,#22C55E)", border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
          <Check size={16} /> Approve &amp; send
        </button>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, padding: "11px 0", borderRadius: 11, background: `${ACCENT}18`, border: `1px solid ${ACCENT}40`, color: "#7DD3FC", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Pencil size={14} /> Edit &amp; approve <ChevronRight size={13} />
          </button>
          <button style={{ padding: "11px 18px", borderRadius: 11, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <X size={14} /> Reject
          </button>
        </div>
      </div>
    </div>
  );
}
