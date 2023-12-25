export type Variant = "action" | "danger" | "text" | "ghost";
export type BorderSizeType = "sm" | "md" | "lg" | "xl";

export interface ButtonDefaultStyles {
    $variant?: Variant;
    $borderSize?: BorderSizeType;
}
