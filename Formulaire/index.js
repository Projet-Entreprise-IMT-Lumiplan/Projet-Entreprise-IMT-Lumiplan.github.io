
document.getElementById('form-to-check').addEventListener('submit', function(event){
    event.preventDefault();
    fetch('EmployesOutils.json', {
        // method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        // body: JSON.stringify({value: 3526})
    })
    .then(response => response.ok ? response.json(): null)
    .then(value => afficher(value))
    .catch(err => document.getElementById('Personne').innerHTML = err);
});

function afficher(value){
    document.getElementById('Personne').innerHTML = value[0].Nom + " " + value[0].Prenom + "\n Contrat : " + value[0]['Code Nature de Contrat'];
    const zone = document.getElementById("zonedaffichage");
    zone.innerHTML = null;

    for (let i=0; i<value.length-value.length+4; i++){
        const newstep = document.createElement("article");
        newstep.setAttribute("class", "tache");

        const rond = document.createElement("div");
        newstep.appendChild(rond);
        // if (value.tache.done){
        //     rond.setAttribute("class", "rondplein");
        // }
        rond.setAttribute("class", "rondvide");

        const progres = document.createElement("p");
        progres.setAttribute("class", "etat");
        progres.innerHTML = "Tâche en Cours...";
        newstep.append(progres);

        const donnees = document.createElement("div");
        donnees.setAttribute("class", "donnees")
        const nom = document.createElement("div");
        nom.setAttribute("class", "nomstep");
        const responsable = document.createElement("div");
        responsable.setAttribute("class", "respostep");
        const commentaire = document.createElement("div");
        commentaire.setAttribute("class", "comstep");
        donnees.appendChild(nom);
        donnees.appendChild(responsable);
        donnees.appendChild(commentaire);
        newstep.appendChild(donnees);
        nom.innerHTML = "Etape : Installation " + i;
        responsable.innerHTML = "Intégrateur : Entreprise " + i;
        commentaire.innerHTML = "Rien de spécial à ajouter";
        
        zone.appendChild(newstep);
    }
}