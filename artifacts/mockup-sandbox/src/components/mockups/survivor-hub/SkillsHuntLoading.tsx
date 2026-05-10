// STATE: Loading — data fetch in progress
import { Search } from "lucide-react";

const bg = "#0F1117", border = "#1E2A3A", COLOR = "#A855F7";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function SkillsHuntLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden" }}>

      {/* Icon rail */}
      <aside style={{ width: 72, background: "#090B0F", borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 10, flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: COLOR + "30", border: `1px solid ${COLOR}50`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
          <Search size={20} color={COLOR} />
        </div>
        {[1,2,3,4].map(i => <Sk key={i} w={44} h={44} r={12} />)}
      </aside>

      {/* Left sidebar */}
      <aside style={{ width: 240, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${border}` }}>
          <Sk w={100} h={13} r={5} />
          <div style={{ marginTop: 6 }}><Sk w={180} h={10} r={4} /></div>
        </div>
        <div style={{ flex: 1, padding: "12px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          {[1,2,3,4].map(i => <Sk key={i} h={36} r={8} />)}
          <div style={{ marginTop: 12 }}><Sk w={80} h={10} r={4} /></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
            {[1,2,3,4,5,6].map(i => <Sk key={i} w={32} h={32} r={8} />)}
          </div>
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${border}` }}>
          <Sk h={68} r={10} />
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, flexShrink: 0 }}>
          <Sk w={160} h={15} r={6} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}><Sk w={120} h={26} r={13} /><Sk w={100} h={26} r={13} /></div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 28px", display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Form skeleton */}
          <div>
            <Sk w={180} h={20} r={6} />
            <div style={{ marginTop: 6 }}><Sk w={320} h={12} r={4} /></div>
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1, maxWidth: 560, display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Name row */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <Sk w={80} h={10} r={4} />
                  <div style={{ marginTop: 8 }}><Sk h={40} r={10} /></div>
                </div>
                <div style={{ flex: 1 }}>
                  <Sk w={80} h={10} r={4} />
                  <div style={{ marginTop: 8 }}><Sk h={40} r={10} /></div>
                </div>
              </div>
              {/* Quora */}
              <div>
                <Sk w={140} h={10} r={4} />
                <div style={{ marginTop: 8 }}><Sk h={40} r={10} /></div>
              </div>
              {/* Skills */}
              <div>
                <Sk w={60} h={10} r={4} />
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  {[1,2,3].map(i => <Sk key={i} w={70} h={26} r={13} />)}
                </div>
                <div style={{ marginTop: 10 }}><Sk h={40} r={10} /></div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {[1,2,3,4,5,6].map(i => <Sk key={i} w={80} h={26} r={13} />)}
                </div>
              </div>
              <Sk h={48} r={12} />
            </div>

            {/* Why it works panel */}
            <div style={{ width: 260, flexShrink: 0 }}>
              <Sk h={200} r={14} />
              <div style={{ marginTop: 14 }}><Sk h={80} r={12} /></div>
            </div>
          </div>
        </div>
      </main>

      {/* Right panel */}
      <aside style={{ width: 280, borderLeft: `1px solid ${border}`, background: "#0D0F14", padding: "20px 16px", flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        <Sk w={120} h={10} r={4} />
        <Sk h={100} r={14} />
        <Sk w={100} h={10} r={4} />
        {[1,2,3,4].map(i => <Sk key={i} h={44} r={8} />)}
        <Sk h={80} r={12} />
      </aside>
    </div>
  );
}
