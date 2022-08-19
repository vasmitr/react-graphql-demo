import { Units } from "../../types"

export const getUnitsSymbol = (units: Units): string => {
    switch(units) {
        case 'imperial':
            return '\u2109'
        case 'kelvin':
            return '\u212A'
        default:
            return '\u2103'
    }
}

export const getClouds = (clouds: number): [string, string] => {
    if (clouds < 10) return ['\u2600', 'Sunny'];
    if (clouds > 10 && clouds < 50) return ['\u26c5', 'Party Cloudy'];
    return ['\u2601', 'Cloudy']
}

// https://stackoverflow.com/a/36475516
export function getWindDirection(deg: number) {
    if (deg > 337.5) return 'N';
    if (deg > 292.5) return 'NW';
    if (deg > 247.5) return 'W';
    if (deg > 202.5) return 'SW';
    if (deg > 157.5) return 'S';
    if (deg > 122.5) return 'SE';
    if (deg > 67.5) return 'E';
    if (deg > 22.5) return 'NE';
    return 'N';
}