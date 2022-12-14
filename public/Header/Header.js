import { auth, db } from '../index.js';
//import {user} from '../authentification/AuthBackend.js';
import { signOut, onAuthStateChanged, getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, set, child, update, remove, onValue,get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



//récupère les données de l'utilisateur connecté
const dBRef=ref(db);
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        userEmail=user.email;
        window.sessionStorage.setItem("userMail",userEmail);
        console.log(userEmail);
        //getEmail(user.email);
    } else {
        // User is signed out
    }
});
//récupère son statut avec la base de donnée
function statut(dbRef,email) {
    var userStatut="";
    get(child(dbRef,'dataEmployesOutils')).then((snapshot) => {
        //console.log(email)
        snapshot.forEach((idEmploye)=>{
            const emailId = idEmploye.child('AdresseMail').val();
            if(emailId==email){
                userStatut=idEmploye.child('Profil').val();
                window.sessionStorage.setItem("role",userStatut);
                console.log(window.sessionStorage.getItem("role"));
            }else{
                console.log("diff");
            }
        });
    });  
    } 

var userEmail =window.sessionStorage.getItem("userMail");
statut(dBRef,userEmail);
var statutEmploye=window.sessionStorage.getItem("role");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const showNavbar = (statut, navId, bodyId, headerId) => {
    const nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

    
   if(statut=="Collaborateur") {
       document.getElementById("collaborateurs_link").style.display="none";
       document.getElementById("formulaire_link").style.display="none";
   } else if (statut=="Manager" || statut=="Dsi") {
       document.getElementById("collaborateurs_link").style.display="none"; 
   }
   
            
}

showNavbar(statutEmploye, 'nav-bar', 'body-pd', 'header')

/*===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

/* LOG OUT */
const logoutButton = document.querySelector('#logOut');

logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out')
        window.location.replace('../index.html')
    }).catch((error) => {
        console.log('an error happened')
    });

})






