import { mount } from "cypress/react18";
import "cypress-real-events";
import AppContextProvider from "@/app";

Cypress.Commands.add("mount", (component, options) => {
    return mount(<AppContextProvider>{component}</AppContextProvider>, options);
});
