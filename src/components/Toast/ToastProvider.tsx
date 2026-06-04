import { useState } from "react";

import { ToastContext } from "./ToastContext";

import ToastContainer from "./ToastContainer";

import type { ToastItem, ToastContextType, ToastPosition } from "./Toast.types";

interface ToastProviderProps {
  children: React.ReactNode;

  position?: ToastPosition;
}

export const ToastProvider = ({
  children,
  position = "top-right",
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (
    variant: "success" | "error" | "warning" | "info",
    message: string,
    duration = 3000,
  ) => {
    const id = crypto.randomUUID();

    const toast: ToastItem = {
      id,
      variant,
      message,
      duration,
    };

    setToasts((prev) => [...prev, toast]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const value: ToastContextType = {
    success: (message, duration) => addToast("success", message, duration),

    error: (message, duration) => addToast("error", message, duration),

    warning: (message, duration) => addToast("warning", message, duration),

    info: (message, duration) => addToast("info", message, duration),

    removeToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastContainer
        toasts={toasts}
        position={position}
        onClose={removeToast}
      />
    </ToastContext.Provider>
  );
};
