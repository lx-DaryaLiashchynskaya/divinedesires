import {useTranslation} from "react-i18next";
import {Button} from "../../../components/lego/Button/Button";
import {ButtonThemes} from "../../../constants/button.constants";
import {Link} from "react-router-dom";
import './RelationshipIssueScreen.scss';

export const RelationshipIssueScreen =()=>{
    const { t } = useTranslation('onboarding');

    const relationshipIssuesOptions:string[]= [
        t("relationshipIssuesScreen.noCommonInterestsIssueText"),
        t("relationshipIssuesScreen.understandingIssueText"),
        t("relationshipIssuesScreen.domesticIssueText"),
        t("relationshipIssuesScreen.boredomIssueText"),
        t("relationshipIssuesScreen.interestIssueText"),];

    return (
        <>
            <div className={'relationshipIssueContainer'}>
                <h6 className={'relationshipIssueQuestion'}>{t("relationshipIssuesScreen.question")}</h6>
            </div>
            <div>
                {relationshipIssuesOptions.map((optionText)=>{
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
