import '@/../css/app.css';

import AppContext from "@/context/AppContext";
import useTheme from "@/hooks/useTheme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type Props = {
    children: ReactNode;
}
export default function AppContextProvider({ children }: Props) {
    const appTheme = useTheme();

    return (
        <AppContext.Provider value={{ theme: appTheme }}>
            <ThemeProvider theme={appTheme.value}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}