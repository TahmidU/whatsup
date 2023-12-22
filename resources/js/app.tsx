import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode } from "react";
import useTheme from "@/hooks/useTheme";
import AppContext from "@/context/AppContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";

interface AppContextProviderProps {
    children: ReactNode;
}
export default function AppContextProvider({
    children,
}: AppContextProviderProps) {
    const appTheme = useTheme();

    const GlobalStyle = createGlobalStyle`
        html {
            overflow-y: scroll;
        }

        html,
        body {
            padding: 0;
            margin: 0;
            height: 100%;
            min-width: 100%;
            width: 100%;
            max-width: 100%;

            min-height: 100%;
            height: 100%;
            max-height: 100%;
        }

        button{
            border: 0;
            cursor: pointer;
            background-color: transparent;
        }

        span, p, div, button, a{
            font-family: ${({ theme }) => theme.fontFamilies.inter};
        }

        * {
            box-sizing: border-box;
        }
    `;

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
