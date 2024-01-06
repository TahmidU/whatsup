import SlideButton from "@/Components/Organisms/Home/FeatureSlide/SlideButton";
import { FeatureSlideContainer } from "@/Components/Organisms/Home/FeatureSlide/FeatureSlideStyles";
import { PreviewType } from "@/Components/Organisms/Home/FeatureSlide/types/Slide";
import { useState } from "react";
import {
    PREVIEW_SECTION,
    SLIDE_BUTTONS,
} from "@/Components/Organisms/Home/FeatureSlide/constants/SlideDetails";

interface Props {
    slideTime?: number;
    onSlideAutoChange?: () => void;
}
export default function FeatureSlide({
    slideTime = 15,
    onSlideAutoChange,
}: Props) {
    const [preview, setPreview] = useState<PreviewType>("connect");

    const orderPreviewChange = SLIDE_BUTTONS.map((slideBtn) => slideBtn.name);
    const selectedPreviewSection = PREVIEW_SECTION[preview];

    return (
        <FeatureSlideContainer
            $previewImgHeight={selectedPreviewSection.image.height}
            $previewImgWidth={selectedPreviewSection.image.width}
        >
            <div className="feature-slide-buttons">
                {SLIDE_BUTTONS.map((slideBtn, index) => {
                    const { title, desc, icon, name } = slideBtn;
                    const nextSlide =
                        index !== orderPreviewChange.length - 1
                            ? orderPreviewChange[index + 1]
                            : orderPreviewChange[0];

                    return (
                        <SlideButton
                            key={name}
                            dataTestId={`${name}-timer-button`}
                            time={slideTime}
                            timerKey={preview}
                            animState={preview === name ? "play" : "stop"}
                            title={title}
                            iconSrc={icon}
                            content={desc}
                            onClick={() => {
                                setPreview(name);
                            }}
                            onTimerEnd={() => {
                                setPreview(nextSlide);
                                onSlideAutoChange?.();
                            }}
                        />
                    );
                })}
            </div>
            <div
                key={selectedPreviewSection.image.src}
                className="feature-slide-preview"
            >
                <img src={selectedPreviewSection.image.src} />
                <p data-testid="feature-slide-preview-desc">
                    {selectedPreviewSection.desc}
                </p>
            </div>
        </FeatureSlideContainer>
    );
}
