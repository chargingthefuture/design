import { useState, useEffect, useCallback, useRef } from "react";
import type { ComponentType } from "react";
import { useTheme } from "./ThemeContext";
import { COMIC_COMPONENT_MAP, getAccent } from "./theme";

import { AccountData } from "@/components/mockups/survivor-hub/AccountData";
import { AccountDataConfirmDelete } from "@/components/mockups/survivor-hub/AccountDataConfirmDelete";
import { AccountDataEmpty } from "@/components/mockups/survivor-hub/AccountDataEmpty";
import { AccountDataLoading } from "@/components/mockups/survivor-hub/AccountDataLoading";
import { MobileAccountData } from "@/components/mockups/survivor-hub/MobileAccountData";
import { MobileAccountDataConfirmDelete } from "@/components/mockups/survivor-hub/MobileAccountDataConfirmDelete";
import { MobileAccountDataEmpty } from "@/components/mockups/survivor-hub/MobileAccountDataEmpty";
import { MobileAccountDataLoading } from "@/components/mockups/survivor-hub/MobileAccountDataLoading";
import { AIConsent } from "@/components/mockups/survivor-hub/AIConsent";
import { AIReviewConsole } from "@/components/mockups/survivor-hub/AIReviewConsole";
import { AIReviewConsoleDetail } from "@/components/mockups/survivor-hub/AIReviewConsoleDetail";
import { AIReviewConsoleEmpty } from "@/components/mockups/survivor-hub/AIReviewConsoleEmpty";
import { AIReviewConsoleLoading } from "@/components/mockups/survivor-hub/AIReviewConsoleLoading";
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
import { DirectoryAdmin } from "@/components/mockups/survivor-hub/DirectoryAdmin";
import { FoundationEmpty } from "@/components/mockups/survivor-hub/FoundationEmpty";
import { FoundationLoading } from "@/components/mockups/survivor-hub/FoundationLoading";
import { FoundationPublic } from "@/components/mockups/survivor-hub/FoundationPublic";
import { Foundation } from "@/components/mockups/survivor-hub/Foundation";
import { GDPEmpty } from "@/components/mockups/survivor-hub/GDPEmpty";
import { GDPLoading } from "@/components/mockups/survivor-hub/GDPLoading";
import { GDPPublic } from "@/components/mockups/survivor-hub/GDPPublic";
import { GDPPublicAlt } from "@/components/mockups/survivor-hub/GDPPublicAlt";
import { GDPRateAdmin } from "@/components/mockups/survivor-hub/GDPRateAdmin";
import { GDP } from "@/components/mockups/survivor-hub/GDP";
import { GentlePulseEmpty } from "@/components/mockups/survivor-hub/GentlePulseEmpty";
import { GentlePulseLoading } from "@/components/mockups/survivor-hub/GentlePulseLoading";
import { GentlePulsePublic } from "@/components/mockups/survivor-hub/GentlePulsePublic";
import { GentlePulse } from "@/components/mockups/survivor-hub/GentlePulse";
import { HubEmpty } from "@/components/mockups/survivor-hub/HubEmpty";
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
import { MobileAIConsent } from "@/components/mockups/survivor-hub/MobileAIConsent";
import { MobileAIReviewConsole } from "@/components/mockups/survivor-hub/MobileAIReviewConsole";
import { MobileAIReviewConsoleDetail } from "@/components/mockups/survivor-hub/MobileAIReviewConsoleDetail";
import { MobileAIReviewConsoleEmpty } from "@/components/mockups/survivor-hub/MobileAIReviewConsoleEmpty";
import { MobileAIReviewConsoleLoading } from "@/components/mockups/survivor-hub/MobileAIReviewConsoleLoading";
import { MobileChymeEmpty } from "@/components/mockups/survivor-hub/MobileChymeEmpty";
import { MobileChymeLoading } from "@/components/mockups/survivor-hub/MobileChymeLoading";
import { MobileChymePublic } from "@/components/mockups/survivor-hub/MobileChymePublic";
import { MobileChyme } from "@/components/mockups/survivor-hub/MobileChyme";
import { MobileDirectoryEmpty } from "@/components/mockups/survivor-hub/MobileDirectoryEmpty";
import { MobileDirectoryLoading } from "@/components/mockups/survivor-hub/MobileDirectoryLoading";
import { MobileDirectoryPublic } from "@/components/mockups/survivor-hub/MobileDirectoryPublic";
import { MobileDirectory } from "@/components/mockups/survivor-hub/MobileDirectory";
import { MobileDirectoryAdmin } from "@/components/mockups/survivor-hub/MobileDirectoryAdmin";
import { MobileFoundationEmpty } from "@/components/mockups/survivor-hub/MobileFoundationEmpty";
import { MobileFoundationLoading } from "@/components/mockups/survivor-hub/MobileFoundationLoading";
import { MobileFoundationPublic } from "@/components/mockups/survivor-hub/MobileFoundationPublic";
import { MobileFoundation } from "@/components/mockups/survivor-hub/MobileFoundation";
import { MobileGDPEmpty } from "@/components/mockups/survivor-hub/MobileGDPEmpty";
import { MobileGDPLoading } from "@/components/mockups/survivor-hub/MobileGDPLoading";
import { MobileGDPPublic } from "@/components/mockups/survivor-hub/MobileGDPPublic";
import { MobileGDPRateAdmin } from "@/components/mockups/survivor-hub/MobileGDPRateAdmin";
import { MobileGDP } from "@/components/mockups/survivor-hub/MobileGDP";
import { MobileGentlePulseEmpty } from "@/components/mockups/survivor-hub/MobileGentlePulseEmpty";
import { MobileGentlePulseLoading } from "@/components/mockups/survivor-hub/MobileGentlePulseLoading";
import { MobileGentlePulsePublic } from "@/components/mockups/survivor-hub/MobileGentlePulsePublic";
import { MobileGentlePulse } from "@/components/mockups/survivor-hub/MobileGentlePulse";
import { MobileHomeEmpty } from "@/components/mockups/survivor-hub/MobileHomeEmpty";
import { MobileHomeLoading } from "@/components/mockups/survivor-hub/MobileHomeLoading";
import { MobileHome } from "@/components/mockups/survivor-hub/MobileHome";
import { MobileHubPublic } from "@/components/mockups/survivor-hub/MobileHubPublic";
import MobileLevelUpDefault from "@/components/mockups/survivor-hub/MobileLevelUp";
import { MobileLevelUpEmpty } from "@/components/mockups/survivor-hub/MobileLevelUpEmpty";
import { MobileLevelUpLoading } from "@/components/mockups/survivor-hub/MobileLevelUpLoading";
import { MobileLevelUpPublic } from "@/components/mockups/survivor-hub/MobileLevelUpPublic";
import { LevelUpTrainers } from "@/components/mockups/survivor-hub/LevelUpTrainers";
import { LevelUpAchievements } from "@/components/mockups/survivor-hub/LevelUpAchievements";
import { LevelUpCreditsWallet } from "@/components/mockups/survivor-hub/LevelUpCreditsWallet";
import { MobileLevelUpTrainers } from "@/components/mockups/survivor-hub/MobileLevelUpTrainers";
import { MobileLevelUpAchievements } from "@/components/mockups/survivor-hub/MobileLevelUpAchievements";
import { MobileLevelUpCreditsWallet } from "@/components/mockups/survivor-hub/MobileLevelUpCreditsWallet";
import { WhatWorks } from "@/components/mockups/survivor-hub/WhatWorks";
import { WhatWorksPublic } from "@/components/mockups/survivor-hub/WhatWorksPublic";
import { WhatWorksEmpty } from "@/components/mockups/survivor-hub/WhatWorksEmpty";
import { WhatWorksLoading } from "@/components/mockups/survivor-hub/WhatWorksLoading";
import { MobileWhatWorks } from "@/components/mockups/survivor-hub/MobileWhatWorks";
import { MobileWhatWorksPublic } from "@/components/mockups/survivor-hub/MobileWhatWorksPublic";
import { MobileWhatWorksEmpty } from "@/components/mockups/survivor-hub/MobileWhatWorksEmpty";
import { MobileWhatWorksLoading } from "@/components/mockups/survivor-hub/MobileWhatWorksLoading";
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
import { SkillsHuntAdmin } from "@/components/mockups/survivor-hub/SkillsHuntAdmin";
import { SocketRelayEmpty } from "@/components/mockups/survivor-hub/SocketRelayEmpty";
import { SocketRelayLoading } from "@/components/mockups/survivor-hub/SocketRelayLoading";
import { SocketRelayPublic } from "@/components/mockups/survivor-hub/SocketRelayPublic";
import { SocketRelay } from "@/components/mockups/survivor-hub/SocketRelay";
import { ClickLog } from "@/components/mockups/survivor-hub/ClickLog";
import { ClickLogEmpty } from "@/components/mockups/survivor-hub/ClickLogEmpty";
import { ClickLogLoading } from "@/components/mockups/survivor-hub/ClickLogLoading";
import { ClickLogPublic } from "@/components/mockups/survivor-hub/ClickLogPublic";
import { MobileClickLog } from "@/components/mockups/survivor-hub/MobileClickLog";
import { MobileClickLogEmpty } from "@/components/mockups/survivor-hub/MobileClickLogEmpty";
import { MobileClickLogLoading } from "@/components/mockups/survivor-hub/MobileClickLogLoading";
import { MobileClickLogPublic } from "@/components/mockups/survivor-hub/MobileClickLogPublic";
import { TrustEmpty } from "@/components/mockups/survivor-hub/TrustEmpty";
import { TrustLoading } from "@/components/mockups/survivor-hub/TrustLoading";
import { TrustPublic } from "@/components/mockups/survivor-hub/TrustPublic";
import { Trust } from "@/components/mockups/survivor-hub/Trust";
import { MobileTrustEmpty } from "@/components/mockups/survivor-hub/MobileTrustEmpty";
import { WeeklyPerformance } from "@/components/mockups/survivor-hub/WeeklyPerformance";
import { WeeklyPerformanceEmpty } from "@/components/mockups/survivor-hub/WeeklyPerformanceEmpty";
import { WeeklyPerformanceLoading } from "@/components/mockups/survivor-hub/WeeklyPerformanceLoading";
import { WeeklyPerformancePublic } from "@/components/mockups/survivor-hub/WeeklyPerformancePublic";
import { MobileWeeklyPerformance } from "@/components/mockups/survivor-hub/MobileWeeklyPerformance";
import { MobileWeeklyPerformanceEmpty } from "@/components/mockups/survivor-hub/MobileWeeklyPerformanceEmpty";
import { MobileWeeklyPerformanceLoading } from "@/components/mockups/survivor-hub/MobileWeeklyPerformanceLoading";
import { MobileWeeklyPerformancePublic } from "@/components/mockups/survivor-hub/MobileWeeklyPerformancePublic";
import { SkillsTaxonomy } from "@/components/mockups/survivor-hub/SkillsTaxonomy";
import { SkillsTaxonomyEmpty } from "@/components/mockups/survivor-hub/SkillsTaxonomyEmpty";
import { SkillsTaxonomyLoading } from "@/components/mockups/survivor-hub/SkillsTaxonomyLoading";
import { SkillsTaxonomyPublic } from "@/components/mockups/survivor-hub/SkillsTaxonomyPublic";
import { MobileSkillsTaxonomy } from "@/components/mockups/survivor-hub/MobileSkillsTaxonomy";
import { MobileSkillsTaxonomyEmpty } from "@/components/mockups/survivor-hub/MobileSkillsTaxonomyEmpty";
import { MobileSkillsTaxonomyLoading } from "@/components/mockups/survivor-hub/MobileSkillsTaxonomyLoading";
import { MobileSkillsTaxonomyPublic } from "@/components/mockups/survivor-hub/MobileSkillsTaxonomyPublic";
import { Unlock } from "@/components/mockups/survivor-hub/Unlock";
import { UnlockEmpty } from "@/components/mockups/survivor-hub/UnlockEmpty";
import { UnlockLoading } from "@/components/mockups/survivor-hub/UnlockLoading";
import { UnlockPublic } from "@/components/mockups/survivor-hub/UnlockPublic";
import { MobileUnlock } from "@/components/mockups/survivor-hub/MobileUnlock";
import { MobileUnlockEmpty } from "@/components/mockups/survivor-hub/MobileUnlockEmpty";
import { MobileUnlockLoading } from "@/components/mockups/survivor-hub/MobileUnlockLoading";
import { MobileUnlockPublic } from "@/components/mockups/survivor-hub/MobileUnlockPublic";
import { TrustTransportEmpty } from "@/components/mockups/survivor-hub/TrustTransportEmpty";
import { TrustTransportLoading } from "@/components/mockups/survivor-hub/TrustTransportLoading";
import { TrustTransportPublic } from "@/components/mockups/survivor-hub/TrustTransportPublic";
import { TrustTransport } from "@/components/mockups/survivor-hub/TrustTransport";
import { WorkforceEmpty } from "@/components/mockups/survivor-hub/WorkforceEmpty";
import { WorkforceLoading } from "@/components/mockups/survivor-hub/WorkforceLoading";
import { WorkforcePublic } from "@/components/mockups/survivor-hub/WorkforcePublic";
import { Workforce } from "@/components/mockups/survivor-hub/Workforce";
import { ComicAccountData } from "@/components/mockups/survivor-hub/ComicAccountData";
import { ComicAccountDataDanger } from "@/components/mockups/survivor-hub/ComicAccountDataDanger";
import { ComicMobileAccountData } from "@/components/mockups/survivor-hub/ComicMobileAccountData";
import { ComicMobileAccountDanger } from "@/components/mockups/survivor-hub/ComicMobileAccountDanger";
import { ComicDesktop } from "@/components/mockups/survivor-hub/ComicDesktop";
import { ComicChyme } from "@/components/mockups/survivor-hub/ComicChyme";
import { ComicMobileHome } from "@/components/mockups/survivor-hub/ComicMobileHome";
import { MobileFoundationAdmin } from "@/components/mockups/survivor-hub/MobileFoundationAdmin";
import { MobileLevelUpAdmin } from "@/components/mockups/survivor-hub/MobileLevelUpAdmin";
import { MobileLightHouseAdmin } from "@/components/mockups/survivor-hub/MobileLightHouseAdmin";
import { MobilePeerProgrammingAdmin } from "@/components/mockups/survivor-hub/MobilePeerProgrammingAdmin";
import { MobileServiceCreditsAdmin } from "@/components/mockups/survivor-hub/MobileServiceCreditsAdmin";
import { MobileSkillsHuntAdmin } from "@/components/mockups/survivor-hub/MobileSkillsHuntAdmin";
import { MobileSocketRelayAdmin } from "@/components/mockups/survivor-hub/MobileSocketRelayAdmin";
import { MobileTrustTransportAdmin } from "@/components/mockups/survivor-hub/MobileTrustTransportAdmin";
import { MobileUnlockAdmin } from "@/components/mockups/survivor-hub/MobileUnlockAdmin";
import { MobileWeeklyPerformanceAdminView } from "@/components/mockups/survivor-hub/MobileWeeklyPerformanceAdminView";
import { MobileWhatWorksAdmin } from "@/components/mockups/survivor-hub/MobileWhatWorksAdmin";
import { MobileWorkforceAdmin } from "@/components/mockups/survivor-hub/MobileWorkforceAdmin";
import { Contributions } from "@/components/mockups/survivor-hub/Contributions";
import { ContributionsBanner } from "@/components/mockups/survivor-hub/ContributionsBanner";
import { ContributionsConfirmation } from "@/components/mockups/survivor-hub/ContributionsConfirmation";
import { ContributionsEmpty } from "@/components/mockups/survivor-hub/ContributionsEmpty";
import { ContributionsLoading } from "@/components/mockups/survivor-hub/ContributionsLoading";
import { ContributionsPublic } from "@/components/mockups/survivor-hub/ContributionsPublic";
import { ContributionsAdmin } from "@/components/mockups/survivor-hub/ContributionsAdmin";
import { MobileContributions } from "@/components/mockups/survivor-hub/MobileContributions";
import { MobileContributionsBanner } from "@/components/mockups/survivor-hub/MobileContributionsBanner";
import { MobileContributionsConfirmation } from "@/components/mockups/survivor-hub/MobileContributionsConfirmation";
import { MobileContributionsEmpty } from "@/components/mockups/survivor-hub/MobileContributionsEmpty";
import { MobileContributionsLoading } from "@/components/mockups/survivor-hub/MobileContributionsLoading";
import { MobileContributionsPublic } from "@/components/mockups/survivor-hub/MobileContributionsPublic";
import { MobileContributionsAdmin } from "@/components/mockups/survivor-hub/MobileContributionsAdmin";

// Admin wrappers — force isAdmin=true so deck shows admin views
const WeeklyPerformanceAdmin       = () => <WeeklyPerformance isAdmin={true} />;
const MobileWeeklyPerformanceAdmin = () => <MobileWeeklyPerformance isAdmin={true} />;
const SkillsTaxonomyAdmin          = () => <SkillsTaxonomy isAdmin={true} />;
const SkillsTaxonomyEmptyAdmin     = () => <SkillsTaxonomyEmpty isAdmin={true} />;
const MobileSkillsTaxonomyEmptyAdmin = () => <MobileSkillsTaxonomyEmpty isAdmin={true} />;

const COMPONENTS: Record<string, ComponentType> = {
  AccountData, AccountDataConfirmDelete, AccountDataEmpty, AccountDataLoading,
  MobileAccountData, MobileAccountDataConfirmDelete, MobileAccountDataEmpty, MobileAccountDataLoading,
  AIConsent, MobileAIConsent,
  AIReviewConsole, AIReviewConsoleEmpty, AIReviewConsoleLoading, AIReviewConsoleDetail,
  MobileAIReviewConsole, MobileAIReviewConsoleEmpty, MobileAIReviewConsoleLoading, MobileAIReviewConsoleDetail,
  ClickLog, ClickLogEmpty, ClickLogLoading, ClickLogPublic,
  MobileClickLog, MobileClickLogEmpty, MobileClickLogLoading, MobileClickLogPublic,
  ChymeApp, ChymeEmpty, ChymeLoading, ChymePublic, Chyme,
  Desktop,
  DirectoryEmpty, DirectoryLoading, DirectoryPublic, Directory, DirectoryAdmin,
  FoundationEmpty, FoundationLoading, FoundationPublic, Foundation,
  GDPEmpty, GDPLoading, GDPPublic, GDPPublicAlt, GDPRateAdmin, GDP,
  GentlePulseEmpty, GentlePulseLoading, GentlePulsePublic, GentlePulse,
  HubEmpty, HubLoading, HubPublic,
  LevelUp: LevelUpDefault, LevelUpEmpty, LevelUpLoading, LevelUpPublic, LevelUpTrainers, LevelUpAchievements, LevelUpCreditsWallet,
  LightHouseEmpty, LightHouseLoading, LightHousePublic, LightHouse,
  MobileChymeEmpty, MobileChymeLoading, MobileChymePublic, MobileChyme,
  MobileDirectoryEmpty, MobileDirectoryLoading, MobileDirectoryPublic, MobileDirectory, MobileDirectoryAdmin,
  MobileFoundationEmpty, MobileFoundationLoading, MobileFoundationPublic, MobileFoundation,
  MobileGDPEmpty, MobileGDPLoading, MobileGDPPublic, MobileGDPRateAdmin, MobileGDP,
  MobileGentlePulseEmpty, MobileGentlePulseLoading, MobileGentlePulsePublic, MobileGentlePulse,
  MobileHomeEmpty, MobileHomeLoading, MobileHome, MobileHubPublic,
  MobileLevelUp: MobileLevelUpDefault, MobileLevelUpEmpty, MobileLevelUpLoading, MobileLevelUpPublic, MobileLevelUpTrainers, MobileLevelUpAchievements, MobileLevelUpCreditsWallet,
  WhatWorks, WhatWorksPublic, WhatWorksEmpty, WhatWorksLoading,
  MobileWhatWorks, MobileWhatWorksPublic, MobileWhatWorksEmpty, MobileWhatWorksLoading,
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
  SkillsHuntEmpty, SkillsHuntLoading, SkillsHuntPublic, SkillsHunt, SkillsHuntAdmin,
  SocketRelayEmpty, SocketRelayLoading, SocketRelayPublic, SocketRelay,
  TrustEmpty, TrustLoading, TrustPublic, Trust,
  MobileTrustEmpty,
  TrustTransportEmpty, TrustTransportLoading, TrustTransportPublic, TrustTransport,
  WorkforceEmpty, WorkforceLoading, WorkforcePublic, Workforce,
  WeeklyPerformance, WeeklyPerformanceAdmin, WeeklyPerformanceEmpty, WeeklyPerformanceLoading, WeeklyPerformancePublic,
  MobileWeeklyPerformance, MobileWeeklyPerformanceAdmin, MobileWeeklyPerformanceEmpty, MobileWeeklyPerformanceLoading, MobileWeeklyPerformancePublic,
  SkillsTaxonomy, SkillsTaxonomyEmpty, SkillsTaxonomyAdmin, SkillsTaxonomyEmptyAdmin, SkillsTaxonomyLoading, SkillsTaxonomyPublic,
  MobileSkillsTaxonomy, MobileSkillsTaxonomyEmpty, MobileSkillsTaxonomyEmptyAdmin, MobileSkillsTaxonomyLoading, MobileSkillsTaxonomyPublic,
  Unlock, UnlockEmpty, UnlockLoading, UnlockPublic,
  MobileUnlock, MobileUnlockEmpty, MobileUnlockLoading, MobileUnlockPublic,
  ComicAccountData, ComicAccountDataDanger, ComicMobileAccountData, ComicMobileAccountDanger,
  ComicDesktop, ComicChyme, ComicMobileHome,
  MobileFoundationAdmin, MobileLevelUpAdmin, MobileLightHouseAdmin,
  MobilePeerProgrammingAdmin, MobileServiceCreditsAdmin, MobileSkillsHuntAdmin,
  MobileSocketRelayAdmin, MobileTrustTransportAdmin, MobileUnlockAdmin,
  MobileWeeklyPerformanceAdminView, MobileWhatWorksAdmin, MobileWorkforceAdmin,
  Contributions, ContributionsBanner, ContributionsConfirmation, ContributionsEmpty, ContributionsLoading, ContributionsPublic, ContributionsAdmin,
  MobileContributions, MobileContributionsBanner, MobileContributionsConfirmation, MobileContributionsEmpty, MobileContributionsLoading, MobileContributionsPublic, MobileContributionsAdmin,
};

type Slide = {
  component: string;
  name: string;
  row: string;
  rowColor: string;
  type: "desktop" | "mobile";
};

const SECTION_COLORS: Record<string, string> = {
  "AI Assistant":     "#0EA5E9",
  "Hub":              "#38BDF8",
  "Chyme":            "#22C55E",
  "Directory":        "#3B82F6",
  "Workforce":        "#B45309",
  "SkillsHunt":       "#D946EF",
  "Foundation":       "#EF4444",
  "LightHouse":       "#EAB308",
  "SocketRelay":      "#FB923C",
  "TrustTransport":   "#F97316",
  "PeerProgramming":  "#8B5CF6",
  "Mood":             "#EC4899",
  "GentlePulse":      "#14B8A6",
  "GDP":              "#06B6D4",
  "ServiceCredits":   "#F59E0B",
  "LevelUp":          "#10B981",
  "Trust":            "#0284C7",
  "ClickLog":         "#E91E8C",
  "WeeklyPerformance": "#6366F1",
  "SkillsTaxonomy":   "#7C3AED",
  "Unlock":           "#F43F5E",
  "What Works":       "#84CC16",
  "Account & Data":   "#A855F7",
  "Admin Mobile":     "#6366F1",
  "Admin Web":        "#6366F1",
  "Comic Theme":      "#B91C1C",
  "Contributions":    "#F472B6",
};

const web = (component: string, name: string, row: string): Slide => ({
  component, name, row, rowColor: SECTION_COLORS[row] ?? "#888", type: "desktop",
});
const mob = (component: string, name: string, row: string): Slide => ({
  component, name, row, rowColor: SECTION_COLORS[row] ?? "#888", type: "mobile",
});

const SLIDES: Slide[] = [
  // ── HUB ──────────────────────────────────────────────────────────────
  web("HubPublic",              "Web · Not Signed In",           "Hub"),
  web("Desktop",                "Web · Signed In",               "Hub"),
  web("HubEmpty",               "Web · Empty",                   "Hub"),
  web("HubLoading",             "Web · Loading",                 "Hub"),
  mob("MobileHubPublic",        "Mobile · Not Signed In",        "Hub"),
  mob("MobileHome",             "Mobile · Signed In",            "Hub"),
  mob("MobileHomeEmpty",        "Mobile · Empty",                "Hub"),
  mob("MobileHomeLoading",      "Mobile · Loading",              "Hub"),

  // ── CHYME ─────────────────────────────────────────────────────────────
  web("ChymePublic",      "Web · Not Signed In",  "Chyme"),
  web("Chyme",            "Web · Signed In",       "Chyme"),
  web("ChymeEmpty",       "Web · Empty State",     "Chyme"),
  web("ChymeLoading",     "Web · Loading",         "Chyme"),
  web("ChymeApp",         "Web · App Detail",      "Chyme"),
  mob("MobileChymePublic","Mobile · Not Signed In","Chyme"),
  mob("MobileChyme",      "Mobile · Signed In",    "Chyme"),
  mob("MobileChymeEmpty", "Mobile · Empty State",  "Chyme"),
  mob("MobileChymeLoading","Mobile · Loading",     "Chyme"),

  // ── DIRECTORY ─────────────────────────────────────────────────────────
  web("DirectoryPublic",      "Web · Not Signed In",  "Directory"),
  web("Directory",            "Web · Signed In",       "Directory"),
  web("DirectoryEmpty",       "Web · Empty State",     "Directory"),
  web("DirectoryLoading",     "Web · Loading",         "Directory"),
  mob("MobileDirectoryPublic","Mobile · Not Signed In","Directory"),
  mob("MobileDirectory",      "Mobile · Signed In",    "Directory"),
  mob("MobileDirectoryEmpty", "Mobile · Empty State",  "Directory"),
  mob("MobileDirectoryLoading","Mobile · Loading",     "Directory"),

  // ── WORKFORCE ─────────────────────────────────────────────────────────
  web("WorkforcePublic",      "Web · Not Signed In",  "Workforce"),
  web("Workforce",            "Web · Signed In",       "Workforce"),
  web("WorkforceEmpty",       "Web · Empty State",     "Workforce"),
  web("WorkforceLoading",     "Web · Loading",         "Workforce"),
  mob("MobileWorkforcePublic","Mobile · Not Signed In","Workforce"),
  mob("MobileWorkforce",      "Mobile · Signed In",    "Workforce"),
  mob("MobileWorkforceEmpty", "Mobile · Empty State",  "Workforce"),
  mob("MobileWorkforceLoading","Mobile · Loading",     "Workforce"),

  // ── SKILLS HUNT ───────────────────────────────────────────────────────
  web("SkillsHuntPublic",      "Web · Not Signed In",  "Skills Hunt"),
  web("SkillsHunt",            "Web · Signed In",       "Skills Hunt"),
  web("SkillsHuntEmpty",       "Web · Empty State",     "Skills Hunt"),
  web("SkillsHuntLoading",     "Web · Loading",         "Skills Hunt"),
  mob("MobileSkillsHuntPublic","Mobile · Not Signed In","Skills Hunt"),
  mob("MobileSkillsHunt",      "Mobile · Signed In",    "Skills Hunt"),
  mob("MobileSkillsHuntEmpty", "Mobile · Empty State",  "Skills Hunt"),
  mob("MobileSkillsHuntLoading","Mobile · Loading",     "Skills Hunt"),

  // ── FOUNDATION ────────────────────────────────────────────────────────
  web("FoundationPublic",      "Web · Not Signed In",  "Foundation"),
  web("Foundation",            "Web · Signed In",       "Foundation"),
  web("FoundationEmpty",       "Web · Empty State",     "Foundation"),
  web("FoundationLoading",     "Web · Loading",         "Foundation"),
  mob("MobileFoundationPublic","Mobile · Not Signed In","Foundation"),
  mob("MobileFoundation",      "Mobile · Signed In",    "Foundation"),
  mob("MobileFoundationEmpty", "Mobile · Empty State",  "Foundation"),
  mob("MobileFoundationLoading","Mobile · Loading",     "Foundation"),

  // ── LIGHTHOUSE ────────────────────────────────────────────────────────
  web("LightHousePublic",      "Web · Not Signed In",  "LightHouse"),
  web("LightHouse",            "Web · Signed In",       "LightHouse"),
  web("LightHouseEmpty",       "Web · Empty State",     "LightHouse"),
  web("LightHouseLoading",     "Web · Loading",         "LightHouse"),
  mob("MobileLightHousePublic","Mobile · Not Signed In","LightHouse"),
  mob("MobileLightHouse",      "Mobile · Signed In",    "LightHouse"),
  mob("MobileLightHouseEmpty", "Mobile · Empty State",  "LightHouse"),
  mob("MobileLightHouseLoading","Mobile · Loading",     "LightHouse"),

  // ── SOCKET RELAY ──────────────────────────────────────────────────────
  web("SocketRelayPublic",      "Web · Not Signed In",  "Socket Relay"),
  web("SocketRelay",            "Web · Signed In",       "Socket Relay"),
  web("SocketRelayEmpty",       "Web · Empty State",     "Socket Relay"),
  web("SocketRelayLoading",     "Web · Loading",         "Socket Relay"),
  mob("MobileSocketRelayPublic","Mobile · Not Signed In","Socket Relay"),
  mob("MobileSocketRelay",      "Mobile · Signed In",    "Socket Relay"),
  mob("MobileSocketRelayEmpty", "Mobile · Empty State",  "Socket Relay"),
  mob("MobileSocketRelayLoading","Mobile · Loading",     "Socket Relay"),

  // ── TRUST TRANSPORT ───────────────────────────────────────────────────
  web("TrustTransportPublic",      "Web · Not Signed In",  "Trust Transport"),
  web("TrustTransport",            "Web · Signed In",       "Trust Transport"),
  web("TrustTransportEmpty",       "Web · Empty State",     "Trust Transport"),
  web("TrustTransportLoading",     "Web · Loading",         "Trust Transport"),
  mob("MobileTrustTransportPublic","Mobile · Not Signed In","Trust Transport"),
  mob("MobileTrustTransport",      "Mobile · Signed In",    "Trust Transport"),
  mob("MobileTrustTransportEmpty", "Mobile · Empty State",  "Trust Transport"),
  mob("MobileTrustTransportLoading","Mobile · Loading",     "Trust Transport"),

  // ── PEER PROGRAMMING ──────────────────────────────────────────────────
  web("PeerProgrammingPublic",      "Web · Not Signed In",  "Peer Programming"),
  web("PeerProgramming",            "Web · Signed In",       "Peer Programming"),
  web("PeerProgrammingEmpty",       "Web · Empty State",     "Peer Programming"),
  web("PeerProgrammingLoading",     "Web · Loading",         "Peer Programming"),
  mob("MobilePeerProgrammingPublic","Mobile · Not Signed In","Peer Programming"),
  mob("MobilePeerProgramming",      "Mobile · Signed In",    "Peer Programming"),
  mob("MobilePeerProgrammingEmpty", "Mobile · Empty State",  "Peer Programming"),
  mob("MobilePeerProgrammingLoading","Mobile · Loading",     "Peer Programming"),

  // ── MOOD ──────────────────────────────────────────────────────────────
  web("MoodPublic",      "Web · Not Signed In",  "Mood"),
  web("Mood",            "Web · Signed In",       "Mood"),
  web("MoodEmpty",       "Web · Empty State",     "Mood"),
  web("MoodLoading",     "Web · Loading",         "Mood"),
  mob("MobileMoodPublic","Mobile · Not Signed In","Mood"),
  mob("MobileMood",      "Mobile · Signed In",    "Mood"),
  mob("MobileMoodEmpty", "Mobile · Empty State",  "Mood"),
  mob("MobileMoodLoading","Mobile · Loading",     "Mood"),

  // ── GENTLE PULSE ──────────────────────────────────────────────────────
  web("GentlePulsePublic",      "Web · Not Signed In",  "Gentle Pulse"),
  web("GentlePulse",            "Web · Signed In",       "Gentle Pulse"),
  web("GentlePulseEmpty",       "Web · Empty State",     "Gentle Pulse"),
  web("GentlePulseLoading",     "Web · Loading",         "Gentle Pulse"),
  mob("MobileGentlePulsePublic","Mobile · Not Signed In","Gentle Pulse"),
  mob("MobileGentlePulse",      "Mobile · Signed In",    "Gentle Pulse"),
  mob("MobileGentlePulseEmpty", "Mobile · Empty State",  "Gentle Pulse"),
  mob("MobileGentlePulseLoading","Mobile · Loading",     "Gentle Pulse"),

  // ── GDP ───────────────────────────────────────────────────────────────
  web("GDPPublic",      "Web · Not Signed In",  "GDP"),
  web("GDP",            "Web · Signed In",       "GDP"),
  web("GDPEmpty",       "Web · Empty State",     "GDP"),
  web("GDPLoading",     "Web · Loading",         "GDP"),
  mob("MobileGDPPublic","Mobile · Not Signed In","GDP"),
  mob("MobileGDP",      "Mobile · Signed In",    "GDP"),
  mob("MobileGDPEmpty",     "Mobile · Empty State",        "GDP"),
  mob("MobileGDPLoading",   "Mobile · Loading",            "GDP"),
  web("GDPPublicAlt",       "Web · Not Signed In (Alt)",   "GDP"),

  // ── SERVICE CREDITS ───────────────────────────────────────────────────
  web("ServiceCreditsPublic",      "Web · Not Signed In",  "Service Credits"),
  web("ServiceCredits",            "Web · Signed In",       "Service Credits"),
  web("ServiceCreditsEmpty",       "Web · Empty State",     "Service Credits"),
  web("ServiceCreditsLoading",     "Web · Loading",         "Service Credits"),
  mob("MobileServiceCreditsPublic","Mobile · Not Signed In","Service Credits"),
  mob("MobileServiceCredits",      "Mobile · Signed In",    "Service Credits"),
  mob("MobileServiceCreditsEmpty", "Mobile · Empty State",  "Service Credits"),
  mob("MobileServiceCreditsLoading","Mobile · Loading",     "Service Credits"),

  // ── LEVELUP ───────────────────────────────────────────────────────────
  web("LevelUpPublic",      "Web · Not Signed In",  "LevelUp"),
  web("LevelUp",            "Web · Signed In",       "LevelUp"),
  web("LevelUpEmpty",       "Web · Empty State",     "LevelUp"),
  web("LevelUpLoading",     "Web · Loading",         "LevelUp"),
  mob("MobileLevelUpPublic","Mobile · Not Signed In","LevelUp"),
  mob("MobileLevelUp",      "Mobile · Signed In",    "LevelUp"),
  mob("MobileLevelUpEmpty", "Mobile · Empty State",  "LevelUp"),
  mob("MobileLevelUpLoading","Mobile · Loading",     "LevelUp"),
  web("LevelUpTrainers",            "Web · My Trainers",       "LevelUp"),
  web("LevelUpAchievements",        "Web · Achievements",      "LevelUp"),
  web("LevelUpCreditsWallet",       "Web · Credits Wallet",    "LevelUp"),
  mob("MobileLevelUpTrainers",      "Mobile · My Trainers",    "LevelUp"),
  mob("MobileLevelUpAchievements",  "Mobile · Achievements",   "LevelUp"),
  mob("MobileLevelUpCreditsWallet", "Mobile · Credits Wallet", "LevelUp"),

  // ── TRUST ─────────────────────────────────────────────────────────────
  web("TrustPublic",      "Web · Not Signed In",  "Trust"),
  web("Trust",            "Web · Signed In",       "Trust"),
  web("TrustEmpty",       "Web · Empty State",     "Trust"),
  web("TrustLoading",     "Web · Loading",         "Trust"),
  mob("MobileTrustPublic","Mobile · Not Signed In","Trust"),
  mob("MobileTrust",      "Mobile · Signed In",    "Trust"),
  mob("MobileTrustEmpty", "Mobile · Empty State",  "Trust"),
  mob("MobileTrustLoading","Mobile · Loading",     "Trust"),

  // ── CLICKLOG ──────────────────────────────────────────────────────────
  web("ClickLogPublic",       "Web · Not Signed In",  "ClickLog"),
  web("ClickLog",             "Web · Signed In",       "ClickLog"),
  web("ClickLogEmpty",        "Web · Empty State",     "ClickLog"),
  web("ClickLogLoading",      "Web · Loading",         "ClickLog"),
  mob("MobileClickLogPublic", "Mobile · Not Signed In","ClickLog"),
  mob("MobileClickLog",       "Mobile · Signed In",    "ClickLog"),
  mob("MobileClickLogEmpty",  "Mobile · Empty State",  "ClickLog"),
  mob("MobileClickLogLoading","Mobile · Loading",      "ClickLog"),

  // ── WEEKLY PERFORMANCE ────────────────────────────────────────────────
  web("WeeklyPerformancePublic",       "Web · Not Signed In",   "WeeklyPerformance"),
  web("WeeklyPerformance",             "Web · Signed In",        "WeeklyPerformance"),
  web("WeeklyPerformanceEmpty",        "Web · Empty State",      "WeeklyPerformance"),
  web("WeeklyPerformanceLoading",      "Web · Loading",          "WeeklyPerformance"),
  mob("MobileWeeklyPerformancePublic", "Mobile · Not Signed In", "WeeklyPerformance"),
  mob("MobileWeeklyPerformance",       "Mobile · Signed In",     "WeeklyPerformance"),
  mob("MobileWeeklyPerformanceEmpty",  "Mobile · Empty State",   "WeeklyPerformance"),
  mob("MobileWeeklyPerformanceLoading","Mobile · Loading",       "WeeklyPerformance"),

  // ── SKILLS TAXONOMY ───────────────────────────────────────────────────
  web("SkillsTaxonomyPublic",          "Web · Not Signed In",   "SkillsTaxonomy"),
  web("SkillsTaxonomy",                "Web · Signed In",        "SkillsTaxonomy"),
  web("SkillsTaxonomyEmpty",           "Web · Empty State",      "SkillsTaxonomy"),
  web("SkillsTaxonomyLoading",         "Web · Loading",          "SkillsTaxonomy"),
  mob("MobileSkillsTaxonomyPublic",    "Mobile · Not Signed In", "SkillsTaxonomy"),
  mob("MobileSkillsTaxonomy",          "Mobile · Signed In",     "SkillsTaxonomy"),
  mob("MobileSkillsTaxonomyEmpty",     "Mobile · Empty State",   "SkillsTaxonomy"),
  mob("MobileSkillsTaxonomyLoading",   "Mobile · Loading",       "SkillsTaxonomy"),

  // ── UNLOCK ────────────────────────────────────────────────────────────
  web("UnlockPublic",       "Web · Not Signed In",  "Unlock"),
  web("Unlock",             "Web · Signed In",       "Unlock"),
  web("UnlockEmpty",        "Web · Empty State",     "Unlock"),
  web("UnlockLoading",      "Web · Loading",         "Unlock"),
  mob("MobileUnlockPublic", "Mobile · Not Signed In","Unlock"),
  mob("MobileUnlock",       "Mobile · Signed In",    "Unlock"),
  mob("MobileUnlockEmpty",  "Mobile · Empty State",  "Unlock"),
  mob("MobileUnlockLoading","Mobile · Loading",      "Unlock"),

  // ── AI ASSISTANT ──────────────────────────────────────────────────────
  web("AIConsent",                   "Web · First-Use Consent",   "AI Assistant"),
  web("AIReviewConsole",             "Web · Review Console",       "AI Assistant"),
  web("AIReviewConsoleDetail",       "Web · Edit & Correct",       "AI Assistant"),
  web("AIReviewConsoleEmpty",        "Web · Queue Clear",          "AI Assistant"),
  web("AIReviewConsoleLoading",      "Web · Loading",              "AI Assistant"),
  mob("MobileAIConsent",             "Mobile · First-Use Consent", "AI Assistant"),
  mob("MobileAIReviewConsole",       "Mobile · Review Console",    "AI Assistant"),
  mob("MobileAIReviewConsoleDetail", "Mobile · Edit & Correct",    "AI Assistant"),
  mob("MobileAIReviewConsoleEmpty",  "Mobile · Queue Clear",       "AI Assistant"),
  mob("MobileAIReviewConsoleLoading","Mobile · Loading",           "AI Assistant"),

  // ── WHAT WORKS ────────────────────────────────────────────────────────
  web("WhatWorksPublic",       "Web · Not Signed In",  "What Works"),
  web("WhatWorks",             "Web · Signed In",       "What Works"),
  web("WhatWorksEmpty",        "Web · Add Item",        "What Works"),
  web("WhatWorksLoading",      "Web · Loading",         "What Works"),
  mob("MobileWhatWorksPublic", "Mobile · Not Signed In","What Works"),
  mob("MobileWhatWorks",       "Mobile · Signed In",    "What Works"),
  mob("MobileWhatWorksEmpty",  "Mobile · Add Item",     "What Works"),
  mob("MobileWhatWorksLoading","Mobile · Loading",      "What Works"),

  // ── CONTRIBUTIONS ─────────────────────────────────────────────────────
  web("ContributionsPublic",      "Web · Not Signed In",    "Contributions"),
  web("Contributions",            "Web · Signed In",        "Contributions"),
  web("ContributionsEmpty",       "Web · History Empty",    "Contributions"),
  web("ContributionsLoading",     "Web · Loading",          "Contributions"),
  web("ContributionsConfirmation","Web · Post-Submit",       "Contributions"),
  web("ContributionsBanner",      "Web · App Banner",       "Contributions"),
  mob("MobileContributionsPublic",      "Mobile · Not Signed In",    "Contributions"),
  mob("MobileContributions",            "Mobile · Signed In",        "Contributions"),
  mob("MobileContributionsEmpty",       "Mobile · History Empty",    "Contributions"),
  mob("MobileContributionsLoading",     "Mobile · Loading",          "Contributions"),
  mob("MobileContributionsConfirmation","Mobile · Post-Submit",       "Contributions"),
  mob("MobileContributionsBanner",      "Mobile · App Banner",       "Contributions"),

  // ── ADMIN WEB ─────────────────────────────────────────────────────────
  web("DirectoryAdmin",          "Web · Admin",                   "Admin Web"),
  web("GDPRateAdmin",            "Web · GDP Rate Admin",          "Admin Web"),
  web("SkillsHuntAdmin",         "Web · Skills Hunt Admin",       "Admin Web"),
  web("WeeklyPerformanceAdmin",  "Web · Weekly Performance Admin","Admin Web"),
  web("SkillsTaxonomyAdmin",     "Web · Skills Taxonomy Admin",   "Admin Web"),
  web("SkillsTaxonomyEmptyAdmin","Web · Skills Taxonomy Empty (Admin)","Admin Web"),
  web("ContributionsAdmin",      "Web · Contributions Admin",         "Admin Web"),

  // ── ADMIN MOBILE ──────────────────────────────────────────────────────
  mob("MobileDirectoryAdmin",            "Mobile · Directory Admin",        "Admin Mobile"),
  mob("MobileGDPRateAdmin",              "Mobile · GDP Rate Admin",         "Admin Mobile"),
  mob("MobileFoundationAdmin",           "Mobile · Foundation Admin",       "Admin Mobile"),
  mob("MobileLevelUpAdmin",              "Mobile · LevelUp Admin",          "Admin Mobile"),
  mob("MobileLightHouseAdmin",           "Mobile · LightHouse Admin",       "Admin Mobile"),
  mob("MobilePeerProgrammingAdmin",      "Mobile · PeerProgramming Admin",  "Admin Mobile"),
  mob("MobileServiceCreditsAdmin",       "Mobile · ServiceCredits Admin",   "Admin Mobile"),
  mob("MobileSkillsHuntAdmin",           "Mobile · SkillsHunt Admin",       "Admin Mobile"),
  mob("MobileSocketRelayAdmin",          "Mobile · SocketRelay Admin",      "Admin Mobile"),
  mob("MobileTrustTransportAdmin",       "Mobile · TrustTransport Admin",   "Admin Mobile"),
  mob("MobileUnlockAdmin",               "Mobile · Unlock Admin",           "Admin Mobile"),
  mob("MobileWeeklyPerformanceAdmin",    "Mobile · Weekly Performance Admin View","Admin Mobile"),
  mob("MobileWeeklyPerformanceAdminView","Mobile · WeeklyPerformance Admin","Admin Mobile"),
  mob("MobileSkillsTaxonomyEmptyAdmin",  "Mobile · Skills Taxonomy Empty (Admin)","Admin Mobile"),
  mob("MobileWhatWorksAdmin",            "Mobile · WhatWorks Admin",        "Admin Mobile"),
  mob("MobileWorkforceAdmin",            "Mobile · Workforce Admin",        "Admin Mobile"),
  mob("MobileContributionsAdmin",        "Mobile · Contributions Admin",    "Admin Mobile"),

  // ── ACCOUNT & DATA ────────────────────────────────────────────────────
  web("AccountData",              "Web · Signed In",        "Account & Data"),
  web("AccountDataEmpty",         "Web · Empty State",      "Account & Data"),
  web("AccountDataLoading",       "Web · Loading",          "Account & Data"),
  web("AccountDataConfirmDelete", "Web · Confirm Delete",   "Account & Data"),
  mob("MobileAccountData",              "Mobile · Signed In",      "Account & Data"),
  mob("MobileAccountDataEmpty",         "Mobile · Empty State",    "Account & Data"),
  mob("MobileAccountDataLoading",       "Mobile · Loading",        "Account & Data"),
  mob("MobileAccountDataConfirmDelete", "Mobile · Confirm Delete", "Account & Data"),

  // ── COMIC THEME ────────────────────────────────────────────────────────
  web("ComicDesktop",           "Web · Hub Feed",          "Comic Theme"),
  web("ComicChyme",             "Web · Chyme",             "Comic Theme"),
  mob("ComicMobileHome",        "Mobile · Hub Home",       "Comic Theme"),
  web("ComicAccountData",       "Web · Data Inventory",    "Comic Theme"),
  web("ComicAccountDataDanger", "Web · Confirm Delete",    "Comic Theme"),
  mob("ComicMobileAccountData", "Mobile · Data Inventory", "Comic Theme"),
  mob("ComicMobileAccountDanger","Mobile · Confirm Delete","Comic Theme"),
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
      const el = containerRef.current;
      const avW = el ? el.clientWidth : window.innerWidth;
      const avH = (el ? el.clientHeight : window.innerHeight - NAV_H) - 20;
      if (slide.type === "desktop") {
        setScale(Math.min(avW / DESKTOP_W, avH / DESKTOP_H));
      } else {
        setScale(Math.min((avW * 0.5) / MOBILE_W, avH / MOBILE_H, 1));
      }
    };
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [slide.type]);

  const { theme, toggleTheme } = useTheme();
  const isComic = theme === "comic";
  const rowAccent = getAccent(slide.row, theme);

  const sections = Array.from(new Set(SLIDES.map(s => s.row)));
  const iframeW  = slide.type === "desktop" ? DESKTOP_W : MOBILE_W;
  const iframeH  = slide.type === "desktop" ? DESKTOP_H : MOBILE_H;
  const effectiveKey = isComic ? (COMIC_COMPONENT_MAP[slide.component] ?? slide.component) : slide.component;
  const Comp     = COMPONENTS[effectiveKey] ?? COMPONENTS[slide.component];

  return (
    <div
      style={{ background: isComic ? "#0D0D0D" : "#0F1117", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}
      onClick={() => menuOpen && setMenu(false)}
    >
      <div style={{ height: isComic ? 2 : 3, background: isComic ? "#D4C49A" : rowAccent, flexShrink: 0 }} />

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

      <div style={{ height: NAV_H, flexShrink: 0, background: isComic ? "#141414" : "#1A1D27", borderTop: isComic ? "2px solid #D4C49A" : "1px solid #2A2D3A", display: "flex", alignItems: "center", paddingLeft: 20, paddingRight: 20, gap: 16, position: "relative" }}>
        <button
          onClick={e => { e.stopPropagation(); setMenu(m => !m); }}
          style={{ background: "#2A2D3A", border: `1px solid ${rowAccent}44`, color: rowAccent, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          {slide.row}
        </button>

        <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 600, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {slide.name}
        </span>

        <span style={{ color: "#64748B", fontSize: 13, whiteSpace: "nowrap" }}>{idx + 1} / {total}</span>

        <button onClick={() => go(-1)} disabled={idx === 0} style={{ background: idx === 0 ? "#1E2130" : "#2A2D3A", border: "1px solid #3A3D4A", color: idx === 0 ? "#3A3D4A" : "#CBD5E1", borderRadius: 6, width: 36, height: 36, cursor: idx === 0 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        <button onClick={() => go(1)} disabled={idx === total - 1} style={{ background: idx === total - 1 ? "#1E2130" : rowAccent, border: "none", color: "#fff", borderRadius: 6, width: 36, height: 36, cursor: idx === total - 1 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>

        <button
          onClick={e => { e.stopPropagation(); toggleTheme(); }}
          style={{
            background: isComic ? "#141414" : "#2A2D3A",
            border: isComic ? "1.5px solid #D4C49A" : "1px solid #3A3D4A",
            boxShadow: isComic ? "2px 2px 0 #D4C49A" : "none",
            color: isComic ? "#D4C49A" : "#94A3B8",
            borderRadius: isComic ? 0 : 6,
            padding: "4px 10px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
          title={isComic ? "Switch to Default theme" : "Switch to Comic theme"}
        >
          {isComic ? "Comic ✓" : "Comic"}
        </button>

        <span style={{ color: isComic ? "#4A3A2A" : "#3A3D4A", fontSize: 11 }}>← → keys</span>

        {menuOpen && (
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: "absolute", bottom: NAV_H + 8, left: 20, background: "#1A1D27", border: "1px solid #2A2D3A", borderRadius: 10, padding: 8, zIndex: 100, width: 340, boxShadow: "0 -8px 32px rgba(0,0,0,0.6)", maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}
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
