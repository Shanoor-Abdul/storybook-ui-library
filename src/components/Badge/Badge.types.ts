export interface BadgeProps {
  children: string;

  className?: string;

  variant?: "primary" | "success" | "danger" | "warning";

  size?: "sm" | "md" | "lg";
}
