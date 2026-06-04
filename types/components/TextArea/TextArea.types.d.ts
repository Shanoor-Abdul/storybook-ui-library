export interface TextAreaProps {
    id?: string;
    label: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    minLength?: number;
    maxLength?: number;
    showCharacterCount?: boolean;
    showValidationMessage?: boolean;
    onChange?: (value: string) => void;
    helperText?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
}
