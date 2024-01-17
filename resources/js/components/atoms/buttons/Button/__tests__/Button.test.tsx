import { render, screen } from "@/utils/TestUtils";
import { describe } from "vitest";
import Button from "..";

describe("Button", () => {
    test("Check as 'button' polymorphism", () => {
        // Given

        // When
        render(<Button>Button</Button>);

        // Then
        screen.getByRole("button");
    });

    test("Check as 'link' polymorphism", () => {
        // Given

        // When
        render(
            <Button as="link" href="">
                Button
            </Button>
        );

        // Then
        screen.getByRole("link");
    });
});
