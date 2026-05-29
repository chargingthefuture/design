// design-sync
// STATE: Authenticated + Populated — Quora URL Verification (submitted / in review / approved / rejected)
import { useState } from "react";
import {
  Unlock as UnlockIcon, Bell, Settings, CheckCircle, Clock,
  XCircle, ExternalLink, ChevronRight, Shield, Users, RefreshCw,
} from "lucide-react";

const BRAND = "#10B981";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

type Status = "pending" | "approved" | "rejected";

const STATUS_CONFIG: Record<Status, { icon: typeof CheckCircle; color: string; bg: string; label: string }> = {
  pending: { icon: Clock, color: "#F59E0B", bg: "rgba(245,158,11,0.08)", label: "Pending Review" },
  approved: { icon: CheckCircle, color: BRAND, bg: "rgba(16,185,129,0.08)", label: "Approved" },
  rejected: { icon: XCircle, color: "#EF4444", bg: "rgba(239,68,68,0.08)", label: "Rejected" },
};

export function Unlock({ initialStatus = "pending" }: { initialStatus?: Status }) {
  const [status] = useState<Status>(initialStatus);
  const cfg = STATUS_CONFIG[status];
  const Icon = cfg.icon;

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <UnlockIcon size={20} color={BRAND} />
        </div>
        {[UnlockIcon, Shield, Users].map((Ic, i) => (
          <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? `${BRAND}20` : "transparent", border: i === 0 ? `1px solid ${BRAND}40` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: i === 0 ? BRAND : subtle }}>
            <Ic size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, background: "#0D0F14", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🔓 Unlock Access</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>Verify your Quora profile to unlock full account access</div>
        </div>
        <div style={{ flex: 1, padding: "0 12px" }}>
          <div style={{ padding: "16px", borderRadius: 14, background: `${BRAND}06`, border: `1px solid ${BRAND}15`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <Icon size={16} color={cfg.color} />
              <span style={{ fontSize: 13, fontWeight: 700, color: cfg.color }}>{cfg.label}</span>
            </div>
            <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>
              {status === "pending" && "Your submission is under review. Admin will respond within 24-48 hours."}
              {status === "approved" && "Your Quora profile has been verified. Full access is now unlocked."}
              {status === "rejected" && "Your submission was not approved. See the rejection reason below."}
            </div>
          </div>
          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { label: "Submitted", done: true, time: "May 20, 9:41 AM" },
              { label: "Under Review", done: status !== "pending" || true, time: status === "pending" ? "In progress" : "May 21, 2:00 PM" },
              { label: "Decision", done: status !== "pending", time: status === "pending" ? "Awaiting" : "May 21, 4:10 PM" },
            ].map(({ label, done, time }, i) => (
              <div key={label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: done ? `${BRAND}20` : "rgba(255,255,255,0.05)", border: `2px solid ${done ? BRAND : border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {done && <div style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND }} />}
                  </div>
                  {i < 2 && <div style={{ width: 2, height: 24, background: done ? `${BRAND}30` : border, margin: "2px 0" }} />}
                </div>
                <div style={{ paddingTop: 2, paddingBottom: i < 2 ? 0 : 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: done ? text : subtle }}>{label}</div>
                  <div style={{ fontSize: 10, color: subtle }}>{time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "#0D0F14", flexShrink: 0 }}>
          <UnlockIcon size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>Verification Status</div>
            <div style={{ fontSize: 12, color: subtle }}>Quora profile · account unlock</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: cfg.bg, border: `1px solid ${cfg.color}30`, fontSize: 11, fontWeight: 600, color: cfg.color }}>
            <Icon size={11} /> {cfg.label}
          </div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "40px 64px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Status card */}
            <div style={{ padding: "28px", borderRadius: 18, background: cfg.bg, border: `1px solid ${cfg.color}25` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${cfg.color}15`, border: `1px solid ${cfg.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={24} color={cfg.color} />
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: cfg.color }}>{cfg.label}</div>
                  <div style={{ fontSize: 13, color: subtle }}>
                    {status === "pending" && "Submitted May 20, 2025 · Awaiting admin review"}
                    {status === "approved" && "Reviewed May 21, 2025 · Full access unlocked"}
                    {status === "rejected" && "Reviewed May 21, 2025 · See reason below"}
                  </div>
                </div>
              </div>

              {status === "approved" && (
                <div style={{ padding: "14px", borderRadius: 12, background: `${BRAND}08`, border: `1px solid ${BRAND}20`, marginBottom: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 28 }}>🎉</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: BRAND, marginTop: 6 }}>Welcome to the Survivor Hub!</div>
                  <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>Your profile has been verified. All features are now unlocked.</div>
                  <button style={{ marginTop: 12, padding: "10px 24px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Continue to Hub <ChevronRight size={14} />
                  </button>
                </div>
              )}

              {status === "rejected" && (
                <div style={{ padding: "14px", borderRadius: 12, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", marginBottom: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#EF4444", marginBottom: 4 }}>Rejection reason</div>
                  <div style={{ fontSize: 13, color: text, lineHeight: 1.5 }}>
                    The provided Quora profile URL could not be matched to a legitimate account. Please submit a valid, publicly accessible Quora profile URL.
                  </div>
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
                <ExternalLink size={13} color={subtle} />
                <span style={{ fontSize: 12, color: subtle, flex: 1 }}>https://quora.com/profile/survivor-username</span>
                <a href="#" style={{ fontSize: 12, color: BRAND, textDecoration: "none" }}>View ↗</a>
              </div>
            </div>

            {/* Re-submit option (rejected state) */}
            {status === "rejected" && (
              <div style={{ padding: "20px", borderRadius: 14, background: surface, border: `1px solid ${border}` }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 12 }}>Re-submit with a new URL</div>
                <div style={{ display: "flex", gap: 10 }}>
                  <input placeholder="https://quora.com/profile/…" style={{ flex: 1, padding: "10px 14px", background: bg, border: `1px solid ${border}`, borderRadius: 10, fontSize: 13, color: text, outline: "none" }} />
                  <button style={{ padding: "10px 18px", borderRadius: 10, background: BRAND, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                    <RefreshCw size={13} /> Re-submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>Why Quora?</div>
        <div style={{ padding: "14px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}18`, marginBottom: 16 }}>
          {[
            { icon: "🔗", t: "Real-person proof", d: "Quora activity proves you're a real person, not a bot." },
            { icon: "🛡", t: "Reduces infiltration risk", d: "Helps distinguish genuine community members." },
            { icon: "🌐", t: "Publicly verifiable", d: "Admins can check your profile without contacting you directly." },
          ].map(({ icon, t, d }) => (
            <div key={t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: text, marginBottom: 2 }}>{t}</div>
                <div style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 10 }}>What you unlock</div>
        {["Full Directory access", "Skills Hunt participation", "Service Credits trading", "Plugin marketplace", "GDP contribution"].map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 8px", borderRadius: 7, marginBottom: 4, fontSize: 12 }}>
            <CheckCircle size={12} color={status === "approved" ? BRAND : border} />
            <span style={{ color: status === "approved" ? text : subtle }}>{f}</span>
          </div>
        ))}
      </aside>
    </div>
  );
}
