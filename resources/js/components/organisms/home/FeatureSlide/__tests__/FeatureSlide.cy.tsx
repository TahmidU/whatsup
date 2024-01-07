import FeatureSlide from "@/components/organisms/home/FeatureSlide";
import { PREVIEW_SECTION } from "@/components/organisms/home/FeatureSlide/constants/SlideDetails";

describe("FeatureSlide", () => {
    it("Slide auto change, cycle to start", () => {
        // Given
        const onSlideAutoChangeSpy = cy.spy().as("changeSlide");

        // When
        cy.mount(
            <FeatureSlide
                slideTime={3}
                onSlideAutoChange={onSlideAutoChangeSpy}
            />
        );

        // Then
        cy.get("[data-testid='feature-slide-preview-desc']").should(
            "have.text",
            PREVIEW_SECTION["connect"].desc
        );
        cy.get("@changeSlide", { timeout: 5000 }).should("have.been.called");

        cy.get("[data-testid='feature-slide-preview-desc']").should(
            "have.text",
            PREVIEW_SECTION["encrypt"].desc
        );
        cy.get("@changeSlide", { timeout: 5000 }).should("have.been.called");

        cy.get("[data-testid='feature-slide-preview-desc']").should(
            "have.text",
            PREVIEW_SECTION["ai"].desc
        );
        cy.get("@changeSlide", { timeout: 5000 }).should("have.been.called");

        cy.get("[data-testid='feature-slide-preview-desc']").should(
            "have.text",
            PREVIEW_SECTION["fast"].desc
        );
        cy.get("@changeSlide", { timeout: 5000 }).should("have.been.called");

        cy.get("[data-testid='feature-slide-preview-desc']").should(
            "have.text",
            PREVIEW_SECTION["connect"].desc
        );
        cy.get("@changeSlide", { timeout: 5000 }).should("have.been.called");
    });
});
