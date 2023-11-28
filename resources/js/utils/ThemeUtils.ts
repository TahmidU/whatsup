import {
    CPrimaryColours,
    ColourTheme,
    FontFamilies,
    Fonts,
    PrimaryColours,
    UseThemeType,
} from "@/types/Theme";
import Color from "color";
import { ShallowFlatten } from "./TypeUtils";

// This will change over time...
function getPrimaryColours(theme: ColourTheme): PrimaryColours {
    return {
        dark: {
            primary: "#16171B",
            secondary: "#1F2125",
            mainText: "#FFFFFF",
            accent: "#1CD774",
            danger: "#ED2939",
            success: "#1CD774",
            info: "#FFFFFF",
        },
        light: {
            primary: "#FFFFFF",
            secondary: "#17301C",
            mainText: "#FFFFFF",
            accent: "#1CD774",
            danger: "#ED2939",
            success: "#1CD774",
            info: "#FFFFFF",
        },
    }[theme];
}

function getCColours(theme: ColourTheme) {
    const primaryColours = getPrimaryColours(theme);

    let cColours = {};

    (Object.keys(primaryColours) as (keyof PrimaryColours)[]).forEach((key) => {
        const value = Color(primaryColours[key]);
        const name = `c${key.substring(0, 1).toUpperCase()}${key.substring(
            1,
            key.length
        )}`;

        cColours = {
            ...cColours,
            [name]: value,
        };
    });

    return cColours as CPrimaryColours;
}

const fonts: Fonts = {
    xs: "8px",
    sm: "11px",
    md: "14px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
};

const fontFamilies: FontFamilies = {
    arial: "Arial, sans-serif",
    roboto: "'Roboto', sans-serif",
    inter: "'Inter', sans-serif",
};

export function getTheme(
    theme: ColourTheme
): UseThemeType["value"] & { current: UseThemeType["current"] } {
    return {
        current: theme,
        colours: {
            ...getPrimaryColours(theme),
        },
        cColours: {
            ...getCColours(theme),
        },
        fonts,
        fontFamilies,
    };
}
