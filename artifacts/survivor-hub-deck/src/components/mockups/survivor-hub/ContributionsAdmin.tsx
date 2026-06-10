// design-sync
import { useState } from "react";
import {
  Heart, DollarSign, MessageSquare, Github, Search, CheckCircle, X,
  Settings, Calendar, ToggleRight, ToggleLeft, Edit2, Save,
} from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text     = "#F9FAFB";
const subtle   = "#6B7280";

type SubmissionStatus = "pending" | "confirmed" | "not_confirmed";
type SubmissionKind   = "gift_card" | "quora" | "github";

type Submission = {
  id: number; member: string; kind: SubmissionKind; kindLabel: string;
  claimedValue: string; signalContact: string | null; submittedUrl: string | null;
  date: string; status: SubmissionStatus; confirmedValue: string; note: string;
  urlField: string;
};

const SUBMISSIONS: Submission[] = [
  { id: 1, member: "@amara-j",  kind: "gift_card", kindLabel: "Gift card (Amazon)", claimedValue: "$25",  signalContact: "signal.me/+amara",   submittedUrl: null,                                date: "Jun 5", status: "pending",       confirmedValue: "25", note: "", urlField: "" },
  { id: 2, member: "@tiana-b",  kind: "quora",     kindLabel: "Quora comment",      claimedValue: "—",    signalContact: null,                  submittedUrl: "quora.com/…/How-do-survivors…", date: "Jun 4", status: "pending",       confirmedValue: "1",  note: "", urlField: "quora.com/…/How-do-survivors…" },
  { id: 3, member: "@david-k",  kind: "github",    kindLabel: "GitHub star",        claimedValue: "—",    signalContact: null,                  submittedUrl: null,                                date: "Jun 3", status: "pending",       confirmedValue: "1",  note: "", urlField: "" },
  { id: 4, member: "@priya-l",  kind: "gift_card", kindLabel: "Gift card (Apple)",  claimedValue: "$50",  signalContact: "signal.me/+priya",   submittedUrl: null,                                date: "Jun 1", status: "confirmed",     confirmedValue: "50", note: "", urlField: "" },
  { id: 5, member: "@carlos-v", kind: "quora",     kindLabel: "Quora comment",      claimedValue: "—",    signalContact: null,                  submittedUrl: null,                                date: "May 30", status: "not_confirmed", confirmedValue: "1", note: "Could not find matching comment.", urlField: "" },
];

type FilterKey = "All" | "Pending" | "Confirmed" | "Not matched";
const FILTERS: FilterKey[] = ["All", "Pending", "Confirmed", "Not matched"];
type Tab = "queue" | "drive" | "settings";

const statusColor = (s: SubmissionStatus) =>
  s === "confirmed" ? "#22C55E" : s === "pending" ? "#F59E0B" : subtle;
const statusLabel = (s: SubmissionStatus) =>
  s === "confirmed" ? "Confirmed" : s === "pending" ? "Waiting" : "Not matched";
const kindIcon = (k: SubmissionKind) =>
  k === "gift_card" ? <DollarSign size={13} /> : k === "quora" ? <MessageSquare size={13} /> : <Github size={13} />;

export function ContributionsAdmin() {
  const [tab, setTab]           = useState<Tab>("queue");
  const [filter, setFilter]     = useState<FilterKey>("All");
  const [expandId, setExpandId] = useState<number | null>(1);
  const [rows, setRows]         = useState<Submission[]>(SUBMISSIONS);
  const [bannerOn, setBannerOn] = useState(true);
  const [signalText, setSignalText] = useState("Send the code to our Signal number: +1 555-000-0000. Include your username so we can match it.");
  const [credPerDollar, setCredPerDollar] = useState("10");
  const [credPerAction, setCredPerAction] = useState("50");
  const [cap, setCap] = useState("500");

  const visible = rows.filter(r =>
    filter === "All" ? true :
    filter === "Pending" ? r.status === "pending" :
    filter === "Confirmed" ? r.status === "confirmed" :
    r.status === "not_confirmed"
  );

  const updateRow = (id: number, patch: Partial<Submission>) =>
    setRows(rs => rs.map(r => r.id === id ? { ...r, ...patch } : r));

  const confirm = (row: Submission) =>
    updateRow(row.id, { status: "confirmed" });

  const reject = (row: Submission) =>
    updateRow(row.id, { status: "not_confirmed" });

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
          <div style={{ fontSize: 11, color: subtle }}>Admin console</div>
        </div>
        <nav style={{ padding: "10px 8px", flex: 1 }}>
          {([
            { key: "queue",    label: "Submission queue", badge: rows.filter(r => r.status === "pending").length },
            { key: "drive",    label: "Drive management", badge: null },
            { key: "settings", label: "Settings",         badge: null },
          ] as { key: Tab; label: string; badge: number | null }[]).map(({ key, label, badge }) => (
            <div key={key} onClick={() => setTab(key)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 7, marginBottom: 2, fontSize: 13, cursor: "pointer", background: tab === key ? `${COLOR}18` : "transparent", color: tab === key ? COLOR : subtle, fontWeight: tab === key ? 600 : 400, borderLeft: tab === key ? `3px solid ${COLOR}` : "3px solid transparent" }}>
              {label}
              {badge != null && badge > 0 && (
                <span style={{ background: "#F59E0B", color: "#000", fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 99 }}>{badge}</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* ── QUEUE TAB ── */}
      {tab === "queue" && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ padding: "18px 24px 14px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12 }}>
            <h1 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: text }}>Submission queue</h1>
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 7, background: surface, border: `1px solid ${border}`, borderRadius: 7, padding: "6px 12px" }}>
              <Search size={13} color={subtle} />
              <span style={{ fontSize: 12, color: subtle }}>Search…</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, padding: "12px 24px", borderBottom: `1px solid ${border}` }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "5px 14px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 500, background: filter === f ? COLOR : border, color: filter === f ? "#fff" : subtle }}>
                {f}
              </button>
            ))}
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            {visible.map((row) => {
              const expanded = expandId === row.id;
              return (
                <div key={row.id} style={{ borderBottom: `1px solid ${border}` }}>
                  {/* Row */}
                  <div onClick={() => setExpandId(expanded ? null : row.id)} style={{ display: "grid", gridTemplateColumns: "140px 160px 90px 120px 90px 90px", gap: 0, padding: "11px 24px", alignItems: "center", cursor: "pointer", background: expanded ? `${COLOR}06` : "transparent" }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: text }}>{row.member}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: subtle }}>{kindIcon(row.kind)}</span>
                      <span style={{ fontSize: 12, color: subtle }}>{row.kindLabel}</span>
                    </div>
                    <span style={{ fontSize: 12, color: subtle }}>{row.claimedValue}</span>
                    <span style={{ fontSize: 12, color: subtle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.signalContact ?? "—"}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: statusColor(row.status), background: `${statusColor(row.status)}15`, padding: "2px 8px", borderRadius: 20, display: "inline-block" }}>{statusLabel(row.status)}</span>
                    <span style={{ fontSize: 11, color: subtle }}>{row.date}</span>
                  </div>

                  {/* Expanded review panel */}
                  {expanded && (
                    <div style={{ padding: "14px 24px 18px 36px", background: `${COLOR}05`, borderTop: `1px solid ${border}` }}>
                      {/* URL field for quora/github */}
                      {(row.kind === "quora" || row.kind === "github") && (
                        <div style={{ marginBottom: 12 }}>
                          <label style={{ fontSize: 11, color: subtle, display: "block", marginBottom: 5 }}>
                            {row.kind === "quora" ? "Quora post URL (editable — paste from notifications)" : "GitHub profile URL (editable — paste from notifications)"}
                          </label>
                          <input
                            value={row.urlField}
                            onChange={e => updateRow(row.id, { urlField: e.target.value })}
                            placeholder={row.kind === "quora" ? "https://quora.com/…" : "https://github.com/…"}
                            style={{ width: 400, padding: "7px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }}
                          />
                        </div>
                      )}
                      {/* Confirmed value */}
                      <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                        <label style={{ fontSize: 11, color: subtle, flexShrink: 0 }}>Confirmed value (USD)</label>
                        <input
                          value={row.confirmedValue}
                          onChange={e => updateRow(row.id, { confirmedValue: e.target.value })}
                          style={{ width: 80, padding: "6px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }}
                        />
                        <span style={{ fontSize: 11, color: subtle }}>→ {parseInt(row.confirmedValue || "0") * 10} SC (credits granted automatically, subject to per-cycle cap)</span>
                      </div>
                      {/* Note */}
                      <div style={{ marginBottom: 14 }}>
                        <label style={{ fontSize: 11, color: subtle, display: "block", marginBottom: 5 }}>Note (optional)</label>
                        <input value={row.note} onChange={e => updateRow(row.id, { note: e.target.value })} placeholder="Internal note…" style={{ width: 400, padding: "7px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }} />
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => confirm(row)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 16px", borderRadius: 7, background: "#22C55E", border: "none", color: "#000", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          <CheckCircle size={12} /> Confirm
                        </button>
                        <button onClick={() => reject(row)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 16px", borderRadius: 7, background: "transparent", border: `1px solid #EF4444`, color: "#EF4444", fontSize: 12, cursor: "pointer" }}>
                          <X size={12} /> Reject
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── DRIVE TAB ── */}
      {tab === "drive" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          <h1 style={{ margin: "0 0 22px", fontSize: 16, fontWeight: 700, color: text }}>Drive management</h1>
          <div style={{ background: surface, borderRadius: 12, padding: "22px 24px", border: `1px solid ${border}`, maxWidth: 560 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 18 }}>
              <Calendar size={14} color={COLOR} />
              <span style={{ fontSize: 14, fontWeight: 600, color: text }}>Active drive</span>
            </div>
            {[
              { label: "Drive name",   placeholder: "Spring 2026 Infrastructure Drive" },
              { label: "Start date",   placeholder: "Apr 1, 2026" },
              { label: "End date",     placeholder: "Jun 30, 2026" },
            ].map(({ label, placeholder }) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 5 }}>{label}</label>
                <input placeholder={placeholder} style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: text, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}
            <div style={{ marginTop: 6, paddingTop: 16, borderTop: `1px solid ${border}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 14 }}>Goals</div>
              {[
                { icon: <DollarSign size={13} />, label: "Funding target (USD)",  val: "2400" },
                { icon: <MessageSquare size={13} />, label: "Quora comments",     val: "200" },
                { icon: <Github size={13} />, label: "GitHub stars",              val: "500" },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ color: subtle }}>{icon}</span>
                  <label style={{ fontSize: 12, color: subtle, width: 180, flexShrink: 0 }}>{label}</label>
                  <input defaultValue={val} style={{ width: 100, padding: "7px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }} />
                </div>
              ))}
            </div>
            <button style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <Save size={13} /> Save drive
            </button>
          </div>
        </div>
      )}

      {/* ── SETTINGS TAB ── */}
      {tab === "settings" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          <h1 style={{ margin: "0 0 22px", fontSize: 16, fontWeight: 700, color: text }}>Settings</h1>
          <div style={{ background: surface, borderRadius: 12, padding: "22px 24px", border: `1px solid ${border}`, maxWidth: 520, marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 16 }}>Service Credits</div>
            {[
              { label: "Credits per dollar (gift card)", val: credPerDollar, setter: setCredPerDollar },
              { label: "Credits per comment or star",    val: credPerAction, setter: setCredPerAction },
              { label: "Per-member per-drive cap (SC)",  val: cap,           setter: setCap },
            ].map(({ label, val, setter }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <label style={{ fontSize: 12, color: subtle, flex: 1 }}>{label}</label>
                <input value={val} onChange={e => setter(e.target.value)} style={{ width: 90, padding: "7px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }} />
              </div>
            ))}
          </div>
          <div style={{ background: surface, borderRadius: 12, padding: "22px 24px", border: `1px solid ${border}`, maxWidth: 520, marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: text }}>Fundraiser banner</div>
                <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>Show the slim banner to signed-in members</div>
              </div>
              <div onClick={() => setBannerOn(b => !b)} style={{ cursor: "pointer", color: bannerOn ? COLOR : subtle }}>
                {bannerOn ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
              </div>
            </div>
          </div>
          <div style={{ background: surface, borderRadius: 12, padding: "22px 24px", border: `1px solid ${border}`, maxWidth: 520 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 8 }}>Signal instructions</div>
            <div style={{ fontSize: 12, color: subtle, marginBottom: 10 }}>Shown to members on the post-submit confirmation screen.</div>
            <textarea value={signalText} onChange={e => setSignalText(e.target.value)} rows={3} style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 12, color: text, outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
            <button style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 7, background: COLOR, border: "none", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              <Save size={12} /> Save settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
