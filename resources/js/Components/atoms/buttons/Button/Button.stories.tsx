import { MetaPayload } from "@/types/Story";
import Button from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof Button> = {
    title: "ATOMS/buttons/Button",
    component: Button,
    argTypes: {
        as: {
            options: ["button", "link"],
            control: "radio",
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof Button>) => (
    <Button {...args}>Test</Button>
);
Basic.args = {
    as: "link",
    href: "",
    variant: "action",
    borderSize: "md",
    disabled: false,
};
