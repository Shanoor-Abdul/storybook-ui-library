export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id?: string;

  label: string;

  value?: string;

  options: SelectOption[];

  placeholder?: string;

  onChange?: (value: string) => void;

  helperText?: string;
  error?: string;

  disabled?: boolean;
  required?: boolean;
}
