import {useTranslation} from "react-i18next";
import {Button} from "../../../components/lego/Button/Button";
import {ButtonThemes} from "../../../constants/button.constants";
import './ConfidentCheckScreen.scss';
import {Link} from "react-router-dom";
import {CURRENT_RELATIONSHIP_ROUTE} from "../../../constants/routes.constants";
import {feelPhysicallyConfident} from "../../../assets/onBoardingPictures";

export const ConfidentCheckScreen =()=>{
    const { t } = useTranslation('onboarding');

    return (
        <>
            <div className={'confidentCheckContainer'}>
                <img src={feelPhysicallyConfident} width={'100%'} alt={''} className={'physicallyConfidentPicture'}/>
                <p className={'confidentCheckQuestion'}>{t("confidentCheckScreen.confidentFeelQuestion")}</p>
            </div>
            <div>
            <div className={'confidentAgreeButton'}>
                <Link to={CURRENT_RELATIONSHIP_ROUTE}>
                    <Button text={t("confidentCheckScreen.agreeButton")} theme={ButtonThemes.DARK} width={100} />
                </Link>
            </div>
            <div className={'confidentDisagreeButton'}>
                <Link to={CURRENT_RELATIONSHIP_ROUTE}>
                    <Button text={t("confidentCheckScreen.disagreeButton")} theme={ButtonThemes.DARK} width={100} />
                </Link>
            </div>
            </div>
        </>
    )
}
