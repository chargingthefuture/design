import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Trophy, Target, Users, Plus, X, ExternalLink, CheckCircle, Send, ChevronDown, Lock } from "lucide-react";

const COLOR = "#A855F7";

// Spec §2.1: taxonomy-first, sourced from skills_taxonomy_skills
const SKILL_TAXONOMY: Record<string, string[]> = {
  "Technology":         ["Software Engineering", "UI/UX Design", "Data Analysis", "Web Development", "IT Support"],
  "Healthcare":         ["Nursing", "Counseling", "Mental Health", "Physical Therapy", "Home Health Aide"],
  "Trades":             ["Carpentry", "Plumbing", "Electrical", "Welding", "Auto Repair", "Masonry"],
  "Creative":           ["Graphic Design", "Photography", "Video Editing", "Writing & Editing"],
  "Education":          ["Teaching", "Tutoring", "Translation"],
  "Business & Legal":   ["Accounting", "Legal Aid", "Paralegal", "Marketing"],
  "Food & Hospitality": ["Cooking", "Catering", "Barista"],
  "Agriculture":        ["Farming", "Landscaping", "Animal Care"],
  "Beauty & Wellness":  ["Hair Styling", "Cosmetology", "Massage Therapy"],
};

// Spec §3.2: 5 named badges
const BADGES = [
  { name: "First Finder",         emoji: "🔍", earned: true },
  { name: "Diversity Champion",   emoji: "🌍", earned: true },
  { name: "Rare Talent Scout",    emoji: "💎", earned: true },
  { name: "Quality Contributor",  emoji: "⭐", earned: false },
  { name: "Leaderboard Champion", emoji: "🏆", earned: false },
];

// Spec §3.2: ranked by accepted_points DESC, first_match_count DESC
const LEADERBOARD = [
  { rank: 1, name: "Amara O.",  pts: 892, pendingPts: 24, avatar: "AO" },
  { rank: 2, name: "Maria G.",  pts: 743, pendingPts: 18, avatar: "MG" },
  { rank: 3, name: "Priya S.",  pts: 601, pendingPts: 12, avatar: "PS" },
  { rank: 4, name: "You",       pts: 394, pendingPts: 30, avatar: "S", isMe: true },
  { rank: 5, name: "James T.",  pts: 287, pendingPts: 0,  avatar: "JT" },
];

const MISSIONS = [
  { title: "Find 3 survivors with coding skills", progress: 2, goal: 3,  reward: 150, color: COLOR },
  { title: "Discover a rare trade skill",         progress: 0, goal: 1,  reward: 300, color: "#22C55E" },
  { title: "Connect 10 survivors this week",      progress: 4, goal: 10, reward: 500, color: "#F59E0B" },
];

const MY_FINDS = [
  { name: "D. Williams", skills: ["Carpentry", "Plumbing"],    status: "verified",   date: "2d ago" },
  { name: "C. Mensah",   skills: ["Graphic Design"],           status: "hidden_gem", date: "5d ago" },
  { name: "R. Torres",   skills: ["Nursing", "Counseling"],    status: "pending",    date: "1w ago" },
];

type NavKey = "scout" | "leaderboard" | "missions" | "finds";

export function MobileSkillsHunt() {
  const [activeNav, setActiveNav]     = useState<NavKey>("scout");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio]                 = useState("");
  const [quora, setQuora]             = useState("");
  const [skills, setSkills]           = useState<string[]>([]);
  const [proposed, setProposed]       = useState<string[]>([]);
  const [freeText, setFreeText]       = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [submitted, setSubmitted]     = useState(false);

  const BIO_MAX = 280;
  const allSkillCount = skills.length + proposed.length;
  const canAddMore = allSkillCount < 10;

  const toggleSkill = (s: string) => {
    setSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const addProposed = () => {
    const tokens = freeText.split(/[,\n]+/).map(t => t.trim()).filter(t => t && t.length <= 40 && !skills.includes(t) && !proposed.includes(t));
    if (tokens.length && allSkillCount + tokens.length <= 10) setProposed(prev => [...prev, ...tokens]);
    setFreeText("");
  };

  const NAV = [
    { key: "scout" as NavKey,       icon: Search, label: "Scout" },
    { key: "leaderboard" as NavKey, icon: Trophy, label: "Leaders" },
    { key: "missions" as NavKey,    icon: Target, label: "Missions" },
    { key: "finds" as NavKey,       icon: Users,  label: "My Finds" },
  ];

  return (
    <div style={{ width: 390, height: "100%", minHeight: "100%", background: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex", flexDirection: "column" }}>

      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>9:41</div>
        <div style={{ fontSize: 12, color: "#9CA3AF" }}>100%</div>
      </div>

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
          <div style={{ fontSize: 14, fontWeight: 800, color: COLOR }}>394</div>
          <div style={{ fontSize: 9, color: "#6B7280" }}>pts · #4</div>
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
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, maxWidth: 280 }}>
                  Thank you. Points are granted when an admin accepts. <span style={{ color: COLOR, fontWeight: 700 }}>+30 pts pending ⏳</span>
                </div>
                <button onClick={() => { setSubmitted(false); setDisplayName(""); setBio(""); setQuora(""); setSkills([]); setProposed([]); }} style={{ padding: "12px 28px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Nominate Another</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>Nominate a Survivor</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>Think of someone you believe may be a survivor — no certainty needed. Their Quora profile helps verify their identity, and their skills join our economy.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {/* Display Name — spec: 2–100 chars, alphanumeric + spaces */}
                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>
                      Display Name <span style={{ color: COLOR }}>*</span>
                      <span style={{ color: "#4B5563", fontWeight: 400 }}> · letters & spaces, 2–100 chars</span>
                    </div>
                    <input
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 100))}
                      placeholder="e.g. Amara Williams"
                      style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${displayName.length >= 2 ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>

                  {/* Bio — spec: max 280 chars */}
                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>Bio <span style={{ color: "#4B5563", fontWeight: 400 }}>(optional)</span></div>
                    <textarea
                      value={bio}
                      onChange={e => setBio(e.target.value.slice(0, BIO_MAX))}
                      rows={2}
                      placeholder="One sentence about who they are…"
                      style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${bio ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 13, color: "#E8EAF0", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                    <div style={{ fontSize: 10, color: bio.length > 240 ? "#F59E0B" : "#4B5563", textAlign: "right" }}>{bio.length}/{BIO_MAX}</div>
                  </div>

                  {/* Quora */}
                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>Quora Profile URL <span style={{ color: "#4B5563", fontWeight: 400 }}>(social proof)</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${quora ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10 }}>
                      <ExternalLink size={13} style={{ color: "#6B7280" }} />
                      <input value={quora} onChange={e => setQuora(e.target.value)} placeholder="quora.com/profile/..." style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: "#E8EAF0" }} />
                    </div>
                  </div>

                  {/* Skills — spec §2.1: taxonomy multi-select + optional free-text fallback */}
                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 6, fontWeight: 600 }}>
                      Skills <span style={{ color: COLOR }}>*</span>
                      <span style={{ color: "#4B5563", fontWeight: 400 }}> · pick from taxonomy (max 10)</span>
                    </div>

                    {/* Selected chips */}
                    {(skills.length > 0 || proposed.length > 0) && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 8 }}>
                        {skills.map(s => (
                          <span key={s} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 9px", borderRadius: 20, background: `${COLOR}20`, border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600 }}>
                            {s}<button onClick={() => toggleSkill(s)} style={{ background: "none", border: "none", color: COLOR, cursor: "pointer", padding: 0 }}><X size={10} /></button>
                          </span>
                        ))}
                        {proposed.map(s => (
                          <span key={s} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 9px", borderRadius: 20, background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)", fontSize: 12, color: "#FBBF24" }}>
                            {s}<button onClick={() => setProposed(prev => prev.filter(x => x !== s))} style={{ background: "none", border: "none", color: "#FBBF24", cursor: "pointer", padding: 0 }}><X size={10} /></button>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Taxonomy accordion */}
                    {canAddMore && (
                      <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
                        {Object.entries(SKILL_TAXONOMY).map(([cat, catSkills]) => (
                          <div key={cat}>
                            <button
                              onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
                              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", background: openCategory === cat ? `${COLOR}10` : "rgba(255,255,255,0.02)", border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", color: openCategory === cat ? COLOR : "#9CA3AF", fontSize: 12, fontWeight: 600 }}
                            >
                              <span>{cat}</span>
                              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                {catSkills.filter(s => skills.includes(s)).length > 0 && (
                                  <span style={{ fontSize: 10, background: `${COLOR}25`, color: COLOR, borderRadius: 8, padding: "1px 6px" }}>
                                    {catSkills.filter(s => skills.includes(s)).length}
                                  </span>
                                )}
                                <ChevronDown size={12} style={{ transform: openCategory === cat ? "rotate(180deg)" : "none" }} />
                              </div>
                            </button>
                            {openCategory === cat && (
                              <div style={{ padding: "8px 12px", display: "flex", flexWrap: "wrap", gap: 6, background: "rgba(255,255,255,0.01)" }}>
                                {catSkills.map(s => {
                                  const selected = skills.includes(s);
                                  return (
                                    <button key={s} onClick={() => { if (canAddMore || selected) toggleSkill(s); }}
                                      style={{ padding: "3px 10px", borderRadius: 20, background: selected ? `${COLOR}25` : "rgba(255,255,255,0.04)", border: `1px solid ${selected ? COLOR + "60" : "rgba(255,255,255,0.08)"}`, color: selected ? COLOR : "#9CA3AF", fontSize: 11, fontWeight: selected ? 700 : 400, cursor: "pointer", opacity: !canAddMore && !selected ? 0.4 : 1 }}
                                    >
                                      {selected ? "✓ " : ""}{s}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Free-text fallback */}
                    {canAddMore && (
                      <div>
                        <div style={{ fontSize: 10, color: "#4B5563", marginBottom: 5 }}>Not in the list? Add free-text skills (comma-separated, each ≤ 40 chars):</div>
                        <div style={{ display: "flex", gap: 6 }}>
                          <input value={freeText} onChange={e => setFreeText(e.target.value)} onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addProposed(); }}} placeholder="e.g. Kintsugi, Beekeeping…" style={{ flex: 1, padding: "8px 10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, fontSize: 12, color: "#E8EAF0", outline: "none" }} />
                          <button onClick={addProposed} style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#FBBF24", cursor: "pointer", fontSize: 12 }}>Add</button>
                        </div>
                        <div style={{ fontSize: 10, color: "#4B5563", marginTop: 3 }}>Yellow = proposed · admin promotes to taxonomy later</div>
                      </div>
                    )}
                    <div style={{ fontSize: 10, color: "#4B5563", marginTop: 5 }}>{allSkillCount}/10 skills</div>
                  </div>

                  <button
                    onClick={() => { if (displayName.trim().length >= 2 && allSkillCount > 0) setSubmitted(true); }}
                    style={{ padding: "14px", borderRadius: 12, background: (displayName.trim().length >= 2 && allSkillCount > 0) ? COLOR : "rgba(255,255,255,0.06)", border: "none", color: (displayName.trim().length >= 2 && allSkillCount > 0) ? "#fff" : "#4B5563", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Send size={16} /> Submit · points on acceptance
                  </button>

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

          {/* LEADERBOARD — spec: accepted_points DESC, first_match_count DESC */}
          {activeNav === "leaderboard" && (
            <>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB", marginBottom: 2 }}>Scout Leaderboard</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>Ranked by accepted points — tie-break: first-match count</div>
              <div style={{ fontSize: 11, color: "#4B5563", marginBottom: 14 }}>⏳ Pending converts after admin review</div>
              {LEADERBOARD.map(p => (
                <div key={p.rank} style={{ padding: "12px 14px", borderRadius: 12, background: p.isMe ? `${COLOR}12` : "rgba(255,255,255,0.02)", border: `1px solid ${p.isMe ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 18, width: 28, textAlign: "center" }}>{p.rank <= 3 ? ["🥇","🥈","🥉"][p.rank-1] : `#${p.rank}`}</div>
                  <Avatar style={{ width: 36, height: 36 }}><AvatarFallback style={{ background: `${COLOR}25`, color: COLOR, fontSize: 13, fontWeight: 800 }}>{p.avatar}</AvatarFallback></Avatar>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.isMe ? COLOR : "#F9FAFB" }}>{p.name}{p.isMe ? " (You)" : ""}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: COLOR }}>{p.pts}</div>
                    <div style={{ fontSize: 10, color: "#4B5563" }}>pts</div>
                    {p.pendingPts > 0 && <div style={{ fontSize: 10, color: "#F59E0B" }}>+{p.pendingPts}⏳</div>}
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
                      <div style={{ height: "100%", background: m.color, width: `${Math.min(100,(m.progress/m.goal)*100)}%` }} />
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
              <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 14 }}>People you've nominated · display names only for privacy</div>

              {/* Badges row */}
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {BADGES.map(b => (
                  <div key={b.name} title={b.name} style={{ width: 36, height: 36, borderRadius: 10, background: b.earned ? `${COLOR}20` : "rgba(255,255,255,0.04)", border: `1px solid ${b.earned ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, opacity: b.earned ? 1 : 0.35 }}>
                    {b.earned ? b.emoji : <Lock size={11} style={{ color: "#4B5563" }} />}
                  </div>
                ))}
              </div>

              {MY_FINDS.map((f, i) => (
                <div key={i} style={{ padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${f.status === "hidden_gem" ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>{f.name}</div>
                    <div style={{ padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700, background: f.status === "verified" ? "#22C55E20" : f.status === "hidden_gem" ? `${COLOR}20` : "rgba(255,165,0,0.15)", color: f.status === "verified" ? "#22C55E" : f.status === "hidden_gem" ? COLOR : "#F59E0B" }}>
                      {f.status === "verified" ? "✓ Accepted" : f.status === "hidden_gem" ? "💎 Rare" : "⏳ Pending"}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {f.skills.map(s => <span key={s} style={{ padding: "2px 8px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "#9CA3AF" }}>{s}</span>)}
                  </div>
                  <div style={{ fontSize: 11, color: "#4B5563", marginTop: 6 }}>{f.date}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </ScrollArea>

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
