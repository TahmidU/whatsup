import { MetaPayload } from "@/types/Story";
import FeatureSlide from "@/components/organisms/home/Feature/FeatureSlide";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof FeatureSlide> = {
    title: "ORGANISMS/Feature/FeatureSlide",
    component: FeatureSlide,
    parameters: {
        controls: {
            exclude: ["onSlideAutoChange"],
        },
    },
    argTypes: {
        slideTime: {
            name: "slide time",
        },
    },
};
export default payload;

export const Basic = (args: ComponentProps<typeof FeatureSlide>) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <FeatureSlide {...args} />
    </div>
);
Basic.args = {
    slideTime: 15,
};
