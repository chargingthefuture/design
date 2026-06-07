// design-sync
// THEME: Comic Dark — Account & Data, Mobile · Data Inventory

import { useState } from "react";
import {
  Shield, Trash2, Download, Lock, AlertTriangle, Bell, CheckCircle, Info, ChevronRight,
} from "lucide-react";

const bg      = "#0D0D0D";
const surface = "#141414";
const ink     = "#D4C49A";
const inkDim  = "#7A6A50";
const accent  = "#B91C1C";
const cream   = "#EDE3CB";
const shadow  = `3px 3px 0 ${ink}`;

const DELETABLE = [
  { id: "chyme",          name: "Chyme",            icon: "💬", summary: "Chat messages and room membership." },
  { id: "directory",      name: "Directory",         icon: "📇", summary: "Directory profile and change history." },
  { id: "feed",           name: "Feed",              icon: "📣", summary: "Posts, replies, questions, and answers." },
  { id: "foundation",     name: "Foundation",        icon: "🪛", summary: "Provider threads, messages, and notifications." },
  { id: "mood",           name: "Mood",              icon: "🌿", summary: "Mood check-in submissions." },
  { id: "gentlepulse",    name: "GentlePulse",       icon: "🎵", summary: "Sessions, play history, and ratings." },
  { id: "peerprogramming",name: "Peer Programming",  icon: "👥", summary: "Cohort messages and feedback." },
  { id: "lighthouse",     name: "LightHouse",        icon: "🏠", summary: "Housing profile and listings." },
  { id: "socketrelay",    name: "SocketRelay",       icon: "🔂", summary: "Relay requests and profile." },
  { id: "trusttransport", name: "TrustTransport",    icon: "📦", summary: "Ride requests, trips, and ratings." },
  { id: "trust",          name: "Trust",             icon: "🛡️", summary: "Trust state record." },
  { id: "workforce",      name: "Workforce",         icon: "💼", summary: "Workforce profile and recruitment." },
  { id: "skillshunt",     name: "Skills Hunt",       icon: "🎯", summary: "Submissions, achievements, missions." },
  { id: "skillstaxonomy", name: "Skills Taxonomy",   icon: "🗂️", summary: "Taxonomy change history." },
  { id: "unlock",         name: "Unlock",            icon: "🔓", summary: "Verification submissions." },
  { id: "levelup",        name: "LevelUp",           icon: "🚀", summary: "Cohort enrollments." },
  { id: "clicklog",       name: "ClickLog",          icon: "🚨", summary: "Logged incidents." },
  { id: "comic",          name: "Comic",             icon: "🤖", summary: "Assistant conversations." },
  { id: "feedback",       name: "Feedback",          icon: "💬", summary: "Feedback items and votes." },
];

const RETAINED = [
  { id: "sc",  name: "ServiceCredits",           icon: "⚙️", reason: "Settled at full-account deletion — not deleted independently." },
  { id: "gdp", name: "GDP / Weekly Performance", icon: "📊", reason: "Community-wide totals — no personal data." },
];

export function ComicMobileAccountData() {
  const [tab, setTab] = useState<"data" | "danger">("data");
  const [queued, setQueued] = useState<string[]>([]);
  const toggle = (id: string) => setQueued(q => q.includes(id) ? q.filter(x => x !== id) : [...q, id]);

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#080808", borderBottom: `1px solid ${ink}30`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", flexShrink: 0 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: ink }}>9:41</span>
        <span style={{ fontSize: 11, color: inkDim }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "10px 14px 8px", borderBottom: `2px solid ${ink}`, background: surface, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: bg, border: `2px solid ${ink}`, boxShadow: shadow, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={15} color={ink} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: cream, letterSpacing: "0.05em", textTransform: "uppercase" }}>Account & Data</div>
              <div style={{ fontSize: 10, color: inkDim }}>19 services · your control</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            <button style={{ width: 30, height: 30, background: bg, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Download size={13} color={inkDim} />
            </button>
            <button style={{ width: 30, height: 30, background: bg, border: `1.5px solid ${inkDim}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bell size={13} color={inkDim} />
            </button>
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 5 }}>
          {(["data", "danger"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "6px", background: tab === t ? (t === "danger" ? `${accent}18` : `${ink}14`) : "transparent", border: `2px solid ${tab === t ? (t === "danger" ? accent : ink) : inkDim + "40"}`, boxShadow: tab === t ? `2px 2px 0 ${t === "danger" ? accent : ink}` : "none", color: tab === t ? (t === "danger" ? accent : cream) : inkDim, fontSize: 11, fontWeight: tab === t ? 800 : 400, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {t === "data" ? "Your Data" : "⚠ Danger Zone"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "12px 14px 16px" }}>
        {tab === "data" && (
          <>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "9px 11px", background: `${ink}08`, border: `2px solid ${ink}`, boxShadow: shadow, marginBottom: 14 }}>
              <Info size={12} color={ink} style={{ flexShrink: 0, marginTop: 1 }} />
              <div style={{ fontSize: 11, color: inkDim, lineHeight: 1.5 }}>Deleting is permanent. Some audit records are retained for platform integrity.</div>
            </div>

            <div style={{ fontSize: 9, fontWeight: 800, color: ink, textTransform: "uppercase", letterSpacing: "0.12em", borderLeft: `3px solid ${ink}`, paddingLeft: 7, marginBottom: 9 }}>
              Personal data — {DELETABLE.length} services
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
              {DELETABLE.map(({ id, name, icon, summary }) => {
                const isQ = queued.includes(id);
                return (
                  <div key={id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", background: surface, border: `1.5px solid ${isQ ? "#22C55E50" : ink + "35"}`, boxShadow: isQ ? `2px 2px 0 #22C55E30` : `2px 2px 0 ${ink}15`, opacity: isQ ? 0.6 : 1 }}>
                    <div style={{ width: 26, height: 26, background: isQ ? "#22C55E10" : `${ink}0C`, border: `1px solid ${isQ ? "#22C55E40" : ink + "30"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}>
                      {isQ ? <CheckCircle size={11} color="#22C55E" /> : icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: isQ ? inkDim : cream }}>{name}</div>
                      <div style={{ fontSize: 10, color: isQ ? "#4A3A2A" : inkDim, lineHeight: 1.3, marginTop: 1 }}>{isQ ? "Queued for deletion" : summary}</div>
                    </div>
                    <button onClick={() => toggle(id)} style={{ flexShrink: 0, padding: "3px 7px", background: surface, border: `1.5px solid ${isQ ? "#22C55E60" : accent + "60"}`, color: isQ ? "#22C55E" : accent, fontSize: 10, fontWeight: 800, cursor: "pointer", letterSpacing: "0.04em" }}>
                      {isQ ? "✓" : <Trash2 size={11} />}
                    </button>
                  </div>
                );
              })}
            </div>

            <div style={{ fontSize: 9, fontWeight: 800, color: ink, textTransform: "uppercase", letterSpacing: "0.12em", borderLeft: `3px solid ${ink}`, paddingLeft: 7, marginBottom: 9 }}>
              Always retained — 2 services
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {RETAINED.map(({ id, name, icon, reason }) => (
                <div key={id} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "9px 10px", background: `${ink}05`, border: `1.5px solid ${inkDim}35` }}>
                  <div style={{ width: 26, height: 26, background: `${ink}08`, border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}>{icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: inkDim }}>{name}</span>
                      <Lock size={9} color={inkDim + "60"} />
                    </div>
                    <div style={{ fontSize: 10, color: "#5A4A30", lineHeight: 1.4 }}>{reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "danger" && (
          <div>
            <div style={{ padding: "15px 14px", background: `${accent}08`, border: `2px solid ${accent}`, boxShadow: `3px 3px 0 ${accent}`, marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
                <AlertTriangle size={15} color={accent} />
                <span style={{ fontSize: 13, fontWeight: 800, color: cream, textTransform: "uppercase", letterSpacing: "0.06em" }}>Delete Entire Account</span>
              </div>
              <div style={{ fontSize: 12, color: inkDim, lineHeight: 1.6, marginBottom: 12 }}>
                Removes your profile and all personal data across 19 services. ServiceCredits settled — not destroyed. Audit records retained by design.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                {[
                  { t: "All personal data permanently deleted", warn: true },
                  { t: "ServiceCredits settled via standard process", warn: false },
                  { t: "Audit records retained (by design)", warn: false },
                  { t: "Profile removed from all directories", warn: true },
                ].map(({ t, warn }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 11 }}>
                    <div style={{ width: 4, height: 4, background: warn ? accent : inkDim, flexShrink: 0, marginTop: 4 }} />
                    <span style={{ color: warn ? `${accent}CC` : inkDim, lineHeight: 1.4 }}>{t}</span>
                  </div>
                ))}
              </div>
              <button style={{ width: "100%", padding: "10px", background: `${accent}12`, border: `2px solid ${accent}`, boxShadow: `2px 2px 0 ${accent}`, color: accent, fontSize: 12, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                <AlertTriangle size={12} /> Continue to Confirmation <ChevronRight size={12} />
              </button>
            </div>
            <div style={{ padding: "12px 14px", background: surface, border: `1.5px solid ${inkDim}50` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: inkDim, marginBottom: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>Need a break instead?</div>
              <div style={{ fontSize: 11, color: "#5A4A30", lineHeight: 1.5, marginBottom: 9 }}>Deactivate temporarily — data stays intact, return any time.</div>
              <button style={{ padding: "7px 12px", background: bg, border: `1.5px solid ${inkDim}50`, color: inkDim, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Deactivate Instead</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 68, background: "#080808", borderTop: `2px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: Shield,        label: "Data",   key: "data" },
          { Icon: Download,      label: "Export", key: "export" },
          { Icon: AlertTriangle, label: "Danger", key: "danger" },
        ].map(({ Icon, label, key }) => (
          <button key={key} onClick={() => key !== "export" && setTab(key as "data" | "danger")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flex: 1, background: "none", border: "none", cursor: "pointer", color: tab === key ? (key === "danger" ? accent : ink) : inkDim }}>
            <Icon size={18} />
            <span style={{ fontSize: 9, fontWeight: tab === key ? 800 : 400, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
