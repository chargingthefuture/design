// STATE: Loading — data fetch in progress
import { Shield } from "lucide-react";

const bg = "#0F1117", surface = "#161B27", border = "#1E2A3A", COLOR = "#0EA5E9";
const Sk = ({ w = "100%", h = 14, r = 6 }: { w?: string | number; h?: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
);

export function TrustLoading() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter',system-ui", color: "#F9FAFB", overflow: "hidden", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>
        TRUST WIDGET — LOADING
      </div>
      <div style={{ display: "flex", gap: 40 }}>
        {/* Skeleton trust card */}
        {[1, 2].map(i => (
          <div key={i} style={{ width: 280, borderRadius: 16, border: `1px solid ${border}`, background: surface, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Shield size={14} color={COLOR} /><Sk w={60} h={14} r={6} />
              </div>
              <Sk w={70} h={22} r={11} />
            </div>
            {i === 1 ? (
              // Verified — signal list skeletons
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[1, 2, 3].map(j => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, border: `1px solid ${border}` }}>
                    <Sk w={16} h={16} r={8} /><Sk w={140} h={13} r={5} />
                  </div>
                ))}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
                  {[1, 2, 3, 4].map(j => (
                    <div key={j} style={{ borderRadius: 8, border: `1px solid ${border}`, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
                      <Sk w={60} h={10} r={4} /><Sk w={80} h={16} r={5} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Empty — icon + steps
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "12px 0" }}>
                <Sk w={56} h={56} r={28} />
                <Sk w={140} h={14} r={5} />
                <Sk w={200} h={11} r={4} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                  {[1, 2, 3].map(j => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Sk w={20} h={20} r={10} /><Sk w={160} h={12} r={4} />
                    </div>
                  ))}
                </div>
                <Sk h={38} r={8} />
              </div>
            )}
            <Sk h={34} r={8} />
          </div>
        ))}
      </div>
    </div>
  );
}
