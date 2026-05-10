// STATE: Loading — data fetch in progress
import { Car } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#F97316";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function TrustTransportLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <Car size={20} color={COLOR} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      <main style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Booking panel */}
        <div style={{ width: 360, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", padding: "20px 20px", gap: 14, flexShrink: 0 }}>
          <Sk w={130} h={18} r={6} />
          {/* Service type cards */}
          <div style={{ display: "flex", gap: 8 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, borderRadius: 12, border: `1px solid ${i === 1 ? COLOR + "40" : border}`, padding: "14px", display: "flex", flexDirection: "column", gap: 6, alignItems: "center", background: i === 1 ? COLOR + "08" : "transparent" }}>
                <Sk w={32} h={32} r={16} /><Sk w={50} h={12} r={4} /><Sk w={70} h={10} r={4} />
              </div>
            ))}
          </div>
          {/* From/To fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Sk h={48} r={10} /><Sk h={48} r={10} />
          </div>
          {/* Schedule toggle */}
          <div style={{ display: "flex", gap: 8 }}>
            <Sk h={40} r={8} /><Sk h={40} r={8} />
          </div>
          {/* Book button */}
          <Sk h={48} r={10} />
          {/* Safety note */}
          <Sk w={200} h={12} r={4} />

          {/* Available drivers */}
          <div style={{ marginTop: 8 }}><Sk w={130} h={13} r={5} /></div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, border: `1px solid ${border}` }}>
              <Sk w={44} h={44} r={22} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                <Sk w={100} h={13} r={4} /><Sk w={80} h={11} r={4} /><Sk w={120} h={10} r={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
                <Sk w={50} h={20} r={10} /><Sk w={40} h={11} r={4} />
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <Sk w={80} h={80} r={40} />
            <Sk w={120} h={13} r={5} />
          </div>
        </div>
      </main>
    </div>
  );
}
