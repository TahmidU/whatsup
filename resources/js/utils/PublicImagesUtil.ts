import { ImageAssetsType } from "@/types/Resource";

export const ASSETS = {
    assets: {
        globe: "img/assets/globe.png",
        brain_ai: "img/assets/brain_ai.png",
        fast: "img/assets/fast.png",
        lock: "img/assets/lock.png",
        chat_page: "img/assets/chat_dashboard_page.png",
    },
    logo: {
        logo_dark: "/img/logo/logo_dark.png",
    },
} as const;

export const getPublicImage = ({ type, name }: ImageAssetsType) =>
    type === "assets" ? ASSETS["assets"][name] : ASSETS["logo"][name];

export default { getPublicImage };
