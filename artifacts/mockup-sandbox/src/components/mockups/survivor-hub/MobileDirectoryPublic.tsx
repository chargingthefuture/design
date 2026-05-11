// STATE: Unauthenticated — visitor with no session
// Spec §2.4: Skills Hunt reward card + "Submit a community profile" CTA on Directory public page
import { useState } from "react";
import { BookOpen, Lock, Star, Search, X, ExternalLink, Send } from "lucide-react";

const bg = "#0F1117", COLOR = "#3B82F6", HUNT_COLOR = "#A855F7";

export function MobileDirectoryPublic() {
  const [showModal, setShowModal] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [quora, setQuora] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const BIO_MAX = 280;

  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>

      <div style={{ padding: "20px 20px 14px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <BookOpen size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Directory</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>47,000+ verified profiles</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Therapists, housing navigators, legal advocates, and more — searchable by location and specialty.</p>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      {/* ── Skills Hunt pinned reward card ─────────────────────────────── */}
      {/* Spec §2.4: primary entry point for Skills Hunt submissions */}
      <div style={{ margin: "0 16px 16px", padding: "14px 16px", borderRadius: 14, background: `linear-gradient(135deg, ${HUNT_COLOR}12 0%, rgba(59,130,246,0.05) 100%)`, border: `1px solid ${HUNT_COLOR}30` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: `${HUNT_COLOR}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={14} style={{ color: HUNT_COLOR }} />
          </div>
          <div style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB" }}>Skills Hunt</div>
          <span style={{ marginLeft: "auto", fontSize: 10, background: "#22C55E20", color: "#22C55E", border: "1px solid #22C55E35", borderRadius: 10, padding: "2px 8px", fontWeight: 700 }}>Active</span>
        </div>
        <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5, marginBottom: 10 }}>
          Know a survivor? Submit their public Quora profile and help grow the Directory. Earn points &amp; badges.
        </div>
        <div style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: 11, color: "#6B7280" }}>
          <span>🔍 <strong style={{ color: "#E8EAF0" }}>247</strong> this week</span>
          <span>💎 <strong style={{ color: HUNT_COLOR }}>Rare skills 2×</strong></span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{ width: "100%", padding: "11px", borderRadius: 10, background: HUNT_COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
        >
          Submit a community profile
        </button>
      </div>
      {/* ─────────────────────────────────────────────────────────────── */}

      <div style={{ flex: 1, padding: "0 16px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { name: "Maria G.", role: "Trauma Therapist",   r: 4.9, community: false },
            { name: "James T.", role: "Housing Navigator",  r: 4.8, community: false },
            { name: "Priya S.", role: "Legal Advocate",     r: 5.0, community: false },
            { name: "Amara O.", role: "Employment Coach",   r: 4.7, community: true  },
          ].map((p, i) => (
            <div key={i} style={{ borderRadius: 12, border: `1px solid ${p.community ? HUNT_COLOR + "30" : "rgba(255,255,255,0.07)"}`, padding: "12px 14px", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: (p.community ? HUNT_COLOR : COLOR) + "30" }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                  {p.community && <span style={{ fontSize: 10, background: `${HUNT_COLOR}20`, color: HUNT_COLOR, borderRadius: 5, padding: "1px 5px", fontWeight: 700 }}>Community</span>}
                </div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>{p.role}</div>
                <div style={{ display: "flex", gap: 4, marginTop: 3, alignItems: "center" }}>
                  <Star size={10} fill="#F59E0B" color="#F59E0B" />
                  <span style={{ fontSize: 11 }}>{p.r}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to find providers</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>

      {/* ── Submission modal ───────────────────────────────────────────── */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)", display: "flex", alignItems: "flex-end", zIndex: 100 }}>
          <div style={{ width: "100%", background: "#15181F", border: `1px solid ${HUNT_COLOR}30`, borderRadius: "20px 20px 0 0", padding: "24px 20px 40px", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB" }}>Submit a community profile</div>
              <button onClick={() => { setShowModal(false); setSubmitted(false); }} style={{ background: "none", border: "none", color: "#6B7280", cursor: "pointer" }}><X size={18} /></button>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>✅</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#F9FAFB", marginBottom: 8 }}>Profile submitted!</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                  Thank you for growing the network. Join the Hub to track your submission and earn points.
                </div>
                <button style={{ width: "100%", padding: "13px", borderRadius: 12, background: HUNT_COLOR, border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Join to earn points</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.5 }}>
                  Think of someone you believe may be a survivor — no certainty needed. Quora provides social proof. Skills are added from our taxonomy when you join.
                </div>

                <div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, marginBottom: 5 }}>
                    Display Name <span style={{ color: HUNT_COLOR }}>*</span>
                    <span style={{ color: "#4B5563", fontWeight: 400 }}> · letters & spaces, 2–100 chars</span>
                  </div>
                  <input value={displayName} onChange={e => setDisplayName(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 100))} placeholder="e.g. Amara Williams" style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${displayName.length >= 2 ? HUNT_COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 14, color: "#E8EAF0", outline: "none", boxSizing: "border-box" }} />
                </div>

                <div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, marginBottom: 5 }}>Bio <span style={{ color: "#4B5563", fontWeight: 400 }}>(optional)</span></div>
                  <textarea value={bio} onChange={e => setBio(e.target.value.slice(0, BIO_MAX))} rows={2} placeholder="One sentence about who they are…" style={{ width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${bio ? HUNT_COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, fontSize: 13, color: "#E8EAF0", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                  <div style={{ fontSize: 10, color: bio.length > 240 ? "#F59E0B" : "#4B5563", textAlign: "right" }}>{bio.length}/{BIO_MAX}</div>
                </div>

                <div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, marginBottom: 5 }}>Quora Profile URL <span style={{ color: "#4B5563", fontWeight: 400 }}>(social proof)</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: `1px solid ${quora ? HUNT_COLOR + "50" : "rgba(255,255,255,0.1)"}`, borderRadius: 10 }}>
                    <ExternalLink size={13} style={{ color: "#6B7280" }} />
                    <input value={quora} onChange={e => setQuora(e.target.value)} placeholder="quora.com/profile/..." style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: "#E8EAF0" }} />
                  </div>
                </div>

                <div style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", fontSize: 11, color: "#6B7280", lineHeight: 1.5 }}>
                  📌 Skills are picked from our verified taxonomy when you join — keeping profiles clean and matchable.
                </div>

                <button
                  onClick={() => { if (displayName.trim().length >= 2) setSubmitted(true); }}
                  disabled={displayName.trim().length < 2}
                  style={{ padding: "14px", borderRadius: 12, background: displayName.trim().length >= 2 ? HUNT_COLOR : "rgba(255,255,255,0.06)", border: "none", color: displayName.trim().length >= 2 ? "#fff" : "#4B5563", fontSize: 15, fontWeight: 700, cursor: displayName.trim().length >= 2 ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                >
                  <Send size={16} /> Submit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
