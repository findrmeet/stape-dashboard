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
    <div className="min-h-screen bg-[#0A0B0F] text-primary-50 px-6 py-6">
      {/* Tabs Container */}
      <div className="rounded-2xl border border-white/10 bg-linear-to-b from-[#0E0F14] to-[#090A0E] p-2 shadow-xl">
        <div className="flex gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <SecondaryButton
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-50 cursor-pointer ${
                  isActive
                    ? "bg-[#EEF2FF] text-black shadow"
                    : "bg-transparent text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </SecondaryButton>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "security" && <div>Security content</div>}
        {activeTab === "shared" && <div>Shared access content</div>}
        {activeTab === "notifications" && <div>Notifications content</div>}
      </div>
    </div>
  );
}
