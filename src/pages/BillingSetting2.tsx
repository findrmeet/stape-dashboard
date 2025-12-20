import { useState } from "react";
import { MoreHorizontal, Calendar } from "lucide-react";
import Dropdown, { type DropdownOption } from "../form/Dropdown";
import SecondaryButton from "../components/SecondaryButton";

export default function BillingSettingsSimple() {
  const [server, setServer] = useState("");
  const [status, setStatus] = useState("");

  const serverOptions: DropdownOption<string>[] = [
    { label: "Indigo Morocco Tours", value: "indigo" },
    { label: "Atlas Desert Tours", value: "atlas" },
  ];

  const statusOptions: DropdownOption<string>[] = [
    { label: "Paid", value: "paid" },
    { label: "Failed", value: "failed" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      {/* switching between `subscription` and `billing settings` */}
      <div className="primary-card flex gap-4 mb-6">
        <SecondaryButton className="bg-transparent text-neutral-500 px-10 rounded-2xl! font-medium ">
          Subscription
        </SecondaryButton>
        <SecondaryButton className="rounded-2xl! px-10 font-medium ">
          Billing settings
        </SecondaryButton>
      </div>

      {/* Billing information */}
      <div className="border border-[#1F222A] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#26272F] text-sm font-medium">
          Billing information
        </div>

        <div>
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b border-[#26272F]">
              <tr>
                <th className="text-left font-normal px-6 py-4">Paying as</th>
                <th className="text-left font-normal px-6 py-4">Name</th>
                <th className="text-left font-normal px-6 py-4">Address</th>
                <th className="text-left font-normal px-6 py-4">
                  Next payment
                </th>
                <th className="text-left font-normal px-6 py-4">Card</th>
                <th className="px-6" />
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#26272F]">
                <td className="px-6 py-4">Individual</td>
                <td className="px-6 py-4">Linden Plaza Gainza</td>
                <td className="px-6 py-4">Spain, Pedro de Asua Kalea 55</td>
                <td className="px-6 py-4">$24.20 on 24 Nov 2025</td>
                <td className="px-6 py-4">Visa **** 0395</td>
                <td className="px-6 py-4 text-right   flex justify-end">
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

        <div>
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b border-[#26272F]">
              <tr>
                <th className="text-left font-normal px-6 py-4">
                  Company Name
                </th>
                <th className="text-left font-normal px-6 py-4">
                  Company Address
                </th>
                <th className="text-left font-normal px-6 py-4">Country</th>
                <th className="text-left font-normal px-6 py-4">Tax ID</th>
                <th className="px-6"></th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#26272F]">
                <td className="px-6 py-4">Solid Marketing Ltd.</td>
                <td className="px-6 py-4">Kolkata, West Bengal</td>
                <td className="px-6 py-4">India</td>
                <td className="px-6 py-4">Sterew</td>
                <td className="px-6 py-4 text-right  flex justify-end">
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
        <div>
          {/* Filters */}
          <div className="flex gap-4 py-4 px-6">
            <div className="flex items-center gap-2 border border-[#1F222A] rounded-xl px-3 py-2">
              <Calendar size={14} />
              <input
                type="date"
                className="bg-transparent outline-none text-sm"
              />
            </div>

            <div className="min-w-[240px]">
              <Dropdown
                placeholder="Server"
                value={server}
                onChange={setServer}
                options={serverOptions}
              />
            </div>

            <div className="min-w-[200px]">
              <Dropdown
                placeholder="Payment status"
                value={status}
                onChange={setStatus}
                options={statusOptions}
              />
            </div>
          </div>

          {/* Rows */}
          <div>
            <div className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr] items-center text-sm border-t border-[#26272F] py-4 px-6">
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

            <div className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr] items-center text-sm border-t border-[#26272F] py-4 px-6">
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
