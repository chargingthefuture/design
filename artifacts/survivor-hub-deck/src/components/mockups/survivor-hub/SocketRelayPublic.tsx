import {
  Share2, Search, Shield, Clock, MapPin, Zap, Heart,
  Package, Users, LogIn, UserPlus, ShieldCheck, Lock, Plus,
} from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#F43F5E";
const accent = "#7C3AED";
const accentCyan = "#0EA5E9";

const REQUESTS = [
  { id: 1, type: "need", title: "Need groceries — single mom, 3 kids", location: "North Houston, TX", urgency: "urgent", category: "Food", credits: 15, time: "5 min ago", anon: true },
  { id: 2, type: "offer", title: "I can give rides to medical appointments", by: "Marcus B.", location: "Buckhead, ATL", urgency: "normal", category: "Transport", credits: 0, time: "12 min ago", anon: false },
  { id: 3, type: "need", title: "Spanish/English interpreter — court hearing tomorrow", location: "Chicago Loop, IL", urgency: "urgent", category: "Legal", credits: 30, time: "24 min ago", anon: true },
  { id: 4, type: "offer", title: "Resume writing help — 10 yrs HR experience", by: "Amara O.", location: "Remote", urgency: "normal", category: "Employment", credits: 20, time: "1 hr ago", anon: false },
  { id: 5, type: "need", title: "Childcare for 2 days while I interview", location: "Dallas, TX", urgency: "normal", category: "Childcare", credits: 40, time: "2 hr ago", anon: true },
  { id: 6, type: "offer", title: "Free notary services for legal documents", by: "James T.", location: "Remote / Houston", urgency: "normal", category: "Legal", credits: 0, time: "3 hr ago", anon: false },
];

const CATEGORIES = ["All", "Food", "Transport", "Legal", "Employment", "Childcare", "Housing", "Mental Health"];
const STATS = [{ v: "847", l: "Active requests" }, { v: "12.4K", l: "Fulfilled this month" }, { v: "$0", l: "Cost to post" }];

export function SocketRelayPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Marketing banner */}
      <div style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentCyan} 100%)`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Share2 size={15} color="#fff" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>SocketRelay · 847 open requests · 12,400 fulfilled this month · Mutual aid, free forever</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <LogIn size={13} /> Sign In
          </button>
          <button style={{ padding: "6px 16px", borderRadius: 7, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <UserPlus size={13} /> Post a Need Free →
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Left sidebar */}
        <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "16px 16px 10px", borderBottom: `1px solid ${border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Share2 size={16} color={COLOR} />
              <span style={{ fontSize: 15, fontWeight: 700 }}>SocketRelay</span>
              <span style={{ marginLeft: "auto", fontSize: 11, background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}30`, borderRadius: 4, padding: "2px 7px" }}>Public Feed</span>
            </div>
            <div style={{ position: "relative", marginBottom: 10 }}>
              <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: subtle }} />
              <input placeholder="Search needs & offers…" style={{ width: "100%", padding: "8px 10px 8px 30px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 8, fontSize: 13, color: subtle, outline: "none", boxSizing: "border-box" }} readOnly />
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {CATEGORIES.map(c => <span key={c} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 12, border: `1px solid ${c === "All" ? COLOR + "50" : border}`, color: c === "All" ? COLOR : subtle, background: c === "All" ? `${COLOR}10` : "transparent", cursor: "pointer" }}>{c}</span>)}
            </div>
          </div>

          <div style={{ padding: "12px 12px 8px" }}>
            {STATS.map(({ v, l }) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${border}` }}>
                <span style={{ fontSize: 12, color: subtle }}>{l}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Auth gate to post */}
          <div style={{ margin: "12px", borderRadius: 12, border: `2px dashed ${COLOR}30`, background: `${COLOR}06`, padding: "16px", textAlign: "center" }}>
            <Lock size={16} color={subtle} style={{ marginBottom: 6 }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 4 }}>Sign in to post or respond</div>
            <div style={{ fontSize: 11, color: subtle, marginBottom: 10 }}>Posting is always free. Anonymous posts supported.</div>
            <button style={{ width: "100%", padding: "9px", borderRadius: 8, background: `linear-gradient(90deg,${accent},${accentCyan})`, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              Create Free Account →
            </button>
          </div>
        </aside>

        {/* Main feed */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ padding: "16px 24px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Live Relay Feed</div>
            <div style={{ fontSize: 12, color: subtle }}>Public · Updates in real time</div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <ShieldCheck size={12} color={accentCyan} />
                <span style={{ fontSize: 11, color: accentCyan }}>Safe Space ✓</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 20, background: surface, border: `1px solid ${border}` }}>
                <Shield size={12} color={subtle} />
                <span style={{ fontSize: 11, color: subtle }}>Anonymous posts protected</span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
            {REQUESTS.map(({ id, type, title, by, location, urgency, category, credits, time, anon }) => (
              <div key={id} style={{ borderRadius: 12, border: `1px solid ${type === "need" ? "#F43F5E30" : "#22C55E30"}`, background: type === "need" ? "#F43F5E06" : "#22C55E06", padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: type === "need" ? "#F43F5E20" : "#22C55E20", color: type === "need" ? "#F43F5E" : "#22C55E" }}>{type === "need" ? "NEED" : "OFFER"}</span>
                      <span style={{ fontSize: 10, background: surface, border: `1px solid ${border}`, color: subtle, borderRadius: 4, padding: "1px 6px" }}>{category}</span>
                      {urgency === "urgent" && <span style={{ fontSize: 10, background: "#F43F5E20", border: "1px solid #F43F5E30", color: "#F43F5E", borderRadius: 4, padding: "1px 6px" }}>URGENT</span>}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: text, lineHeight: 1.4 }}>{title}</div>
                  </div>
                  {credits > 0 && <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0, background: "#F59E0B15", border: "1px solid #F59E0B30", borderRadius: 8, padding: "4px 10px" }}>
                    <Zap size={12} color="#F59E0B" />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#F59E0B" }}>{credits} SC</span>
                  </div>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} color={subtle} /><span style={{ fontSize: 11, color: subtle }}>{location}</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={11} color={subtle} /><span style={{ fontSize: 11, color: subtle }}>{time}</span></div>
                  <span style={{ fontSize: 11, color: subtle }}>{anon ? "Anonymous" : by}</span>
                  <div style={{ marginLeft: "auto" }}>
                    <button style={{ padding: "6px 14px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, color: subtle, fontSize: 12, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 5 }}>
                      <Lock size={11} /> Respond
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ padding: "16px 24px", borderTop: `1px solid ${border}`, display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ fontSize: 13, color: subtle }}>Want to help or need something?</div>
            <button style={{ padding: "9px 22px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <Plus size={14} /> Post a Need
            </button>
            <button style={{ padding: "9px 22px", borderRadius: 9, background: "transparent", border: `1px solid ${COLOR}50`, color: COLOR, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <Heart size={14} /> Post an Offer
            </button>
            <div style={{ marginLeft: "auto", fontSize: 12, color: subtle, display: "flex", alignItems: "center", gap: 5 }}>
              <Shield size={12} color={subtle} /> Anonymous posts always available
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
