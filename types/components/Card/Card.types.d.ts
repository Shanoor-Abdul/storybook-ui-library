import type { ReactNode } from "react";
export interface CardProps {
    title?: string;
    subtitle?: string;
    description: ReactNode;
    footer?: ReactNode;
    variant?: "default" | "outlined";
    shadow?: "none" | "sm" | "md" | "lg";
    className?: string;
}
