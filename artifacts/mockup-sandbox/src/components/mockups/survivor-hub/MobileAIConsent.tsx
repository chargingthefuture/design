// design-sync
import {
  Hash, Sparkles, AtSign, ShieldCheck, Server, Lock,
  EyeOff, Plus, Send, Check,
} from "lucide-react";

const BRAND = "#7C3AED";
const CYAN = "#0EA5E9";
const bg = "var(--comic-bg, #0F1117)";
const panel = "var(--comic-surface, #0D0F14)";
const border = "rgba(255,255,255,0.08)";
const text = "var(--comic-text-primary, #E8EAF0)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const POINTS = [
  { icon: Server, title: "Runs on our own servers", desc: "Self-hosted in Survivor Hub. Your questions never leave our infrastructure." },
  { icon: EyeOff, title: "No third parties", desc: "We never send your messages to outside AI companies or data brokers." },
  { icon: ShieldCheck, title: "A teammate reviews answers", desc: "Sensitive answers are checked by a trained human first." },
  { icon: Lock, title: "Your safety comes first", desc: "It will never reveal your location or identity, or ask you to." },
];

export function MobileAIConsent() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 13, fontWeight: 600, flexShrink: 0 }}>
        <span>9:41</span>
        <span style={{ display: "flex", gap: 4, alignItems: "center" }}>📶 🔋</span>
      </div>

      {/* Header */}
      <div style={{ padding: "4px 16px 12px", display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg,${BRAND},${CYAN})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff" }}>S</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Survivor Hub</div>
          <div style={{ fontSize: 11, color: subtle, display: "flex", alignItems: "center", gap: 4 }}><Hash size={10} /> community</div>
        </div>
      </div>

      {/* Dimmed context + sheet */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, filter: "blur(2px)", opacity: 0.3 }}>
          {[0, 1].map((i) => (
            <div key={i} style={{ padding: "14px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
              <div style={{ height: 11, width: 130, borderRadius: 4, background: "rgba(255,255,255,0.08)", marginBottom: 9 }} />
              <div style={{ height: 9, width: "75%", borderRadius: 4, background: "rgba(255,255,255,0.05)", marginBottom: 6 }} />
              <div style={{ height: 9, width: "55%", borderRadius: 4, background: "rgba(255,255,255,0.05)" }} />
            </div>
          ))}
        </div>

        {/* Bottom sheet consent */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,9,13,0.55)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: "24px 24px 0 0", background: panel, border: `1px solid rgba(124,58,237,0.3)`, borderBottom: "none", boxShadow: "0 -20px 60px rgba(0,0,0,0.5)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} />
          </div>
          <div style={{ padding: "14px 20px 10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg,${BRAND},${CYAN})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Sparkles size={19} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800 }}>Meet the AI Assistant</div>
                <div style={{ fontSize: 12, color: "#A78BFA", display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                  <AtSign size={11} /> Summon it by typing <span style={{ color: "#C4B5FD", fontWeight: 600 }}>@comic</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 12.5, color: "#9CA3AF", lineHeight: 1.55, marginBottom: 14 }}>
              Before your first use, here's how it works and how we keep you safe.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 11 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={15} color="#A78BFA" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 11.5, color: subtle, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button style={{ width: "100%", padding: "13px 0", borderRadius: 12, background: `linear-gradient(135deg,${BRAND},${CYAN})`, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, marginBottom: 9 }}>
              <Check size={16} /> I understand — turn it on
            </button>
            <button style={{ width: "100%", padding: "12px 0", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, color: "#9CA3AF", fontSize: 14, fontWeight: 600, cursor: "pointer", marginBottom: 14 }}>
              Not now
            </button>
          </div>
        </div>
      </div>

      {/* Locked composer */}
      <div style={{ padding: "8px 16px 14px", borderTop: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, borderRadius: 14, opacity: 0.5 }}>
          <Plus size={16} color={subtle} />
          <span style={{ flex: 1, fontSize: 13, color: subtle }}>Share, or type @comic to ask…</span>
          <Send size={14} color={subtle} />
        </div>
      </div>
    </div>
  );
}
