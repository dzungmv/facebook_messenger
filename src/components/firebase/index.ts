import { getApp, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';


const app = initializeApp(
    {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEAUREMENT_ID
    }
);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);




// if (process.env.NODE_ENV === 'development') {

//     connectFirestoreEmulator(db, '127.0.0.1', 8080);
//     connectAuthEmulator(auth, 'http://127.0.0.1:9099');
//     connectStorageEmulator(storage, 'http://127.0.0.1', 9199);


// }





export { auth, db, storage }
export default app;

