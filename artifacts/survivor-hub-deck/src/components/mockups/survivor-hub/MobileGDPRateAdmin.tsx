// design-sync
// STATE: Admin only (mobile) — currency USD-rate management for the aggregate GDP estimate.
// LEGAL HARD LINE: never render these as per-wallet / per-user fiat conversions.
import { useState } from "react";
import { Globe, ShieldCheck, Clock, CheckCircle, Edit2, AlertTriangle, ChevronLeft } from "lucide-react";

const COLOR = "var(--app-accent, #06B6D4)";
const bg = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "var(--comic-text-primary, #F9FAFB)";
const subtle = "var(--comic-text-secondary, #6B7280)";

type CurrencyRow = {
  code: string; label: string; isServiceCredits?: boolean; isFixed?: boolean;
  symbol: string; usd_rate: number; as_of: string; source: string;
};

const CURRENCIES: CurrencyRow[] = [
  { code: "SC",  label: "ServiceCredits",      isServiceCredits: true, symbol: "SC", usd_rate: 0.85,    as_of: "2025-12-15", source: "Owner — quarterly review" },
  { code: "USD", label: "United States Dollar", isFixed: true,          symbol: "$",  usd_rate: 1.00,    as_of: "2025-12-01", source: "Fixed baseline" },
  { code: "NGN", label: "Nigerian Naira",                               symbol: "₦",  usd_rate: 0.00063, as_of: "2025-12-10", source: "CBN reference rate" },
  { code: "BRL", label: "Brazilian Real",                               symbol: "R$", usd_rate: 0.172,   as_of: "2025-12-10", source: "BCB open data" },
  { code: "INR", label: "Indian Rupee",                                 symbol: "₹",  usd_rate: 0.01197, as_of: "2025-12-10", source: "RBI reference rate" },
  { code: "PHP", label: "Philippine Peso",                              symbol: "₱",  usd_rate: 0.01728, as_of: "2025-12-10", source: "BSP reference rate" },
];

const HISTORY_SC = [
  { usd_rate: 0.85, as_of: "2025-12-15", source: "Owner — quarterly review" },
  { usd_rate: 0.82, as_of: "2025-09-01", source: "Owner — Q3 review" },
  { usd_rate: 0.78, as_of: "2025-06-01", source: "Owner — Q2 review" },
];

function fmtRate(c: CurrencyRow) {
  if (c.isFixed) return "1 : 1";
  const d = c.usd_rate < 0.001 ? 5 : c.usd_rate < 0.1 ? 4 : 3;
  return `$${c.usd_rate.toFixed(d)}`;
}

export function MobileGDPRateAdmin() {
  const [editing, setEditing] = useState<CurrencyRow | null>(null);
  const [saved, setSaved] = useState(false);
  const [newRate, setNewRate] = useState("");
  const [newSource, setNewSource] = useState("");

  const open = (c: CurrencyRow) => { setEditing(c); setNewRate(String(c.usd_rate)); setNewSource(""); setSaved(false); };
  const save = () => { setSaved(true); setTimeout(() => { setSaved(false); setEditing(null); }, 2200); };
  const canSave = newRate.trim() !== "" && newSource.trim() !== "";

  return (
    <div style={{ width: 390, height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter',system-ui", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "var(--comic-surface-alt, #090B0F)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px", background: "var(--comic-surface, #0D0F14)", borderBottom: `1px solid ${border}`, flexShrink: 0, display: "flex", alignItems: "center", gap: 8 }}>
        {editing && !saved && (
          <button onClick={() => setEditing(null)} style={{ background: "none", border: "none", cursor: "pointer", color: COLOR, display: "flex", alignItems: "center", marginRight: 4, padding: 0 }}>
            <ChevronLeft size={20} />
          </button>
        )}
        <Globe size={17} color={COLOR} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>GDP Rate Admin</div>
          <div style={{ fontSize: 11.5, color: subtle }}>{editing ? `Revising — ${editing.label}` : "GDP estimate factors only"}</div>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, fontWeight: 700, color: COLOR, padding: "3px 9px", borderRadius: 20, background: `${COLOR}12`, border: `1px solid ${COLOR}30` }}>
          <ShieldCheck size={11} /> Admin only
        </span>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "16px" }}>

        {editing ? (
          /* Revise panel */
          <>
            {saved ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingTop: 48, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${COLOR}15`, border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle size={30} color={COLOR} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 800 }}>Rate saved</div>
                <div style={{ fontSize: 13, color: subtle, lineHeight: 1.65 }}>New row added with today's date. Prior values preserved as history.</div>
              </div>
            ) : (
              <>
                <div style={{ padding: "12px 14px", borderRadius: 11, background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.18)", marginBottom: 18, display: "flex", gap: 9 }}>
                  <AlertTriangle size={13} color="#EAB308" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div style={{ fontSize: 11.5, color: "#9CA3AF", lineHeight: 1.6 }}>GDP estimate factor only — never a redemption rate or per-wallet value.</div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>New USD factor *</label>
                  <div style={{ display: "flex", alignItems: "center", padding: "11px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${newRate ? COLOR + "50" : border}`, borderRadius: 11, gap: 8 }}>
                    <span style={{ fontSize: 13, color: subtle }}>$</span>
                    <input value={newRate} onChange={(e) => setNewRate(e.target.value)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: text }} placeholder="0.00000" />
                    <span style={{ fontSize: 12, color: subtle }}>/ {editing.symbol}</span>
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>Source / note *</label>
                  <input value={newSource} onChange={(e) => setNewSource(e.target.value)} style={{ width: "100%", boxSizing: "border-box", padding: "11px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${newSource ? COLOR + "50" : border}`, borderRadius: 11, fontSize: 13, color: text, outline: "none" }} placeholder="e.g. Owner — quarterly review" />
                </div>

                <button onClick={save} disabled={!canSave} style={{ width: "100%", padding: "13px", borderRadius: 11, background: canSave ? COLOR : "rgba(255,255,255,0.06)", border: "none", color: canSave ? "#0A0E06" : subtle, fontSize: 14.5, fontWeight: 700, cursor: canSave ? "pointer" : "default", marginBottom: 24 }}>
                  Save new rate
                </button>

                {/* History */}
                {editing.isServiceCredits && (
                  <>
                    <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Prior values</div>
                    {HISTORY_SC.map((h, i) => (
                      <div key={i} style={{ padding: "10px 13px", borderRadius: 10, background: surface, border: `1px solid ${border}`, marginBottom: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? COLOR : "#9CA3AF" }}>${h.usd_rate} / SC</span>
                          <span style={{ fontSize: 11, color: subtle }}>{h.as_of}</span>
                        </div>
                        <div style={{ fontSize: 11, color: subtle }}>{h.source}</div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          /* Currency list */
          <>
            <div style={{ padding: "12px 14px", borderRadius: 11, background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.18)", marginBottom: 18, display: "flex", gap: 9 }}>
              <AlertTriangle size={13} color="#EAB308" style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={{ fontSize: 11.5, color: "#9CA3AF", lineHeight: 1.6 }}>These factors exist solely to estimate aggregate GDP. They are never a redemption rate or per-wallet conversion.</div>
            </div>

            {CURRENCIES.map((c) => (
              <div key={c.code} style={{ padding: "14px 16px", borderRadius: 13, background: surface, border: `1px solid ${border}`, marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: c.isServiceCredits ? `${COLOR}15` : "rgba(255,255,255,0.04)", border: `1px solid ${c.isServiceCredits ? COLOR + "30" : border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: c.isServiceCredits ? COLOR : subtle, flexShrink: 0 }}>
                    {c.symbol}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>{c.label}</div>
                    <div style={{ fontSize: 11, color: subtle, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                      <Clock size={10} />{c.as_of}
                    </div>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: c.isFixed ? subtle : COLOR }}>{fmtRate(c)}</div>
                </div>
                <div style={{ fontSize: 11, color: subtle, marginBottom: 10 }}>Source: {c.source}</div>
                {!c.isFixed ? (
                  <button onClick={() => open(c)} style={{ width: "100%", padding: "9px", borderRadius: 9, background: `${COLOR}12`, border: `1px solid ${COLOR}30`, color: COLOR, fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <Edit2 size={12} /> Revise
                  </button>
                ) : (
                  <div style={{ textAlign: "center", fontSize: 12, color: subtle }}>Fixed baseline — no revision needed</div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
