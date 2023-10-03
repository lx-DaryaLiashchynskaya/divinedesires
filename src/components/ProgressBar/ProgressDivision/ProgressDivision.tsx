import './ProgressDivision.scss';
import {memo} from "react";
import {IProgressDivision} from "../../../types/progressBar.types";

export const ProgressDivision =memo((
    {route,divisionStatus,divisionWidth}:IProgressDivision)=>{
    return <div key={route} className={`bar ${divisionStatus}`} style={{width:`${divisionWidth}%`}}/>;
})
