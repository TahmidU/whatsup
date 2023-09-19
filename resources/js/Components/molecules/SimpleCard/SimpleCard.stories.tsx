import { IPayload } from "@/types/story";
import SimpleCard from ".";

const payload: IPayload = {
    title: "ATOMS/SimpleCard",
    component: SimpleCard,
};
export default payload;

export const Basic = (args: any) => <SimpleCard {...args} />;
Basic.args = {};
