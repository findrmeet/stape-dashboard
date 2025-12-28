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
        className={`flex w-full cursor-pointer items-center justify-between rounded-lg border border-[#26272F] bg-[#111318] px-3 py-2 ${disabled ? "cursor-not-allowed opacity-50" : "text-white"} `}
      >
        <span className={selectedOption ? "text-white" : "text-[#888888]"}>
          {selectedOption?.label ?? placeholder}
        </span>

        <span
          className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {/* Dropdown */}
      {open && !disabled && (
        <ul className="absolute z-10 mt-2 w-full rounded-lg border border-[#26272F] bg-[#181A20] shadow-lg">
          {options?.map((option) => (
            <li
              key={String(option.value)}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="m-2 cursor-pointer rounded-xl bg-[#111217] px-3 py-2 hover:bg-[#3A3B44]"
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
