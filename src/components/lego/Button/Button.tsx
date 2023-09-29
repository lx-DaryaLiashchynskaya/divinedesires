import {ButtonThemes} from "../../../constants/button.constants";
import './Button.scss';

interface ButtonProps {
    text:string;
    theme:ButtonThemes;
    width:number
}

export const Button= ({text,theme,width}:ButtonProps)=>{
    return (
        <button className={`button ${theme===ButtonThemes.LIGHT? 'whiteButtonTheme':'redButtonTheme'}`}
                style={{width:`${width}%`}}>
            {text}
        </button>
    )
 }
