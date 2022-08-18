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