import { mount } from "cypress/react18";
import "cypress-real-events";
import AppSetup from "@/configs/AppSetup";

Cypress.Commands.add("mount", (component, options) => {
    return mount(<AppSetup>{component}</AppSetup>, options);
});
