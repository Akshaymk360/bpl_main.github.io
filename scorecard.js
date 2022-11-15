// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB739cU750AeoZ25nJ0ZFs5J06U0AGcDMg",
  authDomain: "bpl14y.firebaseapp.com",
  projectId: "bpl14y",
  storageBucket: "bpl14y.appspot.com",
  messagingSenderId: "416612714187",
  appId: "1:416612714187:web:495f2a1ca539bf85f2fd4e",
  measurementId: "G-3GZL1HYS9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function get_scorecard(){
    firebase.database().ref("scorecard").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
        childData = childSnapshot.key;

        sc = childData;

         console.log(sc);
         row = "<div id="+sc+" onclick='redirectToRoomName(this.id)' >#"+ sc +"</div><hr>";
         document.getElementById("output").innerHTML += row;
         console.log(row);



    });  });

}
get_scorecard();
function back1(){
    window.location = "user.html";
}
