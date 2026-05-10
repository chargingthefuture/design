// STATE: Loading — data fetch in progress
import { Megaphone } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#8B5CF6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function FeedAnnouncementsLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Sidebar */}
      <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Megaphone size={16} color={COLOR} /><Sk w={130} h={16} r={6} />
          </div>
          <Sk h={34} r={8} />
        </div>
        <div style={{ padding: "12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={100} h={10} r={4} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 6px" }}>
                <Sk w={16} h={16} r={8} /><Sk w={80 + i * 15} h={13} r={5} />
                {i <= 2 && <div style={{ marginLeft: "auto" }}><Sk w={18} h={18} r={9} /></div>}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "12px" }}>
          <Sk w={100} h={10} r={4} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ borderRadius: 8, border: `1px solid ${border}`, padding: "10px" }}>
                <Sk w={140} h={13} r={5} />
                <Sk w={80} h={10} r={4} />
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main feed */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Sk w={140} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={110} h={34} r={8} /><Sk w={28} h={28} r={6} /></div>
        </div>
        {/* Tab bar */}
        <div style={{ padding: "0 24px", borderBottom: `1px solid ${border}`, display: "flex", gap: 4, flexShrink: 0 }}>
          {[70, 90, 85, 75].map((w, i) => (
            <div key={i} style={{ padding: "12px 4px", borderBottom: i === 0 ? `2px solid ${COLOR}` : "2px solid transparent" }}>
              <Sk w={w} h={14} r={5} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Pinned announcement */}
          <div style={{ borderRadius: 14, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "16px 20px" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
              <Sk w={70} h={20} r={10} /><Sk w={55} h={20} r={10} />
            </div>
            <Sk w={260} h={16} r={5} />
            <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
              <Sk h={13} r={4} /><Sk w="85%" h={13} r={4} />
            </div>
          </div>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "16px 20px", display: "flex", gap: 14 }}>
              <Sk w={44} h={44} r={22} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 8 }}><Sk w={100} h={13} r={4} /><Sk w={50} h={12} r={4} /></div>
                <Sk w={220} h={15} r={5} />
                <Sk h={12} r={4} /><Sk w="80%" h={12} r={4} />
                <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                  <Sk w={50} h={22} r={11} /><Sk w={60} h={22} r={11} /><Sk w={55} h={22} r={11} />
                </div>
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
