// STATE: Loading — data fetch in progress
import { AlertTriangle } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", BRAND = "#E91E8C";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function ClickLogLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: BRAND + "30", border: `1px solid ${BRAND}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <AlertTriangle size={20} color={BRAND} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={80} h={12} r={4} />
          <div style={{ marginTop: 6 }}><Sk w={200} h={10} r={4} /></div>
        </div>
        <div style={{ flex: 1, padding: "12px" }}>
          <Sk h={90} r={14} />
          <div style={{ marginTop: 12 }}><Sk h={68} r={12} /></div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={160} h={15} r={6} />
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 48px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          {/* Button skeleton */}
          <Sk w={160} h={160} r={80} />
          <Sk w={200} h={12} r={5} />
          <Sk w={160} h={12} r={5} />
          {/* List header */}
          <div style={{ width: "100%", maxWidth: 600 }}>
            <Sk w={120} h={14} r={5} />
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "14px", borderRadius: 12, border: `1px solid ${border}` }}>
                  <Sk w={32} h={32} r={8} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                    <Sk w={100} h={10} r={4} />
                    <Sk w={i % 2 === 0 ? 280 : 0} h={i % 2 === 0 ? 12 : 0} r={4} />
                  </div>
                  <Sk w={28} h={28} r={6} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <Sk w={60} h={10} r={4} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[1, 2, 3, 4].map(i => <Sk key={i} h={60} r={10} />)}
        </div>
        <Sk h={80} r={12} />
        <Sk h={36} r={8} />
      </aside>
    </div>
  );
}
