import Checkbox from "..";
import { fireEvent, render, screen } from "@/utils/TestUtils";
import { expect, describe } from "vitest";

describe("Checkbox", () => {
    test("Checkbox click event", () => {
        // Given
        const expectedTitle = "Checkbox title";

        // When
        render(<Checkbox title={expectedTitle} />);

        // Then
        const renderedCheckbox: HTMLInputElement = screen.getByRole("checkbox");
        const renderedLabel = screen.getByLabelText(expectedTitle);

        expect(renderedLabel).toBeInTheDocument();

        fireEvent.click(renderedLabel);
        expect(renderedCheckbox).toBeChecked();

        fireEvent.click(renderedCheckbox);
        expect(renderedCheckbox).not.toBeChecked();
    });

    test("Checkbox disable click", () => {
        // Given
        const expectedTitle = "Checkbox title";

        // When
        render(<Checkbox title={expectedTitle} disabled />);

        // Then
        const renderedCheckbox: HTMLInputElement = screen.getByRole("checkbox");
        const renderedLabel = screen.getByLabelText(expectedTitle);

        expect(renderedLabel).toBeInTheDocument();

        fireEvent.click(renderedLabel);
        expect(renderedCheckbox).toBeDisabled();
        expect(renderedCheckbox).toBeChecked();

        fireEvent.click(renderedCheckbox);
        expect(renderedCheckbox).not.toBeChecked();
    });
});
