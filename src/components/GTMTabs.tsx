import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import AnalyticsTab from "../AnalyticsTab/AnalyticsTab";
import LogsTab from "./LogsTab";
import StoreTab from "./StoreTab";
import ConnectionsTab from "./ConnectionsTab/ConnectionsTab";
import UsageTabHeader from "./UsageTab/UsageTabHeader";
import SubscriptionInfo from "./SubscriptionTab/SubscriptionInfo";

type TabKey =
  | "details"
  | "domain"
  | "powerups"
  | "analytics"
  | "subscription"
  | "logs"
  | "monitoring"
  | "store"
  | "connections"
  | "uses";

export default function GTMTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("analytics");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "details", label: "Details" },
    { key: "domain", label: "Domain" },
    { key: "powerups", label: "Power-Ups" },
    { key: "analytics", label: "Analytics" },
    { key: "subscription", label: "Subscription" },
    { key: "logs", label: "Logs" },
    { key: "monitoring", label: "Monitoring" },
    { key: "store", label: "Store" },
    { key: "connections", label: "Connections" },
    { key: "uses", label: "Usage" },
  ];

  const changeActiveTab = (tabKey: TabKey) => {
    setActiveTab(tabKey);
  };

  const handleTabClick = (tabKey: TabKey) => {
    changeActiveTab(tabKey);
  };

  return (
    <section className="text-primary-50">
      {/* Tabs */}
      <div className="rounded-2xl border border-[#22252E] bg-[#0B0D12] p-2">
        <div className="flex flex-wrap gap-2">
          {tabs?.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <SecondaryButton
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`h-11 w-full cursor-pointer rounded-xl bg-transparent px-6 text-sm transition-all sm:w-34 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "bg-[#0F1117] text-neutral-400 hover:text-white"
                }`}
              >
                {tab.label}
              </SecondaryButton>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "details" && <div>...</div>}
        {activeTab === "domain" && <div>...</div>}
        {activeTab === "powerups" && <div>...</div>}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "subscription" && <SubscriptionInfo />}
        {activeTab === "logs" && <LogsTab />}
        {activeTab === "monitoring" && <div>Monitoring Content</div>}
        {activeTab === "store" && <StoreTab />}
        {activeTab === "connections" && <ConnectionsTab />}
        {activeTab === "uses" && <UsageTabHeader used={1899} total={10000} />}
      </div>
    </section>
  );
}
