import { MetaPayload } from "@/types/Story";
import FeatureSlide from "@/Components/Organisms/Home/FeatureSlide";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof FeatureSlide> = {
    title: "ORGANISMS/FeatureSlide",
    component: FeatureSlide,
    argTypes: {},
};
export default payload;

export const Basic = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <FeatureSlide />
    </div>
);
Basic.args = {};
