
import { useState } from "react";
import InputRadio from "../form/InputRadio";
import Dropdown from "../form/Dropdown";

export default function InvoiceInformation() {
  const [value, setValue] = useState<string | undefined>();
  const [country, setCountry] = useState<string | null>(null);

  return (
    <section className="w-full rounded-2xl border border-[#1F222A] bg-transparent text-white">
      {/* Header */}
      <div className="border-b border-[#26272F] p-6">
        <h2 className="text-base font-medium text-white">
          Invoice information
        </h2>
      </div>

      <div className="space-y-5 p-6">
        {/* Paying as */}
        <div className="space-y-3">
          <p className="text-sm text-white">Paying as</p>

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

        {/* Full name */}
        <div>
          <label className="block text-sm text-white mb-2">Full name</label>
          <input
            defaultValue="Rahi"
            className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-white placeholder-[#888888] focus:outline-none"
          />
        </div>

        {/* Billing address */}
        <p className="text-sm font-medium text-white">Billing address</p>

        {/* Country */}
        <div>
          <label className="block text-sm text-white mb-2">Country</label>

          <Dropdown
            options={[
              { label: "India", value: "IN" },
              { label: "USA", value: "US" },
            ]}
            value={country}
            onChange={setCountry}
            placeholder="Search or select country"
          />
        </div>

        {/* Address lines */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white mb-2">
              Address line 1
            </label>
            <input
              defaultValue="Majhi Khanda"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-2">
              Address line 2
            </label>
            <input
              placeholder="Apt, suite, unit number, etc. (optional)"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-[#888888] focus:outline-none"
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm text-white mb-2">City</label>
          <input
            defaultValue="Kolkata"
            className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-white focus:outline-none"
          />
        </div>

        {/* State & Postal */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white mb-2">
              State/Province
            </label>
            <input
              defaultValue="WB"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-2">Postal Code</label>
            <input
              defaultValue="733127"
              className="w-full rounded-xl bg-[#111318] border border-[#26272F] px-4 py-3 text-sm text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex justify-end gap-3 p-6">
        <button className="py-2 px-10 rounded-lg bg-[#2A2A2A] text-sm text-white hover:bg-[#333] transition">
          Cancel
        </button>
        <button className="py-2 px-10 rounded-lg bg-[#EEF2FF] text-sm font-medium text-black hover:bg-white transition">
          Save changes
        </button>
      </div>
    </section>
  );
}
