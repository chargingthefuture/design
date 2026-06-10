export type Theme = "standard" | "comic";

export const STORAGE_KEY = "sh-theme";

export const COMIC_ACCENTS: Record<string, string> = {
  Chyme:             "#1A5C32",
  LightHouse:        "#1A4A7A",
  TrustTransport:    "#0C4A6E",
  Directory:         "#1A3A6A",
  Foundation:        "#7A4A05",
  PeerProgramming:   "#1A5C40",
  GDP:               "#0E5A68",
  ServiceCredits:    "#5C2C8A",
  Workforce:         "#6A2A05",
  GentlePulse:       "#1A5C45",
  Mood:              "#1A5C2A",
  SocketRelay:       "#7A3A0C",
  SkillsHunt:        "#7A5A05",
  LevelUp:           "#1A5C30",
  "What Works":      "#4A6B10",
  Trust:             "#0C5278",
  ClickLog:          "#7A1A4A",
  SkillsTaxonomy:    "#2A2A7A",
  Unlock:            "#5C1A8A",
  WeeklyPerformance: "#2A2A6A",
  "AI Assistant":    "#7A6A50",
  "Account & Data":  "#B91C1C",
  Contributions:     "#7A1A4A",
};

export const COMIC_TOKENS = {
  bg:          "#0D0D0D",
  surface:     "#141414",
  surfaceAlt:  "#080808",
  border:      "#D4C49A",
  borderDim:   "#7A6A50",
  borderFaint: "#D4C49A1A",
  textPrimary: "#EDE3CB",
  textSec:     "#7A6A50",
  textMuted:   "#4A3A2A",
  danger:      "#B91C1C",
  success:     "#22C55E",
  gold:        "#C8A84B",
  shadow:      "3px 3px 0 #D4C49A",
  shadowDim:   "2px 2px 0 #7A6A50",
} as const;

export const COMIC_COMPONENT_MAP: Record<string, string> = {
  Desktop:                    "ComicDesktop",
  Chyme:                      "ComicChyme",
  ChymeApp:                   "ComicChyme",
  MobileHome:                 "ComicMobileHome",
  AccountData:                "ComicAccountData",
  AccountDataConfirmDelete:   "ComicAccountDataDanger",
  MobileAccountData:          "ComicMobileAccountData",
  MobileAccountDataConfirmDelete: "ComicMobileAccountDanger",
};
