// design-sync
// STATE: Admin only — currency USD-rate management for the aggregate GDP estimate.
// These factors exist SOLELY to normalize multi-currency volume into one GDP estimate (transparency/morale metric).
// LEGAL HARD LINE: never render these as "1 SC = $X" or any per-wallet / per-user conversion.
import { useState } from "react";
import {
  Globe, ShieldCheck, Clock, CheckCircle, Edit2, AlertTriangle,
} from "lucide-react";

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
type HistoryRow = { usd_rate: number; as_of: string; source: string };

const CURRENCIES: CurrencyRow[] = [
  { code: "SC",  label: "ServiceCredits",    isServiceCredits: true, symbol: "SC", usd_rate: 0.85,     as_of: "2025-12-15", source: "Owner — quarterly review" },
  { code: "USD", label: "United States Dollar", isFixed: true,       symbol: "$",  usd_rate: 1.00,     as_of: "2025-12-01", source: "Fixed baseline" },
  { code: "NGN", label: "Nigerian Naira",                            symbol: "₦",  usd_rate: 0.00063,  as_of: "2025-12-10", source: "CBN reference rate" },
  { code: "BRL", label: "Brazilian Real",                            symbol: "R$", usd_rate: 0.172,    as_of: "2025-12-10", source: "BCB open data" },
  { code: "INR", label: "Indian Rupee",                              symbol: "₹",  usd_rate: 0.01197,  as_of: "2025-12-10", source: "RBI reference rate" },
  { code: "PHP", label: "Philippine Peso",                           symbol: "₱",  usd_rate: 0.01728,  as_of: "2025-12-10", source: "BSP reference rate" },
];

const HISTORY: Record<string, HistoryRow[]> = {
  SC: [
    { usd_rate: 0.85, as_of: "2025-12-15", source: "Owner — quarterly review" },
    { usd_rate: 0.82, as_of: "2025-09-01", source: "Owner — Q3 review" },
    { usd_rate: 0.78, as_of: "2025-06-01", source: "Owner — Q2 review" },
  ],
  NGN: [
    { usd_rate: 0.00063, as_of: "2025-12-10", source: "CBN reference rate" },
    { usd_rate: 0.00069, as_of: "2025-11-01", source: "CBN reference rate" },
  ],
  BRL: [
    { usd_rate: 0.172, as_of: "2025-12-10", source: "BCB open data" },
    { usd_rate: 0.185, as_of: "2025-11-01", source: "BCB open data" },
  ],
};

function fmtRate(c: CurrencyRow) {
  if (c.isFixed) return "—";
  const d = c.usd_rate < 0.001 ? 5 : c.usd_rate < 0.1 ? 4 : 3;
  return `$${c.usd_rate.toFixed(d)} / ${c.symbol}`;
}

export function GDPRateAdmin() {
  const [editing, setEditing] = useState<CurrencyRow | null>(null);
  const [saved, setSaved] = useState(false);
  const [newRate, setNewRate] = useState("");
  const [newSource, setNewSource] = useState("");

  const open = (c: CurrencyRow) => { setEditing(c); setNewRate(String(c.usd_rate)); setNewSource(""); setSaved(false); };
  const save = () => { setSaved(true); setTimeout(() => { setSaved(false); setEditing(null); }, 2200); };
  const canSave = newRate.trim() !== "" && newSource.trim() !== "";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", maxHeight: "100%", background: bg, fontFamily: "'Inter',system-ui", color: text, overflow: "hidden" }}>

      {/* Header */}
      <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, background: "var(--comic-surface, #0D0F14)", flexShrink: 0 }}>
        <Globe size={18} color={COLOR} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>GDP — Currency Rate Admin</div>
          <div style={{ fontSize: 12, color: subtle }}>Factors used only to estimate aggregate GDP — not per-wallet values</div>
        </div>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: COLOR, padding: "4px 11px", borderRadius: 20, background: `${COLOR}12`, border: `1px solid ${COLOR}30` }}>
          <ShieldCheck size={12} /> Admin only
        </span>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, display: "flex", gap: 28, padding: "28px 36px", alignItems: "flex-start" }}>

        {/* Currency list */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Legal disclaimer */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "13px 16px", borderRadius: 12, background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.18)", marginBottom: 24 }}>
            <AlertTriangle size={14} color="#EAB308" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.65 }}>
              These factors exist <strong style={{ color: "var(--comic-text-primary, #F9FAFB)" }}>solely</strong> to normalize multi-currency activity into one aggregate GDP estimate — a morale and transparency metric. They are <strong style={{ color: "var(--comic-text-primary, #F9FAFB)" }}>never</strong> a redemption rate, per-wallet conversion, or price of ServiceCredits. Revisions add a new dated row; all prior values are preserved as history.
            </div>
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Active rates · {CURRENCIES.length} currencies</div>

          {CURRENCIES.map((c) => (
            <div key={c.code} style={{ padding: "16px 20px", borderRadius: 14, background: surface, border: `1px solid ${c.code === editing?.code ? COLOR + "40" : border}`, marginBottom: 10, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: c.isServiceCredits ? `${COLOR}15` : "rgba(255,255,255,0.04)", border: `1px solid ${c.isServiceCredits ? COLOR + "30" : border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: c.isServiceCredits ? COLOR : subtle, flexShrink: 0 }}>
                {c.symbol}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{c.label}</div>
                <div style={{ fontSize: 11.5, color: subtle, display: "flex", gap: 14, marginTop: 3, flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={10} />as of {c.as_of}</span>
                  <span>Source: {c.source}</span>
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, minWidth: 140 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: c.isFixed ? subtle : COLOR }}>{fmtRate(c)}</div>
                <div style={{ fontSize: 11, color: subtle }}>GDP estimate factor</div>
              </div>
              {!c.isFixed ? (
                <button onClick={() => open(c)} style={{ padding: "7px 16px", borderRadius: 9, background: `${COLOR}12`, border: `1px solid ${COLOR}30`, color: COLOR, fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                  <Edit2 size={12} /> Revise
                </button>
              ) : (
                <div style={{ padding: "7px 14px", borderRadius: 9, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}`, color: subtle, fontSize: 12, flexShrink: 0 }}>Fixed</div>
              )}
            </div>
          ))}
        </div>

        {/* Right panel — revise or info */}
        <div style={{ width: 340, flexShrink: 0 }}>
          {editing ? (
            <div style={{ padding: "20px", borderRadius: 16, background: surface, border: `1px solid ${COLOR}30` }}>
              {saved ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "28px 0", textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${COLOR}15`, border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle size={28} color={COLOR} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>Rate saved</div>
                  <div style={{ fontSize: 12, color: subtle, lineHeight: 1.6 }}>New row added with today's date.<br />Prior values preserved as history.</div>
                </div>
              ) : (
                <>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>Revise — {editing.label}</div>
                  <div style={{ fontSize: 12, color: subtle, marginBottom: 20 }}>Creates a new dated row. History is preserved.</div>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>New USD factor *</label>
                    <div style={{ display: "flex", alignItems: "center", padding: "10px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${newRate ? COLOR + "50" : border}`, borderRadius: 10, gap: 8 }}>
                      <span style={{ fontSize: 13, color: subtle }}>$</span>
                      <input value={newRate} onChange={(e) => setNewRate(e.target.value)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, color: text }} placeholder="0.00000" />
                      <span style={{ fontSize: 12, color: subtle }}>/ {editing.symbol}</span>
                    </div>
                    <div style={{ fontSize: 10.5, color: subtle, marginTop: 5, lineHeight: 1.5 }}>GDP estimate factor only — not a redemption or per-user rate.</div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", display: "block", marginBottom: 6 }}>Source / note *</label>
                    <input value={newSource} onChange={(e) => setNewSource(e.target.value)} style={{ width: "100%", boxSizing: "border-box", padding: "10px 13px", background: "rgba(255,255,255,0.04)", border: `1px solid ${newSource ? COLOR + "50" : border}`, borderRadius: 10, fontSize: 13, color: text, outline: "none" }} placeholder="e.g. Owner — quarterly review" />
                  </div>

                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => setEditing(null)} style={{ flex: 1, padding: "10px", borderRadius: 9, background: "rgba(255,255,255,0.05)", border: `1px solid ${border}`, color: subtle, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
                    <button onClick={save} disabled={!canSave} style={{ flex: 2, padding: "10px", borderRadius: 9, background: canSave ? COLOR : "rgba(255,255,255,0.06)", border: "none", color: canSave ? "#0A0E06" : subtle, fontSize: 13, fontWeight: 700, cursor: canSave ? "pointer" : "default" }}>Save new rate</button>
                  </div>

                  {/* History */}
                  {HISTORY[editing.code] && (
                    <div style={{ marginTop: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Prior values</div>
                      {HISTORY[editing.code].map((h, i) => (
                        <div key={i} style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, marginBottom: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? COLOR : "#9CA3AF" }}>${h.usd_rate} / {editing.symbol}</span>
                            <span style={{ fontSize: 11, color: subtle }}>{h.as_of}</span>
                          </div>
                          <div style={{ fontSize: 11, color: subtle }}>{h.source}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <div style={{ padding: "20px", borderRadius: 16, background: `${COLOR}06`, border: `1px solid ${COLOR}20` }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLOR, marginBottom: 12 }}>About these factors</div>
              <div style={{ fontSize: 13, color: subtle, lineHeight: 1.7 }}>
                These USD factors normalize multi-currency activity into a single GDP estimate. They are a morale and transparency metric — never a ledger, redemption offer, or indication of what ServiceCredits are worth to any individual.
              </div>
              <div style={{ marginTop: 16, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", marginBottom: 6 }}>Revision protocol</div>
                <div style={{ fontSize: 12, color: subtle, lineHeight: 1.65 }}>Clicking Revise on any currency creates a new dated row. Prior rows are never overwritten — the most recent row is always the active rate.</div>
              </div>
              <div style={{ marginTop: 12, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", marginBottom: 6 }}>ServiceCredits label</div>
                <div style={{ fontSize: 12, color: subtle, lineHeight: 1.65 }}>Always display as "ServiceCredits" (full label), never the bare "SC" code in user-facing surfaces. Bare code is acceptable in tight admin-only column headers.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
