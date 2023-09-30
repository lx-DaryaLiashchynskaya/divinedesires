import './OnBoardingAgeCheck.scss';
import {useTranslation} from "react-i18next";
import {AGE_GAPS} from "../../constants/onBoardingConstants/ageCheck.constants";
import {Button} from "../lego/Button/Button";
import {ButtonThemes} from "../../constants/button.constants";

export const OnBoardingAgeCheck =()=>{
    const { t } = useTranslation('onboarding');

    return <div className={'ageCheckContainer'}>
        <h4>{t("login")}</h4>
        <span className={'ageCheckInfo'}>{t("ageCheckScreen.ageCheckInfo")}</span>
        <div className={'ageGapContainer'}>
            {AGE_GAPS.map((gap)=>{
                return <div key={gap} className={'ageGapButton'}>
                    <Button text={gap} theme={ButtonThemes.DARK} width={100}/>
                </div>
            })}
        </div>
    </div>
}
