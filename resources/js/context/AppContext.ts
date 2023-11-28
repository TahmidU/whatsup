import { UseThemeType } from "@/types/Theme";
import { createContext } from "react";

type AppContextType = {
    theme: UseThemeType;
};
export default createContext({} as AppContextType);
