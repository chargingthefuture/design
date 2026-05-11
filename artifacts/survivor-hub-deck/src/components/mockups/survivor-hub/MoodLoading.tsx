// STATE: Loading — data fetch in progress
import { Smile } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#EC4899";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function MoodLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <Smile size={20} color={COLOR} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={130} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={28} h={28} r={6} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "28px", display: "flex", gap: 24 }}>
          {/* Left — mood check-in */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Mood picker */}
            <div style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
              <Sk w={180} h={20} r={6} />
              <div style={{ display: "flex", gap: 18 }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <Sk w={52} h={52} r={26} /><Sk w={40} h={11} r={4} />
                  </div>
                ))}
              </div>
              <Sk w={160} h={44} r={10} />
            </div>
            {/* Weekly bar chart */}
            <div style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "20px 24px" }}>
              <Sk w={140} h={14} r={5} />
              <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 100, marginTop: 16 }}>
                {[60, 80, 55, 90, 95, 100, 85].map((h, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", height: h, borderRadius: "4px 4px 0 0", background: "rgba(236,72,153,0.15)" }} />
                    <Sk w={24} h={10} r={4} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — resources + community */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 14, flexShrink: 0 }}>
            <Sk w={130} h={13} r={5} />
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "14px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                <Sk w={36} h={36} r={8} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                  <Sk w={130} h={13} r={4} /><Sk w={80} h={10} r={4} />
                </div>
              </div>
            ))}
            <Sk w={130} h={13} r={5} />
            <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <Sk w={100} h={11} r={4} /><Sk w={70} h={28} r={6} /><Sk w={140} h={10} r={4} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
