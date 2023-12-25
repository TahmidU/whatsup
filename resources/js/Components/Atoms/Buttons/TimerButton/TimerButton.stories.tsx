import { MetaPayload } from "@/types/Story";
import TimerButton from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof TimerButton> = {
    title: "ATOMS/Buttons/TimerButton",
    component: TimerButton,
    argTypes: {
        animState: {
            options: ["paused", "running"],
            control: {
                type: "radio",
            },
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof TimerButton>) => (
    <TimerButton {...args}>Some content</TimerButton>
);
Basic.args = {
    animState: "paused",
    time: 10,
};
