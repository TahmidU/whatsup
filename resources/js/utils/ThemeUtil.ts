import { CPrimaryColours, ColourTheme, PrimaryColours, useThemeType } from "@/types/Theme";

// This will change over time, im not an artist/designer
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
        const value = primaryColours[key];
        const name = `C${key.substring(0)}${key.substring(1, key.length)}`;

        cColours = {
            ...cColours,
            [name]: value
        };
    });

    return (cColours as CPrimaryColours);
}

const fonts = {
    xs: '6px',
    sm: '8px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
};

// TODO
const fontFamilies = {}

export function getTheme(theme: ColourTheme): useThemeType['value'] {
    return {
        colours: {
            ...getPrimaryColours(theme),
            ...getCColours(theme),
        },
        fonts,
        fontFamilies
    }
}