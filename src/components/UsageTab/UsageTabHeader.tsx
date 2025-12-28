import { CalendarClock, Gift } from "lucide-react";
import ProgressBar from "../ProgressBar";
// import ProgressBar from "./ProgressBar";

type UsageTabHeaderProps = {
  used: number;
  total: number;
};

export default function UsageTabHeader({ used, total }: UsageTabHeaderProps) {
  const percent = Math.round((used / total) * 100);

  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      {/* Left: Usage Overview */}
      <div className="primary-card flex flex-3 flex-col justify-between rounded-2xl px-7 py-6 shadow-inner">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="leading-tight font-semibold text-white">Growth Academy</h3>

            <span className="font-medium text-neutral-300">{percent}% used</span>
          </div>

          <p className="mt-2 text-neutral-400">
            <span className="text-white">
              {used.toLocaleString()} of {total.toLocaleString()}
            </span>{" "}
            requests sent
          </p>

          {/* Progress bar */}
          <div className="mt-5">
            <ProgressBar progress={percent} height="h-[12px]" />
          </div>
        </div>

        <p className="mt-5 text-[14px] text-neutral-400">Renews in 9 days</p>
      </div>

      {/* Right: Plan & Expiry */}
      <div className="flex w-full flex-1 flex-col gap-4">
        {/* Plan card */}
        <div className="primary-card flex-1 rounded-2xl px-6 py-5 shadow-inner">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[15px] font-semibold text-white">Free</h4>
              <p className="mt-0.5 text-[13px] text-neutral-400">Monthly plan</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 text-[18px]">
              <Gift />
            </div>
          </div>
        </div>

        {/* Expiry card */}
        <div className="primary-card flex-1 rounded-2xl px-6 py-5 shadow-inner">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[15px] font-semibold text-white">Oct 16, 2025</h4>
              <p className="mt-0.5 text-[13px] text-neutral-400">Valid till</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 text-[18px]">
              <CalendarClock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
