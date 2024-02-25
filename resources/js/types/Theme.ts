import Color from "color";
import { fontFamilies, fonts } from "@/constants/Themes";
import { CapitalizeKeys, PrefixObjectKeys } from "@/types/TypeUtils";

export type ColourTheme = "dark" | "light";

export interface PrimaryColours {
    primary: string;
    secondary: string;
    mainText: string;
    accent: string;
    danger: string;
    success: string;
    info: string;
    link: string;
}

export type CPrimaryColours = PrefixObjectKeys<
    "c",
    CapitalizeKeys<PrimaryColours, Color<string>>
>;

export interface ThemeValues {
    current: ColourTheme;
    colours: PrimaryColours;
    cColours: CPrimaryColours;
    fonts: typeof fonts;
    fontFamilies: typeof fontFamilies;
}

export interface UseThemeType {
    toggle: () => void;
    current: ColourTheme;
    value: ThemeValues;
}
