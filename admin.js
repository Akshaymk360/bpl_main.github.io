const firebaseConfig = {
    apiKey: "AIzaSyB78BOd8u08o6dhufQ2vgWmTDUxNAfUxvs",
    authDomain: "bplcricket-ba0be.firebaseapp.com",
    databaseURL: "https://bplcricket-ba0be-default-rtdb.firebaseio.com",
    projectId: "bplcricket-ba0be",
    storageBucket: "bplcricket-ba0be.appspot.com",
    messagingSenderId: "644565317207",
    appId: "1:644565317207:web:db2238c2c322723ab1d512"
  };
  

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function submit(){
    var team1 = document.getElementById("teamA").value;
    var team2 = document.getElementById("teamB").value;
    console.log("abc")
    firebase.database().ref("/").child("TeamA").update({
        Team1 : team1
      });
      firebase.database().ref("/").child("TeamB").update({
        Team2 : team2
      });
      document.getElementById("teamA").value = "";
      document.getElementById("teamB").value = "";


}
function team1score() {
    var livescore_a = document.getElementById("livescore1").value;
    firebase.database().ref("/").child("LiveScoreA").update({
        LiveA : livescore_a
      });
      document.getElementById("livescore1").value = "";
}
function team2score() {
    var livescore_b = document.getElementById("livescore2").value;
    firebase.database().ref("/").child("LiveScoreB").update({
        LiveB : livescore_b
      });
      document.getElementById("livescore2").value = "";
}
function desc(){
    var des = document.getElementById("discription").value;
    firebase.database().ref("/").child("Description").update({
        Desc : des
      });
      document.getElementById("discription").value = "";
}
function scorecard(){
    var score_card = document.getElementById("scorecard").value;
    firebase.database().ref("scorecard").child(score_card).update({
        purpose : "adding scorecard"
      });
      document.getElementById("scorecard").value = "";
}
function back2(){
  window.location = "index.html";
}