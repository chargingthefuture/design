// design-sync
// Genuinely zero profiles — no Browse All button (filter/search not active)
import { BookOpen, Search, ShieldCheck } from "lucide-react";

const bg     = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "var(--comic-text-primary, #F9FAFB)";
const subtle  = "var(--comic-text-secondary, #6B7280)";
const COLOR   = "#93C5FD";

export function MobileDirectoryEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text }}>
      {/* Status bar */}
      <div style={{ background: "var(--comic-surface-alt, #090B0F)", padding: "12px 16px 6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>●●●</span>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <BookOpen size={16} color={COLOR} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>Directory</span>
      </div>

      {/* Search bar (disabled — no profiles to search) */}
      <div style={{ padding: "12px 16px", borderBottom: `1px solid ${border}` }}>
        <div style={{ position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: subtle }} />
          <input
            placeholder="Search providers, skills…"
            readOnly
            style={{ width: "100%", padding: "10px 12px 10px 36px", background: surface, border: `1px solid ${border}`, borderRadius: 10, fontSize: 14, color: subtle, outline: "none", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Empty state — genuine zero, no Browse All */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 28px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: `${COLOR}12`, border: `1px dashed ${COLOR}35`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <BookOpen size={30} color={`${COLOR}55`} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>No providers listed yet</div>
        <div style={{ fontSize: 14, color: subtle, lineHeight: 1.6, marginBottom: 12 }}>
          Verified providers will appear here as they join the network. All providers are background-checked before listing.
        </div>
        <div style={{ fontSize: 13, color: "#4B5563", lineHeight: 1.5 }}>
          Want to be the first? Add your skills and availability so other survivors can find and connect with you.
        </div>
      </div>

      {/* Privacy footer */}
      <div style={{ padding: "16px", borderTop: `1px solid ${border}`, background: surface }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: `${COLOR}10`, border: `1px solid ${COLOR}20`, borderRadius: 8, padding: "10px 12px" }}>
          <ShieldCheck size={13} color={COLOR} />
          <span style={{ fontSize: 12, color: subtle }}>Only visible to verified survivors in the network</span>
        </div>
      </div>
    </div>
  );
}
