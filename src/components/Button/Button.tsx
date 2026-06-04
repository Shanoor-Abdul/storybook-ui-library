import type { ButtonProps } from "./Button.types";

const Button = ({
  label,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",

    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
