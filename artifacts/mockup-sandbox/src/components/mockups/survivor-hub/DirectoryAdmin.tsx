// design-sync
// STATE: Admin — Directory profile management with unclaimed profile editing
import { useState } from "react";
import {
  BookOpen, Search, Shield, Bell, Settings, CheckCircle,
  Edit2, Trash2, Users, X, Save, AlertTriangle, UserCheck,
} from "lucide-react";

const COLOR = "#3B82F6";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PROFILES = [
  { id: 1, name: "Maria Gonzalez",  avatar: "MG", role: "Trauma-Informed Therapist", location: "Houston, TX",  handle: "@maria-g",          source: "self",               verified: true  },
  { id: 2, name: "James Thibodeau", avatar: "JT", role: "Housing Navigator",          location: "Atlanta, GA",  handle: "@james-t",          source: "self",               verified: true  },
  { id: 3, name: "Amara Okonkwo",   avatar: "AO", role: "Employment Coach",           location: "Chicago, IL",  handle: "@community-7f3a2b", source: "community-generated", verified: false },
  { id: 4, name: "Priya Sharma",    avatar: "PS", role: "Legal Advocate",             location: "New York, NY", handle: "@priya-s",          source: "self",               verified: true  },
  { id: 5, name: "DeShawn Williams",avatar: "DW", role: "Financial Counselor",        location: "Dallas, TX",   handle: "@community-b2e9f1", source: "community-generated", verified: false },
  { id: 6, name: "Lena Hoffmann",   avatar: "LH", role: "Tech Skills Trainer",        location: "Remote",       handle: "@lena-h",           source: "self",               verified: true  },
];

type FilterKey = "All" | "Claimed" | "Unclaimed" | "Pending Verification";
const FILTERS: FilterKey[] = ["All", "Claimed", "Unclaimed", "Pending Verification"];

type EditForm = { name: string; role: string; location: string; skills: string; handle: string; verified: boolean; };

export function DirectoryAdmin() {
  const [filter, setFilter]   = useState<FilterKey>("All");
  const [editId, setEditId]   = useState<number | null>(3);
  const [saved, setSaved]     = useState<Set<number>>(new Set());
  const [form, setForm]       = useState<EditForm>({
    name: "Amara Okonkwo", role: "Employment Coach", location: "Chicago, IL",
    skills: "Resume, Interviewing, Networking", handle: "", verified: false,
  });

  const startEdit = (p: typeof PROFILES[0]) => {
    setEditId(p.id);
    setForm({ name: p.name, role: p.role, location: p.location, skills: "Resume, Interviewing, Networking", handle: "", verified: p.verified });
  };

  const handleSave = () => {
    if (editId) setSaved(s => new Set([...s, editId]));
    setEditId(null);
  };

  const filtered = PROFILES.filter(p => {
    if (filter === "Unclaimed") return p.source === "community-generated";
    if (filter === "Claimed")   return p.source !== "community-generated";
    if (filter === "Pending Verification") return !p.verified;
    return true;
  });

  const badge = (p: typeof PROFILES[0]) => {
    if (saved.has(p.id))               return { label: "Admin-claimed",        color: COLOR };
    if (p.source === "community-generated") return { label: "Community-generated",  color: "#A855F7" };
    return { label: "Self",            color: "#22C55E" };
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${COLOR}25`, border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <BookOpen size={20} color={COLOR} />
        </div>
        {[Users, Shield, Search].map((Icon, i) => (
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
      <aside style={{ width: 240, background: "#0D0F14", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>📇 Directory Admin</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Claim, verify, and edit provider records</div>
        </div>
        <div style={{ padding: "0 12px", flex: 1 }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: filter === f ? `${COLOR}15` : "transparent", borderLeft: filter === f ? `2px solid ${COLOR}` : "2px solid transparent", color: filter === f ? text : subtle, fontSize: 13, border: "none", textAlign: "left" }}>
              {f}
              {f === "Unclaimed" && (
                <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, background: "#A855F720", color: "#A855F7", border: "1px solid #A855F730", borderRadius: 4, padding: "1px 5px" }}>2</span>
              )}
              {f === "Pending Verification" && (
                <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, background: "rgba(239,68,68,0.12)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 4, padding: "1px 5px" }}>2</span>
              )}
            </button>
          ))}

          <div style={{ margin: "16px 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase" }}>Stats</div>
          {[
            { l: "Total profiles",       v: "47,234", c: COLOR     },
            { l: "Unclaimed",            v: "2,847",  c: "#A855F7" },
            { l: "Pending verification", v: "412",    c: "#EF4444" },
            { l: "Admin-claimed",        v: "319",    c: "#06B6D4" },
          ].map(({ l, v, c }) => (
            <div key={l} style={{ padding: "5px 2px", fontSize: 12, color: "#6B7280" }}>
              {l}: <span style={{ color: c, fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <Shield size={18} color={COLOR} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Directory — Admin</div>
            <div style={{ fontSize: 12, color: subtle }}>Profile management · Showing {filtered.length} of {PROFILES.length}</div>
          </div>
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: subtle, pointerEvents: "none" }} />
            <input placeholder="Search profiles…" style={{ padding: "6px 10px 6px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 12, color: text, outline: "none", width: 200 }} />
          </div>
        </header>

        {/* Column headers */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 0.9fr 1.2fr auto", gap: 12, padding: "9px 24px", borderBottom: `1px solid ${border}`, background: "rgba(255,255,255,0.01)", flexShrink: 0 }}>
          {["Provider", "Source", "Status", "Handle", "Actions"].map(h => (
            <div key={h} style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.07em" }}>{h}</div>
          ))}
        </div>

        {/* Profile rows */}
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
          {filtered.map(p => {
            const b = badge(p);
            const isEditing = editId === p.id;
            const isVerified = p.verified || saved.has(p.id);
            return (
              <div key={p.id} style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 0.9fr 1.2fr auto", gap: 12, padding: "13px 24px", borderBottom: `1px solid ${border}`, background: isEditing ? `${COLOR}05` : "transparent", alignItems: "center", borderLeft: isEditing ? `3px solid ${COLOR}` : "3px solid transparent" }}>

                {/* Provider */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: COLOR, flexShrink: 0 }}>{p.avatar}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: text }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: subtle }}>{p.role}</div>
                  </div>
                </div>

                {/* Source */}
                <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6, background: `${b.color}18`, color: b.color, border: `1px solid ${b.color}30`, width: "fit-content" }}>{b.label}</span>

                {/* Status */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: isVerified ? "#22C55E" : "#EF4444" }}>
                  {isVerified ? <CheckCircle size={13} /> : <AlertTriangle size={13} />}
                  {isVerified ? "Verified" : "Unverified"}
                </div>

                {/* Handle */}
                <div style={{ fontSize: 11, fontFamily: "monospace", color: saved.has(p.id) ? COLOR : (p.source === "community-generated" ? "#A855F7" : subtle), overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {saved.has(p.id) && form.handle ? `@${form.handle}` : p.handle}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <button onClick={() => isEditing ? setEditId(null) : startEdit(p)} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, background: isEditing ? `${COLOR}20` : "rgba(255,255,255,0.04)", border: `1px solid ${isEditing ? COLOR + "50" : border}`, color: isEditing ? COLOR : subtle, fontSize: 12, cursor: "pointer" }}>
                    {isEditing ? <><X size={11} /> Close</> : <><Edit2 size={11} /> Edit</>}
                  </button>
                  <button style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", color: "#EF4444", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Edit drawer — shown when an unclaimed profile is being edited */}
      {editId !== null && (() => {
        const p = PROFILES.find(x => x.id === editId);
        if (!p) return null;
        return (
          <aside style={{ width: 340, borderLeft: `1px solid ${border}`, background: "#0D0F14", display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "14px 18px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 10 }}>
              <Edit2 size={14} color={COLOR} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: text }}>Edit Profile</div>
                <div style={{ fontSize: 11, color: subtle }}>
                  {p.source === "community-generated" ? "Unclaimed · community-generated" : "Self-claimed"}
                </div>
              </div>
              <button onClick={() => setEditId(null)} style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}>
                <X size={12} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Source notice */}
              {p.source === "community-generated" && (
                <div style={{ padding: "9px 12px", borderRadius: 8, background: "#A855F710", border: "1px solid #A855F725", fontSize: 12, color: "#A855F7", lineHeight: 1.5 }}>
                  Community-generated record · {p.handle}
                </div>
              )}

              {/* Editable fields */}
              {([
                { label: "Name",     key: "name",     placeholder: "Full name" },
                { label: "Role",     key: "role",     placeholder: "Provider role or specialty" },
                { label: "Location", key: "location", placeholder: "City, State" },
                { label: "Skills",   key: "skills",   placeholder: "CBT, EMDR, Housing…" },
              ] as { label: string; key: keyof EditForm; placeholder: string }[]).map(({ label, key, placeholder }) => (
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

              {/* Handle assignment — only for unclaimed profiles */}
              {p.source === "community-generated" && (
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>Assign Handle</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 0, border: `1px solid ${form.handle ? COLOR + "60" : border}`, borderRadius: 8, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                    <span style={{ padding: "8px 10px", fontSize: 13, color: "#4B5563", background: "rgba(255,255,255,0.02)", borderRight: `1px solid ${border}`, flexShrink: 0 }}>@</span>
                    <input
                      value={form.handle}
                      onChange={e => setForm(f => ({ ...f, handle: e.target.value.replace(/[^a-z0-9-]/g, "") }))}
                      placeholder="assign-a-handle"
                      style={{ flex: 1, padding: "8px 11px", background: "transparent", border: "none", fontSize: 13, color: form.handle ? COLOR : text, outline: "none", fontFamily: "monospace" }}
                    />
                  </div>
                  <div style={{ fontSize: 11, color: "#4B5563", marginTop: 4 }}>
                    Replaces <span style={{ fontFamily: "monospace", color: "#A855F7" }}>{p.handle}</span>
                  </div>
                </div>
              )}

              {/* Verify toggle */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 13px", borderRadius: 10, background: form.verified ? "rgba(34,197,94,0.05)" : "rgba(255,255,255,0.02)", border: `1px solid ${form.verified ? "rgba(34,197,94,0.18)" : border}` }}>
                <button
                  onClick={() => setForm(f => ({ ...f, verified: !f.verified }))}
                  style={{ width: 36, height: 20, borderRadius: 10, background: form.verified ? "#22C55E" : "#374151", border: "none", cursor: "pointer", position: "relative", flexShrink: 0 }}>
                  <span style={{ position: "absolute", top: 2, left: form.verified ? 18 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
                </button>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: form.verified ? "#22C55E" : subtle }}>
                    {form.verified ? "Marked as verified" : "Mark as verified"}
                  </div>
                  <div style={{ fontSize: 11, color: "#4B5563" }}>Background check confirmed</div>
                </div>
              </div>

              {/* Audit note */}
              {p.source === "community-generated" && (
                <div style={{ padding: "10px 13px", borderRadius: 10, background: `${COLOR}06`, border: `1px solid ${COLOR}18` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <UserCheck size={13} color={COLOR} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: COLOR }}>Source → Admin-claimed</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>
                    Saving will change the source from "community-generated" to "admin" and record this action in the audit log.
                  </div>
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div style={{ padding: "13px 18px", borderTop: `1px solid ${border}`, display: "flex", gap: 8 }}>
              <button onClick={handleSave} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                <Save size={13} /> Save & Claim
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
