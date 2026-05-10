import { useState } from "react";
import {
  ShieldCheck, CheckCircle2, Circle, Eye, EyeOff, ChevronDown,
  Activity, Zap, AlertCircle, Lock, Users, Star,
} from "lucide-react";

const BRAND = "#0EA5E9";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

type VisibilityOption = "All Members" | "Verified Only" | "Only Me";

const SIGNALS = [
  { label: "Profile verified", time: "3 days ago", icon: ShieldCheck, color: BRAND },
  { label: "First transaction made", time: "5 days ago", icon: Zap, color: "#22C55E" },
  { label: "Joined SkillsHunt round", time: "1 week ago", icon: Star, color: "#A855F7" },
  { label: "Referred a survivor", time: "2 weeks ago", icon: Users, color: "#F59E0B" },
];

const CHECKLIST = [
  { label: "Complete your profile", done: true },
  { label: "Make your first transaction", done: true },
  { label: "Use at least one plugin", done: true },
  { label: "Refer a member", done: true },
  { label: "Complete a Skills Hunt round", done: false },
  { label: "Reach 1,000 Service Credits", done: false },
];

export function MobileTrust() {
  const [verified] = useState(true);
  const [visibility, setVisibility] = useState<VisibilityOption>("All Members");
  const [showVis, setShowVis] = useState(false);
  const visOpts: VisibilityOption[] = ["All Members", "Verified Only", "Only Me"];

  const donePct = Math.round((CHECKLIST.filter(c => c.done).length / CHECKLIST.length) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ padding: "12px 16px 0", display: "flex", justifyContent: "space-between", fontSize: 12, color: subtle }}>
        <span>9:41</span>
        <span>Trust</span>
        <span>●●●</span>
      </div>

      {/* Header */}
      <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShieldCheck size={18} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: text }}>Trust</div>
              <div style={{ fontSize: 11, color: subtle }}>Verification & signals</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: verified ? `${BRAND}15` : "rgba(255,255,255,0.05)", border: `1px solid ${verified ? BRAND + "30" : border}`, borderRadius: 20, padding: "5px 12px" }}>
            {verified ? <CheckCircle2 size={13} color={BRAND} /> : <AlertCircle size={13} color={subtle} />}
            <span style={{ fontSize: 12, fontWeight: 600, color: verified ? BRAND : subtle }}>{verified ? "Verified" : "Unverified"}</span>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>

        {/* Trust score card */}
        <div style={{ background: surface, borderRadius: 14, border: `1px solid ${BRAND}20`, padding: "16px", marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em" }}>Trust Score</div>
            <Activity size={14} color={BRAND} />
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
            {[
              { label: "Last Active", value: "Today" },
              { label: "Activity", value: "High" },
              { label: "Transactions", value: "Established" },
              { label: "Active Plugins", value: "7 apps" },
            ].map(({ label, value }) => (
              <div key={label} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: text }}>{value}</div>
                <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div style={{ marginBottom: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: subtle }}>Signal progress</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: BRAND }}>{donePct}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: `${BRAND}15`, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${donePct}%`, borderRadius: 3, background: BRAND }} />
            </div>
          </div>
        </div>

        {/* Visibility control */}
        <div style={{ background: surface, borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Eye size={13} color={subtle} />
            <span style={{ fontSize: 12, fontWeight: 600, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em" }}>Visibility</span>
          </div>
          <button
            onClick={() => setShowVis(v => !v)}
            style={{ width: "100%", background: bg, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: text }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {visibility === "Only Me" ? <EyeOff size={14} color={subtle} /> : <Eye size={14} color={BRAND} />}
              <span style={{ fontSize: 13, fontWeight: 500 }}>Visible to: {visibility}</span>
            </div>
            <ChevronDown size={14} color={subtle} style={{ transform: showVis ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>
          {showVis && (
            <div style={{ marginTop: 6, borderRadius: 8, border: `1px solid ${border}`, overflow: "hidden" }}>
              {visOpts.map(opt => (
                <button
                  key={opt}
                  onClick={() => { setVisibility(opt); setShowVis(false); }}
                  style={{ width: "100%", padding: "10px 14px", background: opt === visibility ? `${BRAND}10` : surface, border: "none", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: opt === visibility ? BRAND : text, fontSize: 13 }}
                >
                  {opt}
                  {opt === visibility && <CheckCircle2 size={13} color={BRAND} />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Signal checklist */}
        <div style={{ background: surface, borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Trust Signals</div>
          {CHECKLIST.map(({ label, done }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: `1px solid ${border}` }}>
              {done
                ? <CheckCircle2 size={16} color={BRAND} style={{ flexShrink: 0 }} />
                : <Circle size={16} color="#374151" style={{ flexShrink: 0 }} />
              }
              <span style={{ fontSize: 13, color: done ? text : subtle, textDecoration: done ? "none" : "none" }}>{label}</span>
              {done && <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, color: BRAND, background: `${BRAND}10`, border: `1px solid ${BRAND}20`, borderRadius: 4, padding: "2px 6px" }}>Done</span>}
            </div>
          ))}
        </div>

        {/* Recent signals */}
        <div style={{ background: surface, borderRadius: 12, border: `1px solid ${border}`, padding: "12px 14px", marginBottom: 80 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Recent Activity</div>
          {SIGNALS.map(({ label, time, icon: Icon, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: `1px solid ${border}` }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${color}12`, border: `1px solid ${color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={14} color={color} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: text }}>{label}</div>
                <div style={{ fontSize: 11, color: subtle }}>{time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: surface, borderTop: `1px solid ${border}`, padding: "12px 24px 28px", display: "flex", justifyContent: "space-around" }}>
        {[
          { Icon: ShieldCheck, label: "Trust", active: true },
          { Icon: Activity, label: "Activity", active: false },
          { Icon: Lock, label: "Privacy", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: active ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
