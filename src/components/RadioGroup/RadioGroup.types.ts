export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  id?: string;

  label: string;

  value?: string;

  options: RadioOption[];

  onChange?: (value: string) => void;
  onBlur?: () => void;

  error?: string;

  disabled?: boolean;

  required?: boolean;

  variant?: "primary" | "success" | "danger";

  size?: "sm" | "md" | "lg";
}
