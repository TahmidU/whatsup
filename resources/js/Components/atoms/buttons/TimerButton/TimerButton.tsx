import { TimerButtonContainer } from "@/Components/atoms/buttons/TimerButton/styles";
import { ComponentProps, ReactNode, useEffect, useRef } from "react";

interface Props extends ComponentProps<"button"> {
    animState?: "stop" | "play";
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
            timerElement.addEventListener("animationend", onTimerEnd);
        }

        return () => {
            timerElement?.removeEventListener("animationend", onTimerEnd);
        };
    }, [timerRef.current]);

    return (
        <TimerButtonContainer
            {...restProps}
            animstate={animState === "play" ? "running" : "paused"}
            time={time}
        >
            {children}
            <div
                key={animState}
                ref={timerRef}
                className="timer-button-timer"
            />
        </TimerButtonContainer>
    );
}
