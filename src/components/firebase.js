import * as firebase from "firebase/app";
import "firebase/database";
// var serviceAccount = require("../notes-268bd-a4276dfc6049.json");
const firebaseConfig = {
    apiKey: "AIzaSyAYqPyiTZOF1cGPP-1CqPNE_iZW8mFFcZE",
    authDomain: "notes-268bd.firebaseapp.com",
    databaseURL: "https://notes-268bd.firebaseio.com",
    projectId: "notes-268bd",
    storageBucket: "notes-268bd.appspot.com",
    messagingSenderId: "333880562893",
    appId: "1:333880562893:web:8110575c3985efc9da4584",
    measurementId: "G-95RZMKPJ11"
  };

const Firebase  = firebase.initializeApp(firebaseConfig);;

export default Firebase;