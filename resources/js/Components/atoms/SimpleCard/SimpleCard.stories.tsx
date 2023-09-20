import { IPayload } from "@/types/story";
import SimpleCard from ".";
import { ComponentProps } from "react";

const payload: IPayload = {
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
