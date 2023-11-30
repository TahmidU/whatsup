import { MetaPayload } from "@/types/Story";
import Navbar from ".";
import { ComponentProps } from "react";
import { NAV_LINKS } from "@/Components/organisms/common/Navbar/constants/Links";

const payload: MetaPayload<typeof Navbar> = {
    title: "ORGANISMS/Navbar",
    component: Navbar,
    argTypes: {
        selectedPage: {
            options: NAV_LINKS,
            control: { type: "radio" },
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof Navbar>) => (
    <Navbar {...args} />
);
Basic.args = {
    selectedPage: "Home",
};
