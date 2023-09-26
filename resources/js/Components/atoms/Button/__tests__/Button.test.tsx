import { fireEvent, render, screen } from "@/Components/providers/RTLProvider";
import { expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
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

    test("Button snapshot", () => {});
});
