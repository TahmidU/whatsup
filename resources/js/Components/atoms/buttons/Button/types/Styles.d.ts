import { PrefixObjectKeys } from "@/utils/TypeUtils";

export type Variant = "action" | "danger" | "text" | "ghost";
export type BorderSizeType = "sm" | "md" | "lg" | "xl";

export interface ButtonContainerStyle {
    variant?: Variant;
    borderSize?: BorderSizeType;
}

export type ButtonContainerStyleTransient = PrefixObjectKeys<
    "$",
    ButtonContainerStyle
>;
