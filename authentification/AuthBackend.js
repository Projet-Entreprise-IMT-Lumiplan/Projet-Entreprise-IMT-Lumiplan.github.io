import { AuthErrorCodes, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {auth} from '../index.js';


const txtEmail = document.querySelector('#txtEmail')  
const txtPassword = document.querySelector('#txtPassword')
const signInButton = document.querySelector('#signInButton')
const logoutButton = document.querySelector('#logoutButton')
const divAuthState = document.querySelector('#divAuthState')
const lblAuthState = document.querySelector('#lblAuthState')
const divLoginError = document.querySelector('#divLoginError')
const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')



const loginEmailPassword = async() => { 
  
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
	
  try{
    const userCredential = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
    console.log(userCredential);
  } catch(error){
      console.log(error);
      showLoginError(error);
	}
}

// Log out
/*const logout = async () => {
  await signOut(auth);
}
*/


signInButton.addEventListener('click', loginEmailPassword);
//logoutButton.addEventListener("click", logout);

/*
export const showLoginState = (user) => {
  lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
}

hideLoginError()
*/