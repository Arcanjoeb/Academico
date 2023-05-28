import { initializeApp, getApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

let app
try {
    app = getApp()
} catch (error) {
    const firebaseConfig = {
        apiKey: "FIREBASE_API_KEY",
        authDomain: "FIREBASE_AUTH_DOMAIN",
        databaseURL: "FIREBASE_DATABASE_URL",
        projectId: "FIREBASE_PROJECT_ID",
        storageBucket: "FIREBASE_STORAGE_BUCKET",
        messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
        appId: "FIREBASE_ APP_ID"
    };

    app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db, set, ref }