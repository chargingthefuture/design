// design-sync
// STATE: Admin — Directory profile management (mobile), unclaimed profile editing
import { useState } from "react";
import {
  BookOpen, Shield, Bell, Edit2, Trash2, X, Save,
  CheckCircle, AlertTriangle, UserCheck, Search,
} from "lucide-react";

const COLOR = "var(--app-accent, #93C5FD)";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const PROFILES = [
  { id: 1, name: "Maria Gonzalez",  avatar: "MG", role: "Trauma-Informed Therapist", location: "Houston, TX",  handle: "@maria-g",          source: "self",                verified: true  },
  { id: 2, name: "James Thibodeau", avatar: "JT", role: "Housing Navigator",          location: "Atlanta, GA",  handle: "@james-t",          source: "self",                verified: true  },
  { id: 3, name: "Amara Okonkwo",   avatar: "AO", role: "Employment Coach",           location: "Chicago, IL",  handle: "@community-7f3a2b", source: "community-generated", verified: false },
  { id: 4, name: "Priya Sharma",    avatar: "PS", role: "Legal Advocate",             location: "New York, NY", handle: "@priya-s",          source: "self",                verified: true  },
  { id: 5, name: "DeShawn Williams",avatar: "DW", role: "Financial Counselor",        location: "Dallas, TX",   handle: "@community-b2e9f1", source: "community-generated", verified: false },
  { id: 6, name: "Lena Hoffmann",   avatar: "LH", role: "Tech Skills Trainer",        location: "Remote",       handle: "@lena-h",           source: "self",                verified: true  },
];

type EditForm = { name: string; role: string; location: string; skills: string; handle: string; verified: boolean; };

export function MobileDirectoryAdmin() {
  const [tab, setTab]         = useState<"all" | "unclaimed">("unclaimed");
  const [editId, setEditId]   = useState<number | null>(null);
  const [saved, setSaved]     = useState<Set<number>>(new Set());
  const [form, setForm]       = useState<EditForm>({ name: "", role: "", location: "", skills: "", handle: "", verified: false });

  const unclaimed = PROFILES.filter(p => p.source === "community-generated");
  const visible   = tab === "unclaimed" ? unclaimed : PROFILES;

  const startEdit = (p: typeof PROFILES[0]) => {
    setEditId(p.id);
    setForm({ name: p.name, role: p.role, location: p.location, skills: "Resume, Interviewing, Networking", handle: "", verified: p.verified });
  };

  const handleSave = () => {
    if (editId) setSaved(s => new Set([...s, editId]));
    setEditId(null);
  };

  const badge = (p: typeof PROFILES[0]) => {
    if (saved.has(p.id))               return { label: "Admin-claimed",       color: COLOR };
    if (p.source === "community-generated") return { label: "Community",           color: "#A855F7" };
    return { label: "Self",            color: "#22C55E" };
  };

  /* ── Edit screen ── */
  if (editId !== null) {
    const p = PROFILES.find(x => x.id === editId);
    if (!p) return null;
    return (
      <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Status bar */}
        <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
          <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
          <span style={{ fontSize: 12, color: subtle }}>•••</span>
        </div>

        {/* Header */}
        <div style={{ padding: "12px 16px 14px", borderBottom: `1px solid ${border}`, flexShrink: 0, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Edit2 size={15} color={COLOR} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Edit Profile</div>
            <div style={{ fontSize: 11, color: subtle }}>
              {p.source === "community-generated" ? "Unclaimed · community-generated" : "Self-claimed"}
            </div>
          </div>
          <button onClick={() => setEditId(null)} style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={14} color={subtle} />
          </button>
        </div>

        {/* Edit fields */}
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "16px" }}>

          {p.source === "community-generated" && (
            <div style={{ padding: "9px 12px", borderRadius: 9, background: "#A855F710", border: "1px solid #A855F725", fontSize: 12, color: "#A855F7", marginBottom: 16, lineHeight: 1.5 }}>
              Community-generated · <span style={{ fontFamily: "monospace" }}>{p.handle}</span>
            </div>
          )}

          {([
            { label: "Name",     key: "name",     placeholder: "Full name" },
            { label: "Role",     key: "role",     placeholder: "Provider role or specialty" },
            { label: "Location", key: "location", placeholder: "City, State" },
            { label: "Skills",   key: "skills",   placeholder: "CBT, EMDR, Housing…" },
          ] as { label: string; key: keyof EditForm; placeholder: string }[]).map(({ label, key, placeholder }) => (
            <div key={key} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{label}</div>
              <input
                value={form[key] as string}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                placeholder={placeholder}
                style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 9, fontSize: 13, color: text, outline: "none", boxSizing: "border-box" }}
              />
            </div>
          ))}

          {/* Handle assignment */}
          {p.source === "community-generated" && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>Assign Handle</div>
              <div style={{ display: "flex", alignItems: "center", border: `1px solid ${form.handle ? COLOR + "60" : border}`, borderRadius: 9, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                <span style={{ padding: "10px 10px", fontSize: 13, color: "#4B5563", background: "rgba(255,255,255,0.02)", borderRight: `1px solid ${border}`, flexShrink: 0 }}>@</span>
                <input
                  value={form.handle}
                  onChange={e => setForm(f => ({ ...f, handle: e.target.value.replace(/[^a-z0-9-]/g, "") }))}
                  placeholder="assign-a-handle"
                  style={{ flex: 1, padding: "10px 12px", background: "transparent", border: "none", fontSize: 13, color: form.handle ? COLOR : text, outline: "none", fontFamily: "monospace" }}
                />
              </div>
              <div style={{ fontSize: 11, color: "#4B5563", marginTop: 4 }}>
                Replaces <span style={{ fontFamily: "monospace", color: "#A855F7" }}>{p.handle}</span>
              </div>
            </div>
          )}

          {/* Verify toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 11, background: form.verified ? "rgba(34,197,94,0.05)" : "rgba(255,255,255,0.02)", border: `1px solid ${form.verified ? "rgba(34,197,94,0.18)" : border}`, marginBottom: 14 }}>
            <button
              onClick={() => setForm(f => ({ ...f, verified: !f.verified }))}
              style={{ width: 40, height: 22, borderRadius: 11, background: form.verified ? "#22C55E" : "#374151", border: "none", cursor: "pointer", position: "relative", flexShrink: 0 }}>
              <span style={{ position: "absolute", top: 3, left: form.verified ? 20 : 3, width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
            </button>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: form.verified ? "#22C55E" : subtle }}>
                {form.verified ? "Marked as verified" : "Mark as verified"}
              </div>
              <div style={{ fontSize: 11, color: "#4B5563" }}>Background check confirmed</div>
            </div>
          </div>

          {/* Audit note */}
          {p.source === "community-generated" && (
            <div style={{ padding: "12px 14px", borderRadius: 11, background: `${COLOR}06`, border: `1px solid ${COLOR}18` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                <UserCheck size={13} color={COLOR} />
                <span style={{ fontSize: 12, fontWeight: 600, color: COLOR }}>Source → Admin-claimed</span>
              </div>
              <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>
                Saving changes the source from "community-generated" to "admin" and records this action in the audit log.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "12px 16px", borderTop: `1px solid ${border}`, display: "flex", gap: 8, flexShrink: 0 }}>
          <button onClick={handleSave} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "13px", borderRadius: 11, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            <Save size={14} /> Save & Claim
          </button>
          <button onClick={() => setEditId(null)} style={{ padding: "13px 16px", borderRadius: 11, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 14, cursor: "pointer" }}>
            Discard
          </button>
        </div>
      </div>
    );
  }

  /* ── Profile list screen ── */
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLOR}20`, border: `1px solid ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={16} color={COLOR} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Directory Admin</div>
              <div style={{ fontSize: 11, color: subtle }}>47,234 profiles · 2 unclaimed shown</div>
            </div>
          </div>
          <Bell size={18} color={subtle} />
        </div>
        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4 }}>
          {([
            { key: "unclaimed", label: "Unclaimed", count: "2", countColor: "#A855F7" },
            { key: "all",       label: "All Profiles" },
          ] as { key: string; label: string; count?: string; countColor?: string }[]).map(t => (
            <button key={t.key} onClick={() => setTab(t.key as "all" | "unclaimed")} style={{ flex: 1, padding: "7px", borderRadius: 8, background: tab === t.key ? `${COLOR}18` : "rgba(255,255,255,0.04)", border: `1px solid ${tab === t.key ? COLOR + "40" : border}`, color: tab === t.key ? COLOR : subtle, fontSize: 12, fontWeight: tab === t.key ? 700 : 400, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
              {t.label}
              {t.count && <span style={{ fontSize: 10, fontWeight: 700, background: `${t.countColor}20`, color: t.countColor, border: `1px solid ${t.countColor}30`, borderRadius: 4, padding: "0 4px" }}>{t.count}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Profile list */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "10px 16px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {visible.map(p => {
            const b = badge(p);
            const isVerified = p.verified || saved.has(p.id);
            return (
              <div key={p.id} style={{ padding: "13px", borderRadius: 13, background: surface, border: `1px solid ${border}` }}>
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${COLOR}20`, border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: COLOR, flexShrink: 0 }}>{p.avatar}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 2 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>{p.role}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 5, background: `${b.color}18`, color: b.color, border: `1px solid ${b.color}25` }}>{b.label}</span>
                      <span style={{ fontSize: 10, color: isVerified ? "#22C55E" : "#EF4444", display: "flex", alignItems: "center", gap: 3 }}>
                        {isVerified ? <CheckCircle size={10} /> : <AlertTriangle size={10} />}
                        {isVerified ? "Verified" : "Unverified"}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Handle */}
                <div style={{ fontSize: 11, fontFamily: "monospace", color: saved.has(p.id) ? COLOR : (p.source === "community-generated" ? "#A855F7" : "#4B5563"), marginBottom: 10 }}>
                  {saved.has(p.id) && form.handle ? `@${form.handle}` : p.handle}
                </div>
                {/* Actions */}
                <div style={{ display: "flex", gap: 7 }}>
                  <button onClick={() => startEdit(p)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "8px", borderRadius: 9, background: `${COLOR}12`, border: `1px solid ${COLOR}30`, color: COLOR, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    <Edit2 size={12} /> Edit profile
                  </button>
                  <button style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", color: "#EF4444", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: BookOpen, label: "Profiles" },
          { Icon: Search,   label: "Search"   },
          { Icon: Shield,   label: "Verify"   },
        ].map(({ Icon, label }, i) => (
          <button key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: i === 0 ? COLOR : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
