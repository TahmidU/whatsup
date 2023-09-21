import LinkButton from ".";
import { ComponentProps } from "react";
import { MetaPayload } from "@/types/Story";

const payload: MetaPayload<typeof LinkButton> = {
    title: "ATOMS/LinkButton",
    component: LinkButton,
};
export default payload;

export const Basic = (args: ComponentProps<typeof LinkButton>) => (
    <LinkButton {...args} />
);
Basic.args = {};
