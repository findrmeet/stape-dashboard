import { useState } from "react";

type ToggleProps = {
  defaultOn?: boolean;
  onChange?: (value: boolean) => void;
};

export function Toggle({ defaultOn = false, onChange }: ToggleProps) {
  const [enabled, setEnabled] = useState(defaultOn);

  function handleToggle() {
    const next = !enabled;
    setEnabled(next);
    onChange?.(next);
  }

  return (
    <button
      onClick={handleToggle}
      aria-checked={enabled}
      role="switch"
      className={`relative h-6 w-11 cursor-pointer rounded-full bg-linear-to-l from-white to-[#777] transition-colors duration-300`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${enabled ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}
