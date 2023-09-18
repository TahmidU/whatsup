import { IPayload } from "@/types/story";
import LinkButton from ".";
import { ComponentProps } from "react";

const payload: IPayload = {
    title: "ATOMS/LinkButton",
    component: LinkButton,
};
export default payload;

export const Basic = (args: ComponentProps<typeof LinkButton>) => (
    <LinkButton {...args} />
);
Basic.args = {};
