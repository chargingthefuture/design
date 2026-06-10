// design-sync
// STATE: Admin — PeerProgramming session moderation (mobile)
import { useState } from "react";
import { Code2, CheckCircle, XCircle, Flag, Users } from "lucide-react";

const COLOR  = "#8B5CF6";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const SESSIONS = [
  { id: 1, title: "Python for beginners — session 4",    host: "@david-k",   enrolled: 8,  max: 10, status: "pending",  flag: false },
  { id: 2, title: "Resume-to-code: no-code tools intro",  host: "@priya-s",   enrolled: 5,  max: 6,  status: "pending",  flag: true  },
  { id: 3, title: "Web scraping with BeautifulSoup",      host: "@lin-c",     enrolled: 3,  max: 8,  status: "approved", flag: false },
  { id: 4, title: "Excel macros for admin work",          host: "@amara-o",   enrolled: 6,  max: 6,  status: "approved", flag: false },
  { id: 5, title: "Intro to SQL — live query session",    host: "@marcus-b",  enrolled: 0,  max: 10, status: "rejected", flag: false },
];

export function MobilePeerProgrammingAdmin() {
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
            <Code2 size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Peer Programming Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Session queue</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {SESSIONS.map(s => {
          const st = actions[s.id] ?? s.status;
          return (
            <div key={s.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${s.flag ? "rgba(245,158,11,0.35)" : border}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ fontSize: 14, fontWeight: 600, flex: 1, paddingRight: 8 }}>{s.title}</div>
                {s.flag && <Flag size={13} color="#F59E0B" />}
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: subtle }}>{s.host}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: subtle }}><Users size={11} /> {s.enrolled}/{s.max}</span>
                <span style={{ marginLeft: "auto", padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: st === "approved" ? "rgba(34,197,94,0.12)" : st === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: st === "approved" ? "#22C55E" : st === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${st === "approved" ? "rgba(34,197,94,0.3)" : st === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{st}</span>
              </div>
              {st === "pending" && (
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => act(s.id, "approved")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={13} /> Approve</button>
                  <button onClick={() => act(s.id, "rejected")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><XCircle size={13} /> Reject</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
