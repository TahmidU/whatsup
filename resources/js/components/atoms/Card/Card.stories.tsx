import { MetaPayload } from "@/types/Story";
import Card from "@/components/atoms/Card";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof Card> = {
    title: "ATOMS/Card",
    component: Card,
    parameters: {
        controls: {
            exclude: ["className", "children"],
        },
    },
    argTypes: {},
};
export default payload;

export const Default = (args: ComponentProps<typeof Card>) => (
    <Card {...args}>This text is contained by a Card component</Card>
);
Default.args = {};
