"use client";

import { useState } from "react";
import ProfileTab from "./ProfileTab";
import SecondaryButton from "./SecondaryButton";

type TabKey = "profile" | "security" | "shared" | "notifications";

export default function UrlTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "profile", label: "Profile" },
    { key: "security", label: "Security" },
    { key: "shared", label: "Shared access" },
    { key: "notifications", label: "Notifications" },
  ];

  return (
    <div className="min-h-screen text-primary-50 px-6 py-6">
      {/* Tabs Container */}
      <div className="rounded-2xl border border-gray-base  p-4 ">
        <div className="flex gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <SecondaryButton
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-50 cursor-pointer ${
                  isActive
                    ? ""
                    : "bg-transparent text-neutral-500 hover:text-white"
                }`}
              >
                {tab.label}
              </SecondaryButton>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "security" && <div>Security content</div>}
        {activeTab === "shared" && <div>Shared access content</div>}
        {activeTab === "notifications" && <div>Notifications content</div>}
      </div>
    </div>
  );
}
