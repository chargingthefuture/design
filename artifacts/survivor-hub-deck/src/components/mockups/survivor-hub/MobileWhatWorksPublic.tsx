// design-sync
// STATE: Unauthenticated mobile — list readable; suggesting gated behind sign-in
import {
  ListChecks, UserPlus, BadgeCheck, ExternalLink, ShieldCheck, Lock,
} from "lucide-react";

const BRAND = "#84CC16";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const PREVIEW = [
  {
    emoji: "🎧",
    title: "Noise & Verbal Harassment",
    context: "Slurs through the wall, street harassment, or constant noise.",
    products: [
      { emoji: "🎧", name: "Sony WH-1000XM5", kind: "Noise cancelling", note: "“Blocks voices, not just hum.”", verified: 6 },
    ],
  },
  {
    emoji: "🌙",
    title: "Sleep Disruption",
    context: "Noise, light, or hypervigilance keeping you up.",
    products: [
      { emoji: "🌑", name: "Manta Sleep Mask", kind: "Blackout eye mask", note: "“Total darkness, no pressure. First full night in months.”", verified: 5 },
    ],
  },
];

export function MobileWhatWorksPublic() {
  return (
    <div style={{ width: 390, height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: "var(--comic-surface, #0D0F14)", borderBottom: `1px solid ${border}`, flexShrink: 0, display: "flex", alignItems: "center", gap: 8 }}>
        <ListChecks size={17} color={BRAND} />
        <span style={{ fontSize: 16, fontWeight: 700 }}>What Works</span>
        <button style={{ marginLeft: "auto", padding: "6px 13px", borderRadius: 8, background: BRAND, border: "none", color: "#0A0E06", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}>Sign In</button>
      </div>

      {/* Scroll */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "18px 16px" }}>
        <span style={{ padding: "4px 11px", borderRadius: 20, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, fontSize: 11, color: BRAND, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 5 }}>
          <BadgeCheck size={12} /> One shared, survivor-verified list
        </span>
        <h1 style={{ margin: "12px 0 8px", fontSize: 24, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
          The tools that<br /><span style={{ color: BRAND }}>actually work</span>.
        </h1>
        <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF", lineHeight: 1.65 }}>
          Pick a problem you're facing. Underneath is a list of specific products a survivor here used and said helped — each with a direct link. No ads. Nothing sold.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 6, margin: "20px 0 12px" }}>
          <span style={{ fontSize: 12.5, fontWeight: 700 }}>A look at the list</span>
          <span style={{ fontSize: 11, color: subtle }}>· free to browse</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {PREVIEW.map((problem) => (
            <section key={problem.title}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{problem.emoji}</div>
                <div style={{ flex: 1, paddingTop: 1 }}>
                  <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>{problem.title}</h2>
                  <div style={{ fontSize: 11, color: subtle, lineHeight: 1.45, marginTop: 2 }}>{problem.context}</div>
                </div>
              </div>
              {problem.products.map((prod) => (
                <div key={prod.name} style={{ padding: "13px", borderRadius: 13, background: surface, border: `1px solid ${border}` }}>
                  <div style={{ display: "flex", gap: 11 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{prod.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700 }}>{prod.name}</div>
                      <div style={{ fontSize: 11, color: subtle }}>{prod.kind}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#C4CAD3", lineHeight: 1.5, marginTop: 8, fontStyle: "italic" }}>{prod.note}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: BRAND, fontWeight: 600 }}>
                      <ShieldCheck size={12} /> {prod.verified} verified
                    </span>
                    <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11.5, color: BRAND, fontWeight: 700, textDecoration: "none" }}>
                      View <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Gate */}
        <div style={{ marginTop: 20, padding: "18px", borderRadius: 14, background: `${BRAND}08`, border: `1px solid ${BRAND}25`, textAlign: "center" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
            <Lock size={18} color={BRAND} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>See every problem & add yours</div>
          <div style={{ fontSize: 12.5, color: subtle, lineHeight: 1.55, marginBottom: 14 }}>Create a free, verified account to view the full list and suggest what worked for you.</div>
          <button style={{ width: "100%", padding: "12px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <UserPlus size={15} /> Create free account
          </button>
        </div>
      </div>
    </div>
  );
}
