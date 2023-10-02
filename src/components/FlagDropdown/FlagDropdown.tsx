import './FlagDropdown.scss';
import React, {useContext, useState} from "react";
import Select, {StylesConfig} from "react-select";
import {ILanguage, languages} from "../../constants/language.constants";
import {i18n} from "../../i18n";
import {ThemeContext} from "../../context/themeContext";
import {
    AppThemes,
    DARK_THEME,
    LIGHT_THEME,
    PRIMARY_RED_COLOR,
    PRIMARY_RED_COLOR_HOVER
} from "../../constants/theme.constants";

const defaultLanguage:ILanguage = languages[0];

const colourStyles: StylesConfig<ILanguage>={
        control: (styles) => ({...styles, border: 0, boxShadow: 'none',marginTop:'5px',minWidth:'max-content'}),
        input: (styles) => ({...styles, caretColor: 'transparent'}),
        valueContainer: (styles) => ({...styles, padding: 0}),
        dropdownIndicator: (styles) => ({...styles, padding: '0 5px 0 0',}),
        indicatorsContainer: (styles) => ({...styles, padding: 0}),
        singleValue: (styles) => ({...styles, margin: 0}),
        menu: (styles) => ({...styles, margin: '0 0 0 -5px',}),
};

export const FlagDropdown =()=>{
    const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(defaultLanguage);
    const { theme } = useContext(ThemeContext);

    const onLanguageChange=(language:any)=>{
        i18n.changeLanguage(language.value)
        setSelectedLanguage(language)
    }

    return (
            <Select
                styles={colourStyles}
                value={selectedLanguage}
                onChange={onLanguageChange}
                options={languages}
                components={{IndicatorSeparator: ()=> null}}
                formatOptionLabel={(language)=><img alt={''} src={language.flagImage} className='flagIcon'/>}
                theme={(themeView) => ({
                    ...themeView,
                    colors: {
                        ...themeView.colors,
                        primary25: PRIMARY_RED_COLOR_HOVER,
                        primary50: PRIMARY_RED_COLOR_HOVER,
                        primary: PRIMARY_RED_COLOR,
                        neutral0: theme===AppThemes.DARK? DARK_THEME: LIGHT_THEME,
                        neutral20:theme===AppThemes.DARK? LIGHT_THEME: PRIMARY_RED_COLOR
                    },
                })}
            />
    );
}
