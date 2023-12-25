import { MetaPayload } from "@/types/Story";
import WorldMap from ".";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof WorldMap> = {
    title: "ORGANISMS/FeatureSlide/WorldMap",
    component: WorldMap,
};
export default payload;

export const Basic = (args: ComponentProps<typeof WorldMap>) => (
    <WorldMap {...args} />
);
Basic.args = {};
