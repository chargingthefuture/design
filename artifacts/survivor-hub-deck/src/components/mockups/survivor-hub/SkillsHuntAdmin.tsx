// design-sync
// STATE: Admin — SkillsHunt round management + badge configuration (web/desktop)
import { useState } from "react";
import {
  Search, Trophy, Target, Users, Plus, Edit2, Trash2,
  X, Save, Bell, Settings, Calendar, ShieldCheck, CheckCircle,
} from "lucide-react";

const COLOR = "var(--app-accent, #D946EF)";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

type Status = "upcoming" | "active" | "closed";

type Round = {
  id: number;
  name: string;
  opens: string;
  closes: string;
  participants: number;
  submissions: number;
  status: Status;
};

const ROUNDS: Round[] = [
  { id: 1, name: "Round 14 — Tech Focus",        opens: "Jun 10", closes: "Jun 17", participants: 342, submissions: 198, status: "upcoming" },
  { id: 2, name: "Round 13 — Finance & Budget",  opens: "May 27", closes: "Jun 3",  participants: 518, submissions: 471, status: "active"   },
  { id: 3, name: "Round 12 — Wellness & Mental", opens: "May 13", closes: "May 20", participants: 401, submissions: 388, status: "closed"   },
  { id: 4, name: "Round 11 — Life Skills",       opens: "Apr 29", closes: "May 6",  participants: 487, submissions: 452, status: "closed"   },
];

type BadgeDef = { id: number; name: string; emoji: string; criteria: string; holders: number; active: boolean };

const BADGES: BadgeDef[] = [
  { id: 1, name: "First Finder",         emoji: "🔍", criteria: "First accepted submission",            holders: 1284, active: true },
  { id: 2, name: "Diversity Champion",   emoji: "🌍", criteria: "Skills spanning 3+ sectors",           holders: 312,  active: true },
  { id: 3, name: "Rare Talent Scout",    emoji: "💎", criteria: "Found a rare skill (<50% recruited)",  holders: 87,   active: true },
  { id: 4, name: "Quality Contributor",  emoji: "⭐", criteria: "10 accepted with no admin edits",      holders: 156,  active: true },
  { id: 5, name: "Leaderboard Champion", emoji: "🏆", criteria: "Reached top 10 on the leaderboard",    holders: 41,   active: false },
];

const statusColor = (s: Status) =>
  s === "active" ? "#22C55E" : s === "upcoming" ? "#0EA5E9" : subtle;

type FilterKey = "All" | "Active" | "Upcoming" | "Closed";
const FILTERS: FilterKey[] = ["All", "Active", "Upcoming", "Closed"];

type RoundForm = { name: string; opens: string; closes: string; status: Status };

export function SkillsHuntAdmin() {
  const [tab, setTab]       = useState<"rounds" | "badges">("rounds");
  const [filter, setFilter] = useState<FilterKey>("All");
  const [editId, setEditId] = useState<number | null>(2);
  const [saved, setSaved]   = useState<Set<number>>(new Set());
  const [badges, setBadges] = useState<BadgeDef[]>(BADGES);
  const [form, setForm]     = useState<RoundForm>({
    name: "Round 13 — Finance & Budget", opens: "May 27", closes: "Jun 3", status: "active",
  });

  const startEdit = (r: Round) => {
    setEditId(r.id);
    setForm({ name: r.name, opens: r.opens, closes: r.closes, status: r.status });
  };

  const handleSave = () => {
    if (editId) setSaved(s => new Set([...s, editId]));
    setEditId(null);
  };

  const toggleBadge = (id: number) =>
    setBadges(bs => bs.map(b => b.id === id ? { ...b, active: !b.active } : b));

  const filtered = ROUNDS.filter(r =>
    filter === "All" ? true : r.status === filter.toLowerCase());

  const counts = {
    Active:   ROUNDS.filter(r => r.status === "active").length,
    Upcoming: ROUNDS.filter(r => r.status === "upcoming").length,
    Closed:   ROUNDS.filter(r => r.status === "closed").length,
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${COLOR}25`, border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <Search size={20} color={COLOR} />
        </div>
        {[Target, Trophy, Users].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${COLOR}20` : "transparent", border: i === 0 ? `1px solid ${COLOR}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? COLOR : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${COLOR}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: COLOR }}>A</div>
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🔍 Skills Hunt Admin</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Run scouting rounds and configure scout badges</div>
        </div>

        <div style={{ padding: "0 12px 8px" }}>
          {(["rounds", "badges"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: tab === t ? `${COLOR}15` : "transparent", borderLeft: tab === t ? `2px solid ${COLOR}` : "2px solid transparent", color: tab === t ? text : subtle, fontSize: 13, border: "none", textAlign: "left", textTransform: "capitalize" }}>
              {t === "rounds" ? <Calendar size={14} /> : <Trophy size={14} />}
              {t}
            </button>
          ))}
        </div>

        {tab === "rounds" && (
          <div style={{ padding: "0 12px", flex: 1 }}>
            <div style={{ margin: "8px 0 6px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase" }}>Filter</div>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: filter === f ? `${COLOR}12` : "transparent", borderLeft: filter === f ? `2px solid ${COLOR}` : "2px solid transparent", color: filter === f ? text : subtle, fontSize: 13, border: "none", textAlign: "left" }}>
                {f}
                {f !== "All" && (
                  <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, background: `${statusColor(f.toLowerCase() as Status)}20`, color: statusColor(f.toLowerCase() as Status), border: `1px solid ${statusColor(f.toLowerCase() as Status)}30`, borderRadius: 4, padding: "1px 6px" }}>{counts[f as keyof typeof counts]}</span>
                )}
              </button>
            ))}

            <div style={{ margin: "16px 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase" }}>Stats</div>
            {[
              { l: "Survivors found",   v: "12,847", c: COLOR     },
              { l: "Pending review",    v: "318",    c: "#0EA5E9" },
              { l: "Active scouts",     v: "2,104",  c: "#22C55E" },
              { l: "Rounds run",        v: "13",     c: "#F59E0B" },
            ].map(({ l, v, c }) => (
              <div key={l} style={{ padding: "5px 2px", fontSize: 12, color: subtle }}>
                {l}: <span style={{ color: c, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "badges" && <div style={{ flex: 1 }} />}

        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <div style={{ padding: "10px 12px", borderRadius: 10, background: `${COLOR}10`, border: `1px solid ${COLOR}25` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: COLOR, marginBottom: 2 }}>This round</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--comic-text-primary, #F9FAFB)" }}>471 finds</div>
            <div style={{ fontSize: 11, color: subtle }}>Round 13 · 518 scouts active</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          {tab === "rounds" ? <Calendar size={18} color={COLOR} /> : <Trophy size={18} color={COLOR} />}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Skills Hunt — Admin</div>
            <div style={{ fontSize: 12, color: subtle }}>
              {tab === "rounds"
                ? `Round management · Showing ${filtered.length} of ${ROUNDS.length}`
                : `Badge configuration · ${badges.filter(b => b.active).length} of ${badges.length} active`}
            </div>
          </div>
          <div style={{ padding: "3px 10px", borderRadius: 6, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", fontSize: 11, color: "#6366F1", fontWeight: 700 }}>ADMIN</div>
          {tab === "rounds" && (
            <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              <Plus size={14} /> New round
            </button>
          )}
        </header>

        {/* Disclaimer */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 24px", borderBottom: `1px solid ${border}`, background: `${COLOR}06`, flexShrink: 0 }}>
          <ShieldCheck size={13} color={COLOR} />
          <span style={{ fontSize: 12, color: "#9CA3AF" }}>
            Rounds organize scouting drives. Every nomination is reviewed by a teammate before it appears in the Directory — nothing is published automatically.
          </span>
        </div>

        {tab === "rounds" ? (
          <>
            {/* Column headers */}
            <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1.4fr 0.9fr 0.9fr 0.8fr auto", gap: 12, padding: "9px 24px", borderBottom: `1px solid ${border}`, background: "rgba(255,255,255,0.01)", flexShrink: 0 }}>
              {["Round", "Window", "Scouts", "Finds", "Status", "Actions"].map(h => (
                <div key={h} style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.07em" }}>{h}</div>
              ))}
            </div>

            {/* Round rows */}
            <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
              {filtered.map(r => {
                const isEditing = editId === r.id;
                return (
                  <div key={r.id} style={{ display: "grid", gridTemplateColumns: "2.2fr 1.4fr 0.9fr 0.9fr 0.8fr auto", gap: 12, padding: "13px 24px", borderBottom: `1px solid ${border}`, background: isEditing ? `${COLOR}05` : "transparent", alignItems: "center", borderLeft: isEditing ? `3px solid ${COLOR}` : "3px solid transparent" }}>

                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 10, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Target size={15} color={COLOR} />
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: text }}>{r.name}{saved.has(r.id) && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, color: "#22C55E" }}>✓ saved</span>}</div>
                    </div>

                    <div style={{ fontSize: 12, color: "#9CA3AF" }}>{r.opens} – {r.closes}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: text }}>{r.participants.toLocaleString()}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: text }}>{r.submissions.toLocaleString()}</div>

                    <span style={{ width: "fit-content", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700, background: `${statusColor(r.status)}20`, color: statusColor(r.status), border: `1px solid ${statusColor(r.status)}40`, textTransform: "capitalize" }}>{r.status}</span>

                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      <button onClick={() => isEditing ? setEditId(null) : startEdit(r)} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: isEditing ? `${COLOR}20` : "rgba(255,255,255,0.04)", border: `1px solid ${isEditing ? COLOR + "50" : border}`, color: isEditing ? COLOR : subtle, fontSize: 12, cursor: "pointer" }}>
                        {isEditing ? <><X size={11} /> Close</> : <><Edit2 size={11} /> Edit</>}
                      </button>
                      <button style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", color: "#EF4444", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Badges tab */
          <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {badges.map(b => (
                <div key={b.id} style={{ padding: 18, borderRadius: 14, background: surface, border: `1px solid ${b.active ? COLOR + "30" : border}`, opacity: b.active ? 1 : 0.7 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: b.active ? `${COLOR}20` : "rgba(255,255,255,0.04)", border: `1px solid ${b.active ? COLOR + "40" : border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{b.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: text }}>{b.name}</div>
                      <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5, marginTop: 2 }}>{b.criteria}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14, fontSize: 12, color: "#9CA3AF" }}>
                    <Users size={12} color={subtle} />
                    {b.holders.toLocaleString()} scouts hold this
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, paddingTop: 14, borderTop: `1px solid ${border}` }}>
                    <button
                      onClick={() => toggleBadge(b.id)}
                      style={{ width: 36, height: 20, borderRadius: 10, background: b.active ? "#22C55E" : "#374151", border: "none", cursor: "pointer", position: "relative", flexShrink: 0 }}>
                      <span style={{ position: "absolute", top: 2, left: b.active ? 18 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
                    </button>
                    <span style={{ fontSize: 12, fontWeight: 600, color: b.active ? "#22C55E" : subtle }}>
                      {b.active ? "Active — awarded automatically" : "Disabled"}
                    </span>
                    <button style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
                      <Edit2 size={11} /> Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Edit drawer — shown when a round is being edited */}
      {tab === "rounds" && editId !== null && (() => {
        const r = ROUNDS.find(x => x.id === editId);
        if (!r) return null;
        return (
          <aside style={{ width: 340, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "14px 18px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 10 }}>
              <Edit2 size={14} color={COLOR} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: text }}>Edit Round</div>
                <div style={{ fontSize: 11, color: subtle }}>{r.participants.toLocaleString()} scouts · {r.submissions.toLocaleString()} finds</div>
              </div>
              <button onClick={() => setEditId(null)} style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}>
                <X size={12} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
              {([
                { label: "Round name", key: "name",   placeholder: "Round 14 — Tech Focus" },
                { label: "Opens",      key: "opens",  placeholder: "Jun 10" },
                { label: "Closes",     key: "closes", placeholder: "Jun 17" },
              ] as { label: string; key: keyof RoundForm; placeholder: string }[]).map(({ label, key, placeholder }) => (
                <div key={key}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>{label}</div>
                  <input
                    value={form[key] as string}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    placeholder={placeholder}
                    style={{ width: "100%", padding: "8px 11px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: text, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              ))}

              {/* Status segmented control */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>Status</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {(["upcoming", "active", "closed"] as Status[]).map(s => {
                    const on = form.status === s;
                    return (
                      <button key={s} onClick={() => setForm(f => ({ ...f, status: s }))} style={{ flex: 1, padding: "8px 0", borderRadius: 8, background: on ? `${statusColor(s)}20` : "rgba(255,255,255,0.04)", border: `1px solid ${on ? statusColor(s) + "55" : border}`, color: on ? statusColor(s) : subtle, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{s}</button>
                    );
                  })}
                </div>
              </div>

              <div style={{ padding: "10px 13px", borderRadius: 10, background: `${COLOR}06`, border: `1px solid ${COLOR}18` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <CheckCircle size={13} color={COLOR} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: COLOR }}>Scout-facing change</span>
                </div>
                <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>
                  Saving updates the round window and status shown to scouts. Submissions already in review are not affected.
                </div>
              </div>
            </div>

            <div style={{ padding: "13px 18px", borderTop: `1px solid ${border}`, display: "flex", gap: 8 }}>
              <button onClick={handleSave} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                <Save size={13} /> Save round
              </button>
              <button onClick={() => setEditId(null)} style={{ padding: "10px 14px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>
                Discard
              </button>
            </div>
          </aside>
        );
      })()}
    </div>
  );
}
