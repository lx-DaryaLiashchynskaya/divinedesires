import './AgeCheckScreen.scss';
import {useTranslation} from "react-i18next";
import {OnBoardingAgeCheck} from "../../components/OnBoardingAgeCheck/OnBoardingAgeCheck";

export const AgeCheckScreen =()=>{
    const { t } = useTranslation('onboarding');

    return (
    <>
        <OnBoardingAgeCheck/>
        <footer className={'ageCheckFooter'}>{t("ageCheckScreen.footerText")}</footer>
    </>
    )
}
