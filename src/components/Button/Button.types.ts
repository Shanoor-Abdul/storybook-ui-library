import type { ReactNode } from "react";
export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
