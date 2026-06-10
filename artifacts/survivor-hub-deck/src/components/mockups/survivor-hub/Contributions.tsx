// design-sync
import { useState } from "react";
import {
  Heart, DollarSign, MessageSquare, Star, Clock, CheckCircle,
  ChevronRight, ArrowLeft, Gift, Github, X,
  AlertCircle,
} from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";
const muted   = "#374151";

const DRIVE = {
  title: "Spring 2026 Infrastructure Drive",
  blurb: "If every member who can give a little does, the platform's costs are covered — and it stays free for everyone.",
  goals: [
    { label: "Funding raised",  current: 1340, target: 2400, unit: "$", Icon: DollarSign,    color: "#22C55E" },
    { label: "Quora comments",  current: 87,   target: 200,  unit: "",  Icon: MessageSquare, color: "#0EA5E9" },
    { label: "GitHub stars",    current: 234,  target: 500,  unit: "",  Icon: Github,        color: "#A855F7" },
  ],
};

const HISTORY = [
  { id: 1, kind: "gift_card", kindLabel: "Gift card (Amazon $25)", status: "confirmed",     statusLabel: "Confirmed",          credits: 250, date: "May 12" },
  { id: 2, kind: "quora",     kindLabel: "Quora comment",          status: "pending",       statusLabel: "Waiting for review", credits: null, date: "Jun 1" },
  { id: 3, kind: "github",    kindLabel: "GitHub star",            status: "not_confirmed", statusLabel: "Not matched",        credits: null, date: "Jun 5" },
];

type Path = "gift_card" | "quora" | "github" | null;
type CardType = "Amazon" | "Apple" | "Denny's";

const statusColor = (s: string) =>
  s === "confirmed" ? "#22C55E" : s === "pending" ? "#F59E0B" : subtle;

export function Contributions() {
  const [activePath, setActivePath] = useState<Path>(null);
  const [cardType, setCardType] = useState<CardType>("Amazon");
  const [cardValue, setCardValue] = useState("");
  const [signalContact, setSignalContact] = useState("");
  const [quoraUrl, setQuoraUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Left sidebar */}
      <div style={{ width: 200, background: surface, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "18px 14px 14px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: text }}>Contributions</span>
          </div>
          <div style={{ fontSize: 11, color: subtle }}>Community support drive</div>
        </div>
        <nav style={{ padding: "10px 8px", flex: 1 }}>
          {[
            { label: "Drive progress", active: true },
            { label: "Contribute", active: false },
            { label: "My contributions", active: false },
          ].map(({ label, active }) => (
            <div key={label} style={{ padding: "8px 10px", borderRadius: 7, marginBottom: 2, fontSize: 13, cursor: "pointer", background: active ? `${COLOR}18` : "transparent", color: active ? COLOR : subtle, fontWeight: active ? 600 : 400, borderLeft: active ? `3px solid ${COLOR}` : "3px solid transparent" }}>
              {label}
            </div>
          ))}
        </nav>
        <div style={{ padding: "0 10px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", borderRadius: 7, fontSize: 12, color: subtle, cursor: "pointer" }}>
            <ArrowLeft size={13} /> Back to Hub
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
        {/* Drive progress */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: text }}>{DRIVE.title}</h1>
          </div>
          <p style={{ margin: "0 0 18px", fontSize: 13, color: subtle, lineHeight: 1.7, maxWidth: 620 }}>{DRIVE.blurb}</p>
          <div style={{ display: "flex", gap: 14 }}>
            {DRIVE.goals.map(({ label, current, target, unit, Icon, color }) => {
              const pct = Math.min(Math.round((current / target) * 100), 100);
              return (
                <div key={label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                    <Icon size={14} color={color} />
                    <span style={{ fontSize: 12, color: subtle }}>{label}</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, color, marginBottom: 8 }}>
                    {unit}{current.toLocaleString()} <span style={{ fontSize: 12, fontWeight: 400, color: subtle }}>/ {unit}{target.toLocaleString()}</span>
                  </div>
                  <div style={{ height: 6, background: border, borderRadius: 99 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: 11, color: subtle, marginTop: 5 }}>{pct}% toward goal</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contribution paths */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 600, color: text }}>How would you like to help?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
            {([
              { key: "gift_card" as Path, Icon: Gift,           label: "Gift card",      sub: "Amazon, Apple, or Denny's", credits: "10 SC per dollar" },
              { key: "quora"    as Path, Icon: MessageSquare,   label: "Quora comment",  sub: "Comment on a Quora post",   credits: "50 SC" },
              { key: "github"   as Path, Icon: Github,          label: "GitHub star",    sub: "Star our repository",       credits: "50 SC" },
            ]).map(({ key, Icon, label, sub, credits }) => (
              <div
                key={key!}
                onClick={() => setActivePath(activePath === key ? null : key)}
                style={{ background: activePath === key ? `${COLOR}10` : surface, borderRadius: 10, padding: "16px", border: `1px solid ${activePath === key ? COLOR : border}`, cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: activePath === key ? `${COLOR}20` : border, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={14} color={activePath === key ? COLOR : subtle} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: activePath === key ? COLOR : text }}>{label}</span>
                </div>
                <div style={{ fontSize: 12, color: subtle, marginBottom: 6 }}>{sub}</div>
                <div style={{ fontSize: 11, color: COLOR, fontWeight: 500 }}>As a thank-you: {credits}</div>
              </div>
            ))}
          </div>

          {/* Credits note */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", background: `${COLOR}08`, borderRadius: 8, border: `1px solid ${COLOR}20`, marginBottom: 20 }}>
            <AlertCircle size={13} color={COLOR} style={{ flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>Confirmed contributions earn Service Credits as a thank-you — 10 SC per dollar for gift cards, and 50 SC for a comment or star. Credits are a thank-you; they can't be turned back into cash.</span>
          </div>

          {/* Gift card form */}
          {activePath === "gift_card" && (
            <div style={{ background: surface, borderRadius: 12, padding: "20px", border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 16 }}>Gift card details</div>
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: subtle, marginBottom: 8 }}>Card type</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {(["Amazon", "Apple", "Denny's"] as CardType[]).map(type => (
                    <button key={type} onClick={() => setCardType(type)} style={{ padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 500, background: cardType === type ? COLOR : border, color: cardType === type ? "#fff" : subtle }}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 6 }}>Card value (USD, max $500)</label>
                <input value={cardValue} onChange={e => setCardValue(e.target.value)} placeholder="e.g. 25" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 6 }}>
                  Your Signal URL or phone number <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input value={signalContact} onChange={e => setSignalContact(e.target.value)} placeholder="signal.me/+1… or +1 555-…" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
                <div style={{ fontSize: 11, color: subtle, marginTop: 5 }}>So we can match your card to your account.</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                <button onClick={() => setActivePath(null)} style={{ padding: "10px 18px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>Not now</button>
              </div>
            </div>
          )}

          {/* Quora form */}
          {activePath === "quora" && (
            <div style={{ background: surface, borderRadius: 12, padding: "20px", border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 8 }}>Quora comment</div>
              <p style={{ fontSize: 13, color: subtle, margin: "0 0 14px", lineHeight: 1.6 }}>Leave a comment on a Quora post in our space. If you have the link, paste it here — if not, that's fine, we'll find it.</p>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 6 }}>Quora post URL (optional)</label>
                <input value={quoraUrl} onChange={e => setQuoraUrl(e.target.value)} placeholder="https://www.quora.com/…" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                <button onClick={() => setActivePath(null)} style={{ padding: "10px 18px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>Not now</button>
              </div>
            </div>
          )}

          {/* GitHub form */}
          {activePath === "github" && (
            <div style={{ background: surface, borderRadius: 12, padding: "20px", border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 8 }}>GitHub star</div>
              <p style={{ fontSize: 13, color: subtle, margin: "0 0 14px", lineHeight: 1.6 }}>Star our repository on GitHub. If you'd like to share your GitHub profile so we can confirm, paste it here — no obligation.</p>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 12, color: subtle, display: "block", marginBottom: 6 }}>GitHub profile URL (optional)</label>
                <input value={githubUrl} onChange={e => setGithubUrl(e.target.value)} placeholder="https://github.com/your-username" style={{ width: "100%", padding: "9px 12px", background: bg, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: text, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                <button onClick={() => setActivePath(null)} style={{ padding: "10px 18px", borderRadius: 8, background: "transparent", border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>Not now</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right panel — history */}
      <div style={{ width: 280, background: surface, borderLeft: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "18px 16px 12px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
          <Clock size={14} color={COLOR} />
          <span style={{ fontSize: 13, fontWeight: 600, color: text }}>My Contributions</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
          {HISTORY.map(item => (
            <div key={item.id} style={{ background: bg, borderRadius: 9, padding: "12px 14px", border: `1px solid ${border}`, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: text }}>{item.kindLabel}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: item.credits != null ? 6 : 0 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: statusColor(item.status), background: `${statusColor(item.status)}15`, padding: "1px 8px", borderRadius: 20 }}>{item.statusLabel}</span>
                <span style={{ fontSize: 11, color: subtle }}>{item.date}</span>
              </div>
              {item.credits != null && (
                <div style={{ fontSize: 12, color: COLOR, fontWeight: 600 }}>+{item.credits} SC received</div>
              )}
            </div>
          ))}
          <div style={{ marginTop: 8, padding: "12px", background: `${COLOR}08`, borderRadius: 9, border: `1px solid ${COLOR}20` }}>
            <div style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>Contributions are private between you and the platform owner. There are no public donor lists or recognition boards.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
