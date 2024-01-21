import { useEffect, useMemo, useRef, useState } from "react";

import MapPoints from "../constants/MapPoints";
import { getRandomInt } from "@/utils/RandomUtils";
import SVGUtils from "@/utils/SVGUtils";

export default function useMapPoints(selectNum = 50) {
    const memoMapPoints = useMemo(
        () => SVGUtils.separatePathPoints(MapPoints),
        []
    );
    const [selectedPoints, setSelectedPoints] = useState<{
        in: string;
        out?: string;
    }>({ in: getNewPoints(), out: undefined });
    const inRef = useRef<SVGPathElement>(null);
    const outRef = useRef<SVGPathElement>(null);
    const anim = useRef({ in: false, out: false });

    function randomlySelectPoints(svgPoints: string[], selectNum = 50) {
        const selectedPoints = [];
        for (let i = 0; i < selectNum; i++) {
            const selectedIndex = getRandomInt(svgPoints.length - 1);

            selectedPoints.push(svgPoints[selectedIndex]);
        }

        return selectedPoints;
    }

    function getNewPoints() {
        return randomlySelectPoints(memoMapPoints, selectNum).join("");
    }

    useEffect(() => {
        const inElm = inRef.current;
        const outElm = outRef.current;

        function generateNewPoints() {
            if (anim.current.in && anim.current.out) {
                setSelectedPoints((prev) => ({
                    in: getNewPoints(),
                    out: prev.in,
                }));
                anim.current = {
                    in: false,
                    out: false,
                };
            }
        }

        if (inElm && outElm) {
            inElm?.addEventListener("animationend", () => {
                anim.current = {
                    ...anim.current,
                    in: true,
                };
                generateNewPoints();
            });

            outElm?.addEventListener("animationend", () => {
                anim.current = {
                    ...anim.current,
                    out: true,
                };
                generateNewPoints();
            });
        }

        return () => {};
    }, [inRef.current, outRef.current]);

    return { selectedPoints, inRef, outRef };
}
