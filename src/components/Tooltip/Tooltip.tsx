import type { TooltipProps } from "./Tooltip.types";

const Tooltip = ({
  content,
  children,
  position = "top",
  className = "",
  contentClassName = "",
}: TooltipProps) => {
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",

    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",

    left: "right-full top-1/2 -translate-y-1/2 mr-2",

    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={`relative inline-block group ${className}`}
      tabIndex={0}
    >
      {children}

      <div
        role="tooltip"
        className={`
          absolute
          z-50

          max-w-xs

          rounded-md

          bg-black

          px-2
          py-1

          text-xs
          text-white

          whitespace-normal

          opacity-0

          transition-opacity
          duration-200

          pointer-events-none

          group-hover:opacity-100
          group-focus-within:opacity-100

          ${positions[position]}
          ${contentClassName}
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;