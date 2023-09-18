import { IPayload } from "@/types/story";
import Button from ".";

const payload: IPayload = {
    title: "ATOMS/Button",
    component: Button,
};
export default payload;

export const Basic = (args: any) => <Button {...args} />;
Basic.args = {};
