import LoginForm from ".";
import { IPayload } from "@/types/story";
import { ComponentProps } from "react";

const payload: IPayload = {
    title: "ORGANISMS/LoginForm",
    component: LoginForm,
};
export default payload;

export const Basic = (args: ComponentProps<typeof LoginForm>) => (
    <LoginForm {...args} />
);
Basic.args = {};
