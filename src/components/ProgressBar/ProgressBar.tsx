import './ProgressBar.scss';
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {PROGRESS_BAR_ROUTES, ProgressBarState} from "../../constants/onBoardingConstants/progressBar.constants";
import {ProgressDivision} from "./ProgressDivision/ProgressDivision";
import {getProgressDivisionsInitialState} from "../../utils/progressBar.utils";
import {IProgressDivision} from "../../types/progressBar.types";

export const ProgressBar =()=>{
    const location=useLocation();
    const [progressDivisions, setProgressDivisions]=useState<IProgressDivision[]>(getProgressDivisionsInitialState())
    const [isProgressBarVisible,setIsProgressBarVisible]=useState(false)

    const getProgressBarVisibility=(location:string,routes:string[])=>{
        return routes.includes(location)
    }

    useEffect(()=>{
        if(getProgressBarVisibility(location.pathname,PROGRESS_BAR_ROUTES)) {
           const divisionInfo= progressDivisions.find((progressDivision)=>progressDivision.route===location.pathname)

            const arr = progressDivisions.reduce((prevDivisions,division)=>{
                const isQuestionWasPassedBefore = divisionInfo && division.divisionNumber<divisionInfo.divisionNumber

                if (isQuestionWasPassedBefore && divisionInfo.divisionStatus===ProgressBarState.UNFILLED) {
                   prevDivisions.push({...division,divisionStatus:ProgressBarState.FILLED})
                } else {
                   prevDivisions.push(division)
               }

               return prevDivisions;
            },[] as IProgressDivision[])

            setProgressDivisions(arr)
            setIsProgressBarVisible(true)
        } else {
            setIsProgressBarVisible(false)
        }
    },[location.pathname])

    return (<>
            {isProgressBarVisible ?
                <div className={'divisionsContainer'}>
                {progressDivisions.map(({route,divisionNumber,divisionWidth,divisionStatus})=>{
                    return <ProgressDivision key={divisionNumber} divisionNumber={divisionNumber} divisionWidth={divisionWidth} divisionStatus={divisionStatus} route={route} />
                })}
                </div>
                :null}
        </>
    );
}
