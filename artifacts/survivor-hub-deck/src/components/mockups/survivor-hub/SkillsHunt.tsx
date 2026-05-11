import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Search, Trophy, Target, Plus, X, ExternalLink,
  Bell, Settings, CheckCircle, Lock, Zap,
  Users, Send, ChevronDown,
} from "lucide-react";

const COLOR = "#A855F7";

// Spec §2.1: taxonomy-first skills, sourced from skills_taxonomy_skills
const SKILL_TAXONOMY: Record<string, string[]> = {
  "Technology":         ["Software Engineering", "UI/UX Design", "Data Analysis", "Cybersecurity", "Web Development", "IT Support"],
  "Healthcare":         ["Nursing", "Counseling", "Mental Health", "Physical Therapy", "Home Health Aide"],
  "Trades":             ["Carpentry", "Plumbing", "Electrical", "Welding", "HVAC", "Masonry", "Auto Repair"],
  "Creative":           ["Graphic Design", "Photography", "Video Editing", "Music Production", "Writing & Editing"],
  "Education":          ["Teaching", "Tutoring", "Translation", "Sign Language Interpretation"],
  "Business & Legal":   ["Accounting", "Legal Aid", "Paralegal", "Marketing", "Bookkeeping"],
  "Food & Hospitality": ["Cooking", "Catering", "Barista", "Event Planning"],
  "Agriculture":        ["Farming", "Landscaping", "Animal Care"],
  "Beauty & Wellness":  ["Hair Styling", "Cosmetology", "Massage Therapy", "Esthetics"],
};

// Spec §3.2 badges: 5 named badges — replaces old generic count-based ones
const BADGES = [
  { name: "First Finder",        emoji: "🔍", earned: true,  desc: "First accepted submission" },
  { name: "Diversity Champion",  emoji: "🌍", earned: true,  desc: "Skills spanning 3+ sectors" },
  { name: "Rare Talent Scout",   emoji: "💎", earned: true,  desc: "Found a rare skill (<50% recruited)" },
  { name: "Quality Contributor", emoji: "⭐", earned: false, desc: "10 accepted with no admin edits" },
  { name: "Leaderboard Champion",emoji: "🏆", earned: false, desc: "Reached top 10 on the leaderboard" },
];

// Spec §3.2 leaderboard: ranked by accepted_points DESC, first_match_count DESC
const LEADERBOARD = [
  { rank: 1, name: "Amara Okonkwo",   pts: 892, pendingPts: 24, firstMatchCount: 8,  verified: 41, avatar: "AO" },
  { rank: 2, name: "Maria Gonzalez",  pts: 743, pendingPts: 18, firstMatchCount: 5,  verified: 34, avatar: "MG" },
  { rank: 3, name: "Priya Sharma",    pts: 601, pendingPts: 12, firstMatchCount: 7,  verified: 28, avatar: "PS" },
  { rank: 4, name: "You",             pts: 394, pendingPts: 30, firstMatchCount: 3,  verified: 16, avatar: "S", isMe: true },
  { rank: 5, name: "James Thibodeau", pts: 287, pendingPts: 0,  firstMatchCount: 2,  verified: 12, avatar: "JT" },
];

const MISSIONS = [
  { id: 1, title: "Find 3 survivors with coding skills",      reward: 150, progress: 2, goal: 3,   status: "active", color: COLOR },
  { id: 2, title: "Discover a survivor with a rare trade",    reward: 300, progress: 0, goal: 1,   status: "active", color: "#22C55E" },
  { id: 3, title: "Connect 10 survivors this week",          reward: 500, progress: 4, goal: 10,  status: "active", color: "#F59E0B" },
  { id: 4, title: "Find survivors from 3 different regions", reward: 400, progress: 1, goal: 3,   status: "active", color: "#3B82F6" },
  { id: 5, title: "100-survivor milestone",                  reward: 2000, progress: 16, goal: 100, status: "locked", color: "#EC4899" },
];

const MY_FINDS = [
  { name: "D. Williams", skills: ["Carpentry", "Plumbing"],             quora: true,  status: "verified",   date: "2 days ago" },
  { name: "C. Mensah",   skills: ["Graphic Design", "Photography"],     quora: true,  status: "hidden_gem", date: "5 days ago" },
  { name: "R. Torres",   skills: ["Nursing", "Counseling"],             quora: false, status: "pending",    date: "1 week ago" },
  { name: "A. Kim",      skills: ["Software Engineering", "UI/UX Design"], quora: true, status: "verified",  date: "2 weeks ago" },
];

type Tab = "scout" | "leaderboard" | "missions" | "my-finds";

export function SkillsHunt({ initialEmpty = false }: { initialEmpty?: boolean } = {}) {
  const [tab, setTab]               = useState<Tab>("scout");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio]               = useState("");
  const [quora, setQuora]           = useState("");
  // Spec §2.1: taxonomy-matched skills stored separately from proposed (free-text) skills
  const [skills, setSkills]         = useState<string[]>([]);
  const [proposedSkills, setProposed] = useState<string[]>([]);
  const [freeText, setFreeText]     = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [submitted, setSubmitted]   = useState(false);
  const [emptyMode]                 = useState(initialEmpty);

  const BIO_MAX = 280;

  const toggleSkill = (s: string) => {
    setSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const addProposed = () => {
    const tokens = freeText.split(/[,\n]+/).map(t => t.trim()).filter(t => t && t.length <= 40 && !skills.includes(t) && !proposedSkills.includes(t));
    if (tokens.length && skills.length + proposedSkills.length + tokens.length <= 10) {
      setProposed(prev => [...prev, ...tokens]);
    }
    setFreeText("");
  };

  const handleSubmit = () => {
    if (displayName.trim().length >= 2 && (skills.length + proposedSkills.length) > 0) setSubmitted(true);
  };

  const allSkillCount = skills.length + proposedSkills.length;
  const canAddMore = allSkillCount < 10;

  const TABS: { key: Tab; icon: typeof Search; label: string }[] = [
    { key: "scout",       icon: Search, label: "Scout" },
    { key: "leaderboard", icon: Trophy, label: "Leaderboard" },
    { key: "missions",    icon: Target, label: "Missions" },
    { key: "my-finds",    icon: Users,  label: "My Finds" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "100vh", background: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", color: "#E8EAF0", display: "flex" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${COLOR}30`, border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <Search size={20} style={{ color: COLOR }} />
        </div>
        {TABS.map(({ key, icon: Icon }) => (
          <button key={key} onClick={() => setTab(key)} style={{ width: 44, height: 44, borderRadius: 12, background: tab === key ? `${COLOR}20` : "transparent", border: tab === key ? `1px solid ${COLOR}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: tab === key ? COLOR : "#6B7280" }}>
            <Icon size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><Settings size={18} /></button>
        <Avatar style={{ width: 36, height: 36 }}>
          <AvatarFallback style={{ background: `${COLOR}30`, color: COLOR, fontSize: 14, fontWeight: 700 }}>S</AvatarFallback>
        </Avatar>
      </aside>

      {/* Second sidebar */}
      <aside style={{ width: 240, background: "#0D0F14", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#6B7280", textTransform: "uppercase", marginBottom: 4 }}>🔍 Skills Hunt</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5, marginBottom: 12 }}>Nominate survivors — populate the Directory, build the economy.</div>
        </div>
        <ScrollArea style={{ flex: 1 }}>
          <div style={{ padding: "0 8px 16px" }}>
            {TABS.map(({ key, icon: Icon, label }) => (
              <button key={key} onClick={() => setTab(key)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, cursor: "pointer", background: tab === key ? `${COLOR}18` : "transparent", borderLeft: tab === key ? `2px solid ${COLOR}` : "2px solid transparent", marginLeft: 2, marginBottom: 2, border: "none", textAlign: "left" }}>
                <Icon size={14} style={{ color: tab === key ? COLOR : "#6B7280" }} />
                <span style={{ fontSize: 13, color: tab === key ? "#E8EAF0" : "#9CA3AF", flex: 1 }}>{label}</span>
                {key === "missions" && <span style={{ background: "#22C55E", borderRadius: 10, fontSize: 11, fontWeight: 700, color: "#fff", padding: "1px 6px" }}>4</span>}
              </button>
            ))}
            <div style={{ margin: "16px 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", padding: "0 10px" }}>Your Badges</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 10px" }}>
              {BADGES.map((b) => (
                <div key={b.name} title={`${b.name}: ${b.desc}`} style={{ width: 32, height: 32, borderRadius: 8, background: b.earned ? `${COLOR}20` : "rgba(255,255,255,0.04)", border: `1px solid ${b.earned ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", opacity: b.earned ? 1 : 0.4 }}>
                  {b.earned ? b.emoji : <Lock size={12} style={{ color: "#4B5563" }} />}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ padding: "10px 12px", borderRadius: 10, background: `${COLOR}10`, border: `1px solid ${COLOR}25` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: COLOR, marginBottom: 2 }}>Your Scouting Score</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#F9FAFB" }}>394 pts</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>16 accepted · +30 pending · Rank #4</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <Search size={18} style={{ color: COLOR }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#E8EAF0" }}>Skills Hunt</div>
            <div style={{ fontSize: 12, color: "#6B7280" }}>Nominate survivors · build the Directory · grow the economy</div>
          </div>
          <Badge style={{ background: "#22C55E20", color: "#22C55E", border: "1px solid #22C55E35", fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>247 found this week</Badge>
          <Badge style={{ background: "rgba(14,165,233,0.12)", color: "#38BDF8", border: "1px solid rgba(14,165,233,0.2)", fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>GetStream ⚡</Badge>
        </header>

        <ScrollArea style={{ flex: 1 }}>
          <div style={{ padding: "24px" }}>

            {/* SCOUT TAB */}
            {tab === "scout" && (
              emptyMode ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", gap: 20, textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: 20, background: `${COLOR}10`, border: `1px dashed ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Search size={32} style={{ color: COLOR, opacity: 0.5 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", marginBottom: 8 }}>No scouts yet — be first</div>
                    <div style={{ fontSize: 14, color: "#6B7280", maxWidth: 400, lineHeight: 1.7 }}>Think of someone you believe may be a survivor. Their Quora profile provides social proof, and their skills help build our economy so we can trade with each other.</div>
                  </div>
                  <button onClick={() => setSubmitted(false)} style={{ padding: "13px 32px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                    <Plus size={16} /> Nominate Your First Survivor
                  </button>
                </div>
              ) : submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", gap: 16, textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#22C55E20", border: "1px solid #22C55E40", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle size={36} style={{ color: "#22C55E" }} />
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB" }}>Nomination submitted!</div>
                  <div style={{ fontSize: 14, color: "#6B7280", maxWidth: 400, lineHeight: 1.7 }}>
                    Thank you for growing the network. This submission is under review. You've earned <span style={{ color: COLOR, fontWeight: 700 }}>+30 pts (pending)</span> and are 1 step closer to your next mission goal.
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button onClick={() => { setSubmitted(false); setDisplayName(""); setBio(""); setQuora(""); setSkills([]); setProposed([]); }} style={{ padding: "12px 24px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Nominate Another</button>
                    <button onClick={() => setTab("leaderboard")} style={{ padding: "12px 24px", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#9CA3AF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>View Leaderboard</button>
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", gap: 24 }}>
                  {/* Nomination form */}
                  <div style={{ flex: 1, maxWidth: 580 }}>
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>Nominate a Survivor</div>
                      <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>Think of someone you believe may be a survivor — you don't need to be 100% certain. Their Quora profile helps verify their identity, and their skills join our economy.</div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                      {/* Display Name — spec: 2–100 chars, alphanumeric + spaces */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                          Display Name <span style={{ color: COLOR }}>*</span>
                          <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400, marginLeft: 6 }}>2–100 chars, letters and spaces only</span>
                        </label>
                        <input
                          value={displayName}
                          onChange={e => setDisplayName(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 100))}
                          placeholder="e.g. Amara Williams"
                          style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${displayName.length >= 2 ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>

                      {/* Bio — spec: max 280 chars */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                          Bio <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400 }}>(optional — one sentence about who they are)</span>
                        </label>
                        <textarea
                          value={bio}
                          onChange={e => setBio(e.target.value.slice(0, BIO_MAX))}
                          rows={2}
                          placeholder="e.g. Lives in Houston, works in construction, connected through mutual contact…"
                          style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${bio ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                        />
                        <div style={{ fontSize: 11, color: bio.length > 240 ? "#F59E0B" : "#4B5563", textAlign: "right", marginTop: 3 }}>
                          {bio.length}/{BIO_MAX}
                        </div>
                      </div>

                      {/* Quora */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                          Quora Profile URL <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400 }}>(social proof — highly recommended)</span>
                        </label>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${quora ? COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10 }}>
                          <ExternalLink size={14} style={{ color: "#6B7280", flexShrink: 0 }} />
                          <input
                            value={quora}
                            onChange={e => setQuora(e.target.value)}
                            placeholder="https://quora.com/profile/..."
                            style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "#E8EAF0" }}
                          />
                        </div>
                        <div style={{ fontSize: 11, color: "#4B5563", marginTop: 4 }}>Quora activity helps verify this is a real person — reduces risk of trafficker infiltration.</div>
                      </div>

                      {/* Skills — spec §2.1: taxonomy multi-select + optional free-text for unmatched */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                          Skills <span style={{ color: COLOR }}>*</span>
                          <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400, marginLeft: 6 }}>— pick from the taxonomy (max 10)</span>
                        </label>

                        {/* Selected skill chips */}
                        {(skills.length > 0 || proposedSkills.length > 0) && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                            {skills.map(s => (
                              <span key={s} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 20, background: `${COLOR}20`, border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600 }}>
                                {s}
                                <button onClick={() => toggleSkill(s)} style={{ background: "none", border: "none", color: COLOR, cursor: "pointer", padding: 0, lineHeight: 1 }}><X size={11} /></button>
                              </span>
                            ))}
                            {proposedSkills.map(s => (
                              <span key={s} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 20, background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)", fontSize: 12, color: "#FBBF24", fontWeight: 600 }}>
                                {s} <span style={{ fontSize: 10, opacity: 0.7 }}>✎</span>
                                <button onClick={() => setProposed(prev => prev.filter(x => x !== s))} style={{ background: "none", border: "none", color: "#FBBF24", cursor: "pointer", padding: 0, lineHeight: 1 }}><X size={11} /></button>
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Taxonomy accordion */}
                        {canAddMore && (
                          <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, overflow: "hidden", marginBottom: 10 }}>
                            {Object.entries(SKILL_TAXONOMY).map(([category, categorySkills]) => (
                              <div key={category}>
                                <button
                                  onClick={() => setOpenCategory(openCategory === category ? null : category)}
                                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: openCategory === category ? `${COLOR}10` : "rgba(255,255,255,0.02)", border: "none", borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer", color: openCategory === category ? COLOR : "#9CA3AF", fontSize: 13, fontWeight: 600 }}
                                >
                                  <span>{category}</span>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    {categorySkills.filter(s => skills.includes(s)).length > 0 && (
                                      <span style={{ fontSize: 11, background: `${COLOR}25`, color: COLOR, borderRadius: 10, padding: "1px 7px", fontWeight: 700 }}>
                                        {categorySkills.filter(s => skills.includes(s)).length} selected
                                      </span>
                                    )}
                                    <ChevronDown size={14} style={{ transform: openCategory === category ? "rotate(180deg)" : "none", transition: "transform 0.15s" }} />
                                  </div>
                                </button>
                                {openCategory === category && (
                                  <div style={{ padding: "10px 14px", display: "flex", flexWrap: "wrap", gap: 7, background: "rgba(255,255,255,0.01)" }}>
                                    {categorySkills.map(s => {
                                      const selected = skills.includes(s);
                                      return (
                                        <button
                                          key={s}
                                          onClick={() => { if (canAddMore || selected) toggleSkill(s); }}
                                          style={{ padding: "4px 12px", borderRadius: 20, background: selected ? `${COLOR}25` : "rgba(255,255,255,0.04)", border: `1px solid ${selected ? COLOR + "60" : "rgba(255,255,255,0.08)"}`, color: selected ? COLOR : "#9CA3AF", fontSize: 12, fontWeight: selected ? 700 : 400, cursor: canAddMore || selected ? "pointer" : "default", opacity: !canAddMore && !selected ? 0.4 : 1 }}
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

                        {/* Free-text fallback for unmatched skills */}
                        {canAddMore && (
                          <div>
                            <div style={{ fontSize: 11, color: "#4B5563", marginBottom: 6 }}>Don't see what you need? Add free-text skills (comma or newline separated — each ≤ 40 chars):</div>
                            <div style={{ display: "flex", gap: 8 }}>
                              <input
                                value={freeText}
                                onChange={e => setFreeText(e.target.value)}
                                onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addProposed(); } }}
                                placeholder="e.g. Tie-dye, Beekeeping, Kintsugi…"
                                style={{ flex: 1, padding: "8px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "#E8EAF0", outline: "none" }}
                              />
                              <button onClick={addProposed} style={{ padding: "8px 14px", borderRadius: 8, background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)", color: "#FBBF24", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>Add</button>
                            </div>
                            <div style={{ fontSize: 11, color: "#4B5563", marginTop: 4 }}>Yellow chips = proposed skills — admin can promote them to the taxonomy later.</div>
                          </div>
                        )}

                        {!canAddMore && (
                          <div style={{ fontSize: 11, color: "#6B7280", padding: "6px 0" }}>Maximum 10 skills reached.</div>
                        )}

                        <div style={{ fontSize: 11, color: "#4B5563", marginTop: 6 }}>{allSkillCount}/10 skills added</div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={displayName.trim().length < 2 || allSkillCount === 0}
                        style={{ padding: "14px", borderRadius: 12, background: (displayName.trim().length >= 2 && allSkillCount > 0) ? COLOR : "rgba(255,255,255,0.05)", border: "none", color: (displayName.trim().length >= 2 && allSkillCount > 0) ? "#fff" : "#4B5563", fontSize: 15, fontWeight: 700, cursor: (displayName.trim().length >= 2 && allSkillCount > 0) ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                        <Send size={16} /> Submit Nomination · earn points on acceptance
                      </button>
                    </div>
                  </div>

                  {/* Sidebar: Why this works + active mission */}
                  <div style={{ width: 260, flexShrink: 0 }}>
                    <div style={{ padding: "18px", borderRadius: 14, background: `${COLOR}08`, border: `1px solid ${COLOR}20`, marginBottom: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: COLOR, marginBottom: 12 }}>Why this works</div>
                      {[
                        { icon: "🧩", text: "You nominate someone you believe may be a survivor — certainty not required" },
                        { icon: "🔗", text: "Quora profile = social proof, reducing trafficker infiltration risk" },
                        { icon: "⚡", text: "Skills from the taxonomy populate the Directory so we can trade and build our own economy" },
                        { icon: "🏆", text: "Points are granted on admin acceptance — taxonomy skills earn more" },
                      ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                          <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                          <span style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", marginBottom: 8 }}>🎯 Active Mission</div>
                      <div style={{ fontSize: 13, color: "#E8EAF0", marginBottom: 8, lineHeight: 1.4 }}>Find 3 survivors with coding skills</div>
                      <div style={{ height: 5, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden", marginBottom: 4 }}>
                        <div style={{ height: "100%", background: COLOR, width: "67%" }} />
                      </div>
                      <div style={{ fontSize: 11, color: "#6B7280" }}>2/3 · 150 pts on completion</div>
                    </div>
                  </div>
                </div>
              )
            )}

            {/* LEADERBOARD TAB — spec §3.2: accepted_points DESC, first_match_count DESC tie-break */}
            {tab === "leaderboard" && (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>Scout Leaderboard</div>
                <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 4 }}>Ranked by accepted points · tie-break: first-match count, then earliest submission</div>
                <div style={{ fontSize: 12, color: "#4B5563", marginBottom: 20 }}>Pending points (⏳) convert to accepted points after admin review.</div>
                <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
                  {[
                    { label: "Found this week", value: "247", icon: Search, color: COLOR },
                    { label: "Skills mapped",   value: "1,482", icon: Zap, color: "#22C55E" },
                    { label: "Scouts active",   value: "63", icon: Users, color: "#F59E0B" },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} style={{ flex: 1, padding: "16px 18px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${color}20` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}><Icon size={14} style={{ color }} /><span style={{ fontSize: 11, color: "#6B7280" }}>{label}</span></div>
                      <div style={{ fontSize: 24, fontWeight: 800, color }}>{value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {LEADERBOARD.map((p) => (
                    <div key={p.rank} style={{ padding: "16px 20px", borderRadius: 14, background: p.isMe ? `${COLOR}12` : "rgba(255,255,255,0.02)", border: `1px solid ${p.isMe ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: p.rank <= 3 ? `${["#F59E0B","#9CA3AF","#CD7C2F"][p.rank-1]}20` : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: p.rank <= 3 ? ["#F59E0B","#9CA3AF","#CD7C2F"][p.rank-1] : "#6B7280", flexShrink: 0 }}>
                        {p.rank <= 3 ? ["🥇","🥈","🥉"][p.rank-1] : `#${p.rank}`}
                      </div>
                      <Avatar style={{ width: 40, height: 40 }}><AvatarFallback style={{ background: `${COLOR}25`, color: COLOR, fontSize: 15, fontWeight: 800 }}>{p.avatar}</AvatarFallback></Avatar>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: p.isMe ? COLOR : "#F9FAFB" }}>{p.name}{p.isMe ? " (You)" : ""}</div>
                        <div style={{ fontSize: 12, color: "#6B7280" }}>{p.verified} accepted · {p.firstMatchCount} first-match bonus{p.firstMatchCount > 1 ? "es" : ""}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 18, fontWeight: 800, color: COLOR }}>{p.pts} pts</div>
                        {p.pendingPts > 0 && (
                          <div style={{ fontSize: 11, color: "#F59E0B" }}>+{p.pendingPts} ⏳ pending</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* MISSIONS TAB */}
            {tab === "missions" && (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>Active Missions</div>
                <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>Complete missions to earn bonus points and unlock badges</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {MISSIONS.map(m => (
                    <div key={m.id} style={{ padding: "20px 24px", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: `1px solid ${m.status === "locked" ? "rgba(255,255,255,0.06)" : m.color + "35"}`, opacity: m.status === "locked" ? 0.6 : 1 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB" }}>{m.title}</div>
                            {m.status === "locked" && <Lock size={14} style={{ color: "#4B5563" }} />}
                          </div>
                          <div style={{ marginBottom: 10 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4, color: "#6B7280" }}>
                              <span>{m.progress}/{m.goal} complete</span>
                              <span style={{ color: m.color, fontWeight: 700 }}>+{m.reward} pts</span>
                            </div>
                            <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                              <div style={{ height: "100%", background: m.color, borderRadius: 3, width: `${Math.min(100,(m.progress/m.goal)*100)}%` }} />
                            </div>
                          </div>
                        </div>
                        <button onClick={() => setTab("scout")} disabled={m.status === "locked"} style={{ padding: "10px 20px", borderRadius: 10, background: m.status === "locked" ? "rgba(255,255,255,0.04)" : m.color, border: "none", color: m.status === "locked" ? "#4B5563" : "#fff", fontSize: 13, fontWeight: 700, cursor: m.status === "locked" ? "default" : "pointer" }}>
                          {m.status === "locked" ? "Locked" : "Scout Now"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* MY FINDS TAB */}
            {tab === "my-finds" && (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", marginBottom: 4 }}>My Finds</div>
                <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>People you've nominated · display names only for privacy</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {MY_FINDS.map((f, i) => (
                    <div key={i} style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${f.status === "hidden_gem" ? COLOR + "40" : "rgba(255,255,255,0.06)"}`, display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <Avatar style={{ width: 40, height: 40 }}><AvatarFallback style={{ background: `${COLOR}20`, color: COLOR, fontSize: 14, fontWeight: 700 }}>{f.name.split(" ").map(n => n[0]).join("")}</AvatarFallback></Avatar>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#F9FAFB" }}>{f.name}</div>
                          <div style={{ padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700, background: f.status === "verified" ? "#22C55E20" : f.status === "hidden_gem" ? `${COLOR}20` : "rgba(255,165,0,0.15)", color: f.status === "verified" ? "#22C55E" : f.status === "hidden_gem" ? COLOR : "#F59E0B", border: `1px solid ${f.status === "verified" ? "#22C55E40" : f.status === "hidden_gem" ? COLOR+"40" : "rgba(255,165,0,0.3)"}` }}>
                            {f.status === "verified" ? "✓ Accepted" : f.status === "hidden_gem" ? "💎 Rare Skill" : "⏳ Pending"}
                          </div>
                          {f.quora && <span style={{ fontSize: 11, color: "#4B5563" }}>Quora ✓</span>}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {f.skills.map(s => (
                            <span key={s} style={{ padding: "2px 8px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 12, color: "#9CA3AF" }}>{s}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "#4B5563", flexShrink: 0 }}>{f.date}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

          </div>
        </ScrollArea>
      </div>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: "1px solid rgba(255,255,255,0.06)", background: "#0D0F14", padding: "20px 16px", flexShrink: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Your Scout Stats</div>
        <div style={{ padding: "16px", borderRadius: 14, background: `${COLOR}08`, border: `1px solid ${COLOR}20`, marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {[{ l: "Accepted", v: "16" }, { l: "Pending ⏳", v: "3" }, { l: "Rank", v: "#4" }].map(({ l, v }) => (
              <div key={l} style={{ flex: 1, textAlign: "center", padding: "10px 6px", borderRadius: 10, background: "rgba(255,255,255,0.04)" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: COLOR }}>{v}</div>
                <div style={{ fontSize: 10, color: "#6B7280" }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#6B7280" }}>💎 3 rare talent finds</div>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>Badges Earned</div>
        {BADGES.filter(b => b.earned).map(b => (
          <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: `1px solid ${COLOR}15`, marginBottom: 6 }}>
            <div style={{ fontSize: 20 }}>{b.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: "#E8EAF0" }}>{b.name}</div>
              <div style={{ fontSize: 11, color: "#4B5563" }}>{b.desc}</div>
            </div>
          </div>
        ))}
        {/* Locked badges */}
        {BADGES.filter(b => !b.earned).map(b => (
          <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", marginBottom: 6, opacity: 0.5 }}>
            <Lock size={14} style={{ color: "#4B5563" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: "#6B7280" }}>{b.name}</div>
              <div style={{ fontSize: 11, color: "#374151" }}>{b.desc}</div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 8 }}>Network impact</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>
            Your 16 accepted nominees have posted <span style={{ color: COLOR, fontWeight: 700 }}>34 services</span> and completed <span style={{ color: "#22C55E", fontWeight: 700 }}>12 trades</span> within the economy.
          </div>
        </div>
      </aside>
    </div>
  );
}
