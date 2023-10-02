import {useTranslation} from "react-i18next";
import {beforeBeginPicture} from "../../assets/onBoardingPictures";
import {Button} from "../../components/lego/Button/Button";
import {ButtonThemes} from "../../constants/button.constants";
import './HonestCheckScreen.scss';

export const HonestCheckScreen =()=>{
    const { t } = useTranslation('onboarding');

    const getAgreeButtonText=()=>{
        return t("honestCheckScreen.agreeButtonText")
    }

    return (
        <>
            <div className={'honestCheckContainer'}>
                <img src={beforeBeginPicture} width={'100%'} alt={''} className={'beforeBeginPicture'}/>
                <h4 className={'honestCheckTitle'}>{t("honestCheckScreen.beforeBeginTitle")}</h4>
                <p className={'honestCheckText'}>{t("honestCheckScreen.beforeBeginInfo")}</p>
                <h6 className={'honestCheckQuestion'}>{t("honestCheckScreen.beforeBeginQuestion")}</h6>
            </div>
            <div className={'agreeButton'}>
            <Button text={getAgreeButtonText()} theme={ButtonThemes.DARK} width={100} />
            </div>
        </>
    )
}
