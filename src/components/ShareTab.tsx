import React, { useState } from "react";
import { Checkbox } from "./Checkbox";
import TextInput from "../form/TextInput";
import AlreadyShared from "./AlreadyShared";
import { Box, DoorOpen } from "lucide-react";

const ShareTab: React.FC = () => {
  const [shareAll, setShareAll] = useState(true);

  const [growth, setGrowth] = useState(true);

  const [test, setTest] = useState(true);
  const [billing, setBilling] = useState(true);

  const handleShareAllChange = (value: boolean) => {
    setShareAll(value);
    setGrowth(value);
    setTest(value);
  };

  return (
    <section>
      <div className="primary-card">
        <h2 className="primary-card-header text-lg font-semibold">Share my workspace</h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-16 lg:grid-cols-2">
          <div className="mt-6">
            <label className="text-sm font-medium">Signaly user email *</label>
            <TextInput placeholder="Enter your email..." className="mt-2" />
          </div>

          <p className="leading-relaxed text-[#8A8F98] sm:mt-8 sm:text-sm">
            The users with whom you share access will be given full access to your account and all
            rights to manage it. You can revoke access at any time.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-sm font-medium">Containers & Gateways you want to share</h3>
            <div className="mb-6 h-px w-full bg-[#26272F]" />

            <div>
              <Checkbox
                label="Share all current and new"
                checked={shareAll}
                onChange={handleShareAllChange}
              />
              <p className="ml-9 text-xs text-[#8A8F98]">
                If selected, shared workspace will be granted access to all existing and newly
                created containers and gateways.
              </p>
              <div className="mt-5 space-y-5">
                <div className="flex gap-3 font-semibold">
                  <DoorOpen /> <span>Signals Gateways</span>
                </div>
                <Checkbox label="Growth Academy" checked={growth} onChange={setGrowth} />
                <div className="flex gap-3 font-semibold">
                  <Box /> <span>sGTM</span>
                </div>
                <Checkbox label="Test" checked={test} onChange={setTest} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium">Billing</h3>
            <div className="mb-6 h-px w-full bg-[#26272F]" />
            <Checkbox
              label="Allow view and edit billing information"
              checked={billing}
              onChange={setBilling}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <AlreadyShared />
      </div>
    </section>
  );
};

export default ShareTab;
