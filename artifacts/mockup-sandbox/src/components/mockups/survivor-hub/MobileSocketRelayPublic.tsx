// STATE: Unauthenticated — visitor with no session
import { Share2, Lock } from "lucide-react";

const bg = "#0F1117", COLOR = "#F43F5E";

export function MobileSocketRelayPublic() {
  return (
    <div style={{ width: 390, minHeight: 844, background: bg, display: "flex", flexDirection: "column", fontFamily: "'Inter',system-ui", color: "#F9FAFB" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: 12, color: "#6B7280" }}>●●●</span>
      </div>
      <div style={{ padding: "24px 20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Share2 size={20} color={COLOR} />
          <span style={{ fontSize: 20, fontWeight: 800 }}>Socket Relay</span>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 20, background: COLOR + "20", border: `1px solid ${COLOR}40`, fontSize: 11, color: COLOR, fontWeight: 600, width: "fit-content" }}>Peer-to-peer needs board</span>
        <p style={{ margin: 0, fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>Post what you need, offer what you have. Clothing, furniture, skills, time — the survivor community connects directly.</p>
        <button style={{ padding: "14px", borderRadius: 12, background: COLOR, border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Join the Hub — Free</button>
      </div>

      <div style={{ flex: 1, padding: "0 20px 20px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
          {[
            { type: "NEED", title: "Winter coat, size M, Houston TX", time: "2h ago" },
            { type: "OFFER", title: "Free resume review — legal expertise", time: "3h ago" },
            { type: "NEED", title: "Childcare 2 evenings/week, Atlanta GA", time: "5h ago" },
            { type: "OFFER", title: "Spare bedroom for 2 weeks, Chicago", time: "6h ago" },
          ].map((r, i) => (
            <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: "12px 14px" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: r.type === "NEED" ? COLOR + "20" : "#22C55E20", color: r.type === "NEED" ? COLOR : "#22C55E" }}>{r.type}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{r.title}</div>
              <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>{r.time}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px solid ${COLOR}50`, background: COLOR + "10", display: "flex", alignItems: "center", justifyContent: "center" }}><Lock size={20} color={COLOR} /></div>
          <div style={{ fontSize: 15, fontWeight: 700, textAlign: "center" }}>Sign in to post and respond</div>
          <button style={{ padding: "10px 24px", borderRadius: 9, background: COLOR, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
