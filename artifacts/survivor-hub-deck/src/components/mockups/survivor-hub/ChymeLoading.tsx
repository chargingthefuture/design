// STATE: Loading — data fetch in progress
import { Radio } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#22C55E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function ChymeLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Sidebar — room list */}
      <aside style={{ width: 320, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 10px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Radio size={16} color={COLOR} />
            <Sk w={80} h={16} r={6} />
            <div style={{ marginLeft: "auto" }}><Sk w={70} h={22} r={11} /></div>
          </div>
          <Sk h={36} r={8} />
        </div>
        <div style={{ padding: "10px 12px 6px" }}><Sk w={110} h={10} r={4} /></div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px", display: "flex", flexDirection: "column", gap: 8 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ borderRadius: 10, border: `1px solid ${i === 1 ? COLOR + "40" : border}`, padding: "12px", background: i === 1 ? COLOR + "06" : "transparent" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <Sk w={180} h={14} r={5} /><Sk w={36} h={16} r={8} />
              </div>
              <Sk w={120} h={11} r={4} />
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <Sk w={30} h={11} r={4} /><Sk w={40} h={11} r={4} /><Sk w={50} h={18} r={9} />
              </div>
            </div>
          ))}
          <div style={{ padding: "10px 4px 6px" }}><Sk w={90} h={10} r={4} /></div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "10px 12px", opacity: 0.7 }}>
              <Sk w={160 + i * 20} h={13} r={5} />
              <div style={{ display: "flex", gap: 10, marginTop: 6 }}><Sk w={80} h={10} r={4} /><Sk w={80} h={10} r={4} /></div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main — room detail */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Room header */}
        <div style={{ padding: "20px 32px 16px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
            <Sk w={60} h={22} r={11} /><Sk w={60} h={22} r={11} /><Sk w={90} h={22} r={11} />
          </div>
          <Sk w={340} h={22} r={6} />
          <div style={{ marginTop: 8 }}><Sk w={200} h={13} r={5} /></div>
        </div>

        {/* Speaker circles */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          <Sk w={80} h={11} r={4} />
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", margin: "16px 0 32px" }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Sk w={72} h={72} r={36} />
                <Sk w={50} h={11} r={4} />
              </div>
            ))}
          </div>
          <Sk w={120} h={11} r={4} />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
            {Array(13).fill(0).map((_, i) => <Sk key={i} w={32} h={32} r={16} />)}
          </div>
        </div>

        {/* Bottom controls */}
        <div style={{ padding: "16px 32px", borderTop: `1px solid ${border}`, display: "flex", gap: 10 }}>
          {[1, 2, 3, 4].map(i => <Sk key={i} w={90} h={38} r={8} />)}
          <div style={{ marginLeft: "auto" }}><Sk w={160} h={38} r={9} /></div>
        </div>
      </main>
    </div>
  );
}
