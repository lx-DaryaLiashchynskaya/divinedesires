import {ProgressBarState} from "../constants/onBoardingConstants/progressBar.constants";

export interface IProgressDivision {
    divisionNumber: number,
    divisionWidth: number,
    divisionStatus: ProgressBarState,
    route: string,
}
