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
      className={`
        relative
        min-w-[320px]
        border-l-4
        rounded-md
        shadow-lg
        px-4
        py-3

        ${variants[toast.variant]}
      `}
    >
      <div className="flex items-start gap-3">
        <span>{icons[toast.variant]}</span>

        <p className="flex-1">{toast.message}</p>

        <button onClick={() => onClose(toast.id)}>×</button>
      </div>
    </div>
  );
};

export default Toast;
