// design-sync
// STATE: Authenticated + Empty — new account with no activity recorded yet
import {
  Shield, Database, Download, Lock,
  Bell, Settings, Info,
} from "lucide-react";

const BRAND = "#D946EF";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const PREVIEW_SERVICES = [
  { icon: "💬", name: "Chyme",      desc: "Chat messages and room membership" },
  { icon: "📇", name: "Directory",  desc: "Profile and change history" },
  { icon: "🏠", name: "LightHouse", desc: "Housing profile and listings" },
  { icon: "🪛", name: "Foundation", desc: "Provider threads and messages" },
];

export function AccountDataEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <Shield size={20} color={BRAND} />
        </div>
        {[Shield, Database, Download].map((Icon, i) => (
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
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🔒 Account & Data</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Your data — transparent, under your control</div>
        </div>
        <div style={{ padding: "0 12px", flex: 1 }}>
          <div style={{ padding: "9px 10px", borderRadius: 8, background: `${BRAND}15`, borderLeft: `2px solid ${BRAND}`, color: text, fontSize: 13, display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <Database size={15} /> Your Data
          </div>
          <div style={{ padding: "9px 10px", borderRadius: 8, color: subtle, fontSize: 13, display: "flex", alignItems: "center", gap: 8, borderLeft: "2px solid transparent" }}>
            <Shield size={15} /> Danger Zone
          </div>
          <div style={{ margin: "16px 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase" }}>Summary</div>
          {[
            { l: "Services with your data", v: "0 of 19" },
            { l: "Always retained",          v: "2" },
          ].map(({ l, v }) => (
            <div key={l} style={{ padding: "5px 2px", fontSize: 12, color: "var(--comic-text-secondary, #6B7280)" }}>
              {l}: <span style={{ color: text, fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.5 }}>🔒 All data is encrypted and under your control.</div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          <Shield size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Your Data & Privacy</div>
            <div style={{ fontSize: 12, color: subtle }}>See and delete the data Survivor Hub holds across all services</div>
          </div>
        </header>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 64px" }}>
          {/* Empty anchor */}
          <div style={{ width: 64, height: 64, borderRadius: 20, background: `${BRAND}08`, border: `1px dashed ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <Shield size={28} color={`${BRAND}50`} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 8 }}>No personal data stored yet</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7, textAlign: "center", maxWidth: 480, marginBottom: 32 }}>
            As you use Survivor Hub apps, any personal data they hold will appear here — where you can see it, export it, and delete it on your own terms.
          </div>

          {/* Preview cards */}
          <div style={{ width: "100%", maxWidth: 560, marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Will appear when you use these services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PREVIEW_SERVICES.map(({ icon, name, desc }) => (
                <div key={name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 12, background: surface, border: `1px solid ${border}`, opacity: 0.5 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: subtle, marginBottom: 2 }}>{name}</div>
                    <div style={{ fontSize: 12, color: "#4B5563" }}>{desc}</div>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: 11, color: "#374151" }}>No data yet</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info note */}
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 16px", borderRadius: 12, background: `${BRAND}05`, border: `1px solid ${BRAND}15`, maxWidth: 560, width: "100%" }}>
            <Info size={14} color={BRAND} style={{ flexShrink: 0, marginTop: 1 }} />
            <div style={{ fontSize: 12, color: "var(--comic-text-secondary, #6B7280)", lineHeight: 1.6 }}>
              Two entries — ServiceCredits ledger and GDP totals — are always retained for financial integrity and platform accuracy. They hold no personal identifiers.
            </div>
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", padding: "20px 16px", flexShrink: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Privacy at a Glance</div>
        {[
          { icon: Shield,   label: "End-to-end encrypted",    desc: "All personal data is encrypted at rest." },
          { icon: Lock,     label: "You control deletion",    desc: "Delete any service's data independently." },
          { icon: Download, label: "Export any time",         desc: "Download a full copy of your data." },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${BRAND}10`, border: `1px solid ${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={14} color={BRAND} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.4 }}>{desc}</div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
