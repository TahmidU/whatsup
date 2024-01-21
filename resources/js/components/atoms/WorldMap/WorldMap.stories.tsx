import { MetaPayload } from "@/types/Story";
import WorldMap from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof WorldMap> = {
    title: "ATOMS/WorldMap",
    component: WorldMap,
    argTypes: {
        selectionInterval: {
            name: "animation time (seconds)",
        },
        selectNum: {
            name: "number of points",
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof WorldMap>) => (
    <WorldMap {...args} />
);
Basic.args = {
    selectionInterval: 2.5,
    selectNum: 50,
};
