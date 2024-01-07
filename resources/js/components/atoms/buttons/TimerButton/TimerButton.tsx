import { TimerButtonContainer } from "@/components/atoms/buttons/TimerButton/TimerButtonStyles";
import { ComponentProps, ReactNode, useEffect, useState } from "react";

interface Props extends ComponentProps<"button"> {
    animState?: "stop" | "play" | "pause";
    time?: number;
    onTimerEnd?: () => void;
    timerKey?: string;
    timerTestId?: string;
    children: ReactNode;
}
export default function TimerButton({
    animState = "stop",
    time = 10,
    onTimerEnd = () => {},
    timerKey,
    timerTestId,
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
        <TimerButtonContainer
            {...restProps}
            $animstate={animState}
            $time={time}
        >
            {children}
            <div
                data-testid={timerTestId ?? "timer-button-timer"}
                key={timerKey}
                ref={setTimerRef}
                className="timer-button-timer"
            />
        </TimerButtonContainer>
    );
}
