import { UseThemeType } from "@/types/Theme";
import { createContext } from "react";

interface AppContextInterface {
    theme: UseThemeType;
}
export default createContext({} as AppContextInterface);
