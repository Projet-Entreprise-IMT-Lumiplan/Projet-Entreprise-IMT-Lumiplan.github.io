import {getDatabase, ref, set, child, update, remove, onValue, get } from "firebase/database";
import {db} from "../index.js"

const firebaseRef = ref(db, "dataEmployesOutils");
get(firebaseRef, function(snapshot) {
  snapshot.forEach(function(element) { //element.value.prenom pour aller chercher le prenom
    console.log(element.val()["Prenom"]);
  })
});

// $ : toute valeur devient un string
// espace :
