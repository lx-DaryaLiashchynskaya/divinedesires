import {Trans, useTranslation} from "react-i18next";
import {hundredsOfThousands} from "../../assets/onBoardingPictures";
import {Button} from "../../components/lego/Button/Button";
import {ButtonThemes} from "../../constants/button.constants";
import './TestBeginningScreen.scss';

export const TestBeginningScreen =()=>{
    const { t } = useTranslation('onboarding');

    const getContinueButtonText=()=>{
        return t("testBeginningScreen.continueButton")
    }

    return (
        <>
            <div className={'testBeginningContainer'}>
                <img src={hundredsOfThousands} width={'100%'} alt={''} className={'hundredsOfThousandsPicture'}/>
                <h2 className={'testBeginningTitle'}>{t("testBeginningScreen.introductoryTitle").toString().toUpperCase()}</h2>
                <p className={'testBeginningText'}>
                    <Trans t={t}>{t("testBeginningScreen.introductoryText")}</Trans>
                </p>
            </div>
            <div className={'continueButton'}>
                <Button text={getContinueButtonText()} theme={ButtonThemes.DARK} width={100} />
            </div>
        </>
    )
}
