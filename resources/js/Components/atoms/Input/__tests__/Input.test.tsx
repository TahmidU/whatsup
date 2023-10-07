import Input from "..";
import { fireEvent, render, screen, userEvent } from "@/utils/TestUtils";
import { expect, describe } from "vitest";

describe("Input", () => {
    test("Input password visibility toggle", async () => {
        // Given
        const user = userEvent.setup();
        const inputTestId = "input";
        const inputToggleTestId = `${inputTestId}-visibility`;
        const expectedText = "Hello world!";

        // When
        render(<Input dataTestId={inputTestId} type="password" />);

        // Then
        const renderedInput: HTMLInputElement = screen.getByTestId(inputTestId);

        expect(renderedInput).toBeInTheDocument();

        await user.type(renderedInput, expectedText);
        expect(renderedInput).not.toBeDisabled();
        expect(renderedInput).toHaveValue(expectedText);

        const renderedToggleVis = screen.getByTestId(inputToggleTestId);
        expect(renderedToggleVis).toBeInTheDocument();
        expect(renderedInput.type).toBe("password");
        fireEvent.click(renderedToggleVis);
        expect(renderedInput.type).toBe("text");
    });

    test("Input typing", async () => {
        // Given
        const user = userEvent.setup();
        const inputTestId = "input";
        const expectedText = "Hello world!";

        // When
        render(<Input dataTestId={inputTestId} />);

        // Then
        const renderedInput: HTMLInputElement = screen.getByTestId(inputTestId);

        expect(renderedInput).toBeInTheDocument();

        await user.type(renderedInput, expectedText);
        expect(renderedInput).not.toBeDisabled();
        expect(renderedInput).toHaveValue(expectedText);
    });

    test("Input disable typing", async () => {
        // Given
        const user = userEvent.setup();
        const inputTestId = "input";
        const notExpectedText = "Hello world!";

        // When
        render(<Input dataTestId={inputTestId} disabled />);

        // Then
        const renderedInput: HTMLInputElement = screen.getByTestId(inputTestId);

        expect(renderedInput).toBeInTheDocument();

        await user.type(renderedInput, notExpectedText);
        expect(renderedInput).toBeDisabled();
        expect(renderedInput).not.toHaveValue(notExpectedText);
    });
});
