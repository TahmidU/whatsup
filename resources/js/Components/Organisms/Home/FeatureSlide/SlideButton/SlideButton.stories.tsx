import { MetaPayload } from "@/types/Story";
import SlideButton from ".";
import { ComponentProps } from "react";
import { getPublicImage } from "@/utils/PublicImagesUtil";

const AI_SRC = getPublicImage({ type: "assets", name: "brain_ai" });
const FAST_SRC = getPublicImage({ type: "assets", name: "fast" });
const GLOBE_SRC = getPublicImage({ type: "assets", name: "globe" });
const LOCK_SRC = getPublicImage({ type: "assets", name: "lock" });

const payload: MetaPayload<typeof SlideButton> = {
    title: "ORGANISMS/FeatureSlide/SlideButton",
    component: SlideButton,
    parameters: {
        controls: {
            exclude: ["onTimerEnd", "timerKey"],
        },
    },
    argTypes: {
        iconSrc: {
            name: "icon",
            options: [AI_SRC, FAST_SRC, GLOBE_SRC, LOCK_SRC],
            control: {
                type: "radio",
                labels: {
                    [GLOBE_SRC]: "Globe",
                    [FAST_SRC]: "Fast",
                    [AI_SRC]: "AI",
                    [LOCK_SRC]: "Lock",
                },
            },
        },
        animState: {
            name: "animation",
            options: ["stop", "play"],
            control: {
                type: "radio",
            },
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof SlideButton>) => (
    <div style={{ width: "40rem" }}>
        <SlideButton {...args}>Test</SlideButton>
    </div>
);
Basic.args = {
    iconSrc: AI_SRC,
    animState: "stop",
    title: "Stay Connected",
    content:
        "With our 99.9% guaranteed uptime, you can be rest assured that your conversations won’t be interrupted.",
};
