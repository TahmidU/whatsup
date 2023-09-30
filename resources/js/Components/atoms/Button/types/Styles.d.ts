import { PrefixObjectKeys } from "@/utils/TypeUtils";

export type ButtonType = "action" | "danger";
export type BorderSizeType = "sm" | "md" | "lg" | "xl";

export interface ButtonContainerStyle {
    buttonType?: ButtonType;
    borderSize?: BorderSizeType;
}

export type ButtonContainerStyleTransient = PrefixObjectKeys<
    "$",
    ButtonContainerStyle
>;
