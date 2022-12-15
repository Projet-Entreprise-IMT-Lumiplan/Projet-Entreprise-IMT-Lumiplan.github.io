import { AuthErrorCodes, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {auth,db} from '../index.js';


const txtEmail = document.querySelector('#txtEmail')  
const txtPassword = document.querySelector('#txtPassword')
const signInButton = document.querySelector('#signInButton')
const lblAuthState = document.querySelector('#lblAuthState')

//login de l'utilisateur
const loginEmailPassword = async() => { 
  
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
	
  try{
    const userCredential = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
    //redirection vers la page de logiciels
    window.location.replace("./Logiciels/index.html");
  }catch(error){
      console.log(error);
      showLoginError(error);
	}
}

//listener boutton log in 
signInButton.addEventListener('click', loginEmailPassword);

export const showLoginState = (user) => {
  lblAuthState.innerHTML = `You're logged in as (uid: ${user.uid}, email: ${user.email}) `
}


//auth.hideLoginError()
