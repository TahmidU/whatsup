import AppSetup from "@/configs/AppSetup";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
    cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, {
        wrapper: ({ children }) => <AppSetup>{children}</AppSetup>,
        ...options,
    });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
