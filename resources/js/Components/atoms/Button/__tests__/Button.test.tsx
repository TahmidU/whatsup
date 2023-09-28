import { fireEvent, render, screen } from "../../../../utils/TestUtils";
import { expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
    test("Button onClick event", () => {
        // Given
        const onClick = vitest.fn();

        // When
        render(<Button onClick={onClick}>Button</Button>);

        // Then
        const renderedButton = screen.getByRole("button");
        fireEvent.click(renderedButton);

        expect(onClick).toHaveBeenCalled();
    });

    test("Button not disabled style - action type", () => {
        // Given
        const expectedButtonType = "action";

        // When
        render(<Button buttonType={expectedButtonType}>Button</Button>);

        // Then
        const renderedButton = screen.getByRole("button");
        expect(renderedButton).toHaveStyle("background-color:red");
    });

    test("Button disabled style - action type", () => {});

    test("Button not disabled style - danger type", () => {});

    test("Button disabled style - danger type", () => {});
});
