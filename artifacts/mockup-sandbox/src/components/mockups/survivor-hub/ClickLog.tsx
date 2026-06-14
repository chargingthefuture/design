// design-sync
// STATE: Authenticated + Populated — Incident Counter
import { useState } from "react";
import {
  AlertTriangle, Bell, Settings, Clock, MapPin,
  Trash2, Plus, FileText,
} from "lucide-react";

const BRAND = "#EC4899";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const INCIDENTS = [
  { id: 1, time: "Today, 9:41 AM", notes: "Felt unsafe at transit stop. Observed suspicious vehicle.", hasLocation: true },
  { id: 2, time: "Yesterday, 6:12 PM", notes: "Uncomfortable interaction at workplace.", hasLocation: false },
  { id: 3, time: "May 24, 2:30 PM", notes: "Followed while walking home. No contact made.", hasLocation: true },
  { id: 4, time: "May 23, 11:05 AM", notes: "", hasLocation: false },
  { id: 5, time: "May 22, 8:49 AM", notes: "Unknown caller, did not answer.", hasLocation: false },
];

export function ClickLog() {
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [note, setNote] = useState("");
  const [logged, setLogged] = useState(false);

  const handleLog = () => {
    setLogged(true);
    setTimeout(() => setLogged(false), 2000);
    setShowNoteForm(false);
    setNote("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <AlertTriangle size={20} color={BRAND} />
        </div>
        {[AlertTriangle, Clock, FileText].map((Icon, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${BRAND}20` : "transparent", border: i === 0 ? `1px solid ${BRAND}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🚨 ClickLog</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Personal incident counter — private &amp; encrypted</div>
        </div>
        <div style={{ padding: "0 12px", flex: 1 }}>
          <div style={{ padding: "16px", borderRadius: 14, background: `${BRAND}08`, border: `1px solid ${BRAND}18`, marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: subtle, marginBottom: 4 }}>Total Logged</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: BRAND }}>{INCIDENTS.length}</div>
            <div style={{ fontSize: 11, color: subtle, marginTop: 4 }}>incidents · all time</div>
          </div>
          <div style={{ padding: "12px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
            <div style={{ fontSize: 12, color: subtle, marginBottom: 8 }}>This week</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
                <div key={d} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: i < 3 ? `${BRAND}25` : "rgba(255,255,255,0.04)", border: `1px solid ${i < 3 ? BRAND + "40" : border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: i < 3 ? BRAND : subtle }}>
                    {i < 3 ? "1" : ""}
                  </div>
                  <span style={{ fontSize: 8, color: subtle }}>{d[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>🔒 All data is encrypted. Only you can see your incidents.</div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          <AlertTriangle size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Incident Log</div>
            <div style={{ fontSize: 12, color: subtle }}>Personal safety tracking — {INCIDENTS.length} incidents total</div>
          </div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "32px 48px" }}>

          {/* Big log button */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <button
              onClick={() => setShowNoteForm(!showNoteForm)}
              style={{ width: 160, height: 160, borderRadius: "50%", background: logged ? "#22C55E" : `${BRAND}`, border: `4px solid ${logged ? "#22C55E" : BRAND}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", boxShadow: `0 0 40px ${BRAND}30`, transition: "all 0.2s" }}
            >
              <AlertTriangle size={40} color="#fff" />
              <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{logged ? "Logged ✓" : "Log Incident"}</span>
            </button>
            <div style={{ fontSize: 12, color: subtle, textAlign: "center" }}>
              Tap to log an incident instantly.<br />Optionally add a note below.
            </div>

            {/* Note form */}
            {showNoteForm && (
              <div style={{ width: "100%", maxWidth: 480, padding: "16px", borderRadius: 14, background: surface, border: `1px solid ${BRAND}30` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 8 }}>Add a note (optional)</div>
                <textarea value={note} onChange={e => setNote(e.target.value)} rows={3} placeholder="Describe what happened…" style={{ width: "100%", padding: "10px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 10, fontSize: 13, color: text, outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>
                    <MapPin size={12} /> Add location
                  </button>
                  <div style={{ flex: 1 }} />
                  <button onClick={() => { setShowNoteForm(false); setNote(""); }} style={{ padding: "7px 14px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer" }}>Cancel</button>
                  <button onClick={handleLog} style={{ padding: "7px 18px", borderRadius: 8, background: BRAND, border: "none", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Submit</button>
                </div>
              </div>
            )}
          </div>

          {/* Incident history */}
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 14 }}>Recent Incidents</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {INCIDENTS.map(({ id, time, notes, hasLocation }) => (
                <div key={id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <AlertTriangle size={14} color={BRAND} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: subtle, marginBottom: 3 }}>{time}</div>
                    {notes && <div style={{ fontSize: 13, color: text, lineHeight: 1.5, marginBottom: 4 }}>{notes}</div>}
                    {hasLocation && (
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: subtle }}>
                        <MapPin size={10} color={subtle} /> Location recorded
                      </div>
                    )}
                  </div>
                  <button style={{ width: 28, height: 28, borderRadius: 6, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle, flexShrink: 0 }}>
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Stats</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { label: "This week", value: "3", color: BRAND },
            { label: "This month", value: "8", color: "#F97316" },
            { label: "With notes", value: "4", color: "#9CA3AF" },
            { label: "With location", value: "3", color: "#06B6D4" },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ padding: "10px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color }}>{value}</div>
              <div style={{ fontSize: 10, color: subtle, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px", borderRadius: 12, background: "rgba(236,72,153,0.05)", border: "1px solid rgba(236,72,153,0.15)", marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Safety reminder</div>
          <div style={{ fontSize: 11, color: subtle, lineHeight: 1.6 }}>
            ClickLog is for personal tracking only. In an emergency, always contact local emergency services first.
          </div>
        </div>
        <button style={{ width: "100%", padding: "9px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Plus size={13} /> Log without opening form
        </button>
      </aside>
    </div>
  );
}
