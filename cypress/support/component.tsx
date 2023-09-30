import { mount } from "cypress/react18";
import AppContextProvider from "@/Components/providers/AppContextProvider";
import "cypress-real-events";

Cypress.Commands.add("mount", (component, options) => {
    return mount(<AppContextProvider>{component}</AppContextProvider>, options);
});
