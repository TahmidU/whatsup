import { fireEvent, render, screen } from "@/utils/TestUtils";
import { expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
    test("Button click event", () => {
        // Given
        const onClickSpy = vitest.fn();

        // When
        render(<Button onClick={onClickSpy}>Button</Button>);

        // Then
        const renderedButton = screen.getByRole("button");
        fireEvent.click(renderedButton);

        expect(onClickSpy).toHaveBeenCalled();
    });

    test("Button disable click", () => {
        // Given
        const onClickSpy = vitest.fn();

        // When
        render(
            <Button onClick={onClickSpy} disabled>
                Button
            </Button>
        );

        // Then
        const renderedButton = screen.getByRole("button");
        fireEvent.click(renderedButton);

        expect(onClickSpy).not.toHaveBeenCalled();
    });
});
