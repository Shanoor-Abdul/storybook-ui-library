import type { ReactNode } from "react";

export interface DrawerProps {
  open: boolean;

  title?: string;

  children: ReactNode;

  footer?: ReactNode;

  placement?: "left" | "right" | "top" | "bottom";

  size?: "sm" | "md" | "lg";

  closeOnOverlayClick?: boolean;

  closeOnEsc?: boolean;

  onClose?: () => void;
}
