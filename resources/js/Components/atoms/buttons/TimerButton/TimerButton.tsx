import { TimerButtonContainer } from "@/Components/atoms/buttons/TimerButton/styles";
import { ComponentProps, ReactNode, useEffect, useRef } from "react";

interface Props extends ComponentProps<"button"> {
    animState?: "stop" | "play" | "pause";
    time?: number;
    onTimerEnd?: () => void;
    children: ReactNode;
}
export default function TimerButton({
    animState = "stop",
    time = 10,
    onTimerEnd = () => {},
    children,
    ...restProps
}: Props) {
    const timerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timerElement = timerRef.current;

        if (timerElement) {
            timerElement.addEventListener("animationiteration", onTimerEnd);
        }

        return () => {
            timerElement?.removeEventListener("animationiteration", onTimerEnd);
        };
    }, [timerRef.current]);

    return (
        <TimerButtonContainer {...restProps} animstate={animState} time={time}>
            {children}
            <div ref={timerRef} className="timer-button-timer" />
        </TimerButtonContainer>
    );
}
