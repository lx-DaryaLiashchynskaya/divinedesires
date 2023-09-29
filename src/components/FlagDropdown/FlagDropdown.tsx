import './FlagDropdown.scss';
import React, {useState} from "react";
import Select, {StylesConfig} from "react-select";
import {ILanguage, languages} from "../../constants/language.constants";

const defaultLanguage:ILanguage = languages[0];

export const FlagDropdown =()=>{
    const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(defaultLanguage);

    const onLanguageChange=(language:any)=>{
        setSelectedLanguage(language)
    }

    const colourStyles: StylesConfig<ILanguage> = {
        control: (styles) => ({ ...styles,  border:0, backgroundColor: 'white', boxShadow: 'none' }),
        input:(styles) => ({ ...styles,caretColor:'transparent'}),
        valueContainer: (styles) => ({ ...styles,padding:0, backgroundColor: 'white' }),
        option: (styles, { isSelected }) => {
            return {
                ...styles,
                cursor:'pointer',
                backgroundColor: isSelected
                        ? '#cf0a0a'
                            : undefined,

                ':hover': {
                    ...styles[':hover'],
                    backgroundColor: isSelected
                        ? undefined
                        : '\n' +
                        '#fae7e7',
                },
            };
        },
        dropdownIndicator: (styles) => ({ ...styles, padding:'0 5px 0 0', color: '#cf0a0a'}),
        indicatorsContainer: (styles) => ({ ...styles, padding: 0}),
        singleValue: (styles) => ({ ...styles, margin:0 }),
        menu: (styles) => ({ ...styles, margin:'0 0 0 -5px' ,}),
    };

    return (
            <Select
                styles={colourStyles}
                value={selectedLanguage}
                onChange={onLanguageChange}
                options={languages}
                components={{IndicatorSeparator: ()=> null}}
                formatOptionLabel={(language)=><img alt={''} src={language.flagImage} className='flagIcon'/>}
            />
    );
}
