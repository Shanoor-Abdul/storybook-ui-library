import type { TextAreaProps } from "./TextArea.types";

const TextArea = ({
  id,
  label,
  value = "",
  placeholder = "",
  rows = 4,
  minLength,
  maxLength,
  showCharacterCount = true,
  onChange,
  helperText = "",
  disabled = false,
  error = "",
  required = false,
}: TextAreaProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const minLengthError = minLength && value.length < minLength;

  const maxLengthError = maxLength && value.length > maxLength;

  const baseClasses =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none";

  const normalClasses = "border-gray-300 focus:ring-blue-500";

  const errorClasses = "border-red-500 focus:ring-red-500";

  const disabledClasses = "bg-gray-100 cursor-not-allowed";

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block mb-1 font-medium">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <textarea
        id={inputId}
        rows={rows}
        placeholder={placeholder}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`
          ${baseClasses}
          ${error ? errorClasses : normalClasses}
          ${disabled ? disabledClasses : ""}
        `}
      />

      <div className="flex justify-between mt-1">
        <div>
          {helperText && !error && (
            <p id={helperId} className="text-sm text-gray-500">
              {helperText}
            </p>
          )}

          {error && (
            <p id={errorId} className="text-sm text-red-500">
              {error}
            </p>
          )}
        </div>

        {showCharacterCount && maxLength && (
          <p className="text-sm text-gray-400">
            {value?.length || 0} / {maxLength}
          </p>
        )}

        {minLengthError && (
          <p id={errorId} className="text-sm text-red-500">
            Minimum {minLength} characters required
          </p>
        )}

        {maxLengthError && (
          <p id={errorId} className="text-sm text-red-500">
            Maximum {maxLength} characters allowed
          </p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
