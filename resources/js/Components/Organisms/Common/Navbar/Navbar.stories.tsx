import { MetaPayload } from "@/types/Story";
import Navbar from ".";
import { LINK_NAMES } from "@/Components/Organisms/Common/Navbar/constants/Links";

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

export const Basic = () => {
    return <Navbar />;
};
Basic.args = {};
