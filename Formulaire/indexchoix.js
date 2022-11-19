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
    .catch(err => document.getElementById('Personne').innerHTML = err);
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
    zone0.innerHTML = null;
    zone1.innerHTML = null;
    zone2.innerHTML = null;

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
            // if (poster.scrollWidth > poster.clientWidth) {
            //     poster.style.fontSize = "xx-small";
            // }
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
            } else {
                poster.addEventListener("click", function(event){
                    event.preventDefault();
                    afficherpopup2(poster.getAttribute("id"));
                })
                zone2.appendChild(poster);
            }
        }
    }
}

// Permet à la page d'afficher le formulaire d'entré
function afficherformulaire(id){
    document.getElementById(id).innerHTML = "On affichera le formulaire à compléter";
};

// Permet d'afficher un pop-up pour choisir entre le formulaire ou le workflow
function afficherpopup1(id){
    document.getElementById(id).innerHTML = "On affiche un pop-up de choix";
    afficherpopup();
};

// Permet d'afficher un pop-up pour choisir entre le formulaire d'entré ou de sortie
function afficherpopup2(id){
    document.getElementById(id).innerHTML = "On affiche un autre pop-up de choix";
    afficherpopup();
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
    ecranpourpopup.appendChild(popup);
    document.getElementById("espacedetravaille").appendChild(ecranpourpopup);
    placerpopup();
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