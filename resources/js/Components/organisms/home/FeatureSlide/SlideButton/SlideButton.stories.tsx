import { MetaPayload } from "@/types/Story";
import SlideButton from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof SlideButton> = {
    title: "ATOMS/SlideButton",
    component: SlideButton,
};
export default payload;

export const Basic = (args: ComponentProps<typeof SlideButton>) => (
    <SlideButton {...args}>Test</SlideButton>
);
Basic.args = {};
