import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import SecondaryButton from "./SecondaryButton";

const data = [
  { day: "1", recovered: 0.65, blocked: 0.45 },
  { day: "2", recovered: 0.92, blocked: 0.32 },
  { day: "3", recovered: 0.74, blocked: 0.46 },
  { day: "4", recovered: 0.78, blocked: 0.58 },
  { day: "5", recovered: 0.71, blocked: 0.35 },
  { day: "6", recovered: 0.64, blocked: 0.49 },
  { day: "7", recovered: 0.81, blocked: 0.55 },
];

export default function AnalyticsTab() {
  const [enabled, setEnabled] = useState(false);

  if (!enabled) {
    return (
      <div className="primary-card mt-4 text-center shadow-inner">
        <h2 className="mt-12 text-lg font-medium text-white">Analytics is turned off.</h2>

        <div className="mt-6 flex justify-center">
          <SecondaryButton
            onClick={() => setEnabled(true)}
            className="h-11 cursor-pointer rounded-xl bg-[#EEF2FF] px-6 text-sm text-black shadow-lg hover:bg-white"
          >
            Turn on Analytics
          </SecondaryButton>
        </div>

        <p className="mx-auto mt-6 mb-12 max-w-md text-sm text-neutral-400">
          The configuration steps for Signaly Analytics very depending on your sGTM setup.{" "}
          <span className="cursor-pointer text-white underline underline-offset-4 hover:opacity-80">
            Learn more
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="primary-card mt-4 space-y-6 shadow-inner">
      <div className="rounded-2xl border border-[#26272F] bg-[#0E1015] p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm text-neutral-300">Period</p>
            <select className="rounded-lg border border-[#26272F] bg-[#0B0D12] px-3 py-1 text-sm text-white">
              <option>10 days</option>
              <option>30 days</option>
            </select>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="day" hide />
              <YAxis hide domain={[0, 1]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="recovered"
                stroke="#22C55E"
                fill="url(#green)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="blocked"
                stroke="#EF4444"
                fill="url(#red)"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-[#26272F] bg-[#0E1015] p-10 text-center text-sm text-neutral-500">
        Nothing to show, nothing to see
      </div>

      <div className="rounded-2xl border border-[#26272F] bg-[#0E1015] p-10 text-center text-sm text-neutral-500">
        Nothing to show, nothing to see
      </div>

      <div className="rounded-2xl border border-[#26272F] bg-[#0E1015] p-10 text-center">
        <p className="mb-3 text-sm text-white">Prefer not to use Signaly Analytics?</p>
        <p className="mb-5 text-xs text-neutral-400">
          You can turn it off for this container. Additional steps may be required.
        </p>
        <SecondaryButton className="h-10 rounded-xl bg-white px-6 text-sm text-black shadow-lg hover:bg-neutral-200">
          Turn off Analytics
        </SecondaryButton>
      </div>
    </div>
  );
}
