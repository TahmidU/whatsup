import "@/../css/app.css";
import GlobalStyle from "@/Components/atoms/GlobalStyle";

import AppContext from "@/context/AppContext";
import useTheme from "@/hooks/useTheme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
    children: ReactNode;
}
export default function AppContextProvider({ children }: Props) {
    const appTheme = useTheme();

    return (
        <AppContext.Provider value={{ theme: appTheme }}>
            <GlobalStyle />
            <ThemeProvider theme={appTheme.value}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
}
