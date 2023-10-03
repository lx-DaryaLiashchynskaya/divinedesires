import {
    PROGRESS_BAR_ROUTES,
    ProgressBarState
} from "../constants/progressBar.constants";
import {IProgressDivision} from "../types/progressBar.types";

export const getProgressDivisionsInitialState=():IProgressDivision[]=>{
    const containerPercentWidth=100;
    const amountOfDivisions=PROGRESS_BAR_ROUTES.length;

    return Array.from(PROGRESS_BAR_ROUTES,
        (route,i)=> ({
            route: route,
            divisionNumber: i+1,
            divisionWidth: containerPercentWidth / amountOfDivisions,
            divisionStatus: ProgressBarState.UNFILLED
        }))
}
