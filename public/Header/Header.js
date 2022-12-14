import { auth, db } from '../index.js';
import { signOut, onAuthStateChanged, getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, set, child, update, remove, onValue,get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



//récupère les données de l'utilisateur connecté
var userStatut;
var userEmail;
const dBRef=ref(db,'dataEmployesOutils');

onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            userEmail=user.email;
            console.log(userEmail);
            getEmail(user.email);
        } else {
            // User is signed out
        }
    });

function getEmail(email){
    userEmail=email;
    console.log('test');
}

//récupère son statut avec la base de donnée


function statut(dbRef, email) {
    console.log(email);
    onValue(dbRef, (snapshot) => {
        //console.log(email)
        snapshot.forEach((idEmploye)=>{
            const emailId = idEmploye.child('Adresse mail').val();
            if (emailId == email) {
                //console.log(emailId);
                userStatut=idEmploye.child('Profil').val();
            }
        });
    });    
    } 

statut(dBRef, userEmail);


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const showNavbar = (statut, navId, bodyId, headerId) => {
    const nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

    
   if(statut=="collaborateur") {
       document.getElementById("collaborateurs_link").style.display="none";
       document.getElementById("formulaire_link").style.display="none";
   } else if (statut="manager") {
       document.getElementById("formulaire_link").style.display="none"; 
   } else if (statut="dsi") {
       document.getElementById("formulaire_link").style.display="none"; 
   }
   


   /*
    // Validate that all variables exist
    
            toggle.addEventListener('click', () => {
                // show navbar
                console.log("clique");
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('close')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
    */
            
}

showNavbar(userStatut, 'nav-bar', 'body-pd', 'header')

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






