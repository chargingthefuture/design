// STATE: Unauthenticated — visitor with no session
// Spec §2.4: primary Skills Hunt entry point is the Directory public page,
// via a "Submit a community profile" CTA on the pinned reward card.
import { useState } from "react";
import { BookOpen, Users, Star, MapPin, Lock, Search, X, ExternalLink, Send } from "lucide-react";

const bg = "#0F1117", COLOR = "#3B82F6", HUNT_COLOR = "#A855F7";

const PREVIEW = [
  { name: "Maria G.",   role: "Trauma Therapist",   loc: "Houston, TX",  rating: 4.9, community: false },
  { name: "James T.",   role: "Housing Navigator",   loc: "Atlanta, GA",  rating: 4.8, community: false },
  { name: "Amara O.",   role: "Employment Coach",    loc: "Chicago, IL",  rating: 4.7, community: true  },
  { name: "Priya S.",   role: "Legal Advocate",      loc: "New York, NY", rating: 5.0, community: false },
  { name: "Lena H.",    role: "Tech Skills Trainer", loc: "Remote",       rating: 4.9, community: true  },
  { name: "DeShawn W.", role: "Financial Counselor", loc: "Dallas, TX",   rating: 4.6, community: false },
];

// Inline submission modal state (shown over the page when CTA is clicked)
export function DirectoryPublic() {
  const [showModal, setShowModal] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [quora, setQuora] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const BIO_MAX = 280;

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 28px", gap: 10 }}>
        <BookOpen size={18} color={COLOR} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>Directory</span>
        <div style={{ marginLeft: "auto" }}>
          <button style={{ padding: "8px 20px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 64px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 12, color: COLOR, fontWeight: 600 }}>47,000+ verified profiles</span>
          <span style={{ padding: "4px 14px", borderRadius: 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>GetStream chat</span>
        </div>
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800, lineHeight: 1.1 }}>
          Connect with verified<br />
          <span style={{ color: COLOR }}>providers & advocates</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 500 }}>
          47,000 trauma-informed therapists, housing navigators, legal advocates, employment coaches, and more.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
          <button style={{ padding: "14px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Join the Hub — Free
          </button>
          <button style={{ padding: "14px 24px", borderRadius: 10, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
            Learn more
          </button>
        </div>
      </div>

      {/* ── Skills Hunt pinned reward card ──────────────────────────────── */}
      {/* Spec §2.4: reward card on Directory public page with "Submit a community profile" CTA */}
      <div style={{ margin: "0 64px 28px", padding: "20px 24px", borderRadius: 16, background: `linear-gradient(135deg, ${HUNT_COLOR}12 0%, rgba(59,130,246,0.06) 100%)`, border: `1px solid ${HUNT_COLOR}30`, display: "flex", gap: 20, alignItems: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: `${HUNT_COLOR}20`, border: `1px solid ${HUNT_COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Search size={22} style={{ color: HUNT_COLOR }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#F9FAFB" }}>Skills Hunt — Community Reward</div>
            <span style={{ padding: "2px 10px", borderRadius: 20, background: "#22C55E20", border: "1px solid #22C55E35", fontSize: 11, color: "#22C55E", fontWeight: 700 }}>Active Round</span>
          </div>
          <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>
            Know a survivor with skills the community needs? Submit their public Quora profile and help grow the Directory from 60 → 384+ profiles. Earn points, badges, and prizes.
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 8, fontSize: 12, color: "#6B7280" }}>
            <span>🔍 <strong style={{ color: "#E8EAF0" }}>247</strong> submitted this week</span>
            <span>🏆 <strong style={{ color: "#E8EAF0" }}>63</strong> active scouts</span>
            <span>💎 <strong style={{ color: HUNT_COLOR }}>Rare skills earn 2×</strong></span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{ padding: "12px 22px", borderRadius: 12, background: HUNT_COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" }}
        >
          Submit a community profile
        </button>
      </div>
      {/* ───────────────────────────────────────────────────────────────── */}

      {/* Blurred preview grid */}
      <div style={{ padding: "0 64px 64px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, filter: "blur(5px)", pointerEvents: "none", userSelect: "none", opacity: 0.6 }}>
          {PREVIEW.map((p, i) => (
            <div key={i} style={{ borderRadius: 14, border: `1px solid ${p.community ? HUNT_COLOR + "30" : "rgba(255,255,255,0.08)"}`, padding: "16px 18px", background: "rgba(255,255,255,0.03)", display: "flex", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: (p.community ? HUNT_COLOR : COLOR) + "30", flexShrink: 0 }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                  {p.community && <span style={{ fontSize: 10, background: `${HUNT_COLOR}20`, color: HUNT_COLOR, borderRadius: 6, padding: "1px 5px", fontWeight: 700 }}>Community</span>}
                </div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>{p.role}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 6, alignItems: "center" }}>
                  <Star size={11} color="#F59E0B" fill="#F59E0B" />
                  <span style={{ fontSize: 12 }}>{p.rating}</span>
                  <MapPin size={11} color="#6B7280" />
                  <span style={{ fontSize: 12, color: "#6B7280" }}>{p.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lock overlay */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={24} color={COLOR} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#F9FAFB", textAlign: "center" }}>Sign in to browse 47,000 profiles</div>
          <div style={{ fontSize: 13, color: "#6B7280", textAlign: "center", maxWidth: 320 }}>
            Filter by specialty, location, rating, and Service Credit acceptance.
          </div>
          <button style={{ padding: "12px 32px", borderRadius: 10, background: COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Sign in to connect
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ marginTop: "auto", padding: "20px 64px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 40 }}>
        {[
          { label: "Verified profiles",      value: "47,000+" },
          { label: "Community profiles",     value: "384 goal" },
          { label: "Accept Service Credits", value: "68%" },
          { label: "Avg response time",      value: "< 2 hrs" },
        ].map(({ label, value }, i) => (
          <div key={i}>
            <div style={{ fontSize: 20, fontWeight: 800, color: i === 1 ? HUNT_COLOR : COLOR }}>{value}</div>
            <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── Submission modal (overlay) ───────────────────────────────────── */}
      {/* Spec §2.4: modal opens from the reward card CTA */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }}>
          <div style={{ width: "100%", maxWidth: 520, background: "#15181F", border: `1px solid ${HUNT_COLOR}30`, borderRadius: 20, padding: "28px 32px", position: "relative" }}>
            <button onClick={() => { setShowModal(false); setSubmitted(false); }} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "#6B7280", cursor: "pointer" }}><X size={18} /></button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#F9FAFB", marginBottom: 8 }}>Profile submitted!</div>
                <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, marginBottom: 20 }}>
                  Thank you for growing the network. This profile will be reviewed and added to the Directory. Join the Hub to track your submission and earn points.
                </div>
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  <button style={{ padding: "12px 24px", borderRadius: 12, background: HUNT_COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Join to earn points</button>
                  <button onClick={() => { setSubmitted(false); setDisplayName(""); setBio(""); setQuora(""); }} style={{ padding: "12px 20px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#9CA3AF", fontSize: 14, cursor: "pointer" }}>Submit another</button>
                </div>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: `${HUNT_COLOR}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Search size={16} style={{ color: HUNT_COLOR }} />
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#F9FAFB" }}>Submit a community profile</div>
                </div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                  Think of someone you believe may be a survivor — no certainty required. Their Quora profile provides social proof. Skills are selected from our taxonomy when you join.
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {/* Display Name */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                      Display Name <span style={{ color: HUNT_COLOR }}>*</span>
                      <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400, marginLeft: 4 }}>2–100 chars, letters & spaces only</span>
                    </label>
                    <input
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 100))}
                      placeholder="e.g. Amara Williams"
                      style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${displayName.length >= 2 ? HUNT_COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                      Bio <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400 }}>(optional — one sentence)</span>
                    </label>
                    <textarea
                      value={bio}
                      onChange={e => setBio(e.target.value.slice(0, BIO_MAX))}
                      rows={2}
                      placeholder="e.g. Lives in Houston, works in construction…"
                      style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${bio ? HUNT_COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                    <div style={{ fontSize: 11, color: bio.length > 240 ? "#F59E0B" : "#4B5563", textAlign: "right" }}>{bio.length}/{BIO_MAX}</div>
                  </div>

                  {/* Quora */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>
                      Quora Profile URL <span style={{ fontSize: 11, color: "#4B5563", fontWeight: 400 }}>(highly recommended — social proof)</span>
                    </label>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${quora ? HUNT_COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10 }}>
                      <ExternalLink size={14} style={{ color: "#6B7280" }} />
                      <input value={quora} onChange={e => setQuora(e.target.value)} placeholder="https://quora.com/profile/..." style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "#E8EAF0" }} />
                    </div>
                    <div style={{ fontSize: 11, color: "#4B5563", marginTop: 4 }}>Reduces infiltration risk. Skills selection happens after you join.</div>
                  </div>

                  <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
                    📌 Skills are selected from our verified taxonomy when you create an account. This prevents junk data and helps match the community faster.
                  </div>

                  <button
                    onClick={() => { if (displayName.trim().length >= 2) setSubmitted(true); }}
                    disabled={displayName.trim().length < 2}
                    style={{ padding: "14px", borderRadius: 12, background: displayName.trim().length >= 2 ? HUNT_COLOR : "rgba(255,255,255,0.05)", border: "none", color: displayName.trim().length >= 2 ? "#fff" : "#4B5563", fontSize: 15, fontWeight: 700, cursor: displayName.trim().length >= 2 ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                  >
                    <Send size={16} /> Submit Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
