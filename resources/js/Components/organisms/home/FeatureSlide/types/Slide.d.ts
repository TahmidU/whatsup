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

export type SlideType = {
    [key in PreviewType]: {
        button: {
            title: string;
            desc: string;
            icon: string;
        };
        preview: {
            image: string;
            desc: string;
        };
    };
};
