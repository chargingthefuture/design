// STATE: Loading — data fetch in progress
import { Zap } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#F59E0B";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function ServiceCreditsLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 18px", borderBottom: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Zap size={16} color={COLOR} /><Sk w={130} h={16} r={6} />
          </div>
          {/* Balance card */}
          <div style={{ borderRadius: 14, border: `1px solid ${COLOR}30`, background: COLOR + "08", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <Sk w={80} h={11} r={4} />
            <Sk w={120} h={40} r={8} />
            <div style={{ display: "flex", gap: 8 }}>
              <Sk w={90} h={34} r={8} /><Sk w={90} h={34} r={8} />
            </div>
          </div>
        </div>
        {/* Quick stats */}
        <div style={{ padding: "14px 18px", borderBottom: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 8 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
              <Sk w={120} h={12} r={4} /><Sk w={60} h={14} r={5} />
            </div>
          ))}
        </div>
        {/* Earn ways */}
        <div style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
          <Sk w={100} h={11} r={4} />
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ borderRadius: 10, border: `1px solid ${border}`, padding: "12px 14px", display: "flex", gap: 10, alignItems: "center" }}>
              <Sk w={32} h={32} r={8} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                <Sk w={120} h={13} r={4} /><Sk w={80} h={10} r={4} />
              </div>
              <Sk w={45} h={22} r={11} />
            </div>
          ))}
        </div>
      </aside>

      {/* Main — transactions */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={140} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={90} h={32} r={8} /><Sk w={28} h={28} r={6} />
          </div>
        </div>
        {/* Tab bar */}
        <div style={{ padding: "0 24px", borderBottom: `1px solid ${border}`, display: "flex", gap: 4, flexShrink: 0 }}>
          {[80, 90, 75, 85].map((w, i) => (
            <div key={i} style={{ padding: "12px 4px", borderBottom: i === 0 ? `2px solid ${COLOR}` : "2px solid transparent" }}>
              <Sk w={w} h={14} r={5} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
          {['', '', ''].map((_, di) => (
            <div key={di}>
              <div style={{ padding: "8px 0" }}><Sk w={100} h={11} r={4} /></div>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: `1px solid ${border}` }}>
                  <Sk w={40} h={40} r={20} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                    <Sk w={180} h={14} r={5} /><Sk w={120} h={11} r={4} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                    <Sk w={60} h={16} r={5} /><Sk w={80} h={11} r={4} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
