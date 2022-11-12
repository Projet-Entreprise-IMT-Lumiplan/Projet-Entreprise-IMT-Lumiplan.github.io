//import {userCredential} from '../index.js';

//const pwd = userCredential.pwd;


   export  const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        /*    
        if(pwd=="collaborateur") {
            document.getElementById("collaborateurs_link").style.display="none";
            document.getElementById("formulaire_link").style.display="none";
            document.getElementById("contrats_link").style.display="none";
        } else if (pwd="manager") {
            document.getElementById("contrats_link").style.display="none";
            document.getElementById("formulaire_link").style.display="none"; 
        } else if (pwd="drh123") {
            document.getElementById("formulaire_link").style.display="none"; 
        }
        */


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

    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))




