import { fireEvent, render, screen } from "@/Components/providers/RTLProvider";
import { expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
    test("Button", () => {
        // Given
        const buttonId = "button-id";
        const expectedText = "Find this text";

        // When
        render(<Button id={buttonId}>{expectedText}</Button>);

        // Then
        const renderedButton = screen.getByRole("button");

        expect(renderedButton).toHaveTextContent(expectedText);
    });
});
