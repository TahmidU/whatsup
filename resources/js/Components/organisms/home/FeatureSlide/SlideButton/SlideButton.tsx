import TimerButton from "@/Components/atoms/buttons/TimerButton";
import { SlideButtonContainer } from "@/Components/organisms/home/FeatureSlide/SlideButton/styles";
import { ComponentProps } from "react";

interface Props
    extends Omit<ComponentProps<typeof TimerButton>, "time" | "children"> {
    iconSrc: string;
    title: string;
    content: string;
}
export default function SlideButton({
    iconSrc,
    title,
    content,
    ...restProps
}: Props) {
    return (
        <SlideButtonContainer {...restProps} time={15}>
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
