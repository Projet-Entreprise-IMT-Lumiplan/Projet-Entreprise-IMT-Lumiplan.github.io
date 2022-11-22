// Import the functions we need from firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
	
// https://firebase.google.com/docs/web/setup#available-libraries
//Connection with our firebase page base on apiKey
 const firebaseConfig = {
 	apiKey: "AIzaSyAqpi_Ngce7eIpiVjYjq3-Kra58mXSSe2I",
    	authDomain: "lumos-4786c.firebaseapp.com",
    	projectId: "lumos-4786c",
   	storageBucket: "lumos-4786c.appspot.com",
    	messagingSenderId: "1048784963409",
    	appId: "1:1048784963409:web:bd290641e2a69b9c4f7570",
	measurementId: "G-KZZDY7FP1E",
	databaseURL: "https://lumos-4786c-default-rtdb.europe-west1.firebasedatabase.app",
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getDatabase();
//export const db = getFirestore(app);
		

/*



// Log out
const logout = async () => {
  await signOut(auth);
}

*/





