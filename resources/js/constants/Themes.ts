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
