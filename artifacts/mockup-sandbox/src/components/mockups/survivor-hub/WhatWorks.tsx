// design-sync
// STATE: Authenticated + Populated — the one shared, survivor-verified list of tools, organized by problem
import { useState } from "react";
import {
  ListChecks, ShieldCheck, ExternalLink, ThumbsUp, Plus, Search,
  Bell, Settings, Ban, Lock, Tag, BadgeCheck, ChevronRight,
} from "lucide-react";

const BRAND = "#84CC16";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

type Product = {
  emoji: string;
  name: string;
  kind: string;
  note: string;
  verified: number;
};
type Problem = {
  emoji: string;
  title: string;
  context: string;
  products: Product[];
};

const PROBLEMS: Problem[] = [
  {
    emoji: "🎧",
    title: "Noise & Verbal Harassment",
    context: "Slurs through the wall, street harassment, or constant noise meant to wear you down.",
    products: [
      { emoji: "🎧", name: "Sony WH-1000XM5", kind: "Over-ear · active noise cancelling", note: "“Blocks voices, not just hum. The only thing that quieted the through-wall talking for me.”", verified: 6 },
      { emoji: "🔇", name: "Loop Quiet 2", kind: "Reusable ear plugs", note: "“Discreet and comfortable enough to sleep in. Takes the edge off without total silence.”", verified: 4 },
      { emoji: "🎵", name: "JLab Go Air Pop", kind: "Budget ANC earbuds", note: "“Cheap, pocketable, and good enough to get me through a shift.”", verified: 3 },
    ],
  },
  {
    emoji: "🌙",
    title: "Sleep Disruption",
    context: "Noise, light, or hypervigilance keeping you up at night.",
    products: [
      { emoji: "🌑", name: "Manta Sleep Mask", kind: "Blackout eye mask", note: "“Zero pressure on the eyes, total darkness. First full night of sleep in months.”", verified: 5 },
      { emoji: "🌬️", name: "Yogasleep Dohm", kind: "White noise machine", note: "“A real fan inside, not a loop. Masks footsteps and voices outside the door.”", verified: 4 },
    ],
  },
  {
    emoji: "🚗",
    title: "Vehicle Tampering",
    context: "Worried about hidden trackers or tampering on your car.",
    products: [
      { emoji: "📡", name: "GPS Tracker Detector", kind: "RF bug sweeper", note: "“Found a tracker tucked under my bumper in about ten minutes.”", verified: 3 },
      { emoji: "🛞", name: "Tire Pressure Monitor", kind: "Solar cap sensors (TPMS)", note: "“Catches slow leaks before they strand me somewhere at night.”", verified: 2 },
    ],
  },
];

const TOTAL_TOOLS = PROBLEMS.reduce((n, p) => n + p.products.length, 0);

export function WhatWorks() {
  const [active] = useState(0);

  return (
    <div style={{ display: "flex", height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "var(--comic-surface-alt, #090B0F)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, paddingBottom: 16, gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${BRAND}25`, border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <ListChecks size={20} color={BRAND} />
        </div>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: `${BRAND}20`, border: `1px solid ${BRAND}40`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: BRAND }}>
          <ListChecks size={20} />
        </button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}>
          <Tag size={20} />
        </button>
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${BRAND}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: BRAND }}>S</div>
      </aside>

      {/* Left sidebar — jump nav */}
      <aside style={{ width: 240, background: "var(--comic-surface, #0D0F14)", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>🧰 What Works</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>One shared list of tools that solved a specific problem</div>
        </div>
        <div style={{ flex: 1, padding: "4px 12px", overflowY: "auto" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", padding: "8px 8px 6px" }}>Problems</div>
          {PROBLEMS.map((p, i) => (
            <button key={p.title} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 9, marginBottom: 2, background: i === active ? `${BRAND}14` : "transparent", border: i === active ? `1px solid ${BRAND}30` : "1px solid transparent", cursor: "pointer", textAlign: "left" }}>
              <span style={{ fontSize: 15, flexShrink: 0 }}>{p.emoji}</span>
              <span style={{ flex: 1, fontSize: 12.5, fontWeight: i === active ? 600 : 500, color: i === active ? text : "#9CA3AF", lineHeight: 1.3 }}>{p.title}</span>
              <span style={{ fontSize: 11, color: subtle, flexShrink: 0 }}>{p.products.length}</span>
            </button>
          ))}
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <button style={{ width: "100%", padding: "10px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <Plus size={15} /> Suggest an item
          </button>
          <div style={{ fontSize: 10.5, color: "#4B5563", textAlign: "center", marginTop: 8, lineHeight: 1.5 }}>Suggestions are reviewed before they're added to the shared list.</div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
          <ListChecks size={18} color={BRAND} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: text }}>What Works</div>
            <div style={{ fontSize: 12, color: subtle }}>Survivor-verified tools · by problem</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, width: 220 }}>
            <Search size={14} color={subtle} />
            <span style={{ fontSize: 12.5, color: subtle }}>Search tools or problems…</span>
          </div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "28px 40px 48px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

            {/* Hero / purpose */}
            <div style={{ marginBottom: 28 }}>
              <span style={{ padding: "4px 12px", borderRadius: 20, background: `${BRAND}14`, border: `1px solid ${BRAND}30`, fontSize: 11.5, color: BRAND, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
                <BadgeCheck size={13} /> Survivor-verified · one shared list
              </span>
              <h1 style={{ margin: "14px 0 8px", fontSize: 30, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                What actually <span style={{ color: BRAND }}>works</span>.
              </h1>
              <p style={{ margin: 0, fontSize: 14.5, color: "#9CA3AF", lineHeight: 1.65, maxWidth: 600 }}>
                Pick a problem you're facing. Underneath it is a list of specific tools a survivor here actually bought, used, and said helped — with a direct link to get it.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                {[`${PROBLEMS.length} problems`, `${TOTAL_TOOLS} tools`, "100% survivor-verified"].map((m) => (
                  <span key={m} style={{ padding: "5px 11px", borderRadius: 8, background: surface, border: `1px solid ${border}`, fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>{m}</span>
                ))}
              </div>
            </div>

            {/* Problem sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {PROBLEMS.map((problem) => (
                <section key={problem.title}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, flexShrink: 0 }}>{problem.emoji}</div>
                    <div style={{ flex: 1, paddingTop: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                        <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: text }}>{problem.title}</h2>
                        <span style={{ fontSize: 11.5, color: subtle, fontWeight: 600 }}>{problem.products.length} tools</span>
                      </div>
                      <div style={{ fontSize: 13, color: subtle, lineHeight: 1.5, marginTop: 3 }}>{problem.context}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {problem.products.map((prod) => (
                      <div key={prod.name} style={{ display: "flex", gap: 14, padding: "16px", borderRadius: 14, background: surface, border: `1px solid ${border}` }}>
                        <div style={{ width: 52, height: 52, borderRadius: 11, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{prod.emoji}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                            <span style={{ fontSize: 14.5, fontWeight: 700, color: text }}>{prod.name}</span>
                            <span style={{ fontSize: 12, color: subtle }}>{prod.kind}</span>
                          </div>
                          <div style={{ fontSize: 13, color: "#C4CAD3", lineHeight: 1.55, marginTop: 6, fontStyle: "italic" }}>{prod.note}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 11 }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11.5, color: BRAND, fontWeight: 600 }}>
                              <ShieldCheck size={13} /> {prod.verified} survivors verified
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11.5, color: subtle }}>
                              <ThumbsUp size={12} /> Helpful
                            </span>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flexShrink: 0 }}>
                          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 13px", borderRadius: 9, background: `${BRAND}18`, border: `1px solid ${BRAND}40`, color: BRAND, fontSize: 12.5, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                            View on Amazon <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right rail */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "var(--comic-surface, #0D0F14)", padding: "20px 16px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>How this list works</div>
        <div style={{ padding: "14px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}18`, marginBottom: 16 }}>
          {[
            { icon: <BadgeCheck size={15} color={BRAND} />, t: "Survivor-verified", d: "Every item was used by a real member who said it helped." },
            { icon: <ExternalLink size={15} color={BRAND} />, t: "Direct links", d: "Go straight to the product. We don't sell anything." },
            { icon: <Ban size={15} color={BRAND} />, t: "No ads, no affiliates", d: "Nothing on this list is sponsored or paid for." },
            { icon: <Lock size={15} color={BRAND} />, t: "Private to suggest", d: "Suggesting an item never reveals who you are." },
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

        <div style={{ padding: "16px", borderRadius: 12, background: surface, border: `1px solid ${border}`, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#4B5563", textTransform: "uppercase", marginBottom: 12 }}>This list</div>
          {[
            { label: "Problems", value: String(PROBLEMS.length) },
            { label: "Verified tools", value: String(TOTAL_TOOLS) },
            { label: "Survivors helped", value: "27" },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
              <span style={{ fontSize: 12.5, color: subtle }}>{label}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: BRAND }}>{value}</span>
            </div>
          ))}
        </div>

        <div style={{ padding: "13px 14px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
          <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.6 }}>
            One shared list for the whole community — for now. Per-survivor lists may come later.
          </div>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: BRAND, fontWeight: 600, textDecoration: "none", marginTop: 8 }}>
            From the problems in “Look Ma, I Fixed It” <ChevronRight size={13} />
          </a>
        </div>
      </aside>
    </div>
  );
}
