import { dark, fontFamilies, fonts, light } from "@/constants/Themes";
import {
    CPrimaryColours,
    ColourTheme,
    PrimaryColours,
    UseThemeType,
} from "@/types/Theme";
import Color from "color";

function getPrimaryColours(theme: ColourTheme): PrimaryColours {
    return {
        dark,
        light,
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
