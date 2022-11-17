// Récupération des données depuis le fichier JSON
const reponse = await fetch("donneeOutils.json");
const data = await reponse.json();
const logiciels = data.data;

const reponseContrats = await fetch("donneeContrats.json");
const dataContrats = await reponseContrats.json();
const contrats = dataContrats.data;

// Création des fiches logiciels
for (let i = 0; i < logiciels.length; i++) {
	console.log(i);
	// Récupération de l'élément du DOM qui accueillera les fiches
	const sectionFiches = document.querySelector(".fiches");

	// Création d’un bouton qui ouvre une modale relié à un index
	const pieceElement = document.createElement("button");
	pieceElement.type = "button";
	pieceElement.setAttribute('class', "btn btn-light article");
    pieceElement.setAttribute('data-bs-toggle' , "modal");
    pieceElement.setAttribute('data-bs-target' , "#exampleModal");
	pieceElement.setAttribute('data-bs-logiciel', logiciels[i].Identifiant)

	// On crée l’élément img.
	const imageElement = document.createElement("img");
	// On accède à l’indice i de la liste logiciels pour configurer la source de l’image.
	imageElement.src = "./Frames_Icones/" + logiciels[i].Outils + '.png';
	// On rattache l’image à pieceElement (la balise article)
	pieceElement.appendChild(imageElement);

	// Idem

	const nomElement = document.createElement("h2");
	nomElement.innerText = logiciels[i].Outils;
	pieceElement.appendChild(nomElement);
	sectionFiches.appendChild(pieceElement);
}


  const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const index = button.getAttribute('data-bs-logiciel') - 1
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  modalTitle.textContent = logiciels[index].Outils

  //INFOS
  const modalBodyInfos = exampleModal.querySelector('.infoTab');
  modalBodyInfos.innerHTML=''
  modalBodyInfos.setAttribute('class','modal-body infoTab')
  const newFormInfos = document.createElement("form");
  //newFormInfos.setAttribute('class','form-horizontal')

  for (const [key, value] of Object.entries(logiciels[index])) {
		
	const newItem = document.createElement("div");
	newItem.setAttribute('class','mb-3');
	const newLabel = document.createElement("label");
	newLabel.setAttribute('for',key);
	newLabel.setAttribute('class','control-label text-primary');
	newLabel.innerText = key + ' : ';

	const newInput = document.createElement("input");
	newInput.setAttribute('type',key);
	newInput.setAttribute('class','form-control');
	newInput.setAttribute('id','input-${key}')
	newInput.value = value;

	newItem.appendChild(newLabel);
	newItem.appendChild(newInput)
	newFormInfos.append(newItem)
}
modalBodyInfos.append(newFormInfos);

//CONTRATS

const modalBodyContrats = exampleModal.querySelector('.contratTab');
modalBodyContrats.innerHTML=''
modalBodyContrats.setAttribute('class','modal-body contratTab')
const newFormContrats = document.createElement("form");

for (const [key, value] of Object.entries(contrats[index])) {
	  
  const newItem = document.createElement("div");
  newItem.setAttribute('class','mb-3');
  const newLabel = document.createElement("label");
  newLabel.setAttribute('for',key);
  newLabel.setAttribute('class','control-label text-primary');
  newLabel.innerText = key + ' : '

  const newInput = document.createElement("input");
  newInput.setAttribute('type',key);
  newInput.setAttribute('class','form-control');
  newInput.setAttribute('id','input-${key}')
  newInput.value = value;

  newItem.appendChild(newLabel);
  newItem.appendChild(newInput)
  newFormContrats.append(newItem)
}
modalBodyContrats.append(newFormContrats);

})