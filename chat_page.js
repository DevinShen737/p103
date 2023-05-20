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
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
  }
