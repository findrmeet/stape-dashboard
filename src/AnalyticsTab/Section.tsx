type RequestRow = {
  name: string;
  total: number;
  adBlock: string;
  tp: string;
};

type SectionProps = {
  title: string;
  description: string;
  rows: RequestRow[];
};

export function Section({ title, description, rows }: SectionProps) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <p className="mt-1 max-w-4xl text-sm text-neutral-500">
          {description}{" "}
          <span className="cursor-pointer text-white hover:underline">
            Learn more
          </span>
        </p>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <table className="w-full text-sm">
          <thead className="bg-black/40">
            <tr className="text-left text-neutral-400">
              <th className="px-4 py-3">Requests</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Ad blockers
                </span>
              </th>
              <th className="px-4 py-3">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  TP
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.name}
                className="border-t border-white/5 text-neutral-300"
              >
                <td className="px-4 py-3 font-medium text-white">
                  {row.name}
                </td>
                <td className="px-4 py-3">{row.total.toLocaleString()}</td>
                <td className="px-4 py-3">{row.adBlock}</td>
                <td className="px-4 py-3">{row.tp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
