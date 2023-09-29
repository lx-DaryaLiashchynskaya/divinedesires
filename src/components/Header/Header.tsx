import './Header.scss';
import {darkThemeIcon} from "../../assets/themeIcons";
import {FlagDropdown} from "../FlagDropdown/FlagDropdown";
import {useTranslation} from "react-i18next";

export const Header =()=>{
    const { t } = useTranslation('onboarding');

      return <header className="appHeader">
          {t("logo")}
          <div className={'headerIconsContainer'}>
            <FlagDropdown/>
            <img alt={""} src={darkThemeIcon} className={"themeIcon"} />
          </div>
      </header>
 }
