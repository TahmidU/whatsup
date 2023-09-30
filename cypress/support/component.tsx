import { mount } from "cypress/react18";
import React from "react";
import AppContextProvider from "@/Components/providers/AppContextProvider";

Cypress.Commands.add("mount", (component, options) => {
    return mount(<AppContextProvider>{component}</AppContextProvider>, options);
});
