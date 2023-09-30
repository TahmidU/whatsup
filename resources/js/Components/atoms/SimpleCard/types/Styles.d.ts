import { PrefixObjectKeys } from "@/utils/TypeUtils";

export type ShadowType = "lg" | "md" | "sm";

export interface SimpleCardContainerStyle {
    shadow?: ShadowType;
}
