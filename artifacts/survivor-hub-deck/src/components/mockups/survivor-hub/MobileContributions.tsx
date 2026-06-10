// design-sync
import { useState } from "react";
import {
  Heart, DollarSign, MessageSquare, Github, Clock,
  CheckCircle, Gift, AlertCircle, Home, Layers, User,
} from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";

const GOALS = [
  { label: "Funding",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
  { label: "Quora",    current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
  { label: "Stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
];

const HISTORY = [
  { id: 1, label: "Gift card (Amazon $25)", status: "confirmed",     statusLabel: "Confirmed",          credits: 250, date: "May 12" },
  { id: 2, label: "Quora comment",          status: "pending",       statusLabel: "Waiting for review", credits: null, date: "Jun 1" },
];

type Path = "gift_card" | "quora" | "github" | null;
type CardType = "Amazon" | "Apple" | "Denny's";
type Tab = "drive" | "contribute" | "history";

export function MobileContributions() {
  const [tab, setTab] = useState<Tab>("contribute");
  const [activePath, setActivePath] = useState<Path>(null);
  const [cardType, setCardType] = useState<CardType>("Amazon");
  const [cardValue, setCardValue] = useState("");
  const [signalContact, setSignalContact] = useState("");
  const [quoraUrl, setQuoraUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={13} color="#fff" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: text }}>Contributions</span>
        </div>
        <div style={{ fontSize: 12, color: subtle }}>Community support drive · Spring 2026</div>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        {([
          { key: "drive" as Tab, label: "Drive" },
          { key: "contribute" as Tab, label: "Contribute" },
          { key: "history" as Tab, label: "My history" },
        ]).map(({ key, label }) => (
          <button key={key} onClick={() => setTab(key)} style={{ flex: 1, padding: "10px 0", background: "transparent", border: "none", cursor: "pointer", fontSize: 13, fontWeight: tab === key ? 700 : 400, color: tab === key ? COLOR : subtle, borderBottom: tab === key ? `2px solid ${COLOR}` : "2px solid transparent" }}>
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>

        {/* Drive tab */}
        {tab === "drive" && (
          <>
            <p style={{ fontSize: 13, color: subtle, lineHeight: 1.7, margin: "0 0 16px" }}>
              If everyone who's able gave a little, the platform's costs would be covered — and it stays free for everyone.
            </p>
            {GOALS.map(({ label, current, target, unit, Icon, color }) => {
              const pct = Math.min(Math.round((current / target) * 100), 100);
              return (
                <div key={label} style={{ background: surface, borderRadius: 10, padding: "12px 14px", border: `1px solid ${border}`, marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <Icon size={13} color={color} />
                      <span style={{ fontSize: 13, color: subtle }}>{label}</span>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color }}>{unit}{current.toLocaleString()} / {unit}{target.toLocaleString()}</span>
                  </div>
                  <div style={{ height: 6, background: border, borderRadius: 99 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: 11, color: subtle, marginTop: 5 }}>{pct}% toward goal</div>
                </div>
              );
            })}
          </>
        )}

        {/* Contribute tab */}
        {tab === "contribute" && (
          <>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 12px", background: `${COLOR}08`, borderRadius: 8, border: `1px solid ${COLOR}20`, marginBottom: 16 }}>
              <AlertCircle size={13} color={COLOR} style={{ flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>Confirmed contributions earn Service Credits as a thank-you. Credits can't be turned back into cash.</span>
            </div>

            {([
              { key: "gift_card" as Path, Icon: Gift,           label: "Gift card",     sub: "Amazon, Apple, or Denny's", credits: "10 SC per dollar" },
              { key: "quora"    as Path, Icon: MessageSquare,   label: "Quora comment", sub: "Comment on a Quora post",   credits: "50 SC" },
              { key: "github"   as Path, Icon: Github,          label: "GitHub star",   sub: "Star our repository",       credits: "50 SC" },
            ]).map(({ key, Icon, label, sub, credits }) => (
              <div key={key!}>
                <div onClick={() => setActivePath(activePath === key ? null : key)} style={{ background: activePath === key ? `${COLOR}10` : surface, borderRadius: 10, padding: "14px", border: `1px solid ${activePath === key ? COLOR : border}`, marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: activePath === key ? `${COLOR}20` : border, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={14} color={activePath === key ? COLOR : subtle} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: activePath === key ? COLOR : text }}>{label}</span>
                  </div>
                  <div style={{ fontSize: 12, color: subtle }}>{sub} · <span style={{ color: COLOR, fontWeight: 500 }}>+{credits}</span></div>
                </div>

                {/* Gift card form */}
                {activePath === "gift_card" && key === "gift_card" && (
                  <div style={{ background: surface, borderRadius: 10, padding: "14px", border: `1px solid ${border}`, marginBottom: 8 }}>
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 12, color: subtle, marginBottom: 7 }}>Card type</div>
                      <div style={{ display: "flex", gap: 7 }}>
                        {(["Amazon", "Apple", "Denny's"] as CardType[]).map(t => (
                          <button key={t} onClick={() => setCardType(t)} style={{ flex: 1, padding: "6px 0", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 500, background: cardType === t ? COLOR : border, color: cardType === t ? "#fff" : subtle }}>{t}</button>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 5 }}>Value (USD, max $500)</label>
                      <input value={cardValue} onChange={e => setCardValue(e.target.value)} placeholder="e.g. 25" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 5 }}>Signal URL or phone <span style={{ color: "#EF4444" }}>*</span></label>
                      <input value={signalContact} onChange={e => setSignalContact(e.target.value)} placeholder="signal.me/+1… or +1 555-…" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
                      <div style={{ fontSize: 11, color: subtle, marginTop: 4 }}>So we can match your card to your account.</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                      <button onClick={() => setActivePath(null)} style={{ padding: "10px 16px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>Not now</button>
                    </div>
                  </div>
                )}

                {/* Quora form */}
                {activePath === "quora" && key === "quora" && (
                  <div style={{ background: surface, borderRadius: 10, padding: "14px", border: `1px solid ${border}`, marginBottom: 8 }}>
                    <p style={{ fontSize: 13, color: subtle, margin: "0 0 12px", lineHeight: 1.6 }}>Leave a comment on a Quora post. Paste the URL if you have it — if not, that's fine, we'll find it.</p>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 5 }}>Quora post URL (optional)</label>
                      <input value={quoraUrl} onChange={e => setQuoraUrl(e.target.value)} placeholder="https://www.quora.com/…" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                      <button onClick={() => setActivePath(null)} style={{ padding: "10px 16px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>Not now</button>
                    </div>
                  </div>
                )}

                {/* GitHub form */}
                {activePath === "github" && key === "github" && (
                  <div style={{ background: surface, borderRadius: 10, padding: "14px", border: `1px solid ${border}`, marginBottom: 8 }}>
                    <p style={{ fontSize: 13, color: subtle, margin: "0 0 12px", lineHeight: 1.6 }}>Star our GitHub repository. If you'd like to share your profile so we can confirm, paste it — no obligation.</p>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 5 }}>GitHub profile URL (optional)</label>
                      <input value={githubUrl} onChange={e => setGithubUrl(e.target.value)} placeholder="https://github.com/your-username" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                      <button onClick={() => setActivePath(null)} style={{ padding: "10px 16px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>Not now</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* History tab */}
        {tab === "history" && (
          <>
            {HISTORY.map(item => {
              const sc = item.status === "confirmed" ? "#22C55E" : item.status === "pending" ? "#F59E0B" : subtle;
              return (
                <div key={item.id} style={{ background: surface, borderRadius: 10, padding: "12px 14px", border: `1px solid ${border}`, marginBottom: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: text, marginBottom: 6 }}>{item.label}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: item.credits != null ? 6 : 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: sc, background: `${sc}15`, padding: "1px 8px", borderRadius: 20 }}>{item.statusLabel}</span>
                    <span style={{ fontSize: 11, color: subtle }}>{item.date}</span>
                  </div>
                  {item.credits != null && <div style={{ fontSize: 12, color: COLOR, fontWeight: 600 }}>+{item.credits} SC received</div>}
                </div>
              );
            })}
            <div style={{ padding: "12px", background: `${COLOR}08`, borderRadius: 9, border: `1px solid ${COLOR}20`, marginTop: 6 }}>
              <div style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>Contributions are private between you and the platform owner. No public recognition or donor lists.</div>
            </div>
          </>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {[
          { Icon: Home,   label: "Hub",      active: false },
          { Icon: Heart,  label: "Support",  active: true  },
          { Icon: Layers, label: "Apps",     active: false },
          { Icon: User,   label: "Profile",  active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: active ? COLOR : subtle }} />
            <span style={{ fontSize: 9, fontWeight: active ? 700 : 400, color: active ? COLOR : subtle }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
