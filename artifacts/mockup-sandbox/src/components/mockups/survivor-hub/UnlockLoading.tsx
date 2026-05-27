// STATE: Loading — data fetch in progress
import { Unlock as UnlockIcon } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#10B981";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function UnlockLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: BRAND + "30", border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <UnlockIcon size={20} color={BRAND} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={100} h={12} r={4} />
          <div style={{ marginTop: 6 }}><Sk w={190} h={10} r={4} /></div>
        </div>
        <div style={{ flex: 1, padding: "12px" }}>
          <Sk h={80} r={14} />
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Sk w={20} h={20} r={10} />
                <div style={{ flex: 1 }}><Sk w={80} h={11} r={4} /></div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={160} h={15} r={6} />
          <div style={{ marginLeft: "auto" }}><Sk w={100} h={26} r={13} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "40px 64px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Status card skeleton */}
            <div style={{ padding: "28px", borderRadius: 18, border: `1px solid ${border}` }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <Sk w={48} h={48} r={14} />
                <div style={{ flex: 1 }}>
                  <Sk w={120} h={18} r={5} />
                  <div style={{ marginTop: 6 }}><Sk w={220} h={12} r={4} /></div>
                </div>
              </div>
              <Sk h={44} r={10} />
            </div>
          </div>
        </div>
      </main>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <Sk w={80} h={10} r={4} />
        <Sk h={130} r={12} />
        <Sk w={100} h={10} r={4} />
        {[1, 2, 3, 4, 5].map(i => <Sk key={i} h={28} r={7} />)}
      </aside>
    </div>
  );
}
