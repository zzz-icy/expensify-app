import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyApwUCkN6w80z1xyYdsYg_6UUG7P3JI65k",
    authDomain: "expensify-b4728.firebaseapp.com",
    databaseURL: "https://expensify-b4728.firebaseio.com",
    projectId: "expensify-b4728",
    storageBucket: "expensify-b4728.appspot.com",
    messagingSenderId: "1029321087805"
};

firebase.initializeApp(config);

// You can reference the root or child location in your Database by calling firebase.database().ref() or firebase.database().ref("child/path").
const database = firebase.database();

// will overwrite the whole root
// database.ref().set('this is my data');
// database.ref('age').set(27);
// call to set() is asynchronous