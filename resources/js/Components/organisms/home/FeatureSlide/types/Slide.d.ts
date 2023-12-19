export type PreviewType = "connect" | "ai" | "encrypt" | "fast";

export type SlideButtonsType = {
    title: string;
    desc: string;
    icon: string;
    name: PreviewType;
};

export type SlidePreviewType = {
    [key in PreviewType]: {
        image: string;
        desc: string;
    };
};

export type PreviewSectionType = {
    [key in PreviewType]: {
        image: {
            src: string;
            width: string;
            height: string;
        };
        desc: string;
    };
};
