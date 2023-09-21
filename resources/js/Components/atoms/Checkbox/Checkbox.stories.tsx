import { ComponentProps } from "react";
import Checkbox from ".";
import { MetaPayload } from "@/types/Story";

const payload: MetaPayload<typeof Checkbox> = {
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
