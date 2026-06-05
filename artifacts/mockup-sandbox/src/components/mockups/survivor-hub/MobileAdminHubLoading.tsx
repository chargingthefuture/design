// design-sync
// STATE: Admin Hub — loading skeleton
import { LayoutDashboard } from "lucide-react";

const ACCENT = "#6366F1";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

function Bone({ w, h, r = 8 }: { w: string | number; h: number; r?: number }) {
  return <div style={{ width: w, height: h, borderRadius: r, background: surface, border: `1px solid ${border}` }} />;
}

export function MobileAdminHubLoading() {
  return (
    <div style={{ width: 390, height: "100vh", background: bg, fontFamily: "'Inter',system-ui,sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: "#090B0F", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: subtle }}>•••</span>
      </div>

      {/* Header */}
      <div style={{ padding: "12px 16px 10px", borderBottom: `1px solid ${border}`, background: "#0D0F14", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: `${ACCENT}20`, border: `1px solid ${ACCENT}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutDashboard size={16} color={ACCENT} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Admin Hub</div>
            <div style={{ fontSize: 11, color: subtle }}>Loading…</div>
          </div>
        </div>
      </div>

      {/* Skeleton */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ padding: "12px 14px", borderRadius: 12, background: surface, border: `1px solid ${border}` }}>
              <Bone w="60%" h={10} />
              <div style={{ marginTop: 8 }}><Bone w="80%" h={22} /></div>
              <div style={{ marginTop: 6 }}><Bone w="50%" h={9} /></div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 20 }}>
          <Bone w={120} h={11} />
          {[0,1,2].map(i => (
            <div key={i} style={{ marginTop: 8, padding: "10px 12px", borderRadius: 10, background: surface, border: `1px solid ${border}` }}>
              <Bone w="90%" h={12} />
              <div style={{ marginTop: 6 }}><Bone w="30%" h={9} /></div>
            </div>
          ))}
        </div>
        <Bone w={100} h={11} />
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ marginTop: 8, padding: "10px 12px", borderRadius: 10, background: surface, border: `1px solid ${border}` }}>
            <Bone w="70%" h={13} />
          </div>
        ))}
      </div>

      {/* Bottom nav skeleton */}
      <div style={{ height: 72, background: "#090B0F", borderTop: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px", flexShrink: 0 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Bone w={36} h={36} r={10} />
            <Bone w={28} h={8} />
          </div>
        ))}
      </div>
    </div>
  );
}
