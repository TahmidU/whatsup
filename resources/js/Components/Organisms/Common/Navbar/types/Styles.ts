import { PrefixObjectKeys } from "@/types/TypeUtils";

export interface NavLinkStyle {
    selected: boolean;
}

export type NavLinkStyleTransient = PrefixObjectKeys<"$", NavLinkStyle>;
