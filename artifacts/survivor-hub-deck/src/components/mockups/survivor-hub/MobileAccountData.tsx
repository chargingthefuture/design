// design-sync
// STATE: Authenticated + Populated — mobile data inventory and deletion controls
import { useState } from "react";
import {
  Shield, Trash2, Download, Lock, AlertTriangle,
  Bell, CheckCircle, Info, ChevronRight,
} from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const DELETABLE = [
  { id: "chyme",          name: "Chyme",               icon: "💬", summary: "Chat messages and room membership." },
  { id: "directory",      name: "Directory",           icon: "📇", summary: "Directory profile and change history." },
  { id: "feed",           name: "Feed & Announcements",icon: "📣", summary: "Posts, replies, questions, answers, ratings, and read state." },
  { id: "foundation",     name: "Foundation",          icon: "🪛", summary: "Connection threads, messages, calls, and notifications." },
  { id: "mood",           name: "Mood",                icon: "🌿", summary: "Mood check-in submissions." },
  { id: "gentlepulse",    name: "GentlePulse",         icon: "🎵", summary: "Favorited sessions, play history, and ratings." },
  { id: "peerprogramming",name: "Peer Programming",    icon: "👥", summary: "Cohort membership, room messages, and feedback." },
  { id: "lighthouse",     name: "LightHouse",          icon: "🏠", summary: "Housing profile and property listings." },
  { id: "socketrelay",    name: "SocketRelay",         icon: "🔂", summary: "Relay requests, fulfillments, and profile." },
  { id: "trusttransport", name: "TrustTransport",      icon: "📦", summary: "Ride requests, offers, trips, and ratings." },
  { id: "trust",          name: "Trust",               icon: "🛡️", summary: "Trust state record." },
  { id: "workforce",      name: "Workforce",           icon: "💼", summary: "Workforce profile and recruitment history." },
  { id: "skillshunt",     name: "Skills Hunt",         icon: "🎯", summary: "Submissions, achievements, and mission progress." },
  { id: "skillstaxonomy", name: "Skills Taxonomy",     icon: "🗂️", summary: "Taxonomy change history." },
  { id: "unlock",         name: "Unlock",              icon: "🔓", summary: "Verification submissions." },
  { id: "levelup",        name: "LevelUp",             icon: "🚀", summary: "Cohort enrollments." },
  { id: "clicklog",       name: "ClickLog",            icon: "🚨", summary: "Logged incidents." },
  { id: "comic",          name: "Comic",               icon: "🤖", summary: "Assistant conversations and answer ratings." },
  { id: "feedback",       name: "Feedback",            icon: "💬", summary: "Feedback items and votes." },
];

const RETAINED = [
  { id: "sc",  name: "ServiceCredits",         icon: "⚙️", reason: "Settled at full-account deletion — not deleted on their own." },
  { id: "gdp", name: "GDP / Weekly Performance",icon: "📊", reason: "Community-wide totals; no personal data stored for you here." },
];

export function MobileAccountData() {
  const [tab, setTab]     = useState<"data" | "danger">("data");
  const [queued, setQueued] = useState<string[]>([]);

  const toggle = (id: string) =>
    setQueued(q => q.includes(id) ? q.filter(x => x !== id) : [...q, id]);

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={16} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Account & Data</div>
              <div style={{ fontSize: 11, color: subtle }}>19 services · your control</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Download size={14} color={subtle} />
            </button>
            <button style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bell size={14} color={subtle} />
            </button>
          </div>
        </div>
        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4 }}>
          {(["data", "danger"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "7px", borderRadius: 8, background: tab === t ? (t === "danger" ? "rgba(239,68,68,0.12)" : `${BRAND}18`) : "rgba(255,255,255,0.04)", border: `1px solid ${tab === t ? (t === "danger" ? "rgba(239,68,68,0.4)" : BRAND + "40") : border}`, color: tab === t ? (t === "danger" ? "#EF4444" : BRAND) : subtle, fontSize: 12, fontWeight: tab === t ? 700 : 400, cursor: "pointer" }}>
              {t === "data" ? "Your Data" : "⚠️ Danger Zone"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "14px 16px 20px" }}>

        {tab === "data" && (
          <>
            {/* Notice */}
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "10px 12px", borderRadius: 10, background: `${BRAND}06`, border: `1px solid ${BRAND}18`, marginBottom: 16 }}>
              <Info size={13} color={BRAND} style={{ flexShrink: 0, marginTop: 1 }} />
              <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>Deleting from a service is permanent. Some audit records are retained for platform integrity.</div>
            </div>

            {/* Deletable list */}
            <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Personal data — {DELETABLE.length} services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 24 }}>
              {DELETABLE.map(({ id, name, icon, summary }) => {
                const isQ = queued.includes(id);
                return (
                  <div key={id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 12, background: isQ ? "rgba(34,197,94,0.03)" : surface, border: `1px solid ${isQ ? "rgba(34,197,94,0.18)" : border}`, opacity: isQ ? 0.65 : 1 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: isQ ? "rgba(34,197,94,0.08)" : `${BRAND}10`, border: `1px solid ${isQ ? "rgba(34,197,94,0.2)" : BRAND + "20"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>
                      {isQ ? <CheckCircle size={13} color="#22C55E" /> : icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: isQ ? subtle : text }}>{name}</div>
                      <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.3, marginTop: 1 }}>{isQ ? "Queued for deletion" : summary}</div>
                    </div>
                    <button onClick={() => toggle(id)} style={{ flexShrink: 0, padding: "5px 8px", borderRadius: 7, background: isQ ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.06)", border: `1px solid ${isQ ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.2)"}`, color: isQ ? "#22C55E" : "#EF4444", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                      {isQ ? "✓" : <Trash2 size={12} />}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Retained */}
            <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Always retained — 2 services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {RETAINED.map(({ id, name, icon, reason }) => (
                <div key={id} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 12px", borderRadius: 12, background: "rgba(255,255,255,0.01)", border: `1px solid ${border}` }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: subtle }}>{name}</span>
                      <Lock size={10} color="#374151" />
                    </div>
                    <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.4 }}>{reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "danger" && (
          <div>
            <div style={{ padding: "18px", borderRadius: 14, background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.18)", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <AlertTriangle size={16} color="#EF4444" />
                <span style={{ fontSize: 15, fontWeight: 700, color: text }}>Delete Entire Account</span>
              </div>
              <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 14 }}>
                Removes your profile and all personal data across all 19 services. Your ServiceCredits are settled — not destroyed. Some audit records are retained by design.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
                {[
                  { t: "All personal data permanently deleted", warn: true },
                  { t: "ServiceCredits settled via standard process", warn: false },
                  { t: "Audit records retained (by design)", warn: false },
                  { t: "Profile removed from all directories", warn: true },
                ].map(({ t, warn }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: warn ? "#EF4444" : "#4B5563", flexShrink: 0, marginTop: 5 }} />
                    <span style={{ color: warn ? "#F87171" : "#9CA3AF", lineHeight: 1.4 }}>{t}</span>
                  </div>
                ))}
              </div>
              <button style={{ width: "100%", padding: "11px", borderRadius: 10, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.35)", color: "#EF4444", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <AlertTriangle size={14} /> Continue to confirmation <ChevronRight size={14} />
              </button>
            </div>
            <div style={{ padding: "14px 16px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: subtle, marginBottom: 5 }}>Need a break instead?</div>
              <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5, marginBottom: 10 }}>Deactivate temporarily — your data stays intact. You can return any time.</div>
              <button style={{ padding: "8px 14px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Deactivate instead</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: Shield,   label: "Data",   key: "data" },
          { Icon: Download, label: "Export", key: "export" },
          { Icon: AlertTriangle, label: "Danger", key: "danger" },
        ].map(({ Icon, label, key }) => (
          <button key={key} onClick={() => key !== "export" && setTab(key as "data" | "danger")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: tab === key ? (key === "danger" ? "#EF4444" : BRAND) : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: tab === key ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
