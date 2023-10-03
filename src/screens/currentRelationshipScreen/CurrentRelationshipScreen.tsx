import {useTranslation} from "react-i18next";
import {Button} from "../../components/lego/Button/Button";
import {ButtonThemes} from "../../constants/button.constants";
import './CurrentRelationshipScreen.scss';
import {Link} from "react-router-dom";
import {currentRelationship} from "../../assets/onBoardingPictures";

export const CurrentRelationshipScreen =()=>{
    const { t } = useTranslation('onboarding');

    const currentRelationshipAnswerOptions:string[]= [
        t("currentRelationshipScreen.breakingUpStageButton"),
        t("currentRelationshipScreen.perfectStageButton"),
        t("currentRelationshipScreen.difficultQuestionButton")];

    return (
        <>
            <div className={'currentRelationshipContainer'}>
                <img src={currentRelationship} width={'100%'} alt={''} className={'currentRelationshipPicture'}/>
                <p className={'currentRelationshipQuestion'}>{t("currentRelationshipScreen.stageCheckQuestion")}</p>
            </div>
            <div>
                {currentRelationshipAnswerOptions.map((optionText)=>{
                    return <div key={optionText} className={'currentRelationshipAnswerButton'}>
                        <Link to={'/'}>
                            <Button text={optionText} theme={ButtonThemes.DARK} width={100} />
                        </Link>
                    </div>
                })}
            </div>
        </>
    )
}
