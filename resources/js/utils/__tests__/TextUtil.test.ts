import { describe, it, expect } from "vitest";
import TextUtils from "../TextUtils";

describe("TextUtils - numberWithCommas", () => {
    it("Convert 1000 -> 1,000", () => {
        // Given
        const expectedConversion = "1,000";
        const numberToConvert = 1000;

        // When
        const result = TextUtils.numberWithCommas(numberToConvert);

        // Then
        expect(result).toBe(expectedConversion);
    });

    it("Convert 100 -> 100", () => {
        // Given
        const expectedConversion = "100";
        const numberToConvert = 100;

        // When
        const result = TextUtils.numberWithCommas(numberToConvert);

        // Then
        expect(result).toBe(expectedConversion);
    });
});
