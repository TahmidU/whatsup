import { fireEvent, render, screen } from "@/Components/providers/RTLProvider";
import { vitest, expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
    // test("Button onClick event", () => {
    //     // Given
    //     const buttonId = "button-id";
    //     const onClick = vitest.fn();

    //     // When
    //     render(
    //         <Button id={buttonId} onClick={onClick}>
    //             Button
    //         </Button>
    //     );

    //     // Then
    //     const renderedButton = screen.getByRole("button");
    //     fireEvent.click(renderedButton);

    //     expect(onClick).toHaveBeenCalled();
    // });

    test("Button", () => {
        // Given
        const buttonId = "button-id";
        const expectedText = "Find this text";

        // When
        render(<Button id={buttonId}>{expectedText}</Button>);

        // Then
        const renderedButton = screen.getByRole("button");

        expect(renderedButton).to.contain(expectedText);
    });
});
