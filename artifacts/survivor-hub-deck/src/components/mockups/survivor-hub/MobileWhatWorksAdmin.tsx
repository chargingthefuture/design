// design-sync
// STATE: Admin — WhatWorks entry moderation (mobile)
import { useState } from "react";
import { ThumbsUp, CheckCircle, XCircle, Flag, Plus } from "lucide-react";

const COLOR  = "#84CC16";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const ENTRIES = [
  { id: 1, title: "Foundation gig → first stable income",        submitter: "@amara-o",   upvotes: 312, status: "pending",  flag: false },
  { id: 2, title: "SkillsHunt badge → job interview callback",   submitter: "@diana-w",   upvotes: 287, status: "pending",  flag: false },
  { id: 3, title: "LightHouse slot → housing within 2 weeks",   submitter: "@yolanda-f", upvotes: 198, status: "approved", flag: false },
  { id: 4, title: "SocketRelay request → childcare covered",     submitter: "@lin-c",     upvotes: 89,  status: "pending",  flag: true  },
  { id: 5, title: "ServiceCredits trade → medical co-pay",       submitter: "@marcus-b",  upvotes: 143, status: "rejected", flag: false },
];

export function MobileWhatWorksAdmin() {
  const [tab, setTab] = useState<"pending"|"all">("pending");
  const [actions, setActions] = useState<Record<number,"approved"|"rejected"|"pending">>({});
  const act = (id: number, a: "approved"|"rejected") => setActions(p => ({ ...p, [id]: a }));

  const visible = tab === "pending" ? ENTRIES.filter(e => e.status === "pending") : ENTRIES;

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "#0D0F14", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ThumbsUp size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>WhatWorks Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Entry moderation</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["pending","all"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 14px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#000" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{t === "pending" ? "Needs review" : "All entries"}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {visible.map(e => {
          const st = actions[e.id] ?? e.status;
          return (
            <div key={e.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${e.flag ? "rgba(245,158,11,0.35)" : border}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ fontSize: 14, fontWeight: 600, flex: 1, paddingRight: 8 }}>{e.title}</div>
                {e.flag && <Flag size={13} color="#F59E0B" />}
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: subtle }}>{e.submitter}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: COLOR, fontWeight: 600 }}><ThumbsUp size={11} /> {e.upvotes}</span>
                <span style={{ marginLeft: "auto", padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: st === "approved" ? "rgba(34,197,94,0.12)" : st === "rejected" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: st === "approved" ? "#22C55E" : st === "rejected" ? "#EF4444" : "#F59E0B",
                  border: `1px solid ${st === "approved" ? "rgba(34,197,94,0.3)" : st === "rejected" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{st}</span>
              </div>
              {st === "pending" && (
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => act(e.id, "approved")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={13} /> Approve</button>
                  <button onClick={() => act(e.id, "rejected")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 13, fontWeight: 600, cursor: "pointer" }}><XCircle size={13} /> Reject</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
