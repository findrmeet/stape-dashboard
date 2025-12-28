import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------- Types ---------- */

export type DropdownOption<T = string> = {
  label: string;
  value: T;
};

type DropdownProps<T = string> = {
  options: DropdownOption<T>[];
  value?: T | null;
  onChange: (value: T) => void;

  placeholder?: string;
  disabled?: boolean;
};

/* ---------- Component ---------- */

const Dropdown = <T,>({
  options,
  value,
  onChange,
  placeholder = "Select option",
  disabled = false,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState<boolean>(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <section className="relative w-full text-sm">
      {/* Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className={`w-full bg-[#111318] px-3 py-2 rounded-lg flex justify-between items-center border border-[#26272F]
          ${disabled ? "opacity-50 cursor-not-allowed" : "text-white"}
        `}
      >
        <span className={selectedOption ? "text-white" : "text-[#888888]"}>
          {selectedOption?.label ?? placeholder}
        </span>

        <span
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {/* Dropdown */}
      {open && !disabled && (
        <ul className="absolute z-10 mt-2 w-full bg-[#181A20] rounded-lg shadow-lg border border-[#26272F]">
          {options.map((option) => (
            <li
              key={String(option.value)}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="px-3 py-2 bg-[#111217] hover:bg-[#3A3B44] cursor-pointer rounded-xl m-2"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Dropdown;
