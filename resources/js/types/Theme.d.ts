import { DynamicKeys } from "@/utils/TypeUtil";
import Color from "color";

export type ColourTheme = 'dark' | 'light';

export type PrimaryColours = {
    primary: string,
    secondary: string,
    mainText: string,
    secondaryText: string,
    accent: string,
    danger: string,
    success: string,
    info: string
};

export type CPrimaryColours = {
    [key in DynamicKeys<'C', keyof PrimaryColours>]: Color<string>;
}

export type Fonts = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}

export type FontFamilies = {
    "arial": string;
    "roboto": string;
}

export type ThemeValues = {
    colours: {
        normal: {
            [key in keyof PrimaryColours]: string;
        },
        mod: {
            [key in keyof CPrimaryColours]: Color<string>;
        }

    };
    fonts: Fonts;
    fontFamilies: FontFamilies;
}

export type useThemeType = {
    toggle: () => void;
    current: ColourTheme;
    value: ThemeValues;
}