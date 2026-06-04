import type { BadgeProps } from "./Badge.types";

const Badge = ({ children, variant = "primary", size = "md" }: BadgeProps) => {
  const variants = {
    primary: "bg-blue-100 text-blue-700",

    success: "bg-green-100 text-green-700",

    danger: "bg-red-100 text-red-700",

    warning: "bg-yellow-100 text-yellow-700",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",

    md: "px-3 py-1 text-sm",

    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        font-medium

        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
