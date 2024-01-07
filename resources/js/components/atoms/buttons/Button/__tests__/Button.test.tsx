import { fireEvent, render, screen } from "@/utils/TestUtils";
import { expect, describe } from "vitest";
import Button from "..";

describe("Button", () => {
    test("Check as 'button' polymorphism, button disable click", () => {
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

    test("Check as 'link' polymorphism, link href", () => {
        // Given
        const expectedHref = "/fake";

        // When
        render(
            <Button as="link" href={expectedHref}>
                Button
            </Button>
        );

        // Then
        const renderedButton = screen.getByRole("link");

        expect(renderedButton).toHaveAttribute("href", expectedHref);
    });
});
