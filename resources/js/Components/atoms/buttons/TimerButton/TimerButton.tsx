import { TimerButtonContainer } from "@/Components/atoms/buttons/TimerButton/styles";
import { ComponentProps, ReactNode, useEffect, useState } from "react";

interface Props extends ComponentProps<"button"> {
    animState?: "stop" | "play" | "pause";
    time?: number;
    onTimerEnd?: () => void;
    timerKey?: string;
    children: ReactNode;
}
export default function TimerButton({
    animState = "stop",
    time = 10,
    onTimerEnd = () => {},
    timerKey,
    children,
    ...restProps
}: Props) {
    const [timerRef, setTimerRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (timerRef) {
            timerRef.addEventListener("animationiteration", onTimerEnd);
        }

        return () => {
            timerRef?.removeEventListener("animationiteration", onTimerEnd);
        };
    }, [timerRef]);

    return (
        <TimerButtonContainer {...restProps} animstate={animState} time={time}>
            {children}
            <div
                key={timerKey}
                ref={setTimerRef}
                className="timer-button-timer"
            />
        </TimerButtonContainer>
    );
}
