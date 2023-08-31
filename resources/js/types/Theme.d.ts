import { DynamicKeys } from "@/utils/TypeUtil";

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
    [key in DynamicKeys<'C', keyof PrimaryColours>]: string;
}

export type Fonts = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}

export type ThemeValues = {
    colours: {
        [key in keyof (PrimaryColours & CPrimaryColours)]: string;
    };
    fonts: Fonts;
    fontFamilies: {}
}

export type useThemeType = {
    toggle: () => void;
    current: ColourTheme;
    value: ThemeValues;
}