// design-sync
// THEME: Comic Dark — Account & Data, Web · Data Inventory
import { useState } from "react";
import {
  Shield, Database, Trash2, Download, Lock,
  AlertTriangle, Bell, Settings, Info, CheckCircle,
} from "lucide-react";

const bg      = "#0D0D0D";
const surface = "#141414";
const ink     = "#D4C49A";
const inkDim  = "#7A6A50";
const accent  = "#B91C1C";
const cream   = "#EDE3CB";
const shadow  = `3px 3px 0 ${ink}`;
const dotBg   = `radial-gradient(${ink}1A 1px, transparent 1px)`;

const DELETABLE = [
  { id: "chyme",          name: "Chyme",            icon: "💬", summary: "Chat messages and room membership." },
  { id: "directory",      name: "Directory",         icon: "📇", summary: "Directory profile and change history." },
  { id: "feed",           name: "Feed",              icon: "📣", summary: "Posts, replies, questions, answers, ratings, and read state." },
  { id: "foundation",     name: "Foundation",        icon: "🪛", summary: "Provider threads, messages, calls, and notifications." },
  { id: "mood",           name: "Mood",              icon: "🌿", summary: "Mood check-in submissions." },
  { id: "gentlepulse",    name: "GentlePulse",       icon: "🎵", summary: "Favorited sessions, play history, and ratings." },
  { id: "peerprogramming",name: "Peer Programming",  icon: "👥", summary: "Cohort membership, room messages, feedback." },
  { id: "lighthouse",     name: "LightHouse",        icon: "🏠", summary: "Housing profile and property listings." },
  { id: "socketrelay",    name: "SocketRelay",       icon: "🔂", summary: "Relay requests, fulfillments, and profile." },
  { id: "trusttransport", name: "TrustTransport",    icon: "📦", summary: "Ride requests, offers, trips, and ratings." },
  { id: "trust",          name: "Trust",             icon: "🛡️", summary: "Trust state record." },
  { id: "workforce",      name: "Workforce",         icon: "💼", summary: "Workforce profile and recruitment history." },
  { id: "skillshunt",     name: "Skills Hunt",       icon: "🎯", summary: "Submissions, achievements, and mission progress." },
  { id: "skillstaxonomy", name: "Skills Taxonomy",   icon: "🗂️", summary: "Taxonomy change history." },
  { id: "unlock",         name: "Unlock",            icon: "🔓", summary: "Verification submissions." },
  { id: "levelup",        name: "LevelUp",           icon: "🚀", summary: "Cohort enrollments." },
  { id: "clicklog",       name: "ClickLog",          icon: "🚨", summary: "Logged incidents." },
  { id: "comic",          name: "Comic",             icon: "🤖", summary: "Assistant conversations and answer ratings." },
  { id: "feedback",       name: "Feedback",          icon: "💬", summary: "Feedback items and votes." },
];

const RETAINED = [
  { id: "sc",  name: "ServiceCredits",           icon: "⚙️", reason: "Settled at full-account deletion — not deleted independently." },
  { id: "gdp", name: "GDP / Weekly Performance", icon: "📊", reason: "Community-wide totals; no personal data stored here." },
];

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase", borderLeft: `3px solid ${ink}`, paddingLeft: 8, marginBottom: 10, lineHeight: 1 }}>
      {children}
    </div>
  );
}

function InkBtn({ children, onClick, danger, dim }: { children: React.ReactNode; onClick?: () => void; danger?: boolean; dim?: boolean }) {
  const c = danger ? accent : dim ? inkDim : ink;
  return (
    <button onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 11px", background: surface, border: `1.5px solid ${c}`, boxShadow: `2px 2px 0 ${c}`, color: c, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer", textTransform: "uppercase" }}>
      {children}
    </button>
  );
}

export function ComicAccountData() {
  const [queued, setQueued] = useState<string[]>([]);
  const [view, setView] = useState<"data" | "danger">("data");
  const toggle = (id: string) => setQueued(q => q.includes(id) ? q.filter(x => x !== id) : [...q, id]);

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter','Arial',sans-serif", color: cream, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 64, background: "#080808", borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, paddingBottom: 14, gap: 6, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, background: surface, border: `2px solid ${ink}`, boxShadow: shadow, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
          <Shield size={18} color={ink} />
        </div>
        {[Database, Download, AlertTriangle].map((Icon, i) => (
          <button key={i} style={{ width: 40, height: 40, background: i === 0 ? `${ink}18` : "transparent", border: i === 0 ? `1.5px solid ${ink}` : `1.5px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? ink : inkDim }}>
            <Icon size={18} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 40, height: 40, background: "transparent", border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Bell size={16} /></button>
        <button style={{ width: 40, height: 40, background: "transparent", border: `1px solid ${inkDim}30`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: inkDim }}><Settings size={16} /></button>
        <div style={{ width: 30, height: 30, background: surface, border: `1.5px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ink }}>S</div>
      </aside>

      {/* Sidebar */}
      <aside style={{ width: 220, background: surface, borderRight: `2px solid ${ink}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 14px 10px", borderBottom: `2px solid ${ink}`, backgroundImage: dotBg, backgroundSize: "8px 8px" }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: ink, textTransform: "uppercase" }}>🔒 Account & Data</div>
          <div style={{ fontSize: 11, color: inkDim, marginTop: 4, lineHeight: 1.4 }}>Your data. Your control.</div>
        </div>
        <div style={{ padding: "12px 10px", flex: 1 }}>
          <PanelLabel>Navigation</PanelLabel>
          {[
            { label: "Your Data",    key: "data",   Icon: Database },
            { label: "Danger Zone",  key: "danger", Icon: AlertTriangle },
          ].map(({ label, key, Icon }) => (
            <button key={key} onClick={() => setView(key as "data" | "danger")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", marginBottom: 4, cursor: "pointer", background: view === key ? `${ink}14` : "transparent", border: view === key ? `1.5px solid ${key === "danger" ? accent : ink}` : "1.5px solid transparent", boxShadow: view === key ? `2px 2px 0 ${key === "danger" ? accent : ink}` : "none", color: view === key ? (key === "danger" ? accent : cream) : inkDim, fontSize: 12, fontWeight: view === key ? 700 : 400, textAlign: "left" }}>
              <Icon size={13} /> {label}
            </button>
          ))}

          <div style={{ marginTop: 14 }}>
            <PanelLabel>Summary</PanelLabel>
            {[
              { l: "Storing data",       v: `${DELETABLE.length - queued.length} / ${DELETABLE.length}` },
              { l: "Always retained",    v: "2" },
              { l: "Queued",             v: `${queued.length}` },
            ].map(({ l, v }) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 2px", fontSize: 11, color: inkDim, borderBottom: `1px solid ${ink}18` }}>
                <span>{l}</span>
                <span style={{ fontWeight: 700, color: l.includes("Queued") && queued.length > 0 ? accent : ink }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "10px 14px", borderTop: `2px solid ${ink}` }}>
          <div style={{ fontSize: 10, color: inkDim, lineHeight: 1.5, letterSpacing: "0.04em" }}>DELETIONS ARE PERMANENT AND CANNOT BE UNDONE.</div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 52, borderBottom: `2px solid ${ink}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 14, background: surface, flexShrink: 0 }}>
          <Shield size={16} color={ink} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: cream, letterSpacing: "0.06em", textTransform: "uppercase" }}>Your Data & Privacy</div>
            <div style={{ fontSize: 11, color: inkDim }}>Transparent control over all your Survivor Hub data</div>
          </div>
          <InkBtn dim><Download size={12} /> Export All</InkBtn>
        </header>

        <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "20px 32px" }}>
          {view === "data" ? (
            <>
              {/* Notice */}
              <div style={{ display: "flex", gap: 10, padding: "10px 14px", background: `${ink}08`, border: `2px solid ${ink}`, boxShadow: `2px 2px 0 ${ink}`, marginBottom: 20 }}>
                <Info size={14} color={ink} style={{ flexShrink: 0, marginTop: 1 }} />
                <div style={{ fontSize: 12, color: inkDim, lineHeight: 1.6 }}>
                  Deleting data from a service is permanent. Some audit records may be retained for platform integrity. Deleting from one service does not close your account.
                </div>
              </div>

              <PanelLabel>Personal data — {DELETABLE.length} services</PanelLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 24 }}>
                {DELETABLE.map(({ id, name, icon, summary }) => {
                  const isQ = queued.includes(id);
                  return (
                    <div key={id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: surface, border: `1.5px solid ${isQ ? "#22C55E60" : ink + "45"}`, boxShadow: isQ ? `2px 2px 0 #22C55E40` : `2px 2px 0 ${ink}18`, opacity: isQ ? 0.6 : 1 }}>
                      <div style={{ width: 28, height: 28, background: isQ ? "#22C55E14" : `${ink}10`, border: `1px solid ${isQ ? "#22C55E50" : ink + "40"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>
                        {isQ ? <CheckCircle size={13} color="#22C55E" /> : icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: isQ ? inkDim : cream, letterSpacing: "0.03em" }}>{name}</div>
                        <div style={{ fontSize: 11, color: isQ ? "#4A3A2A" : inkDim, lineHeight: 1.3, marginTop: 1 }}>
                          {isQ ? "Queued for deletion — confirm below." : summary}
                        </div>
                      </div>
                      <button onClick={() => toggle(id)} style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", background: surface, border: `1.5px solid ${isQ ? "#22C55E70" : accent + "70"}`, boxShadow: `1px 1px 0 ${isQ ? "#22C55E50" : accent + "50"}`, color: isQ ? "#22C55E" : accent, fontSize: 10, fontWeight: 800, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {isQ ? <><CheckCircle size={10} /> Queued</> : <><Trash2 size={10} /> Delete</>}
                      </button>
                    </div>
                  );
                })}
              </div>

              <PanelLabel>Always retained — 2 services</PanelLabel>
              <div style={{ fontSize: 11, color: inkDim, marginBottom: 10, marginTop: -4 }}>These cannot be deleted independently. See each reason.</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {RETAINED.map(({ id, name, icon, reason }) => (
                  <div key={id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", background: `${ink}05`, border: `1.5px solid ${inkDim}40` }}>
                    <div style={{ width: 28, height: 28, background: `${ink}08`, border: `1px solid ${inkDim}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: inkDim }}>{name}</span>
                        <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 5px", border: `1px solid ${inkDim}40`, color: inkDim, letterSpacing: "0.08em" }}>RETAINED BY DESIGN</span>
                      </div>
                      <div style={{ fontSize: 11, color: "#5A4A30", lineHeight: 1.5 }}>{reason}</div>
                    </div>
                    <Lock size={12} color={inkDim + "60"} style={{ flexShrink: 0, marginTop: 3 }} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={{ maxWidth: 580 }}>
              <div style={{ padding: "20px 22px", background: `${accent}08`, border: `2px solid ${accent}`, boxShadow: `3px 3px 0 ${accent}`, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <AlertTriangle size={18} color={accent} />
                  <span style={{ fontSize: 15, fontWeight: 800, color: cream, letterSpacing: "0.06em", textTransform: "uppercase" }}>Delete Entire Account</span>
                </div>
                <div style={{ fontSize: 13, color: inkDim, lineHeight: 1.7, marginBottom: 16 }}>
                  This removes your profile and all personal data across all 19 services. Your ServiceCredits are settled — not destroyed. Some audit records are retained by design.
                </div>
                <InkBtn danger onClick={() => {}}>
                  <AlertTriangle size={12} /> Continue to Confirmation →
                </InkBtn>
              </div>
              <div style={{ padding: "14px 16px", background: surface, border: `1.5px solid ${inkDim}50` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: inkDim, marginBottom: 5, letterSpacing: "0.06em", textTransform: "uppercase" }}>Need a break instead?</div>
                <div style={{ fontSize: 11, color: "#5A4A30", lineHeight: 1.5, marginBottom: 10 }}>Deactivate your account temporarily. Your data stays intact and you can return any time.</div>
                <InkBtn dim>Deactivate Instead</InkBtn>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 260, borderLeft: `2px solid ${ink}`, background: surface, padding: "16px 14px", flexShrink: 0, overflowY: "auto" }}>
        <PanelLabel>Privacy Summary</PanelLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 14 }}>
          {[
            { label: "Storing",   value: `${DELETABLE.length}`,        color: ink },
            { label: "Retained",  value: "2",                          color: inkDim },
            { label: "Queued",    value: `${queued.length}`,           color: queued.length > 0 ? accent : inkDim },
            { label: "Encrypted", value: "All",                        color: ink },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ padding: "10px", background: bg, border: `1.5px solid ${ink}40`, boxShadow: `2px 2px 0 ${ink}28`, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color, letterSpacing: "-0.02em" }}>{value}</div>
              <div style={{ fontSize: 9, color: inkDim, marginTop: 3, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "12px 14px", background: bg, border: `2px solid ${ink}`, boxShadow: shadow, marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: ink, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Your Data Rights</div>
          <div style={{ fontSize: 11, color: inkDim, lineHeight: 1.6 }}>
            You can delete your data from any service at any time. Deletions are permanent. Export your data before deleting — we cannot recover it.
          </div>
        </div>
        <button style={{ width: "100%", padding: "9px", background: surface, border: `1.5px solid ${inkDim}60`, boxShadow: `2px 2px 0 ${inkDim}40`, color: inkDim, fontSize: 10, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Download size={12} /> Export All My Data
        </button>
      </aside>
    </div>
  );
}
