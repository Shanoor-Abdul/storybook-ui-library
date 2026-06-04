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
  className = "",
  textareaClassName = "",
  labelClassName = "",
}: TextAreaProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  const helperId = `${inputId}-helper`;

  const errorId = `${inputId}-error`;

  const baseClasses =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none";

  const normalClasses =
    "border-gray-300 focus:ring-blue-500";

  const errorClasses =
    "border-red-500 focus:ring-red-500";

  const disabledClasses =
    "bg-gray-100 cursor-not-allowed";

  const validationError =
    error ||
    (minLength && value.length < minLength
      ? `Minimum ${minLength} characters required`
      : "") ||
    (maxLength && value.length > maxLength
      ? `Maximum ${maxLength} characters allowed`
      : "");

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className={`block mb-1 font-medium ${labelClassName}`}
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
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
        aria-invalid={!!validationError}
        aria-describedby={
          validationError
            ? errorId
            : helperText
            ? helperId
            : undefined
        }
        className={`
          ${baseClasses}
          ${validationError ? errorClasses : normalClasses}
          ${disabled ? disabledClasses : ""}
          ${textareaClassName}
        `}
      />

      <div className="mt-1 flex justify-between items-start gap-2">
        <div>
          {!validationError && helperText && (
            <p
              id={helperId}
              className="text-sm text-gray-500"
            >
              {helperText}
            </p>
          )}

          {validationError && (
            <p
              id={errorId}
              className="text-sm text-red-500"
            >
              {validationError}
            </p>
          )}
        </div>

        {showCharacterCount && maxLength && (
          <p
            className={`text-sm ${
              value.length > maxLength
                ? "text-red-500"
                : "text-gray-400"
            }`}
          >
            {value.length} / {maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextArea;