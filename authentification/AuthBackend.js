import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../index.js';


const txtEmail = document.querySelector('#txtEmail')  
const txtPassword = document.querySelector('#txtPassword')
const signInButton = document.querySelector('#signInButton')
const divAuthState = document.querySelector('#divAuthState')
const lblAuthState = document.querySelector('#lblAuthState')
const divLoginError = document.querySelector('#divLoginError')
const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')



const loginEmailPassword = async() => { 
  
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
	
  try{
    const userCredential = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
    //redirection towards the correct folder
    window.location.replace("./Logiciels/index.html");

  } catch(error){
      console.log(error);
      showLoginError(error);
	}
}




signInButton.addEventListener('click', loginEmailPassword);



export const showLoginState = (user) => {
  lblAuthState.innerHTML = `You're logged in as (uid: ${user.uid}, email: ${user.email}) `
}


//auth.hideLoginError()
