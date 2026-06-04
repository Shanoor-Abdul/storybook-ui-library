import type { RadioGroupProps } from "./RadioGroup.types";

const RadioGroup = ({
  id,
  label,
  value = "",
  options = [],
  onChange,
  onBlur,
  variant = "primary",
  size = "md",
  error = "",
  disabled = false,
  required = false,
}: RadioGroupProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  const errorId = `${inputId}-error`;

  const variants = {
    primary: "accent-blue-600",
    success: "accent-green-600",
    danger: "accent-red-600",
  };

  const sizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 ${
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <input
              type="radio"
              name={inputId}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              onBlur={onBlur}
              disabled={disabled}
              required={required}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              className={`
                ${sizes[size]}
                ${variants[variant]}
              `}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default RadioGroup;
