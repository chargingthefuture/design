// STATE: Loading — data fetch in progress
import { MessageCircle } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#7C3AED";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function HubLoading() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Top bar */}
      <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 12, flexShrink: 0 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: COLOR + "30", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <MessageCircle size={16} color={COLOR} />
        </div>
        <Sk w={150} h={16} r={6} />
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Sk w={28} h={28} r={6} /><Sk w={28} h={28} r={6} /><Sk w={32} h={32} r={16} />
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Icon rail */}
        <div style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
          <Sk w={40} h={40} r={12} />
          {[1, 2, 3, 4].map(i => <Sk key={i} w={40} h={40} r={12} />)}
        </div>

        {/* Channel sidebar */}
        <aside style={{ width: 260, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", padding: "14px 10px", gap: 8, flexShrink: 0 }}>
          <Sk w={90} h={10} r={4} />
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px" }}>
              <Sk w={14} h={14} r={3} /><Sk w={80 + i * 14} h={13} r={5} />
              {i === 1 && <div style={{ marginLeft: "auto" }}><Sk w={20} h={18} r={9} /></div>}
            </div>
          ))}
          <Sk w={90} h={10} r={4} />
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px" }}>
              <Sk w={14} h={14} r={3} /><Sk w={70 + i * 20} h={13} r={5} />
            </div>
          ))}
          <div style={{ marginTop: "auto", padding: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Sk w={32} h={32} r={16} /><div style={{ flex: 1 }}><Sk h={12} r={4} /></div><Sk w={24} h={24} r={6} />
            </div>
          </div>
        </aside>

        {/* Main chat */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ height: 52, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 10, flexShrink: 0 }}>
            <Sk w={14} h={14} r={3} /><Sk w={100} h={16} r={6} /><Sk w={60} h={22} r={11} />
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={28} h={28} r={6} /><Sk w={28} h={28} r={6} /></div>
          </div>
          <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              [200, 280], [140], [320, 180, 240], [200], [160, 290],
            ].map((lines, mi) => (
              <div key={mi} style={{ display: "flex", gap: 12 }}>
                <Sk w={36} h={36} r={18} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", gap: 8 }}><Sk w={80} h={11} r={4} /><Sk w={40} h={10} r={4} /></div>
                  {lines.map((lw, li) => <Sk key={li} w={lw} h={13} r={5} />)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "12px 20px", borderTop: `1px solid ${border}`, flexShrink: 0 }}>
            <div style={{ height: 44, borderRadius: 12, background: surface, border: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 14px", gap: 10 }}>
              <Sk w={16} h={16} r={4} /><Sk w={180} h={13} r={5} />
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={24} h={24} r={6} /><Sk w={24} h={24} r={6} /></div>
            </div>
          </div>
        </main>

        {/* Right panel */}
        <aside style={{ width: 240, borderLeft: `1px solid ${border}`, padding: "16px 12px", display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
          <Sk w={100} h={11} r={4} />
          {[1, 2, 3].map(i => (
            <div key={i} style={{ padding: 12, borderRadius: 10, border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 8 }}>
              <Sk w={70} h={22} r={5} /><Sk h={10} r={4} />
            </div>
          ))}
          <Sk w={100} h={11} r={4} />
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Sk w={28} h={28} r={14} /><Sk w={100 + i * 10} h={12} r={4} />
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
