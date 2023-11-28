import MapPoints from "./constants/MapPoints";
import useMapPoints from "./hooks/useMapPoints";
import { SVGContainer } from "./style";

interface Props {
    selectionInterval?: number;
    selectNum?: number;
}
export default function WorldMap({
    selectionInterval = 2.5,
    selectNum = 50,
}: Props) {
    const { selectedPoints, inRef, outRef } = useMapPoints(selectNum);

    return (
        <SVGContainer
            $selectionInterval={selectionInterval}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1440"
            height="560"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
        >
            <g mask='url("#SvgjsMask1006")' fill="none">
                <rect
                    width="1440"
                    height="560"
                    x="0"
                    y="0"
                    className="background"
                />
                <path
                    d={MapPoints}
                    transform="scale(3.73)"
                    className="inactive"
                />
                <path
                    key={selectedPoints.in}
                    ref={inRef}
                    d={selectedPoints.in}
                    transform="scale(3.73)"
                    className="points-in"
                />

                <path
                    key={selectedPoints.out}
                    ref={outRef}
                    d={selectedPoints.out}
                    transform="scale(3.73)"
                    className="points-out"
                />
            </g>
        </SVGContainer>
    );
}
