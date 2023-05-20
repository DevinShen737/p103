// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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
  


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}



