import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBPJ9qdPiknEvgvWuBsX0ChKijRC1_XuG4",
   authDomain: "goalcoach-e6d04.firebaseapp.com",
   databaseURL: "https://goalcoach-e6d04.firebaseio.com",
   projectId: "goalcoach-e6d04",
   storageBucket: "goalcoach-e6d04.appspot.com",
   messagingSenderId: "527226998459"
};

export const firebaseApp = firebase.initializeApp(config);
