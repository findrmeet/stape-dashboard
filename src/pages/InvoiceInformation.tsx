import { ChevronDown } from "lucide-react";
import { useState } from "react";
import InputRadio from "../form/InputRadio";
import Dropdown from "../form/Dropdown";

export default function InvoiceInformation() {
  const [value, setValue] = useState<string | undefined>();
  const [country, setCountry] = useState<string | null>(null);

  return (
    <div className="w-full  mx-auto rounded-2xl border border-[#26272F] bg-[#0B0D12] text-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#26272F]">
        <h2 className="text-base font-semibold">Invoice information</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Paying as */}
        <div className="space-y-3">
          <p className="text-sm text-[#C7C9D1]">Paying as</p>
          <div className="flex gap-6">
            <InputRadio
              name="payingAs"
              value={value}
              onChange={setValue}
              options={[
                { label: "Individual", value: "individual" },
                { label: "Company", value: "company" },
              ]}
            />
          </div>
        </div>

        {/* Full name */}
        <div className="space-y-2">
          <label className="text-sm text-[#C7C9D1]">Full name</label>
          <input
            defaultValue="Rahi"
            className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm outline-none focus:border-[#3A3B44]"
          />
        </div>

        {/* Billing address */}
        <p className="text-sm font-medium">Billing address</p>

        {/* Country */}
        <div className="space-y-2">
          <label className="text-sm text-[#C7C9D1]">Country</label>
          <div className="relative">
            <Dropdown
              options={[
                { label: "India", value: "IN" },
                { label: "USA", value: "US" },
              ]}
              value={country}
              onChange={setCountry}
              placeholder="Select country"
            />

            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8D9B]"
            />
          </div>
        </div>

        {/* Address lines */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-[#C7C9D1]">Address line 1</label>
            <input
              defaultValue="Majhi Khanda"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm outline-none focus:border-[#3A3B44]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#C7C9D1]">Address line 2</label>
            <input
              placeholder="Apt, suite, unit number, etc. (optional)"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-[#C7C9D1] outline-none focus:border-[#3A3B44]"
            />
          </div>
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="text-sm text-[#C7C9D1]">City</label>
          <input
            defaultValue="Kolkata"
            className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm outline-none focus:border-[#3A3B44]"
          />
        </div>

        {/* State & Postal */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-[#C7C9D1]">State/Province</label>
            <input
              defaultValue="WB"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm outline-none focus:border-[#3A3B44]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#C7C9D1]">Postal Code</label>
            <input
              defaultValue="733127"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm outline-none focus:border-[#3A3B44]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button className="rounded-lg bg-[#2A2C33] px-4 py-2 text-sm">
            Cancel
          </button>
          <button className="rounded-lg bg-white px-4 py-2 text-sm text-black">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
