import './ProgressBar.scss';
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {PROGRESS_BAR_ROUTES, ProgressBarState} from "../../constants/progressBar.constants";
import {ProgressDivision} from "./ProgressDivision/ProgressDivision";
import {getProgressDivisionsInitialState} from "../../utils/progressBar.utils";
import {IProgressDivision} from "../../types/progressBar.types";

export const ProgressBar =()=>{
    const location=useLocation();
    const [progressDivisions, setProgressDivisions]=useState<IProgressDivision[]>(getProgressDivisionsInitialState())

    useEffect(()=>{
        if(PROGRESS_BAR_ROUTES.includes(location.pathname)) {
           const divisionInfo= progressDivisions.find((progressDivision)=>progressDivision.route===location.pathname)

            const arr = progressDivisions.reduce((prevDivisions,division)=>{
               if(divisionInfo&&division.divisionNumber<=divisionInfo.divisionNumber&&divisionInfo.divisionStatus===ProgressBarState.UNFILLED) {
                   prevDivisions.push({...division,divisionStatus:ProgressBarState.FILLED})
               } else {
                   prevDivisions.push(division)
               }

               return prevDivisions
            },[] as IProgressDivision[])

            setProgressDivisions(arr)
        }
    },[location.pathname])

    return (<>
            <div className={'divisionsContainer'}>
                {progressDivisions.map(({route,divisionNumber,divisionWidth,divisionStatus})=>{
                    return <ProgressDivision key={divisionNumber} divisionNumber={divisionNumber} divisionWidth={divisionWidth} divisionStatus={divisionStatus} route={route} />
                })}
            </div>
        </>
    );
}
