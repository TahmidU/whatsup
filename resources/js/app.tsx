import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import AppSetup from "@/configs/AppSetup";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        return pages[`./Pages/${name}/index.tsx`]();
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <AppSetup>
                <App {...props} />
            </AppSetup>
        );
    },
});
