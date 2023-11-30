import { PrefixObjectKeys } from "@/utils/TypeUtils";

export interface NavLinkStyle {
    selected: boolean;
}

export type NavLinkStyleTransient = PrefixObjectKeys<"$", NavLinkStyle>;
