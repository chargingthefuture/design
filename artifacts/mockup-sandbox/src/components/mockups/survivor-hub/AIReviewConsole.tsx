// design-sync
// STATE: Populated — Owner Review & Correction Console
import { useState } from "react";
import {
  ShieldCheck, Inbox, Sparkles, Check, Pencil, X,
  FileText, Bell, Settings, Clock, AtSign, AlertTriangle,
} from "lucide-react";

const ACCENT = "#0EA5E9";
const bg = "#0F1117";
const panel = "#0D0F14";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const CONF: Record<string, { label: string; color: string; pct: number }> = {
  high: { label: "High confidence", color: "#22C55E", pct: 88 },
  medium: { label: "Medium confidence", color: "#F59E0B", pct: 61 },
  low: { label: "Low confidence", color: "#EF4444", pct: 34 },
};

const QUEUE = [
  { id: 1, q: "Is it safe to share my exact address with a host before I arrive?", asker: "Survivor #4821", channel: "#community", time: "2 min ago", confidence: "low" },
  { id: 2, q: "How do ServiceCredits convert when I trade across two different apps?", asker: "Survivor #1190", channel: "#workforce", time: "11 min ago", confidence: "high" },
  { id: 3, q: "What documents do I need to verify for LightHouse housing?", asker: "Survivor #2077", channel: "#housing", time: "26 min ago", confidence: "medium" },
  { id: 4, q: "Can I use the assistant to draft a message to my caseworker?", asker: "Survivor #3304", channel: "#community", time: "41 min ago", confidence: "high" },
];

const ANSWERS: Record<number, { draft: string; sources: string[] }> = {
  1: {
    draft: "Please don't share your exact address until you've completed a verified booking. Hosts on LightHouse only receive your precise location after both sides confirm — and you can choose a nearby safe meeting point instead. Your safety comes first.",
    sources: ["LightHouse Safety Guidelines · §3 Location Privacy", "Survivor Hub Trust & Safety Policy"],
  },
  2: { draft: "ServiceCredits keep the same value across every app in Survivor Hub…", sources: ["ServiceCredits Economy Docs"] },
  3: { draft: "For LightHouse you'll verify your survivor status and one form of ID…", sources: ["LightHouse Onboarding"] },
  4: { draft: "Yes — the assistant can help you draft messages. Nothing is sent on your behalf…", sources: ["Assistant Capabilities"] },
};

export function AIReviewConsole() {
  const [selected, setSelected] = useState(1);
  const item = QUEUE.find((q) => q.id === selected)!;
  const ans = ANSWERS[selected];
  const conf = CONF[item.confidence];

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 8, flexShrink: 0 }}>
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

      {/* Queue sidebar */}
      <aside style={{ width: 300, background: panel, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>Review Queue</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>AI Assistant drafts awaiting human review</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "4px 10px", borderRadius: 20, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, fontSize: 12, color: ACCENT, fontWeight: 700 }}>
            <Clock size={12} /> {QUEUE.length} pending
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 8px" }}>
          {QUEUE.map((q) => {
            const c = CONF[q.confidence];
            const active = q.id === selected;
            return (
              <button key={q.id} onClick={() => setSelected(q.id)} style={{ width: "100%", textAlign: "left", display: "flex", flexDirection: "column", gap: 6, padding: "12px", borderRadius: 10, marginBottom: 6, cursor: "pointer", background: active ? `${ACCENT}14` : "rgba(255,255,255,0.02)", border: active ? `1px solid ${ACCENT}40` : `1px solid ${border}` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: active ? text : "#D1D5DB", lineHeight: 1.45, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{q.q}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: c.color, fontWeight: 600 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.color }} /> {c.label}
                  </span>
                  <span style={{ fontSize: 11, color: "#4B5563", marginLeft: "auto" }}>{q.time}</span>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main detail */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, background: panel, flexShrink: 0 }}>
          <Sparkles size={18} color={ACCENT} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Review &amp; Correction Console</div>
            <div style={{ fontSize: 12, color: subtle }}>Approve, correct, or reject AI Assistant answers before they reach survivors</div>
          </div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Asker meta */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: subtle }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }}><AtSign size={11} /> {item.channel}</span>
              <span>Asked by {item.asker}</span>
              <span style={{ marginLeft: "auto" }}>{item.time}</span>
            </div>

            {/* Question */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 8 }}>Survivor's question</div>
              <div style={{ padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, fontSize: 15, color: text, lineHeight: 1.55 }}>{item.q}</div>
            </div>

            {/* AI draft */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase" }}>AI Assistant draft</div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, padding: "2px 7px", borderRadius: 4, background: `${ACCENT}15`, color: "#7DD3FC", fontWeight: 600 }}><Sparkles size={9} /> Not yet sent</span>
              </div>
              <div style={{ padding: "18px", borderRadius: 12, background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, fontSize: 14.5, color: "#E8EAF0", lineHeight: 1.65 }}>{ans.draft}</div>
            </div>

            {/* Sources + confidence */}
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 8 }}>Sources</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {ans.sources.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, fontSize: 12.5, color: "#9CA3AF" }}>
                      <FileText size={13} color={ACCENT} /> {s}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ width: 220, flexShrink: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: subtle, textTransform: "uppercase", marginBottom: 8 }}>Confidence</div>
                <div style={{ padding: "14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: conf.color }}>{conf.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: conf.color }}>{conf.pct}%</span>
                  </div>
                  <div style={{ height: 7, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${conf.pct}%`, background: conf.color, borderRadius: 4 }} />
                  </div>
                  {item.confidence === "low" && (
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginTop: 10, fontSize: 11.5, color: "#FCA5A5", lineHeight: 1.45 }}>
                      <AlertTriangle size={13} style={{ flexShrink: 0, marginTop: 1 }} /> Low confidence — safety-sensitive. Review wording carefully.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
              <button style={{ flex: 1, padding: "13px 0", borderRadius: 11, background: "linear-gradient(135deg,#16A34A,#22C55E)", border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                <Check size={16} /> Approve &amp; send
              </button>
              <button style={{ flex: 1, padding: "13px 0", borderRadius: 11, background: `${ACCENT}18`, border: `1px solid ${ACCENT}40`, color: "#7DD3FC", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                <Pencil size={15} /> Edit &amp; approve
              </button>
              <button style={{ padding: "13px 22px", borderRadius: 11, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                <X size={15} /> Reject
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: panel, padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Today</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
          {[
            { label: "Pending", value: String(QUEUE.length), color: ACCENT },
            { label: "Approved", value: "37", color: "#22C55E" },
            { label: "Corrected", value: "9", color: "#F59E0B" },
            { label: "Rejected", value: "2", color: "#EF4444" },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color }}>{value}</div>
              <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

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
