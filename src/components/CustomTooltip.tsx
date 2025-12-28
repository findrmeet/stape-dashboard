type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
  label?: string;
};
export const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const recovered = payload.find((data) => data.dataKey === "recovered")?.value;
  const blocked = payload.find((data) => data.dataKey === "blocked")?.value;

  return (
    <div className="rounded-xl border border-[#26272F] bg-[#0B0D12] px-4 py-3 shadow-xl">
      <p className="mb-2 text-xs text-neutral-400">Day {label}</p>

      <div className="space-y-1 text-sm">
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Recovered: {recovered.toFixed(2)}
        </div>

        <div className="flex items-center gap-2 text-neutral-200">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Blocked: {blocked.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
