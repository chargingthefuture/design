// design-sync
// STATE: Admin — SocketRelay request moderation (mobile)
import { useState } from "react";
import { Radio, CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

const COLOR  = "#FB923C";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const REQUESTS = [
  { id: 1, by: "@yolanda-f", type: "Emergency childcare — tonight", urgent: true,  idleHrs: null, status: "pending"  },
  { id: 2, by: "@marcus-b",  type: "Transportation to job interview", urgent: false, idleHrs: 51,   status: "pending"  },
  { id: 3, by: "@lin-c",     type: "Translation support — Spanish",   urgent: false, idleHrs: null, status: "approved" },
  { id: 4, by: "@diana-w",   type: "Legal document review",           urgent: true,  idleHrs: null, status: "pending"  },
  { id: 5, by: "@amara-o",   type: "Medical appointment escort",      urgent: false, idleHrs: null, status: "rejected" },
];

export function MobileSocketRelayAdmin() {
  const [actions, setActions] = useState<Record<number,"approved"|"rejected"|"pending">>({});
  const act = (id: number, a: "approved"|"rejected") => setActions(p => ({ ...p, [id]: a }));

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Radio size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>SocketRelay Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Request moderation</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {REQUESTS.map(r => {
          const st = actions[r.id] ?? r.status;
          const isIdle = r.idleHrs && r.idleHrs > 48;
          return (
            <div key={r.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${r.urgent && st === "pending" ? "rgba(239,68,68,0.35)" : isIdle ? "rgba(245,158,11,0.3)" : border}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                {r.urgent && st === "pending" && <AlertTriangle size={13} color="#EF4444" style={{ flexShrink: 0, marginTop: 2 }} />}
                {isIdle && <Clock size={13} color="#F59E0B" style={{ flexShrink: 0, marginTop: 2 }} />}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{r.type}</div>
                  <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>{r.by}{isIdle ? ` · idle ${r.idleHrs}h` : ""}</div>
                </div>
                <span style={{ padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: st === "approved" ? "rgba(34,197,94,0.12)" : st === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: st === "approved" ? "#22C55E" : st === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${st === "approved" ? "rgba(34,197,94,0.3)" : st === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{st}</span>
              </div>
              {st === "pending" && (
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => act(r.id, "approved")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={13} /> Approve</button>
                  <button onClick={() => act(r.id, "rejected")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><XCircle size={13} /> Reject</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
