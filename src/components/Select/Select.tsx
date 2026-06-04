import type { SelectProps } from "./Select.types";

const Select = ({
  id,
  label,
  value = "",
  options = [],
  placeholder = "Select an option",
  onChange,
  helperText = "",
  disabled = false,
  error = "",
  required = false,
  className = "",
  selectClassName = "",
  labelClassName = "",
}: SelectProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const baseClasses =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2";

  const normalClasses = "border-gray-300 focus:ring-blue-500";

  const errorClasses = "border-red-500 focus:ring-red-500 text-red-600";

  const disabledClasses = "bg-gray-100 cursor-not-allowed";

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className={`block mb-1 font-medium ${labelClassName}`}
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <select
        id={inputId}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        aria-label={label}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`
          ${baseClasses}
          ${error ? errorClasses : normalClasses}
          ${disabled ? disabledClasses : ""}
          ${selectClassName}
        `}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {helperText && !error && (
        <p id={helperId} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
