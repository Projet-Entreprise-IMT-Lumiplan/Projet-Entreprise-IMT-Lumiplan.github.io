// Import the functions we need from firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// https://firebase.google.com/docs/web/setup#available-libraries
//Connection with our firebase page base on apiKey
const firebaseConfig = {
    apiKey: "AIzaSyAqpi_Ngce7eIpiVjYjq3-Kra58mXSSe2I",

    authDomain: "lumos-4786c.firebaseapp.com",

    databaseURL: "https://lumos-4786c-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "lumos-4786c",

    storageBucket: "lumos-4786c.appspot.com",

    messagingSenderId: "1048784963409",

    appId: "1:1048784963409:web:bd290641e2a69b9c4f7570",

    measurementId: "G-KZZDY7FP1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);


/*
const dbRef = ref(db)
function createUsers() {
    get(child(dbRef, 'dataEmployesOutils')).then((snapshot) => {
        //console.log(email)
        snapshot.forEach((idEmploye) => {
            const email= idEmploye.child('AdresseMail').val();
    
            const password = "123456789" //mot de passe par défaut
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    })
    .catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
    
    });;
            signOut(auth);
        });
    }); 
}
createUsers()
*/
