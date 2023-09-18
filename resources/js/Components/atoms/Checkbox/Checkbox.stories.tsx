import { IPayload } from "@/types/story";
import { ComponentProps } from "react";
import Checkbox from ".";

const payload: IPayload = {
    title: "ATOMS/Checkbox",
    component: Checkbox,
};
export default payload;

export const Basic = (args: ComponentProps<typeof Checkbox>) => (
    <Checkbox {...args} />
);
Basic.args = {
    title: "Remember me",
    idAttribute: "test-checkbox",
};
