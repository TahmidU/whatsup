import { describe, it, expect } from "vitest";
import FeatureSlide from "@/Components/Organisms/Home/FeatureSlide";
import {
    PREVIEW_SECTION,
    SLIDE_BUTTONS,
} from "@/Components/Organisms/Home/FeatureSlide/constants/SlideDetails";
import { cleanup, fireEvent, render, screen, waitFor } from "@/utils/TestUtils";
import Button from "@/Components/Atoms/Buttons/Button";

describe("FeatureSlide", () => {
    afterEach(() => {
        cleanup();
    });

    test("Change slide on click", () => {
        // Given
        const select = "encrypt";
        const toClick = SLIDE_BUTTONS.find(
            (slideBtn) => slideBtn.name === select
        )?.title;

        const expectedDetailDesc = PREVIEW_SECTION[select].desc;
        const expectedTitleId = "option-Encrypted Data";

        // When
        render(<FeatureSlide />);

        // Then
        expect(toClick).not.to.be.undefined;

        const getSelectTitle = screen.getByTestId(expectedTitleId);
        fireEvent.click(getSelectTitle);

        screen.getByText(expectedDetailDesc);
    });
});
