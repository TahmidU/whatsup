import Button from ".";
// import { IPayload } from "types/story";

const payload = {
    title: "ATOMS/Button",
    component: Button,
};
export default payload;

export const Basic = (args: any) => <Button {...args} />;
Basic.args = {};
