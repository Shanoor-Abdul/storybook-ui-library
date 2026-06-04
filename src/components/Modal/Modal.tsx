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
  onClose,
}: ModalProps) => {
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
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

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
        className={`
          relative
          z-10
          w-full
          mx-4
          bg-white
          rounded-lg
          shadow-lg

          ${sizes[size]}
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
            <h2
              className="
                text-lg
                font-semibold
              "
            >
              {title}
            </h2>

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

export default Modal;
