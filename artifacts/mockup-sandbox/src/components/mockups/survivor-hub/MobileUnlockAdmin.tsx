// design-sync
// STATE: Admin — Unlock access gate management (mobile)
import { useState } from "react";
import { Unlock, CheckCircle, XCircle, Key, Clock } from "lucide-react";

const COLOR  = "#C084FC";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const REQUESTS = [
  { id: 1, member: "@yolanda-f", resource: "LightHouse — priority slot",          reason: "Emergency housing need verified by social worker", status: "pending" },
  { id: 2, member: "@marcus-b",  resource: "Foundation — high-credit gig access", reason: "Profile verified; 3 prior gigs completed",          status: "pending" },
  { id: 3, member: "@lin-c",     resource: "SocketRelay — volunteer dashboard",   reason: "Volunteer onboarding complete",                     status: "approved" },
  { id: 4, member: "@diana-w",   resource: "PeerProgramming — host role",          reason: "Held 4 sessions with positive ratings",             status: "pending" },
  { id: 5, member: "@amara-o",   resource: "WeeklyPerformance — read access",      reason: "Community ambassador request",                      status: "rejected" },
];

const GATES = [
  { label: "LightHouse priority",       gated: true  },
  { label: "Foundation high-credit",    gated: true  },
  { label: "PeerProgramming host role", gated: true  },
  { label: "SocketRelay volunteer",     gated: true  },
  { label: "WeeklyPerformance read",    gated: false },
];

export function MobileUnlockAdmin() {
  const [tab, setTab]     = useState<"requests"|"gates">("requests");
  const [actions, setActions] = useState<Record<number,"approved"|"rejected"|"pending">>({});
  const act = (id: number, a: "approved"|"rejected") => setActions(p => ({ ...p, [id]: a }));

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Unlock size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Unlock Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Access gate management</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["requests","gates"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 14px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#fff" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {tab === "requests" && REQUESTS.map(r => {
          const st = actions[r.id] ?? r.status;
          return (
            <div key={r.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <Key size={13} color={COLOR} />
                <span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{r.resource}</span>
              </div>
              <div style={{ fontSize: 12, color: subtle, marginBottom: 4 }}>{r.member}</div>
              <div style={{ fontSize: 12, color: "#D1D5DB", lineHeight: 1.5, marginBottom: 10 }}>{r.reason}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: st === "approved" ? "rgba(34,197,94,0.12)" : st === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: st === "approved" ? "#22C55E" : st === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${st === "approved" ? "rgba(34,197,94,0.3)" : st === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{st}</span>
                {st === "pending" && (
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => act(r.id, "approved")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 12, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={12} /> Grant</button>
                    <button onClick={() => act(r.id, "rejected")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 12, fontWeight: 600, cursor: "pointer" }}><XCircle size={12} /> Deny</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {tab === "gates" && GATES.map(g => (
          <div key={g.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}`, marginBottom: 10 }}>
            <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{g.label}</div>
            <div style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: g.gated ? "rgba(244,63,94,0.12)" : "rgba(34,197,94,0.12)",
              color: g.gated ? COLOR : "#22C55E",
              border: `1px solid ${g.gated ? "rgba(244,63,94,0.3)" : "rgba(34,197,94,0.3)"}`,
            }}>{g.gated ? "Gated" : "Open"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
