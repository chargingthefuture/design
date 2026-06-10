// design-sync
// STATE: Admin — ServiceCredits issuance & dispute management (mobile)
import { useState } from "react";
import { Coins, CheckCircle, XCircle, AlertTriangle, Plus } from "lucide-react";

const COLOR  = "#F59E0B";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const DISPUTES = [
  { id: 1, member: "@yolanda-f", amount: 45, reason: "Gig completed but credits not issued",       status: "pending" },
  { id: 2, member: "@marcus-b",  amount: 20, reason: "Duplicate charge on SocketRelay request",    status: "pending" },
  { id: 3, member: "@lin-c",     amount: 15, reason: "Badge award not reflected",                   status: "resolved" },
  { id: 4, member: "@diana-w",   amount: 30, reason: "Transfer to @amara-o failed mid-transaction", status: "pending" },
];

const SUMMARY = [
  { label: "In circulation", value: "2.4M SC",  color: COLOR },
  { label: "Issued this week", value: "+18,240", color: "#22C55E" },
  { label: "Disputes open",   value: "3",        color: "#EF4444" },
  { label: "Resolved (30d)",  value: "47",       color: subtle },
];

export function MobileServiceCreditsAdmin() {
  const [actions, setActions] = useState<Record<number,"resolved"|"rejected"|"pending">>({});
  const act = (id: number, a: "resolved"|"rejected") => setActions(p => ({ ...p, [id]: a }));

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Coins size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>ServiceCredits Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Disputes &amp; issuance</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {/* Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          {SUMMARY.map(s => (
            <div key={s.label} style={{ padding: "10px 12px", borderRadius: 10, background: surface, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, fontWeight: 700, color: subtle, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Disputes</div>
        {DISPUTES.map(d => {
          const st = actions[d.id] ?? d.status;
          return (
            <div key={d.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{d.member}</span>
                <span style={{ fontSize: 13, color: COLOR, fontWeight: 700 }}>+{d.amount} SC</span>
              </div>
              <div style={{ fontSize: 12, color: "#D1D5DB", marginBottom: 8, lineHeight: 1.5 }}>{d.reason}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: st === "resolved" ? "rgba(34,197,94,0.12)" : st === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: st === "resolved" ? "#22C55E" : st === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${st === "resolved" ? "rgba(34,197,94,0.3)" : st === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{st}</span>
                {st === "pending" && (
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => act(d.id, "resolved")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 12, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={12} /> Resolve</button>
                    <button onClick={() => act(d.id, "rejected")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 12, fontWeight: 600, cursor: "pointer" }}><XCircle size={12} /> Deny</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Manual issue */}
        <div style={{ marginTop: 8, padding: "14px", borderRadius: 12, background: surface, border: `1px dashed ${border}` }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Manual credit issuance</div>
          <input placeholder="@handle" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, background: "var(--comic-bg, #0F1117)", border: `1px solid ${border}`, color: text, fontSize: 13, marginBottom: 8, boxSizing: "border-box" }} />
          <div style={{ display: "flex", gap: 8 }}>
            <input placeholder="Amount (SC)" style={{ flex: 1, padding: "8px 12px", borderRadius: 8, background: "var(--comic-bg, #0F1117)", border: `1px solid ${border}`, color: text, fontSize: 13 }} />
            <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 14px", borderRadius: 8, background: COLOR, border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer" }}><Plus size={13} /> Issue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
