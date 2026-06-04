import { useEffect } from "react";
import type { DrawerProps } from "./Drawer.types";

const Drawer = ({
  open,
  title,
  children,
  footer,
  placement = "right",
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  onClose,
  className,
}: DrawerProps) => {
  useEffect(() => {
    if (!closeOnEsc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeOnEsc, onClose]);

  if (!open) return null;

  const sizes = {
    sm: "w-64",
    md: "w-96",
    lg: "w-[600px]",
  };

  const placements = {
    left: "left-0 top-0 h-full",

    right: "right-0 top-0 h-full",

    top: "top-0 left-0 w-full h-64",

    bottom: "bottom-0 left-0 w-full h-64",
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
        onClick={() => {
          if (closeOnOverlayClick) {
            onClose?.();
          }
        }}
      />

      <div
        className={`
          absolute
          bg-white
          shadow-lg

          ${placements[placement]}

          ${placement === "left" || placement === "right" ? sizes[size] : ""}
          ${className}
        `}
      >
        {(title || onClose) && (
          <div
            className="
              flex
              items-center
              justify-between
              p-4
              border-b
            "
          >
            <h2 className="font-semibold">{title}</h2>

            <button onClick={onClose}>✕</button>
          </div>
        )}

        <div className="p-4">{children}</div>

        {footer && (
          <div
            className="
              p-4
              border-t
            "
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
