// Firebase App (the core Firebase SDK) is always required and must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// Complete SDK -> var firebase = require("firebase");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

//App's Firebase project configuration
var firebaseConfig = {
  /*
   ********** ADD IT LOCALLY **********
   */  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Creates a new ref(push) with a new. Doesn't remove the others
var ref = firebase.database().ref('/usuarios');
var obj = {username:"user6", password:"pass6"};
ref.push(obj);