const firebaseConfig = {
    apiKey: "AIzaSyBJ7O0XB5tKBKmr72THqqfr1VjC-O-refE",
    authDomain: "cute-bird-69e12.firebaseapp.com",
    databaseURL: "https://cute-bird-69e12-default-rtdb.firebaseio.com",
    projectId: "cute-bird-69e12",
    storageBucket: "cute-bird-69e12.appspot.com",
    messagingSenderId: "273153165210",
    appId: "1:273153165210:web:dd8b3054e513a269c51c23",
    measurementId: "G-VNE5RDXCD7"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    })

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
  } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_name);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}