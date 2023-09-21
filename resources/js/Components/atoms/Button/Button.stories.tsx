import { MetaPayload } from "@/types/Story";
import Button from ".";

const payload: MetaPayload<typeof Button> = {
    title: "ATOMS/Button",
    component: Button,
};
export default payload;

export const Basic = (args: any) => <Button {...args} />;
Basic.args = {};
