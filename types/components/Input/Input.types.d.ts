export interface InputProps {
    id?: string;
    label: string;
    value?: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    onChange?: (value: string) => void;
    helperText?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
}
