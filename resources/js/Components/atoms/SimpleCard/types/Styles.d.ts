import { PrefixObjectKeys } from "@/utils/TypeUtil";

export type ShadowType = "lg" | "md" | "sm";

export interface SimpleCardContainerStyle {
    shadow?: ShadowType;
}
