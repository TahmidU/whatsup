import {
    PreviewSectionType,
    SlideButtonsType,
} from "@/Components/Organisms/Home/FeatureSlide/types/Slide";
import { getPublicImage } from "@/utils/PublicImagesUtil";

export const SLIDE_BUTTONS: SlideButtonsType[] = [
    {
        title: "Stay Connected",
        desc: "With our 99.9% guaranteed uptime, you can be rest assured that your conversations won’t be interrupted.",
        icon: getPublicImage({ type: "assets", name: "globe" }),
        name: "connect",
    },
    {
        title: "Encrypted Data",
        desc: "All conversations and other sensitive data are encrypted.",
        icon: getPublicImage({ type: "assets", name: "lock" }),
        name: "encrypt",
    },
    {
        title: "AI Powered",
        desc: "We power your chat with AI to help you find your conversations quicker.",
        icon: getPublicImage({ type: "assets", name: "brain_ai" }),
        name: "ai",
    },
    {
        title: "Super Fast",
        desc: "Our services are blazing fast. You can be sure that your messages and calls wouldn’t slow down.",
        icon: getPublicImage({ type: "assets", name: "fast" }),
        name: "fast",
    },
];

export const PREVIEW_SECTION: PreviewSectionType = {
    connect: {
        image: {
            src: getPublicImage({
                type: "assets",
                name: "preview_connection",
            }),
            width: "580px",
            height: "420px",
        },
        desc: "Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.",
    },
    encrypt: {
        image: {
            src: getPublicImage({ type: "assets", name: "preview_secure" }),
            width: "602px",
            height: "403px",
        },
        desc: "With advanced encryption technology, your personal messages and calls are secure.",
    },
    ai: {
        image: {
            src: getPublicImage({ type: "assets", name: "preview_search" }),
            width: "354px",
            height: "400px",
        },
        desc: "Quickly find your old conversations, images, videos and voice messages without having to endlessly scroll up.",
    },
    fast: {
        image: {
            src: getPublicImage({ type: "assets", name: "preview_fast" }),
            width: "485px",
            height: "403px",
        },
        desc: "All our features are super fast. Never experience a delay again.",
    },
};
