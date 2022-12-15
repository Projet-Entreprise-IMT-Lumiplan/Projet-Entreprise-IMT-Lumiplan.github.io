//Récupération des données de la firebase database

import { getDatabase, ref, set, child, update, remove, onValue, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {db} from '../index.js';
const dbRef = ref(db);

get(child(dbRef,'dataOutils')).then((snapshot) => {
  //On balaie la liste des outils de la base de données
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

    const exampleModal = document.getElementById("exampleModal");
    exampleModal.addEventListener("show.bs.modal", (event) => {
        // Button that triggered the modal
        const button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        const index = button.getAttribute("data-bs-logiciel") - 1;

        // TITRE
        const modalTitle = exampleModal.querySelector(".modal-title");
        modalTitle.textContent = snapshot.child(""+index+"Outils").val;

        //INFOS
        const modalBodyInfos = exampleModal.querySelector(".infoTab");
        modalBodyInfos.innerHTML = "";
        modalBodyInfos.setAttribute("class", "modal-body infoTab");
        const newFormInfos = document.createElement("form");

        snapchot.forEach(([key, value]) => {
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
  });

  modalBodyInfos.append(newFormInfos);
});

}).catch((error) => {
    console.log("error");
});
