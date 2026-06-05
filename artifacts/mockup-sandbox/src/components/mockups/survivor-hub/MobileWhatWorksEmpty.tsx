// design-sync
// STATE: Add-item / suggest form (mobile) — used by both admins and members. The product list is empty; add the first item.
// Members can only pick a pre-existing problem; new problems are created by admins. Same page reused if per-survivor published lists ship later.
import { useState } from "react";
import { ListChecks, ExternalLink, Send, CheckCircle, Tag, Plus, ShieldCheck, ChevronDown } from "lucide-react";

const BRAND = "#84CC16";
const bg = "#0F1117";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const EXISTING_PROBLEMS = ["Noise & Verbal Harassment", "Sleep Disruption", "Vehicle Tampering"];

const inputStyle: React.CSSProperties = {
  flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: "#F9FAFB", fontFamily: "inherit",
};

export function MobileWhatWorksEmpty() {
  const [problem, setProblem] = useState("");
  const [product, setProduct] = useState("");
  const [link, setLink] = useState("");
  const [added, setAdded] = useState(false);
  const ready = problem.trim() && product.trim() && link.trim();

  return (
    <div style={{ width: 390, height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: "#0D0F14", borderBottom: `1px solid ${border}`, flexShrink: 0, display: "flex", alignItems: "center", gap: 8 }}>
        <ListChecks size={17} color={BRAND} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>What Works</div>
          <div style={{ fontSize: 11.5, color: subtle }}>Add a tool to the shared list</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "20px 16px" }}>
        {added ? (
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingTop: 40 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckCircle size={30} color={BRAND} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Suggestion submitted</div>
            <div style={{ fontSize: 13, color: subtle, lineHeight: 1.65 }}>Your suggestion is in review. Once approved by an admin, it'll appear on the shared list.</div>
            <button onClick={() => setAdded(false)} style={{ padding: "11px 22px", borderRadius: 10, background: BRAND, border: "none", color: "#0A0E06", fontSize: 13.5, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>
              <Plus size={15} /> Add another
            </button>
          </div>
        ) : (
          <>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: `${BRAND}12`, border: `1px solid ${BRAND}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              <ListChecks size={23} color={BRAND} />
            </div>
            <div style={{ fontSize: 21, fontWeight: 800, marginBottom: 8, lineHeight: 1.2 }}>The list is empty — add what worked first.</div>
            <div style={{ fontSize: 13, color: subtle, lineHeight: 1.65, marginBottom: 20 }}>
              Pick the problem your product solves, then add a specific item that worked — with a direct link. Example: <span style={{ color: "#C4CAD3" }}>“Noise &amp; Verbal Harassment”</span> → noise-cancelling headphones.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 7 }}>Problem it solves <span style={{ color: BRAND }}>*</span></label>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${problem ? BRAND + "50" : border}`, borderRadius: 11 }}>
                  <Tag size={14} color={subtle} style={{ flexShrink: 0 }} />
                  <select value={problem} onChange={(e) => setProblem(e.target.value)} style={{ ...inputStyle, cursor: "pointer", appearance: "none", color: problem ? "#F9FAFB" : subtle }}>
                    <option value="" disabled>Choose an existing problem…</option>
                    {EXISTING_PROBLEMS.map((p) => (
                      <option key={p} value={p} style={{ background: "#11141B", color: "#F9FAFB" }}>{p}</option>
                    ))}
                  </select>
                  <ChevronDown size={15} color={subtle} style={{ flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: 10.5, color: subtle, marginTop: 6, lineHeight: 1.5 }}>Pick an existing problem. New problems are added by admins.</div>
              </div>
              <div>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 7 }}>Product name <span style={{ color: BRAND }}>*</span></label>
                <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g. Sony WH-1000XM5" style={{ ...inputStyle, width: "100%", boxSizing: "border-box", padding: "11px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${product ? BRAND + "50" : border}`, borderRadius: 11 }} />
              </div>
              <div>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 7 }}>Direct purchase link <span style={{ color: BRAND }}>*</span></label>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${link ? BRAND + "50" : border}`, borderRadius: 11 }}>
                  <ExternalLink size={14} color={subtle} style={{ flexShrink: 0 }} />
                  <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://amazon.com/…" style={inputStyle} />
                </div>
              </div>

              <button onClick={() => ready && setAdded(true)} disabled={!ready}
                style={{ padding: "13px", borderRadius: 11, background: ready ? BRAND : "rgba(255,255,255,0.06)", border: "none", color: ready ? "#0A0E06" : subtle, fontSize: 14.5, fontWeight: 700, cursor: ready ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <Send size={15} /> Submit for review
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "11px 13px", borderRadius: 11, background: `${BRAND}06`, border: `1px solid ${BRAND}20` }}>
                <ShieldCheck size={14} color={BRAND} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 11.5, color: subtle, lineHeight: 1.5 }}>Choose the problem your product solves. Admins curate the problem list to avoid duplicates.</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
