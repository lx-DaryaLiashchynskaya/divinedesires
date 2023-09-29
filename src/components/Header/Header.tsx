import './Header.scss';
import {FlagDropdown} from "../FlagDropdown/FlagDropdown";
import {useTranslation} from "react-i18next";
import {AppTheme} from "../AppTheme/AppTheme";

export const Header =()=>{
    const { t } = useTranslation('onboarding');

      return <header className="header">
          {t("logo")}
          <div className={'headerIconsContainer'}>
            <FlagDropdown/>
            <AppTheme/>
          </div>
      </header>
 }
