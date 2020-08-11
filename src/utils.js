import { STRIPES_BRIGHT, STRIPES } from "./constants"
import { isMobile } from "react-device-detect"

export const getStripes = (isDay) => {
    if(isMobile){
        return isDay ? STRIPES_BRIGHT : STRIPES
    }
    return null;
}