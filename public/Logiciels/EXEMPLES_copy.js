import{db} from '../index.js';
import{ref,get,child} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

// Récupération des données depuis le fichier JSON
const reponse = await fetch("donneeOutils.json");
const data = await reponse.json();
const logiciels = data.data;

const reponseContrats = await fetch("donneeContrats.json");
const dataContrats = await reponseContrats.json();
const contrats = dataContrats.data;


//Récupération des données de la firebase database

const dbRef=ref(db);

get(child(dbRef, 'dataOutils')).then((snapshot) => {
   snapshot.forEach((idOutil) => {
    const sectionFiches = document.querySelector(".fiches");
    // BOUTON
  const pieceElement = document.createElement("button");
  pieceElement.type = "button";
  pieceElement.setAttribute("class", "btn btn-light article");
  pieceElement.setAttribute("data-bs-toggle", "modal");
  pieceElement.setAttribute("data-bs-target", "#exampleModal");
  pieceElement.setAttribute("data-bs-logiciel", idOutil.val());

  // ICONE
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "position-relative");
  const imageElement = document.createElement("img");
  imageElement.src = "./Frames_Icones/" + idOutil.child("Outils").val() + ".png";
  console.log(imageElement.src);
  imageContainer.appendChild(imageElement);
  pieceElement.appendChild(imageContainer);

  // TITRE
  const nomElement = document.createElement("h2");
  nomElement.innerText = idOutil.child("Outils").val();
  pieceElement.appendChild(nomElement);
  sectionFiches.appendChild(pieceElement);
   });
 
}).catch((error) => {
  console.log("error");
});


/*
// Création des fiches logiciels
for (let i = 0; i < logiciels.length; i++) {
  console.log(i);
  // Récupération de l'élément du DOM qui accueillera les fiches
  const sectionFiches = document.querySelector(".fiches");

  // BOUTON
  const pieceElement = document.createElement("button");
  pieceElement.type = "button";
  pieceElement.setAttribute("class", "btn btn-light article");
  pieceElement.setAttribute("data-bs-toggle", "modal");
  pieceElement.setAttribute("data-bs-target", "#exampleModal");
  pieceElement.setAttribute("data-bs-logiciel", logiciels[i].Identifiant);

  // ICONE
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "position-relative");
  const imageElement = document.createElement("img");
  imageElement.src = "./Frames_Icones/" + logiciels[i].Outils + ".png";
  imageContainer.appendChild(imageElement);
  pieceElement.appendChild(imageContainer);

  // TITRE
  const nomElement = document.createElement("h2");
  nomElement.innerText = logiciels[i].Outils;
  pieceElement.appendChild(nomElement);
  sectionFiches.appendChild(pieceElement);

  //NOTIF
  const notif = document.createElement("span");
  let content = 0;
  for (const [key, value] of Object.entries(contrats[i])) {
    if (value.length > 0) {
      content++;
    }
  }
  if (content<7) {
	notif.setAttribute('class','position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger');
  }else{
	notif.setAttribute('class','position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary');
  }
  notif.innerText = content;
  imageContainer.appendChild(notif);
}
*/
const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const index = button.getAttribute("data-bs-logiciel") - 1;

  // TITRE
  const modalTitle = exampleModal.querySelector(".modal-title");
  modalTitle.textContent = logiciels[index].Outils;

  //INFOS
  const modalBodyInfos = exampleModal.querySelector(".infoTab");
  modalBodyInfos.innerHTML = "";
  modalBodyInfos.setAttribute("class", "modal-body infoTab");
  const newFormInfos = document.createElement("form");

  for (const [key, value] of Object.entries(logiciels[index])) {
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "mb-3");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", key);
    newLabel.setAttribute("class", "control-label text-primary");
    newLabel.innerText = key + " : ";

    const newInput = document.createElement("input");
    newInput.setAttribute("type", key);
    newInput.setAttribute("class", "form-control");
    newInput.setAttribute("id", "input-${key}");
    newInput.value = value;

    newItem.appendChild(newLabel);
    newItem.appendChild(newInput);
    newFormInfos.append(newItem);
  }
  modalBodyInfos.append(newFormInfos);

  //CONTRATS
  const modalBodyContrats = exampleModal.querySelector(".contratTab");
  modalBodyContrats.innerHTML = "";
  modalBodyContrats.setAttribute("class", "modal-body contratTab");
  const newFormContrats = document.createElement("form");

  for (const [key, value] of Object.entries(contrats[index])) {
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "mb-3");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", key);
    newLabel.setAttribute("class", "control-label text-primary");
    newLabel.innerText = key + " : ";

    const newInput = document.createElement("input");
    newInput.setAttribute("type", key);
    newInput.setAttribute("class", "form-control");
    newInput.setAttribute("id", "input-${key}");
    newInput.value = value;

    newItem.appendChild(newLabel);
    newItem.appendChild(newInput);
    newFormContrats.append(newItem);
  }
  modalBodyContrats.append(newFormContrats);
});
