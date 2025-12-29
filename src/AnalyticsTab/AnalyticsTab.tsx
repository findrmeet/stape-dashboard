import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import SecondaryButton from "../components/SecondaryButton";
import Dropdown from "../form/Dropdown";
import { CustomTooltip } from "../components/CustomTooltip";

const data = [
  { day: "1", recovered: 0.65, blocked: 0.45 },
  { day: "2", recovered: 0.93, blocked: 0.32 },
  { day: "3", recovered: 0.74, blocked: 0.46 },
  { day: "4", recovered: 0.78, blocked: 0.58 },
  { day: "5", recovered: 0.71, blocked: 0.35 },
  { day: "6", recovered: 0.64, blocked: 0.49 },
  { day: "7", recovered: 0.81, blocked: 0.55 },
];

export default function AnalyticsTab() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("10");
  const periodOptions = [
    { label: "10 days", value: "10" },
    { label: "30 days", value: "30" },
  ];

  const toggleEnabled = () => {
    if (enabled) setEnabled(false);
    else setEnabled(true);
  };
  if (!enabled) {
    return (
      <div className="primary-card mt-4 text-center shadow-inner">
        <h2 className="mt-12 text-lg font-medium text-white">Analytics is turned off.</h2>

        <div className="mt-6 flex justify-center">
          <SecondaryButton
            onClick={toggleEnabled}
            className="h-11 cursor-pointer rounded-xl bg-[#EEF2FF] px-6 text-sm text-black shadow-lg hover:bg-white"
          >
            Turn on Analytics
          </SecondaryButton>
        </div>

        <p className="mx-auto mt-6 mb-12 text-sm text-neutral-400">
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
      {/* Top notice */}
      <div className="primary-card text-sm text-neutral-500">
        <p>
          Please hold on, we need some time to collect the data after you enable Analytics. <br />
          This process can take up to 48 hours.
        </p>
      </div>

      {/* Main Analytics Card */}
      <div className="primary-card justify-between sm:flex">
        <div className="mb-6">
          <div className="space-y-8">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-sm text-neutral-300">Period</span>
              <div className="w-32">
                <Dropdown
                  options={periodOptions}
                  value={period}
                  onChange={setPeriod}
                  placeholder="Select"
                />
              </div>
            </div>

            <p className="mt-8 text-sm text-neutral-500">
              Number of recovered requests from ad blockers and browsers with tracking preventions
              over the selected period of time.{" "}
              <span className="cursor-pointer text-white underline underline-offset-4">
                Learn more
              </span>
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-neutral-400">Total requests: -</p>
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Recovered from ad blockers: -
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Recovered from tracking prevention: -
              </div>
            </div>
          </div>
        </div>
        {/*  ====== chart ====== */}
        <div className="h-64 sm:w-[50%]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="day" hide />
              <YAxis
                domain={[0, 1]}
                ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
                allowDataOverflow
                interval={0}
                padding={{ top: 10, bottom: 10 }}
                tickFormatter={(value) => value.toFixed(1)}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#26272F", strokeWidth: 1 }} />

              <Area
                type="monotone"
                dataKey="recovered"
                stroke="#22C55E"
                strokeWidth={1.5}
                fill="url(#green)"
              />
              <Area
                type="monotone"
                dataKey="blocked"
                stroke="#EF4444"
                strokeWidth={1.5}
                fill="url(#red)"
              />
              <defs>
                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Empty Sections */}
      <div className="primary-card">
        <h1 className="primary-card-header text-primary-muted text-lg font-semibold">
          Requests by client
        </h1>
        <p className="py-20 text-center text-sm text-neutral-500">
          Nothing to show, nothing to see
        </p>
      </div>

      <div className="primary-card">
        <h1 className="primary-card-header text-primary-muted text-lg font-semibold">
          Requests by client
        </h1>
        <p className="py-20 text-center text-sm text-neutral-500">
          Nothing to show, nothing to see
        </p>
      </div>

      {/* Footer Action */}
      <div className="primary-card text-center">
        <p className="mt-14 mb-2 text-sm text-white">Prefer not to use Signaly Analytics?</p>
        <p className="mb-5 text-xs text-neutral-400">
          You can turn it off for this container. Additional steps may be required.{" "}
          <span className="cursor-pointer text-white underline underline-offset-4">Learn more</span>
        </p>
        <SecondaryButton
          onClick={toggleEnabled}
          className="mb-14 h-10 cursor-pointer rounded-xl bg-white px-6 text-sm text-black shadow-lg hover:bg-neutral-200"
        >
          Turn off Analytics
        </SecondaryButton>
      </div>
    </div>
  );
}
