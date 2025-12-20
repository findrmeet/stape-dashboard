import { useState } from "react";
import { MoreHorizontal, Calendar } from "lucide-react";

export default function BillingSettingsSimple() {
  const [server, setServer] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      {/* Switch */}
      <div className="flex gap-4">
        <button className="px-8 py-2 rounded-xl text-gray-500 border border-[#1F222A]">
          Subscription
        </button>
        <button className="px-8 py-2 rounded-xl bg-white text-black">
          Billing settings
        </button>
      </div>

      {/* Billing information */}
      <div className="border border-[#1F222A] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#26272F] text-sm font-medium">
          Billing information
        </div>

        <div className="p-6">
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b border-[#26272F]">
              <tr>
                <th className="text-left pb-3 font-normal">Paying as</th>
                <th className="text-left pb-3 font-normal">Name</th>
                <th className="text-left pb-3 font-normal">Address</th>
                <th className="text-left pb-3 font-normal">Next payment</th>
                <th className="text-left pb-3 font-normal">Card</th>
                <th />
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#26272F]">
                <td className="py-4">Individual</td>
                <td className="py-4">Linden Plaza Gainza</td>
                <td className="py-4">Spain, Pedro de Asua Kalea 55</td>
                <td className="py-4">$24.20 on 24 Nov 2025</td>
                <td className="py-4">Visa **** 0395</td>
                <td className="py-4 text-right">
                  <MoreHorizontal size={16} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice information */}
      <div className="border border-[#1F222A] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#26272F] text-sm font-medium">
          Invoice information
        </div>

        <div className="p-6">
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b border-[#26272F]">
              <tr>
                <th className="text-left pb-3 font-normal">Company Name</th>
                <th className="text-left pb-3 font-normal">Company Address</th>
                <th className="text-left pb-3 font-normal">Country</th>
                <th className="text-left pb-3 font-normal">Tax ID</th>
                <th />
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#26272F]">
                <td className="py-4">Solid Marketing Ltd.</td>
                <td className="py-4">Kolkata, West Bengal</td>
                <td className="py-4">India</td>
                <td className="py-4">Sterew</td>
                <td className="py-4 text-right">
                  <MoreHorizontal size={16} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice history */}
      <div className="border border-[#1F222A] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#26272F] text-sm font-medium">
          Invoice history
        </div>

        <div className="p-6">
          {/* Filters */}
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2 border border-[#1F222A] rounded-xl px-3 py-2">
              <Calendar size={14} />
              <input
                type="date"
                className="bg-transparent outline-none text-sm"
              />
            </div>

            <select
              value={server}
              onChange={(e) => setServer(e.target.value)}
              className="bg-transparent border border-[#1F222A] rounded-xl px-3 py-2 text-sm"
            >
              <option value="">Server</option>
              <option value="indigo">Indigo Morocco Tours</option>
              <option value="atlas">Atlas Desert Tours</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-transparent border border-[#1F222A] rounded-xl px-3 py-2 text-sm"
            >
              <option value="">Payment status</option>
              <option value="paid">Paid</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            <div className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr] items-center text-sm border-t border-[#26272F] pt-4">
              <div>
                <div className="font-medium">25 Oct 2025</div>
                <div className="text-xs text-gray-400">
                  Indigo Morocco Tours • 43FA34CS-234587
                </div>
              </div>
              <div>$24.20</div>
              <div className="text-red-500">Payment Failed</div>
              <div className="text-right">
                <button className="bg-white text-black px-4 py-2 rounded-xl">
                  Pay manually
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr] items-center text-sm border-t border-[#26272F] pt-4">
              <div>
                <div className="font-medium">25 Oct 2025</div>
                <div className="text-xs text-gray-400">
                  Indigo Morocco Tours • 43FA34CS-234587
                </div>
              </div>
              <div>$24.20</div>
              <div className="text-gray-400">Paid on 24 Oct 2025</div>
              <div className="text-right">
                <button className="underline">Invoice receipt</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
