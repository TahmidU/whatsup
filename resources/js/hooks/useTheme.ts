import { ColourTheme } from "@/types/Theme";
import { getTheme } from "@/utils/ThemeUtil";
import { useState } from "react";


export default function useTheme() {
    const [currentTheme, setCurrentTheme] = useState<ColourTheme>('dark');

    return {
        toggle: () => setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light'),
        current: currentTheme,
        value: getTheme(currentTheme)
    }
}