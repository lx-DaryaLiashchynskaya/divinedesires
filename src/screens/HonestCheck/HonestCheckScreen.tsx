import {useTranslation} from "react-i18next";
import {beforeBeginPicture} from "../../assets/onBoardingPictures";

export const HonestCheckScreen =()=>{
    const { t } = useTranslation('onboarding');

    return (
        <>
            <img src={beforeBeginPicture} width={'100%'} alt={''}/>
            <div className={'ageCheckFooter'}>{t("ageCheckScreen.footerText")}</div>
        </>
    )
}
