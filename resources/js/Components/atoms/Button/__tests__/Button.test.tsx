import { fireEvent, render, screen } from "@/utils/RTLUtils";
import { vitest, expect } from "vitest";
import Button from "..";

describe.only("Button", () => {
    test("Button onClick event", () => {
        // Given
        const buttonId = "button-id";
        const onClick = vitest.fn();

        // When
        render(
            <Button id={buttonId} onClick={onClick}>
                Button
            </Button>
        );

        // Then
        const renderedButton = screen.getByRole("button");
        fireEvent.click(renderedButton);

        expect(onClick).toHaveBeenCalled();
    });
});
