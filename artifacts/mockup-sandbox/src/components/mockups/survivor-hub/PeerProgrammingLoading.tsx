// STATE: Loading — data fetch in progress
import { Users } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#8B5CF6";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function PeerProgrammingLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>
      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <Users size={20} color={COLOR} />
        </div>
        {[1, 2, 3].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={170} h={16} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Sk w={100} h={34} r={8} /><Sk w={28} h={28} r={6} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* My cohort card */}
          <div style={{ borderRadius: 16, border: `1px solid ${COLOR}30`, background: COLOR + "06", padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <Sk w={200} h={18} r={6} /><Sk w={70} h={22} r={11} />
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              {[1, 2, 3, 4, 5].map(i => <Sk key={i} w={100} h={30} r={8} />)}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[1, 2, 3, 4].map(i => <Sk key={i} w={32} h={32} r={16} />)}
              <Sk w={60} h={12} r={4} />
              <div style={{ marginLeft: "auto" }}><Sk w={130} h={36} r={8} /></div>
            </div>
          </div>

          {/* Open cohorts */}
          <Sk w={130} h={14} r={5} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ borderRadius: 14, border: `1px solid ${border}`, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Sk w={160} h={15} r={5} /><Sk w={55} h={20} r={10} />
                </div>
                <Sk w={100} h={12} r={4} />
                <div style={{ display: "flex", gap: 6 }}>
                  {[50, 60, 55].map((w, j) => <Sk key={j} w={w} h={20} r={10} />)}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex", gap: -4 }}>
                    {[1, 2, 3].map(j => <Sk key={j} w={24} h={24} r={12} />)}
                  </div>
                  <Sk w={60} h={11} r={4} />
                  <div style={{ marginLeft: "auto" }}><Sk w={80} h={30} r={8} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
