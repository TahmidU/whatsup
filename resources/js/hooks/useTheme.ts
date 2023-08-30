import { ColourTheme } from "@/types/Theme";
import { useState } from "react";


export default function useTheme() {
    const [currentTheme, setCurrentTheme] = useState<ColourTheme>('light');

    return {
        toggle: () => setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light'),
        current: currentTheme,
        value: () => { }
    }
}