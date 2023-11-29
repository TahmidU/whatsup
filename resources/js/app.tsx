import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContextProvider from "./Components/molecules/providers/AppContextProvider";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        return pages[`./Pages/${name}/index.tsx`]();
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <AppContextProvider>
                <ToastContainer />
                <App {...props} />
            </AppContextProvider>
        );
    },
});
