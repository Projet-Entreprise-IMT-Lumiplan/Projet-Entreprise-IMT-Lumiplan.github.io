// Import the functions we need from firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getAuth, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
	
 // https://firebase.google.com/docs/web/setup#available-libraries
 
import { 
  hideLoginError, 
  showLoginState, 
  showLoginForm, 
  showApp, 
  showLoginError, 
  signInButton,
  logoutButton,
} from './ui'
 

 //Connection with our firebase page base on apiKey
 const firebaseConfig = {
 	apiKey: "AIzaSyAqpi_Ngce7eIpiVjYjq3-Kra58mXSSe2I",
    	authDomain: "lumos-4786c.firebaseapp.com",
    	projectId: "lumos-4786c",
   	storageBucket: "lumos-4786c.appspot.com",
    	messagingSenderId: "1048784963409",
    	appId: "1:1048784963409:web:bd290641e2a69b9c4f7570",
	measurementId: "G-KZZDY7FP1E"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
		
//connectAuthEmulator(auth, "http://localhost:9899");

const loginEmailPassword = async() => { 
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
	
  try{
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  } catch(error){
      console.log(error)
      showLoginError(error)
	}
	
}

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      showApp()
      showLoginState(user)

      hideLoginError()
      hideLinkError()
    }
    else {
      showLoginForm()
      lblAuthState.innerHTML = `Vous n'êtes pas connectés !`
    }
  })
}

// Log out
const logout = async () => {
  await signOut(auth);
}

signInButton.addEvenListener("click", loginEmailPassword);
logoutButton.addEvenListener("click", logout);

const auth = getAuth(firebaseApp);
monitorAuthState();





