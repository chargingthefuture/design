// design-sync
import { Heart } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const Skeleton = ({ w, h, radius = 6 }: { w: string | number; h: number; radius?: number }) => (
  <div style={{ width: w, height: h, borderRadius: radius, background: surface, border: `1px solid ${border}` }} />
);

export function ContributionsLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Sidebar skeleton */}
      <div style={{ width: 200, background: surface, borderRight: `1px solid ${border}`, padding: "18px 14px", display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={14} color="#fff" />
          </div>
          <Skeleton w={90} h={14} />
        </div>
        {[100, 80, 90].map((w, i) => <Skeleton key={i} w={w} h={12} />)}
      </div>

      {/* Main skeleton */}
      <div style={{ flex: 1, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
        <Skeleton w={280} h={22} radius={8} />
        <Skeleton w={460} h={14} />
        <Skeleton w={360} h={14} />
        {/* Goal bars */}
        <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ flex: 1, background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}` }}>
              <Skeleton w="60%" h={12} />
              <div style={{ margin: "12px 0 8px" }}>
                <Skeleton w="40%" h={22} radius={4} />
              </div>
              <Skeleton w="100%" h={6} radius={99} />
            </div>
          ))}
        </div>
        {/* Cards */}
        <div style={{ marginTop: 4 }}>
          <Skeleton w={200} h={16} />
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, background: surface, borderRadius: 10, padding: "16px", border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Skeleton w={30} h={30} radius={8} />
                  <Skeleton w={80} h={14} />
                </div>
                <Skeleton w="80%" h={12} />
                <Skeleton w="60%" h={11} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel skeleton */}
      <div style={{ width: 280, background: surface, borderLeft: `1px solid ${border}`, padding: "18px 14px", display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 12, borderBottom: `1px solid ${border}` }}>
          <Skeleton w={14} h={14} radius={99} />
          <Skeleton w={120} h={14} />
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ background: bg, borderRadius: 9, padding: "12px", border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 8 }}>
            <Skeleton w="80%" h={13} />
            <Skeleton w="55%" h={11} />
            <Skeleton w="40%" h={11} />
          </div>
        ))}
      </div>
    </div>
  );
}
