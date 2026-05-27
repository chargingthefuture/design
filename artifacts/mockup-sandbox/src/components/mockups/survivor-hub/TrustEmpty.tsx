// STATE: Authenticated, no trust signals yet
import {
  ShieldCheck, Bell, Settings, Activity, Circle,
  Shield, Eye, ChevronDown, ArrowRight,
} from "lucide-react";

const BRAND = "#0EA5E9";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const NAV_ITEMS = [
  { icon: ShieldCheck, label: "Trust" },
  { icon: Activity, label: "Activity" },
  { icon: Eye, label: "Privacy" },
  { icon: Shield, label: "History" },
];

const FIRST_ACTIONS = [
  { icon: "👤", label: "Complete your profile", desc: "Add a bio, location, and photo so others can recognise you." },
  { icon: "⚡", label: "Make your first transaction", desc: "Use Service Credits or complete a trade in the marketplace." },
  { icon: "🧩", label: "Use at least one plugin", desc: "Open LightHouse, Skills Hunt, Foundation — any app counts." },
  { icon: "🤝", label: "Get your first endorsement", desc: "Ask a community member who knows you to vouch for you." },
];

export function TrustEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}20`, border: `1px solid ${BRAND}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <ShieldCheck size={20} color={BRAND} />
        </div>
        {NAV_ITEMS.map(({ icon: Icon, label }, i) => (
          <button key={label} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${BRAND}20` : "transparent", border: i === 0 ? `1px solid ${BRAND}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}20`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, background: "#0D0F14", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🛡 Trust</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Community verification & endorsements</div>
        </div>
        <div style={{ padding: "0 8px 16px" }}>
          {NAV_ITEMS.map(({ icon: Icon, label }, i) => (
            <button key={label} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, cursor: "pointer", background: i === 0 ? `${BRAND}18` : "transparent", borderLeft: i === 0 ? `2px solid ${BRAND}` : "2px solid transparent", marginLeft: 2, marginBottom: 2, border: "none", textAlign: "left" }}>
              <Icon size={14} style={{ color: i === 0 ? BRAND : subtle }} />
              <span style={{ fontSize: 13, color: i === 0 ? text : "#9CA3AF", flex: 1 }}>{label}</span>
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <div style={{ padding: "10px 12px", borderRadius: 10, background: `${BRAND}08`, border: `1px solid ${BRAND}20` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: subtle, marginBottom: 2 }}>Trust Level</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: text }}>—</div>
            <div style={{ fontSize: 11, color: "#4B5563" }}>No signals yet</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <ShieldCheck size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Trust</div>
            <div style={{ fontSize: 12, color: subtle }}>Verification signals · community endorsements</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 20, padding: "4px 12px", fontSize: 11, color: subtle, fontWeight: 600 }}>
            <Circle size={8} color={subtle} />
            Unverified
          </div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "48px 64px" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, textAlign: "center" }}>

            {/* Illustration */}
            <div style={{ position: "relative" }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", border: `2px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${BRAND}08`, border: `1px solid ${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ShieldCheck size={36} style={{ color: `${BRAND}50` }} />
                </div>
              </div>
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div key={deg} style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: `${BRAND}25`, top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(56px) translateY(-50%)` }} />
              ))}
            </div>

            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: text, marginBottom: 10 }}>No trust signals yet</div>
              <div style={{ fontSize: 15, color: subtle, lineHeight: 1.7, maxWidth: 480 }}>
                Trust builds through community participation. Complete the actions below to establish your presence and earn your first trust signals.
              </div>
            </div>

            {/* First actions */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
              {FIRST_ACTIONS.map(({ icon, label, desc }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "left", cursor: "pointer" }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                  <ArrowRight size={14} color={subtle} />
                </div>
              ))}
            </div>

            <button style={{ padding: "13px 32px", borderRadius: 12, background: `${BRAND}18`, border: `1px solid ${BRAND}35`, color: BRAND, fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <ShieldCheck size={16} /> Request Manual Verification
            </button>

          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Trust Score</div>

        <div style={{ padding: "20px", borderRadius: 14, background: `${BRAND}06`, border: `1px solid ${BRAND}18`, marginBottom: 16, textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", border: `2px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: `${BRAND}50` }}>0</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: subtle, marginBottom: 4 }}>Trust Score</div>
          <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>Complete your first action to start building your score</div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>How Trust Works</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {[
            { step: "1", title: "Complete your profile", desc: "Verified identity is the foundation" },
            { step: "2", title: "Make transactions", desc: "Activity shows you're a real participant" },
            { step: "3", title: "Get endorsed", desc: "Community vouches for you" },
            { step: "4", title: "Earn verification", desc: "Admin reviews and marks you Verified" },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ display: "flex", gap: 12, padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: BRAND }}>{step}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 2 }}>{title}</div>
                <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Eye size={11} color={subtle} />
              <span style={{ fontSize: 11, color: subtle }}>Visible to: Public</span>
            </div>
            <ChevronDown size={11} color={subtle} />
          </div>
        </div>
      </aside>
    </div>
  );
}
