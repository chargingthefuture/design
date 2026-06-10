// design-sync
import { useState } from "react";
import {
  Heart, DollarSign, MessageSquare, Github, CheckCircle, X,
  Settings, Calendar, ToggleRight, ToggleLeft, Save, ChevronRight,
} from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

type SubmissionStatus = "pending" | "confirmed" | "not_confirmed";
type SubmissionKind   = "gift_card" | "quora" | "github";
type Submission = {
  id: number; member: string; kind: SubmissionKind; kindLabel: string;
  claimedValue: string; signalContact: string | null; date: string;
  status: SubmissionStatus; confirmedValue: string; urlField: string;
};

const SUBMISSIONS: Submission[] = [
  { id: 1, member: "@amara-j",  kind: "gift_card", kindLabel: "Gift card (Amazon)", claimedValue: "$25", signalContact: "signal.me/+amara", date: "Jun 5",  status: "pending",       confirmedValue: "25", urlField: "" },
  { id: 2, member: "@tiana-b",  kind: "quora",     kindLabel: "Quora comment",      claimedValue: "—",   signalContact: null,                date: "Jun 4",  status: "pending",       confirmedValue: "1",  urlField: "quora.com/…" },
  { id: 3, member: "@david-k",  kind: "github",    kindLabel: "GitHub star",        claimedValue: "—",   signalContact: null,                date: "Jun 3",  status: "pending",       confirmedValue: "1",  urlField: "" },
  { id: 4, member: "@priya-l",  kind: "gift_card", kindLabel: "Gift card (Apple)",  claimedValue: "$50", signalContact: "signal.me/+priya", date: "Jun 1",  status: "confirmed",     confirmedValue: "50", urlField: "" },
  { id: 5, member: "@carlos-v", kind: "quora",     kindLabel: "Quora comment",      claimedValue: "—",   signalContact: null,                date: "May 30", status: "not_confirmed", confirmedValue: "1",  urlField: "" },
];

type Tab = "queue" | "drive" | "settings";
type FilterKey = "All" | "Pending" | "Confirmed" | "Not matched";

const statusColor = (s: SubmissionStatus) =>
  s === "confirmed" ? "#22C55E" : s === "pending" ? "#F59E0B" : subtle;
const statusLabel = (s: SubmissionStatus) =>
  s === "confirmed" ? "Confirmed" : s === "pending" ? "Waiting" : "Not matched";

export function MobileContributionsAdmin() {
  const [tab, setTab]           = useState<Tab>("queue");
  const [filter, setFilter]     = useState<FilterKey>("All");
  const [expandId, setExpandId] = useState<number | null>(1);
  const [rows, setRows]         = useState<Submission[]>(SUBMISSIONS);
  const [bannerOn, setBannerOn] = useState(true);

  const visible = rows.filter(r =>
    filter === "All" ? true :
    filter === "Pending" ? r.status === "pending" :
    filter === "Confirmed" ? r.status === "confirmed" :
    r.status === "not_confirmed"
  );

  const updateRow = (id: number, patch: Partial<Submission>) =>
    setRows(rs => rs.map(r => r.id === id ? { ...r, ...patch } : r));

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={13} color="#fff" />
          </div>
          <span style={{ fontSize: 16, fontWeight: 700, color: text }}>Contributions Admin</span>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        {([
          { key: "queue" as Tab,    label: "Queue",    badge: rows.filter(r => r.status === "pending").length },
          { key: "drive" as Tab,    label: "Drive",    badge: null },
          { key: "settings" as Tab, label: "Settings", badge: null },
        ]).map(({ key, label, badge }) => (
          <button key={key} onClick={() => setTab(key)} style={{ flex: 1, padding: "10px 0", background: "transparent", border: "none", cursor: "pointer", fontSize: 12, fontWeight: tab === key ? 700 : 400, color: tab === key ? COLOR : subtle, borderBottom: tab === key ? `2px solid ${COLOR}` : "2px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            {label}
            {badge != null && badge > 0 && <span style={{ background: "#F59E0B", color: "#000", fontSize: 9, fontWeight: 700, padding: "0 4px", borderRadius: 99, lineHeight: "14px" }}>{badge}</span>}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto" }}>

        {/* QUEUE */}
        {tab === "queue" && (
          <div>
            <div style={{ display: "flex", gap: 6, padding: "10px 14px", borderBottom: `1px solid ${border}` }}>
              {(["All", "Pending", "Confirmed", "Not matched"] as FilterKey[]).map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: "4px 10px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 500, background: filter === f ? COLOR : border, color: filter === f ? "#fff" : subtle, whiteSpace: "nowrap" }}>
                  {f}
                </button>
              ))}
            </div>
            {visible.map((row) => {
              const expanded = expandId === row.id;
              return (
                <div key={row.id} style={{ borderBottom: `1px solid ${border}` }}>
                  <div onClick={() => setExpandId(expanded ? null : row.id)} style={{ padding: "12px 14px", cursor: "pointer", background: expanded ? `${COLOR}06` : "transparent" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: text }}>{row.member}</span>
                        <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>{row.kindLabel} · {row.date}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 10, fontWeight: 600, color: statusColor(row.status), background: `${statusColor(row.status)}15`, padding: "2px 7px", borderRadius: 20 }}>{statusLabel(row.status)}</span>
                        <ChevronRight size={14} color={subtle} style={{ transform: expanded ? "rotate(90deg)" : "none" }} />
                      </div>
                    </div>
                    {row.signalContact && (
                      <div style={{ fontSize: 11, color: subtle }}>Signal: {row.signalContact}</div>
                    )}
                  </div>

                  {expanded && (
                    <div style={{ padding: "12px 14px 16px", background: `${COLOR}04`, borderTop: `1px solid ${border}` }}>
                      {(row.kind === "quora" || row.kind === "github") && (
                        <div style={{ marginBottom: 10 }}>
                          <label style={{ fontSize: 11, color: subtle, display: "block", marginBottom: 5 }}>
                            {row.kind === "quora" ? "Quora post URL (paste from notifications)" : "GitHub profile URL (paste from notifications)"}
                          </label>
                          <input value={row.urlField} onChange={e => updateRow(row.id, { urlField: e.target.value })} placeholder="https://…" style={{ width: "100%", padding: "8px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none", boxSizing: "border-box" }} />
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                        <label style={{ fontSize: 11, color: subtle }}>Confirmed value $</label>
                        <input value={row.confirmedValue} onChange={e => updateRow(row.id, { confirmedValue: e.target.value })} style={{ width: 60, padding: "6px 8px", background: bg, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }} />
                        <span style={{ fontSize: 11, color: subtle }}>→ {parseInt(row.confirmedValue || "0") * 10} SC</span>
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => updateRow(row.id, { status: "confirmed" })} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "9px 0", borderRadius: 7, background: "#22C55E", border: "none", color: "#000", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          <CheckCircle size={12} /> Confirm
                        </button>
                        <button onClick={() => updateRow(row.id, { status: "not_confirmed" })} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "9px 0", borderRadius: 7, background: "transparent", border: `1px solid #EF4444`, color: "#EF4444", fontSize: 12, cursor: "pointer" }}>
                          <X size={12} /> Reject
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* DRIVE */}
        {tab === "drive" && (
          <div style={{ padding: "16px 14px" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 14 }}>Active drive</div>
            {[
              { label: "Drive name",   placeholder: "Spring 2026 Infrastructure Drive" },
              { label: "Start date",   placeholder: "Apr 1, 2026" },
              { label: "End date",     placeholder: "Jun 30, 2026" },
            ].map(({ label, placeholder }) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 5 }}>{label}</label>
                <input placeholder={placeholder} style={{ width: "100%", padding: "9px 12px", background: surface, border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: text, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}
            <div style={{ fontSize: 13, fontWeight: 600, color: text, margin: "16px 0 10px" }}>Goals</div>
            {[
              { Icon: DollarSign,    label: "Funding target (USD)",  val: "2400" },
              { Icon: MessageSquare, label: "Quora comments target",  val: "200"  },
              { Icon: Github,        label: "GitHub stars target",    val: "500"  },
            ].map(({ Icon, label, val }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Icon size={13} color={subtle} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: subtle, flex: 1 }}>{label}</span>
                <input defaultValue={val} style={{ width: 70, padding: "6px 8px", background: surface, border: `1px solid ${border}`, borderRadius: 7, fontSize: 12, color: text, outline: "none" }} />
              </div>
            ))}
            <button style={{ width: "100%", marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <Save size={13} /> Save drive
            </button>
          </div>
        )}

        {/* SETTINGS */}
        {tab === "settings" && (
          <div style={{ padding: "16px 14px" }}>
            {[
              { label: "Credits per dollar (gift card)", defaultVal: "10" },
              { label: "Credits per comment or star",    defaultVal: "50" },
              { label: "Per-member per-drive cap (SC)",  defaultVal: "500" },
            ].map(({ label, defaultVal }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${border}` }}>
                <span style={{ fontSize: 13, color: text, flex: 1 }}>{label}</span>
                <input defaultValue={defaultVal} style={{ width: 70, padding: "6px 8px", background: surface, border: `1px solid ${border}`, borderRadius: 7, fontSize: 13, color: text, outline: "none" }} />
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${border}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: text }}>Fundraiser banner</div>
                <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>Show to signed-in members</div>
              </div>
              <div onClick={() => setBannerOn(b => !b)} style={{ cursor: "pointer", color: bannerOn ? COLOR : subtle }}>
                {bannerOn ? <ToggleRight size={26} /> : <ToggleLeft size={26} />}
              </div>
            </div>
            <div style={{ paddingTop: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 8 }}>Signal instructions</div>
              <textarea defaultValue="Send the code to our Signal number: +1 555-000-0000. Include your username." rows={3} style={{ width: "100%", padding: "9px 12px", background: surface, border: `1px solid ${border}`, borderRadius: 8, fontSize: 12, color: text, outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              <button style={{ width: "100%", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                <Save size={13} /> Save settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
