import { MetaPayload } from "@/types/Story";
import Button from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof Button> = {
    title: "ATOMS/Buttons/Button",
    component: Button,
    parameters: {
        controls: {
            exclude: ["ref", "className", "href"],
        },
    },
    argTypes: {
        as: {
            control: "radio",
            options: ["button", "link"],
        },
        $variant: {
            name: "variant",
        },
        $borderSize: {
            name: "border size",
        },
        disabled: {
            if: {
                arg: "as",
                eq: "button",
            },
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof Button>) => (
    <Button {...args}>Test</Button>
);
Basic.args = {
    as: "button",
    href: "",
    $variant: "action",
    $borderSize: "md",
    disabled: false,
};
