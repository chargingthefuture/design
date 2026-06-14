// design-sync
// STATE: Unauthenticated — visitor with no session
import { Unlock as UnlockIcon, UserPlus, CheckCircle, Shield, ChevronRight } from "lucide-react";

const BRAND = "#C084FC";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const STEPS = [
  { n: "1", icon: "📝", title: "Create a free account", desc: "Sign up in 60 seconds. No credit card needed." },
  { n: "2", icon: "🔗", title: "Submit your Quora URL", desc: "Share your public Quora profile for identity verification." },
  { n: "3", icon: "🔍", title: "Admin reviews within 48h", desc: "A human checks your profile — not an algorithm." },
  { n: "4", icon: "🔓", title: "Full access unlocked", desc: "Access all 17 apps, the marketplace, and the economy." },
];

export function UnlockPublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <UnlockIcon size={18} color={BRAND} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Unlock Access</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, color: text, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <UserPlus size={13} /> Create Account
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 40px", display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 12, color: BRAND, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
            Verified access only
          </span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.15 }}>
            Create your account to begin<br />
            <span style={{ color: BRAND }}>the verification process</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520, lineHeight: 1.7 }}>
            Survivor Hub uses Quora profile verification to confirm that members are real people. This protects the community from trafficker infiltration and protects the integrity of this economy.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ padding: "14px 32px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <UserPlus size={16} /> Get started — it's free
            </button>
          </div>
        </div>
        <div style={{ width: 280, flexShrink: 0 }}>
          <div style={{ padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${border}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: BRAND, marginBottom: 14 }}>Why Quora verification?</div>
            {[
              { icon: "🛡", t: "Safe community", d: "Prevents bad actors from creating fake survivor accounts." },
              { icon: "🔗", t: "Proof of identity", d: "Quora history proves you're a real person online." },
              { icon: "🤝", t: "Admin-reviewed", d: "Every submission is reviewed by a real human, not a bot." },
              { icon: "🌐", t: "Public profile only", d: "We only need your public Quora URL — no login access." },
            ].map(({ icon, t, d }) => (
              <div key={t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{t}</div>
                  <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification flow steps */}
      <div style={{ padding: "0 64px 48px" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 16 }}>How verification works</div>
        <div style={{ display: "flex", gap: 12 }}>
          {STEPS.map(({ n, icon, title, desc }) => (
            <div key={n} style={{ flex: 1, padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>{n}</div>
                <span style={{ fontSize: 18 }}>{icon}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <button style={{ padding: "14px 24px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Start now <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
