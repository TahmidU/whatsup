import Checkbox from "@/Components/Atoms/Checkbox";

describe("Checkbox", () => {
    it("Toggle svg opacity", () => {
        // Given
        const id = "checkbox-container";
        const expectedTitle = "This is a test";

        // When
        cy.mount(<Checkbox id="checkbox-container" title={expectedTitle} />);

        // Then
        cy.get("svg").should("be.hidden");
        cy.get(`[id=${id}]`).click();
        cy.get("svg").should("not.be.hidden");
    });
});
