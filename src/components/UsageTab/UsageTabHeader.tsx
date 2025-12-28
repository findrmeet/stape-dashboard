type UsageTabHeaderProps = {
  used: number;
  total: number;
};

export default function UsageTabHeader({ used, total }: UsageTabHeaderProps) {
  const percent = Math.round((used / total) * 100);

  return (
    <div className="flex flex-col gap-5 xl:flex-row">
      {/* Usage Overview */}
      <div className="primary-card flex flex-1 flex-col justify-between rounded-2xl p-6 shadow-inner">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Growth Academy</h3>
            <span className="text-sm font-medium text-neutral-300">{percent}% used</span>
          </div>

          <p className="mt-1.5 text-sm text-neutral-400">
            {used.toLocaleString()} of {total.toLocaleString()} requests sent
          </p>

          {/* Progress Bar */}
          <div className="mt-5">
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#14161C]">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-white transition-all duration-700 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-400">Renews in 9 days</p>
      </div>

      {/* Plan & Expiry */}
      <div className="flex w-full flex-col gap-4 sm:flex-row xl:w-[360px]">
        <div className="primary-card flex-1 rounded-2xl p-5 shadow-inner transition hover:border-neutral-600">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-base font-semibold text-white">Free</h4>
              <p className="text-sm text-neutral-400">Monthly plan</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 text-lg">
              🎁
            </div>
          </div>
        </div>

        <div className="primary-card flex-1 rounded-2xl p-5 shadow-inner transition hover:border-neutral-600">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-base font-semibold text-white">Oct 16, 2025</h4>
              <p className="text-sm text-neutral-400">Valid till</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 text-lg">
              ⏰
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
