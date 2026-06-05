// design-sync
// STATE: Admin — Foundation gig moderation (mobile)
import { useState } from "react";
import { Briefcase, CheckCircle, XCircle, Flag, ChevronRight, Shield } from "lucide-react";

const COLOR  = "#22C55E";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const GIGS = [
  { id: 1, title: "Data entry — 3 hr block",           poster: "@maria-g",    credits: 30, status: "pending",  flag: false },
  { id: 2, title: "Childcare support — weekend",        poster: "@amara-o",    credits: 45, status: "pending",  flag: true  },
  { id: 3, title: "Grocery run — SW Houston",           poster: "@lin-c",      credits: 15, status: "approved", flag: false },
  { id: 4, title: "Resume review session",              poster: "@david-k",    credits: 20, status: "approved", flag: false },
  { id: 5, title: "Moving help — 2 adults needed",      poster: "@yolanda-f",  credits: 40, status: "rejected", flag: false },
];

export function MobileFoundationAdmin() {
  const [tab, setTab]       = useState<"pending"|"all">("pending");
  const [actions, setActions] = useState<Record<number, "approved"|"rejected"|"pending">>({});

  const visible = tab === "pending" ? GIGS.filter(g => g.status === "pending") : GIGS;
  const act = (id: number, a: "approved"|"rejected") => setActions(p => ({ ...p, [id]: a }));

  const statusFor = (g: typeof GIGS[0]) => actions[g.id] ?? g.status;

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "#0D0F14", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Briefcase size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Foundation Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Gig moderation</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          {(["pending","all"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 14px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#000" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{t === "pending" ? "Needs review" : "All gigs"}</button>
          ))}
        </div>
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {visible.map(g => {
          const s = statusFor(g);
          return (
            <div key={g.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${g.flag ? "rgba(245,158,11,0.35)" : border}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ fontSize: 14, fontWeight: 600, flex: 1, paddingRight: 8 }}>{g.title}</div>
                {g.flag && <Flag size={13} color="#F59E0B" />}
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: subtle }}>{g.poster}</span>
                <span style={{ fontSize: 12, color: COLOR, fontWeight: 700 }}>{g.credits} credits</span>
                <span style={{ marginLeft: "auto", padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: s === "approved" ? "rgba(34,197,94,0.12)" : s === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: s === "approved" ? "#22C55E" : s === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${s === "approved" ? "rgba(34,197,94,0.3)" : s === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{s}</span>
              </div>
              {s === "pending" && (
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => act(g.id, "approved")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={13} /> Approve</button>
                  <button onClick={() => act(g.id, "rejected")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><XCircle size={13} /> Reject</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
