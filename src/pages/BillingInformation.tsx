import { ChevronDown } from "lucide-react";
import TextInput from "../form/TextInput";
import Dropdown from "../form/Dropdown";
import { useState } from "react";

const BillingInformation = () => {
  const PAYMENT_METHODS = [
    { label: "PayPal", value: "paypal" },
    { label: "Bank transfer", value: "bank" },
    { label: "Apple Pay", value: "apple" },
  ];

  const [method, setMethod] = useState<string | null>(null);
  return (
    <div className="border border-[#1F222A] rounded-2xl ">
      <div className="border-b p-6 border-[#26272F]">
        {/* Header */}
        <h2 className="text-white text-base font-medium ">
          Billing information
        </h2>
      </div>

      <div className="space-y-5 p-6">
        {/* Payment method */}
        <div>
          <label className="block text-sm text-white mb-2">
            Payment method <span className="text-white">*</span>
          </label>
          <Dropdown
            options={PAYMENT_METHODS}
            value={method}
            onChange={setMethod}
            placeholder="Credit or debit card"
          />
          ;
        </div>

        {/* Cardholder name */}
        <div>
          <label className="block text-sm text-white mb-2">
            Cardholder name <span>*</span>
          </label>
          <TextInput placeholder="Enter full name" />
        </div>

        {/* Card number */}
        <div>
          <label className="block text-sm text-white mb-2">
            Card number <span>*</span>
          </label>
          <TextInput placeholder="1234 5678 9012 3456" />
        </div>

        {/* Expiry & CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white mb-2">
              Expiry <span>*</span>
            </label>
            <TextInput placeholder="MM / YY" />
          </div>

          <div>
            <label className="block text-sm text-white mb-2">
              CVC <span>*</span>
            </label>
            <TextInput placeholder="CVC" />
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm text-white mb-2">
            Country <span>*</span>
          </label>
          <div className="relative">
            <select className="w-full py-3 bg-[#111318] border border-[#26272F] rounded-xl px-4 pr-10 text-sm text-[#888888] focus:outline-none appearance-none">
              <option>Search or select country</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1AA]">
              <ChevronDown size={16} />
            </span>
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
    </div>
  );
};

export default BillingInformation;
