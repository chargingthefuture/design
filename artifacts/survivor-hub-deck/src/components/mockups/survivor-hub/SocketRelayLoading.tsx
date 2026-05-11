// STATE: Loading — data fetch in progress
import { Share2 } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#F43F5E";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function SocketRelayLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 10px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Share2 size={16} color={COLOR} /><Sk w={100} h={16} r={6} />
            <div style={{ marginLeft: "auto" }}><Sk w={65} h={20} r={10} /></div>
          </div>
          <Sk h={36} r={8} />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
            {[40, 55, 65, 70, 60, 75, 85].map((w, i) => <Sk key={i} w={w} h={24} r={12} />)}
          </div>
        </div>
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${border}` }}>
              <Sk w={120} h={11} r={4} /><Sk w={50} h={14} r={5} />
            </div>
          ))}
        </div>
        <div style={{ margin: "10px 12px", borderRadius: 12, border: `1px dashed ${COLOR}30`, padding: "14px" }}>
          <Sk w={90} h={34} r={8} />
        </div>
      </aside>

      {/* Main feed */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "14px 24px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <Sk w={140} h={16} r={6} /><Sk w={200} h={12} r={4} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={90} h={28} r={10} /><Sk w={90} h={28} r={10} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Sk w={48} h={20} r={4} /><Sk w={60} h={20} r={4} />{i % 2 === 0 && <Sk w={55} h={20} r={4} />}
                  </div>
                  <Sk w={240} h={15} r={5} />
                </div>
                {i % 2 === 0 && <Sk w={60} h={28} r={8} />}
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Sk w={100} h={11} r={4} /><Sk w={70} h={11} r={4} /><Sk w={80} h={11} r={4} />
                <div style={{ marginLeft: "auto" }}><Sk w={80} h={30} r={7} /></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 24px", borderTop: `1px solid ${border}`, display: "flex", gap: 10, flexShrink: 0 }}>
          <Sk w={120} h={40} r={9} /><Sk w={130} h={40} r={9} />
          <div style={{ marginLeft: "auto" }}><Sk w={150} h={14} r={5} /></div>
        </div>
      </main>
    </div>
  );
}
