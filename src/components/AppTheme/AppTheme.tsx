import {darkThemeIcon, lightThemeIcon} from "../../assets/themeIcons";
import {useContext} from "react";
import './AppTheme.scss';
import {ThemeContext} from "../../context/themeContext";
import {AppThemes} from "../../constants/theme.constants";

export const AppTheme =()=>{
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        const isCurrentDark = theme === AppThemes.DARK;

        setTheme(isCurrentDark ? AppThemes.LIGHT : AppThemes.DARK);

        localStorage.setItem('theme', isCurrentDark ? AppThemes.LIGHT : AppThemes.DARK);
    };

    return <img alt={""} onClick={handleThemeChange}
                src={theme===AppThemes.DARK ? lightThemeIcon : darkThemeIcon}
                className={"themeIcon"} />

}
