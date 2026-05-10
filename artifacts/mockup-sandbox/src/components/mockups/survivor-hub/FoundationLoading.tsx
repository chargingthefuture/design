// STATE: Loading — data fetch in progress
import { Hammer } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#EF4444";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function FoundationLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Hammer size={16} color={COLOR} /><Sk w={100} h={16} r={6} />
          </div>
          <Sk h={36} r={8} />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
            {[50, 65, 70, 55, 60, 75].map((w, i) => <Sk key={i} w={w} h={24} r={12} />)}
          </div>
        </div>
        <div style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "10px 12px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                <Sk w={40} h={40} r={8} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <Sk w={140} h={13} r={5} /><Sk w={100} h={11} r={4} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[50, 60, 55].map((w, j) => <Sk key={j} w={w} h={20} r={10} />)}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={140} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={100} h={32} r={8} /><Sk w={28} h={28} r={6} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "18px 22px", display: "flex", gap: 16 }}>
              <Sk w={64} h={64} r={12} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Sk w={180} h={15} r={5} /><Sk w={60} h={20} r={10} />
                </div>
                <Sk w={130} h={12} r={4} />
                <div style={{ display: "flex", gap: 6 }}>
                  {[55, 65, 50].map((w, j) => <Sk key={j} w={w} h={22} r={11} />)}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Sk w={70} h={12} r={4} /><Sk w={80} h={12} r={4} /><Sk w={60} h={12} r={4} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                <Sk w={60} h={20} r={10} /><Sk w={90} h={34} r={8} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: "12px 24px", borderTop: `1px solid ${border}`, flexShrink: 0 }}>
          <Sk h={44} r={10} />
        </div>
      </main>
    </div>
  );
}
