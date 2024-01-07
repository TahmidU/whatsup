import TimerButton from "@/components/atoms/buttons/TimerButton";
import { SlideButtonContainer } from "@/components/organisms/home/FeatureSlide/SlideButton/SlideButtonStyles";
import { ComponentProps } from "react";

interface Props extends Omit<ComponentProps<typeof TimerButton>, "children"> {
    iconSrc: string;
    title: string;
    content: string;
    dataTestId?: string;
}
export default function SlideButton({
    iconSrc,
    title,
    content,
    dataTestId,
    ...restProps
}: Props) {
    return (
        <SlideButtonContainer {...restProps} timerTestId={dataTestId}>
            <div className="slide-button-content">
                <div className="slide-button-icon">
                    <img src={iconSrc} />
                </div>

                <h2 data-testid={`option-${title}`}>{title}</h2>
                <p>{content}</p>
            </div>
        </SlideButtonContainer>
    );
}
