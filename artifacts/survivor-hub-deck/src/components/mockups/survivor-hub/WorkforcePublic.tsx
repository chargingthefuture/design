// STATE: Unauthenticated — visitor with no session
import { BarChart2, TrendingUp, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#6366F1";

const GAPS = [
  { skill: "Software Development", gap: "14,600", trend: "+31%" },
  { skill: "Trauma Therapy", gap: "9,600", trend: "+12%" },
  { skill: "Housing Navigation", gap: "13,200", trend: "+8%" },
  { skill: "Legal Advocacy", gap: "6,300", trend: "+15%" },
  { skill: "Financial Counseling", gap: "7,500", trend: "+6%" },
];

const BARS = [37, 25, 20, 18];
const BAR_LABELS = ["Employed", "In Training", "Seeking Work", "Exploring"];
const BAR_COLORS = ["#22C55E", COLOR, "#F59E0B", "#6B7280"];

export function WorkforcePublic() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <BarChart2 size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Workforce</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 32px", display: "flex", gap: 80 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600, display: "inline-block", width: "fit-content" }}>
            4.9M survivors tracked
          </span>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, lineHeight: 1.1 }}>
            Real-time workforce data<br />
            <span style={{ color: COLOR }}>for every survivor</span>
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 460 }}>
            Live skills distribution, employment gaps, and personalized pathways across 4.9 million survivors. Your workforce coach lives here.
          </p>
          <button style={{ marginTop: 8, padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "fit-content" }}>
            Join the Hub — Free
          </button>
        </div>

        {/* Preview stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 260 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.05em" }}>Live workforce snapshot</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {BARS.map((pct, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 80, fontSize: 12, color: "#9CA3AF" }}>{BAR_LABELS[i]}</div>
                <div style={{ flex: 1, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.05)" }}>
                  <div style={{ width: `${pct * 2.5}%`, height: "100%", borderRadius: 4, background: BAR_COLORS[i] + "70" }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: BAR_COLORS[i], width: 32, textAlign: "right" }}>{pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blurred skill gap table */}
      <div style={{ padding: "0 64px 48px", position: "relative" }}>
        <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 8, alignItems: "center" }}>
            <TrendingUp size={14} color={COLOR} />
            <span style={{ fontSize: 13, fontWeight: 700 }}>Top skill gaps right now</span>
          </div>
          {GAPS.map((g, i) => (
            <div key={i} style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 13, flex: 1 }}>{g.skill}</div>
              <div style={{ fontSize: 13, color: "#F59E0B", fontWeight: 600 }}>{g.gap} unmet</div>
              <div style={{ fontSize: 12, color: "#22C55E", fontWeight: 700 }}>{g.trend}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={22} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>Sign in to see your personalized pathway</div>
          <button style={{ padding: "11px 28px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to access Workforce
          </button>
        </div>
      </div>
    </div>
  );
}
