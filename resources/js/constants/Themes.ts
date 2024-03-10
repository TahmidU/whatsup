import { PrimaryColours } from "@/types/Theme";

export const dark: PrimaryColours = {
    primary: "#16171B",
    secondary: "#1F2125", // TODO: remove
    mainText: "#FFFFFF",
    accent: "#0d944c",
    danger: "#ed3c4b",
    success: "#1CD774",
    info: "#FFFFFF",
    link: "#47b7f8",
};

// This will change over time...
export const light: PrimaryColours = {
    primary: "#FFFFFF",
    secondary: "#17301C",
    mainText: "#FFFFFF",
    accent: "#1CD774",
    danger: "#ED2939",
    success: "#1CD774",
    info: "#FFFFFF",
    link: "#47b7f8",
};

export const fonts = {
    xs: "8px",
    sm: "11px",
    md: "14px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "36px",
    "5xl": "42px",
    "6xl": "46px",
} as const;

export const fontFamilies = {
    arial: "Arial, sans-serif",
    roboto: "'Roboto', sans-serif",
    inter: "'Inter', sans-serif",
} as const;

const primaryColours = {
    "primary-950": "#16171B",
    "primary-900": "#1F2126",
    "primary-800": "#31343D",
    "primary-700": "#444753",
    "primary-600": "#565A6A",
    "primary-500": "#686D80",
    "primary-400": "#7D8195",
    "primary-300": "#9397A7",
    "primary-200": "#AAADB9",
    "primary-100": "#C0C2CC",
    "primary-50": "#CBCDD5",
};

const accentColours = {
    "accent-950": "#0D944C",
    "accent-900": "#0FA756",
    "accent-800": "#12CC69",
    "accent-700": "#1CEB7D",
    "accent-600": "#41EE92",
    "accent-500": "#67F2A8",
    "accent-400": "#8CF5BD",
    "accent-300": "#B2F8D3",
    "accent-200": "#D7FCE8",
    "accent-100": "#FDFFFE",
    "accent-50": "#FFFFFF",
};

export const colours = {
    ...primaryColours,
    ...accentColours,
};
