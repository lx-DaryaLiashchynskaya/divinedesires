import {useTranslation} from "react-i18next";
import {beforeBeginPicture} from "../../../assets/onBoardingPictures";
import {Button} from "../../../components/lego/Button/Button";
import {ButtonThemes} from "../../../constants/button.constants";
import './HonestCheckScreen.scss';
import {Link} from "react-router-dom";
import {TEST_BEGINNING_ROUTE} from "../../../constants/routes.constants";

export const HonestCheckScreen =()=>{
    const { t } = useTranslation('onboarding');

    return (
        <>
            <div className={'honestCheckContainer'}>
                <img src={beforeBeginPicture} width={'100%'} alt={''} className={'beforeBeginPicture'}/>
                <h4 className={'honestCheckTitle'}>{t("honestCheckScreen.beforeBeginTitle")}</h4>
                <p className={'honestCheckText'}>{t("honestCheckScreen.beforeBeginInfo")}</p>
                <h6 className={'honestCheckQuestion'}>{t("honestCheckScreen.beforeBeginQuestion")}</h6>
            </div>
            <div className={'agreeButton'}>
                <Link to={TEST_BEGINNING_ROUTE}>
                    <Button text={t("honestCheckScreen.agreeButtonText")} theme={ButtonThemes.DARK} width={100} />
                </Link>
            </div>
        </>
    )
}
