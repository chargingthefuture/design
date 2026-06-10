// design-sync
// STATE: Authenticated + Populated — mobile shared list, by problem
import { useState } from "react";
import {
  ListChecks, ExternalLink, ShieldCheck, Plus, Search, Tag, BadgeCheck, Home,
} from "lucide-react";

const BRAND = "#84CC16";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const PROBLEMS = [
  {
    emoji: "🎧",
    title: "Noise & Verbal Harassment",
    context: "Slurs through the wall, street harassment, or constant noise.",
    products: [
      { emoji: "🎧", name: "Sony WH-1000XM5", kind: "Over-ear · noise cancelling", note: "“Blocks voices, not just hum. Quieted the through-wall talking.”", verified: 6 },
      { emoji: "🔇", name: "Loop Quiet 2", kind: "Reusable ear plugs", note: "“Discreet, comfy enough to sleep in. Takes the edge off.”", verified: 4 },
    ],
  },
  {
    emoji: "🌙",
    title: "Sleep Disruption",
    context: "Noise, light, or hypervigilance keeping you up.",
    products: [
      { emoji: "🌑", name: "Manta Sleep Mask", kind: "Blackout eye mask", note: "“Total darkness, no pressure on the eyes. First full night in months.”", verified: 5 },
    ],
  },
];

export function MobileWhatWorks() {
  const [tab] = useState<"list" | "tags">("list");

  return (
    <div style={{ width: 390, height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: "var(--comic-surface, #0D0F14)", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <ListChecks size={17} color={BRAND} />
          <span style={{ fontSize: 16, fontWeight: 700 }}>What Works</span>
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, color: BRAND, fontWeight: 700, padding: "3px 9px", borderRadius: 20, background: `${BRAND}14`, border: `1px solid ${BRAND}30` }}>
            <BadgeCheck size={11} /> Verified
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 11px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }}>
          <Search size={14} color={subtle} />
          <span style={{ fontSize: 12.5, color: subtle }}>Search tools or problems…</span>
        </div>
      </div>

      {/* Scroll */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "16px" }}>
        {/* Purpose */}
        <div style={{ marginBottom: 18 }}>
          <h1 style={{ margin: "0 0 6px", fontSize: 21, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
            What actually <span style={{ color: BRAND }}>works</span>.
          </h1>
          <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>
            Pick a problem. Underneath are specific tools a survivor here used and said helped — with a direct link to get it.
          </p>
          <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
            {["2 problems", "3 tools", "Survivor-verified"].map((m) => (
              <span key={m} style={{ padding: "4px 9px", borderRadius: 7, background: surface, border: `1px solid ${border}`, fontSize: 11, color: "#9CA3AF", fontWeight: 600 }}>{m}</span>
            ))}
          </div>
        </div>

        {PROBLEMS.map((problem) => (
          <section key={problem.title} style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 11 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{problem.emoji}</div>
              <div style={{ flex: 1, paddingTop: 1 }}>
                <h2 style={{ margin: 0, fontSize: 14.5, fontWeight: 700 }}>{problem.title}</h2>
                <div style={{ fontSize: 11.5, color: subtle, lineHeight: 1.45, marginTop: 2 }}>{problem.context}</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {problem.products.map((prod) => (
                <div key={prod.name} style={{ padding: "13px", borderRadius: 13, background: surface, border: `1px solid ${border}` }}>
                  <div style={{ display: "flex", gap: 11 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21, flexShrink: 0 }}>{prod.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700 }}>{prod.name}</div>
                      <div style={{ fontSize: 11, color: subtle }}>{prod.kind}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#C4CAD3", lineHeight: 1.5, marginTop: 9, fontStyle: "italic" }}>{prod.note}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 11 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: BRAND, fontWeight: 600 }}>
                      <ShieldCheck size={12} /> {prod.verified} survivors verified
                    </span>
                    <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 12px", borderRadius: 8, background: `${BRAND}18`, border: `1px solid ${BRAND}40`, color: BRAND, fontSize: 11.5, fontWeight: 700, textDecoration: "none" }}>
                      View on Amazon <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Suggest CTA */}
      <div style={{ padding: "10px 16px", borderTop: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <button style={{ width: "100%", padding: "11px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
          <Plus size={15} /> Suggest an item
        </button>
      </div>

      {/* Bottom nav */}
      <div style={{ height: 64, background: "var(--comic-surface-alt, #090B0F)", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[
          { icon: <Home size={20} color={subtle} />, label: "Hub", active: false },
          { icon: <ListChecks size={20} color={tab === "list" ? BRAND : subtle} />, label: "What Works", active: true },
          { icon: <Tag size={20} color={subtle} />, label: "Problems", active: false },
        ].map(({ icon, label, active }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            {icon}
            <span style={{ fontSize: 10, color: active ? BRAND : subtle }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
