// design-sync
// STATE: Authenticated, has NOT submitted Quora URL yet — mobile submission form
import { useState } from "react";
import { Unlock as UnlockIcon, ExternalLink, Shield, CheckCircle, Send } from "lucide-react";

const BRAND = "#10B981";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

export function MobileUnlockEmpty() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>
        <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
          <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
          <span style={{ fontSize: 12, color: subtle }}>•••</span>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckCircle size={32} color={BRAND} />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: text }}>Submission received!</div>
            <div style={{ fontSize: 13, color: subtle, lineHeight: 1.7, maxWidth: 280 }}>
              An admin will review your Quora profile within 24–48 hours. You'll be notified when a decision is made.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: "var(--comic-surface, #0D0F14)", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UnlockIcon size={16} color={BRAND} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Unlock Full Access</div>
            <div style={{ fontSize: 11, color: subtle }}>Verify your Quora profile to get started</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 8 }}>Submit your Quora profile URL</div>
          <div style={{ fontSize: 13, color: subtle, lineHeight: 1.7 }}>
            To unlock full access, submit your Quora profile URL for manual verification. This helps confirm you're a real person and reduces infiltration risk.
          </div>
        </div>

        {/* URL input */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 8 }}>
            Your Quora Profile URL <span style={{ color: BRAND }}>*</span>
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${url ? BRAND + "50" : border}`, borderRadius: 12 }}>
            <ExternalLink size={14} color={subtle} style={{ flexShrink: 0 }} />
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://quora.com/profile/your-name"
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: text, fontFamily: "inherit" }}
            />
          </div>
          <div style={{ fontSize: 11, color: "#4B5563", marginTop: 6 }}>
            Make sure your Quora profile is set to public before submitting.
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={() => { if (url.trim()) setSubmitted(true); }}
          disabled={!url.trim()}
          style={{ width: "100%", padding: "14px", borderRadius: 12, background: url.trim() ? BRAND : "rgba(255,255,255,0.06)", border: "none", color: url.trim() ? "#fff" : subtle, fontSize: 15, fontWeight: 700, cursor: url.trim() ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box", marginBottom: 20 }}
        >
          <Send size={15} /> Submit for Verification
        </button>

        {/* Why Quora */}
        <div style={{ padding: "16px", borderRadius: 14, background: surface, border: `1px solid ${border}`, marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: BRAND, marginBottom: 12 }}>Why we verify via Quora</div>
          {[
            { icon: "🔗", t: "Real-person proof", d: "Quora activity proves you're a real person with history online." },
            { icon: "🛡", t: "Reduces infiltration", d: "Makes it harder for traffickers to create fake accounts." },
            { icon: "✅", t: "Admin-reviewed", d: "A human reviews every submission — no automated rejection." },
          ].map(({ icon, t, d }) => (
            <div key={t} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 2 }}>{t}</div>
                <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* What gets unlocked */}
        <div style={{ padding: "12px 14px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}20` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Shield size={12} color={BRAND} />
            <span style={{ fontSize: 11, fontWeight: 600, color: BRAND }}>What gets unlocked</span>
          </div>
          {["Full Directory", "Skills Hunt", "Service Credits", "All plugins"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: subtle, marginBottom: 6 }}>
              <CheckCircle size={11} color={border} /> {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
