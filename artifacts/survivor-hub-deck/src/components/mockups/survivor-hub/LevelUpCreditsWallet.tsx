// design-sync
import { useState } from "react";
import {
  Home, BookOpen, TrendingUp, Users, Trophy, Coins,
  Target, ArrowDownLeft, ArrowUpRight, Clock, CheckCircle,
  Lock, Plus,
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
  earned: "Earned", spent: "Spent", escrow_in: "Escrowed", escrow_out: "Released", achievement: "Achievement",
};

const TRANSACTIONS: { id: number; date: string; type: TxType; source: string; amount: number; balance: number }[] = [
  { id: 1,  date: "Mar 19", type: "achievement",  source: "Achievement: Skills Mapper",              amount: +35,  balance: 148 },
  { id: 2,  date: "Mar 10", type: "achievement",  source: "Achievement: Peer Encourager",            amount: +20,  balance: 113 },
  { id: 3,  date: "Mar 6",  type: "achievement",  source: "Achievement: 5-Day Streak",               amount: +15,  balance: 93  },
  { id: 4,  date: "Mar 1",  type: "escrow_out",   source: "Escrow released — Financial Literacy",    amount: +25,  balance: 78  },
  { id: 5,  date: "Mar 1",  type: "achievement",  source: "Achievement: Full Cohort Complete",       amount: +50,  balance: 53  },
  { id: 6,  date: "Feb 28", type: "achievement",  source: "Achievement: Budget Master",              amount: +30,  balance: 3   },
  { id: 7,  date: "Feb 14", type: "escrow_in",    source: "Escrow locked — Web Dev Fundamentals",   amount: -16,  balance: -27 },
  { id: 8,  date: "Feb 14", type: "spent",        source: "Enrolled — Web Dev Fundamentals (40 SC)",amount: -40,  balance: -11 },
  { id: 9,  date: "Feb 2",  type: "achievement",  source: "Achievement: Milestone Crusher",          amount: +25,  balance: 29  },
  { id: 10, date: "Jan 28", type: "earned",       source: "Foundation gig — content writing",        amount: +45,  balance: 4   },
  { id: 11, date: "Jan 20", type: "spent",        source: "Enrolled — Financial Literacy (25 SC)",   amount: -25,  balance: -41 },
  { id: 12, date: "Jan 14", type: "achievement",  source: "Achievement: First Enrollment",           amount: +10,  balance: -16 },
  { id: 13, date: "Jan 10", type: "earned",       source: "SkillsHunt badge — Data Analysis",        amount: +30,  balance: -26 },
  { id: 14, date: "Jan 5",  type: "earned",       source: "SocketRelay relay request",               amount: +15,  balance: -56 },
];

const ESCROW_ITEMS = [
  { cohort: "Web Development Fundamentals", trainer: "Maya R.", amount: 16, releaseOn: "Milestone 3 — Apr 2", progress: 2, total: 5 },
];

const FILTER_TABS = ["All", "Earned", "Spent", "Escrow"] as const;

const navItems = [
  { Icon: Home, label: "Dashboard", active: false },
  { Icon: BookOpen, label: "Browse Cohorts", active: false },
  { Icon: TrendingUp, label: "My Progress", active: false },
  { Icon: Users, label: "My Trainers", active: false },
  { Icon: Trophy, label: "Achievements", active: false },
  { Icon: Coins, label: "Credits Wallet", active: true },
];

function matches(tx: typeof TRANSACTIONS[0], tab: typeof FILTER_TABS[number]) {
  if (tab === "All") return true;
  if (tab === "Earned") return tx.type === "earned" || tx.type === "achievement" || tx.type === "escrow_out";
  if (tab === "Spent") return tx.type === "spent";
  if (tab === "Escrow") return tx.type === "escrow_in";
  return true;
}

export function LevelUpCreditsWallet() {
  const [activeTab, setActiveTab] = useState<typeof FILTER_TABS[number]>("All");

  const visible = TRANSACTIONS.filter(tx => matches(tx, activeTab));
  const available = 148;
  const inEscrow = 16;
  const totalEarned = 420;
  const totalSpent = 256;

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>

      {/* Sidebar */}
      <div style={{ width: 220, background: surface, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 16px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Target size={15} color="#000" />
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: text }}>LevelUp</span>
          </div>
          <div style={{ fontSize: 11, color: subtle }}>Training Cohort Marketplace</div>
        </div>
        <nav style={{ padding: "12px 8px", flex: 1 }}>
          {navItems.map(({ Icon, label, active }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: active ? `${green}18` : "transparent", color: active ? green : subtle, fontSize: 13, fontWeight: active ? 600 : 400, borderLeft: active ? `3px solid ${green}` : "3px solid transparent" }}>
              <Icon size={15} />{label}
            </div>
          ))}
        </nav>
        <div style={{ margin: "0 12px 16px", padding: "12px", background: `${green}10`, borderRadius: 10, border: `1px solid ${green}30` }}>
          <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>My Credit Balance</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: green }}>{available} SC</div>
          <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>{inEscrow} SC in escrow</div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: text }}>Credits Wallet</h1>
            <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>Your ServiceCredits earned, spent, and held in escrow</div>
          </div>

          {/* Balance overview */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
            {[
              { label: "Available", value: available, color: green, Icon: Coins, sub: "Ready to spend" },
              { label: "In Escrow", value: inEscrow, color: "#F59E0B", Icon: Lock, sub: "Locked in cohorts" },
              { label: "Total Earned", value: totalEarned, color: "#3B82F6", Icon: ArrowDownLeft, sub: "All time" },
              { label: "Total Spent", value: totalSpent, color: "#EF4444", Icon: ArrowUpRight, sub: "All time" },
            ].map(({ label, value, color, Icon, sub }) => (
              <div key={label} style={{ background: surface, borderRadius: 12, padding: "18px 16px", border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={14} color={color} />
                  </div>
                  <span style={{ fontSize: 12, color: subtle }}>{label}</span>
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color }}>{value} <span style={{ fontSize: 14 }}>SC</span></div>
                <div style={{ fontSize: 11, color: muted, marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div style={{ padding: "10px 14px", background: `${green}08`, borderRadius: 8, border: `1px solid ${green}25`, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <CheckCircle size={13} color={green} />
            <span style={{ fontSize: 12, color: subtle }}>ServiceCredits are a utility token — they cannot be converted to fiat currency. Use them inside the Survivor Hub network for housing, transport, training, and services.</span>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {FILTER_TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 500, background: activeTab === tab ? green : border, color: activeTab === tab ? "#000" : subtle }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Transaction table */}
          <div style={{ background: surface, borderRadius: 12, border: `1px solid ${border}`, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "90px 110px 1fr 80px", gap: 0, padding: "10px 16px", borderBottom: `1px solid ${border}` }}>
              {["Date", "Type", "Source", "Amount"].map(h => (
                <div key={h} style={{ fontSize: 11, fontWeight: 600, color: muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</div>
              ))}
            </div>
            {visible.map((tx, i) => {
              const isPositive = tx.amount > 0;
              const typeColor = TX_COLORS[tx.type];
              return (
                <div key={tx.id} style={{ display: "grid", gridTemplateColumns: "90px 110px 1fr 80px", gap: 0, padding: "11px 16px", borderBottom: i < visible.length - 1 ? `1px solid ${border}` : "none", alignItems: "center" }}>
                  <div style={{ fontSize: 12, color: subtle }}>{tx.date}</div>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: typeColor, background: `${typeColor}12`, padding: "2px 8px", borderRadius: 20 }}>{TX_LABELS[tx.type]}</span>
                  </div>
                  <div style={{ fontSize: 12, color: text, paddingRight: 16 }}>{tx.source}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: isPositive ? green : "#EF4444", textAlign: "right" }}>
                    {isPositive ? "+" : ""}{tx.amount} SC
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right panel */}
        <div style={{ width: 280, background: surface, borderLeft: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "20px 16px 14px", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 8 }}>
            <Lock size={14} color="#F59E0B" />
            <span style={{ fontSize: 13, fontWeight: 600, color: text }}>Escrow Breakdown</span>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
            {ESCROW_ITEMS.map((item) => (
              <div key={item.cohort} style={{ padding: "14px", background: bg, borderRadius: 10, border: `1px solid ${border}`, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 4, lineHeight: 1.4 }}>{item.cohort}</div>
                <div style={{ fontSize: 12, color: subtle, marginBottom: 10 }}>with {item.trainer}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: subtle }}>Locked amount</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#F59E0B" }}>{item.amount} SC</span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: subtle, marginBottom: 4 }}>
                    <span>Milestone progress</span>
                    <span>{item.progress}/{item.total}</span>
                  </div>
                  <div style={{ height: 5, background: border, borderRadius: 99 }}>
                    <div style={{ width: `${(item.progress / item.total) * 100}%`, height: "100%", background: "#3B82F6", borderRadius: 99 }} />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: subtle }}>
                  <Clock size={11} />
                  Next release: {item.releaseOn}
                </div>
              </div>
            ))}

            <div style={{ padding: "14px", background: `${green}08`, borderRadius: 10, border: `1px solid ${green}20`, marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: green, marginBottom: 8 }}>How Escrow Works</div>
              <div style={{ fontSize: 12, color: subtle, lineHeight: 1.7 }}>
                When you enroll, credits move to escrow. As your trainer validates each milestone, the proportional credits are released back to your wallet — not before.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: subtle, marginBottom: 10 }}>Earn More Credits</div>
              {[
                { label: "Complete a Foundation gig", reward: "15–45 SC" },
                { label: "Finish a SkillsHunt badge", reward: "10–30 SC" },
                { label: "Fulfill a SocketRelay request", reward: "5–20 SC" },
              ].map(({ label, reward }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 10px", background: bg, borderRadius: 7, border: `1px solid ${border}`, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: subtle }}>{label}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: green }}>{reward}</span>
                </div>
              ))}
            </div>

            <button style={{ width: "100%", padding: "10px", borderRadius: 8, background: green, border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Plus size={13} /> Browse Ways to Earn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
