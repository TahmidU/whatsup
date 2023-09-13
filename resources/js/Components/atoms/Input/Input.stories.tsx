import Input from ".";
import { IPayload } from "@/types/story";

const payload: IPayload = {
    title: "ATOMS/Input",
    component: Input,
};
export default payload;

export const Basic = (args: any) => <Input {...args} />;
Basic.args = {};
