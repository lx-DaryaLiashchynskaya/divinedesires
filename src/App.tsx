import './App.scss';
import {Header} from "./components/Header/Header";
import {useState} from "react";
import { ThemeContext } from './context/themeContext';
import {getDefaultTheme} from "./utils/theme.utils";
import {OnBoardingAgeCheck} from "./components/OnBoardingAgeCheck/OnBoardingAgeCheck";
import {useTranslation} from "react-i18next";

function App() {
    const [theme, setTheme] = useState(getDefaultTheme);
    const { t } = useTranslation('onboarding');

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
              <div className={`app ${theme}`}>
                  <div className={`appContainer ${theme}`}>
                      <Header />
                      <OnBoardingAgeCheck/>
                      <div className={'ageCheckFooter'}>{t("ageCheckScreen.footerText")}</div>
                  </div>
              </div>
      </ThemeContext.Provider>
  );
}

export default App;
