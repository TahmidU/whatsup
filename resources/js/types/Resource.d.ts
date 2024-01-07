import { ASSETS } from "@/utils/PublicImagesUtil";

export interface IconInterface {
    className?: string;
}

export type AssetType = {
    type: "assets";
    name: keyof (typeof ASSETS)["assets"];
};

export type LogoType = {
    type: "logo";
    name: keyof (typeof ASSETS)["logo"];
};

export type ImageAssetsType = AssetType | LogoType;
