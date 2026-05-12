import { Share2, Plus, Shield, Clock, Package, Users, Heart, Search, Zap } from "lucide-react";

const COLOR = "#F43F5E";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const subtle = "#6B7280";
const text = "#F9FAFB";

const CATEGORIES = ["Food", "Transport", "Legal", "Employment", "Childcare", "Housing", "Mental Health"];
const STEPS = [
  { icon: Plus, label: "Post a need or offer", desc: "Anonymous or named — your choice" },
  { icon: Zap, label: "Matched instantly", desc: "Real-time relay to the community" },
  { icon: Heart, label: "Connect & help", desc: "Earn Service Credits for fulfilling needs" },
];

export function SocketRelayEmpty() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <Share2 size={16} color={COLOR} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>SocketRelay</span>
            <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Phase 0</span>
          </div>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: subtle }} />
            <input placeholder="Search needs & offers…" style={{ width: "100%", padding: "8px 10px 8px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
          </div>
        </div>

        <div style={{ padding: "12px 16px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map(c => (
              <span key={c} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, border: `1px solid ${border}`, color: subtle, cursor: "pointer" }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, gap: 10, textAlign: "center" }}>
          <Clock size={24} color={subtle} />
          <div style={{ fontSize: 13, fontWeight: 600, color: text }}>No relay requests yet</div>
          <div style={{ fontSize: 12, color: subtle, lineHeight: 1.5 }}>Be the first to post a need or offer to your community</div>
        </div>
      </aside>

      {/* Main area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60 }}>
        <div style={{ maxWidth: 560, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: `${COLOR}10`, border: `2px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Share2 size={34} color={`${COLOR}60`} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>The relay feed is empty</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
            SocketRelay is a real-time mutual aid network — survivors helping survivors. Post what you need or what you can offer. Service Credits are earned for every fulfilled request.
          </div>

          {/* How it works */}
          <div style={{ width: "100%", borderRadius: 14, border: `1px solid ${border}`, background: surface, padding: "20px 24px", textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>How mutual aid works</div>
            {STEPS.map(({ icon: Icon, label, desc }, i) => (
              <div key={label} style={{ display: "flex", gap: 14, marginBottom: i < 2 ? 14 : 0 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${COLOR}12`, border: `1px solid ${COLOR}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={16} color={COLOR} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 12, color: subtle }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ padding: "11px 24px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Plus size={15} /> Post a Need
            </button>
            <button style={{ padding: "11px 24px", borderRadius: 10, background: "transparent", border: `1px solid ${COLOR}50`, color: COLOR, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
              <Heart size={14} /> Post an Offer
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            {[
              { icon: Shield, label: "Anonymous posts supported" },
              { icon: Users, label: "Community-powered" },
              { icon: Package, label: "Credits for fulfillment" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: subtle }}>
                <Icon size={13} color={COLOR} /> {label}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
