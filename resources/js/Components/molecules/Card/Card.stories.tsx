import { MetaPayload } from "@/types/Story";
import Card from ".";
import { Fragment } from "react";

const payload: MetaPayload<typeof Card> = {
    title: "MOLECULES/Card",
    component: Card,
};
export default payload;

export const Basic = (args: any) => (
    <Card
        {...args}
        header={
            <Fragment>
                <span>This is a header</span>
            </Fragment>
        }
        footer={
            <Fragment>
                <span>This is a footer</span>
            </Fragment>
        }
    >
        <span>This is the main segment</span>
    </Card>
);
Basic.args = {};
