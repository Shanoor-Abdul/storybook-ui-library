import type { ToastItem } from "./Toast.types";
interface ToastProps {
    toast: ToastItem;
    onClose: (id: string) => void;
}
declare const Toast: ({ toast, onClose }: ToastProps) => import("react").JSX.Element;
export default Toast;
