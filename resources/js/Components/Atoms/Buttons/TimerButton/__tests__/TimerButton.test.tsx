import { fireEvent, render, screen, waitFor } from "@/utils/TestUtils";
import { expect, describe } from "vitest";
import TimerButton from "@/Components/Atoms/Buttons/TimerButton";

describe("TimerButton", () => {
    test("Call onTimerEnd on animation iteration", async () => {
        // Given
        const onTimerEndSpy = vitest.fn();

        // When
        render(<TimerButton onTimerEnd={onTimerEndSpy}>Button</TimerButton>);

        // Then
        const timerElement = screen.getByTestId("timer-button-timer");
        fireEvent.animationIteration(timerElement);

        expect(onTimerEndSpy).toHaveBeenCalled();
    });
});
