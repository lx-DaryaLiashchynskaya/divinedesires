import {ButtonThemes} from "../../../constants/button.constants";
import './Button.scss';

interface ButtonProps {
    text:string;
    theme:ButtonThemes;
    width:number;
    onClick?: ()=>void;
}

export const Button= ({onClick,text,theme,width}:ButtonProps)=>{
    return (
        <button onClick={onClick} className={`button ${theme===ButtonThemes.LIGHT? 'whiteButtonTheme':'redButtonTheme'}`}
                style={{width:`${width}%`}}>
            {text}
        </button>
    )
 }
