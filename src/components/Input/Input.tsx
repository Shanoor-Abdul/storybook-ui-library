import type { InputProps } from "./Input.types";

const Input = ({
  id,
  label,
  value = "",
  type = "text",
  placeholder = "",
  onChange,
  helperText = "",
  disabled = false,
  error = "",
  required = false,
}: InputProps) => {
  const inputId =
    id ||
    label.toLowerCase().replace(/\s+/g, "-");

  const baseClasses =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2";

  const normalClasses =
    "border-gray-300 focus:ring-blue-500";

  const errorClasses =
    "border-red-500 focus:ring-red-500";

  const disabledClasses =
    "bg-gray-100 cursor-not-allowed";

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block mb-1 font-medium"
      >
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange?.(e.target.value)
        }
        className={`
          ${baseClasses}
          ${error ? errorClasses : normalClasses}
          ${disabled ? disabledClasses : ""}
        `}
        disabled={disabled}
        required={required}
      />

      {helperText && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;