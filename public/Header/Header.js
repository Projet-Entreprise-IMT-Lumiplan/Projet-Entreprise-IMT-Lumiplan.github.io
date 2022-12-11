import { auth, db } from '../index.js';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, child, update, remove, onValue,get } from "firebase/database";
const emailConnected = ''; //valeur par défaut
const statutEmploye = ''; //statut par défaut

//récupère les données de l'utilisateur connecté
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const emailConnected = user.email;
        //console.log(emailConnected);
    } else {
        // User is signed out
    }
});

//récupère son statut avec la base de donnée


function statut(dbRef, email) {
    /*
    get(ref(db, 'dataEmployeOutils'), (snapshot) => {
        snapshot.forEach((idEmploye) => {
            let id = idEmploye.val();
            const emailId = id.child('Adresse Mail').val();
            console.log(emailId);
            if (emailId == email) {
                return (id.child('Profil'));
            }
        });
    });
    */
    get(child(dbRef, 'dataEmployeOutils/0/Profil')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    /*
    for (const id in child(dbRef,`dataEmployeOutils`).val()){
        const pathData=`dataEmployeOutils/${id}`
        console.log(pathData);
        const emailId = get(child(dbRef, pathData));
        console.log(emailId);
        */
        /*
        if(emailId == email){
            const statutEmploye = get(child(dbRef, pathData)).then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val());
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
        }
        */
        
    } 
   

const dBRef = ref(db);
statut(dBRef, emailConnected);


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const showNavbar = (toggleId, navId, bodyId, headerId) => {
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
    auth.signOut().then(() => {
        console.log('user signed out')
        window.location.replace('../index.html')
    }).catch((error) => {
        console.log('an error happened')
    });

})






