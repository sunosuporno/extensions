// window.onload = function() {
//     document.querySelector('button').addEventListener('click', function() {
//       chrome.identity.getAuthToken({interactive: true}, function(token) {
//         console.log(token);
//       });
//     });
//   };

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCs8gaUOxWXyTyh-xziSSWIeAal35t43K4",
    authDomain: "my-first-extension-1d15f.firebaseapp.com",
    projectId: "my-first-extension-1d15f",
    storageBucket: "my-first-extension-1d15f.appspot.com",
    messagingSenderId: "281690457391",
    appId: "1:281690457391:web:980e6f366d32cb04454dda",
  };


firebase.initializeApp(config);

chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    // Use the token.
    console.log(token);
  });

var provider = new firebase.auth.GoogleAuthProvider();

document.getElementById("signIn").addEventListener("click", function () {
  firebase.auth().signInWithRedirect(provider);
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementsById("userName").innerHTML =
      "Hello, " + user.email;
  } else {
    // User is signed out
    // ...
  }
});
