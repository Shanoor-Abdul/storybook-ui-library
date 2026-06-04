export type ToastVariant = "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

export interface ToastContextType {
  success: (message: string, duration?: number) => void;

  error: (message: string, duration?: number) => void;

  warning: (message: string, duration?: number) => void;

  info: (message: string, duration?: number) => void;

  removeToast: (id: string) => void;
}
