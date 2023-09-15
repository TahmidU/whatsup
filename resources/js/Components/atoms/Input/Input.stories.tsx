import Input from ".";
import { IPayload } from "@/types/story";
import { ComponentProps } from "react";

const payload: IPayload = {
    title: "ATOMS/Input",
    component: Input,
    argTypes: {
        type: {
            options: ["text", "password"],
            control: {
                type: "radio",
            },
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof Input>) => (
    <Input {...args} />
);
Basic.args = {
    type: "text",
    placeholder: "Enter text here",
};
