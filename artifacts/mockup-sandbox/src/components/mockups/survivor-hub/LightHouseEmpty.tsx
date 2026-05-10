import { Home, MapPin, Search, Bell, Filter, Heart, Shield, AlertCircle } from "lucide-react";

const COLOR = "#EAB308";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const FILTER_CHIPS = ["Any price", "1 bed+", "Accepts credits", "Available now", "Female-only", "Verified host"];
const CATEGORIES = ["All", "Private Studio", "1BR", "2BR+", "Safe House", "Temporary"];

function SkeletonCard() {
  return (
    <div style={{ borderRadius: 12, border: `1px solid ${border}`, padding: 16, background: surface, opacity: 0.45 }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 72, height: 72, borderRadius: 10, background: "rgba(255,255,255,0.05)" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 14, borderRadius: 4, background: "rgba(255,255,255,0.07)", width: "70%" }} />
          <div style={{ height: 11, borderRadius: 4, background: "rgba(255,255,255,0.04)", width: "50%" }} />
          <div style={{ height: 11, borderRadius: 4, background: "rgba(255,255,255,0.04)", width: "40%" }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[60, 45, 55].map((w, i) => <div key={i} style={{ height: 22, width: w, borderRadius: 5, background: "rgba(255,255,255,0.04)" }} />)}
      </div>
    </div>
  );
}

export function LightHouseEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left panel */}
      <aside style={{ width: 380, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <Home size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700, color: text }}>LightHouse</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 2</span>
          </div>
          <div style={{ position: "relative", marginBottom: 10 }}>
            <Search size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: subtle }} />
            <input placeholder="City, neighbourhood, or zip…" style={{ width: "100%", padding: "9px 10px 9px 32px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {FILTER_CHIPS.map(f => <span key={f} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, border: `1px solid ${border}`, color: subtle, cursor: "pointer" }}>{f}</span>)}
          </div>
        </div>
        <div style={{ padding: "10px 16px", display: "flex", gap: 6 }}>
          {CATEGORIES.map(c => <span key={c} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: c === "All" ? `${COLOR}15` : "transparent", border: `1px solid ${c === "All" ? COLOR + "40" : border}`, color: c === "All" ? COLOR : subtle, cursor: "pointer" }}>{c}</span>)}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard />
        </div>
      </aside>

      {/* Right panel — empty state */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0, padding: 40 }}>
        <div style={{ maxWidth: 460, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Home size={34} color={`${COLOR}60`} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: text }}>No listings match your filters</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
            Safe, verified housing is added by community hosts daily. Try broadening your filters, or set an alert to be notified the moment a matching listing appears.
          </div>

          <div style={{ width: "100%", borderRadius: 12, border: `1px solid ${border}`, background: surface, padding: 16, textAlign: "left", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertCircle size={16} color={COLOR} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 4 }}>Privacy note</div>
              <div style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>Your search location is never stored or shared. LightHouse uses proximity matching without logging your exact coordinates.</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button style={{ padding: "10px 22px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Filter size={14} /> Adjust Filters
            </button>
            <button style={{ padding: "10px 22px", borderRadius: 10, background: "transparent", border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Bell size={14} /> Alert Me
            </button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 40, display: "flex", gap: 40 }}>
          {[
            { icon: Shield, label: "All hosts verified", desc: "Background checked + trauma-informed" },
            { icon: Heart, label: "Service Credits OK", desc: "Pay with SC on 60%+ of listings" },
            { icon: MapPin, label: "Location privacy", desc: "Your address is never shared" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ textAlign: "center", width: 180 }}>
              <Icon size={18} color={COLOR} style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: subtle }}>{desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
