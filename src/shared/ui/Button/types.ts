import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = "clear"
}

export enum ButtonSize {
    L = "l"
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
}