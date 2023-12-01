import { MetaPayload } from "@/types/Story";
import Navbar from ".";
import { ComponentProps, useEffect } from "react";
import { LINK_NAMES } from "@/Components/organisms/common/Navbar/constants/Links";

const payload: MetaPayload<typeof Navbar> = {
    title: "ORGANISMS/Navbar",
    component: Navbar,
    argTypes: {
        selectedPage: {
            options: LINK_NAMES,
            control: { type: "radio" },
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof Navbar>) => {
    return <Navbar {...args} />;
};
Basic.args = {
    selectedPage: "Home",
};
