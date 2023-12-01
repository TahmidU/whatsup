export interface IconInterface {
    className?: string;
}

type LogoType = "logo";
type LogoNameType = "logo_dark";
export type LogoPathType = {
    [key in LogoNameType]: `/logo/${string}`;
};

type PublicLogoType = {
    name: LogoNameType;
    type: LogoType;
};
export type PublicPropsType = PublicLogoType;

export type AssetInterface = {
    [key in LogoType]: LogoPathType;
};
