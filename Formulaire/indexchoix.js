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

// Afficher la totalité des formulaires
function afficher(value){
    // On remet toutes les zones à zero
    const zone0 = document.getElementById('zone0');
    const zone1 = document.getElementById('zone1');
    const zone2 = document.getElementById('zone2');
    zone0.innerHTML = null;
    zone1.innerHTML = null;
    zone2.innerHTML = null;

    // Pour chaque collaborateur on vient créer et ajouter son poster à la page web
    for (let i=0; i<value.length; i++){
        const poster = document.createElement("div");
        poster.setAttribute("class", "poster");
        poster.setAttribute("id", value[i]["ID"]);
        // poster.addEventListener("click", function(){
        //     document.getElementById('zone0').innerHTML = poster.id;
        // });
        poster.innerHTML = value[i]["Nom"] + " " + value[i]["Prenom"];
        if(value[i]["Etat"] == 0){
            zone0.appendChild(poster);
        } else if (value[i]["Etat"] == 1){
            zone1.appendChild(poster);
        } else {
            zone2.appendChild(poster);
        }
    }
}

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
            poster.setAttribute("class", "poster");
            poster.innerHTML = value[j]["Nom"] + " " + value[j]["Prenom"];
            if(value[j]["Etat"] == 0){
                zone0.appendChild(poster);
            } else if (value[j]["Etat"] == 1){
                zone1.appendChild(poster);
            } else {
                zone2.appendChild(poster);
        }
        }
    }
}