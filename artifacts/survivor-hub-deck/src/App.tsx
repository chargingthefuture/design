import { useState, useEffect, useCallback, useRef } from "react";
import type { ComponentType } from "react";

import { ChymeApp } from "@/components/mockups/survivor-hub/ChymeApp";
import { ChymeEmpty } from "@/components/mockups/survivor-hub/ChymeEmpty";
import { ChymeLoading } from "@/components/mockups/survivor-hub/ChymeLoading";
import { ChymePublic } from "@/components/mockups/survivor-hub/ChymePublic";
import { Chyme } from "@/components/mockups/survivor-hub/Chyme";
import { Desktop } from "@/components/mockups/survivor-hub/Desktop";
import { DirectoryEmpty } from "@/components/mockups/survivor-hub/DirectoryEmpty";
import { DirectoryLoading } from "@/components/mockups/survivor-hub/DirectoryLoading";
import { DirectoryPublic } from "@/components/mockups/survivor-hub/DirectoryPublic";
import { Directory } from "@/components/mockups/survivor-hub/Directory";
import { FeedAnnouncementsEmpty } from "@/components/mockups/survivor-hub/FeedAnnouncementsEmpty";
import { FeedAnnouncementsLoading } from "@/components/mockups/survivor-hub/FeedAnnouncementsLoading";
import { FeedAnnouncementsPublic } from "@/components/mockups/survivor-hub/FeedAnnouncementsPublic";
import { FeedAnnouncements } from "@/components/mockups/survivor-hub/FeedAnnouncements";
import { FoundationEmpty } from "@/components/mockups/survivor-hub/FoundationEmpty";
import { FoundationLoading } from "@/components/mockups/survivor-hub/FoundationLoading";
import { FoundationPublic } from "@/components/mockups/survivor-hub/FoundationPublic";
import { Foundation } from "@/components/mockups/survivor-hub/Foundation";
import { GDPEmpty } from "@/components/mockups/survivor-hub/GDPEmpty";
import { GDPLoading } from "@/components/mockups/survivor-hub/GDPLoading";
import { GDPPublic } from "@/components/mockups/survivor-hub/GDPPublic";
import { GDP } from "@/components/mockups/survivor-hub/GDP";
import { GentlePulseEmpty } from "@/components/mockups/survivor-hub/GentlePulseEmpty";
import { GentlePulseLoading } from "@/components/mockups/survivor-hub/GentlePulseLoading";
import { GentlePulsePublic } from "@/components/mockups/survivor-hub/GentlePulsePublic";
import { GentlePulse } from "@/components/mockups/survivor-hub/GentlePulse";
import { HubLoading } from "@/components/mockups/survivor-hub/HubLoading";
import { HubPublic } from "@/components/mockups/survivor-hub/HubPublic";
import LevelUpDefault from "@/components/mockups/survivor-hub/LevelUp";
import { LevelUpEmpty } from "@/components/mockups/survivor-hub/LevelUpEmpty";
import { LevelUpLoading } from "@/components/mockups/survivor-hub/LevelUpLoading";
import { LevelUpPublic } from "@/components/mockups/survivor-hub/LevelUpPublic";
import { LightHouseEmpty } from "@/components/mockups/survivor-hub/LightHouseEmpty";
import { LightHouseLoading } from "@/components/mockups/survivor-hub/LightHouseLoading";
import { LightHousePublic } from "@/components/mockups/survivor-hub/LightHousePublic";
import { LightHouse } from "@/components/mockups/survivor-hub/LightHouse";
import { MobileChymeEmpty } from "@/components/mockups/survivor-hub/MobileChymeEmpty";
import { MobileChymeLoading } from "@/components/mockups/survivor-hub/MobileChymeLoading";
import { MobileChymePublic } from "@/components/mockups/survivor-hub/MobileChymePublic";
import { MobileChyme } from "@/components/mockups/survivor-hub/MobileChyme";
import { MobileDirectoryEmpty } from "@/components/mockups/survivor-hub/MobileDirectoryEmpty";
import { MobileDirectoryLoading } from "@/components/mockups/survivor-hub/MobileDirectoryLoading";
import { MobileDirectoryPublic } from "@/components/mockups/survivor-hub/MobileDirectoryPublic";
import { MobileDirectory } from "@/components/mockups/survivor-hub/MobileDirectory";
import { MobileFeedEmpty } from "@/components/mockups/survivor-hub/MobileFeedEmpty";
import { MobileFeedLoading } from "@/components/mockups/survivor-hub/MobileFeedLoading";
import { MobileFeedPublic } from "@/components/mockups/survivor-hub/MobileFeedPublic";
import { MobileFeed } from "@/components/mockups/survivor-hub/MobileFeed";
import { MobileFoundationEmpty } from "@/components/mockups/survivor-hub/MobileFoundationEmpty";
import { MobileFoundationLoading } from "@/components/mockups/survivor-hub/MobileFoundationLoading";
import { MobileFoundationPublic } from "@/components/mockups/survivor-hub/MobileFoundationPublic";
import { MobileFoundation } from "@/components/mockups/survivor-hub/MobileFoundation";
import { MobileGDPEmpty } from "@/components/mockups/survivor-hub/MobileGDPEmpty";
import { MobileGDPLoading } from "@/components/mockups/survivor-hub/MobileGDPLoading";
import { MobileGDPPublic } from "@/components/mockups/survivor-hub/MobileGDPPublic";
import { MobileGDP } from "@/components/mockups/survivor-hub/MobileGDP";
import { MobileGentlePulseEmpty } from "@/components/mockups/survivor-hub/MobileGentlePulseEmpty";
import { MobileGentlePulseLoading } from "@/components/mockups/survivor-hub/MobileGentlePulseLoading";
import { MobileGentlePulsePublic } from "@/components/mockups/survivor-hub/MobileGentlePulsePublic";
import { MobileGentlePulse } from "@/components/mockups/survivor-hub/MobileGentlePulse";
import { MobileHomeLoading } from "@/components/mockups/survivor-hub/MobileHomeLoading";
import { MobileHome } from "@/components/mockups/survivor-hub/MobileHome";
import { MobileHubPublic } from "@/components/mockups/survivor-hub/MobileHubPublic";
import MobileLevelUpDefault from "@/components/mockups/survivor-hub/MobileLevelUp";
import { MobileLevelUpEmpty } from "@/components/mockups/survivor-hub/MobileLevelUpEmpty";
import { MobileLevelUpLoading } from "@/components/mockups/survivor-hub/MobileLevelUpLoading";
import { MobileLevelUpPublic } from "@/components/mockups/survivor-hub/MobileLevelUpPublic";
import { MobileLightHouseEmpty } from "@/components/mockups/survivor-hub/MobileLightHouseEmpty";
import { MobileLightHouseLoading } from "@/components/mockups/survivor-hub/MobileLightHouseLoading";
import { MobileLightHousePublic } from "@/components/mockups/survivor-hub/MobileLightHousePublic";
import { MobileLightHouse } from "@/components/mockups/survivor-hub/MobileLightHouse";
import { MobileMoodEmpty } from "@/components/mockups/survivor-hub/MobileMoodEmpty";
import { MobileMoodLoading } from "@/components/mockups/survivor-hub/MobileMoodLoading";
import { MobileMoodPublic } from "@/components/mockups/survivor-hub/MobileMoodPublic";
import { MobileMood } from "@/components/mockups/survivor-hub/MobileMood";
import { MobilePeerProgrammingEmpty } from "@/components/mockups/survivor-hub/MobilePeerProgrammingEmpty";
import { MobilePeerProgrammingLoading } from "@/components/mockups/survivor-hub/MobilePeerProgrammingLoading";
import { MobilePeerProgrammingPublic } from "@/components/mockups/survivor-hub/MobilePeerProgrammingPublic";
import { MobilePeerProgramming } from "@/components/mockups/survivor-hub/MobilePeerProgramming";
import { MobileServiceCreditsEmpty } from "@/components/mockups/survivor-hub/MobileServiceCreditsEmpty";
import { MobileServiceCreditsLoading } from "@/components/mockups/survivor-hub/MobileServiceCreditsLoading";
import { MobileServiceCreditsPublic } from "@/components/mockups/survivor-hub/MobileServiceCreditsPublic";
import { MobileServiceCredits } from "@/components/mockups/survivor-hub/MobileServiceCredits";
import { MobileSkillsHuntEmpty } from "@/components/mockups/survivor-hub/MobileSkillsHuntEmpty";
import { MobileSkillsHuntLoading } from "@/components/mockups/survivor-hub/MobileSkillsHuntLoading";
import { MobileSkillsHuntPublic } from "@/components/mockups/survivor-hub/MobileSkillsHuntPublic";
import { MobileSkillsHunt } from "@/components/mockups/survivor-hub/MobileSkillsHunt";
import { MobileSocketRelayEmpty } from "@/components/mockups/survivor-hub/MobileSocketRelayEmpty";
import { MobileSocketRelayLoading } from "@/components/mockups/survivor-hub/MobileSocketRelayLoading";
import { MobileSocketRelayPublic } from "@/components/mockups/survivor-hub/MobileSocketRelayPublic";
import { MobileSocketRelay } from "@/components/mockups/survivor-hub/MobileSocketRelay";
import { MobileTrustLoading } from "@/components/mockups/survivor-hub/MobileTrustLoading";
import { MobileTrustPublic } from "@/components/mockups/survivor-hub/MobileTrustPublic";
import { MobileTrust } from "@/components/mockups/survivor-hub/MobileTrust";
import { MobileTrustTransportEmpty } from "@/components/mockups/survivor-hub/MobileTrustTransportEmpty";
import { MobileTrustTransportLoading } from "@/components/mockups/survivor-hub/MobileTrustTransportLoading";
import { MobileTrustTransportPublic } from "@/components/mockups/survivor-hub/MobileTrustTransportPublic";
import { MobileTrustTransport } from "@/components/mockups/survivor-hub/MobileTrustTransport";
import { MobileWorkforceEmpty } from "@/components/mockups/survivor-hub/MobileWorkforceEmpty";
import { MobileWorkforceLoading } from "@/components/mockups/survivor-hub/MobileWorkforceLoading";
import { MobileWorkforcePublic } from "@/components/mockups/survivor-hub/MobileWorkforcePublic";
import { MobileWorkforce } from "@/components/mockups/survivor-hub/MobileWorkforce";
import { MoodEmpty } from "@/components/mockups/survivor-hub/MoodEmpty";
import { MoodLoading } from "@/components/mockups/survivor-hub/MoodLoading";
import { MoodPublic } from "@/components/mockups/survivor-hub/MoodPublic";
import { Mood } from "@/components/mockups/survivor-hub/Mood";
import { PeerProgrammingEmpty } from "@/components/mockups/survivor-hub/PeerProgrammingEmpty";
import { PeerProgrammingLoading } from "@/components/mockups/survivor-hub/PeerProgrammingLoading";
import { PeerProgrammingPublic } from "@/components/mockups/survivor-hub/PeerProgrammingPublic";
import { PeerProgramming } from "@/components/mockups/survivor-hub/PeerProgramming";
import { ServiceCreditsEmpty } from "@/components/mockups/survivor-hub/ServiceCreditsEmpty";
import { ServiceCreditsLoading } from "@/components/mockups/survivor-hub/ServiceCreditsLoading";
import { ServiceCreditsPublic } from "@/components/mockups/survivor-hub/ServiceCreditsPublic";
import { ServiceCredits } from "@/components/mockups/survivor-hub/ServiceCredits";
import { SkillsHuntEmpty } from "@/components/mockups/survivor-hub/SkillsHuntEmpty";
import { SkillsHuntLoading } from "@/components/mockups/survivor-hub/SkillsHuntLoading";
import { SkillsHuntPublic } from "@/components/mockups/survivor-hub/SkillsHuntPublic";
import { SkillsHunt } from "@/components/mockups/survivor-hub/SkillsHunt";
import { SocketRelayEmpty } from "@/components/mockups/survivor-hub/SocketRelayEmpty";
import { SocketRelayLoading } from "@/components/mockups/survivor-hub/SocketRelayLoading";
import { SocketRelayPublic } from "@/components/mockups/survivor-hub/SocketRelayPublic";
import { SocketRelay } from "@/components/mockups/survivor-hub/SocketRelay";
import { TrustLoading } from "@/components/mockups/survivor-hub/TrustLoading";
import { TrustPublic } from "@/components/mockups/survivor-hub/TrustPublic";
import { Trust } from "@/components/mockups/survivor-hub/Trust";
import { TrustTransportEmpty } from "@/components/mockups/survivor-hub/TrustTransportEmpty";
import { TrustTransportLoading } from "@/components/mockups/survivor-hub/TrustTransportLoading";
import { TrustTransportPublic } from "@/components/mockups/survivor-hub/TrustTransportPublic";
import { TrustTransport } from "@/components/mockups/survivor-hub/TrustTransport";
import { WorkforceEmpty } from "@/components/mockups/survivor-hub/WorkforceEmpty";
import { WorkforceLoading } from "@/components/mockups/survivor-hub/WorkforceLoading";
import { WorkforcePublic } from "@/components/mockups/survivor-hub/WorkforcePublic";
import { Workforce } from "@/components/mockups/survivor-hub/Workforce";

const COMPONENTS: Record<string, ComponentType> = {
  ChymeApp, ChymeEmpty, ChymeLoading, ChymePublic, Chyme,
  Desktop,
  DirectoryEmpty, DirectoryLoading, DirectoryPublic, Directory,
  FeedAnnouncementsEmpty, FeedAnnouncementsLoading, FeedAnnouncementsPublic, FeedAnnouncements,
  FoundationEmpty, FoundationLoading, FoundationPublic, Foundation,
  GDPEmpty, GDPLoading, GDPPublic, GDP,
  GentlePulseEmpty, GentlePulseLoading, GentlePulsePublic, GentlePulse,
  HubLoading, HubPublic,
  LevelUp: LevelUpDefault, LevelUpEmpty, LevelUpLoading, LevelUpPublic,
  LightHouseEmpty, LightHouseLoading, LightHousePublic, LightHouse,
  MobileChymeEmpty, MobileChymeLoading, MobileChymePublic, MobileChyme,
  MobileDirectoryEmpty, MobileDirectoryLoading, MobileDirectoryPublic, MobileDirectory,
  MobileFeedEmpty, MobileFeedLoading, MobileFeedPublic, MobileFeed,
  MobileFoundationEmpty, MobileFoundationLoading, MobileFoundationPublic, MobileFoundation,
  MobileGDPEmpty, MobileGDPLoading, MobileGDPPublic, MobileGDP,
  MobileGentlePulseEmpty, MobileGentlePulseLoading, MobileGentlePulsePublic, MobileGentlePulse,
  MobileHomeLoading, MobileHome, MobileHubPublic,
  MobileLevelUp: MobileLevelUpDefault, MobileLevelUpEmpty, MobileLevelUpLoading, MobileLevelUpPublic,
  MobileLightHouseEmpty, MobileLightHouseLoading, MobileLightHousePublic, MobileLightHouse,
  MobileMoodEmpty, MobileMoodLoading, MobileMoodPublic, MobileMood,
  MobilePeerProgrammingEmpty, MobilePeerProgrammingLoading, MobilePeerProgrammingPublic, MobilePeerProgramming,
  MobileServiceCreditsEmpty, MobileServiceCreditsLoading, MobileServiceCreditsPublic, MobileServiceCredits,
  MobileSkillsHuntEmpty, MobileSkillsHuntLoading, MobileSkillsHuntPublic, MobileSkillsHunt,
  MobileSocketRelayEmpty, MobileSocketRelayLoading, MobileSocketRelayPublic, MobileSocketRelay,
  MobileTrustLoading, MobileTrustPublic, MobileTrust,
  MobileTrustTransportEmpty, MobileTrustTransportLoading, MobileTrustTransportPublic, MobileTrustTransport,
  MobileWorkforceEmpty, MobileWorkforceLoading, MobileWorkforcePublic, MobileWorkforce,
  MoodEmpty, MoodLoading, MoodPublic, Mood,
  PeerProgrammingEmpty, PeerProgrammingLoading, PeerProgrammingPublic, PeerProgramming,
  ServiceCreditsEmpty, ServiceCreditsLoading, ServiceCreditsPublic, ServiceCredits,
  SkillsHuntEmpty, SkillsHuntLoading, SkillsHuntPublic, SkillsHunt,
  SocketRelayEmpty, SocketRelayLoading, SocketRelayPublic, SocketRelay,
  TrustLoading, TrustPublic, Trust,
  TrustTransportEmpty, TrustTransportLoading, TrustTransportPublic, TrustTransport,
  WorkforceEmpty, WorkforceLoading, WorkforcePublic, Workforce,
};

type Slide = {
  component: string;
  name: string;
  row: string;
  rowColor: string;
  type: "desktop" | "mobile";
};

const SECTION_COLORS: Record<string, string> = {
  "ROW 1 · WEB · NOT SIGNED IN": "#7C3AED",
  "ROW 2 · WEB · SIGNED IN": "#22C55E",
  "ROW 3 · WEB · EMPTY STATES": "#EAB308",
  "ROW 4 · WEB · LOADING": "#94A3B8",
  "ROW 5 · MOBILE · NOT SIGNED IN": "#A855F7",
  "ROW 6 · MOBILE · SIGNED IN": "#22C55E",
  "ROW 7 · MOBILE · EMPTY STATES": "#F59E0B",
  "ROW 8 · MOBILE · LOADING": "#64748B",
};

const web = (component: string, name: string, row: string): Slide => ({
  component, name, row, rowColor: SECTION_COLORS[row] ?? "#888", type: "desktop",
});
const mob = (component: string, name: string, row: string): Slide => ({
  component, name, row, rowColor: SECTION_COLORS[row] ?? "#888", type: "mobile",
});

const R1 = "ROW 1 · WEB · NOT SIGNED IN";
const R2 = "ROW 2 · WEB · SIGNED IN";
const R3 = "ROW 3 · WEB · EMPTY STATES";
const R4 = "ROW 4 · WEB · LOADING";
const R5 = "ROW 5 · MOBILE · NOT SIGNED IN";
const R6 = "ROW 6 · MOBILE · SIGNED IN";
const R7 = "ROW 7 · MOBILE · EMPTY STATES";
const R8 = "ROW 8 · MOBILE · LOADING";

const SLIDES: Slide[] = [
  web("HubPublic",               "Hub",              R1),
  web("ChymePublic",             "Chyme",            R1),
  web("DirectoryPublic",         "Directory",        R1),
  web("FeedAnnouncementsPublic", "Feed",             R1),
  web("WorkforcePublic",         "Workforce",        R1),
  web("SkillsHuntPublic",        "Skills Hunt",      R1),
  web("FoundationPublic",        "Foundation",       R1),
  web("LightHousePublic",        "LightHouse",       R1),
  web("SocketRelayPublic",       "Socket Relay",     R1),
  web("TrustTransportPublic",    "Trust Transport",  R1),
  web("PeerProgrammingPublic",   "Peer Programming", R1),
  web("MoodPublic",              "Mood",             R1),
  web("GentlePulsePublic",       "Gentle Pulse",     R1),
  web("GDPPublic",               "GDP",              R1),
  web("ServiceCreditsPublic",    "Service Credits",  R1),
  web("LevelUpPublic",           "LevelUp",          R1),
  web("TrustPublic",             "Trust",            R1),

  web("Desktop",            "Hub",              R2),
  web("Chyme",              "Chyme",            R2),
  web("Directory",          "Directory",        R2),
  web("FeedAnnouncements",  "Feed",             R2),
  web("Workforce",          "Workforce",        R2),
  web("SkillsHunt",         "Skills Hunt",      R2),
  web("Foundation",         "Foundation",       R2),
  web("LightHouse",         "LightHouse",       R2),
  web("SocketRelay",        "Socket Relay",     R2),
  web("TrustTransport",     "Trust Transport",  R2),
  web("PeerProgramming",    "Peer Programming", R2),
  web("Mood",               "Mood",             R2),
  web("GentlePulse",        "Gentle Pulse",     R2),
  web("GDP",                "GDP",              R2),
  web("ServiceCredits",     "Service Credits",  R2),
  web("LevelUp",            "LevelUp",          R2),
  web("Trust",              "Trust",            R2),

  web("ChymeEmpty",              "Chyme",            R3),
  web("DirectoryEmpty",          "Directory",        R3),
  web("FeedAnnouncementsEmpty",  "Feed",             R3),
  web("WorkforceEmpty",          "Workforce",        R3),
  web("SkillsHuntEmpty",         "Skills Hunt",      R3),
  web("FoundationEmpty",         "Foundation",       R3),
  web("LightHouseEmpty",         "LightHouse",       R3),
  web("SocketRelayEmpty",        "Socket Relay",     R3),
  web("TrustTransportEmpty",     "Trust Transport",  R3),
  web("PeerProgrammingEmpty",    "Peer Programming", R3),
  web("MoodEmpty",               "Mood",             R3),
  web("GentlePulseEmpty",        "Gentle Pulse",     R3),
  web("GDPEmpty",                "GDP",              R3),
  web("ServiceCreditsEmpty",     "Service Credits",  R3),
  web("LevelUpEmpty",            "LevelUp",          R3),

  web("HubLoading",              "Hub",              R4),
  web("ChymeLoading",            "Chyme",            R4),
  web("DirectoryLoading",        "Directory",        R4),
  web("FeedAnnouncementsLoading","Feed",             R4),
  web("WorkforceLoading",        "Workforce",        R4),
  web("SkillsHuntLoading",       "Skills Hunt",      R4),
  web("FoundationLoading",       "Foundation",       R4),
  web("LightHouseLoading",       "LightHouse",       R4),
  web("SocketRelayLoading",      "Socket Relay",     R4),
  web("TrustTransportLoading",   "Trust Transport",  R4),
  web("PeerProgrammingLoading",  "Peer Programming", R4),
  web("MoodLoading",             "Mood",             R4),
  web("GentlePulseLoading",      "Gentle Pulse",     R4),
  web("GDPLoading",              "GDP",              R4),
  web("ServiceCreditsLoading",   "Service Credits",  R4),
  web("LevelUpLoading",          "LevelUp",          R4),
  web("TrustLoading",            "Trust",            R4),

  mob("MobileHubPublic",              "Hub",              R5),
  mob("MobileChymePublic",            "Chyme",            R5),
  mob("MobileDirectoryPublic",        "Directory",        R5),
  mob("MobileFeedPublic",             "Feed",             R5),
  mob("MobileWorkforcePublic",        "Workforce",        R5),
  mob("MobileSkillsHuntPublic",       "Skills Hunt",      R5),
  mob("MobileFoundationPublic",       "Foundation",       R5),
  mob("MobileLightHousePublic",       "LightHouse",       R5),
  mob("MobileSocketRelayPublic",      "Socket Relay",     R5),
  mob("MobileTrustTransportPublic",   "Trust Transport",  R5),
  mob("MobilePeerProgrammingPublic",  "Peer Programming", R5),
  mob("MobileMoodPublic",             "Mood",             R5),
  mob("MobileGentlePulsePublic",      "Gentle Pulse",     R5),
  mob("MobileGDPPublic",              "GDP",              R5),
  mob("MobileServiceCreditsPublic",   "Service Credits",  R5),
  mob("MobileLevelUpPublic",          "LevelUp",          R5),
  mob("MobileTrustPublic",            "Trust",            R5),

  mob("MobileHome",             "Hub",              R6),
  mob("MobileChyme",            "Chyme",            R6),
  mob("MobileDirectory",        "Directory",        R6),
  mob("MobileFeed",             "Feed",             R6),
  mob("MobileWorkforce",        "Workforce",        R6),
  mob("MobileSkillsHunt",       "Skills Hunt",      R6),
  mob("MobileFoundation",       "Foundation",       R6),
  mob("MobileLightHouse",       "LightHouse",       R6),
  mob("MobileSocketRelay",      "Socket Relay",     R6),
  mob("MobileTrustTransport",   "Trust Transport",  R6),
  mob("MobilePeerProgramming",  "Peer Programming", R6),
  mob("MobileMood",             "Mood",             R6),
  mob("MobileGentlePulse",      "Gentle Pulse",     R6),
  mob("MobileGDP",              "GDP",              R6),
  mob("MobileServiceCredits",   "Service Credits",  R6),
  mob("MobileLevelUp",          "LevelUp",          R6),
  mob("MobileTrust",            "Trust",            R6),

  mob("MobileChymeEmpty",            "Chyme",            R7),
  mob("MobileDirectoryEmpty",        "Directory",        R7),
  mob("MobileFeedEmpty",             "Feed",             R7),
  mob("MobileWorkforceEmpty",        "Workforce",        R7),
  mob("MobileSkillsHuntEmpty",       "Skills Hunt",      R7),
  mob("MobileFoundationEmpty",       "Foundation",       R7),
  mob("MobileLightHouseEmpty",       "LightHouse",       R7),
  mob("MobileSocketRelayEmpty",      "Socket Relay",     R7),
  mob("MobileTrustTransportEmpty",   "Trust Transport",  R7),
  mob("MobilePeerProgrammingEmpty",  "Peer Programming", R7),
  mob("MobileMoodEmpty",             "Mood",             R7),
  mob("MobileGentlePulseEmpty",      "Gentle Pulse",     R7),
  mob("MobileGDPEmpty",              "GDP",              R7),
  mob("MobileServiceCreditsEmpty",   "Service Credits",  R7),
  mob("MobileLevelUpEmpty",          "LevelUp",          R7),

  mob("MobileHomeLoading",             "Hub",              R8),
  mob("MobileChymeLoading",            "Chyme",            R8),
  mob("MobileDirectoryLoading",        "Directory",        R8),
  mob("MobileFeedLoading",             "Feed",             R8),
  mob("MobileWorkforceLoading",        "Workforce",        R8),
  mob("MobileSkillsHuntLoading",       "Skills Hunt",      R8),
  mob("MobileFoundationLoading",       "Foundation",       R8),
  mob("MobileLightHouseLoading",       "LightHouse",       R8),
  mob("MobileSocketRelayLoading",      "Socket Relay",     R8),
  mob("MobileTrustTransportLoading",   "Trust Transport",  R8),
  mob("MobilePeerProgrammingLoading",  "Peer Programming", R8),
  mob("MobileMoodLoading",             "Mood",             R8),
  mob("MobileGentlePulseLoading",      "Gentle Pulse",     R8),
  mob("MobileGDPLoading",              "GDP",              R8),
  mob("MobileServiceCreditsLoading",   "Service Credits",  R8),
  mob("MobileLevelUpLoading",          "LevelUp",          R8),
  mob("MobileTrustLoading",            "Trust",            R8),
];

const DESKTOP_W = 1440;
const DESKTOP_H = 900;
const MOBILE_W  = 390;
const MOBILE_H  = 844;
const NAV_H     = 64;

export default function App() {
  const [idx, setIdx]       = useState(0);
  const [menuOpen, setMenu] = useState(false);
  const containerRef        = useRef<HTMLDivElement>(null);
  const slide               = SLIDES[idx];
  const total               = SLIDES.length;

  const go = useCallback((delta: number) => {
    setIdx(i => Math.max(0, Math.min(total - 1, i + delta)));
  }, [total]);

  const jumpTo = useCallback((i: number) => {
    setIdx(i);
    setMenu(false);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(-1);
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      const avW = window.innerWidth;
      const avH = window.innerHeight - NAV_H - 8;
      if (slide.type === "desktop") {
        setScale(Math.min(avW / DESKTOP_W, avH / DESKTOP_H));
      } else {
        setScale(Math.min((avW * 0.5) / MOBILE_W, avH / MOBILE_H, 1));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [slide.type]);

  const sections = Array.from(new Set(SLIDES.map(s => s.row)));
  const iframeW  = slide.type === "desktop" ? DESKTOP_W : MOBILE_W;
  const iframeH  = slide.type === "desktop" ? DESKTOP_H : MOBILE_H;
  const Comp     = COMPONENTS[slide.component];

  return (
    <div
      style={{ background: "#0F1117", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}
      onClick={() => menuOpen && setMenu(false)}
    >
      <div style={{ height: 3, background: slide.rowColor, flexShrink: 0 }} />

      <div
        ref={containerRef}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: "center center", width: iframeW, height: iframeH, borderRadius: slide.type === "mobile" ? 32 : 4, overflow: "hidden", boxShadow: "0 8px 48px rgba(0,0,0,0.7)", flexShrink: 0 }}>
          {Comp ? (
            <div key={slide.component} style={{ width: iframeW, height: iframeH, overflow: "hidden" }}>
              <Comp />
            </div>
          ) : (
            <div style={{ width: iframeW, height: iframeH, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1D27", color: "#64748B", fontSize: 14 }}>
              Component not found: {slide.component}
            </div>
          )}
        </div>

        <button onClick={() => go(-1)} disabled={idx === 0} style={{ position: "absolute", left: 0, top: 0, width: "10%", height: "100%", background: "transparent", border: "none", cursor: idx === 0 ? "default" : "w-resize", zIndex: 10 }} aria-label="Previous" />
        <button onClick={() => go(1)} disabled={idx === total - 1} style={{ position: "absolute", right: 0, top: 0, width: "10%", height: "100%", background: "transparent", border: "none", cursor: idx === total - 1 ? "default" : "e-resize", zIndex: 10 }} aria-label="Next" />
      </div>

      <div style={{ height: NAV_H, flexShrink: 0, background: "#1A1D27", borderTop: "1px solid #2A2D3A", display: "flex", alignItems: "center", paddingLeft: 20, paddingRight: 20, gap: 16, position: "relative" }}>
        <button
          onClick={e => { e.stopPropagation(); setMenu(m => !m); }}
          style={{ background: "#2A2D3A", border: `1px solid ${slide.rowColor}44`, color: slide.rowColor, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          {slide.row}
        </button>

        <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 600, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {slide.name}
        </span>

        <span style={{ color: "#64748B", fontSize: 13, whiteSpace: "nowrap" }}>{idx + 1} / {total}</span>

        <button onClick={() => go(-1)} disabled={idx === 0} style={{ background: idx === 0 ? "#1E2130" : "#2A2D3A", border: "1px solid #3A3D4A", color: idx === 0 ? "#3A3D4A" : "#CBD5E1", borderRadius: 6, width: 36, height: 36, cursor: idx === 0 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        <button onClick={() => go(1)} disabled={idx === total - 1} style={{ background: idx === total - 1 ? "#1E2130" : slide.rowColor, border: "none", color: "#fff", borderRadius: 6, width: 36, height: 36, cursor: idx === total - 1 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>

        <span style={{ color: "#3A3D4A", fontSize: 11 }}>← → keys</span>

        {menuOpen && (
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: "absolute", bottom: NAV_H + 8, left: 20, background: "#1A1D27", border: "1px solid #2A2D3A", borderRadius: 10, padding: 8, zIndex: 100, width: 340, boxShadow: "0 -8px 32px rgba(0,0,0,0.6)" }}
          >
            <div style={{ color: "#64748B", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 8px 8px", textTransform: "uppercase" }}>Jump to section</div>
            {sections.map(row => {
              const firstIdx = SLIDES.findIndex(s => s.row === row);
              const count    = SLIDES.filter(s => s.row === row).length;
              const color    = SECTION_COLORS[row] ?? "#888";
              const active   = slide.row === row;
              return (
                <button
                  key={row}
                  onClick={() => jumpTo(firstIdx)}
                  style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", background: active ? `${color}18` : "transparent", border: "none", borderRadius: 6, padding: "8px 10px", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0 }} />
                  <span style={{ color: active ? color : "#CBD5E1", fontSize: 12, fontWeight: active ? 700 : 400, flex: 1 }}>{row}</span>
                  <span style={{ color: "#475569", fontSize: 11 }}>{count}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
