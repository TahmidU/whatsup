import TimerButton from "@/components/atoms/buttons/TimerButton";

describe("TimerButton", () => {
    it("Animation 'play' state, hover pause timer", () => {
        // Given
        const animState = "play";
        const expectedAnimState = "paused";

        // When
        cy.mount(<TimerButton {...{ animState }}>Test</TimerButton>);

        // Then
        cy.get("button")
            .realHover()
            .then(() => {
                cy.get("[data-testid='timer-button-timer']").should(
                    "have.css",
                    "animation-play-state",
                    expectedAnimState
                );
            });
    });
});
