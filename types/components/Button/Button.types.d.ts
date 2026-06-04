export interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
}
