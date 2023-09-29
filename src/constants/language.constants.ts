import {frenchFlag, germanFlag, portugalFlag, spainFlag, usaFlag} from "../assets/flags";

export interface ILanguage {
    flagImage:string;
    locale:string;
}

export const languages: ILanguage[] = [
    {flagImage: usaFlag, locale:'en'},
    {flagImage: portugalFlag, locale:'pt'},
    {flagImage: germanFlag, locale:'de'},
    {flagImage: spainFlag, locale:'es'},
    {flagImage:frenchFlag, locale:'fr'},
];
