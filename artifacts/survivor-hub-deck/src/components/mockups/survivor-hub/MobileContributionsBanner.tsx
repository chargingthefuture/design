// design-sync
// STATE: App-wide fundraiser banner — phone-width placement preview
import { useState } from "react";
import { Heart, DollarSign, MessageSquare, Github, Home, Layers, User } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const GOALS = [
  { label: "Funding",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
  { label: "Quora",    current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
  { label: "Stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
];

export function MobileContributionsBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* App header */}
      <div style={{ padding: "10px 16px", background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>SH</span>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: text }}>Survivor Hub</span>
      </div>

      {/* The banner — slim, non-blocking */}
      {!dismissed && (
        <div style={{ padding: "10px 14px", background: `${COLOR}0A`, borderBottom: `1px solid ${COLOR}25`, flexShrink: 0 }}>
          {/* Mini progress */}
          <div style={{ display: "flex", gap: 10, marginBottom: 9 }}>
            {GOALS.map(({ label, current, target, unit, color }) => {
              const pct = Math.min(Math.round((current / target) * 100), 100);
              return (
                <div key={label} style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontSize: 10, color: subtle }}>{label}</span>
                    <span style={{ fontSize: 10, color, fontWeight: 600 }}>{pct}%</span>
                  </div>
                  <div style={{ height: 4, background: border, borderRadius: 99 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Copy + actions */}
          <div style={{ fontSize: 12, color: subtle, marginBottom: 9, lineHeight: 1.5 }}>
            If everyone who's able gave a little, the platform's costs would be covered.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ flex: 1, padding: "7px 0", borderRadius: 7, background: COLOR, border: "none", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              Contribute
            </button>
            <button onClick={() => setDismissed(true)} style={{ flex: 1, padding: "7px 0", borderRadius: 7, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
              Not now
            </button>
          </div>
        </div>
      )}

      {/* App body (faded) */}
      <div style={{ flex: 1, opacity: 0.25, padding: "16px 14px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ height: 16, width: "60%", background: surface, borderRadius: 5 }} />
        <div style={{ height: 12, width: "80%", background: surface, borderRadius: 4 }} />
        <div style={{ height: 12, width: "70%", background: surface, borderRadius: 4 }} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ height: 64, background: surface, borderRadius: 9, border: `1px solid ${border}` }} />
        ))}
      </div>

      {/* Dismissed note */}
      {dismissed && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", padding: "20px" }}>
          <div style={{ fontSize: 13, color: subtle, marginBottom: 10 }}>Banner dismissed silently.</div>
          <button onClick={() => setDismissed(false)} style={{ padding: "7px 18px", borderRadius: 7, background: surface, border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
            Show again
          </button>
        </div>
      )}

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {[
          { Icon: Home,   label: "Hub",     active: false },
          { Icon: Heart,  label: "Support", active: false },
          { Icon: Layers, label: "Apps",    active: false },
          { Icon: User,   label: "Profile", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: active ? COLOR : subtle }} />
            <span style={{ fontSize: 9, color: active ? COLOR : subtle }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
