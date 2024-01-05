import StorybookPageContext from "@/context/StorybookPageContext";
import { usePage } from "@inertiajs/react";
import { useContext } from "react";
import { Page, PageProps } from "@inertiajs/core";

function useStorybookPage<
    TPageProps extends PageProps = PageProps
>(): Page<TPageProps> {
    return useContext(StorybookPageContext) as unknown as Page<TPageProps>;
}

export default function useSwappablePage() {
    try {
        return usePage();
    } catch {
        return useStorybookPage();
    }
}
