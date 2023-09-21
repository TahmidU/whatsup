import { MetaPayload } from "@/types/Story";
import Card from ".";

const payload: MetaPayload<typeof Card> = {
    title: "ATOMS/Card",
    component: Card,
};
export default payload;

export const Basic = (args: any) => <Card {...args} />;
Basic.args = {};
