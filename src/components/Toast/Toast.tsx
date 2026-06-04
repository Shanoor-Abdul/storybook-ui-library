import type { ToastItem } from "./Toast.types";

interface ToastProps {
  toast: ToastItem;
  onClose: (id: string) => void;
}

const Toast = ({ toast, onClose }: ToastProps) => {
  const variants = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  return (
    <div
      role="region"
      aria-live="polite"
      className={`
        relative
        min-w-[320px]
        border-l-4
        rounded-md
        shadow-lg
        px-4
        py-3
        animate-in
        slide-in-from-right-4
        duration-300
        ${variants[toast.variant]}
        ${toast.className || ""}
      `}
    >
      <div className="flex items-start gap-3">
        <span>
          {toast.icon || icons[toast.variant]}
        </span>

        <div className="flex-1">
          <p className="break-words">
            {toast.message}
          </p>

          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="mt-2 text-sm font-medium underline"
            >
              {toast.action.label}
            </button>
          )}
        </div>

        <button
          aria-label="Close notification"
          onClick={() => onClose(toast.id)}
          className="text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;