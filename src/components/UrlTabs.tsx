"use client";

import { useState } from "react";
import ProfileTab from "./ProfileTab";
// import ProfileTab from "./ProfileTab";

export default function UrlTabs() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "billing" | "security"
  >("profile");

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      {/* Tabs Header */}
      <div className="border-b border-white/10 px-8 pt-6">
        <div className="flex gap-8 text-sm font-medium">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-4 transition ${
              activeTab === "profile"
                ? "border-b-2 border-white text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Profile
          </button>

          <button
            onClick={() => setActiveTab("billing")}
            className={`pb-4 transition ${
              activeTab === "billing"
                ? "border-b-2 border-white text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Billing
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`pb-4 transition ${
              activeTab === "security"
                ? "border-b-2 border-white text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Security
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "billing" && <div>Billing content</div>}
        {activeTab === "security" && <div>Security content</div>}
      </div>
    </div>
  );
}
