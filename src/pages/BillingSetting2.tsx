import { useState } from "react";
import { MoreHorizontal, Calendar } from "lucide-react";
import Dropdown, { type DropdownOption } from "../form/Dropdown";
import SecondaryButton from "../components/SecondaryButton";

export default function BillingSettingsSimple() {
  const [server, setServer] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const serverOptions: DropdownOption<string>[] = [
    { label: "Indigo Morocco Tours", value: "indigo" },
    { label: "Atlas Desert Tours", value: "atlas" },
  ];

  const statusOptions: DropdownOption<string>[] = [
    { label: "Paid", value: "paid" },
    { label: "Failed", value: "failed" },
  ];

  const [openAction, setOpenAction] = useState<null | "billing" | "invoice">(
    null
  );

  return (
    <section className="min-h-screen bg-black text-white p-6 space-y-6">
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

        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-[#26272F]">
            <tr>
              <th className="text-left font-normal px-6 py-4">Paying as</th>
              <th className="text-left font-normal px-6 py-4">Name</th>
              <th className="text-left font-normal px-6 py-4">Address</th>
              <th className="text-left font-normal px-6 py-4">Next payment</th>
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
              <td className="px-6 py-4 flex justify-end relative">
                {/* Trigger */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenAction(openAction === "billing" ? null : "billing")
                  }
                  className="bg-[#111318] px-3 py-2 rounded-lg flex items-center border border-[#26272F]"
                >
                  <MoreHorizontal size={16} />
                </button>

                {/* Dropdown */}
                {openAction === "billing" && (
                  <ul className="absolute z-10 top-15 w-32 bg-[#181A20] rounded-lg shadow-lg border border-[#26272F]">
                    <li
                      onClick={() => {
                        setOpenAction(null);
                        console.log("Edit billing");
                      }}
                      className="px-3 py-2 bg-[#111217] hover:bg-[#3A3B44] cursor-pointer rounded-xl m-2"
                    >
                      Edit
                    </li>

                    <li
                      onClick={() => {
                        setOpenAction(null);
                        console.log("Delete billing");
                      }}
                      className="px-3 py-2 bg-[#111217] hover:bg-[#3A3B44] cursor-pointer rounded-xl m-2 text-red-500"
                    >
                      Delete
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Invoice information */}
      <div className="border border-[#1F222A] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#26272F] text-sm font-medium">
          Invoice information
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-[#26272F]">
            <tr>
              <th className="text-left font-normal px-6 py-4">Company Name</th>
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
              <td className="px-6 py-4 flex justify-end relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenAction(openAction === "invoice" ? null : "invoice")
                  }
                  className="bg-[#111318] px-3 py-2 rounded-lg flex items-center border border-[#26272F]"
                >
                  <MoreHorizontal size={16} />
                </button>

                {openAction === "invoice" && (
                  <ul className="absolute z-10 top-15 w-32 bg-[#181A20] rounded-lg shadow-lg border border-[#26272F]">
                    <li
                      onClick={() => {
                        setOpenAction(null);
                        console.log("Edit invoice");
                      }}
                      className="px-3 py-2 bg-[#111217] hover:bg-[#3A3B44] cursor-pointer rounded-xl m-2"
                    >
                      Edit
                    </li>

                    <li
                      onClick={() => {
                        setOpenAction(null);
                        console.log("Delete invoice");
                      }}
                      className="px-3 py-2 bg-[#111217] hover:bg-[#3A3B44] cursor-pointer rounded-xl m-2 text-red-500"
                    >
                      Delete
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Invoice history */}
      <div className="border border-[#1F222A] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#26272F] text-sm font-medium">
          <h3>Invoice history</h3>
        </div>

        <table className="w-full text-sm">
          {/* THEAD (filters + column headers) */}
          <thead className="border-b border-[#26272F] text-gray-400">
            {/* Filters row */}
            <tr className="border-b border-[#26272F]">
              <th colSpan={4} className="px-6 py-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 border border-[#1F222A] rounded-xl px-3 py-2">
                    <Calendar size={14} />
                    <input
                      type="date"
                      className="bg-transparent outline-none text-sm"
                    />
                  </div>

                  <div className="min-w-60">
                    <Dropdown
                      placeholder="Server"
                      value={server}
                      onChange={setServer}
                      options={serverOptions}
                    />
                  </div>

                  <div className="min-w-50">
                    <Dropdown
                      placeholder="Payment status"
                      value={status}
                      onChange={setStatus}
                      options={statusOptions}
                    />
                  </div>
                </div>
              </th>
            </tr>

            {/* Column headers */}
            <tr>
              <th className="text-left font-normal px-6 py-3">
                <p>Invoice</p>
              </th>
              <th className="text-left font-normal px-6 py-3">
                <p>Amount</p>
              </th>
              <th className="text-left font-normal px-6 py-3">
                <p>Payment status</p>
              </th>
              <th className="px-6 py-3" />
            </tr>
          </thead>

          {/* TBODY */}
          <tbody>
            {/* Failed */}
            <tr className="border-t border-[#26272F]">
              <td className="px-6 py-4">
                <h4 className="font-medium">25 Oct 2025</h4>
                <p className="text-xs text-gray-400">
                  Indigo Morocco Tours • 43FA34CS-234587
                </p>
              </td>

              <td className="px-6 py-4">
                <p>$24.20</p>
              </td>

              <td className="px-6 py-4 text-red-500">
                <p>Payment Failed</p>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="bg-white text-black px-4 py-2 rounded-xl">
                  Pay manually
                </button>
              </td>
            </tr>

            {/* Paid */}
            <tr className="border-t border-[#26272F]">
              <td className="px-6 py-4">
                <h4 className="font-medium">25 Oct 2025</h4>
                <p className="text-xs text-gray-400">
                  Indigo Morocco Tours • 43FA34CS-234587
                </p>
              </td>

              <td className="px-6 py-4">
                <p>$24.20</p>
              </td>

              <td className="px-6 py-4 text-gray-400">
                <p>Paid on 24 Oct 2025</p>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="underline">Invoice receipt</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
