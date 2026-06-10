// design-sync
import { Heart, DollarSign, MessageSquare, Github, Inbox, ArrowLeft } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const DRIVE = {
  title: "Spring 2026 Infrastructure Drive",
  goals: [
    { label: "Funding raised",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
    { label: "Quora comments",  current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
    { label: "GitHub stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
  ],
};

export function ContributionsEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 200, background: surface, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "18px 14px 14px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: text }}>Contributions</span>
          </div>
          <div style={{ fontSize: 11, color: subtle }}>Community support drive</div>
        </div>
        <nav style={{ padding: "10px 8px", flex: 1 }}>
          {[
            { label: "Drive progress", active: false },
            { label: "Contribute", active: false },
            { label: "My contributions", active: true },
          ].map(({ label, active }) => (
            <div key={label} style={{ padding: "8px 10px", borderRadius: 7, marginBottom: 2, fontSize: 13, cursor: "pointer", background: active ? `${COLOR}18` : "transparent", color: active ? COLOR : subtle, fontWeight: active ? 600 : 400, borderLeft: active ? `3px solid ${COLOR}` : "3px solid transparent" }}>
              {label}
            </div>
          ))}
        </nav>
        <div style={{ padding: "0 10px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", borderRadius: 7, fontSize: 12, color: subtle, cursor: "pointer" }}>
            <ArrowLeft size={13} /> Back to Hub
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
        {/* Drive progress */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 600, color: text }}>{DRIVE.title}</h2>
          <div style={{ display: "flex", gap: 14 }}>
            {DRIVE.goals.map(({ label, current, target, unit, Icon, color }) => {
              const pct = Math.min(Math.round((current / target) * 100), 100);
              return (
                <div key={label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                    <Icon size={13} color={color} />
                    <span style={{ fontSize: 12, color: subtle }}>{label}</span>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color, marginBottom: 8 }}>{unit}{current.toLocaleString()} <span style={{ fontSize: 11, fontWeight: 400, color: subtle }}>/ {unit}{target.toLocaleString()}</span></div>
                  <div style={{ height: 5, background: border, borderRadius: 99 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty history */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 24px", textAlign: "center" }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: `${COLOR}10`, border: `1px solid ${COLOR}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <Inbox size={26} color={COLOR} style={{ opacity: 0.6 }} />
          </div>
          <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 600, color: text }}>No contributions yet</h3>
          <p style={{ margin: "0 0 24px", fontSize: 13, color: subtle, lineHeight: 1.7, maxWidth: 380 }}>
            If you're able to help, there are three ways to do it — a gift card, a Quora comment, or a GitHub star. The platform stays free either way.
          </p>
          <button style={{ padding: "10px 28px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            See how to contribute
          </button>
        </div>
      </div>
    </div>
  );
}
