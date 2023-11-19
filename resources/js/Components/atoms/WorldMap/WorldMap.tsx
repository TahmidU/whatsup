import MapPoints from "./constants/MapPoints";
import useMapPoints from "./hooks/useMapPoints";

interface Props {}
export default function WorldMap({}: Props) {
    const { selectedPoints } = useMapPoints(3000);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            // xmlns:svgjs="http://svgjs.dev/svgjs"
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
                    fill="rgba(22, 23, 27, 1)"
                ></rect>
                <path
                    d={MapPoints}
                    transform="scale(3.73)"
                    fill="rgba(30, 31, 35, 1)"
                ></path>
                <path
                    d={selectedPoints}
                    transform="scale(3.73)"
                    fill="#ffffff"
                ></path>
            </g>
            <defs>
                <mask id="SvgjsMask1006">
                    <rect width="1440" height="560" fill="#ffffff"></rect>
                </mask>
            </defs>
        </svg>
    );
}
