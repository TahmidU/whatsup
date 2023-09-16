import { PrefixKey } from "@/utils/TypeUtil";
import Color from "color";

export type ColourTheme = "dark" | "light";

export type PrimaryColours = {
    primary: string;
    secondary: string;
    mainText: string;
    accent: string;
    danger: string;
    success: string;
    info: string;
};

export type CPrimaryColours = {
    [key in PrefixKey<"c", Capitalize<keyof PrimaryColours>>]: Color<string>;
};

export type Fonts = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
};

export type FontFamilies = {
    arial: string;
    roboto: string;
    inter: string;
};

export type ThemeValues = {
    colours: {
        [key in keyof PrimaryColours]: string;
    };
    cColours: {
        [key in keyof CPrimaryColours]: Color<string>;
    };
    fonts: Fonts;
    fontFamilies: FontFamilies;
};

export type useThemeType = {
    toggle: () => void;
    current: ColourTheme;
    value: ThemeValues;
};
