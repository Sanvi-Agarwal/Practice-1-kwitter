// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7EM5zWdSo2qm-aikwiwEgy90Wg8wGitY",
    authDomain: "kwitter-d705f.firebaseapp.com",
    databaseURL: "https://kwitter-d705f-default-rtdb.firebaseio.com",
    projectId: "kwitter-d705f",
    storageBucket: "kwitter-d705f.appspot.com",
    messagingSenderId: "271703115762",
    appId: "1:271703115762:web:aed2490c8dea1609848d6b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
