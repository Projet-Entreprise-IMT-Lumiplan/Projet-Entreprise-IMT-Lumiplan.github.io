// Récupération des données depuis le fichier JSON
const reponseCollab = await fetch("EmployesOutils.json");
const dataCollab = await reponseCollab.json();
const collab = dataCollab.data;

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
