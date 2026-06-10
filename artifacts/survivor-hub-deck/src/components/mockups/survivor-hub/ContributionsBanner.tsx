// design-sync
// STATE: App-wide fundraiser banner — desktop placement preview
import { useState } from "react";
import { Heart, DollarSign, MessageSquare, Github, X } from "lucide-react";

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

function Banner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 18px", background: surface, borderBottom: `1px solid ${border}` }}>
      {/* Icon */}
      <div style={{ width: 28, height: 28, borderRadius: 7, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Heart size={13} color="#fff" />
      </div>

      {/* Copy */}
      <div style={{ fontSize: 13, color: subtle, flexShrink: 0, maxWidth: 260 }}>
        If everyone who's able gave a little, this drive would be covered.
      </div>

      {/* Progress bars */}
      <div style={{ display: "flex", gap: 14, flex: 1, alignItems: "center" }}>
        {GOALS.map(({ label, current, target, unit, Icon, color }) => {
          const pct = Math.min(Math.round((current / target) * 100), 100);
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7, flex: 1 }}>
              <Icon size={12} color={color} style={{ flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: subtle }}>{label}</span>
                  <span style={{ fontSize: 10, color }}>{unit}{current.toLocaleString()} / {unit}{target.toLocaleString()}</span>
                </div>
                <div style={{ height: 4, background: border, borderRadius: 99 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions — equal visual weight */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
        <button style={{ padding: "6px 16px", borderRadius: 7, background: COLOR, border: "none", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
          Contribute
        </button>
        <button onClick={onDismiss} style={{ padding: "6px 14px", borderRadius: 7, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
          Not now
        </button>
      </div>
    </div>
  );
}

export function ContributionsBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div style={{ width: "100%", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Demo context header */}
      <div style={{ padding: "10px 18px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#090B0F" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg,#7C3AED,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>SH</span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Survivor Hub</span>
        </div>
        <span style={{ fontSize: 11, color: subtle }}>App-wide banner — shown while a drive is active</span>
      </div>

      {/* The banner */}
      {!dismissed && <Banner onDismiss={() => setDismissed(true)} />}

      {/* App body (blurred/faded to keep focus on the banner) */}
      <div style={{ flex: 1, opacity: 0.3, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ height: 18, width: 200, background: surface, borderRadius: 6 }} />
        <div style={{ height: 12, width: 340, background: surface, borderRadius: 4 }} />
        <div style={{ height: 12, width: 280, background: surface, borderRadius: 4 }} />
        <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ flex: 1, height: 100, background: surface, borderRadius: 10, border: `1px solid ${border}` }} />
          ))}
        </div>
        <div style={{ height: 12, width: 420, background: surface, borderRadius: 4, marginTop: 8 }} />
        <div style={{ height: 12, width: 360, background: surface, borderRadius: 4 }} />
      </div>

      {/* Dismissed state note */}
      {dismissed && (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 14, color: subtle, marginBottom: 8 }}>Banner dismissed — no snooze period shown to member.</div>
            <button onClick={() => setDismissed(false)} style={{ padding: "7px 18px", borderRadius: 7, background: surface, border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
              Show banner again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
