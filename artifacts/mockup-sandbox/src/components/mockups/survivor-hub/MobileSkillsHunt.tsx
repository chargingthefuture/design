import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Trophy, Target, Users, Plus, X, ExternalLink, CheckCircle, Send } from "lucide-react";

const COLOR = "#A855F7";

const LEADERBOARD = [
  { rank: 1, name: "Amara O.",  found: 47, avatar: "AO" },
  { rank: 2, name: "Maria G.",  found: 38, avatar: "MG" },
  { rank: 3, name: "Priya S.",  found: 31, avatar: "PS" },
  { rank: 4, name: "You",       found: 19, avatar: "S", isMe: true },
  { rank: 5, name: "James T.",  found: 14, avatar: "JT" },
];

const MISSIONS = [
  { title: "Find 3 survivors with coding skills",  progress: 2, goal: 3,  reward: 150, color: COLOR },
  { title: "Discover a rare trade skill",          progress: 0, goal: 1,  reward: 300, color: "#22C55E" },
  { title: "Connect 10 survivors this week",      progress: 4, goal: 10, reward: 500, color: "#F59E0B" },
];

const MY_FINDS = [
  { name: "D. Williams", skills: ["Carpentry", "Plumbing"],        status: "verified",   date: "2d ago" },
  { name: "C. Mensah",   skills: ["Graphic Design"],               status: "hidden_gem", date: "5d ago" },
  { name: "R. Torres",   skills: ["Nursing", "Counseling"],        status: "pending",    date: "1w ago" },
];

const SKILL_SUGGESTIONS = ["Carpentry","Nursing","Software Engineering","Graphic Design","Cooking","Legal Aid","Teaching","Translation","Auto Repair","Welding"];

type NavKey = "scout" | "leaderboard" | "missions" | "finds";

export function MobileSkillsHunt() {
  const [activeNav, setActiveNav] = useState<NavKey>("scout");
  const [firstName, setFirst]     = useState("");
  const [lastName, setLast]       = useState("");
  const [quora, setQuora]         = useState("");
  const [skills, setSkills]       = useState<string[]>([]);
  const [skillInput, setSkill]    = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addSkill = (s: string) => {
    const t = s.trim();
    if (t && !skills.includes(t)) setSkills(sk => [...sk, t]);
    setSkill("");
  };

  const NAV = [
    { key: "scout" as NavKey,       icon: Search,  label: "Scout" },
    { key: "leaderboard" as NavKey, icon: Trophy,  label: "Leaders" },
    { key: "missions" as NavKey,    icon: Target,  label: "Missions" },
    { key: "finds" as NavKey,       icon: Users,   label: "My Finds" },
  ];

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>9:41</div>
        <div style={{ fontSize: 12, color: "#9CA3AF" }}>100%</div>
      </div>

      {/* App header */}
      <div style={{ padding: "14px 20px 12px", background: "#090B0F", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={18} style={{ color: COLOR }} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB" }}>Skills Hunt</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Nominate · connect · build</div>
          </div>
        </div>
        <div style={{ padding: "8px 12px", borderRadius: 10, background: `${COLOR}08`, border: `1px solid ${COLOR}20`, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: COLOR }}>19</div>
          <div style={{ fontSize: 9, color: "#6B7280" }}>found · #4</div>
        </div>
      </div>

      <ScrollArea style={{ flex: 1 }}>
        <div style={{ padding: "14px 16px 16px" }}>

          {/* SCOUT */}
          {activeNav === "scout" && (
            submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 0", gap: 16, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#22C55E20", border: "1px solid #22C55E40", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle size={32} style={{ color: "#22C55E" }} />
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#F9FAFB" }}>Nomination submitted!</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, maxWidth: 280 }}>Thank you for growing the network. You earned <span style={{ color: COLOR, fontWeight: 700 }}>+50 pts</span>.</div>
                <button onClick={() => { setSubmitted(false); setFirst(""); setLast(""); setQuora(""); setSkills([]); }} style={{ padding: "12px 28px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Nominate Another</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>Nominate a Survivor</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>Someone you personally know. Their Quora profile = social proof. Their skills = our economy.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>First Name <span style={{ color: COLOR }}>*</span></div>
                      <input value={firstName} onChange={e => setFirst(e.target.value)} placeholder="e.g. Amara" style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${firstName ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>Last Name <span style={{ color: COLOR }}>*</span></div>
                      <input value={lastName} onChange={e => setLast(e.target.value)} placeholder="e.g. Okonkwo" style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${lastName ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", boxSizing: "border-box" }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>Quora Profile URL <span style={{ color: "#4B5563", fontWeight: 400 }}>(social proof)</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${quora ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10 }}>
                      <ExternalLink size={13} style={{ color: "#6B7280" }} />
                      <input value={quora} onChange={e => setQuora(e.target.value)} placeholder="quora.com/profile/..." style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: "#E8EAF0" }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>Skills <span style={{ color: COLOR }}>*</span></div>
                    {skills.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                        {skills.map(s => (
                          <span key={s} style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 20, background: `${COLOR}20`, border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR }}>
                            {s}<button onClick={() => setSkills(sk => sk.filter(x => x !== s))} style={{ background: "none", border: "none", color: COLOR, cursor: "pointer", padding: 0 }}><X size={11} /></button>
                          </span>
                        ))}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 8 }}>
                      <input value={skillInput} onChange={e => setSkill(e.target.value)} onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addSkill(skillInput); }}} placeholder="Type skill + Enter…" style={{ flex: 1, padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 13, color: "#E8EAF0", outline: "none" }} />
                      <button onClick={() => addSkill(skillInput)} style={{ padding: "10px 12px", borderRadius: 10, background: `${COLOR}20`, border: `1px solid ${COLOR}40`, color: COLOR, cursor: "pointer" }}><Plus size={15} /></button>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                      {SKILL_SUGGESTIONS.filter(s => !skills.includes(s)).slice(0, 6).map(s => (
                        <button key={s} onClick={() => addSkill(s)} style={{ padding: "3px 10px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#9CA3AF", fontSize: 12, cursor: "pointer" }}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => { if (firstName && lastName && skills.length) setSubmitted(true); }}
                    style={{ padding: "14px", borderRadius: 12, background: (firstName && lastName && skills.length) ? COLOR : "rgba(255,255,255,0.06)", border: "none", color: (firstName && lastName && skills.length) ? "#fff" : "#4B5563", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Send size={16} /> Submit · +50 pts
                  </button>

                  {/* Active mission teaser */}
                  <div style={{ padding: "12px", borderRadius: 12, background: `${COLOR}08`, border: `1px solid ${COLOR}20`, display: "flex", gap: 10, alignItems: "center" }}>
                    <Target size={16} style={{ color: COLOR, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#E8EAF0" }}>Mission: Find coding survivors</div>
                      <div style={{ fontSize: 11, color: "#6B7280" }}>2/3 · 150 pts on complete</div>
                    </div>
                  </div>
                </div>
              </>
            )
          )}

          {/* LEADERBOARD */}
          {activeNav === "leaderboard" && (
            <>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB", marginBottom: 4 }}>Scout Leaderboard</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 14 }}>Ranked by survivors found — not skills hoarded</div>
              {LEADERBOARD.map(p => (
                <div key={p.rank} style={{ padding: "12px 14px", borderRadius: 12, background: p.isMe ? `${COLOR}12` : "rgba(255,255,255,0.02)", border: `1px solid ${p.isMe ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 18, width: 28, textAlign: "center" }}>{p.rank <= 3 ? ["🥇","🥈","🥉"][p.rank-1] : `#${p.rank}`}</div>
                  <Avatar style={{ width: 36, height: 36 }}>
                    <AvatarFallback style={{ background: `${COLOR}25`, color: COLOR, fontSize: 13, fontWeight: 800 }}>{p.avatar}</AvatarFallback>
                  </Avatar>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.isMe ? COLOR : "#F9FAFB" }}>{p.name}{p.isMe ? " (You)" : ""}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: COLOR }}>{p.found}</div>
                    <div style={{ fontSize: 10, color: "#4B5563" }}>found</div>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* MISSIONS */}
          {activeNav === "missions" && (
            <>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB", marginBottom: 4 }}>Active Missions</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 14 }}>Complete missions to earn bonus points</div>
              {MISSIONS.map((m, i) => (
                <div key={i} style={{ padding: "14px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${m.color}35`, marginBottom: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB", marginBottom: 8, lineHeight: 1.3 }}>{m.title}</div>
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 4, color: "#6B7280" }}>
                      <span>{m.progress}/{m.goal} complete</span>
                      <span style={{ color: m.color, fontWeight: 700 }}>+{m.reward} pts</span>
                    </div>
                    <div style={{ height: 5, background: "rgba(255,255,255,0.05)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: m.color, width: `${Math.min(100, (m.progress / m.goal) * 100)}%` }} />
                    </div>
                  </div>
                  <button onClick={() => setActiveNav("scout")} style={{ width: "100%", padding: "9px", borderRadius: 10, background: m.color, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Scout Now</button>
                </div>
              ))}
            </>
          )}

          {/* MY FINDS */}
          {activeNav === "finds" && (
            <>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB", marginBottom: 4 }}>My Finds</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 14 }}>Survivors you've nominated · partial names for privacy</div>
              {MY_FINDS.map((f, i) => (
                <div key={i} style={{ padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${f.status === "hidden_gem" ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>{f.name}</div>
                    <div style={{ padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700, background: f.status === "verified" ? "#22C55E20" : f.status === "hidden_gem" ? `${COLOR}20` : "rgba(255,165,0,0.15)", color: f.status === "verified" ? "#22C55E" : f.status === "hidden_gem" ? COLOR : "#F59E0B" }}>
                      {f.status === "verified" ? "✓ Verified" : f.status === "hidden_gem" ? "💎 Gem" : "⏳ Pending"}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {f.skills.map(s => (
                      <span key={s} style={{ padding: "2px 8px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "#9CA3AF" }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: 11, color: "#4B5563", marginTop: 6 }}>{f.date}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </ScrollArea>

      {/* Bottom nav */}
      <div style={{ height: 72, background: "#090B0F", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px" }}>
        {NAV.map(({ icon: Icon, label, key }) => (
          <button key={key} onClick={() => setActiveNav(key)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, padding: "8px 4px", background: "transparent", border: "none", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: activeNav === key ? `${COLOR}20` : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={20} style={{ color: activeNav === key ? COLOR : "#6B7280" }} />
            </div>
            <span style={{ fontSize: 10, color: activeNav === key ? COLOR : "#4B5563", fontWeight: activeNav === key ? 600 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
