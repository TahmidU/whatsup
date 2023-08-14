describe("Navigation", () => {
    it("test", () => {
        cy.viewport("macbook-16");

        cy.visit("http://127.0.0.1:8000/");

        cy.get("button").contains("Test");
    });
});

// Prevent TypeScript from reading file as legacy script
export { };