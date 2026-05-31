// design-sync
// STATE: Loading (mobile) — Owner Review & Correction Console (skeleton)
import { ShieldCheck, Loader2 } from "lucide-react";

const ACCENT = "#0EA5E9";
const bg = "#0F1117";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";

const Bar = ({ w, h = 11 }: { w: number | string; h?: number }) => (
  <div style={{ width: w, height: h, borderRadius: 4, background: "rgba(255,255,255,0.06)" }} />
);

export function MobileAIReviewConsoleLoading() {
  return (
    <div style={{ width: 390, height: "100%", minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 13, fontWeight: 600, flexShrink: 0 }}>
        <span>9:41</span><span>📶 🔋</span>
      </div>

      <div style={{ padding: "4px 16px 12px", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: `${ACCENT}22`, border: `1px solid ${ACCENT}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShieldCheck size={17} color={ACCENT} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Review Console</div>
            <div style={{ fontSize: 11, color: subtle }}>Loading drafts for review…</div>
          </div>
          <Loader2 size={16} color={ACCENT} className="spin" />
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, padding: "12px 16px 4px", flexShrink: 0 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 70, height: 28, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
        ))}
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "20px 0 8px" }}>
          <Loader2 size={26} color={ACCENT} className="spin" />
          <div style={{ fontSize: 12.5, color: subtle }}>Fetching the next answer…</div>
        </div>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <Bar w={110} h={9} />
            <div style={{ padding: "14px", borderRadius: 11, background: "rgba(255,255,255,0.02)", border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 8 }}>
              <Bar w="100%" /><Bar w="84%" /><Bar w="66%" />
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "10px 16px 16px", borderTop: `1px solid ${border}`, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ height: 44, borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, height: 40, borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
          <div style={{ width: 90, height: 40, borderRadius: 11, background: "rgba(255,255,255,0.03)", border: `1px solid ${border}` }} />
        </div>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}} .spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
