// STATE: Unauthenticated — visitor with no session
import { Unlock as UnlockIcon, UserPlus, CheckCircle, ChevronRight } from "lucide-react";

const BRAND = "#10B981";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const STEPS = [
  { n: "1", icon: "📝", title: "Create a free account", desc: "Sign up in 60 seconds." },
  { n: "2", icon: "🔗", title: "Submit your Quora URL", desc: "Share your public Quora profile." },
  { n: "3", icon: "🔍", title: "Admin reviews in 48h", desc: "A human checks your profile." },
  { n: "4", icon: "🔓", title: "Full access unlocked", desc: "Access all apps and the economy." },
];

export function MobileUnlockPublic() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: `${BRAND}10`, borderBottom: `1px solid ${BRAND}25`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <UnlockIcon size={16} color={BRAND} />
            <span style={{ fontSize: 16, fontWeight: 700 }}>Unlock Access</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", border: `1px solid ${border}`, color: text, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
            <button style={{ padding: "5px 10px", borderRadius: 6, background: BRAND, border: "none", color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Join Free</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 16px" }}>

        {/* Badge */}
        <span style={{ padding: "3px 12px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 11, color: BRAND, fontWeight: 600, display: "inline-block", marginBottom: 14 }}>
          Verified access only
        </span>

        {/* Hero */}
        <h1 style={{ margin: "0 0 12px", fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>
          Create your account to begin{" "}
          <span style={{ color: BRAND }}>the verification process</span>
        </h1>
        <p style={{ margin: "0 0 22px", fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>
          Survivor Hub uses Quora profile verification to confirm members are real people. This protects the community and ensures a safe space for all survivors.
        </p>

        {/* Primary CTA */}
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box", marginBottom: 20 }}>
          <UserPlus size={15} /> Get started — it's free
        </button>

        {/* How it works */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 12 }}>How verification works</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {STEPS.map(({ n, icon, title, desc }) => (
              <div key={n} style={{ display: "flex", gap: 12, padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, alignItems: "center" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND, flexShrink: 0 }}>{n}</div>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text }}>{title}</div>
                  <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Quora mini panel */}
        <div style={{ padding: "14px", borderRadius: 14, background: surface, border: `1px solid ${border}`, marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: BRAND, marginBottom: 12 }}>Why Quora verification?</div>
          {[
            { icon: "🛡", t: "Safe community", d: "Prevents bad actors from creating fake survivor accounts." },
            { icon: "🔗", t: "Proof of identity", d: "Quora history proves you're a real person online." },
            { icon: "🌐", t: "Public profile only", d: "We only need your public Quora URL — no login access." },
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

        {/* Secondary CTA */}
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: BRAND, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxSizing: "border-box" }}>
          Start verification <ChevronRight size={14} />
        </button>
      </div>

      {/* Bottom nav (locked) */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0, opacity: 0.3 }}>
        {[UnlockIcon, CheckCircle].map((Icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Icon size={20} color={subtle} />
            <span style={{ fontSize: 10, color: subtle }}>{["Unlock", "Status"][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
