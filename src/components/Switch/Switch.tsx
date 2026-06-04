import type { SwitchProps } from "./Switch.types";

const Switch = ({
  id,
  label,
  checked = false,
  onChange,
  variant = "primary",
  size = "md",
  error = "",
  disabled = false,
  required = false,
}: SwitchProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  const errorId = `${inputId}-error`;

  const variants = {
    primary: "bg-blue-600",
    success: "bg-green-600",
    danger: "bg-red-600",
  };

  const sizes = {
    sm: {
      switch: "w-9 h-5",
      thumb: "w-4 h-4",
      translate: "translate-x-4",
    },
    md: {
      switch: "w-11 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-5",
    },
    lg: {
      switch: "w-14 h-7",
      thumb: "w-6 h-6",
      translate: "translate-x-7",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <label
          htmlFor={inputId}
          className={`
            relative inline-flex items-center
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          `}
        >
          <input
            id={inputId}
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
          />

          <div
            className={`
              ${currentSize.switch}
              rounded-full
              transition-colors
              duration-200

              ${checked ? variants[variant] : "bg-gray-300"}
            `}
          />

          <div
            className={`
              absolute
              left-0.5
              top-0.5

              ${currentSize.thumb}

              rounded-full
              bg-white
              shadow

              transition-transform
              duration-200

              ${checked ? currentSize.translate : ""}
            `}
          />
        </label>

        <label htmlFor={inputId} className="font-medium">
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      </div>

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Switch;
