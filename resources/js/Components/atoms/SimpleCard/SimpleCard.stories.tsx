import SimpleCard from ".";
import { ComponentProps } from "react";
import { MetaPayload } from "@/types/Story";

const payload: MetaPayload<typeof SimpleCard> = {
    title: "ATOMS/SimpleCard",
    component: SimpleCard,
};
export default payload;

export const Basic = (args: ComponentProps<typeof SimpleCard>) => (
    <SimpleCard {...args} />
);
Basic.args = {
    shadow: "sm",
};
