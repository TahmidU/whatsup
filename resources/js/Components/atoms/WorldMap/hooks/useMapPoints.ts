import { useEffect, useMemo, useState } from "react";

import MapPoints from "../constants/MapPoints";
import { getRandomInt } from "@/utils/RandomUtils";

export default function useMapPoints(selectionInterval = 5000, selectNum = 50) {
    const memoMapPoints = useMemo(() => extractSVGMapPoints(MapPoints), []);
    const [selectedPoints, setSelectedPoints] = useState<string>("");

    function extractSVGMapPoints(svgPoints: string) {
        const regex = /(?=M)/g;

        return svgPoints.split(regex);
    }

    function randomlySelectPoints(svgPoints: string[], selectNum = 50) {
        const selectedPoints = [];
        for (let i = 0; i < selectNum; i++) {
            const selectedIndex = getRandomInt(svgPoints.length - 1);

            selectedPoints.push(svgPoints[selectedIndex]);
        }

        return selectedPoints.join("");
    }

    useEffect(() => {
        function setNewPoints() {
            setSelectedPoints(randomlySelectPoints(memoMapPoints, selectNum));
        }

        setNewPoints();
        const findPointsToSelectInterval = setInterval(
            setNewPoints,
            selectionInterval
        );

        return () => {
            clearInterval(findPointsToSelectInterval);
        };
    }, []);

    return { selectedPoints };
}
