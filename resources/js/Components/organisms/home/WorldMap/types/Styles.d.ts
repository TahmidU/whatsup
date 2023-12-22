import { PrefixObjectKeys } from "@/utils/TypeUtils";

export interface SVGContainerStyle {
    selectionInterval: number;
}

export type SVGContainerStyleTransient = PrefixObjectKeys<
    "$",
    SVGContainerStyle
>;
