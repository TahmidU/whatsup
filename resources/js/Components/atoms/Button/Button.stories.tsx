import { MetaPayload } from "@/types/Story";
import Button from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof Button> = {
    title: "ATOMS/Button",
    component: Button,
};
export default payload;

export const Basic = (args: ComponentProps<typeof Button>) => (
    <Button {...args}>Test</Button>
);
Basic.args = {
    variant: "action",
    borderSize: "md",
    disabled: false,
};
