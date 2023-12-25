import { MetaPayload } from "@/types/Story";
import LabelledInput from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof LabelledInput> = {
    title: "MOLECULES/LabelledInput",
    component: LabelledInput,
};
export default payload;

export const Basic = (args: ComponentProps<typeof LabelledInput>) => (
    <LabelledInput {...args} />
);
Basic.args = {
    labelName: "email",
};
