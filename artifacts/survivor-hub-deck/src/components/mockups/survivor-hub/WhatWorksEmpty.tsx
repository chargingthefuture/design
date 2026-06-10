// design-sync
// STATE: Add-item / suggest form — used by both admins and members. The product list is empty; add the first item.
// Members can only pick a pre-existing problem; new problems are created by admins. Same page reused if per-survivor published lists ship later.
import { useState } from "react";
import {
  ListChecks, Plus, ExternalLink, ShieldCheck, Send, CheckCircle, Tag, ChevronDown,
} from "lucide-react";

const BRAND = "#84CC16";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

const EXISTING_PROBLEMS = ["Noise & Verbal Harassment", "Sleep Disruption", "Vehicle Tampering"];

export function WhatWorksEmpty() {
  const [problem, setProblem] = useState("");
  const [product, setProduct] = useState("");
  const [link, setLink] = useState("");
  const [why, setWhy] = useState("");
  const [added, setAdded] = useState(false);

  const ready = problem.trim() && product.trim() && link.trim();

  if (added) {
    return (
      <div style={{ width: "100%", height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ maxWidth: 460, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18, padding: "0 32px" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle size={34} color={BRAND} />
          </div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>Suggestion submitted</div>
          <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>Your suggestion is in review. Once an admin approves it, it'll appear on the shared list for everyone.</div>
          <button onClick={() => setAdded(false)} style={{ padding: "12px 24px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>
            <Plus size={15} /> Add another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter',system-ui", color: text, overflow: "hidden" }}>

      {/* Header */}
      <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <ListChecks size={18} color={BRAND} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>What Works</div>
          <div style={{ fontSize: 12, color: subtle }}>Add a survivor-verified tool to the shared list</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "44px 64px", gap: 44 }}>

        {/* Intro + form */}
        <div style={{ flex: 1, maxWidth: 540 }}>
          <div style={{ marginBottom: 26 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <ListChecks size={26} color={BRAND} />
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>The list is empty — add what worked first.</div>
            <div style={{ fontSize: 14, color: subtle, lineHeight: 1.7 }}>
              Pick the problem your product solves, then add a specific item that worked for you — with a direct purchase link and a short note on why. Example: <span style={{ color: "#C4CAD3" }}>“Noise &amp; Verbal Harassment”</span> → a pair of noise-cancelling headphones.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="Problem it solves" required>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${problem ? BRAND + "50" : border}`, borderRadius: 12 }}>
                <Tag size={14} color={subtle} style={{ flexShrink: 0 }} />
                <select value={problem} onChange={(e) => setProblem(e.target.value)} style={{ ...inputStyle, cursor: "pointer", appearance: "none", color: problem ? "var(--comic-text-primary, #F9FAFB)" : subtle }}>
                  <option value="" disabled>Choose an existing problem…</option>
                  {EXISTING_PROBLEMS.map((p) => (
                    <option key={p} value={p} style={{ background: "#11141B", color: "var(--comic-text-primary, #F9FAFB)" }}>{p}</option>
                  ))}
                </select>
                <ChevronDown size={15} color={subtle} style={{ flexShrink: 0 }} />
              </div>
              <div style={{ fontSize: 11, color: subtle, marginTop: 6, lineHeight: 1.5 }}>Pick an existing problem. New problems are added by admins to avoid duplicates.</div>
            </Field>

            <Field label="Product name" required>
              <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g. Sony WH-1000XM5 Headphones" style={{ ...inputStyle, padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${product ? BRAND + "50" : border}`, borderRadius: 12, boxSizing: "border-box", width: "100%" }} />
            </Field>

            <Field label="Direct purchase link" required>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${link ? BRAND + "50" : border}`, borderRadius: 12 }}>
                <ExternalLink size={14} color={subtle} style={{ flexShrink: 0 }} />
                <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://amazon.com/…" style={inputStyle} />
              </div>
            </Field>

            <Field label="Why it works (optional)">
              <textarea value={why} onChange={(e) => setWhy(e.target.value)} rows={3} placeholder="A short note from your experience — what it actually solved." style={{ ...inputStyle, padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, borderRadius: 12, boxSizing: "border-box", width: "100%", resize: "none", lineHeight: 1.5 }} />
            </Field>

            <button onClick={() => ready && setAdded(true)} disabled={!ready}
              style={{ padding: "14px", borderRadius: 12, background: ready ? BRAND : "rgba(255,255,255,0.06)", border: "none", color: ready ? "#0A0E06" : subtle, fontSize: 15, fontWeight: 700, cursor: ready ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Send size={16} /> Submit for review
            </button>
          </div>
        </div>

        {/* Side guidance */}
        <div style={{ width: 300, flexShrink: 0 }}>
          <div style={{ padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: BRAND, marginBottom: 14 }}>What makes a good entry</div>
            {[
              { icon: "🎯", t: "One specific problem", d: "Tie each tool to a real problem survivors recognize." },
              { icon: "🔗", t: "A direct link", d: "Link straight to the exact product — not a category." },
              { icon: "✍️", t: "Why it worked", d: "A line from your experience matters more than specs." },
              { icon: "✅", t: "You actually used it", d: "Only add what genuinely helped you. No guesses." },
            ].map(({ icon, t, d }) => (
              <div key={t} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: text, marginBottom: 2 }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: subtle, lineHeight: 1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "14px 16px", borderRadius: 12, background: `${BRAND}06`, border: `1px solid ${BRAND}20` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <ShieldCheck size={13} color={BRAND} />
              <span style={{ fontSize: 12, fontWeight: 600, color: BRAND }}>Pick an existing problem</span>
            </div>
            <div style={{ fontSize: 11.5, color: subtle, lineHeight: 1.55 }}>When you suggest a product, choose the problem it solves from the list. Admins curate the problems so the same need isn't listed twice under different names.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "var(--comic-text-primary, #F9FAFB)", fontFamily: "inherit",
};

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 8 }}>
        {label} {required && <span style={{ color: "#84CC16" }}>*</span>}
      </label>
      {children}
    </div>
  );
}
