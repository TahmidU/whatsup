export type Variant = "action" | "danger" | "text" | "ghost" | "link-text";
export type BorderSizeType = "sm" | "md" | "lg" | "xl";

export interface ButtonDefaultStyles {
    $variant?: Variant;
    $borderSize?: BorderSizeType;
}
