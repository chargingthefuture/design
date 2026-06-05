// design-sync
// STATE: Admin — LevelUp track & badge management (mobile)
import { useState } from "react";
import { TrendingUp, Plus, Edit2, Trash2, CheckCircle } from "lucide-react";

const COLOR  = "#10B981";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const TRACKS = [
  { id: 1, name: "Tech",        color: "#3B82F6", badges: 12, enrolled: 847  },
  { id: 2, name: "Finance",     color: "#F59E0B", badges: 9,  enrolled: 534  },
  { id: 3, name: "Wellness",    color: "#14B8A6", badges: 7,  enrolled: 1203 },
  { id: 4, name: "Life Skills", color: "#A855F7", badges: 11, enrolled: 692  },
];

export function MobileLevelUpAdmin() {
  const [tab, setTab]   = useState<"tracks"|"badges">("tracks");
  const [saved, setSaved] = useState<Set<number>>(new Set());

  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "#0D0F14", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TrendingUp size={16} color={COLOR} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>LevelUp Admin</div>
            <div style={{ fontSize: 11, color: subtle }}>Track &amp; badge management</div>
          </div>
          <div style={{ marginLeft: "auto", padding: "3px 8px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["tracks","badges"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 14px", borderRadius: 8, background: tab === t ? COLOR : surface, border: `1px solid ${tab === t ? COLOR : border}`, color: tab === t ? "#000" : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
          <button style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 8, background: `${COLOR}15`, border: `1px solid ${COLOR}30`, color: COLOR, fontSize: 12, fontWeight: 600, cursor: "pointer" }}><Plus size={13} /> New</button>
        </div>
      </div>

      {/* Tracks */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {TRACKS.map(t => (
          <div key={t.id} style={{ marginBottom: 12, padding: "14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: t.color }} />
              <div style={{ fontSize: 15, fontWeight: 700, flex: 1 }}>{t.name}</div>
              <button style={{ padding: "4px 10px", borderRadius: 7, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", color: "#6366F1", fontSize: 12, cursor: "pointer" }}><Edit2 size={12} /></button>
              <button style={{ padding: "4px 10px", borderRadius: 7, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#EF4444", fontSize: 12, cursor: "pointer" }}><Trash2 size={12} /></button>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: subtle }}>Badges</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: t.color }}>{t.badges}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: subtle }}>Enrolled</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: text }}>{t.enrolled.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
