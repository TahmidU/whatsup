import { useEffect, useMemo, useRef, useState } from "react";

import MapPoints from "../constants/MapPoints";
import { getRandomInt } from "@/utils/RandomUtils";

export default function useMapPoints(selectionInterval = 5000, selectNum = 50) {
    const memoMapPoints = useMemo(() => extractSVGMapPoints(MapPoints), []);
    const [selectedPoints, setSelectedPoints] = useState<{
        in: string;
        out?: string;
    }>({ in: getNewPoints(), out: undefined });
    const inRef = useRef<SVGPathElement>(null);
    const outRef = useRef<SVGPathElement>(null);
    const anim = useRef({ in: false, out: false });

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

    // function restartAnimation() {
    //     // Toggle classes to restart animations

    //     console.log(anim.current);

    //     if (anim.current.in && anim.current.out) {
    //         setSelectedPoints((prev) => ({ in: getNewPoints(), out: prev.in }));
    //         anim.current = {
    //             out: false,
    //             in: false,
    //         };
    //     }
    // }

    // useEffect(() => {
    //     const inElm = inRef.current;
    //     const outElm = outRef.current;

    //     if (inElm && outElm) {
    //         inElm?.addEventListener("animationend", () => {
    //             console.log("testing...");
    //             anim.current = {
    //                 ...anim.current,
    //                 in: true,
    //             };
    //             restartAnimation();
    //         });

    //         outElm?.addEventListener("animationend", () => {
    //             console.log("testing2...");
    //             anim.current = {
    //                 ...anim.current,
    //                 out: true,
    //             };
    //             restartAnimation();
    //         });
    //     }
    // }, [inRef.current, outRef.current]);

    // useEffect(() => {
    //     const findPointsToSelectInterval = setInterval(() => {
    //         setSelectedPoints((prev) => ({ in: getNewPoints(), out: prev.in }));
    //     }, selectionInterval);

    //     return () => {
    //         clearInterval(findPointsToSelectInterval);
    //     };
    // }, []);

    return { selectedPoints, inRef, outRef };
}
