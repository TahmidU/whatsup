import { CPrimaryColours, ColourTheme, PrimaryColours, useThemeType } from "@/types/Theme";
import Color from "color";

// This will change over time...
function getPrimaryColours(theme: ColourTheme): PrimaryColours {
    return {
        dark: {
            primary: '#1A1E43',
            secondary: '#17301C',
            mainText: '#FFFFFF',
            secondaryText: '#17301C',
            accent: '#4DFFA1',
            danger: '#ED2939',
            success: '#4DFFA1',
            info: '#FFFFFF',
        },
        light: {
            primary: '#FFFFFF',
            secondary: '#17301C',
            mainText: '#FFFFFF',
            secondaryText: '#17301C',
            accent: '#4DFFA1',
            danger: '#ED2939',
            success: '#4DFFA1',
            info: '#FFFFFF',
        }
    }[theme];
}

function getCColours(theme: ColourTheme) {
    const primaryColours = getPrimaryColours(theme);

    let cColours = {};

    (Object.keys(primaryColours) as (keyof PrimaryColours)[]).forEach((key) => {
        const value = Color(primaryColours[key]);
        const name = `C${key.substring(0, 1).toUpperCase()}${key.substring(1, key.length)}`;

        cColours = {
            ...cColours,
            [name]: value
        };
    });

    return (cColours as CPrimaryColours);
}

const fonts = {
    xs: '8px',
    sm: '11px',
    md: '14px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
};

const fontFamilies = {
    'arial': "Arial, sans-serif",
    'roboto': "'Roboto', sans-serif",
    'inter': "'Inter', sans-serif",
};

export function getTheme(theme: ColourTheme): useThemeType['value'] {
    return {
        colours: {
            normal: {
                ...getPrimaryColours(theme),
            },
            mod: {
                ...getCColours(theme),
            }
        },
        fonts,
        fontFamilies
    }
}