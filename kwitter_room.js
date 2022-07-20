const firebaseConfig = {
    apiKey: "AIzaSyB-HTB5MesthoCNe5ul_axj0HShIxbV6tM",
    authDomain: "c93-homework-52321.firebaseapp.com",
    projectId: "c93-homework-52321",
    storageBucket: "c93-homework-52321.appspot.com",
    messagingSenderId: "253766357712",
    appId: "1:253766357712:web:d102523c1c68b4248ec4d5"
  };

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
