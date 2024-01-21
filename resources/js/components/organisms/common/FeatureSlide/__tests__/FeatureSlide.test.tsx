import { describe, expect } from "vitest";
import FeatureSlide from "@/components/organisms/home/FeatureSlide";
import {
    PREVIEW_SECTION,
    SLIDE_BUTTONS,
} from "@/components/organisms/home/FeatureSlide/constants/SlideDetails";
import { fireEvent, render, screen } from "@/utils/TestUtils";

describe("FeatureSlide", () => {
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
