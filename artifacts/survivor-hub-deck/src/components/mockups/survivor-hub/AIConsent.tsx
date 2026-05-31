// design-sync
import {
  Hash, Sparkles, AtSign, ShieldCheck, Server, Lock,
  EyeOff, Plus, Send, Check, X,
} from "lucide-react";

const BRAND = "#7C3AED";
const CYAN = "#0EA5E9";
const bg = "#0F1117";
const panel = "#0D0F14";
const border = "rgba(255,255,255,0.08)";
const text = "#E8EAF0";
const subtle = "#6B7280";

const POINTS = [
  { icon: Server, title: "Runs on our own servers", desc: "The AI Assistant is self-hosted inside Survivor Hub. Your questions never leave our infrastructure." },
  { icon: EyeOff, title: "No third parties", desc: "We don't send your messages to outside AI companies, advertisers, or data brokers — ever." },
  { icon: ShieldCheck, title: "A teammate reviews answers", desc: "Sensitive answers are checked by a trained human before they reach you." },
  { icon: Lock, title: "Your safety comes first", desc: "The assistant will never reveal your location or identity, or ask you to." },
];

export function AIConsent() {
  return (
    <div style={{ width: 1440, height: 900, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Top bar */}
      <header style={{ height: 60, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 14, background: panel, flexShrink: 0 }}>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg,${BRAND},${CYAN})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff" }}>S</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Survivor Hub</div>
          <div style={{ fontSize: 12, color: subtle, display: "flex", alignItems: "center", gap: 5 }}><Hash size={12} /> community</div>
        </div>
      </header>

      {/* Dimmed channel context */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, padding: "24px 64px", display: "flex", flexDirection: "column", gap: 14, filter: "blur(2px)", opacity: 0.35, pointerEvents: "none" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, maxWidth: 760 }}>
              <div style={{ height: 12, width: 160, borderRadius: 4, background: "rgba(255,255,255,0.08)", marginBottom: 10 }} />
              <div style={{ height: 10, width: "70%", borderRadius: 4, background: "rgba(255,255,255,0.05)", marginBottom: 6 }} />
              <div style={{ height: 10, width: "52%", borderRadius: 4, background: "rgba(255,255,255,0.05)" }} />
            </div>
          ))}
        </div>

        {/* Consent modal */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,9,13,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 560, borderRadius: 22, background: panel, border: `1px solid rgba(124,58,237,0.3)`, boxShadow: "0 30px 80px rgba(0,0,0,0.55)", overflow: "hidden" }}>
            {/* Header band */}
            <div style={{ padding: "26px 30px 20px", background: `linear-gradient(135deg,rgba(124,58,237,0.18),rgba(14,165,233,0.1))`, borderBottom: `1px solid ${border}`, position: "relative" }}>
              <div style={{ position: "absolute", top: 18, right: 18, width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={15} color={subtle} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: `linear-gradient(135deg,${BRAND},${CYAN})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 800 }}>Meet the AI Assistant</div>
                  <div style={{ fontSize: 13, color: "#A78BFA", display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                    <AtSign size={12} /> Summon it any time by typing <span style={{ color: "#C4B5FD", fontWeight: 600 }}>@comic</span>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 13.5, color: "#9CA3AF", lineHeight: 1.6 }}>
                Before you use it for the first time, here's exactly how it works and how we protect you.
              </div>
            </div>

            {/* Points */}
            <div style={{ padding: "22px 30px", display: "flex", flexDirection: "column", gap: 16 }}>
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} color="#A78BFA" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 12.5, color: subtle, lineHeight: 1.55 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ padding: "0 30px 26px", display: "flex", gap: 12 }}>
              <button style={{ flex: 1, padding: "13px 0", borderRadius: 12, background: `linear-gradient(135deg,${BRAND},${CYAN})`, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                <Check size={16} /> I understand — turn it on
              </button>
              <button style={{ padding: "13px 22px", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, color: "#9CA3AF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Composer (locked behind consent) */}
      <div style={{ padding: "16px 64px 22px", borderTop: `1px solid ${border}`, background: panel, flexShrink: 0 }}>
        <div style={{ maxWidth: 760, display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, borderRadius: 14, opacity: 0.5 }}>
          <Plus size={18} color={subtle} />
          <span style={{ flex: 1, fontSize: 14, color: subtle }}>Share with the community, or type @comic to ask…</span>
          <button style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.06)", border: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Send size={15} color={subtle} />
          </button>
        </div>
      </div>
    </div>
  );
}
