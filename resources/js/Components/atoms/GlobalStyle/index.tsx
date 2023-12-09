import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        overflow-y: scroll;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        height: 100%;
        min-width: 100%;
        width: 100%;
        max-width: 100%;

        min-height: 100%;
        height: 100%;
        max-height: 100%;
    }

    * {
        box-sizing: border-box;
    }


`;

export default GlobalStyle;
