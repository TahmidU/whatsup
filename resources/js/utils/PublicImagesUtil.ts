import { AssetInterface, PublicPropsType } from "@/types/Resource";

export function getPublicImage({ name, type }: PublicPropsType) {
    const assets: AssetInterface = {
        logo: {
            logo_dark: "/logo/logo_dark.png",
        },
    };

    return assets[type][name];
}

export default { getPublicImage };
