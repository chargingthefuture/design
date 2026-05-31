// design-sync
// STATE: Unauthenticated — public visitor. List is publicly readable; suggesting is gated behind sign-in.
import {
  ListChecks, UserPlus, BadgeCheck, ExternalLink, ShieldCheck,
  Heart, Lock, ChevronRight,
} from "lucide-react";

const BRAND = "#84CC16";
const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const PREVIEW = [
  {
    emoji: "🎧",
    title: "Noise & Verbal Harassment",
    context: "Slurs through the wall, street harassment, or constant noise meant to wear you down.",
    products: [
      { emoji: "🎧", name: "Sony WH-1000XM5", kind: "Over-ear · noise cancelling", note: "“Blocks voices, not just hum — the only thing that quieted the through-wall talking.”", price: "$398", verified: 6 },
      { emoji: "🔇", name: "Loop Quiet 2", kind: "Reusable ear plugs", note: "“Discreet, comfortable enough to sleep in. Takes the edge off.”", price: "$25", verified: 4 },
    ],
  },
  {
    emoji: "🌙",
    title: "Sleep Disruption",
    context: "Noise, light, or hypervigilance keeping you up at night.",
    products: [
      { emoji: "🌑", name: "Manta Sleep Mask", kind: "Blackout eye mask", note: "“Total darkness, zero pressure on the eyes. First full night in months.”", price: "$35", verified: 5 },
    ],
  },
];

export function WhatWorksPublic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter',system-ui", color: text, overflow: "hidden" }}>

      {/* Top bar */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 10, flexShrink: 0, background: "#0D0F14" }}>
        <ListChecks size={18} color={BRAND} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>What Works</span>
        <span style={{ fontSize: 12, color: subtle, marginLeft: 4 }}>· survivor-verified tools</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, color: text, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign In</button>
          <button style={{ padding: "7px 16px", borderRadius: 8, background: BRAND, border: "none", color: "#0A0E06", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
            <UserPlus size={13} /> Create Account
          </button>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
        {/* Hero */}
        <div style={{ padding: "44px 64px 28px", display: "flex", gap: 48, alignItems: "flex-start", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ padding: "4px 14px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 12, color: BRAND, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6, width: "fit-content" }}>
              <BadgeCheck size={13} /> One shared, survivor-verified list
            </span>
            <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              The tools that<br /><span style={{ color: BRAND }}>actually work</span>.
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: "#9CA3AF", maxWidth: 520, lineHeight: 1.7 }}>
              Pick a problem you're facing. Underneath it is a list of specific products a survivor here bought, used, and said helped — each with a direct link to get it. No ads. No affiliates. Nothing sold.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              <button style={{ padding: "13px 28px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <UserPlus size={16} /> Join to suggest items
              </button>
            </div>
          </div>
          <div style={{ width: 260, flexShrink: 0 }}>
            <div style={{ padding: "18px", borderRadius: 16, background: surface, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: BRAND, marginBottom: 14 }}>Why trust this list?</div>
              {[
                { icon: <BadgeCheck size={15} color={BRAND} />, t: "Survivor-verified", d: "Used by a real member who said it helped." },
                { icon: <Heart size={15} color={BRAND} />, t: "No ads or affiliates", d: "Nothing here is sponsored." },
                { icon: <Lock size={15} color={BRAND} />, t: "Anonymous", d: "Suggesting never reveals who you are." },
              ].map(({ icon, t, d }) => (
                <div key={t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: text, marginBottom: 2 }}>{t}</div>
                    <div style={{ fontSize: 11.5, color: subtle, lineHeight: 1.5 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Readable preview */}
        <div style={{ padding: "0 64px 56px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>A look at the list</span>
            <span style={{ fontSize: 12, color: subtle }}>· publicly readable — no account needed to browse</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PREVIEW.map((problem) => (
              <section key={problem.title}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{problem.emoji}</div>
                  <div style={{ flex: 1, paddingTop: 1 }}>
                    <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: text }}>{problem.title}</h2>
                    <div style={{ fontSize: 12.5, color: subtle, lineHeight: 1.5, marginTop: 2 }}>{problem.context}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  {problem.products.map((prod) => (
                    <div key={prod.name} style={{ flex: 1, display: "flex", gap: 12, padding: "14px", borderRadius: 14, background: surface, border: `1px solid ${border}` }}>
                      <div style={{ width: 46, height: 46, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{prod.emoji}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: text }}>{prod.name}</div>
                        <div style={{ fontSize: 11.5, color: subtle }}>{prod.kind}</div>
                        <div style={{ fontSize: 12.5, color: "#C4CAD3", lineHeight: 1.5, marginTop: 6, fontStyle: "italic" }}>{prod.note}</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11.5, color: BRAND, fontWeight: 600 }}>
                            <ShieldCheck size={12} /> {prod.verified} verified
                          </span>
                          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: BRAND, fontWeight: 700, textDecoration: "none" }}>
                            {prod.price} · View <ExternalLink size={11} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Join gate */}
          <div style={{ marginTop: 28, padding: "24px", borderRadius: 16, background: `${BRAND}08`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: text, marginBottom: 4 }}>See every problem — and add what worked for you</div>
              <div style={{ fontSize: 13, color: subtle, lineHeight: 1.6 }}>Create a free, verified account to view the full list and suggest the tools that helped you.</div>
            </div>
            <button style={{ padding: "13px 26px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              Get started <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
