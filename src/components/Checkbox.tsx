type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  const handleClick = () => {
    onChange?.(!checked);
  };

  return (
    <div className="flex cursor-pointer items-center gap-4 select-none" onClick={handleClick}>
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
          checked
            ? "border-white bg-white"
            : "border-[#3A3F4B] bg-transparent hover:border-[#6B7280]"
        } `}
      >
        {checked && (
          <svg
            className="h-3 w-3 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      <span className="text-sm text-white">{label}</span>
    </div>
  );
};
