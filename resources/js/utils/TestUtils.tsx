import AppContextProvider from "@/Components/providers/AppContextProvider";
import { cleanup, queryByAttribute, render } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
    cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, {
        wrapper: ({ children }) => (
            <AppContextProvider>{children}</AppContextProvider>
        ),
        ...options,
    });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
