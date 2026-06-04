import type { CheckboxProps } from "./Checkbox.types";

const Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  variant = "primary",
  size = "md",
  disabled = false,
  error = "",
  required = false,
}: CheckboxProps) => {
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
      <div className="flex items-center gap-2">
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`
            rounded
            border-gray-300
            focus:ring-2

            ${sizes[size]}
            ${variants[variant]}

            ${disabled ? "cursor-not-allowed opacity-50" : ""}

            ${error ? "border-red-500 ring-red-500" : ""}
          `}
        />

        <label
          htmlFor={inputId}
          className={`
            font-medium

            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {label}
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

export default Checkbox;
