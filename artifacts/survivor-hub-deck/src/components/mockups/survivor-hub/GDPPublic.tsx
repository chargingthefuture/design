import {
  Globe, TrendingUp, BarChart2, DollarSign, Users, Zap,
  MapPin, LogIn, UserPlus, ShieldCheck, Lock, Plus,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#06B6D4";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const SECTORS = [
  { name: "Technology & Coding", value: 52.4, pct: 21, color: "#A855F7", members: "1.04M" },
  { name: "Professional Services", value: 84.2, pct: 34, color: COLOR, members: "1.68M" },
  { name: "Housing & Property", value: 37.1, pct: 15, color: "#22C55E", members: "740K" },
  { name: "Healthcare & Wellness", value: 28.6, pct: 12, color: "#EC4899", members: "572K" },
  { name: "Trade & Craftsmanship", value: 21.3, pct: 9, color: "#F97316", members: "426K" },
  { name: "Education & Mentorship", value: 23.4, pct: 9, color: "#EAB308", members: "468K" },
];

const TOP_COUNTRIES = [
  { flag: "🇺🇸", country: "United States", gdp: "$89.4B", members: "1.82M" },
  { flag: "🇳🇬", country: "Nigeria", gdp: "$34.7B", members: "620K" },
  { flag: "🇧🇷", country: "Brazil", gdp: "$28.1B", members: "510K" },
  { flag: "🇮🇳", country: "India", gdp: "$22.6B", members: "430K" },
  { flag: "🇵🇭", country: "Philippines", gdp: "$18.9B", members: "340K" },
];

export function GDPPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Marketing banner */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Globe size={15} color="#fff" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Survivor Hub GDP Tracker · Real-time economic output of 4.9M survivors · Public read-only</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <UserPlus size={13} /> Add Your Skills →
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Left sidebar */}
        <aside style={{ width: 280, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Globe size={16} color={COLOR} />
              <span style={{ fontSize: 15, fontWeight: 700 }}>GDP Dashboard</span>
              <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Public</span>
            </div>
            <div style={{ fontSize: 12, color: subtle }}>Read-only · Sign in to contribute your skills</div>
          </div>

          <div style={{ padding: 16, flex: 1, overflowY: "auto" }}>
            {/* Hero stat */}
            <div style={{ borderRadius: 14, background: `${COLOR}08`, border: `1px solid ${COLOR}25`, padding: "20px 16px", textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>TI Skills Economy</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: COLOR, lineHeight: 1 }}>$247B</div>
              <div style={{ fontSize: 12, color: subtle, marginTop: 4 }}>of $300B opportunity</div>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)", marginTop: 12, overflow: "hidden" }}>
                <div style={{ height: "100%", width: "82%", borderRadius: 2, background: COLOR }} />
              </div>
              <div style={{ fontSize: 11, color: COLOR, marginTop: 6 }}>82% achieved</div>
            </div>

            {[
              { label: "Active Members", value: "4.9M", icon: Users, color: "#22C55E" },
              { label: "Countries", value: "127", icon: Globe, color: "#A855F7" },
              { label: "Monthly Growth", value: "+2.3%", icon: TrendingUp, color: "#F59E0B" },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} style={{ borderRadius: 10, border: `1px solid ${border}`, background: surface, padding: "12px", marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color }}>{value}</div>
                  <div style={{ fontSize: 11, color: subtle }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main area */}
        <main style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>Trafficking-Informed Skills Economy</div>
              <div style={{ fontSize: 13, color: subtle }}>Real-time economic output · Public dashboard · Data refreshes every 60 seconds</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <ShieldCheck size={12} color={accentCyan} />
                <span style={{ fontSize: 12, color: accentCyan }}>Safe Space ✓</span>
              </div>
              <button style={{ padding: "8px 18px", borderRadius: 8, background: `rgba(255,255,255,0.05)`, border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 6 }}>
                <Lock size={12} /> <Plus size={12} /> Add Skills
              </button>
            </div>
          </div>

          {/* Sector breakdown */}
          <div style={{ borderRadius: 16, border: `1px solid ${border}`, background: surface, padding: "20px 24px", marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Sector Breakdown</div>
              <BarChart2 size={16} color={subtle} />
            </div>
            {SECTORS.map(({ name, value, pct, color, members }) => (
              <div key={name} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: color }} />
                    <span style={{ fontSize: 13, color: text }}>{name}</span>
                    <span style={{ fontSize: 11, color: subtle }}>{members} members</span>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color }}>${value}B</span>
                    <span style={{ fontSize: 12, color: subtle }}>{pct}%</span>
                  </div>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct * 2.5}%`, borderRadius: 3, background: color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Top countries */}
          <div style={{ borderRadius: 16, border: `1px solid ${border}`, background: surface, padding: "20px 24px", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <MapPin size={15} color={COLOR} /> Top Countries by Economic Output
            </div>
            {TOP_COUNTRIES.map(({ flag, country, gdp, members }, i) => (
              <div key={country} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0", borderBottom: `1px solid ${border}` }}>
                <span style={{ fontSize: 22 }}>{flag}</span>
                <span style={{ fontSize: 14, color: text, flex: 1 }}>{country}</span>
                <span style={{ fontSize: 13, color: subtle }}>{members}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: COLOR }}>{gdp}</span>
              </div>
            ))}
          </div>

          {/* Auth gate CTA */}
          <div style={{ borderRadius: 16, border: `2px solid ${COLOR}30`, background: `${COLOR}06`, padding: "28px 32px", textAlign: "center" }}>
            <Globe size={32} color={`${COLOR}60`} style={{ marginBottom: 12 }} />
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Add your skills to the economy</div>
            <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, maxWidth: 480, margin: "0 auto 20px" }}>
              Every verified skill you add increases the collective value of the TI Skills Economy. Create a free account to contribute, earn Service Credits, and appear on the global map.
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button style={{ padding: "11px 28px", borderRadius: 10, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                <UserPlus size={15} style={{ display: "inline", marginRight: 7 }} /> Add Your Skills Free
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
