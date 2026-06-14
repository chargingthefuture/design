// design-sync
// STATE: Admin — Workforce profile & skills-gap moderation (mobile)
import { useState } from "react";
import { Briefcase, CheckCircle, XCircle, AlertTriangle, Users, Search } from "lucide-react";

const COLOR  = "#F97316";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const FLAGS = [
  { id: 1, member: "@yolanda-f", issue: "Skills listed don't match uploaded resume",         status: "pending" },
  { id: 2, member: "@marcus-b",  issue: "Duplicate profile detected",                          status: "pending" },
  { id: 3, member: "@lin-c",     issue: "Role title flagged as inappropriate",                  status: "resolved" },
  { id: 4, member: "@diana-w",   issue: "Employment history gap requires documentation note",   status: "pending" },
];

const SUMMARY = [
  { label: "Total profiles",    value: "4,912", color: COLOR      },
  { label: "Unverified",        value: "348",   color: "#F59E0B"  },
  { label: "Open flags",        value: "3",     color: "#EF4444"  },
  { label: "Skills gaps mapped",value: "12,401",color: "#A78BFA"  },
];

export function MobileWorkforceAdmin() {
  const [tab, setTab] = useState<"flags"|"overview">("flags");
  const [actions, setActions] = useState<Record<number,"resolved"|"dismissed"|"pending">>({});
  const act = (id: number, a: "resolved"|"dismissed") => setActions(p => ({ ...p, [id]: a }));

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Briefcase size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Workforce Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Profile &amp; skills management</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["flags","overview"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 14px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#fff" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {tab === "overview" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {SUMMARY.map(s => (
              <div key={s.label} style={{ padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
                <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "flags" && FLAGS.map(f => {
          const st = actions[f.id] ?? f.status;
          return (
            <div key={f.id} style={{ marginBottom: 12, padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{f.member}</div>
              <div style={{ fontSize: 12, color: "#D1D5DB", lineHeight: 1.5, marginBottom: 10 }}>{f.issue}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  background: st === "resolved" ? "rgba(34,197,94,0.12)" : st === "dismissed" ? "rgba(107,114,128,0.12)" : "rgba(245,158,11,0.12)",
                  color: st === "resolved" ? "#22C55E" : st === "dismissed" ? subtle : "#F59E0B",
                  border: `1px solid ${st === "resolved" ? "rgba(34,197,94,0.3)" : st === "dismissed" ? "rgba(107,114,128,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}>{st}</span>
                {st === "pending" && (
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => act(f.id, "resolved")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E", fontSize: 12, fontWeight: 600, cursor: "pointer" }}><CheckCircle size={12} /> Resolve</button>
                    <button onClick={() => act(f.id, "dismissed")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(107,114,128,0.08)", border: "1px solid rgba(107,114,128,0.25)", color: subtle, fontSize: 12, fontWeight: 600, cursor: "pointer" }}><XCircle size={12} /> Dismiss</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
