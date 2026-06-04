import Toast from "./Toast";

import type { ToastItem, ToastPosition } from "./Toast.types";

interface ToastContainerProps {
  toasts: ToastItem[];

  position: ToastPosition;

  onClose: (id: string) => void;
}

const ToastContainer = ({ toasts, position, onClose }: ToastContainerProps) => {
  const positions = {
    "top-left": "top-4 left-4",

    "top-center": "top-4 left-1/2 -translate-x-1/2",

    "top-right": "top-4 right-4",

    "bottom-left": "bottom-4 left-4",

    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",

    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div
      className={`
        fixed
        z-50
        flex
        flex-col
        gap-3

        ${positions[position]}
      `}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
};

export default ToastContainer;
