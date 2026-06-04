import type { ReactNode } from "react";
export interface ModalProps {
    open: boolean;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
    onClose?: () => void;
}
