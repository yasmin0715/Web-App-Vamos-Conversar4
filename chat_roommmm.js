const firebaseConfig = {
    apiKey: "AIzaSyCOuT3fNEkSFwKhw-tuid2aEneG63o6j-A",
    authDomain: "kwitter-bf70e.firebaseapp.com",
    databaseURL: "https://kwitter-bf70e-default-rtdb.firebaseio.com",
    projectId: "kwitter-bf70e",
    storageBucket: "kwitter-bf70e.appspot.com",
    messagingSenderId: "664324081171",
    appId: "1:664324081171:web:48eeb03132f913bb8d61e6",
    measurementId: "G-65HGNVXPJ6"
  };
  document.getElementById("user_name").innerHTML = "Bem-vindo(a)"
  + user_name + "!";

  function getData()
  {
    firebaseConfig.database().ref("/").on('value', function(snapshot)
    {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot)  {childKey =
      childSnapshot.key;
                         Room_names = childKey;

      
    });

    });
  }
    getData();