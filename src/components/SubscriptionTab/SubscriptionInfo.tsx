import { ChevronDown } from "lucide-react";
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
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import { GradientWallet } from "./GradientWallet";

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
    <div className="w-full space-y-8 text-neutral-500">
      {/* Top notice */}
      <div className="primary-card text-sm">
        <p>
          Please hold on, we need some time to collect the data after you enable Analytics. <br />
          This process can take up to 48 hours.
        </p>
      </div>
      {/* Top Card */}
      <div className="primary-card flex w-full flex-col gap-8 rounded-2xl p-6 shadow-xl md:flex-row md:p-8">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-white">500,000</h1>
            <p className="mt-1 text-sm">requests per month on Pro plan</p>
          </div>

          <div className="primary-card divide-y divide-dashed divide-[#1F2430] rounded-xl">
            <Row label="Billing cycle renews in" value="28 days" />
            <Row label="Next payment" value="$20 + $4 tax" />

            <div className="flex gap-4 p-4">
              <Toggle
                defaultOn
                onChange={(value) => {
                  console.log("Auto upgrade:", value);
                }}
              />
              <span className="text-sm">Upgrade container to the next tier automatically</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="primary-card flex flex-1 flex-col justify-center rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <GradientWallet />
            <div>
              <h2 className="text-xl font-semibold text-white">Get 2 months for free!</h2>
              <p className="mt-1 mb-6 text-sm">Pay annually and get two months free</p>
              <SecondaryButton className="w-56 cursor-pointer rounded-xl bg-white px-6 text-sm text-black shadow-lg hover:bg-neutral-200">
                View Details
              </SecondaryButton>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-white">Invoices</p>
              <p className="text-xs">View your payment history</p>
            </div>

            <PrimaryButton className="px-4 py-2"> View billing history</PrimaryButton>
          </div>
        </div>
      </div>

      {/* Usage Graph */}
      <div className="primary-card rounded-2xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-white">
            Available requests this month left: <span className="text-white">462,300</span>
          </p>

          <button className="flex items-center gap-2 rounded-xl border border-[#1F2430] bg-[#0F1117] px-4 py-2 text-sm">
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
