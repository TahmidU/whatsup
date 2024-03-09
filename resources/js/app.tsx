import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import AppSetup from "@/configs/AppSetup";
import "../css/app.css";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx");
        return pages[`./pages/${name}/index.tsx`]();
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <AppSetup>
                <App {...props} />
            </AppSetup>
        );
    },
});
