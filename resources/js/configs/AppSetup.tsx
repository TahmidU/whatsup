import GlobalStyle from "@/configs/GlobalStyle";
import AppContext from "@/context/AppContext";
import useTheme from "@/hooks/useTheme";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

interface Props {
    children: ReactNode;
}
export default function AppSetup({ children }: Props) {
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
