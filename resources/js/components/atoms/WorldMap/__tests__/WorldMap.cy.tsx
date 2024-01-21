import WorldMap from "@/components/atoms/WorldMap";
import SVGUtils from "@/utils/SVGUtils";

describe("WorldMap", () => {
    it("Points generation and alteration", () => {
        // Given
        const waitTime = 3;
        const expectedNumOfPoints = 5;

        // When
        cy.mount(
            <WorldMap
                selectNum={expectedNumOfPoints}
                selectionInterval={waitTime - 1}
            />
        );

        // Then
        cy.get("[data-testid='world-map-points-in']").then((elmIn) => {
            const expectedOutPoints = elmIn.attr("d");

            expect(
                SVGUtils.separatePathPoints(expectedOutPoints ?? "").length
            ).equal(expectedNumOfPoints);

            cy.get("[data-testid='world-map-points-out']")
                .invoke("attr", "d")
                .should("eq", undefined);

            cy.wait(waitTime * 1000).then(() => {
                cy.get("[data-testid='world-map-points-out']")
                    .invoke("attr", "d")
                    .should("eq", expectedOutPoints);
            });
        });
    });
});
