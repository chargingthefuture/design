// design-sync
// STATE: Admin — LightHouse housing request moderation (mobile)
import { useState } from "react";
import { Home, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

const COLOR  = "#60A5FA";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const REQUESTS = [
  { id: 1, member: "@yolanda-f", city: "Houston, TX",  type: "Emergency shelter",       credits: true,  status: "pending",  urgent: true  },
  { id: 2, member: "@marcus-b",  city: "Atlanta, GA",   type: "Transitional housing",    credits: false, status: "pending",  urgent: false },
  { id: 3, member: "@lin-c",     city: "Chicago, IL",   type: "Rental assistance",        credits: true,  status: "approved", urgent: false },
  { id: 4, member: "@diana-w",   city: "Dallas, TX",    type: "Emergency shelter",       credits: false, status: "pending",  urgent: true  },
  { id: 5, member: "@amara-o",   city: "New York, NY",  type: "Long-term stable housing", credits: true,  status: "rejected", urgent: false },
];

export function MobileLightHouseAdmin() {
  const [actions, setActions] = useState<Record<number,"approved"|"rejected"|"pending">>({});
  const act = (id: number, a: "approved"|"rejected") => setActions(p => ({ ...p, [id]: a }));

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Home size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>LightHouse Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Housing request queue</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {REQUESTS.map(r => {
          const s = actions[r.id] ?? r.status;
          return (
            <div key={r.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${r.urgent && s === "pending" ? "rgba(239,68,68,0.35)" : border}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                {r.urgent && s === "pending" && <AlertTriangle size={13} color="#EF4444" style={{ flexShrink: 0, marginTop: 2 }} />}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{r.type}</div>
                  <div style={{ fontSize: 12, color: subtle, marginTop: 2 }}>{r.member} · {r.city}</div>
                </div>
                <span style={{ padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: s === "approved" ? "rgba(34,197,94,0.12)" : s === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: s === "approved" ? "#22C55E" : s === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${s === "approved" ? "rgba(34,197,94,0.3)" : s === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{s}</span>
              </div>
              {r.credits && <div style={{ fontSize: 11, color: COLOR, marginBottom: 8 }}>✓ ServiceCredits accepted</div>}
              {s === "pending" && (
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
