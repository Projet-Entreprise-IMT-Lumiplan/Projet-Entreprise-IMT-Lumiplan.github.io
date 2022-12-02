import {auth, db} from '../index.js';
import {signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

/*
//récupère les données
onAuthStateChanged(auth, (user)=>{
    if(user){
        //user sign in 
        uid=user.uid;
        console.log(uid)
    }else{
        //user sign out
    }
})
*/


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


   export  const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

         /*  
        if(email=="collaborateur@gmail.com") {
            document.getElementById("collaborateurs_link").style.display="none";
            document.getElementById("formulaire_link").style.display="none";
            document.getElementById("contrats_link").style.display="none";
        } else if (email="manager@gmail.com") {
            document.getElementById("contrats_link").style.display="none";
            document.getElementById("formulaire_link").style.display="none"; 
        } else if (email="drh@gmail.com") {
            document.getElementById("formulaire_link").style.display="none"; 
        }
        */
        


        // Validate that all variables exist
/*
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

    showNavbar('nav-bar', 'body-pd', 'header')

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
    auth.signOut().then(()=>{
        console.log('user signed out')
        window.location.replace('../index.html')
    }).catch((error)=>{
        console.log('an error happened')
    });

})






