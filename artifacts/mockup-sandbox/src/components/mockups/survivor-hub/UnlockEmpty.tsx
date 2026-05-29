// design-sync
// STATE: Authenticated, has NOT submitted Quora URL yet — show submission form
import { useState } from "react";
import { Unlock as UnlockIcon, ExternalLink, Shield, CheckCircle, Send } from "lucide-react";

const BRAND = "#10B981";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

export function UnlockEmpty() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: 480, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle size={34} color={BRAND} />
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, color: text }}>Submission received!</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>An admin will review your Quora profile within 24–48 hours. You'll be notified when a decision is made.</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "#0D0F14", flexShrink: 0 }}>
        <UnlockIcon size={18} color={BRAND} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Unlock Full Access</div>
          <div style={{ fontSize: 12, color: subtle }}>Verify your Quora profile to get started</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "48px 64px", gap: 40 }}>

        {/* Form */}
        <div style={{ flex: 1, maxWidth: 520 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: text, marginBottom: 10 }}>Submit your Quora profile URL</div>
            <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
              To unlock full access to Survivor Hub, submit your Quora profile URL for manual verification. This helps us confirm you are a real person and reduces infiltration risk from bad actors.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
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

            <button
              onClick={() => { if (url.trim()) setSubmitted(true); }}
              disabled={!url.trim()}
              style={{ padding: "14px", borderRadius: 12, background: url.trim() ? BRAND : "rgba(255,255,255,0.06)", border: "none", color: url.trim() ? "#fff" : subtle, fontSize: 15, fontWeight: 700, cursor: url.trim() ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <Send size={16} /> Submit for Verification
            </button>
          </div>
        </div>

        {/* Why explainer */}
        <div style={{ width: 300, flexShrink: 0 }}>
          <div style={{ padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: BRAND, marginBottom: 14 }}>Why we verify via Quora</div>
            {[
              { icon: "🔗", t: "Real-person proof", d: "Quora activity proves you're a real person with history online." },
              { icon: "🛡", t: "Reduces infiltration", d: "Makes it harder for traffickers to create fake accounts." },
              { icon: "✅", t: "Admin-reviewed", d: "A human reviews every submission — no automated rejection." },
            ].map(({ icon, t, d }) => (
              <div key={t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{t}</div>
                  <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "14px 16px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}20` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <Shield size={13} color={BRAND} />
              <span style={{ fontSize: 12, fontWeight: 600, color: BRAND }}>What gets unlocked</span>
            </div>
            {["Full Directory", "Skills Hunt", "Service Credits", "All plugins"].map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: subtle, marginBottom: 5 }}>
                <CheckCircle size={11} color={border} /> {f}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
