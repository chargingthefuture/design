// STATE: Authenticated + Populated
import { useState } from "react";
import { AlertTriangle, Clock, FileText, Bell, MapPin, Trash2 } from "lucide-react";

const BRAND = "#E91E8C";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const INCIDENTS = [
  { id: 1, time: "Today, 9:41 AM", notes: "Felt unsafe at transit stop.", hasLocation: true },
  { id: 2, time: "Yesterday, 6:12 PM", notes: "Uncomfortable interaction at work.", hasLocation: false },
  { id: 3, time: "May 24, 2:30 PM", notes: "Followed while walking home.", hasLocation: true },
  { id: 4, time: "May 23, 11:05 AM", notes: "", hasLocation: false },
];

export function MobileClickLog() {
  const [logged, setLogged] = useState(false);
  const [tab, setTab] = useState<"log" | "history">("log");

  const handleLog = () => {
    setLogged(true);
    setTimeout(() => setLogged(false), 2000);
  };

  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${BRAND}20`, border: `1px solid ${BRAND}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AlertTriangle size={16} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>ClickLog</div>
              <div style={{ fontSize: 11, color: subtle }}>{INCIDENTS.length} incidents total</div>
            </div>
          </div>
          <Bell size={18} color={subtle} />
        </div>
        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4 }}>
          {(["log", "history"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "7px", borderRadius: 8, background: tab === t ? `${BRAND}18` : "rgba(255,255,255,0.04)", border: `1px solid ${tab === t ? BRAND + "40" : border}`, color: tab === t ? BRAND : subtle, fontSize: 12, fontWeight: tab === t ? 700 : 400, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "log" ? "Log Incident" : "History"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px 90px" }}>
        {tab === "log" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            {/* Count badge */}
            <div style={{ display: "flex", gap: 16 }}>
              {[{ label: "Today", val: "1" }, { label: "This week", val: "3" }].map(({ label, val }) => (
                <div key={label} style={{ flex: 1, padding: "12px 16px", borderRadius: 12, background: surface, border: `1px solid ${BRAND}15`, textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: BRAND }}>{val}</div>
                  <div style={{ fontSize: 11, color: subtle }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Big button */}
            <button onClick={handleLog} style={{ width: 140, height: 140, borderRadius: "50%", background: logged ? "#22C55E" : BRAND, border: `3px solid ${logged ? "#22C55E" : BRAND}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", boxShadow: `0 0 32px ${BRAND}30`, transition: "background 0.2s" }}>
              <AlertTriangle size={32} color="#fff" />
              <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{logged ? "Logged ✓" : "Log Incident"}</span>
            </button>
            <div style={{ fontSize: 12, color: subtle, textAlign: "center" }}>Tap to log instantly</div>

            {/* Quick note area */}
            <div style={{ width: "100%", padding: "14px", borderRadius: 14, background: surface, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: subtle, marginBottom: 8 }}>Add a note (optional)</div>
              <textarea rows={2} placeholder="Describe what happened…" style={{ width: "100%", padding: "8px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: text, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 10px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 11, cursor: "pointer" }}>
                  <MapPin size={11} /> Location
                </button>
                <button style={{ flex: 1, padding: "6px", borderRadius: 7, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, color: BRAND, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Submit with note</button>
              </div>
            </div>
          </div>
        )}

        {tab === "history" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {INCIDENTS.map(({ id, time, notes, hasLocation }) => (
              <div key={id} style={{ display: "flex", gap: 12, padding: "13px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: `${BRAND}12`, border: `1px solid ${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <AlertTriangle size={13} color={BRAND} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: subtle, marginBottom: 2 }}>{time}</div>
                  {notes && <div style={{ fontSize: 13, color: text, lineHeight: 1.4 }}>{notes}</div>}
                  {hasLocation && <div style={{ fontSize: 10, color: subtle, marginTop: 3, display: "flex", alignItems: "center", gap: 3 }}><MapPin size={9} /> Location</div>}
                </div>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: subtle, flexShrink: 0 }}><Trash2 size={13} /></button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { Icon: AlertTriangle, label: "Log", key: "log" },
          { Icon: Clock, label: "History", key: "history" },
          { Icon: FileText, label: "Export", key: "export" },
        ].map(({ Icon, label, key }) => (
          <button key={key} onClick={() => setTab(key as "log" | "history")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, background: "none", border: "none", cursor: "pointer", color: tab === key ? BRAND : subtle }}>
            <Icon size={20} />
            <span style={{ fontSize: 10, fontWeight: tab === key ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
