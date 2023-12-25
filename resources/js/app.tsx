import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode } from "react";
import useTheme from "@/hooks/useTheme";
import AppContext from "@/context/AppContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/configs/GlobalStyle";

interface AppContextProviderProps {
    children: ReactNode;
}
export default function AppContextProvider({
    children,
}: AppContextProviderProps) {
    const appTheme = useTheme();

    return (
        <AppContext.Provider value={{ theme: appTheme }}>
            <ThemeProvider theme={appTheme.value}>
                <GlobalStyle />
                <ToastContainer />
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        return pages[`./Pages/${name}/index.tsx`]();
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <AppContextProvider>
                <App {...props} />
            </AppContextProvider>
        );
    },
});
