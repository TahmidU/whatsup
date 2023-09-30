import { fireEvent, render, screen } from "../../../../utils/TestUtils";
import { expect, describe } from "vitest";
import Button from "..";
import { getTheme } from "@/utils/ThemeUtils";

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
});
