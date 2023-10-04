import {useTranslation} from "react-i18next";
import {candorCheck} from "../../../assets/onBoardingPictures";
import {Button} from "../../../components/lego/Button/Button";
import {ButtonThemes} from "../../../constants/button.constants";
import './CandorCheckScreen.scss';
import {Link} from "react-router-dom";

export const CandorCheckScreen =()=>{
    const { t } = useTranslation('onboarding');

    return (
        <>
            <div className={'candorCheckContainer'}>
                <img src={candorCheck} width={'100%'} alt={''} className={'candorCheckPicture'}/>
                <h4 className={'candorCheckTitle'}>{t("candorCheckScreen.title")}</h4>
                <p className={'candorCheckText'}>{t("candorCheckScreen.supportText")}</p>
            </div>
            <div className={'candorCheckAgreeButton'}>
                <Link to={'/'}>
                    <Button text={t("candorCheckScreen.agreeButton")} theme={ButtonThemes.DARK} width={100} />
                </Link>
            </div>
        </>
    )
}
