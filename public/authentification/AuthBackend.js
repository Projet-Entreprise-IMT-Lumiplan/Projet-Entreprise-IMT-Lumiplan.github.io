import { AuthErrorCodes, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {auth,db} from '../index.js';


const txtEmail = document.querySelector('#txtEmail')  
const txtPassword = document.querySelector('#txtPassword')
const signInButton = document.querySelector('#signInButton')
const divAuthState = document.querySelector('#divAuthState')
const lblAuthState = document.querySelector('#lblAuthState')
const divLoginError = document.querySelector('#divLoginError')
const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

//export var user;


const loginEmailPassword = async() => { 
  
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
	
  try{
    const userCredential = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
    //redirection towards the correct folder
    window.location.replace("./Logiciels/index.html");
    /*
    //creation of the user in the database
    var user_data={
      email:txtEmail
    }

    //push to firebase
    dbRef.child('users/' + user.uid )
    */
  }catch(error){
      console.log(error);
      showLoginError(error);
	}
}

signInButton.addEventListener('click', loginEmailPassword);


function getUser(){
  const subscribe = onAuthStateChanged(auth, (currentUser) => {
      var user=currentUser;
      console.log(user);
  })
  return(subscribe);
}
getUser();

export const showLoginState = (user) => {
  lblAuthState.innerHTML = `You're logged in as (uid: ${user.uid}, email: ${user.email}) `
}


//auth.hideLoginError()
