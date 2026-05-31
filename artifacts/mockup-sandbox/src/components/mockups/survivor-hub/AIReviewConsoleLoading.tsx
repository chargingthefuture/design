// design-sync
// STATE: Loading — Owner Review & Correction Console (skeleton)
import {
  ShieldCheck, Inbox, Sparkles, FileText, Bell, Settings, Loader2,
} from "lucide-react";

const ACCENT = "#0EA5E9";
const bg = "#0F1117";
const panel = "#0D0F14";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const Bar = ({ w, h = 12 }: { w: number | string; h?: number }) => (
  <div style={{ width: w, height: h, borderRadius: 4, background: "rgba(255,255,255,0.06)" }} />
);

export function AIReviewConsoleLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 8, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: `${ACCENT}22`, border: `1px solid ${ACCENT}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <ShieldCheck size={20} color={ACCENT} />
        </div>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}20`, border: `1px solid ${ACCENT}40`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT }}><Inbox size={20} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: subtle, border: "none" }}><FileText size={20} /></button>
        <div style={{ flex: 1 }} />
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: subtle }}><Bell size={18} /></button>
        <button style={{ width: 44, height: 44, borderRadius: 12, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: subtle }}><Settings size={18} /></button>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${ACCENT}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: ACCENT }}>O</div>
      </aside>

      {/* Queue sidebar (skeleton) */}
      <aside style={{ width: 300, background: panel, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: subtle, textTransform: "uppercase", marginBottom: 4 }}>Review Queue</div>
          <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>AI Assistant drafts awaiting human review</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "4px 10px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${border}`, fontSize: 12, color: subtle, fontWeight: 700 }}>
            <Loader2 size={12} className="spin" /> Loading…
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 8px" }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8, padding: "12px", borderRadius: 10, marginBottom: 6, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}` }}>
              <Bar w="92%" />
              <Bar w="64%" />
              <div style={{ display: "flex", gap: 8, marginTop: 2 }}><Bar w={90} h={9} /><Bar w={50} h={9} /></div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main skeleton */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, background: panel, flexShrink: 0 }}>
          <Sparkles size={18} color={ACCENT} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Review &amp; Correction Console</div>
            <div style={{ fontSize: 12, color: subtle }}>Loading drafts for review…</div>
          </div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", padding: "30px 0 14px" }}>
              <Loader2 size={30} color={ACCENT} className="spin" />
              <div style={{ fontSize: 13, color: subtle }}>Fetching the next answer to review…</div>
            </div>
            {[0, 1].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Bar w={140} h={10} />
                <div style={{ padding: "18px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 9 }}>
                  <Bar w="100%" /><Bar w="88%" /><Bar w="72%" />
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, height: 46, borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
              <div style={{ flex: 1, height: 46, borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
              <div style={{ width: 120, height: 46, borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right rail skeleton */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: panel, padding: "20px 16px", flexShrink: 0 }}>
        <Bar w={90} h={10} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ padding: "18px 12px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Bar w={36} h={18} /><Bar w={48} h={8} />
            </div>
          ))}
        </div>
      </aside>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}} .spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
