import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
        // apiKey: process.env.REACT_APP_apiKey,
        // authDomain: process.env.REACT_APP_authDomain,
        // databaseURL: process.env.REACT_APP_databaseURL,
        // projectId: process.env.REACT_APP_projectId,
        // storageBucket: process.env.REACT_APP_storageBucket,
        // messagingSenderId: process.env.REACT_APP_messagingSenderId,
        // appId: process.env.REACT_APP_appId,
        // measurementId: process.env.REACT_APP_measurementId
    apiKey: "AIzaSyBf1zp5xcyjGggR2UqIa4p-_yOdWvp6cQg",
    authDomain: "divinedesires-436c5.firebaseapp.com",
    databaseURL: "https://divinedesires-436c5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "divinedesires-436c5",
    storageBucket: "divinedesires-436c5.appspot.com",
    messagingSenderId: "195408292524",
    appId: "1:195408292524:web:502d86350ac24761114d09",
    measurementId: "G-M69QN8FE1Y"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const db = getDatabase();
