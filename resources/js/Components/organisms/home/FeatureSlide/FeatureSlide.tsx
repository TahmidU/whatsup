import SlideButton from "@/Components/organisms/home/FeatureSlide/SlideButton";
import { FeatureSlideContainer } from "@/Components/organisms/home/FeatureSlide/Styles";
import {
    PreviewType,
    SlideButtonsType,
    SlideType,
} from "@/Components/organisms/home/FeatureSlide/types/Slide";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import { useState } from "react";

interface Props {}
export default function FeatureSlide({}: Props) {
    const [preview, setPreview] = useState<PreviewType>("connect");

    const slideButtons: SlideButtonsType[] = [
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
    const orderPreviewChange = slideButtons.map((slideBtn) => slideBtn.name);

    const slides: SlideType = {
        connect: {
            button: {
                title: "Stay Connected",
                desc: "With our 99.9% guaranteed uptime, you can be rest assured that your conversations won’t be interrupted.",
                icon: getPublicImage({ type: "assets", name: "globe" }),
            },
            preview: {
                image: "",
                desc: "Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.",
            },
        },
        encrypt: {
            button: {
                title: "Encrypted Data",
                desc: "All conversations and other sensitive data are encrypted.",
                icon: getPublicImage({ type: "assets", name: "lock" }),
            },
            preview: {
                image: "",
                desc: "With advanced encryption technology, your personal messages and calls are secure.",
            },
        },
        ai: {
            button: {
                title: "AI Powered",
                desc: "We power your chat with AI to help you find your conversations quicker.",
                icon: getPublicImage({ type: "assets", name: "brain_ai" }),
            },
            preview: {
                image: "",
                desc: "Quickly find your old conversations, images, videos and voice messages without having to endlessly scroll up.",
            },
        },
        fast: {
            button: {
                title: "Super Fast",
                desc: "Our services are blazing fast. You can be sure that your messages and calls wouldn’t slow down.",
                icon: getPublicImage({ type: "assets", name: "fast" }),
            },
            preview: {
                image: "",
                desc: "All our features are super fast. Never experience a delay again.",
            },
        },
    };

    return (
        <FeatureSlideContainer>
            <div className="feature-slide-buttons">
                {slideButtons.map((slideBtn, index) => {
                    const { title, desc, icon, name } = slideBtn;
                    const nextSlide =
                        index !== orderPreviewChange.length - 1
                            ? orderPreviewChange[index + 1]
                            : orderPreviewChange[0];

                    return (
                        <SlideButton
                            key={name}
                            animState={preview === name ? "play" : "stop"}
                            title={title}
                            iconSrc={icon}
                            content={desc}
                            onClick={() => {
                                setPreview(name);
                            }}
                            onTimerEnd={() => {
                                console.log({ preview, name, nextSlide });
                                setPreview(nextSlide);
                            }}
                        />
                    );
                })}
            </div>
            <div className="feature-slide-preview"></div>
        </FeatureSlideContainer>
    );
}
