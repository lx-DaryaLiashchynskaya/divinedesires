import {frenchFlag, germanFlag, portugalFlag, spainFlag, usaFlag} from "../assets/flags";

export interface ILanguage {
    flagImage:string;
    value:string;
}

export const languages: ILanguage[] = [
    {flagImage: usaFlag, value:'en'},
    {flagImage: portugalFlag, value:'pt'},
    {flagImage: germanFlag, value:'de'},
    {flagImage: spainFlag, value:'es'},
    {flagImage:frenchFlag, value:'fr'},
];
