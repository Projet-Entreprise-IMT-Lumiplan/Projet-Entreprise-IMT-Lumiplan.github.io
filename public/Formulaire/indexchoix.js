// Charger les formulaires à l'ouverture de la page
window.onload = function(){
    fetch('formulairespourgit.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(response => response.ok ? response.json(): null)
    .then(value => afficherecherche(value, "")) // On fait afficher les collaborateurs
    .catch(err => document.getElementById('zone0').innerHTML = err);

    // Permet de fermer un onglet de formulaire
    document.getElementById("h1.0").addEventListener("click", function(){
        document.getElementById("zone0").innerHTML = null;
    });
    document.getElementById("h1.1").addEventListener("click", function(){
        document.getElementById("zone1").innerHTML = null;
    });
    document.getElementById("h1.2").addEventListener("click", function(){
        document.getElementById("zone2").innerHTML = null;
    });
    document.getElementById("h1.3").addEventListener("click", function(){
        document.getElementById("zone3").innerHTML = null;
    });
    document.getElementById("h1.4").addEventListener("click", function(){
        document.getElementById("zone4").innerHTML = null;
    });
};

// Modifier les formulaire à concerver lors d'une recherche par Nom Prénom
document.getElementById("searchInput").addEventListener('input', function(event){
    const valeur = event.target.value; // Valeur rentré lors de la recherche
    fetch('formulairespourgit.json', { // La base de donné étant peu importante on peut se permettre de se reconnecter à chaque modification de la recherche
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(response => response.ok ? response.json(): null)
    .then(value => afficherecherche(value, valeur)) // On fait afficher les collaborateurs recherchés
    .catch(err => document.getElementById('Personne').innerHTML = err);
});

// Affiche les formulaires des collaborateurs ayant 'valeur' dans leur Nom Prénom
function afficherecherche(value, valeur){
    // On remet toutes les zones à zero
    const zone0 = document.getElementById('zone0');
    const zone1 = document.getElementById('zone1');
    const zone2 = document.getElementById('zone2');
    const zone3 = document.getElementById('zone3');
    const zone4 = document.getElementById('zone4');
    zone0.innerHTML = null;
    zone1.innerHTML = null;
    zone2.innerHTML = null;
    zone3.innerHTML = null
    zone4.innerHTML = null;

    // On test pour chaque collaborateur s'il a 'valeur' dans son Nom Prénom
    for (let j=0; j<value.length; j++){
        // On crée une ExpressionRégulière, 'i' permet de ne pas tenir compte des MAJUSCULES
        var regex = new RegExp('([a-z]{0,})' + valeur + '([a-z]{0,})', 'i');
        // On test Nom Prénom mais également Prénom Nom
        let nomprenom = value[j]["Nom"] + " " + value[j]["Prenom"];
        let prenomnom = value[j]["Prenom"] + " " + value[j]["Nom"];
        if (nomprenom.match(regex) || prenomnom.match(regex)){
            // S'il est recherché on affiche avec la méthode habituelle
            const poster = document.createElement("div");
            poster.setAttribute("id", value[j]["ID"]);
            poster.setAttribute("class", "poster");
            let nom = (value[j]["Nom"]).toUpperCase(); // On normalise en NOM Prenom
            let prenom = (value[j]["Prenom"]).charAt(0).toUpperCase() + (value[j]["Prenom"]).substring(1).toLowerCase();
            poster.innerHTML = nom + " " + prenom;

            if(value[j]["Etat"] == 0){
                poster.addEventListener("click", function(event){
                    event.preventDefault();
                    afficherformulaire(poster.getAttribute("id"));
                });
                zone0.appendChild(poster);
            } else if (value[j]["Etat"] == 1){
                poster.addEventListener("click", function(event){
                    event.preventDefault();
                    afficherpopup1(poster.getAttribute("id"));
                });
                zone1.appendChild(poster);
            } else if (value[j]["Etat"] == 2) {
                poster.addEventListener("click", function(event){
                    event.preventDefault();
                    afficherpopup2(poster.getAttribute("id"));
                })
                zone2.appendChild(poster);
            } else if (value[j]["Etat"] == 3) {
                poster.addEventListener("click", function(event){
                    event.preventDefault();
                    afficherpopup3(poster.getAttribute("id"));
                })
                zone3.appendChild(poster);
            } else if (value[j]["Etat"] == 4) {
                poster.addEventListener("click", function(event){
                    event.preventDefault();
                    afficherformulairs(poster.getAttribute("id"));
                })
                zone4.appendChild(poster);
            }
        }
    }
}

// Permet à la page d'afficher le formulaire d'entré
function afficherformulaire(id){
    // Passer la valeur "En lecture" à 1
    // Open Formulaire
    window.open('formulaire_final.html');
};

// Permet à la page d'afficher le formulaire d'entré
function afficherformulairs(id){
    // Passer la valeur "En lecture" à 1
    // Open Formulaire
    window.open('formulaire_final.html');
};

// Permet d'afficher un pop-up pour choisir entre le formulaire ou le workflow
function afficherpopup1(id){
    afficherpopup();
    const btngauche = document.getElementById("btngauche");
    btngauche.innerHTML = "Edition Formulaire";
    btngauche.addEventListener("click", function(event){
        event.preventDefault();
        // Passer la valeur "En lecture" à 1
        // Open Formulaire
        window.open('formulaire_final.html');
    });
    const btndroit = document.getElementById("btndroit");
    btndroit.innerHTML = "Accès workflow";
    btndroit.addEventListener("click", function(event){
        event.preventDefault();
        // Passer la valeur "En lecture" à 1
        // Open Workflow
        window.open('workflow.html'); // Ouvre le workflow dans un nouvel onglet
    });
    placerpopup();
};

// Permet d'afficher un pop-up pour choisir entre le formulaire d'entré ou de sortie
function afficherpopup2(id){
    afficherpopup();
    const btngauche = document.getElementById("btngauche");
    btngauche.innerHTML = "Consulter Formulaire d'entré";
    btngauche.addEventListener("click", function(event){
        event.preventDefault();
        // Passer la valeur "En lecture" à 1
        // Open Formulaire d'entré
        window.open('formulaire_final.html');
    });
    const btndroit = document.getElementById("btndroit");
    btndroit.innerHTML = "Commencer le Formulaire de sortie";
    btndroit.addEventListener("click", function(event){
        event.preventDefault();
        // Passer la valeur "En lecture" à 1
        // Open Formulaire de sortie
        window.open('formulaire_final.html');
    });
    placerpopup();
};

// Permet d'afficher un pop-up pour choisir entre le formulaire de sortie ou le workflow
function afficherpopup3(id){
    afficherpopup();
    const btngauche = document.getElementById("btngauche");
    btngauche.innerHTML = "Edition Formulaire de sortie";
    btngauche.addEventListener("click", function(event){
        event.preventDefault();
        // Passer la valeur "En lecture" à 1
        // Open Formulaire de sortie
        window.open('formulaire_final.html');
    });
    const btndroit = document.getElementById("btndroit");
    btndroit.innerHTML = "Accès workflow";
    btndroit.addEventListener("click", function(event){
        event.preventDefault();
        // Passer la valeur "En lecture" à 1
        // Open Workflow
        window.open('workflow.html'); // Ouvre le workflow dans un nouvel onglet
    });
    placerpopup();
};

// Factorisation de la création d'un pop-up vierge, mobile, au centre du browser
function afficherpopup(){
    const ecranpourpopup = document.createElement("div");
    ecranpourpopup.setAttribute("id", "ecranpourpop-up");
    ecranpourpopup.addEventListener('click', function(event){ // En cliquant à côté du pop-up celui-ci disparait
        event.preventDefault();
        document.getElementById("espacedetravaille").removeChild(ecranpourpopup);
    });
    const popup = document.createElement("div");
    popup.setAttribute("id", "pop-up");
    popup.addEventListener('click', function(event){ // Cliquer dans le pop-up ne doit pas le fermer
        event.preventDefault();
        event.stopPropagation();
    });
    const popupgauche = document.createElement("div"); // Crée les deux zones du pop-up
    popupgauche.setAttribute("id", "popupgauche")
    const popupdroit = document.createElement("div");
    popupdroit.setAttribute("id", "popupdroite")

    const btngauche = document.createElement("btn"); // Crée les deux boutons du pop-up (vides)
    btngauche.setAttribute("id", "btngauche");
    btngauche.setAttribute("class", "btn");
    const btndroit = document.createElement("btn");
    btndroit.setAttribute("id", "btndroit");
    btndroit.setAttribute("class", "btn");

    popupgauche.appendChild(btngauche);
    popupdroit.appendChild(btndroit);
    popup.appendChild(popupgauche);
    popup.appendChild(popupdroit);
    ecranpourpopup.appendChild(popup);
    document.getElementById("espacedetravaille").appendChild(ecranpourpopup);

    // placerpopup();
};

// Permet aux pop-up de rester au centre de l'écran
window.addEventListener('scroll', function(){
    placerpopup();
});

window.addEventListener('resize', function(){
    placerpopup();
});

function placerpopup(){
    const ecranpourpopup = document.getElementById("ecranpourpop-up");
    const popup = document.getElementById("pop-up");

    ecranpourpopup.style.top = window.pageYOffset + "px";
    ecranpourpopup.style.left = document.getElementById("nav-bar").offsetWidth + "px";

    ecranpourpopup.style.height = window.innerHeight - document.getElementById("header").offsetHeight + "px";
    ecranpourpopup.style.width = 0.982*(window.innerWidth - document.getElementById("nav-bar").offsetWidth) + "px";
};

// Permet à la page d'afficher le workflow
function afficherworkflow(id){};