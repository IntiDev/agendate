// Initialize Firebase
var config = {
  apiKey: "AIzaSyDclk8ZBGokJpdj88gomcAimrATSa_ab7I",
  authDomain: "agendateapp-b7875.firebaseapp.com",
  databaseURL: "https://agendateapp-b7875.firebaseio.com",
  projectId: "agendateapp-b7875",
  storageBucket: "",
  messagingSenderId: "887639027482"
};
firebase.initializeApp(config);
var reubicar = function (){
  if(document.referrer == "https://memecast.github.io/agendate/"){
    location.href = "https://memecast.github.io/agendate/assets/views/calendarioUsuario.html";
  }else if( document.referrer == "https://memecast.github.io/agendate/assets/views/agendaDiaria.html"){
    location.href = document.referrer;
    $("#btn-InicioSesion").addClass("disabled");
  }
}
  // }else if (document.referrer == "https://memecast.github.io/agendate/assets/views/agendaDiaria.html") {
  //   location.href = document.referrer;
  // }else if (document.referrer == "http://localhost:5000/assets/views/agendaDiaria.html") {
  //   location.href = document.referrer;
  // }

var logGoogle = function (){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  localStorage.setItem("email",user.email);
  localStorage.setItem("displayName",user.displayName);
  // if(location.origin == "https://localhost:5000")
  console.log(document.referrer);
  reubicar();
  // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });}
var iniciarOutlook = function (){
  console.log('en proceso');
}

$(document).ready(function(){
  $(document).on('click','#GoogleAuth',logGoogle);
  $(document).on('click','#OutlookAuth', iniciarOutlook);
});
