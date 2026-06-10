// design-sync
// STATE: Admin — SkillsHunt round management (mobile)
import { useState } from "react";
import { Target, Plus, Edit2, Trash2, CheckCircle, Clock } from "lucide-react";

const COLOR  = "#A78BFA";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const ROUNDS = [
  { id: 1, name: "Round 14 — Tech Focus",       opens: "Jun 10",  closes: "Jun 17", participants: 342, status: "upcoming" },
  { id: 2, name: "Round 13 — Finance & Budget",  opens: "May 27",  closes: "Jun 3",  participants: 518, status: "active"   },
  { id: 3, name: "Round 12 — Wellness & Mental", opens: "May 13",  closes: "May 20", participants: 401, status: "closed"   },
  { id: 4, name: "Round 11 — Life Skills",        opens: "Apr 29",  closes: "May 6",  participants: 487, status: "closed"   },
];

const statusColor = (s: string) =>
  s === "active" ? "#22C55E" : s === "upcoming" ? "#0EA5E9" : subtle;

export function MobileSkillsHuntAdmin() {
  const [tab, setTab] = useState<"rounds"|"badges">("rounds");

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Target size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>SkillsHunt Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Round management</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["rounds","badges"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 14px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#000" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
          <button style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 8, background: `${COLOR}15`, border: `1px solid ${COLOR}30`, color: COLOR, fontSize: 12, fontWeight: 600, cursor: "pointer" }}><Plus size={13} /> New round</button>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {ROUNDS.map(r => (
          <div key={r.id} style={{ marginBottom: 12, padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 600, flex: 1, paddingRight: 8 }}>{r.name}</div>
              <div style={{ display: "flex", gap: 6 }}>
                <button style={{ padding: "4px 8px", borderRadius: 6, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", cursor: "pointer" }}><Edit2 size={11} color="#6366F1" /></button>
                <button style={{ padding: "4px 8px", borderRadius: 6, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", cursor: "pointer" }}><Trash2 size={11} color="#EF4444" /></button>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 11, color: subtle }}>Opens</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{r.opens}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: subtle }}>Closes</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{r.closes}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: subtle }}>Participants</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{r.participants.toLocaleString()}</div>
              </div>
              <span style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700, background: `${statusColor(r.status)}20`, color: statusColor(r.status), border: `1px solid ${statusColor(r.status)}40` }}>{r.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
