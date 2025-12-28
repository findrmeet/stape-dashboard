import { useState } from "react";
import ProfileTab from "./ProfileTab";
import SecondaryButton from "./SecondaryButton";
import SecurityTab from "./SecurityTab";
import ShareTab from "./ShareTab";
import NotificationsTab from "./NotificationsTab";

type TabKey = "profile" | "security" | "shared" | "notifications";

export default function UrlTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "profile", label: "Profile" },
    { key: "security", label: "Security" },
    { key: "shared", label: "Shared access" },
    { key: "notifications", label: "Notifications" },
  ];

  const changeActiveTab = (tabKey: TabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <section className="text-primary-50 min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      {/* Tabs Container */}
      <div className="border-gray-base rounded-2xl border p-3 sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <SecondaryButton
                key={tab.key}
                onClick={changeActiveTab.bind(null, tab.key)}
                className={`h-12 w-full cursor-pointer sm:w-50 ${
                  isActive ? "" : "bg-transparent text-neutral-500 hover:text-white"
                }`}
              >
                {tab.label}
              </SecondaryButton>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-5">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "shared" && <ShareTab />}
        {activeTab === "notifications" && <NotificationsTab />}
      </div>
    </section>
  );
}
