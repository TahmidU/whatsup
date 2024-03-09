import 'styled-components';
import { ThemeValues } from './Theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeValues { }
}