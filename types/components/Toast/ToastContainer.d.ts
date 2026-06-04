import type { ToastItem, ToastPosition } from "./Toast.types";
interface ToastContainerProps {
    toasts: ToastItem[];
    position: ToastPosition;
    onClose: (id: string) => void;
}
declare const ToastContainer: ({ toasts, position, onClose }: ToastContainerProps) => import("react").JSX.Element;
export default ToastContainer;
