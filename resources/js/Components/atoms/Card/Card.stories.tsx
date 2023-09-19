import { IPayload } from "@/types/story";
import Card from ".";

const payload: IPayload = {
    title: "ATOMS/Card",
    component: Card,
};
export default payload;

export const Basic = (args: any) => <Card {...args} />;
Basic.args = {};
