import { Coins, ArrowDownLeft, ArrowUpRight, Zap } from "lucide-react";

const bg = "#0F1117";
const surface = "#161B27";
const border = "#1E2A3A";
const text = "#F9FAFB";
const subtle = "#6B7280";
const COLOR = "#F59E0B";

const WAYS = [
  { icon: Zap, label: "Complete Foundation jobs" },
  { icon: ArrowDownLeft, label: "Receive peer payments" },
  { icon: ArrowUpRight, label: "Sell skills via Directory" },
];

export function MobileServiceCreditsEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      <div style={{ background: "#090B0F", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Coins size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Service Credits</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 16px" }}>
        {/* Balance card */}
        <div style={{ borderRadius: 16, background: `linear-gradient(135deg, ${COLOR}20, ${COLOR}08)`, border: `1px solid ${COLOR}30`, padding: "24px", textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: subtle, marginBottom: 6 }}>Your Balance</div>
          <div style={{ fontSize: 52, fontWeight: 900, color: COLOR }}>0</div>
          <div style={{ fontSize: 12, color: subtle }}>Service Credits</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: subtle, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Ways to earn</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {WAYS.map(({ icon: Icon, label }) => (
            <div key={label} style={{ borderRadius: 10, border: `1px solid ${border}`, background: surface, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon size={16} color={COLOR} />
              <span style={{ fontSize: 13, color: text }}>{label}</span>
            </div>
          ))}
        </div>
        <button style={{ width: "100%", padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#000", fontWeight: 700, fontSize: 15 }}>
          Start Earning Credits
        </button>
      </div>
    </div>
  );
}
