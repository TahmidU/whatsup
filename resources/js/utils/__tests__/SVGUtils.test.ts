import SVGUtils from "@/utils/SVGUtils";

describe("SVGUtils - separatePathPoints", () => {
    it("Point separation", () => {
        // Given
        const points =
            "M88.03 68.07 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0zM128.03 80.07 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0zM280.03 30.07 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0zM114.03 48.07 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0zM96.03 46.07 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z";

        const expectedStartChar = "M";
        const expectedEndChar = "z";

        // When
        const arrPoints = SVGUtils.separatePathPoints(points);

        // Then
        arrPoints.forEach((point) => {
            expect(point.charAt(0)).equal(expectedStartChar);
            expect(point.charAt(point.length - 1)).equal(expectedEndChar);
        });
    });
});
