import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

const ShareTab: React.FC = () => {
  const [shareAll, setShareAll] = useState(true);
  const [signals, setSignals] = useState(false);
  const [growth, setGrowth] = useState(true);
  const [sgtm, setSgtm] = useState(false);
  const [test, setTest] = useState(true);
  const [billing, setBilling] = useState(true);

  const handleShareAllChange = (value: boolean) => {
    setShareAll(value);
    setSignals(value);
    setGrowth(value);
    setSgtm(value);
    setTest(value);
  };

  return (
    <div className="primary-card">
      <h2 className="primary-card-header text-lg font-semibold">Share my workspace</h2>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-white">Signaly user email *</label>

          <input
            type="email"
            placeholder="Enter your email..."
            className="mt-2 h-[48px] w-full rounded-xl border border-[#26272F] bg-[#111318] px-4 text-sm text-white placeholder-[#777] focus:outline-none"
          />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-[#8A8F98]">
          The users with whom you share access will be given full access to your account and all
          rights to manage it. You can revoke access at any time.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-medium text-white">
            Containers & Gateways you want to share
          </h3>

          <div className="mb-6 h-px w-full bg-[#1C2230]" />

          <div className="space-y-5">
            <Checkbox
              label="Share all current and new"
              checked={shareAll}
              onChange={handleShareAllChange}
            />

            <p className="ml-9 max-w-md text-xs text-[#6F7682]">
              If selected, shared workspace will be granted access to all existing and newly created
              containers and gateways.
            </p>

            <Checkbox label="Signals Gateways" checked={signals} onChange={setSignals} />
            <Checkbox label="Growth Academy" checked={growth} onChange={setGrowth} />
            <Checkbox label="sGTM" checked={sgtm} onChange={setSgtm} />
            <Checkbox label="Test" checked={test} onChange={setTest} />
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-medium text-white">Billing</h3>
          <div className="mb-6 h-px w-full bg-[#1C2230]" />
          <Checkbox
            label="Allow view and edit billing information"
            checked={billing}
            onChange={setBilling}
          />
        </div>
      </div>

      <div className="mt-14">
        <button className="h-[46px] w-[160px] rounded-xl bg-[#EEF2FF] text-sm font-semibold text-black transition hover:brightness-105">
          Share access
        </button>
      </div>
    </div>
  );
};

export default ShareTab;
