import { useEffect } from "react";

import type { ModalProps } from "./Modal.types";

const Modal = ({
  open,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className = "",
  onClose,
}: ModalProps) => {
  useEffect(() => {
    if (!open || !closeOnEsc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEsc, onClose]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const titleId = title
    ? `${title.replace(/\s+/g, "-").toLowerCase()}-title`
    : undefined;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
      "
    >
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
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative
          z-10
          w-full
          mx-4
          bg-white
          rounded-lg
          shadow-lg

          ${sizes[size]}
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
            {title && (
              <h2
                id={titleId}
                className="
                  text-lg
                  font-semibold
                "
              >
                {title}
              </h2>
            )}

            {onClose && (
              <button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                className="
                  text-gray-500
                  hover:text-gray-700
                "
              >
                ✕
              </button>
            )}
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

export default Modal;