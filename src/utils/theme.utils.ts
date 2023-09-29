import {AppThemes} from "../constants/theme.constants";

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? AppThemes.DARK : AppThemes.LIGHT;
    return localStorageTheme || browserDefault;
};
