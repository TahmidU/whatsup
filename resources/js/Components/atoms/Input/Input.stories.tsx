import Input from ".";
import { IPayload } from "@/types/story";

const payload: IPayload = {
    title: "ATOMS/Input",
    component: Input,
    argTypes: {
        type: {
            options: ["text", "password"],
            control: {
                type: "radio",
            },
        },
    },
};
export default payload;

export const Basic = (args: any) => <Input {...args} />;
Basic.args = {
    type: "text",
};
