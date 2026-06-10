// design-sync
import { useState } from "react";
import {
  Home, BookOpen, TrendingUp, Users, Trophy,
  Coins, ArrowDownLeft, ArrowUpRight, Lock, Clock, CheckCircle, Plus,
} from "lucide-react";

const green   = "#10B981";
const bg      = "var(--comic-bg, #0F1117)";
const surface = "#161B27";
const border  = "#1E2A3A";
const muted   = "#4B5563";
const text    = "#E2E8F0";
const subtle  = "#94A3B8";

type TxType = "earned" | "spent" | "escrow_in" | "escrow_out" | "achievement";
const TX_COLORS: Record<TxType, string> = {
  earned: green, spent: "#EF4444", escrow_in: "#F59E0B", escrow_out: green, achievement: "#A855F7",
};
const TX_LABELS: Record<TxType, string> = {
  earned: "Earned", spent: "Spent", escrow_in: "Escrowed", escrow_out: "Released", achievement: "Badge",
};

const TRANSACTIONS: { id: number; date: string; type: TxType; source: string; amount: number }[] = [
  { id: 1,  date: "Mar 19", type: "achievement", source: "Badge: Skills Mapper",            amount: +35 },
  { id: 2,  date: "Mar 10", type: "achievement", source: "Badge: Peer Encourager",          amount: +20 },
  { id: 3,  date: "Mar 6",  type: "achievement", source: "Badge: 5-Day Streak",             amount: +15 },
  { id: 4,  date: "Mar 1",  type: "escrow_out",  source: "Released — Financial Literacy",   amount: +25 },
  { id: 5,  date: "Feb 14", type: "escrow_in",   source: "Escrowed — Web Dev Fundamentals", amount: -16 },
  { id: 6,  date: "Feb 14", type: "spent",       source: "Enrolled — Web Dev (40 SC)",      amount: -40 },
  { id: 7,  date: "Jan 28", type: "earned",       source: "Foundation gig",                 amount: +45 },
  { id: 8,  date: "Jan 10", type: "earned",       source: "SkillsHunt badge",               amount: +30 },
];

const FILTER_TABS = ["All", "Earned", "Spent", "Escrow"] as const;

const NAV = [
  { Icon: Home, label: "Home", key: "home" },
  { Icon: BookOpen, label: "Browse", key: "browse" },
  { Icon: TrendingUp, label: "Progress", key: "progress" },
  { Icon: Users, label: "Trainers", key: "trainers" },
  { Icon: Trophy, label: "Awards", key: "awards" },
];

function matches(tx: typeof TRANSACTIONS[0], tab: typeof FILTER_TABS[number]) {
  if (tab === "All") return true;
  if (tab === "Earned") return tx.type === "earned" || tx.type === "achievement" || tx.type === "escrow_out";
  if (tab === "Spent") return tx.type === "spent";
  if (tab === "Escrow") return tx.type === "escrow_in";
  return true;
}

export function MobileLevelUpCreditsWallet() {
  const [activeTab, setActiveTab] = useState<typeof FILTER_TABS[number]>("All");
  const visible = TRANSACTIONS.filter(tx => matches(tx, activeTab));

  return (
    <div style={{ width: 390, height: 844, background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Status bar */}
      <div style={{ height: 44, background: surface, borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: text }}>9:41</span>
        <span style={{ fontSize: 11, color: subtle }}>••• WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "14px 16px 12px", background: surface, borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Coins size={13} color="#000" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: text }}>Credits Wallet</span>
        </div>
        <div style={{ fontSize: 12, color: subtle }}>ServiceCredits earned, spent, escrowed</div>
      </div>

      {/* Balance cards */}
      <div style={{ padding: "12px 14px", flexShrink: 0 }}>
        <div style={{ background: surface, borderRadius: 12, padding: "16px", border: `1px solid ${border}`, marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <Coins size={14} color={green} />
            <span style={{ fontSize: 12, color: subtle }}>Available Balance</span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: green, marginBottom: 4 }}>148 <span style={{ fontSize: 16 }}>SC</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#F59E0B" }}>
            <Lock size={11} />
            16 SC locked in escrow
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { label: "Total Earned", value: "420 SC", color: "#3B82F6", Icon: ArrowDownLeft },
            { label: "Total Spent",  value: "256 SC", color: "#EF4444", Icon: ArrowUpRight },
          ].map(({ label, value, color, Icon }) => (
            <div key={label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "11px 12px", border: `1px solid ${border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Icon size={12} color={color} />
                <span style={{ fontSize: 11, color: subtle }}>{label}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div style={{ margin: "0 14px 10px", padding: "8px 10px", background: `${green}08`, borderRadius: 7, border: `1px solid ${green}20`, display: "flex", alignItems: "flex-start", gap: 7, flexShrink: 0 }}>
        <CheckCircle size={12} color={green} style={{ flexShrink: 0, marginTop: 1 }} />
        <span style={{ fontSize: 11, color: subtle, lineHeight: 1.5 }}>ServiceCredits are a utility token — no fiat conversion. Use inside the Survivor Hub network.</span>
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 6, padding: "0 14px 10px", flexShrink: 0 }}>
        {FILTER_TABS.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "5px 12px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 500, background: activeTab === tab ? green : border, color: activeTab === tab ? "#000" : subtle }}>
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 14px 10px" }}>
        {visible.map((tx, i) => {
          const isPositive = tx.amount > 0;
          const typeColor = TX_COLORS[tx.type];
          return (
            <div key={tx.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", background: surface, borderRadius: 9, border: `1px solid ${border}`, marginBottom: 6 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: `${typeColor}12`, border: `1px solid ${typeColor}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {isPositive ? <ArrowDownLeft size={14} color={typeColor} /> : <ArrowUpRight size={14} color={typeColor} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: text, marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{tx.source}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: typeColor, background: `${typeColor}12`, padding: "1px 6px", borderRadius: 20 }}>{TX_LABELS[tx.type]}</span>
                  <span style={{ fontSize: 10, color: muted }}>{tx.date}</span>
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: isPositive ? green : "#EF4444", flexShrink: 0 }}>
                {isPositive ? "+" : ""}{tx.amount} SC
              </div>
            </div>
          );
        })}

        {/* Escrow reminder */}
        <div style={{ margin: "14px 0 6px", padding: "12px 14px", background: `${green}08`, borderRadius: 10, border: `1px solid ${green}20` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <Clock size={12} color="#F59E0B" />
            <span style={{ fontSize: 12, fontWeight: 600, color: text }}>Escrow: Web Dev Fundamentals</span>
          </div>
          <div style={{ fontSize: 12, color: subtle, marginBottom: 6 }}>16 SC locked · releases on Milestone 3 (Apr 2)</div>
          <div style={{ height: 5, background: border, borderRadius: 99 }}>
            <div style={{ width: "40%", height: "100%", background: "#3B82F6", borderRadius: 99 }} />
          </div>
          <div style={{ fontSize: 11, color: muted, marginTop: 4 }}>2 of 5 milestones complete</div>
        </div>

        <button style={{ width: "100%", padding: "10px", borderRadius: 8, background: green, border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 10 }}>
          <Plus size={13} /> Browse Ways to Earn
        </button>
      </div>

      {/* Bottom nav */}
      <div style={{ background: surface, borderTop: `1px solid ${border}`, display: "flex", paddingBottom: 20, flexShrink: 0 }}>
        {NAV.map(({ Icon, label, key }) => (
          <button key={key} style={{ flex: 1, paddingTop: 10, paddingBottom: 4, background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={20} style={{ color: muted }} />
            <span style={{ fontSize: 9, color: muted }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
