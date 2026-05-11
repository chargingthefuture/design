// STATE: Loading — data fetch in progress
import { Heart } from "lucide-react";

const bg = "#0A0F0E", surface = "#0D1513", border = "#1A2922", COLOR = "#14B8A6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(20,184,166,0.08)", flexShrink: 0 }} />
);

export function GentlePulseLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#060A09", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <Heart size={20} color={COLOR} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={140} h={16} r={6} />
          <div style={{ display: "flex", gap: 6, marginLeft: 16 }}>
            {[60, 80, 70, 65, 75, 55].map((w, i) => <Sk key={i} w={w} h={28} r={14} />)}
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={28} h={28} r={6} /><Sk w={28} h={28} r={6} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px", display: "flex", gap: 24 }}>
          {/* Session grid */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} style={{ borderRadius: 16, border: `1px solid ${border}`, padding: "18px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Sk w={36} h={36} r={18} /><Sk w={80} h={20} r={10} />
                  </div>
                  <Sk w={90} h={13} r={5} />
                  <Sk h={12} r={4} /><Sk w="80%" h={12} r={4} />
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    <Sk w={50} h={20} r={10} /><Sk w={55} h={20} r={10} />
                  </div>
                  <Sk h={36} r={8} />
                </div>
              ))}
            </div>
          </div>
          {/* Right — streak + stats */}
          <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 14, flexShrink: 0 }}>
            <div style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
              <Sk w={60} h={60} r={30} /><Sk w={80} h={24} r={6} /><Sk w={120} h={11} r={4} />
            </div>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ borderRadius: 12, border: `1px solid ${border}`, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                <Sk w={70} h={10} r={4} /><Sk w={90} h={22} r={5} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
