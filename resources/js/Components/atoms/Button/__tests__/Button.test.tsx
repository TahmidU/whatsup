import { fireEvent, render, screen } from "../../../../utils/TestUtils";
import { expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
    test("Button click event", () => {
        // Given
        const onClick = vitest.fn();

        // When
        render(<Button onClick={onClick}>Button</Button>);

        // Then
        const renderedButton = screen.getByRole("button");
        fireEvent.click(renderedButton);

        expect(onClick).toHaveBeenCalled();
    });

    test("Button disable click", () => {
        // Given
        const onClick = vitest.fn();

        // When
        render(
            <Button onClick={onClick} disabled>
                Button
            </Button>
        );

        // Then
        const renderedButton = screen.getByRole("button");
        fireEvent.click(renderedButton);

        expect(onClick).not.toHaveBeenCalled();
    });
});
