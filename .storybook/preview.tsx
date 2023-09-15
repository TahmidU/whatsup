import { getTheme } from "../resources/js/utils/ThemeUtil";
import { ThemeProvider } from "styled-components";
import { Decorator, Preview } from "@storybook/react";
import React from "react";
import GlobalStyle from "../resources/js/Components/atoms/GlobalStyle";

export const parameters: Preview = {};

const withTheme: Decorator = (StoryFn, context) => {
    // Get the active theme value from the story parameter
    const { theme } = context.globals;
    const storyTheme = getTheme(theme);
    return (
        <ThemeProvider theme={storyTheme}>
            <GlobalStyle />
            <StoryFn />
        </ThemeProvider>
    );
};

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "dark",
        toolbar: {
            // The icon for the toolbar item
            icon: "circlehollow",
            // Array of options
            items: [
                { value: "light", icon: "circlehollow", title: "light" },
                { value: "dark", icon: "circle", title: "dark" },
            ],
            // Property that specifies if the name of the item will be displayed
            showName: true,
        },
    },
};

export const decorators = [withTheme];
