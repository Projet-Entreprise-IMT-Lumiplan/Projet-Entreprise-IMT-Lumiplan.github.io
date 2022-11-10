// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("donneeOutils.json");
const data = await reponse.json();
const logiciels = data.data;

// Création des fiches produits
for (let i = 0; i < logiciels.length; i++) {
	console.log(i);
	// Récupération de l'élément du DOM qui accueillera les fiches
	const sectionFiches = document.querySelector(".fiches");

	// Création d’une balise dédiée à une pièce automobile
	const pieceElement = document.createElement("button");
	pieceElement.type = "button";
	pieceElement.setAttribute('class', "btn btn-light article");
    pieceElement.setAttribute('data-toggle' , "modal");
    pieceElement.setAttribute('data-target' , "#exampleModal");
	pieceElement.setAttribute('data-logiciel', logiciels[i].Identifiant)

	// On crée l’élément img.
	const imageElement = document.createElement("img");
	// On accède à l’indice i de la liste logiciels pour configurer la source de l’image.
	imageElement.src = "./Frames_Icones/" + logiciels[i].Outils + '.png';

	console.log(imageElement);
	// On rattache l’image à pieceElement (la balise article)
	pieceElement.appendChild(imageElement);

	// Idem pour le nom, le prix et la catégorie ...

	const nomElement = document.createElement("h2");
	nomElement.innerText = logiciels[i].Outils;
	pieceElement.appendChild(nomElement);

	/* const prixElement = document.createElement("p");
	prixElement.innerText = "Prix : " + logiciels[i].prix + " €"
		+ " ("
		+ (logiciels[i].prix < 35 ? "€" : "€€€")
		+ ")";
	pieceElement.appendChild(prixElement);

	const categorieElement = document.createElement("p");
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

/* // Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
	const logicielsReordonnees = Array.from(logiciels);
	logicielsReordonnees.sort(function (a, b) {
		return a.prix - b.prix;
	});
	console.log(logicielsReordonnees);
}); */

$('#exampleModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var index = button.data('logiciel')-1 // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text(logiciels[index].Outils)

	const newBody = document.createElement("div");
	for (const [key, value] of Object.entries(logiciels[index])) {
		
		//item.innerText = logiciels[index][i];
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


