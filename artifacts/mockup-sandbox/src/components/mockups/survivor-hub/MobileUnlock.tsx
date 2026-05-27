// STATE: Authenticated + Populated — mobile verification status view
import { useState } from "react";
import { Unlock as UnlockIcon, CheckCircle, Clock, XCircle, ExternalLink, RefreshCw, ChevronRight } from "lucide-react";

const BRAND = "#10B981";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

type Status = "pending" | "approved" | "rejected";

const STATUS_CONFIG: Record<Status, { icon: typeof CheckCircle; color: string; bg: string; label: string }> = {
  pending: { icon: Clock, color: "#F59E0B", bg: "rgba(245,158,11,0.08)", label: "Pending Review" },
  approved: { icon: CheckCircle, color: BRAND, bg: "rgba(16,185,129,0.08)", label: "Approved" },
  rejected: { icon: XCircle, color: "#EF4444", bg: "rgba(239,68,68,0.08)", label: "Rejected" },
};

export function MobileUnlock({ initialStatus = "pending" }: { initialStatus?: Status }) {
  const [status] = useState<Status>(initialStatus);
  const cfg = STATUS_CONFIG[status];
  const Icon = cfg.icon;

  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: "#0D0F14", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <UnlockIcon size={16} color={BRAND} />
          <span style={{ fontSize: 16, fontWeight: 700 }}>Verification Status</span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: cfg.bg, border: `1px solid ${cfg.color}30`, fontSize: 11, fontWeight: 600, color: cfg.color }}>
            <Icon size={10} /> {cfg.label}
          </div>
        </div>
        <div style={{ fontSize: 12, color: subtle }}>Quora profile · account unlock</div>
      </div>

      {/* Main scroll */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>

        {/* Status card */}
        <div style={{ padding: "20px", borderRadius: 16, background: cfg.bg, border: `1px solid ${cfg.color}25`, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${cfg.color}15`, border: `1px solid ${cfg.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={22} color={cfg.color} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: cfg.color }}>{cfg.label}</div>
              <div style={{ fontSize: 12, color: subtle }}>
                {status === "pending" && "Submitted May 20, 2025"}
                {status === "approved" && "Reviewed May 21, 2025"}
                {status === "rejected" && "Reviewed May 21, 2025"}
              </div>
            </div>
          </div>

          {status === "approved" && (
            <div style={{ padding: "14px", borderRadius: 12, background: `${BRAND}08`, border: `1px solid ${BRAND}20`, textAlign: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 26 }}>🎉</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: BRAND, marginTop: 6 }}>Welcome to the Survivor Hub!</div>
              <div style={{ fontSize: 12, color: subtle, marginTop: 4 }}>All features are now unlocked.</div>
              <button style={{ marginTop: 10, padding: "10px 20px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Go to Hub <ChevronRight size={13} />
              </button>
            </div>
          )}

          {status === "rejected" && (
            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#EF4444", marginBottom: 4 }}>Rejection reason</div>
              <div style={{ fontSize: 12, color: text, lineHeight: 1.5 }}>
                The provided Quora profile URL could not be matched to a legitimate account. Please submit a valid, publicly accessible Quora profile URL.
              </div>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
            <ExternalLink size={12} color={subtle} />
            <span style={{ fontSize: 12, color: subtle, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>quora.com/profile/survivor-username</span>
            <a href="#" style={{ fontSize: 12, color: BRAND, textDecoration: "none", flexShrink: 0 }}>View ↗</a>
          </div>
        </div>

        {/* Re-submit (rejected) */}
        {status === "rejected" && (
          <div style={{ padding: "16px", borderRadius: 14, background: surface, border: `1px solid ${border}`, marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 10 }}>Re-submit with a new URL</div>
            <input placeholder="https://quora.com/profile/…" style={{ width: "100%", padding: "10px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 10, fontSize: 13, color: text, outline: "none", boxSizing: "border-box", marginBottom: 10 }} />
            <button style={{ width: "100%", padding: "11px", borderRadius: 10, background: "#EF4444", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <RefreshCw size={13} /> Re-submit
            </button>
          </div>
        )}

        {/* Timeline */}
        <div style={{ padding: "16px", borderRadius: 14, background: surface, border: `1px solid ${border}`, marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Timeline</div>
          {[
            { label: "Submitted", done: true, time: "May 20, 9:41 AM" },
            { label: "Under Review", done: true, time: status === "pending" ? "In progress" : "May 21, 2:00 PM" },
            { label: "Decision", done: status !== "pending", time: status === "pending" ? "Awaiting" : "May 21, 4:10 PM" },
          ].map(({ label, done, time }, i) => (
            <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: done ? `${BRAND}20` : "rgba(255,255,255,0.05)", border: `2px solid ${done ? BRAND : border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {done && <div style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND }} />}
                </div>
                {i < 2 && <div style={{ width: 2, height: 22, background: done ? `${BRAND}30` : border, margin: "2px 0" }} />}
              </div>
              <div style={{ paddingTop: 2 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: done ? text : subtle }}>{label}</div>
                <div style={{ fontSize: 11, color: subtle }}>{time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* What gets unlocked */}
        <div style={{ padding: "14px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}18` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>What gets unlocked</div>
          {["Full Directory", "Skills Hunt", "Service Credits", "Plugin marketplace", "GDP contribution"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", fontSize: 12 }}>
              <CheckCircle size={12} color={status === "approved" ? BRAND : border} />
              <span style={{ color: status === "approved" ? text : subtle }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { icon: <UnlockIcon size={20} color={BRAND} />, label: "Unlock", active: true },
          { icon: <CheckCircle size={20} color={subtle} />, label: "Status", active: false },
          { icon: <ExternalLink size={20} color={subtle} />, label: "Profile", active: false },
        ].map(({ icon, label, active }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            {icon}
            <span style={{ fontSize: 10, color: active ? BRAND : subtle }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
