import TimerButton from "@/Components/atoms/buttons/TimerButton";
import { SlideButtonContainer } from "@/Components/organisms/home/FeatureSlide/SlideButton/styles";
import { ComponentProps } from "react";

interface Props
    extends Omit<ComponentProps<typeof TimerButton>, "time" | "children"> {
    onClick: () => void;
    iconSrc: string;
    title: string;
    content: string;
}
export default function SlideButton({
    onClick,
    iconSrc,
    animState = "stop",
    onTimerEnd,
    title,
    content,
}: Props) {
    return (
        <SlideButtonContainer
            animState={animState}
            onTimerEnd={onTimerEnd}
            onClick={onClick}
        >
            <div className="slide-button-content">
                <div className="slide-button-icon">
                    <img src={iconSrc} />
                </div>

                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </SlideButtonContainer>
    );
}
