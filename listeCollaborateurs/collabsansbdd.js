// filtre
let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(event){
    let searchQuery = event.target.value.toLowerCase();
    // console.log(event.target.value)
    // console.log(username.value) 
    console.log(searchQuery)

    let allNamesDOMCollection  = document.getElementsByClassName('name') // can also use getElementByTagName('li')
    // console.log(allNamesDOMCollection
    
    for(let i=0;i<allNamesDOMCollection.length;i++){
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
        console.log(searchQuery.length)
        
        //searchQuery == currentName.substring(0,searchQuery.length)
        // 'k' == karl.substring(0,1) (k)
        // this method only search from start
        if(currentName.includes(searchQuery))  
        {
            console.log(currentName)
            allNamesDOMCollection[i].style.display = 'block';
        }   
        else{
            // document.getElementById('result name').style.display = 'none'
            allNamesDOMCollection[i].style.display = 'none';
        }

    }
})




// Récupération des pièces depuis le fichier JSON
/*const reponse = await fetch("employes_outils.json");
const data = await reponse.json();
const logiciels = data.data;

// Création des fiches produits
for (let i = 0; i < collab.length; i++) {
	// Récupération de l'élément du DOM qui accueillera les fiches
	const sectionFiches = document.querySelector(".fiches");
    
	// Création d’une balise dédiée à une pièce automobile
	const pieceElement = document.createElement("article");

	const prenomElement = document.createElement("h2");
	prenomElement.innerText = collab[i].Prenom;
	pieceElement.appendChild(prenomElement);

	const nomElement = document.createElement("h2");
	nomElement.innerText = collab[i].Nom;
	pieceElement.appendChild(nomElement);

	// On rattache la balise article à la section fiches
	sectionFiches.appendChild(pieceElement);
}

// Ajout du listener pour trier les pièces par ordre de prix croissant
/*const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
	const piecesReordonnees = Array.from(pieces);
	piecesReordonnees.sort(function (a, b) {
		return a.prix - b.prix;
	});
	console.log(piecesReordonnees);
});

function addItemsToList(courseName, institute) {
      var ul = document.getElementById("Certificates-List");

      var _courseName = document.createElement("li");
      var _institute = document.createElement("li");

      _courseName.innerHTML = "CourseName: " + courseName;
      _institute.innerHTML = "Institute: " + institute;

      ul.appendChild(_courseName);
      ul.appendChild(_institute);
 };*/

/*function FetchAllData() {
      firebase
        .database()
        .ref("Certificates-List")
        .once("value", function (snapshot) {
          snapshot.forEach(function (ChildSnapshot) {
            let courseName = ChildSnapshot.val().courseName;
            let institute = ChildSnapshot.val().institute;
            addItemsToList(courseName, institute);
          });
        });
 };*/
