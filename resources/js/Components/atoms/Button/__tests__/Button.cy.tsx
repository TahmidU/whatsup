import Button from "@/Components/atoms/Button";

describe("Button", () => {
    it("render", () => {
        cy.mount(<Button>Test</Button>);
    });
});
