import { mount } from "cypress/react18";
import "cypress-real-events";
import AppSetup from "@/app";

Cypress.Commands.add("mount", (component, options) => {
    return mount(<AppSetup>{component}</AppSetup>, options);
});
