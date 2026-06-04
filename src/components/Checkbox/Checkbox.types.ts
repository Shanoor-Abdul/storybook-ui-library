export interface CheckboxProps {
  id?: string;

  label: string;

  checked?: boolean;

  onChange?: (checked: boolean) => void;

  variant?: "primary" | "success" | "danger";

  size?: "sm" | "md" | "lg";

  error?: string;

  disabled?: boolean;

  required?: boolean;
}
