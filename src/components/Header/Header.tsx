import './Header.scss';
import {darkThemeIcon} from "../../assets/themeIcons";
import {FlagDropdown} from "../FlagDropdown/FlagDropdown";
import {APP_NAME} from "../../constants/app.constants";

export const Header =()=>{

      return <header className="appHeader">
          {APP_NAME}
          <div className={'headerIconsContainer'}>
            <FlagDropdown/>
            <img alt={""} src={darkThemeIcon} className={"themeIcon"} />
          </div>
      </header>
 }
