import LoginForm from ".";
import { MetaPayload } from "@/types/Story";
import { ComponentProps } from "react";

const payload: MetaPayload<typeof LoginForm> = {
    title: "ORGANISMS/LoginForm",
    component: LoginForm,
};
export default payload;

export const Basic = (args: ComponentProps<typeof LoginForm>) => (
    <LoginForm {...args} />
);
Basic.args = {};
