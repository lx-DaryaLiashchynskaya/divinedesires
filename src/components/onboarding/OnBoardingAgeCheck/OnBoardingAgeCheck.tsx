import './OnBoardingAgeCheck.scss';
import {useTranslation} from "react-i18next";
import {AGE_GAPS} from "../../../constants/onBoardingConstants/ageCheck.constants";
import {Button} from "../../lego/Button/Button";
import {ButtonThemes} from "../../../constants/button.constants";
import {Link} from "react-router-dom";
import {HONEST_CHECK_ROUTE} from "../../../constants/routes.constants";



export const OnBoardingAgeCheck =()=>{
    const { t } = useTranslation('onboarding');

    return <div className={'ageCheckContainer'}>
        <h4>{t("login")}</h4>
        <text className={'ageCheckInfo'}>{t("ageCheckScreen.ageCheckInfo")}</text>
        <div className={'ageGapContainer'}>
            {AGE_GAPS.map((gap)=>{
                return <div key={gap} className={'ageGapButton'}>
                    <Link to={HONEST_CHECK_ROUTE}>
                        <Button text={gap} theme={ButtonThemes.DARK} width={100}/>
                    </Link>
                </div>
            })}
        </div>
    </div>
}
