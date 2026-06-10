// design-sync
import { Heart, CheckCircle, MessageSquare, ArrowLeft, Clock } from "lucide-react";

const COLOR   = "#F472B6";
const bg      = "#0F1117";
const surface = "#161B27";
const border  = "#1E2A3A";
const text    = "#F9FAFB";
const subtle  = "#6B7280";

export function ContributionsConfirmation() {
  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 200, background: surface, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "18px 14px 14px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: COLOR, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: text }}>Contributions</span>
          </div>
          <div style={{ fontSize: 11, color: subtle }}>Community support drive</div>
        </div>
        <nav style={{ padding: "10px 8px", flex: 1 }}>
          {["Drive progress", "Contribute", "My contributions"].map(label => (
            <div key={label} style={{ padding: "8px 10px", borderRadius: 7, marginBottom: 2, fontSize: 13, cursor: "pointer", color: subtle }}>
              {label}
            </div>
          ))}
        </nav>
        <div style={{ padding: "0 10px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", borderRadius: 7, fontSize: 12, color: subtle, cursor: "pointer" }}>
            <ArrowLeft size={13} /> Back to Hub
          </div>
        </div>
      </div>

      {/* Main — confirmation */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
        <div style={{ maxWidth: 540, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: `${COLOR}18`, border: `1px solid ${COLOR}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <CheckCircle size={26} color={COLOR} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: text }}>Submission received</h1>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: subtle }}>Your gift card submission is being reviewed.</p>
            </div>
          </div>

          {/* Signal instructions box */}
          <div style={{ background: surface, borderRadius: 12, padding: "20px 22px", border: `1px solid ${border}`, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
              <MessageSquare size={14} color="#38BDF8" />
              <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Send the code on Signal</span>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: 13, color: subtle, lineHeight: 1.7 }}>
              Send your gift card code directly to the platform owner on Signal. The contact details are in the owner's platform profile. Once the card is matched to your submission, your Service Credits will be added.
            </p>
            <div style={{ padding: "10px 14px", background: bg, borderRadius: 8, border: `1px solid ${border}` }}>
              <div style={{ fontSize: 12, color: subtle, marginBottom: 4 }}>Questions or anything else?</div>
              <div style={{ fontSize: 12, color: "#38BDF8" }}>Post in the #support channel in the Hub — that's the right place for anything other than sending the code.</div>
            </div>
          </div>

          {/* Credits status */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: `${COLOR}08`, borderRadius: 10, border: `1px solid ${COLOR}20`, marginBottom: 28 }}>
            <Clock size={16} color="#F59E0B" />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>Service Credits pending confirmation</div>
              <div style={{ fontSize: 12, color: subtle }}>Once your gift card is matched, your credits will appear in your wallet automatically.</div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: surface, border: `1px solid ${border}`, color: subtle, fontSize: 13, cursor: "pointer" }}>
              View my contributions
            </button>
            <button style={{ flex: 1, padding: "10px", borderRadius: 8, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Back to Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
