import type { LoaderProps } from "./Loader.types";

const Loader = ({
  size = "md",
  variant = "primary",
  label,
  className = "",
  labelClassName = "",
  containerClassName = "",
}: LoaderProps) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
  };

  const variants = {
    primary: "border-blue-600",
    success: "border-green-600",
    danger: "border-red-600",
  };

  return (
    <div
      className={`flex items-center gap-2 ${containerClassName}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`
          rounded-full
          border-t-transparent
          animate-spin
          ${sizes[size]}
          ${variants[variant]}
          ${className}
        `}
      />

      {label && (
        <span
          className={`text-sm ${labelClassName}`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Loader;