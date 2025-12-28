import React from "react";

/* ---------- Types ---------- */

type RadioOption = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  isLearnMore?: boolean;
  handleLearnMore?: () => void;
};

type InputRadioProps = {
  name: string;
  label?: string;
  required?: boolean;
  error?: string;
  layout?: "horizontal" | "vertical";
  options: RadioOption[];

  value?: string;
  onChange: (value: string | undefined) => void;
};

/* ---------- Component ---------- */

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  (
    {
      name,
      label,
      required = false,
      error,
      layout = "horizontal",
      options,
      value,
      onChange,
    },
    ref
  ) => {
    return (
      <div className="space-y-3 text-[16px] text-primary-50">
        {label && (
          <label className="block">
            {label}
            {required && <span>*</span>}
          </label>
        )}

        <div className="flex items-center gap-6">
          {options?.map((option, index) => {
            const isSelected = value === option.value;
            const isDisabled = option.disabled;

            return (
              <div key={option.value + index}>
                <div
                  className={`space-y-2 cursor-pointer ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (isDisabled) return;

                    // toggle behavior
                    if (isSelected) {
                      onChange(undefined);
                    } else {
                      onChange(option.value);
                    }
                  }}
                >
                  <div
                    className={`flex ${
                      layout !== "horizontal"
                        ? "flex-col-reverse gap-2"
                        : "items-center gap-4"
                    }`}
                  >
                    {/* Hidden input for accessibility */}
                    <input
                      ref={ref}
                      type="radio"
                      name={name}
                      value={option.value}
                      checked={isSelected}
                      disabled={isDisabled}
                      onChange={(e) => {
                        if (isDisabled) return;

                        if (isSelected) {
                          onChange(undefined);
                        } else {
                          onChange(e.target.value);
                        }
                      }}
                      className="sr-only"
                    />

                    {/* Custom radio */}
                    <div
                      className={`w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center ring-6 ring-gray-base
                        ${
                          isSelected
                            ? "bg-linear-to-b from-white to-white/20"
                            : "border-black-solid"
                        }
                        ${isDisabled ? "border-gray-300" : ""}
                      `}
                    />

                    {/* Label + icon */}
                    <div className="flex-1">
                      <div className="flex items-center ">
                        {option.icon && (
                          <span className="mr-2 text-gray-500">
                            {option.icon}
                          </span>
                        )}
                        <span className="text-sm">{option.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {option.description && (
                    <p
                      className={`text-sm mt-1 ${
                        !isDisabled ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      {option.description}
                    </p>
                  )}
                </div>

                {option.isLearnMore && (
                  <p
                    onClick={option.handleLearnMore}
                    className="text-primary-muted cursor-pointer hover:underline"
                  >
                    Learn more
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    );
  }
);

export default InputRadio;
