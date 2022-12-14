// Charger le bon collaborateur à l'ouverture de la page
window.onload = function(){
    fetch('formulairespourgit.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(response => response.ok ? response.json() : null)
    .then(value => afficher(value))
    .catch(err => document.getElementById('Personne').innerHTML = err);
};

function afficher(value){
    for (let j=0; j<value.length; j++){
        if (value[j]["En lecture"] == 1){
            document.getElementById('Personne').innerHTML = value[j]["Nom"] + " " + value[j]["Prenom"] + "\n Contrat : " + value[j]['Code Nature de Contrat'];
            // //modifier le 1 en 0 dans la BDD
            const zone = document.getElementById("zonedaffichage");
            zone.innerHTML = null;

            for (let i=0; i<value.length-value.length+5; i++){
                const newstep = document.createElement("article");
                newstep.setAttribute("class", "tache");

                const rond = document.createElement("div"); // ajoute le rond vide ou plein dans la tache
                newstep.appendChild(rond);

                const progres = document.createElement("p"); // ajoute l'état de la tâche
                progres.setAttribute("class", "etat");
                newstep.append(progres);

                if (i%2 == 0){ //pour le moment on met juste qu'une tache sur 2 est fini il faudra une condition du type : value.tache.done  
                    rond.setAttribute("class", "rondplein");
                    progres.innerHTML = "Tâche Terminée";
                } else {
                    rond.setAttribute("class", "rondvide");
                    progres.innerHTML = "Tâche en Cours...";
                }

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
    }
}