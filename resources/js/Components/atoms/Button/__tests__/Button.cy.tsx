import Button from "@/Components/atoms/Button";
import { getTheme } from "@/utils/ThemeUtils";
import Color from "color";

describe("Button", () => {
    it("Dark theme - action type", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark").colours.accent;

        // When
        cy.mount(
            <Button id="button" buttonType="action">
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']").should(
            "have.css",
            "background-color",
            Color(expectedBackgroundColor).rgb().toString()
        );
    });

    it("Dark theme - danger type", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark").colours.danger;

        // When
        cy.mount(
            <Button id="button" buttonType="danger">
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']").should(
            "have.css",
            "background-color",
            Color(expectedBackgroundColor).rgb().toString()
        );
    });

    it("Dark theme - action type, hover effect", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark")
            .cColours.cAccent.lighten(0.05)
            .toString();

        // When
        cy.mount(
            <Button id="button" buttonType="action">
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']")
            .realHover()
            .should(
                "have.css",
                "background-color",
                Color(expectedBackgroundColor).rgb().toString()
            );
    });

    it("Dark theme - danger type, hover effect", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark")
            .cColours.cDanger.lighten(0.05)
            .toString();

        // When
        cy.mount(
            <Button id="button" buttonType="danger">
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']")
            .trigger("mouseover")
            .should(
                "have.css",
                "background-color",
                Color(expectedBackgroundColor).rgb().toString()
            );
    });

    it("Dark theme - action type, disabled", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark")
            .cColours.cAccent.darken(0.5)
            .toString();

        // When
        cy.mount(
            <Button id="button" buttonType="action" disabled>
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']").should(
            "have.css",
            "background-color",
            Color(expectedBackgroundColor).rgb().toString()
        );
    });

    it("Dark theme - danger type, disabled", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark")
            .cColours.cDanger.darken(0.5)
            .toString();

        // When
        cy.mount(
            <Button id="button" buttonType="danger" disabled>
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']").should(
            "have.css",
            "background-color",
            Color(expectedBackgroundColor).rgb().toString()
        );
    });

    it("Dark theme - action type, disabled, on hover", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark")
            .cColours.cAccent.darken(0.5)
            .toString();

        // When
        cy.mount(
            <Button id="button" buttonType="action" disabled>
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']")
            .realHover()
            .should(
                "have.css",
                "background-color",
                Color(expectedBackgroundColor).rgb().toString()
            );
    });

    it("Dark theme - danger type, disabled, on hover", () => {
        // Given
        const expectedBackgroundColor = getTheme("dark")
            .cColours.cDanger.darken(0.5)
            .toString();

        // When
        cy.mount(
            <Button id="button" buttonType="danger" disabled>
                Test
            </Button>
        );

        // Then
        cy.get("[id='button']")
            .realHover()
            .should(
                "have.css",
                "background-color",
                Color(expectedBackgroundColor).rgb().toString()
            );
    });
});
