// design-sync
import { Heart, Home, Layers, User } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

const Sk = ({ w, h, radius = 6 }: { w: string | number; h: number; radius?: number }) => (
  <div style={{ width: w, height: h, borderRadius: radius, background: surface, border: `1px solid ${border}` }} />
);

export function MobileContributionsLoading() {
  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header skeleton */}
      <div style={{ padding: "12px 16px 10px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={13} color="#fff" />
          </div>
          <Sk w={130} h={16} />
        </div>
        <Sk w={180} h={12} />
      </div>

      {/* Tab bar skeleton */}
      <div style={{ display: "flex", borderBottom: `1px solid ${border}`, padding: "0 14px", gap: 24, flexShrink: 0 }}>
        {[70, 80, 90].map((w, i) => (
          <div key={i} style={{ padding: "12px 0" }}>
            <Sk w={w} h={12} />
          </div>
        ))}
      </div>

      {/* Content skeleton */}
      <div style={{ flex: 1, padding: "14px", display: "flex", flexDirection: "column", gap: 12 }}>
        <Sk w="80%" h={14} />
        <Sk w="60%" h={14} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ background: surface, borderRadius: 10, padding: "12px 14px", border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Sk w={30} h={30} radius={8} />
              <Sk w={100} h={14} />
            </div>
            <Sk w="70%" h={12} />
            <Sk w={160} h={6} radius={99} />
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {[
          { Icon: Home,   label: "Hub",     active: false },
          { Icon: Heart,  label: "Support", active: true  },
          { Icon: Layers, label: "Apps",    active: false },
          { Icon: User,   label: "Profile", active: false },
        ].map(({ Icon, label, active }) => (
          <button key={label} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: active ? COLOR : subtle }} />
            <span style={{ fontSize: 9, fontWeight: active ? 700 : 400, color: active ? COLOR : subtle }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
