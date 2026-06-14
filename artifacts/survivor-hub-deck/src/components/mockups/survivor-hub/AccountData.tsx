// design-sync
// STATE: Authenticated + Populated — personal data inventory across all services
import { useState } from "react";
import {
  Shield, Database, Trash2, Download, Lock, AlertTriangle,
  Bell, Settings, Info, CheckCircle,
} from "lucide-react";

const BRAND = "#FB7185";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const DELETABLE = [
  { id: "chyme",          name: "Chyme",               icon: "💬", summary: "Your chat messages and room membership." },
  { id: "directory",      name: "Directory",           icon: "📇", summary: "Your directory profile and its change history." },
  { id: "feed",           name: "Feed & Announcements",icon: "📣", summary: "Your community posts, replies, questions, answers, ratings, and read state." },
  { id: "foundation",     name: "Foundation",          icon: "🪛", summary: "Your provider connection threads, messages, calls, quote requests, and notifications." },
  { id: "mood",           name: "Mood",                icon: "🌿", summary: "Your mood check-in submissions." },
  { id: "gentlepulse",    name: "GentlePulse",         icon: "🎵", summary: "Your favorited sessions, play history, and ratings." },
  { id: "peerprogramming",name: "Peer Programming",    icon: "👥", summary: "Your cohort membership, room messages, feedback, and notifications." },
  { id: "lighthouse",     name: "LightHouse",          icon: "🏠", summary: "Your housing profile and any property listings you created." },
  { id: "socketrelay",    name: "SocketRelay",         icon: "🔂", summary: "Your relay requests, fulfillments, messages, and profile." },
  { id: "trusttransport", name: "TrustTransport",      icon: "📦", summary: "Your ride/package requests, offers, trips, ratings, and profile." },
  { id: "trust",          name: "Trust",               icon: "🛡️", summary: "Your Trust state record." },
  { id: "workforce",      name: "Workforce",           icon: "💼", summary: "Your workforce profile and recruitment history." },
  { id: "skillshunt",     name: "Skills Hunt",         icon: "🎯", summary: "Your submissions, achievements, notifications, leaderboard entries, and mission progress." },
  { id: "skillstaxonomy", name: "Skills Taxonomy",     icon: "🗂️", summary: "Your taxonomy change history." },
  { id: "unlock",         name: "Unlock",              icon: "🔓", summary: "Your verification submissions." },
  { id: "levelup",        name: "LevelUp",             icon: "🚀", summary: "Your cohort enrollments." },
  { id: "clicklog",       name: "ClickLog",            icon: "🚨", summary: "Your logged incidents." },
  { id: "comic",          name: "Comic",               icon: "🤖", summary: "Your assistant conversations and answer ratings." },
  { id: "feedback",       name: "Feedback",            icon: "💬", summary: "Your feedback items and votes." },
];

const RETAINED = [
  { id: "servicecredits", name: "ServiceCredits", icon: "⚙️", reason: "Wallet & ledger kept for financial integrity. Your balance is settled via the standard process at full-account deletion — not deleted independently." },
  { id: "gdp",            name: "GDP / Weekly Performance", icon: "📊", reason: "Community-wide aggregated totals. No personal data is stored under your identity here." },
];

export function AccountData() {
  const [queued, setQueued] = useState<string[]>([]);
  const [view, setView]     = useState<"data" | "danger">("data");

  const toggle = (id: string) =>
    setQueued(q => q.includes(id) ? q.filter(x => x !== id) : [...q, id]);

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <Shield size={20} color={BRAND} />
        </div>
        {[Shield, Database, Download].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${BRAND}20` : "transparent", border: i === 0 ? `1px solid ${BRAND}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🔒 Account & Data</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Your data — transparent, under your control</div>
        </div>
        <div style={{ padding: "0 12px", flex: 1 }}>
          {[
            { label: "Your Data", key: "data", Icon: Database },
            { label: "Danger Zone", key: "danger", Icon: AlertTriangle },
          ].map(({ label, key, Icon }) => (
            <button key={key} onClick={() => setView(key as "data" | "danger")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: view === key ? `${BRAND}15` : "transparent", borderLeft: view === key ? `2px solid ${BRAND}` : "2px solid transparent", color: view === key ? text : subtle, fontSize: 13, border: "none", textAlign: "left" }}>
              <Icon size={15} />
              {label}
            </button>
          ))}
          <div style={{ margin: "16px 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase" }}>Summary</div>
          {[
            { l: "Services with your data", v: `${DELETABLE.length - queued.length} of ${DELETABLE.length}` },
            { l: "Always retained",          v: "2" },
            { l: "Queued for deletion",      v: `${queued.length}` },
          ].map(({ l, v }) => (
            <div key={l} style={{ padding: "5px 2px", fontSize: 12, color: "var(--comic-text-secondary, #6B7280)" }}>
              {l}: <span style={{ color: queued.length > 0 && l.includes("Queued") ? "#EF4444" : text, fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>🔒 Deletions are permanent and cannot be undone.</div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          <Shield size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Your Data & Privacy</div>
            <div style={{ fontSize: 12, color: subtle }}>See and delete the data Survivor Hub holds across all services</div>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
            <Download size={13} /> Export all data
          </button>
        </header>

        <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "28px 40px" }}>
          {view === "data" ? (
            <>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 16px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}18`, marginBottom: 24 }}>
                <Info size={15} color={BRAND} style={{ flexShrink: 0, marginTop: 1 }} />
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>
                  Deleting data from a service removes your records from that service permanently. Some audit records may be retained for platform integrity. Deleting from one service does not close your account.
                </div>
              </div>

              <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 14 }}>
                Personal data — {DELETABLE.length} services
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 32 }}>
                {DELETABLE.map(({ id, name, icon, summary }) => {
                  const isQ = queued.includes(id);
                  return (
                    <div key={id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 16px", borderRadius: 12, background: isQ ? "rgba(34,197,94,0.03)" : surface, border: `1px solid ${isQ ? "rgba(34,197,94,0.18)" : border}`, opacity: isQ ? 0.65 : 1 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 9, background: isQ ? "rgba(34,197,94,0.08)" : `${BRAND}10`, border: `1px solid ${isQ ? "rgba(34,197,94,0.2)" : BRAND + "20"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                        {isQ ? <CheckCircle size={15} color="#22C55E" /> : icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: isQ ? subtle : text, marginBottom: 2 }}>{name}</div>
                        <div style={{ fontSize: 12, color: isQ ? "#4B5563" : subtle, lineHeight: 1.4 }}>
                          {isQ ? "Queued for deletion — confirm below to process." : summary}
                        </div>
                      </div>
                      <button onClick={() => toggle(id)} style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 5, padding: "5px 11px", borderRadius: 7, background: isQ ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.06)", border: `1px solid ${isQ ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.2)"}`, color: isQ ? "#22C55E" : "#EF4444", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        {isQ ? <><CheckCircle size={12} /> Queued</> : <><Trash2 size={12} /> Delete this data</>}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 6 }}>Always retained — 2 services</div>
              <div style={{ fontSize: 12, color: subtle, marginBottom: 14 }}>These cannot be deleted independently. See each reason below.</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {RETAINED.map(({ id, name, icon, reason }) => (
                  <div key={id} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "13px 16px", borderRadius: 12, background: "rgba(255,255,255,0.01)", border: `1px solid ${border}` }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: subtle }}>{name}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 4, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: "#4B5563" }}>Retained by design</span>
                      </div>
                      <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>{reason}</div>
                    </div>
                    <Lock size={13} color="#374151" style={{ flexShrink: 0, marginTop: 3 }} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={{ maxWidth: 600 }}>
              <div style={{ padding: "22px 24px", borderRadius: 16, background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.18)", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <AlertTriangle size={18} color="#EF4444" />
                  <span style={{ fontSize: 16, fontWeight: 700, color: text }}>Delete Entire Account</span>
                </div>
                <div style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, marginBottom: 16 }}>
                  This removes your profile and all personal data across all 19 services. Your ServiceCredits balance is settled via the standard process — not silently destroyed. Some audit records are retained for platform integrity.
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18 }}>
                  {[
                    { t: "All personal data across 19 services permanently deleted", warn: true },
                    { t: "ServiceCredits balance settled via standard process — not destroyed", warn: false },
                    { t: "Some audit records retained for platform integrity (by design)", warn: false },
                    { t: "Profile and username removed from all directories", warn: true },
                  ].map(({ t, warn }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: warn ? "#EF4444" : "#4B5563", flexShrink: 0, marginTop: 6 }} />
                      <span style={{ color: warn ? "#F87171" : "#9CA3AF", lineHeight: 1.5 }}>{t}</span>
                    </div>
                  ))}
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 10, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.35)", color: "#EF4444", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                  <AlertTriangle size={15} /> Continue to confirmation →
                </button>
              </div>
              <div style={{ padding: "16px 18px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: subtle, marginBottom: 6 }}>Need a break instead?</div>
                <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5, marginBottom: 10 }}>Deactivate your account temporarily. Your data stays intact and you can return any time.</div>
                <button style={{ padding: "8px 16px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Deactivate account instead</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Privacy Summary</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { label: "Storing data",   value: `${DELETABLE.length}`,   color: BRAND },
            { label: "Retained",       value: "2",                     color: "#4B5563" },
            { label: "Queued",         value: `${queued.length}`,      color: queued.length > 0 ? "#EF4444" : "#4B5563" },
            { label: "Encrypted",      value: "All",                   color: "#06B6D4" },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ padding: "10px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color }}>{value}</div>
              <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px", borderRadius: 12, background: `${BRAND}05`, border: `1px solid ${BRAND}15`, marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Your data rights</div>
          <div style={{ fontSize: 11, color: subtle, lineHeight: 1.6 }}>
            You can delete your data from any service at any time. Deletions are permanent. Export your data before deleting — we cannot recover it after.
          </div>
        </div>
        <button style={{ width: "100%", padding: "9px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Download size={13} /> Export all my data
        </button>
      </aside>
    </div>
  );
}
