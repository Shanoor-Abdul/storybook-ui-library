import type { CardProps } from "./Card.types";

const Card = ({
  title,
  subtitle,
  description,
  footer,
  variant = "default",
  shadow = "md",
  className,
}: CardProps) => {
  const variants = {
    default: "bg-white",
    outlined: "bg-white border border-gray-300",
  };

  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div
      className={`
        rounded-lg
        p-4

        ${variants[variant]}
        ${shadows[shadow]}
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}

          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}

      <div>{description}</div>

      {footer && <div className="mt-4 border-t pt-3">{footer}</div>}
    </div>
  );
};

export default Card;
