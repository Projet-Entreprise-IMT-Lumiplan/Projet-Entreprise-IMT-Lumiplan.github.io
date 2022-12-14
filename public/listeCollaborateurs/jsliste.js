// Récupération des données depuis le fichier JSON
const reponseCollab = await fetch("EmployesOutils.json");
const dataCollab = await reponseCollab.json();
const collab = dataCollab.data;

// Récupération des données via firebase
/*import {getDatabase, ref, set, child, update, remove, onValue, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {db} from "../index.js";
console.log("Firebase importée");
const dbRef = ref(getDatabase());
get(child(dbRef, 'dataEmployesOutils/${1}/Prenom')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});*/


// Création des fiches collaborateurs
for (let i = 0; i < collab.length; i++) {
  console.log(i);
  // Récupération de l'élément du DOM qui accueillera les fiches
  const sectionFiches = document.querySelector(".fiches");

  // BOUTON
  const pieceElement = document.createElement("button");
  pieceElement.type = "button";
  pieceElement.setAttribute("class", "btn btn-light article");
  pieceElement.setAttribute("data-bs-toggle", "modal");
  pieceElement.setAttribute("data-bs-target", "#exampleModal");
  pieceElement.setAttribute("data-bs-logiciel", collab[i].Identifiant);

  // TITRE
  const nomElement = document.createElement("h2");
  nomElement.innerText = collab[i].Nom.toUpperCase()+" "+collab[i].Prenom[0].toUpperCase()+collab[i].Prenom.slice(1).toLowerCase();
  pieceElement.appendChild(nomElement);
  sectionFiches.appendChild(pieceElement);
}

const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const index = button.getAttribute("data-bs-logiciel") - 1;

  // TITRE
  const modalTitle = exampleModal.querySelector(".modal-title");
  modalTitle.textContent = collab[i].Nom.toUpperCase()+" "+collab[i].Prenom[0].toUpperCase()+collab[i].Prenom.slice(1).toLowerCase();

  // INFOS
  const modalBodyInfos = exampleModal.querySelector(".infoTab");
  modalBodyInfos.innerHTML = "";
  modalBodyInfos.setAttribute("class", "modal-body infoTab");
  const newFormInfos = document.createElement("form");
  let keys = Object.keys(collab);
  console.log(keys);

  for (const [key, value] of Object.entries(collab[index])) {
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

  // LOGICIELS
  const modalBodyLogiciels = exampleModal.querySelector(".logicielTab");
  modalBodyLogiciels.innerHTML = "";
  modalBodyLogiciels.setAttribute("class", "modal-body logicielTab");
  const newFormLogiciels = document.createElement("form");

  for (const [key, value] of Object.entries(collab[index])) {
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
    newFormLogiciels.append(newItem);
  }
  modalBodyLogiciels.append(newFormLogiciels);
});


// FILTRE
let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(event){
    let searchQuery = event.target.value.toLowerCase();
    // console.log(event.target.value)
    // console.log(username.value) 
    //console.log(searchQuery)

    let allNamesDOMCollection  = document.getElementsByClassName('fiches') // can also use getElementByTagName('li')
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
