import { CapitalizeKeys, PrefixObjectKeys } from "@/utils/TypeUtils";
import Color from "color";

export type ColourTheme = "dark" | "light";

export interface PrimaryColours {
    primary: string;
    secondary: string;
    mainText: string;
    accent: string;
    danger: string;
    success: string;
    info: string;
}

export type CPrimaryColours = PrefixObjectKeys<
    "c",
    CapitalizeKeys<PrimaryColours, Color<string>>
>;

export interface Fonts {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
}

export interface FontFamilies {
    arial: string;
    roboto: string;
    inter: string;
}

export interface ThemeValues {
    current: ColourTheme;
    colours: PrimaryColours;
    cColours: CPrimaryColours;
    fonts: Fonts;
    fontFamilies: FontFamilies;
}

export interface UseThemeType {
    toggle: () => void;
    current: ColourTheme;
    value: ThemeValues;
}
