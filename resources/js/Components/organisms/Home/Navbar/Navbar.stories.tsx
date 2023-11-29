import { MetaPayload } from "@/types/Story";
import Navbar from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof Navbar> = {
    title: "ORGANISMS/Navbar",
    component: Navbar,
};
export default payload;

export const Basic = (args: ComponentProps<typeof Navbar>) => (
    <Navbar {...args} />
);
Basic.args = {};
