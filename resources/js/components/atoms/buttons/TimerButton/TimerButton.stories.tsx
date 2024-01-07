import { MetaPayload } from "@/types/Story";
import TimerButton from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof TimerButton> = {
    title: "ATOMS/Buttons/TimerButton",
    component: TimerButton,
    parameters: {
        controls: {
            exclude: ["onTimerEnd", "timerKey"],
        },
    },
    argTypes: {
        animState: {
            name: "animation state",
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof TimerButton>) => {
    const timerKey = args.animState === "stop" ? "reset" : "persist";

    return (
        <TimerButton
            {...args}
            timerKey={timerKey}
            style={{ width: "fit-content" }}
        >
            <span style={{ margin: "0.5rem 1rem 1rem 0.5rem" }}>
                Any content can go here
            </span>
        </TimerButton>
    );
};
Basic.args = {
    animState: "play",
    time: 10,
};
