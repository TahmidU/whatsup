import { PrefixKey } from "@/utils/TypeUtil";
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

export type CPrimaryColours = {
    [key in PrefixKey<"c", Capitalize<keyof PrimaryColours>>]: Color<string>;
};

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
    colours: PrimaryColours;
    cColours: CPrimaryColours;
    fonts: Fonts;
    fontFamilies: FontFamilies;
}

export interface useThemeType {
    toggle: () => void;
    current: ColourTheme;
    value: ThemeValues;
}
