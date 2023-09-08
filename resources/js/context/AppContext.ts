import { useThemeType } from "@/types/Theme";
import { createContext } from "react";

type AppContextType = {
    theme: useThemeType
}
export default createContext({} as AppContextType);