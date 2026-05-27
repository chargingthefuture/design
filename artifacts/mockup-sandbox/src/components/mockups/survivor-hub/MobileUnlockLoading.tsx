// STATE: Loading — mobile skeleton
import { Unlock as UnlockIcon } from "lucide-react";

const bg = "#0F1117";
const border = "#1E2A3A";
const BRAND = "#10B981";
const subtle = "#6B7280";

const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MobileUnlockLoading() {
  return (
    <div style={{ width: 390, minHeight: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header skeleton */}
      <div style={{ padding: "12px 16px", background: "#0D0F14", borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <UnlockIcon size={16} color={BRAND} />
          <Sk w={160} h={14} r={5} />
          <div style={{ marginLeft: "auto" }}><Sk w={80} h={22} r={11} /></div>
        </div>
        <Sk w={120} h={11} r={4} />
      </div>

      {/* Content skeleton */}
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>

        {/* Status card skeleton */}
        <div style={{ padding: "20px", borderRadius: 16, border: `1px solid ${border}` }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
            <Sk w={44} h={44} r={12} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
              <Sk w={120} h={16} r={5} />
              <Sk w={90} h={11} r={4} />
            </div>
          </div>
          <Sk h={44} r={10} />
        </div>

        {/* Timeline skeleton */}
        <div style={{ padding: "16px", borderRadius: 14, border: `1px solid ${border}` }}>
          <Sk w={80} h={10} r={4} />
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Sk w={22} h={22} r={11} />
                <div style={{ flex: 1 }}>
                  <Sk w={90} h={12} r={4} />
                </div>
                <Sk w={70} h={10} r={4} />
              </div>
            ))}
          </div>
        </div>

        {/* Unlock list skeleton */}
        <div style={{ padding: "14px", borderRadius: 12, border: `1px solid ${border}` }}>
          <Sk w={100} h={10} r={4} />
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Sk w={12} h={12} r={6} />
                <Sk w={120} h={12} r={4} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav skeleton */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <Sk w={22} h={22} r={11} />
            <Sk w={32} h={9} r={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
