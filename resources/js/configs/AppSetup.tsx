import "@/../css/fonts.css";
import GlobalStyle from "@/configs/GlobalStyle";
import AppContext from "@/context/AppContext";
import useTheme from "@/hooks/useTheme";
import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import Echo from "laravel-echo";

interface Props {
    children: ReactNode;
}
export default function AppSetup({ children }: Props) {
    const appTheme = useTheme();

    useEffect(() => {
        window.Echo = new Echo({
            broadcaster: "pusher",
            key: "",
            wsHost: window.location.hostname,
            wsPort: 6001,
            forceTLS: false,
        });
    }, []);

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
