import type { ToastPosition } from "./Toast.types";
interface ToastProviderProps {
    children: React.ReactNode;
    position?: ToastPosition;
}
export declare const ToastProvider: ({ children, position, }: ToastProviderProps) => import("react").JSX.Element;
export {};
