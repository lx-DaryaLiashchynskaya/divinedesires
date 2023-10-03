import {ProgressBarState} from "../constants/progressBar.constants";

export interface IProgressDivision {
    divisionNumber: number,
    divisionWidth: number,
    divisionStatus: ProgressBarState,
    route: string,
}
