import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PAYMENT_METHODS = ["Credit or debit card", "PayPal", "Bank transfer"];

const PaymentDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(PAYMENT_METHODS[0]);

  return (
    <div className="relative w-full">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full bg-[#111318] text-white px-3 py-2 rounded-lg flex justify-between items-center border border-[#26272F]"
      >
        {value}

        <span
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-[#181A20] rounded-lg shadow-lg border border-[#26272F]">
          {PAYMENT_METHODS.map((method) => (
            <li
              key={method}
              onClick={() => {
                setValue(method);
                setOpen(false);
              }}
              className="px-3 py-2 bg-[#111217] hover:bg-[#3A3B44] cursor-pointer rounded-xl m-2"
            >
              {method}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentDropdown;
