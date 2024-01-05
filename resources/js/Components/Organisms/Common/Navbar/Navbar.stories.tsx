import { MetaPayload } from "@/types/Story";
import Navbar from ".";
import StorybookPageContext from "@/context/StorybookPageContext";

const payload: MetaPayload<typeof Navbar> = {
    title: "ORGANISMS/Navbar",
    component: Navbar,
};
export default payload;

export const Basic = () => {
    (window as any).route = function (route: string) {
        return route;
    };

    return (
        <StorybookPageContext.Provider
            value={{
                component: "Home",
                props: {
                    errors: {},
                },
                url: "",
                version: null,
                scrollRegions: [],
                rememberedState: {},
            }}
        >
            <Navbar />
        </StorybookPageContext.Provider>
    );
};
Basic.args = {};
