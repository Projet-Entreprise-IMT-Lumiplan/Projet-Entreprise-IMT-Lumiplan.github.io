//MENU BAR
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

// FILTRE
let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(event){
    let searchQuery = event.target.value.toLowerCase();
    // console.log(event.target.value)
    // console.log(username.value) 
    //console.log(searchQuery)

    //let allNamesDOMCollection  = document.getElementsByClassName('fiches') // can also use getElementByTagName('li')
    let allNamesDOMCollection  = document.querySelectorAll('section #fiches');
    // console.log(allNamesDOMCollection)
    
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


//IMPORT BDD

// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("employes_outils.json");
const data = await reponse.json();
const collab = data.data;

// Création des fiches produits
for (let i = 0; i < collab.length; i++) {
	console.log(i);
	// Récupération de l'élément du DOM qui accueillera les fiches
	const sectionFiches = document.querySelector(".fiches");

	// Création d’une balise dédiée à une pièce automobile
	const pieceElement = document.createElement("button");
	pieceElement.type = "button";
	pieceElement.setAttribute('class', "btn btn-light article");
    pieceElement.setAttribute('data-toggle' , "modal");
    pieceElement.setAttribute('data-target' , "#exampleModal");
	pieceElement.setAttribute('data-logiciel', collab[i].Nom);
  pieceElement.setAttribute('data-logiciel', collab[i].Prenom);

	// Idem pour le nom, le prix et la catégorie ...

	const nomEntier = document.createElement("h5");
	nomEntier.innerText = collab[i].Nom.toUpperCase()+" "+collab[i].Prenom;
	pieceElement.appendChild(nomEntier);
  

  /*const prenom = document.createElement("h5");
	prenom.innerText = collab[i].Prenom;
	pieceElement.appendChild(prenom);*/

	
	/*const categorieElement = document.createElement("p");
	categorieElement.innerText = logiciels[i].categorie ?? "(aucune catégorie)";
	pieceElement.appendChild(categorieElement);
	const descriptionElement = document.createElement("p");
	descriptionElement.innerText = logiciels[i].description ?? "Pas de description pour le moment.";
	pieceElement.appendChild(descriptionElement);
	const disponibiliteElement = document.createElement("p");
	disponibiliteElement.innerText = logiciels[i].disponibilite ? "En stock" : "Rupture de stock";
	pieceElement.appendChild(disponibiliteElement);
	// On rattache la balise article à la section fiches */
	console.log(pieceElement);
	sectionFiches.appendChild(pieceElement);
}

$('#exampleModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var index = button.data('collab')-1 // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text(collab[index].ID)

	const newBody = document.createElement("div");
	for (const [key, value] of Object.entries(collab[index])) {
		
		//item.innerText = collab[index][i];
		const item = document.createElement("div");
		item.innerText= key + " : " + value;
		newBody.append(item)
		
	}
	console.log(newBody)
	const oldBody = document.getElementsByClassName('modal-body')[0];
	oldBody.innerHTML='';
	oldBody.appendChild(newBody);
	//modal.find('.modal-body input').val(recipient)
  })

