// design-sync
import { Heart, DollarSign, MessageSquare, Github, Lock, ChevronRight } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const DRIVE = {
  title: "Spring 2026 Infrastructure Drive",
  blurb: "Survivor Hub is free and stays free. This drive helps cover the real infrastructure costs the owner pays personally — server hosting, storage, bandwidth. Every bit helps.",
  goals: [
    { label: "Funding raised",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
    { label: "Quora comments",  current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
    { label: "GitHub stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
  ],
};

export function ContributionsPublic() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 580, width: "100%", padding: "0 24px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={18} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: text }}>Contributions</div>
            <div style={{ fontSize: 12, color: subtle }}>Community support drive</div>
          </div>
        </div>

        {/* Intro */}
        <p style={{ fontSize: 14, color: subtle, lineHeight: 1.8, marginBottom: 28 }}>
          The platform is free and will stay that way. Members who are able can help with infrastructure costs through gift cards, a Quora comment, or a GitHub star. Every contribution is private and confirmed contributions earn Service Credits as a thank-you.
        </p>

        {/* Drive progress */}
        <div style={{ background: surface, borderRadius: 12, padding: "18px", border: `1px solid ${border}`, marginBottom: 28 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 6 }}>{DRIVE.title}</div>
          <p style={{ fontSize: 12, color: subtle, margin: "0 0 16px", lineHeight: 1.6 }}>{DRIVE.blurb}</p>
          {DRIVE.goals.map(({ label, current, target, unit, Icon, color }) => {
            const pct = Math.min(Math.round((current / target) * 100), 100);
            return (
              <div key={label} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon size={12} color={color} />
                    <span style={{ fontSize: 12, color: subtle }}>{label}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color }}>{unit}{current.toLocaleString()} / {unit}{target.toLocaleString()}</span>
                </div>
                <div style={{ height: 6, background: border, borderRadius: 99 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Sign-in gate */}
        <div style={{ background: `${COLOR}0C`, borderRadius: 12, padding: "20px 24px", border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: `${COLOR}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Lock size={18} color={COLOR} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 4 }}>Sign in to contribute</div>
            <div style={{ fontSize: 13, color: subtle }}>Contributions are available to signed-in members.</div>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "9px 18px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>
            Sign in <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
