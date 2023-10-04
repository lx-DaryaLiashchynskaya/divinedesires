import {set, ref} from "firebase/database";
import {db} from "../../firebase/firebase.config";

export const writeUserEmailToDatabase=async (userEmail: string,isNewsletterNeeded:boolean) => {
    const userRef = ref(db, "usersEmails/" + userEmail);

    await set(userRef, {
        userEmail,
        isNewsletterNeeded
    });
};

