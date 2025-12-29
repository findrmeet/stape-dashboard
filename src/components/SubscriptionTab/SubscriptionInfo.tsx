import { CreditCard, ChevronDown } from "lucide-react";
import { Row } from "./Row";
import { Toggle } from "./Toggle";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/* -----------------------------
   Fake Data
--------------------------------*/

const data = [
  { name: "Nov 12, 2025", ga4: 90000 },
  { name: "Nov 12, 2025", ga4: 260000 },
  { name: "Nov 12, 2025", ga4: 130000 },
  { name: "Nov 12, 2025", ga4: 180000 },
  { name: "Nov 12, 2025", ga4: 325000 },
  { name: "Nov 12, 2025", ga4: 200000 },
  { name: "Nov 12, 2025", ga4: 275000, other: 30000, signaly: 35000 },
  { name: "Nov 12, 2025", ga4: 210000, other: 25000, signaly: 35000 },
  { name: "Nov 12, 2025", ga4: 375000, other: 30000, signaly: 20000 },
  { name: "Current period", ga4: 80000 },
];

/* -----------------------------
   Main Component
--------------------------------*/

export default function SubscriptionInfo() {
  return (
    <div className="w-full space-y-8">
      {/* Top Card */}
      <div className="flex w-full gap-8 rounded-2xl border border-[#1B1E26] bg-[#0B0D12] p-8 shadow-xl">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-white">500,000</h1>
            <p className="mt-1 text-sm text-[#9CA3AF]">requests per month on Pro plan</p>
          </div>

          <div className="divide-y divide-[#1F2430] rounded-xl border border-[#1F2430] bg-[#0F1117]">
            <Row label="Billing cycle renews in" value="28 days" />
            <Row label="Next payment" value="$20 + $4 tax" />

            <div className="flex items-center justify-between p-4">
              <span className="text-sm text-[#9CA3AF]">
                Upgrade container to the next tier automatically
              </span>
              <Toggle />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-[360px] flex-col justify-between rounded-2xl border border-[#1F2430] bg-[#0F1117] p-6">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#141823]">
              <CreditCard className="text-white" size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Get 2 months for free!</h2>
              <p className="mt-1 text-sm text-[#9CA3AF]">Pay annually and get two months free</p>
            </div>

            <button className="mt-2 w-full rounded-xl bg-[#EEF2FF] py-2.5 text-sm font-medium text-[#111827] transition hover:opacity-90">
              View details
            </button>
          </div>

          <div className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-white">Invoices</p>
              <p className="text-xs text-[#9CA3AF]">View your payment history</p>
            </div>

            <button className="rounded-lg border border-[#1F2430] px-4 py-2 text-sm text-white transition hover:bg-[#151923]">
              View billing history
            </button>
          </div>
        </div>
      </div>

      {/* Usage Graph */}
      <div className="rounded-2xl border border-[#1B1E26] bg-[#0B0D12] p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-white">
            Available requests this month left: <span className="text-white">462,300</span>
          </p>

          <button className="flex items-center gap-2 rounded-xl border border-[#1F2430] bg-[#0F1117] px-4 py-2 text-sm text-[#9CA3AF]">
            Select domain <ChevronDown size={16} />
          </button>
        </div>

        <div className="h-90">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={36}>
              <CartesianGrid strokeDasharray="4 4" stroke="#1F2430" />
              <XAxis dataKey="name" stroke="#6B7280" tickLine={false} />
              <YAxis stroke="#6B7280" tickLine={false} />
              <Tooltip
                cursor={{ fill: "#1F2430" }}
                contentStyle={{
                  backgroundColor: "#0F1117",
                  border: "1px solid #1F2430",
                  borderRadius: "8px",
                  color: "white",
                }}
              />
              <Legend />

              <Bar dataKey="ga4" stackId="a" fill="#2B2F38" />
              <Bar dataKey="other" stackId="a" fill="#8B5CF6" />
              <Bar dataKey="signaly" stackId="a" fill="#FACC15" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
