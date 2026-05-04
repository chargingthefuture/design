import { ShieldCheck, Eye, ChevronDown, CheckCircle2 } from "lucide-react";

const BRAND = "#0EA5E9";
const BRAND_DIM = "rgba(14,165,233,0.15)";
const BRAND_BORDER = "rgba(14,165,233,0.25)";
const CARD_BG = "rgba(14,165,233,0.06)";
const CARD_BORDER = "rgba(14,165,233,0.18)";

function Label({ children }: { children: string }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B5563", marginBottom: 12 }}>
      {children}
    </div>
  );
}

function TrustHeader({ verified }: { verified: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px 10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <ShieldCheck size={14} style={{ color: BRAND }} />
        <span style={{ fontSize: 12, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.06em", textTransform: "uppercase" }}>Trust</span>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        background: verified ? BRAND_DIM : "rgba(255,255,255,0.05)",
        color: verified ? "#38BDF8" : "#6B7280",
        border: `1px solid ${verified ? BRAND_BORDER : "rgba(255,255,255,0.08)"}`,
        fontSize: 10, padding: "2px 8px", borderRadius: 20,
      }}>
        <ShieldCheck size={9} />
        {verified ? "Verified" : "Unverified"}
      </div>
    </div>
  );
}

function TrustEmpty() {
  return (
    <div style={{ borderRadius: 12, background: CARD_BG, border: `1px solid ${CARD_BORDER}`, overflow: "hidden", width: 260 }}>
      <TrustHeader verified={false} />
      <div style={{ padding: "4px 14px 14px" }}>
        {/* Visual placeholder */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            border: "2px dashed rgba(14,165,233,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10,
          }}>
            <ShieldCheck size={22} style={{ color: "rgba(14,165,233,0.4)" }} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF", marginBottom: 4 }}>No trust signals yet</div>
          <div style={{ fontSize: 11, color: "#4B5563", textAlign: "center", lineHeight: 1.5 }}>
            Trust signals appear as you participate in the community
          </div>
        </div>

        {/* Steps to earn trust — all unchecked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
          {["Complete your profile", "Make your first transaction", "Use at least one plugin"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 9px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.12)", flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#6B7280" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button style={{ width: "100%", background: BRAND_DIM, border: `1px solid ${BRAND_BORDER}`, borderRadius: 8, padding: "8px 0", fontSize: 12, fontWeight: 600, color: "#38BDF8", cursor: "pointer", marginBottom: 10 }}>
          Request Verification
        </button>

        {/* Visibility */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Eye size={11} style={{ color: "#4B5563" }} />
            <span style={{ fontSize: 11, color: "#4B5563" }}>Visible to: Public</span>
          </div>
          <ChevronDown size={11} style={{ color: "#4B5563" }} />
        </div>
      </div>
    </div>
  );
}

function TrustVerified() {
  const signals = [
    { label: "Last Active", value: "Recently" },
    { label: "Activity", value: "High" },
    { label: "Transactions", value: "Established" },
    { label: "Active Plugins", value: "7 apps" },
  ];

  const steps = [
    { label: "Complete your profile", done: true },
    { label: "Make your first transaction", done: true },
    { label: "Use at least one plugin", done: true },
  ];

  return (
    <div style={{ borderRadius: 12, background: CARD_BG, border: `1px solid ${CARD_BORDER}`, overflow: "hidden", width: 260 }}>
      <TrustHeader verified={true} />
      <div style={{ padding: "4px 14px 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {/* Steps — all checked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 12 }}>
          {steps.map(({ label, done }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 9px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
              <CheckCircle2 size={14} style={{ color: done ? "#38BDF8" : "rgba(255,255,255,0.12)", flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: done ? "#CBD5E1" : "#6B7280", textDecoration: done ? "none" : "none" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Signal buckets 2×2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
          {signals.map(({ label, value }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "7px 9px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: 10, color: "#4B5563", marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#E2E8F0" }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Visibility */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 9px", background: "rgba(255,255,255,0.03)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Eye size={11} style={{ color: "#4B5563" }} />
            <span style={{ fontSize: 11, color: "#6B7280" }}>Visible to: All Members</span>
          </div>
          <ChevronDown size={11} style={{ color: "#4B5563" }} />
        </div>
      </div>
    </div>
  );
}

export function Trust() {
  return (
    <div style={{
      minHeight: "100vh", background: "#0F1117",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 40, gap: 32, fontFamily: "'Inter', sans-serif",
    }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BRAND, marginBottom: 6 }}>Trust Widget — Both States</div>
        <div style={{ fontSize: 13, color: "#4B5563" }}>Right panel · below "Welcome, Survivor" card</div>
      </div>

      {/* Side by side */}
      <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <Label>Empty state — new member, no activity</Label>
          <TrustEmpty />
        </div>

        {/* Divider */}
        <div style={{ width: 1, background: "rgba(255,255,255,0.06)", alignSelf: "stretch", marginTop: 28 }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <Label>Verified state — active member</Label>
          <TrustVerified />
        </div>
      </div>

      {/* State transition note */}
      <div style={{ maxWidth: 560, background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 10, padding: "12px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "#38BDF8", fontWeight: 600, marginBottom: 4 }}>State logic</div>
        <div style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.7 }}>
          Show <strong style={{ color: "#9CA3AF" }}>empty state</strong> when <code style={{ background: "rgba(255,255,255,0.06)", padding: "1px 5px", borderRadius: 4, fontSize: 10 }}>trustProfile === null</code> or <code style={{ background: "rgba(255,255,255,0.06)", padding: "1px 5px", borderRadius: 4, fontSize: 10 }}>signalCount === 0</code>.{" "}
          Show <strong style={{ color: "#9CA3AF" }}>verified state</strong> once the user has at least one trust signal.
          Visibility dropdown is always rendered regardless of state.
        </div>
      </div>
    </div>
  );
}
