import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

// You can reference the root or child location in your Database by calling firebase.database().ref() or firebase.database().ref("child/path").
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// will overwrite the whole root
// database.ref().set('this is my data');
// database.ref('age').set(27);
// call to set() is asynchronous