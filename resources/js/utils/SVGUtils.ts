export function separatePathPoints(svgPoints: string) {
    const regex = /(?=M)/g;

    return svgPoints.split(regex);
}

export default { separatePathPoints };
